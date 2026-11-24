/**
 * WoW Forever - Live Automatic Sync Companion
 * Watches WoW SavedVariables (WoWGuide.lua, BagBrother.lua) in real time.
 * Whenever you type /sync, /reload, or log out in-game, this immediately
 * detects the change and uploads your character data to GitHub Cloud Gist!
 */

const fs = require('fs');
const path = require('path');
const { runSync } = require('./sync');

console.log("========================================================");
console.log(" WoW Forever - Real-Time Live Sync Companion");
console.log(" Watches for in-game /sync, /reload, or logout events");
console.log("========================================================");

let debounceTimer = null;

async function triggerSync(source) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(async () => {
    console.log(`\n[${new Date().toLocaleTimeString()}] Detected game data update (${source})!`);
    console.log(`[*] Syncing live character data to GitHub Cloud Gist...`);
    try {
      const res = await runSync();
      const active = res.characters[res.activeCharacter];
      console.log(`[✓] SUCCESS: ${active.name} (Lvl ${active.level} ${active.class}) synced live!`);
    } catch (e) {
      console.error(`[!] Sync error:`, e.message);
    }
  }, 800);
}

// Initial sync on startup
triggerSync("Startup Initial Check");

// Discover all WTF directories to watch
const candidateAccountDirs = [];
const driveRoots = ['C:', 'D:', 'E:', 'F:'];
const subPaths = [
  'Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account',
  'Program Files\\World of Warcraft\\_forever_\\WTF\\Account',
  'World of Warcraft\\_forever_\\WTF\\Account',
  'Games\\World of Warcraft\\_forever_\\WTF\\Account'
];

for (const drive of driveRoots) {
  for (const sp of subPaths) {
    const full = path.join(drive, '\\', sp);
    if (fs.existsSync(full)) candidateAccountDirs.push(full);
  }
}

let watchedCount = 0;
for (const accBase of candidateAccountDirs) {
  try {
    const entries = fs.readdirSync(accBase, { withFileTypes: true });
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const svDir = path.join(accBase, ent.name, 'SavedVariables');
      if (fs.existsSync(svDir)) {
        fs.watch(svDir, (eventType, filename) => {
          if (filename && (filename.includes('WoWGuide') || filename.includes('BagBrother') || filename.includes('Questie'))) {
            triggerSync(`SavedVariables/${filename}`);
          }
        });
        watchedCount++;
        console.log(`    ✓ Watching: ${svDir}`);
      }
    }
  } catch (_) {}
}

if (watchedCount === 0) {
  console.log(`[!] Note: No WTF SavedVariables folders found automatically. Running on timer every 10s.`);
  setInterval(() => {
    triggerSync("Periodic Polling");
  }, 10000);
} else {
  console.log(`\n[✓] Live Companion Active! Keep this window open while playing.`);
  console.log(`    Every time you /reload, /sync, or change gear, your character syncs automatically!`);
}

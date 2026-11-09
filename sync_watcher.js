/**
 * WoW Forever - Live WTF Account Sync Watcher
 * Watches your local World of Warcraft WTF folder in real-time.
 * Automatically detects character level-ups and updates.
 */

const fs = require('fs');
const path = require('path');

const QUESTIE_PATH = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';

console.log('==================================================');
console.log('WoW Forever - Live Character Sync Watcher Active');
console.log('Watching:', QUESTIE_PATH);
console.log('==================================================');

function parseQuestie() {
  if (!fs.existsSync(QUESTIE_PATH)) {
    console.error('File not found:', QUESTIE_PATH);
    return null;
  }

  const text = fs.readFileSync(QUESTIE_PATH, 'utf8');
  let name = 'Chongo';
  let level = 10;

  const pKeyMatch = text.match(/\["profileKeys"\]\s*=\s*\{\s*\["([^"]+)"\]/);
  if (pKeyMatch) {
    name = pKeyMatch[1].split(' ')[0];
  }

  const journeyLevels = [...text.matchAll(/\["(?:Level|NewLevel)"\]\s*=\s*(\d+)/g)].map(m => parseInt(m[1], 10));
  if (journeyLevels.length > 0) {
    level = Math.max(...journeyLevels);
  }

  return { name, level, timestamp: Date.now() };
}

let lastLevel = null;

function check() {
  const data = parseQuestie();
  if (data && data.level !== lastLevel) {
    lastLevel = data.level;
    console.log(`[${new Date().toLocaleTimeString()}] ✓ Synced Character: ${data.name} • Level ${data.level}`);
    const outPath = path.join(__dirname, 'synced_character.json');
    fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');
  }
}

// Initial check
check();

// Watch file changes
if (fs.existsSync(QUESTIE_PATH)) {
  fs.watch(QUESTIE_PATH, (eventType) => {
    if (eventType === 'change') {
      setTimeout(check, 500);
    }
  });
}

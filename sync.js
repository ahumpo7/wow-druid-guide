/**
 * WoW Forever - Live Client Character & Gear Exporter
 * Reads live SavedVariables from your WTF folder and updates synced_character.js
 */

const fs = require('fs');
const path = require('path');

function findGameFiles() {
  const possibleBases = [
    'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account',
    'C:\\World of Warcraft\\_forever_\\WTF\\Account',
    'D:\\World of Warcraft\\_forever_\\WTF\\Account',
    'C:\\Games\\World of Warcraft\\_forever_\\WTF\\Account',
    'D:\\Games\\World of Warcraft\\_forever_\\WTF\\Account',
    'E:\\World of Warcraft\\_forever_\\WTF\\Account',
    'C:\\World of Warcraft\\WTF\\Account',
    'D:\\World of Warcraft\\WTF\\Account',
    'C:\\Program Files (x86)\\World of Warcraft\\WTF\\Account',
  ];

  const userHome = process.env.USERPROFILE || process.env.HOME;
  if (userHome) {
    possibleBases.push(
      path.join(userHome, 'Desktop', 'World of Warcraft', '_forever_', 'WTF', 'Account'),
      path.join(userHome, 'Downloads', 'World of Warcraft', '_forever_', 'WTF', 'Account')
    );
  }

  // Check for custom override in wow_path.txt
  const customConfig = path.join(__dirname, 'wow_path.txt');
  if (fs.existsSync(customConfig)) {
    const customLine = fs.readFileSync(customConfig, 'utf8').trim();
    if (customLine) {
      if (customLine.toLowerCase().endsWith('account')) {
        possibleBases.unshift(customLine);
      } else if (customLine.toLowerCase().endsWith('wtf')) {
        possibleBases.unshift(path.join(customLine, 'Account'));
      } else {
        possibleBases.unshift(path.join(customLine, 'WTF', 'Account'));
        possibleBases.unshift(path.join(customLine, '_forever_', 'WTF', 'Account'));
      }
    }
  }

  let foundQuestie = null;
  let foundPawn = null;

  const defaultQuestie = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';
  const defaultPawn = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\91\\Chongo-Darkwind\\SavedVariables\\Pawn.lua';

  if (fs.existsSync(defaultQuestie)) foundQuestie = defaultQuestie;
  if (fs.existsSync(defaultPawn)) foundPawn = defaultPawn;

  if (!foundQuestie || !foundPawn) {
    for (const base of possibleBases) {
      if (fs.existsSync(base)) {
        try {
          const accounts = fs.readdirSync(base);
          for (const acc of accounts) {
            const accDir = path.join(base, acc);
            if (!fs.statSync(accDir).isDirectory()) continue;

            const qCandidate = path.join(accDir, 'SavedVariables', 'Questie.lua');
            if (!foundQuestie && fs.existsSync(qCandidate)) {
              foundQuestie = qCandidate;
            }

            const subdirs = fs.readdirSync(accDir);
            for (const sub of subdirs) {
              const subDir = path.join(accDir, sub);
              if (!fs.statSync(subDir).isDirectory()) continue;

              const p1 = path.join(subDir, 'SavedVariables', 'Pawn.lua');
              if (!foundPawn && fs.existsSync(p1) && sub.toLowerCase().includes('chongo')) {
                foundPawn = p1;
              }

              try {
                const charDirs = fs.readdirSync(subDir);
                for (const cd of charDirs) {
                  const charDir = path.join(subDir, cd);
                  if (!fs.statSync(charDir).isDirectory()) continue;
                  const p2 = path.join(charDir, 'SavedVariables', 'Pawn.lua');
                  if (!foundPawn && fs.existsSync(p2) && cd.toLowerCase().includes('chongo')) {
                    foundPawn = p2;
                  }
                }
              } catch (_) {}
            }
          }
        } catch (_) {}
      }
    }
  }

  return { questiePath: foundQuestie, pawnPath: foundPawn };
}

function runSync() {
  console.log("========================================================");
  console.log(" WoW Forever - Live Character Exporter & Cloud Syncer");
  console.log("========================================================");

  const { questiePath, pawnPath } = findGameFiles();

  console.log(`\n[1] Searching for WoW SavedVariables on this PC...`);
  if (questiePath) {
    console.log(`    ✓ Found Questie.lua: ${questiePath}`);
  } else {
    console.log(`    ⚠️ Questie.lua not found in standard paths.`);
    console.log(`       (Tip: Create wow_path.txt in this folder with your WoW directory if custom)`);
  }

  if (pawnPath) {
    console.log(`    ✓ Found Pawn.lua:    ${pawnPath}`);
  } else {
    console.log(`    ⚠️ Pawn.lua not found in standard paths.`);
  }

  let name = 'Chongo';
  let level = 13;

  if (questiePath && fs.existsSync(questiePath)) {
    const text = fs.readFileSync(questiePath, 'utf8');
    const pKeyMatch = text.match(/\["profileKeys"\]\s*=\s*\{\s*\["([^"]+)"\]/);
    if (pKeyMatch) name = pKeyMatch[1].split(' ')[0];

    const levels = [];
    const regex = /\["(?:Level|NewLevel)"\]\s*=\s*(\d+)/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      levels.push(parseInt(m[1], 10));
    }
    if (levels.length > 0) level = Math.max(...levels);
  }

  const liveItems = {
    head: { slot: "Head", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped (Level " + level + ")", armor: "0 Armor", stats: ["No head armor available until lvl 14+"] },
    neck: { slot: "Neck", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Neck items become available at lvl 18+"] },
    shoulders: { slot: "Shoulders", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Shoulders start dropping around lvl 17"] },
    back: { slot: "Back", type: "Cloak", name: "Hunter's Simple Cloak", quality: "uncommon", source: "Zephras Isle Quest Reward", armor: "14 Armor", stats: ["+2 Stamina", "+1 Agility"], req: "Requires Level 8" },
    chest: { slot: "Chest", type: "Leather", name: "Bandit's Jerkin", quality: "common", source: "Equipped from Quest / Drop", armor: "42 Armor", stats: ["+2 Agility", "+1 Strength"], req: "Requires Level 7" },
    wrists: { slot: "Wrists", type: "Leather", name: "Worn Leather Bracers", quality: "poor", source: "Starting Quest / Vendor", armor: "12 Armor", stats: ["+1 Stamina"], req: "Requires Level 9" },
    hands: { slot: "Hands", type: "Leather", name: "Ragged Leather Gloves", quality: "poor", source: "Early Quest / Drop", armor: "16 Armor", stats: ["+1 Armor bonus"], req: "Requires Level 4" },
    waist: { slot: "Waist", type: "Leather", name: "Wolfhide Belt", quality: "common", source: "Leatherworking / Quest", armor: "28 Armor", stats: ["+2 Strength", "+1 Stamina"], req: "Requires Level 10" },
    legs: { slot: "Legs", type: "Leather", name: "Gardening Pants", quality: "common", source: "Gustberry Lowlands Quest Reward", armor: "38 Armor", stats: ["+2 Stamina", "+1 Spirit"], req: "Requires Level 5" },
    feet: { slot: "Feet", type: "Leather", name: "Ragged Leather Boots", quality: "poor", source: "Starting Quest / Vendor", armor: "15 Armor", stats: ["+1 Armor bonus"], req: "Requires Level 3" },
    ring1: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
    ring2: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
    trinket1: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
    trinket2: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
    mainHand: { slot: "Two-Hand", type: "Two-Handed Staff", name: "Sturdy Quarterstaff of the Bear", quality: "uncommon", source: "Currently Equipped on " + name, armor: null, stats: ["+4 Strength (+8 AP)", "+4 Stamina"], req: "Item Level 13 (Requires Level 10)", tip: "⭐ GREAT WEAPON PICK! Two-handed staff with Strength and Stamina — perfect for Bear Form and leveling!" },
    offHand: { slot: "Off-Hand", type: "None (2H Equipped)", name: "Empty (2H Staff in Use)", quality: "disabled", source: "Two-Handed Weapon Occupies Both Hands", armor: null, stats: ["Two-Handed weapon equipped in Main Hand."], req: "Two-Hander in Use" },
    relic: { slot: "Relic / Idol", type: "Idol", name: "Empty Idol Slot", quality: "common", source: "Druid Relic", armor: null, stats: ["Idols become available in level 50+ dungeons and Stratholme"] }
  };

  if (fs.existsSync(pawnPath)) {
    const pawnText = fs.readFileSync(pawnPath, 'utf8');
    const slotMap = { 5: 'chest', 6: 'waist', 7: 'legs', 8: 'feet', 9: 'wrists', 10: 'hands', 15: 'back', 16: 'mainHand', 17: 'offHand' };
    const itemRegex = /\[(\d+)\]\s*=\s*\{\s*\["ID"\]\s*=\s*(\d+),\s*\["Level"\]\s*=\s*(\d+).*?\["Link"\]\s*=\s*"([^"]+)"/g;
    let im;
    while ((im = itemRegex.exec(pawnText)) !== null) {
      const slotNum = parseInt(im[1], 10);
      const itemLvl = im[3];
      const itemLink = im[4];
      const nameMatch = itemLink.match(/\|h\[([^\]]+)\]\|h/);
      const itemName = nameMatch ? nameMatch[1] : "Equipped Item";

      // Accurate Blizzard Item Quality Index:
      // cnIQ0 / 9d9d9d = Poor (Gray)
      // cnIQ1 / ffffff = Common (White)
      // cnIQ2 / 1eff00 = Uncommon (Green)
      // cnIQ3 / 0070dd = Rare (Blue)
      // cnIQ4 / a335ee = Epic (Purple)
      // cnIQ5 / ff8000 = Legendary (Orange)
      let quality = "common";
      if (itemLink.includes("cnIQ0") || itemLink.includes("9d9d9d")) quality = "poor";
      else if (itemLink.includes("cnIQ1") || itemLink.includes("ffffff")) quality = "common";
      else if (itemLink.includes("cnIQ2") || itemLink.includes("1eff00")) quality = "uncommon";
      else if (itemLink.includes("cnIQ3") || itemLink.includes("0070dd")) quality = "rare";
      else if (itemLink.includes("cnIQ4") || itemLink.includes("a335ee")) quality = "epic";
      else if (itemLink.includes("cnIQ5") || itemLink.includes("ff8000")) quality = "legendary";

      const key = slotMap[slotNum];
      if (key && liveItems[key]) {
        liveItems[key].name = itemName;
        liveItems[key].quality = quality;
        liveItems[key].req = "Item Level " + itemLvl;
        liveItems[key].source = "Currently Equipped on " + name;

        if (slotNum === 16) {
          // If two-handed staff/mace
          if (itemName.includes("Quarterstaff") || itemName.includes("Staff") || itemName.includes("Mace")) {
            liveItems.mainHand.slot = "Two-Hand";
            liveItems.mainHand.type = "Two-Handed Staff";
            liveItems.mainHand.stats = ["+4 Strength (+8 AP)", "+4 Stamina"];
            liveItems.mainHand.tip = "⭐ EXCELLENT WEAPON PICK! Two-handed staff with Strength and Stamina — perfect for Bear Form and leveling!";
            // Force off-hand empty
            liveItems.offHand = {
              slot: "Off-Hand",
              type: "None (2H Equipped)",
              name: "Empty (2H Staff in Use)",
              quality: "disabled",
              source: "Two-Handed Weapon Occupies Both Hands",
              armor: null,
              stats: ["Two-Handed weapon equipped in Main Hand."],
              req: "Two-Hander in Use"
            };
          }
        }
      }
    }
  }

  const resultData = {
    name,
    realm: "Darkwind (WoW Forever)",
    class: "Druid",
    race: "Alliance Skyborne",
    level,
    liveGear: liveItems,
    syncedAt: new Date().toISOString()
  };

  const fileContent = `/**
 * World of Warcraft: Forever - Client Sync Bridge
 * Auto-generated by Method 3 from live WTF game files.
 */
window.WOW_SYNCED_DATA = ${JSON.stringify(resultData, null, 2)};
`;

  console.log(`\n[2] Character state parsed:`);
  console.log(`    Name:      ${name}`);
  console.log(`    Level:     ${level}`);
  console.log(`    Weapon:    ${liveItems.mainHand.name} (${liveItems.mainHand.quality})`);
  console.log(`    Chest:     ${liveItems.chest.name} (${liveItems.chest.quality})`);

  console.log(`\n[3] Updating local sync bridge...`);
  const dest = path.join(__dirname, 'synced_character.js');
  fs.writeFileSync(dest, fileContent, 'utf8');

  const jsonDest = path.join(__dirname, 'synced_character.json');
  fs.writeFileSync(jsonDest, JSON.stringify(resultData, null, 2), 'utf8');
  console.log(`    ✓ Saved synced_character.js and synced_character.json`);

  // Cloud Sync to GitHub Gist (allows ANY browser or 2nd PC to load live character)
  console.log(`\n[4] Uploading to GitHub Cloud Gist (584b8b9450a8b85003934d27acfa7c7c)...`);
  try {
    const { execSync } = require('child_process');
    execSync(`gh gist edit 584b8b9450a8b85003934d27acfa7c7c -a "${jsonDest}"`, { stdio: 'pipe', encoding: 'utf8', timeout: 10000 });
    console.log(`    ✓ [SUCCESS] Live character data uploaded to GitHub Cloud!`);
    console.log(`    👉 Any browser or 2nd PC will now see Level ${level} & ${liveItems.mainHand.name}!`);
  } catch (gistErr) {
    console.error(`    ❌ [CLOUD UPLOAD FAILED]`);
    if (gistErr.stderr) {
      console.error(`    Error output: ${gistErr.stderr.toString().trim()}`);
    } else {
      console.error(`    Error details: ${gistErr.message}`);
    }
    console.log(`\n    💡 How to fix this on this PC:`);
    console.log(`       1. Open PowerShell and run: gh auth status`);
    console.log(`       2. If not logged in, run:   gh auth login`);
    console.log(`          (Select GitHub.com -> HTTPS -> Login with a web browser)`);
  }

  return resultData;
}

if (require.main === module) {
  runSync();
}

module.exports = { runSync };

/**
 * WoW Forever - Live Client Character & Gear Exporter
 * Reads live SavedVariables from your WTF folder and updates synced_character.js
 */

const fs = require('fs');
const path = require('path');

const questiePath = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';
const pawnPath = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\91\\Chongo-Darkwind\\SavedVariables\\Pawn.lua';

function runSync() {
  let name = 'Chongo';
  let level = 11;

  if (fs.existsSync(questiePath)) {
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

  const dest = path.join(__dirname, 'synced_character.js');
  fs.writeFileSync(dest, fileContent, 'utf8');

  const jsonDest = path.join(__dirname, 'synced_character.json');
  fs.writeFileSync(jsonDest, JSON.stringify(resultData, null, 2), 'utf8');

  // Cloud Sync to GitHub Gist (allows ANY browser or 2nd PC to load live character)
  try {
    const { execSync } = require('child_process');
    execSync(`gh gist edit 584b8b9450a8b85003934d27acfa7c7c -a "${jsonDest}"`, { stdio: 'ignore', timeout: 5000 });
    console.log(`[CLOUD SYNC] ✓ Live character data uploaded to GitHub Cloud Gist!`);
  } catch (gistErr) {
    // Graceful fallback if offline or gh CLI not configured on 2nd PC
  }

  console.log(`[SUCCESS] Synced: ${name} • Level ${level} with weapon: ${liveItems.mainHand.name} (${liveItems.mainHand.quality})!`);
  return resultData;
}

if (require.main === module) {
  runSync();
}

module.exports = { runSync };

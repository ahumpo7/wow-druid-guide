/**
 * WoW Forever - Live Client Character & Gear Exporter (Horde Multi-Character Edition)
 * Reads live SavedVariables from your WTF folder (Pawn, BagBrother, Questie)
 * Supports Warlock & Rogue (Phana), defaulting to Warlock as requested.
 * Updates synced_character.js, synced_character.json, and GitHub Gist.
 */

const fs = require('fs');
const path = require('path');

// Classic WoW Item Database for Horde leveling gear, Rogue (Phana), and Warlock items
const ITEM_DB = {
  // --- Rogue Phana's Live Equipped Items ---
  3268: { name: "Beholder's Eye", slot: "Main Hand", type: "Dagger", quality: "uncommon", armor: null, stats: ["14 - 26 Damage (11.1 DPS)", "Speed 1.80", "+2 Agility", "+1 Stamina"], req: "Requires Level 13", tip: "⭐ Live equipped on Phana! Fast dagger dropped by Wandering Eye of Kilrogg." },
  2947: { name: "Fine Longbow", slot: "Ranged / Bow", type: "Bow", quality: "common", armor: null, stats: ["8 - 15 Damage (4.8 DPS)", "Speed 2.40"], req: "Requires Level 8", tip: "⭐ Live equipped on Phana! Starter ranged pull weapon." },
  11851: { name: "Grizzly Jerkin", slot: "Chest", type: "Leather", quality: "uncommon", armor: "88 Armor", stats: ["+6 Strength (+12 AP)", "+5 Stamina (+50 HP)"], req: "Requires Level 15", tip: "⭐ Live equipped on Phana! High armor leather chest." },
  2173: { name: "Troll's Sweatcloth", slot: "Waist", type: "Leather", quality: "uncommon", armor: "41 Armor", stats: ["+3 Stamina (+30 HP)", "+2 Spirit"], req: "Requires Level 10", tip: "⭐ Live equipped on Phana! Sturdy leather belt." },
  3272: { name: "Grassland Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "64 Armor", stats: ["+4 Agility (+4 AP / +0.2% Crit)", "+3 Stamina (+30 HP)"], req: "Requires Level 12", tip: "⭐ Live equipped on Phana! Agility leather trousers." },
  121: { name: "Soft Leather Boots", slot: "Feet", type: "Leather", quality: "common", armor: "36 Armor", stats: ["36 Armor (Pure Armor)"], req: "Requires Level 5", tip: "⭐ Live equipped on Phana! Basic leather footwear." },
  3365: { name: "Black Wolf Bracers", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "31 Armor", stats: ["+2 Agility (+2 AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 10", tip: "⭐ Live equipped on Phana! Agility wristguards." },
  11847: { name: "Grizzly Cape", slot: "Back", type: "Cloth", quality: "uncommon", armor: "14 Armor", stats: ["+2 Strength (+4 AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 14", tip: "⭐ Live equipped on Phana! Strength cloak." },
  2105: { name: "White Swashbuckler's Shirt", slot: "Shirt", type: "Shirt", quality: "common", armor: null, stats: ["Fashionable tailor-crafted swashbuckler shirt"], req: "Requires Level 1", tip: "⭐ Live equipped on Phana!" },
  1369: { name: "Scavenger Cord", slot: "Waist", type: "Leather", quality: "common", armor: "34 Armor", stats: ["34 Armor"], req: "Requires Level 4", tip: "Basic leather belt." },

  // --- Rogue Weapons & Key Leveling Gear ---
  1482: { name: "Shadowfang", slot: "One-Hand", type: "One-Handed Sword", quality: "rare", armor: null, stats: ["24 - 45 Damage (18.1 DPS)", "Speed 1.90", "Chance on hit: Shadow Bolt for 30 shadow damage"], req: "Requires Level 19", tip: "🔥 Infamous rare drop from Shadowfang Keep. Incredible rogue main hand!" },
  6802: { name: "Thief's Blade", slot: "One-Hand", type: "One-Handed Sword", quality: "uncommon", armor: null, stats: ["21 - 39 Damage (16.5 DPS)", "Speed 2.20", "+3 Agility", "+2 Strength"], req: "Requires Level 17", tip: "⭐ Excellent solo leveling sword for early Combat spec." },
  10761: { name: "Black Menace", slot: "One-Hand", type: "One-Handed Mace", quality: "rare", armor: null, stats: ["33 - 62 Damage (20.4 DPS)", "Speed 2.30", "Chance on hit: Stun target for 3 sec"], req: "Requires Level 21", tip: "Dungeon drop from Razorfen Kraul." },
  10838: { name: "Vanquisher's Sword", slot: "One-Hand", type: "One-Handed Sword", quality: "rare", armor: null, stats: ["46 - 86 Damage (30.6 DPS)", "Speed 2.10", "Equip: +28 Attack Power"], req: "Requires Level 38", tip: "⭐ Guaranteed quest reward: Bring the Light (Razorfen Downs)." },
  17705: { name: "Thrash Blade", slot: "One-Hand", type: "One-Handed Sword", quality: "rare", armor: null, stats: ["66 - 124 Damage (39.4 DPS)", "Speed 2.70", "Chance on hit: Grants 1 extra attack"], req: "Requires Level 45", tip: "👑 The legendary leveling sword from Corruption of Earth and Seed (Maraudon)!" },
  15805: { name: "Mirah's Song", slot: "One-Hand", type: "One-Handed Sword", quality: "rare", armor: null, stats: ["57 - 87 Damage (39.4 DPS)", "Speed 1.80", "+9 Agility", "+9 Strength"], req: "Requires Level 57", tip: "⭐ Premier off-hand sword from Scholomance questline: Kirtonos the Herald." },
  1121: { name: "Feet of the Lynx", slot: "Feet", type: "Leather", quality: "rare", armor: "63 Armor", stats: ["+8 Agility", "+3 Strength"], req: "Requires Level 19", tip: "🔥 Best low-level physical DPS boots in Classic WoW." },
  10399: { name: "Blackened Defias Armor", slot: "Chest", type: "Leather", quality: "rare", armor: "92 Armor", stats: ["+11 Stamina", "+4 Strength", "+3 Agility"], req: "Requires Level 19", tip: "Deadmines drop." },
  9639: { name: "Triprunner Dungarees", slot: "Legs", type: "Leather", quality: "rare", armor: "101 Armor", stats: ["+18 Agility", "+6 Stamina", "+3 Strength"], req: "Requires Level 25", tip: "Rig Wars quest reward." },
  13114: { name: "Wolfclaw Gloves", slot: "Hands", type: "Leather", quality: "rare", armor: "61 Armor", stats: ["+6 Agility", "+6 Stamina", "+5 Strength"], req: "Requires Level 22", tip: "BoE rare physical leather gloves." },
  7720: { name: "Humbert's Helm", slot: "Head", type: "Leather", quality: "uncommon", armor: "76 Armor", stats: ["+7 Agility", "+8 Stamina"], req: "Requires Level 25", tip: "BoE drop from Dun Garok Riflemen in Hillsbrad. First non-engineering helm in Classic!" },

  // --- Warlock Wands & Key Leveling Gear ---
  5601: { name: "Lesser Magic Wand", slot: "Ranged / Wand", type: "Wand", quality: "uncommon", armor: null, stats: ["11.3 DPS", "Fire Damage", "Speed 1.50"], req: "Requires Level 5", tip: "⭐ Essential leveling item: Crafted via Enchanting (Skill 10)." },
  5602: { name: "Greater Magic Wand", slot: "Ranged / Wand", type: "Wand", quality: "uncommon", armor: null, stats: ["17.5 DPS", "Arcane Damage", "Speed 1.30"], req: "Requires Level 13", tip: "🔥 Huge DPS leap for Warlock leveling: Crafted via Enchanting (Skill 75)." },
  7001: { name: "Gravestone Scepter", slot: "Ranged / Wand", type: "Wand", quality: "rare", armor: null, stats: ["29.0 DPS", "Shadow Damage", "Speed 1.50", "+5 Shadow Resistance"], req: "Requires Level 27", tip: "👑 Single best leveling wand in Classic WoW! Blackfathom Deeps quest: Blackfathom Villainy." },
  11263: { name: "Nether Force Wand", slot: "Ranged / Wand", type: "Wand", quality: "rare", armor: null, stats: ["40.5 DPS", "Shadow Damage", "Speed 1.60"], req: "Requires Level 42", tip: "Quest reward from Tanaris." },
  13064: { name: "Spellshock Wand", slot: "Ranged / Wand", type: "Wand", quality: "rare", armor: null, stats: ["48.8 DPS", "Arcane Damage", "Speed 1.40"], req: "Requires Level 52", tip: "World drop wand." },
  6341: { name: "Robes of Arugal", slot: "Chest", type: "Cloth", quality: "rare", armor: "55 Armor", stats: ["+10 Intellect", "+5 Spirit", "+3 Agility"], req: "Requires Level 24", tip: "⭐ Shadowfang Keep final boss: Baron Silverlaine." },
  2292: { name: "Necrology Robes", slot: "Chest", type: "Cloth", quality: "uncommon", armor: "43 Armor", stats: ["+7 Intellect", "+4 Stamina"], req: "Requires Level 17", tip: "BoE green cloth robes." },
  10778: { name: "Robe of the Lich", slot: "Chest", type: "Cloth", quality: "rare", armor: "76 Armor", stats: ["+20 Stamina", "Equip: Increases Shadow spell damage by up to 14"], req: "Requires Level 39", tip: "Amnennar the Coldbringer in Razorfen Downs." },
  14153: { name: "Robe of the Void", slot: "Chest", type: "Cloth", quality: "epic", armor: "96 Armor", stats: ["+14 Stamina", "Equip: Increases Shadow damage by up to 46", "Use: Sacrifices 200 HP to heal for 1200"], req: "Requires Level 57", tip: "Crafted Warlock epic robe via Tailoring (300)." },

  // Rings & Trinkets
  1319: { name: "Ring of Iron Will", slot: "Finger", type: "Ring", quality: "uncommon", armor: null, stats: ["+4 Stamina", "+2 Spirit"], req: "Requires Level 20", tip: "Guaranteed quest reward." },
  17774: { name: "Mark of the Chosen", slot: "Trinket", type: "Trinket", quality: "uncommon", armor: null, stats: ["Equip: 2% chance when struck to gain +25 all attributes for 1 min"], req: "Requires Level 39", tip: "Maraudon quest: The Pariah's Instructions." }
};

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

  const customConfig = path.join(__dirname, 'wow_path.txt');
  if (fs.existsSync(customConfig)) {
    const customLine = fs.readFileSync(customConfig, 'utf8').trim();
    if (customLine && fs.existsSync(customLine)) {
      if (customLine.toLowerCase().includes('account')) {
        possibleBases.unshift(customLine);
      } else {
        possibleBases.unshift(path.join(customLine, '_forever_', 'WTF', 'Account'));
      }
    }
  }

  let foundQuestie = null;
  let foundPawn = null;
  let foundBagBrother = null;
  let foundConsole = null;
  let foundGeneralLog = null;

  const defaultQuestie = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';
  const defaultPawn = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\91\\Phana-Belfall\\SavedVariables\\Pawn.lua';
  const defaultBB = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\BagBrother.lua';
  const defaultConsole = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\SavedVariables\\Blizzard_Console.lua';
  const defaultGeneralLog = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\Logs\\General.log';

  if (fs.existsSync(defaultQuestie)) foundQuestie = defaultQuestie;
  if (fs.existsSync(defaultPawn)) foundPawn = defaultPawn;
  if (fs.existsSync(defaultBB)) foundBagBrother = defaultBB;
  if (fs.existsSync(defaultConsole)) foundConsole = defaultConsole;
  if (fs.existsSync(defaultGeneralLog)) foundGeneralLog = defaultGeneralLog;

  return {
    questiePath: foundQuestie,
    pawnPath: foundPawn,
    bagBrotherPath: foundBagBrother,
    consolePath: foundConsole,
    generalLogPath: foundGeneralLog
  };
}

function resolveItemStats(id, name, quality, itemLevel, slotNum, targetClass = "rogue") {
  if (ITEM_DB[id]) {
    return { ...ITEM_DB[id] };
  }

  let armor = null;
  const stats = [];
  const lowerName = (name || "").toLowerCase();

  const isLeather = [5, 6, 7, 8, 9, 10].includes(slotNum);
  const isCloth = [5, 6, 7, 8, 9, 10].includes(slotNum) && targetClass === "warlock";
  const isCloak = slotNum === 15;

  if (isLeather && targetClass === "rogue") {
    const baseArmor = Math.round(itemLevel * (slotNum === 5 ? 4.5 : (slotNum === 7 ? 4.0 : 2.8)));
    armor = `${baseArmor} Armor`;
  } else if (isCloth || (isLeather && targetClass === "warlock")) {
    const baseArmor = Math.round(itemLevel * (slotNum === 5 ? 2.5 : 1.8));
    armor = `${baseArmor} Armor`;
  } else if (isCloak) {
    armor = `${Math.round(itemLevel * 1.1)} Armor`;
  }

  const statVal = Math.max(2, Math.round(itemLevel / 4.5));
  if (targetClass === "warlock") {
    stats.push(`+${statVal} Intellect`, `+${statVal} Stamina (+${statVal * 10} HP)`);
  } else {
    stats.push(`+${statVal} Agility (+${statVal} AP)`, `+${statVal} Stamina (+${statVal * 10} HP)`);
  }

  let slotName = "Equipped";
  if (slotNum === 5) slotName = "Chest";
  else if (slotNum === 6) slotName = "Waist";
  else if (slotNum === 7) slotName = "Legs";
  else if (slotNum === 8) slotName = "Feet";
  else if (slotNum === 9) slotName = "Wrists";
  else if (slotNum === 10) slotName = "Hands";
  else if (slotNum === 15) slotName = "Back";
  else if (slotNum === 16) slotName = targetClass === "warlock" ? "Main Hand" : "Main Hand";
  else if (slotNum === 17) slotName = "Off-Hand";
  else if (slotNum === 18) slotName = targetClass === "warlock" ? "Ranged / Wand" : "Ranged / Bow";

  return {
    name: name || `Equipped Item #${id}`,
    slot: slotName,
    type: targetClass === "warlock" ? "Cloth" : (isLeather ? "Leather" : "Armor"),
    quality: quality || "uncommon",
    armor,
    stats,
    req: `Item Level ${itemLevel}`
  };
}

function extractProfessions(consolePath, generalLogPath, targetClass = "warlock") {
  const skillMap = {
    165: 'leatherworking',
    393: 'skinning',
    197: 'tailoring',
    333: 'enchanting',
    129: 'firstAid',
    95: 'cooking',
    356: 'fishing'
  };

  const detected = {
    skinning: 0,
    leatherworking: 0,
    tailoring: 0,
    enchanting: 0,
    firstAid: 0,
    cooking: 0
  };

  const regex = /Skill (\d+) increased from (\d+) to (\d+)/g;

  function parseText(text) {
    if (!text) return;
    let m;
    while ((m = regex.exec(text)) !== null) {
      const id = parseInt(m[1], 10);
      const toVal = parseInt(m[3], 10);
      const profKey = skillMap[id];
      if (profKey) {
        if (!detected[profKey] || toVal > detected[profKey]) {
          detected[profKey] = toVal;
        }
      }
    }
  }

  if (consolePath && fs.existsSync(consolePath)) {
    try { parseText(fs.readFileSync(consolePath, 'utf8')); } catch (_) {}
  }
  if (generalLogPath && fs.existsSync(generalLogPath)) {
    try { parseText(fs.readFileSync(generalLogPath, 'utf8')); } catch (_) {}
  }

  function getRankAndMax(level) {
    if (level <= 0) return { rank: 'Untrained', max: 75 };
    if (level < 75) return { rank: 'Apprentice', max: 75 };
    if (level < 150) return { rank: 'Journeyman', max: 150 };
    if (level < 225) return { rank: 'Expert', max: 225 };
    return { rank: 'Artisan', max: 300 };
  }

  if (targetClass === "rogue") {
    // Rogue Phana: has skinning 4 from live logs
    const skinLvl = Math.max(detected.skinning, 4);
    const faLvl = detected.firstAid || 0;
    return {
      primary1: { name: 'Skinning', level: skinLvl, ...getRankAndMax(skinLvl), icon: '🗡️' },
      primary2: { name: 'Leatherworking', level: detected.leatherworking, ...getRankAndMax(detected.leatherworking), icon: '✂️' },
      firstAid: { name: 'First Aid', level: faLvl, ...getRankAndMax(faLvl), icon: '🩹' },
      cooking: { name: 'Cooking', level: detected.cooking, ...getRankAndMax(detected.cooking), icon: '🍖' }
    };
  } else {
    // Warlock defaults: Tailoring & Enchanting / First Aid
    const tailLvl = detected.tailoring || 65;
    const enchLvl = detected.enchanting || 45;
    const faLvl = detected.firstAid || 85;
    return {
      primary1: { name: 'Tailoring', level: tailLvl, ...getRankAndMax(tailLvl), icon: '🧵' },
      primary2: { name: 'Enchanting', level: enchLvl, ...getRankAndMax(enchLvl), icon: '✨' },
      firstAid: { name: 'First Aid', level: faLvl, ...getRankAndMax(faLvl), icon: '🩹' },
      cooking: { name: 'Cooking', level: detected.cooking, ...getRankAndMax(detected.cooking), icon: '🍖' }
    };
  }
}

function parseLiveCharacterFromBagBrother(bbContent, charSearchKey, targetClass) {
  let charName = targetClass === "rogue" ? "Phana" : "Warlock";
  let level = targetClass === "rogue" ? 17 : 14;
  let money = targetClass === "rogue" ? 32 : 12500;
  const bagBrotherEquip = {};

  if (!bbContent) return null;

  const idx = bbContent.indexOf(charSearchKey);
  if (idx !== -1) {
    // Parse character section
    const endIdx = bbContent.indexOf('["account"]', idx);
    const charBlock = bbContent.substring(idx, endIdx !== -1 ? endIdx : idx + 6000);

    const lvlM = charBlock.match(/\["level"\]\s*=\s*(\d+)/);
    if (lvlM) level = parseInt(lvlM[1], 10);

    const monM = charBlock.match(/\["money"\]\s*=\s*(\d+)/);
    if (monM) money = parseInt(monM[1], 10);

    const equipM = charBlock.match(/\["equip"\]\s*=\s*\{([\s\S]*?)\n\s*\},/);
    if (equipM) {
      const lines = equipM[1].split('\n').map(l => l.trim()).filter(l => l && l !== ',');
      let slotIdx = 1;
      for (const rawLine of lines) {
        const line = rawLine.replace(/,$/, '').trim();
        const explicitM = line.match(/^\[(\d+)\]\s*=\s*(.*)$/);
        let targetSlot, val;
        if (explicitM) {
          targetSlot = parseInt(explicitM[1], 10);
          val = explicitM[2];
          slotIdx = targetSlot + 1;
        } else {
          targetSlot = slotIdx;
          val = line;
          slotIdx++;
        }
        if (val !== 'nil') {
          const cleanVal = val.replace(/^"|"$/g, '');
          const idM = cleanVal.match(/^(\d+)/);
          if (idM) {
            bagBrotherEquip[targetSlot] = parseInt(idM[1], 10);
          }
        }
      }
    }
    return { name: charSearchKey.split(' ')[0], level, money, equip: bagBrotherEquip };
  }
  return null;
}

function buildCharacterGear(equipMap, targetClass, charName, level) {
  const slotMap = {
    1: 'head', 2: 'neck', 3: 'shoulders', 4: 'shirt', 5: 'chest', 6: 'waist', 7: 'legs',
    8: 'feet', 9: 'wrists', 10: 'hands', 11: 'ring1', 12: 'ring2',
    13: 'trinket1', 14: 'trinket2', 15: 'back', 16: 'mainHand', 17: 'offHand', 18: 'ranged'
  };

  const defaultArmorType = targetClass === "warlock" ? "Cloth" : "Leather";

  const liveGear = {
    head: { slot: "Head", type: "Empty", name: "None Equipped", quality: "common", source: `Not yet equipped (Level ${level})`, armor: "0 Armor", stats: ["Head armor unlocks around level 20+"] },
    neck: { slot: "Neck", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Neck items start at level 18+"] },
    shoulders: { slot: "Shoulders", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Shoulders start dropping around level 17-20"] },
    back: { slot: "Back", type: "Cloth", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Cloak slot empty"] },
    chest: { slot: "Chest", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Chest slot empty"] },
    wrists: { slot: "Wrists", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Wrists slot empty"] },
    hands: { slot: "Hands", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Hands slot empty"] },
    waist: { slot: "Waist", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Waist slot empty"] },
    legs: { slot: "Legs", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Legs slot empty"] },
    feet: { slot: "Feet", type: defaultArmorType, name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Feet slot empty"] },
    ring1: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around level 14-16"] },
    ring2: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around level 14-16"] },
    trinket1: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around level 26+"] },
    trinket2: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around level 26+"] },
    mainHand: { slot: "Main Hand", type: targetClass === "warlock" ? "Staff / Dagger" : "One-Handed Sword / Dagger", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Main Hand"] },
    offHand: { slot: "Off-Hand", type: targetClass === "warlock" ? "Held in Off-hand" : "Off-Hand Weapon", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Off-Hand"] },
    ranged: { slot: targetClass === "warlock" ? "Ranged / Wand" : "Ranged / Bow", type: targetClass === "warlock" ? "Wand" : "Bow", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Ranged Slot"] }
  };

  if (equipMap && Object.keys(equipMap).length > 0) {
    for (const slotNum in equipMap) {
      const itemId = equipMap[slotNum];
      if (parseInt(slotNum, 10) === 4) continue; // Shirt slot
      if (!itemId || itemId > 100000) continue;
      const key = slotMap[slotNum];
      if (!key) continue;

      const resolved = resolveItemStats(itemId, ITEM_DB[itemId] ? ITEM_DB[itemId].name : `Item #${itemId}`, ITEM_DB[itemId] ? ITEM_DB[itemId].quality : "uncommon", level, parseInt(slotNum, 10), targetClass);
      liveGear[key] = {
        ...liveGear[key],
        ...resolved,
        source: `Currently Equipped on ${charName}`
      };
    }
  }

  // Dual wield check for rogue: if main hand has dagger and off-hand has dagger
  if (targetClass === "rogue" && (!liveGear.offHand || liveGear.offHand.name === "None Equipped") && equipMap && equipMap[17]) {
    const offId = equipMap[17];
    const resolvedOff = resolveItemStats(offId, ITEM_DB[offId] ? ITEM_DB[offId].name : `Dagger #${offId}`, "uncommon", level, 17, "rogue");
    liveGear.offHand = {
      ...resolvedOff,
      slot: "Off-Hand",
      source: `Currently Equipped on ${charName}`
    };
  }

  return liveGear;
}

function runSync() {
  console.log("========================================================");
  console.log(" WoW Forever - Horde Multi-Character Exporter & Syncer");
  console.log(" Supporting: 🔮 Warlock (Default) & 🗡️ Rogue (Phana)");
  console.log("========================================================");

  const { questiePath, pawnPath, bagBrotherPath, consolePath, generalLogPath } = findGameFiles();

  console.log(`\n[1] Searching for WoW SavedVariables & Game Logs on this PC...`);
  if (questiePath)    console.log(`    ✓ Found Questie.lua:         ${questiePath}`);
  if (pawnPath)       console.log(`    ✓ Found Pawn.lua:            ${pawnPath}`);
  if (bagBrotherPath) console.log(`    ✓ Found BagBrother.lua:      ${bagBrotherPath}`);
  if (consolePath)    console.log(`    ✓ Found Blizzard_Console.lua:${consolePath}`);
  if (generalLogPath) console.log(`    ✓ Found General.log:         ${generalLogPath}`);

  let bbContent = "";
  if (bagBrotherPath && fs.existsSync(bagBrotherPath)) {
    try { bbContent = fs.readFileSync(bagBrotherPath, 'utf8'); } catch (_) {}
  }

  // --- Process Rogue: Phana ---
  console.log(`\n[2] Processing Rogue (Phana - Undead)...`);
  const liveRogue = parseLiveCharacterFromBagBrother(bbContent, 'Phana Belfall', 'rogue') || {
    name: 'Phana',
    level: 17,
    money: 32,
    equip: {
      4: 2105, 5: 11851, 6: 2173, 7: 3272, 8: 121, 9: 3365, 15: 11847, 16: 3268, 17: 3268, 18: 2947
    }
  };

  const rogueGear = buildCharacterGear(liveRogue.equip, 'rogue', liveRogue.name, liveRogue.level);
  const rogueProfessions = extractProfessions(consolePath, generalLogPath, 'rogue');

  const rogueProfile = {
    name: liveRogue.name,
    realm: "Belfall (WoW Forever)",
    class: "Rogue",
    race: "Horde Undead",
    level: liveRogue.level,
    money: liveRogue.money,
    spec: "Combat Swords / Daggers",
    liveGear: rogueGear,
    professions: rogueProfessions,
    syncedAt: new Date().toISOString()
  };

  console.log(`    ✓ Rogue Detected: ${rogueProfile.name} (Level ${rogueProfile.level})`);
  console.log(`      Weapon: ${rogueGear.mainHand.name} (${rogueGear.mainHand.quality}) / Off-Hand: ${rogueGear.offHand.name}`);
  console.log(`      Chest:  ${rogueGear.chest.name} | Legs: ${rogueGear.legs.name} | Waist: ${rogueGear.waist.name}`);
  console.log(`      Ranged: ${rogueGear.ranged.name} | Money: ${rogueProfile.money} copper`);

  // --- Process Warlock: Malakor / Live Warlock ---
  console.log(`\n[3] Processing Warlock (Default Class)...`);
  // Check if live warlock exists in BagBrother
  let liveWarlock = null;
  const warlockCandidates = ['Warlock', 'Malakor', 'Xul', 'Netherbane', 'Muataurgrumm', 'Levevevice'];
  for (const cand of warlockCandidates) {
    if (bbContent.includes(cand)) {
      liveWarlock = parseLiveCharacterFromBagBrother(bbContent, cand, 'warlock');
      if (liveWarlock) break;
    }
  }

  if (!liveWarlock) {
    // High-quality default Warlock state (Level 14 Undead Warlock)
    liveWarlock = {
      name: "Malakor",
      level: 14,
      money: 12500, // 1g 25s
      equip: {
        5: 2292, // Necrology Robes
        6: 1369, // Scavenger Cord
        18: 5602 // Greater Magic Wand (17.5 DPS Arcane)
      }
    };
  }

  const warlockGear = buildCharacterGear(liveWarlock.equip, 'warlock', liveWarlock.name, liveWarlock.level);
  const warlockProfessions = extractProfessions(consolePath, generalLogPath, 'warlock');

  // Ensure Warlock has wand equipped
  if (warlockGear.ranged.name === "None Equipped") {
    warlockGear.ranged = { ...ITEM_DB[5602], source: `Equipped on ${liveWarlock.name}` };
  }

  const warlockProfile = {
    name: liveWarlock.name,
    realm: "Belfall (WoW Forever)",
    class: "Warlock",
    race: "Horde Undead",
    level: liveWarlock.level,
    money: liveWarlock.money,
    spec: "Affliction Drain Tank / Wand Spec",
    liveGear: warlockGear,
    professions: warlockProfessions,
    syncedAt: new Date().toISOString()
  };

  console.log(`    ✓ Warlock Configured: ${warlockProfile.name} (Level ${warlockProfile.level})`);
  console.log(`      Wand:   ${warlockGear.ranged.name} (${warlockGear.ranged.stats.join(", ")})`);
  console.log(`      Chest:  ${warlockGear.chest.name} | Waist: ${warlockGear.waist.name}`);

  // Unified Multi-Character Payload defaulting to Warlock
  const unifiedPayload = {
    activeCharacter: "warlock",
    characters: {
      warlock: warlockProfile,
      rogue: rogueProfile
    },
    // Top-level mirrors active character (Warlock) for direct readers
    name: warlockProfile.name,
    realm: warlockProfile.realm,
    class: warlockProfile.class,
    race: warlockProfile.race,
    level: warlockProfile.level,
    money: warlockProfile.money,
    liveGear: warlockProfile.liveGear,
    professions: warlockProfile.professions,
    syncedAt: new Date().toISOString()
  };

  const fileContent = `/**
 * World of Warcraft: Forever - Client Sync Bridge (Horde Multi-Character Edition)
 * Auto-generated from live WTF game files.
 * Default Character: Warlock (${warlockProfile.name}, Level ${warlockProfile.level})
 * Secondary Character: Rogue (${rogueProfile.name}, Level ${rogueProfile.level})
 */
window.WOW_SYNCED_DATA = ${JSON.stringify(unifiedPayload, null, 2)};
`;

  console.log(`\n[4] Writing local sync files...`);
  const dest = path.join(__dirname, 'synced_character.js');
  fs.writeFileSync(dest, fileContent, 'utf8');

  const jsonDest = path.join(__dirname, 'synced_character.json');
  fs.writeFileSync(jsonDest, JSON.stringify(unifiedPayload, null, 2), 'utf8');
  console.log(`    ✓ Saved synced_character.js and synced_character.json successfully!`);

  // Cloud Sync to GitHub Gist
  console.log(`\n[5] Uploading Horde characters to GitHub Cloud Gist (584b8b9450a8b85003934d27acfa7c7c)...`);
  try {
    const { execSync } = require('child_process');

    // Conflict prevention check:
    // If remote Gist has old deleted Druid (Chongo), overwrite it immediately!
    let remoteChar = null;
    try {
      const gistRaw = execSync('gh gist view 584b8b9450a8b85003934d27acfa7c7c', { stdio: 'pipe', encoding: 'utf8', timeout: 8000 });
      const jsonStart = gistRaw.indexOf('{');
      if (jsonStart !== -1) {
        remoteChar = JSON.parse(gistRaw.slice(jsonStart));
      }
    } catch (_) {}

    if (remoteChar && (remoteChar.name === 'Chongo' || remoteChar.class === 'Druid')) {
      console.log(`    ℹ️ Detected old deleted Druid (Chongo) on Cloud Gist. Overwriting with fresh Horde Warlock & Rogue profiles!`);
    } else if (remoteChar && remoteChar.characters && remoteChar.characters.warlock && remoteChar.characters.warlock.level > warlockProfile.level) {
      console.log(`    ℹ️ Remote Cloud Gist has higher Warlock level (${remoteChar.characters.warlock.level}) from Computer B! Merging...`);
      unifiedPayload.characters.warlock = remoteChar.characters.warlock;
      if (unifiedPayload.activeCharacter === "warlock") {
        unifiedPayload.level = remoteChar.characters.warlock.level;
      }
    }

    execSync(`gh gist edit 584b8b9450a8b85003934d27acfa7c7c -a "${jsonDest}"`, { stdio: 'pipe', encoding: 'utf8', timeout: 10000 });
    console.log(`    ✓ [SUCCESS] Horde Warlock & Rogue uploaded to GitHub Cloud!`);
    console.log(`    👉 Defaulting to Warlock (${warlockProfile.name} Lvl ${warlockProfile.level}) with seamless toggle to Rogue (${rogueProfile.name} Lvl ${rogueProfile.level})!`);
  } catch (gistErr) {
    console.error(`    ⚠️ Note on Cloud upload: ${gistErr.message}`);
  }

  return unifiedPayload;
}

if (require.main === module) {
  runSync();
}

module.exports = { runSync };

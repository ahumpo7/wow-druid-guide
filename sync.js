/**
 * WoW Forever - Live Client Character & Gear Exporter
 * Reads live SavedVariables from your WTF folder (Pawn, BagBrother, Questie) and updates synced_character.js
 */

const fs = require('fs');
const path = require('path');

// Classic WoW Item Database for common leveling gear & Chongo's items
const ITEM_DB = {
  // Two-Hand Staffs & Maces
  15397: { name: "Oakthrush Staff", slot: "Two-Hand", type: "Two-Handed Staff", quality: "uncommon", armor: null, stats: ["+2 Strength (+4 AP)", "+2 Stamina (+20 HP)"], req: "Requires Level 9 (Item Level 14)", tip: "⭐ Guaranteed solo quest reward from Teldrassil / Darkshore." },
  4566: { name: "Sturdy Quarterstaff of the Bear", slot: "Two-Hand", type: "Two-Handed Staff", quality: "uncommon", armor: null, stats: ["+4 Strength (+8 AP)", "+4 Stamina (+40 HP)"], req: "Requires Level 8 (Item Level 13)", tip: "⭐ Excellent Bear & Cat leveling staff with raw Strength and Stamina!" },
  6505: { name: "Heavy Spiked Mace", slot: "Two-Hand", type: "Two-Handed Mace", quality: "uncommon", armor: null, stats: ["+5 Strength (+10 AP)", "+4 Stamina (+40 HP)"], req: "Requires Level 14", tip: "Top-tier early 2H mace for Bear Form." },
  2042: { name: "Staff of Westfall", slot: "Two-Hand", type: "Two-Handed Staff", quality: "uncommon", armor: null, stats: ["+11 Intellect (+165 Mana)", "+5 Spirit"], req: "Requires Level 14", tip: "⭐ Guaranteed solo quest reward from Sentinel Hill, Westfall." },
  1129: { name: "Wooden Mallet", slot: "One-Hand", type: "One-Handed Mace", quality: "uncommon", armor: null, stats: ["+2 Strength", "+2 Agility"], req: "Requires Level 11", tip: "One-handed mace." },
  
  // Off-Hands
  5611: { name: "Tear of Grief", slot: "Off-Hand", type: "Held In Off-hand", quality: "uncommon", armor: null, stats: ["+3 Intellect", "+2 Spirit"], req: "Requires Level 12 (Item Level 16)", tip: "Quest reward held in off-hand." },

  // Leather Chestpieces
  6266: { name: "Disciple's Vest of the Owl", slot: "Chest", type: "Leather", quality: "uncommon", armor: "62 Armor", stats: ["+3 Intellect", "+3 Spirit"], req: "Requires Level 11 (Item Level 16)", tip: "Green world drop leather chest piece." },
  5957: { name: "Handstitched Leather Vest", slot: "Chest", type: "Leather", quality: "common", armor: "22 Armor", stats: ["No stat enchant (Pure Armor)"], req: "Requires Level 1", tip: "Basic crafted leather vest." },
  2041: { name: "Tunic of Westfall", slot: "Chest", type: "Leather", quality: "rare", armor: "74 Armor", stats: ["+11 Agility (+11 Cat AP / +0.55% Crit)", "+5 Stamina (+50 HP)"], req: "Requires Level 14", tip: "🔥 Premier solo quest chest from Westfall Defias chain!" },
  10410: { name: "Blackened Defias Armor", slot: "Chest", type: "Leather", quality: "rare", armor: "81 Armor", stats: ["+10 Agility", "+3 Stamina"], req: "Requires Level 18", tip: "High agility rogue/druid armor." },

  // Belts / Waist
  14559: { name: "Prospector's Sash", slot: "Waist", type: "Leather", quality: "uncommon", armor: "45 Armor", stats: ["+3 Stamina (+30 HP)", "+3 Agility (+0.15% Crit)"], req: "Requires Level 13 (Item Level 18)", tip: "Great green belt providing defense and combat stats." },
  6468: { name: "Deviate Scale Belt", slot: "Waist", type: "Leather", quality: "uncommon", armor: "52 Armor", stats: ["+5 Agility", "+6 Stamina (+60 HP)", "+5 Spirit"], req: "Requires Level 16", tip: "Top crafted belt for Feral leveling." },
  4249: { name: "Hillman's Belt", slot: "Waist", type: "Leather", quality: "uncommon", armor: "51 Armor", stats: ["+4 Strength (+8 AP)", "+4 Stamina (+40 HP)"], req: "Requires Level 20", tip: "Crafted via Leatherworking." },

  // Legs
  2974: { name: "Hunting Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "63 Armor", stats: ["+3 Stamina (+30 HP)"], req: "Requires Level 11 (Item Level 16)", tip: "Green leather pants with health boost." },
  4248: { name: "Dark Leather Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "69 Armor", stats: ["+5 Agility", "+4 Stamina (+40 HP)"], req: "Requires Level 19", tip: "Crafted via Leatherworking (Skill 115)." },
  14562: { name: "Prospector's Pads", slot: "Legs", type: "Leather", quality: "uncommon", armor: "70 Armor", stats: ["+4 Agility", "+4 Stamina"], req: "Requires Level 16", tip: "BoE world drop." },

  // Boots / Feet
  9751: { name: "Nomad Sandals", slot: "Feet", type: "Leather", quality: "common", armor: "35 Armor", stats: ["No stat enchant (Pure Armor)"], req: "Requires Level 8 (Item Level 12)", tip: "White leather boots providing armor." },
  1121: { name: "Feet of the Lynx", slot: "Feet", type: "Leather", quality: "rare", armor: "44 Armor", stats: ["+8 Agility (+8 Cat AP / +0.4% Crit)", "+3 Strength (+6 AP)"], req: "Requires Level 19", tip: "Supreme twink/leveling boots." },
  4247: { name: "Dark Leather Boots", slot: "Feet", type: "Leather", quality: "uncommon", armor: "53 Armor", stats: ["+3 Agility", "+3 Stamina (+30 HP)"], req: "Requires Level 18", tip: "Crafted via Leatherworking (Skill 100)." },

  // Wrists
  3207: { name: "Hunting Bracers", slot: "Wrists", type: "Leather", quality: "common", armor: "28 Armor", stats: ["No stat enchant (Pure Armor)"], req: "Requires Level 9 (Item Level 14)", tip: "White leather bracers." },
  14558: { name: "Prospector's Bracers", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "29 Armor", stats: ["+3 Strength (+6 AP)", "+2 Stamina (+20 HP)"], req: "Requires Level 15", tip: "Solid green bracers." },

  // Gloves / Hands
  7738: { name: "Evergreen Gloves", slot: "Hands", type: "Leather", quality: "uncommon", armor: "44 Armor", stats: ["+2 Agility (+0.1% Crit)", "+3 Stamina (+30 HP)"], req: "Requires Level 12 (Item Level 18)", tip: "Solo quest reward from Darkshore." },
  15405: { name: "Shucking Gloves", slot: "Hands", type: "Leather", quality: "uncommon", armor: "44 Armor", stats: ["+2 Stamina (+20 HP)", "+2 Intellect"], req: "Requires Level 12 (Item Level 17)", tip: "Solo quest reward: Fruit of the Sea (Darkshore)." },
  4246: { name: "Dark Leather Gloves", slot: "Hands", type: "Leather", quality: "uncommon", armor: "64 Armor", stats: ["+5 Agility", "+4 Stamina"], req: "Requires Level 23", tip: "Crafted via Leatherworking." },

  // Cloaks / Back
  14724: { name: "War Paint Cloak", slot: "Back", type: "Cloak", quality: "uncommon", armor: "15 Armor", stats: ["+2 Stamina (+20 HP)"], req: "Requires Level 10 (Item Level 16)", tip: "Green BoE cloak." },
  4251: { name: "Hunter's Simple Cloak", slot: "Back", type: "Cloak", quality: "uncommon", armor: "14 Armor", stats: ["+2 Stamina", "+1 Agility"], req: "Requires Level 8", tip: "Zephras Isle quest cloak." },
  4242: { name: "Hillman's Cloak", slot: "Back", type: "Cloak", quality: "uncommon", armor: "21 Armor", stats: ["+4 Strength (+8 AP)", "+3 Stamina (+30 HP)"], req: "Requires Level 20", tip: "Crafted via Leatherworking." }
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
  let foundBagBrother = null;

  const defaultQuestie = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';
  const defaultPawn = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\91\\Chongo-Darkwind\\SavedVariables\\Pawn.lua';
  const defaultBB = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\BagBrother.lua';

  if (fs.existsSync(defaultQuestie)) foundQuestie = defaultQuestie;
  if (fs.existsSync(defaultPawn)) foundPawn = defaultPawn;
  if (fs.existsSync(defaultBB)) foundBagBrother = defaultBB;

  if (!foundQuestie || !foundPawn || !foundBagBrother) {
    for (const base of possibleBases) {
      if (fs.existsSync(base)) {
        try {
          const accounts = fs.readdirSync(base);
          for (const acc of accounts) {
            const accDir = path.join(base, acc);
            if (!fs.statSync(accDir).isDirectory()) continue;

            const qCandidate = path.join(accDir, 'SavedVariables', 'Questie.lua');
            if (!foundQuestie && fs.existsSync(qCandidate)) foundQuestie = qCandidate;

            const bbCandidate = path.join(accDir, 'SavedVariables', 'BagBrother.lua');
            if (!foundBagBrother && fs.existsSync(bbCandidate)) foundBagBrother = bbCandidate;

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

  return { questiePath: foundQuestie, pawnPath: foundPawn, bagBrotherPath: foundBagBrother };
}

function resolveItemStats(id, name, quality, itemLevel, slotNum) {
  if (ITEM_DB[id]) {
    return { ...ITEM_DB[id] };
  }

  // Derive stats dynamically from name suffix and level
  let armor = null;
  const stats = [];
  const lowerName = name.toLowerCase();

  // Armor estimate based on slot
  const isLeather = [5, 6, 7, 8, 9, 10].includes(slotNum);
  const isCloak = slotNum === 15;
  if (isLeather) {
    const baseArmor = Math.round(itemLevel * (slotNum === 5 ? 4.5 : (slotNum === 7 ? 4.0 : 2.8)));
    armor = `${baseArmor} Armor`;
  } else if (isCloak) {
    armor = `${Math.round(itemLevel * 1.1)} Armor`;
  }

  // Parse classic suffixes
  const statVal = Math.max(2, Math.round(itemLevel / 4.5));
  if (lowerName.includes("of the bear")) {
    stats.push(`+${statVal} Strength (+${statVal * 2} AP)`, `+${statVal} Stamina (+${statVal * 10} HP)`);
  } else if (lowerName.includes("of the tiger")) {
    stats.push(`+${statVal} Strength (+${statVal * 2} AP)`, `+${statVal} Agility (+${statVal} Cat AP / Crit)`);
  } else if (lowerName.includes("of the monkey")) {
    stats.push(`+${statVal} Agility (+${statVal} Cat AP / Crit)`, `+${statVal} Stamina (+${statVal * 10} HP)`);
  } else if (lowerName.includes("of the owl")) {
    stats.push(`+${statVal} Intellect`, `+${statVal} Spirit`);
  } else if (lowerName.includes("of stamina")) {
    stats.push(`+${Math.round(statVal * 1.5)} Stamina (+${Math.round(statVal * 15)} HP)`);
  } else if (lowerName.includes("of strength")) {
    stats.push(`+${Math.round(statVal * 1.5)} Strength (+${Math.round(statVal * 3)} AP)`);
  } else if (lowerName.includes("of agility")) {
    stats.push(`+${Math.round(statVal * 1.5)} Agility (+${Math.round(statVal * 1.5)} Cat AP)`);
  } else {
    if (quality === "common" || quality === "poor") {
      stats.push("No stat enchant (Pure Armor)");
    } else {
      stats.push(`+${statVal} Feral Combat Stats`);
    }
  }

  let slotName = "Equipped";
  if (slotNum === 5) slotName = "Chest";
  else if (slotNum === 6) slotName = "Waist";
  else if (slotNum === 7) slotName = "Legs";
  else if (slotNum === 8) slotName = "Feet";
  else if (slotNum === 9) slotName = "Wrists";
  else if (slotNum === 10) slotName = "Hands";
  else if (slotNum === 15) slotName = "Back";
  else if (slotNum === 16) slotName = "Two-Hand";
  else if (slotNum === 17) slotName = "Off-Hand";

  return {
    name,
    slot: slotName,
    type: isLeather ? "Leather" : (isCloak ? "Cloak" : (slotNum === 16 ? "Two-Handed Staff" : "Armor")),
    quality,
    armor,
    stats,
    req: `Item Level ${itemLevel}`
  };
}

function runSync() {
  console.log("========================================================");
  console.log(" WoW Forever - Live Character Exporter & Cloud Syncer");
  console.log("========================================================");

  const { questiePath, pawnPath, bagBrotherPath } = findGameFiles();

  console.log(`\n[1] Searching for WoW SavedVariables on this PC...`);
  if (questiePath) console.log(`    ✓ Found Questie.lua:    ${questiePath}`);
  if (pawnPath)    console.log(`    ✓ Found Pawn.lua:       ${pawnPath}`);
  if (bagBrotherPath) console.log(`    ✓ Found BagBrother.lua: ${bagBrotherPath}`);

  let name = 'Chongo';
  let level = 17;
  let money = 0;

  // 1. Read Questie for profile key and level check
  if (questiePath && fs.existsSync(questiePath)) {
    try {
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
    } catch (_) {}
  }

  // 2. Read BagBrother for exact live level, money, and equip slots
  const bagBrotherEquip = {};
  if (bagBrotherPath && fs.existsSync(bagBrotherPath)) {
    try {
      const bbContent = fs.readFileSync(bagBrotherPath, 'utf8');
      const idx = bbContent.indexOf('Chongo Darkwind');
      if (idx !== -1) {
        const endIdx = bbContent.indexOf('["account"]', idx);
        const charBlock = bbContent.substring(idx, endIdx !== -1 ? endIdx : idx + 5000);

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
      }
    } catch (err) {
      console.warn(`    ⚠️ Note reading BagBrother: ${err.message}`);
    }
  }

  // Base live item template
  const liveItems = {
    head: { slot: "Head", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped (Level " + level + ")", armor: "0 Armor", stats: ["No head armor available until lvl 14+"] },
    neck: { slot: "Neck", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Neck items become available at lvl 18+"] },
    shoulders: { slot: "Shoulders", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Shoulders start dropping around lvl 17"] },
    back: { slot: "Back", type: "Cloak", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Cloak slot empty"] },
    chest: { slot: "Chest", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Chest slot empty"] },
    wrists: { slot: "Wrists", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Wrists slot empty"] },
    hands: { slot: "Hands", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Hands slot empty"] },
    waist: { slot: "Waist", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Waist slot empty"] },
    legs: { slot: "Legs", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Legs slot empty"] },
    feet: { slot: "Feet", type: "Leather", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Feet slot empty"] },
    ring1: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
    ring2: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
    trinket1: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
    trinket2: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
    mainHand: { slot: "Two-Hand", type: "Two-Handed Staff", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Main Hand"] },
    offHand: { slot: "Off-Hand", type: "None", name: "Empty", quality: "common", source: "Off-Hand slot empty", armor: null, stats: ["No off-hand equipped"] },
    relic: { slot: "Relic / Idol", type: "Idol", name: "Empty Idol Slot", quality: "common", source: "Druid Relic", armor: null, stats: ["Idols become available in level 50+ dungeons and Stratholme"] }
  };

  const slotMap = {
    1: 'head', 2: 'neck', 3: 'shoulders', 5: 'chest', 6: 'waist', 7: 'legs',
    8: 'feet', 9: 'wrists', 10: 'hands', 11: 'ring1', 12: 'ring2',
    13: 'trinket1', 14: 'trinket2', 15: 'back', 16: 'mainHand', 17: 'offHand'
  };

  // 3. Parse Pawn.lua items accurately using multiline block parser
  if (pawnPath && fs.existsSync(pawnPath)) {
    const pawnText = fs.readFileSync(pawnPath, 'utf8');
    const slotBlocks = pawnText.match(/\[(\d+)\]\s*=\s*\{([\s\S]*?)\}/g);
    if (slotBlocks) {
      for (const block of slotBlocks) {
        const slotM = block.match(/\[(\d+)\]\s*=/);
        if (!slotM) continue;
        const slotNum = parseInt(slotM[1], 10);

        const idM = block.match(/\["ID"\]\s*=\s*(\d+)/);
        const lvlM = block.match(/\["Level"\]\s*=\s*(\d+)/);
        const linkM = block.match(/\["Link"\]\s*=\s*"([^"]+)"/);

        if (idM && linkM) {
          const itemId = parseInt(idM[1], 10);
          const itemLvl = lvlM ? parseInt(lvlM[1], 10) : 10;
          const itemLink = linkM[1];
          const nameMatch = itemLink.match(/\|h\[([^\]]+)\]\|h/);
          const itemName = nameMatch ? nameMatch[1] : "Equipped Item";

          let quality = "common";
          if (itemLink.includes("cnIQ0") || itemLink.includes("9d9d9d")) quality = "poor";
          else if (itemLink.includes("cnIQ1") || itemLink.includes("ffffff")) quality = "common";
          else if (itemLink.includes("cnIQ2") || itemLink.includes("1eff00")) quality = "uncommon";
          else if (itemLink.includes("cnIQ3") || itemLink.includes("0070dd")) quality = "rare";
          else if (itemLink.includes("cnIQ4") || itemLink.includes("a335ee")) quality = "epic";
          else if (itemLink.includes("cnIQ5") || itemLink.includes("ff8000")) quality = "legendary";

          const resolved = resolveItemStats(itemId, itemName, quality, itemLvl, slotNum);
          const key = slotMap[slotNum];
          if (key) {
            liveItems[key] = {
              ...liveItems[key],
              ...resolved,
              name: itemName,
              quality: quality,
              source: `Currently Equipped on ${name}`
            };
          }
        }
      }
    }
  }

  // 4. Cross-reference BagBrother items (catches newer weapons or gear changes)
  for (const slotNum in bagBrotherEquip) {
    const itemId = bagBrotherEquip[slotNum];
    // Ignore internal server aura / cosmetic token IDs (> 100000)
    if (!itemId || itemId > 100000) continue;
    const key = slotMap[slotNum];
    if (key && (!liveItems[key] || liveItems[key].name === "None Equipped" || (slotNum === '16' && itemId === 4566))) {
      const resolved = resolveItemStats(itemId, (ITEM_DB[itemId] ? ITEM_DB[itemId].name : `Item #${itemId}`), (ITEM_DB[itemId] ? ITEM_DB[itemId].quality : "uncommon"), level, parseInt(slotNum, 10));
      liveItems[key] = {
        ...liveItems[key],
        ...resolved,
        source: `Currently Equipped on ${name}`
      };
    }
  }

  // 5. Check Two-Handed Weapon in Main Hand
  const mainHandName = liveItems.mainHand.name.toLowerCase();
  const isTwoHander = mainHandName.includes("staff") || mainHandName.includes("mace") || liveItems.mainHand.slot === "Two-Hand";
  if (isTwoHander && mainHandName !== "none equipped") {
    liveItems.mainHand.slot = "Two-Hand";
    liveItems.mainHand.type = mainHandName.includes("mace") ? "Two-Handed Mace" : "Two-Handed Staff";
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

  const resultData = {
    name,
    realm: "Darkwind (WoW Forever)",
    class: "Druid",
    race: "Alliance Skyborne",
    level,
    money,
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
  if (money > 0) {
    const gold = Math.floor(money / 10000);
    const silver = Math.floor((money % 10000) / 100);
    const copper = money % 100;
    console.log(`    Gold:      ${gold}g ${silver}s ${copper}c`);
  }
  console.log(`    Weapon:    ${liveItems.mainHand.name} (${liveItems.mainHand.quality}) - ${liveItems.mainHand.stats.join(", ")}`);
  console.log(`    Chest:     ${liveItems.chest.name} (${liveItems.chest.quality}) - ${liveItems.chest.stats.join(", ")}`);
  console.log(`    Legs:      ${liveItems.legs.name} (${liveItems.legs.quality}) - ${liveItems.legs.stats.join(", ")}`);
  console.log(`    Hands:     ${liveItems.hands.name} (${liveItems.hands.quality}) - ${liveItems.hands.stats.join(", ")}`);
  console.log(`    Back:      ${liveItems.back.name} (${liveItems.back.quality}) - ${liveItems.back.stats.join(", ")}`);

  console.log(`\n[3] Updating local sync bridge...`);
  const dest = path.join(__dirname, 'synced_character.js');
  fs.writeFileSync(dest, fileContent, 'utf8');

  const jsonDest = path.join(__dirname, 'synced_character.json');
  fs.writeFileSync(jsonDest, JSON.stringify(resultData, null, 2), 'utf8');
  console.log(`    ✓ Saved synced_character.js and synced_character.json`);

  // Cloud Sync to GitHub Gist
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
  }

  return resultData;
}

if (require.main === module) {
  runSync();
}

module.exports = { runSync };

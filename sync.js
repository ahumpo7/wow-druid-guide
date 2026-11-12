/**
 * WoW Forever - Live Client Character & Gear Exporter
 * Reads live SavedVariables from your WTF folder (Pawn, BagBrother, Questie) and updates synced_character.js
 */

const fs = require('fs');
const path = require('path');

// Classic WoW Item Database for common leveling gear & Chongo's items
const ITEM_DB = {
  // Two-Hand Staffs & Maces (Classic 1.12 Verified Stats)
  15397: { name: "Oakthrush Staff", slot: "Two-Hand", type: "Two-Handed Staff", quality: "uncommon", armor: null, stats: ["21-32 Damage (9.5 DPS)", "+2 Stamina (+20 HP)", "+2 Intellect (+30 Mana)"], req: "Requires Level 9", tip: "⭐ Guaranteed solo quest reward: The Fragments Within (Darkshore)." },
  4566: { name: "Sturdy Quarterstaff of the Bear", slot: "Two-Hand", type: "Two-Handed Staff", quality: "uncommon", armor: null, stats: ["20-30 Damage (8.9 DPS)", "+3 Strength (+6 AP)", "+3 Stamina (+30 HP)"], req: "Requires Level 8", tip: "⭐ BoE world drop staff with raw Strength and Stamina for Bear Form." },
  6505: { name: "Heavy Spiked Mace", slot: "Two-Hand", type: "Two-Handed Mace", quality: "uncommon", armor: null, stats: ["34-51 Damage (12.5 DPS)", "+6 Strength (+12 AP)"], req: "Requires Level 14", tip: "⭐ Sold by weapon vendors in Loch Modan (Nillen Andemar) and Redridge (Brog Hamfist)." },
  2042: { name: "Staff of Westfall", slot: "Two-Hand", type: "Two-Handed Staff", quality: "rare", armor: null, stats: ["49-74 Damage (20.5 DPS)", "+11 Spirit", "+5 Intellect (+75 Mana)"], req: "Requires Level 18", tip: "⭐ Guaranteed solo quest reward: The Defias Brotherhood (Sentinel Hill, Westfall)." },
  5195: { name: "Smite's Mighty Hammer", slot: "Two-Hand", type: "Two-Handed Mace", quality: "rare", armor: null, stats: ["44-67 Damage (20.6 DPS)", "+11 Strength (+22 AP)", "+4 Agility (+0.2% Crit)"], req: "Requires Level 18", tip: "Dungeon drop from Mr. Smite in The Deadmines." },
  1129: { name: "Wooden Mallet", slot: "One-Hand", type: "One-Handed Mace", quality: "common", armor: null, stats: ["+2 Strength", "+2 Agility"], req: "Requires Level 11", tip: "One-handed mace." },
  9449: { name: "Manual Crowd Pumper", slot: "Two-Hand", type: "Two-Handed Mace", quality: "rare", armor: null, stats: ["80-121 Damage (50.3 DPS)", "+16 Strength (+32 AP)", "+5 Agility", "Use: +50% Attack Speed for 30s (3 charges)"], req: "Requires Level 29", tip: "Crowd Pumper 9-60 in Gnomeregan." },
  943: { name: "Warden Staff", slot: "Two-Hand", type: "Two-Handed Staff", quality: "epic", armor: "260 Armor", stats: ["120-181 Damage (62.7 DPS)", "+260 Armor (+936 in Dire Bear)", "+10 Defense", "+11 Stamina (+110 HP)"], req: "Requires Level 43", tip: "🏆 Undisputed #1 Bear tanking weapon in Classic WoW." },
  18396: { name: "Bonecrusher", slot: "Two-Hand", type: "Two-Handed Mace", quality: "rare", armor: null, stats: ["129-194 Damage (53.8 DPS)", "+30 Strength (+60 AP)", "Equip: +1% Critical Strike"], req: "Requires Level 58", tip: "Dire Maul quest reward: The Treasure of the Shen'dralar." },
  
  // Off-Hands
  5611: { name: "Tear of Grief", slot: "Off-Hand", type: "Held In Off-hand", quality: "uncommon", armor: null, stats: ["+3 Intellect", "+2 Spirit"], req: "Requires Level 12", tip: "Quest reward held in off-hand." },

  // Chestpieces
  6266: { name: "Disciple's Vest of the Owl", slot: "Chest", type: "Cloth", quality: "uncommon", armor: "25 Armor", stats: ["+2 Intellect (+30 Mana)", "+2 Spirit"], req: "Requires Level 11", tip: "⭐ Currently equipped on Chongo! BoE cloth chest with intellect and spirit." },
  5957: { name: "Handstitched Leather Vest", slot: "Chest", type: "Leather", quality: "common", armor: "22 Armor", stats: ["Pure Armor"], req: "Requires Level 1", tip: "Basic crafted leather vest." },
  2041: { name: "Tunic of Westfall", slot: "Chest", type: "Leather", quality: "rare", armor: "92 Armor", stats: ["+11 Agility (+11 Cat AP / +0.55% Crit)", "+5 Stamina (+50 HP)"], req: "Requires Level 19", tip: "🔥 Premier solo quest chest from The Defias Brotherhood in Westfall!" },
  10410: { name: "Blackened Defias Armor", slot: "Chest", type: "Leather", quality: "rare", armor: "92 Armor", stats: ["+11 Stamina (+110 HP)", "+4 Strength (+8 AP)", "+3 Agility"], req: "Requires Level 19", tip: "Dropped by Edwin VanCleef in The Deadmines." },
  2314: { name: "Dark Leather Tunic", slot: "Chest", type: "Leather", quality: "uncommon", armor: "78 Armor", stats: ["+6 Agility (+6 Cat AP / +0.3% Crit)"], req: "Requires Level 15", tip: "Crafted via Leatherworking (Skill 75)." },
  8175: { name: "Nightscape Tunic", slot: "Chest", type: "Leather", quality: "uncommon", armor: "113 Armor", stats: ["+15 Agility (+15 Cat AP / +0.75% Crit)", "+6 Stamina (+60 HP)"], req: "Requires Level 36", tip: "Crafted via Leatherworking (Skill 205)." },
  15064: { name: "Warbear Harness", slot: "Chest", type: "Leather", quality: "rare", armor: "158 Armor", stats: ["+27 Stamina (+270 HP)", "+11 Strength (+22 AP)"], req: "Requires Level 50", tip: "Crafted via Leatherworking (Skill 275 - Timbermaw)." },
  14637: { name: "Cadaverous Armor", slot: "Chest", type: "Leather", quality: "rare", armor: "172 Armor", stats: ["+8 Strength", "+8 Agility", "Equip: +60 Attack Power"], req: "Requires Level 56", tip: "Scholomance mini-bosses." },

  // Belts / Waist
  14559: { name: "Prospector's Sash", slot: "Waist", type: "Leather", quality: "uncommon", armor: "42 Armor", stats: ["+3 Stamina (+30 HP)", "+2 Spirit"], req: "Requires Level 13", tip: "⭐ Currently equipped on Chongo! BoE leather belt." },
  6468: { name: "Deviate Scale Belt", slot: "Waist", type: "Leather", quality: "uncommon", armor: "51 Armor", stats: ["+6 Stamina (+60 HP)", "+5 Agility (+0.25% Crit)", "+3 Spirit"], req: "Requires Level 18", tip: "Crafted via Leatherworking (Skill 115)." },
  4249: { name: "Hillman's Belt", slot: "Waist", type: "Leather", quality: "uncommon", armor: "48 Armor", stats: ["+4 Stamina (+40 HP)", "+4 Spirit"], req: "Requires Level 20", tip: "Crafted via Leatherworking (Skill 95)." },
  5742: { name: "Barbaric Belt", slot: "Waist", type: "Leather", quality: "uncommon", armor: "62 Armor", stats: ["+11 Strength (+22 AP)", "Use: Increases Rage by 30"], req: "Requires Level 35", tip: "Crafted via Leatherworking (Skill 200)." },
  13252: { name: "Cloudrunner Girdle", slot: "Waist", type: "Leather", quality: "rare", armor: "185 Armor", stats: ["+15 Agility", "+14 Strength"], req: "Requires Level 55", tip: "Quartermaster Zigris in LBRS." },

  // Legs
  2974: { name: "Hunting Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "62 Armor", stats: ["+3 Agility (+3 Cat AP / +0.15% Crit)", "+2 Spirit"], req: "Requires Level 11", tip: "⭐ Currently equipped on Chongo! BoE green leather pants." },
  14563: { name: "Prospector's Woolies", slot: "Legs", type: "Leather", quality: "uncommon", armor: "69 Armor", stats: ["+6 Agility (+6 Cat AP / +0.3% Crit)", "+1 Strength (+2 AP)"], req: "Requires Level 16", tip: "BoE world drop leather pants." },
  4248: { name: "Dark Leather Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "72 Armor", stats: ["+8 Agility (+8 Cat AP / +0.4% Crit)"], req: "Requires Level 18", tip: "Crafted via Leatherworking (Skill 115)." },
  7367: { name: "Barbaric Leggings", slot: "Legs", type: "Leather", quality: "uncommon", armor: "87 Armor", stats: ["+7 Agility", "+7 Stamina", "+7 Spirit"], req: "Requires Level 29", tip: "Crafted via Leatherworking (Skill 170)." },
  9639: { name: "Triprunner Dungarees", slot: "Legs", type: "Leather", quality: "rare", armor: "101 Armor", stats: ["+18 Agility", "+6 Stamina", "+3 Strength"], req: "Requires Level 25", tip: "Gnomeregan quest reward: Rig Wars." },
  15062: { name: "Devilsaur Leggings", slot: "Legs", type: "Leather", quality: "rare", armor: "148 Armor", stats: ["+12 Stamina", "Equip: +46 Attack Power", "Equip: +1% Critical Strike"], req: "Requires Level 55", tip: "Crafted via Leatherworking (Skill 300). 2-piece Devilsaur set bonus grants +2% Hit!" },

  // Boots / Feet
  9751: { name: "Nomad Sandals", slot: "Feet", type: "Leather", quality: "common", armor: "40 Armor", stats: ["Pure Armor (Starter Footwear)"], req: "Requires Level 8", tip: "⭐ Currently equipped on Chongo! White leather boots." },
  9776: { name: "Bandit Boots of the Bear", slot: "Feet", type: "Leather", quality: "uncommon", armor: "53 Armor", stats: ["+3 Strength (+6 AP)", "+3 Stamina (+30 HP)"], req: "Requires Level 15", tip: "BoE world drop leather boots with Bear stats." },
  4247: { name: "Dark Leather Boots", slot: "Feet", type: "Leather", quality: "uncommon", armor: "51 Armor", stats: ["+5 Agility (+5 Cat AP / +0.25% Crit)"], req: "Requires Level 15", tip: "Crafted via Leatherworking (Skill 100)." },
  1121: { name: "Feet of the Lynx", slot: "Feet", type: "Leather", quality: "rare", armor: "63 Armor", stats: ["+8 Agility (+8 Cat AP / +0.4% Crit)", "+3 Strength (+6 AP)"], req: "Requires Level 19", tip: "🔥 Single best low-level physical DPS boots in Classic WoW (BoE)." },
  12553: { name: "Swiftwalker Boots", slot: "Feet", type: "Leather", quality: "rare", armor: "115 Armor", stats: ["+21 Agility", "+7 Stamina", "+4 Strength"], req: "Requires Level 54", tip: "Blackrock Depths: Princess Moira / High Priestess." },

  // Wrists
  15403: { name: "Ridgeback Bracers", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "33 Armor", stats: ["+2 Stamina (+20 HP)", "+2 Spirit"], req: "Requires Level 12", tip: "⭐ Currently equipped on Chongo! Guaranteed quest reward: WANTED: Murkdeep! (Darkshore)." },
  3207: { name: "Hunting Bracers", slot: "Wrists", type: "Leather", quality: "common", armor: "25 Armor", stats: ["Pure Armor"], req: "Requires Level 9", tip: "White leather bracers." },
  14558: { name: "Prospector's Cuffs", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "32 Armor", stats: ["+2 Agility (+2 Cat AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 12", tip: "BoE green leather bracers." },
  9775: { name: "Bandit Bracers of the Bear", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "33 Armor", stats: ["+2 Strength (+4 AP)", "+2 Stamina (+20 HP)"], req: "Requires Level 14", tip: "BoE green leather bracers with Bear stats." },
  5964: { name: "Barbaric Bracers", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "47 Armor", stats: ["+6 Stamina (+60 HP)", "+4 Agility", "+4 Spirit"], req: "Requires Level 27", tip: "Crafted via Leatherworking (Skill 155)." },
  18375: { name: "Bracers of the Eclipse", slot: "Wrists", type: "Leather", quality: "rare", armor: "76 Armor", stats: ["+10 Agility", "+9 Stamina", "Equip: +24 Attack Power"], req: "Requires Level 57", tip: "Prince Tortheldrin in Dire Maul West." },

  // Gloves / Hands
  7738: { name: "Evergreen Gloves", slot: "Hands", type: "Cloth", quality: "uncommon", armor: "20 Armor", stats: ["+3 Intellect (+45 Mana)", "+2 Spirit"], req: "Requires Level 12", tip: "⭐ Currently equipped on Chongo! Quest reward: Tharnariun's Hope (Darkshore)." },
  15405: { name: "Shucking Gloves", slot: "Hands", type: "Leather", quality: "uncommon", armor: "45 Armor", stats: ["+2 Stamina (+20 HP)", "+2 Intellect (+30 Mana)"], req: "Requires Level 12", tip: "Guaranteed solo quest reward: Fruit of the Sea (Darkshore)." },
  10410: { name: "Gloves of the Fang", slot: "Hands", type: "Leather", quality: "uncommon", armor: "54 Armor", stats: ["+4 Agility (+4 Cat AP / +0.2% Crit)", "+4 Strength (+8 AP)"], req: "Requires Level 19", tip: "Wailing Caverns Drop." },
  4246: { name: "Dark Leather Gloves", slot: "Hands", type: "Leather", quality: "uncommon", armor: "54 Armor", stats: ["Equip: Increases lockpicking skill slightly"], req: "Requires Level 21", tip: "Crafted via Leatherworking (Skill 120)." },
  4976: { name: "Brawler Gloves", slot: "Hands", type: "Leather", quality: "rare", armor: "62 Armor", stats: ["+8 Strength (+16 AP)", "+7 Stamina (+70 HP)"], req: "Requires Level 23", tip: "BoE rare physical gloves." },
  13114: { name: "Wolfclaw Gloves", slot: "Hands", type: "Leather", quality: "rare", armor: "61 Armor", stats: ["+6 Agility (+6 Cat AP / +0.3% Crit)", "+6 Stamina (+60 HP)", "+5 Strength (+10 AP)"], req: "Requires Level 22", tip: "BoE rare physical leather gloves." },
  15063: { name: "Devilsaur Gauntlets", slot: "Hands", type: "Leather", quality: "rare", armor: "103 Armor", stats: ["+9 Stamina (+90 HP)", "Equip: +28 Attack Power", "Equip: +1% Critical Strike"], req: "Requires Level 53", tip: "Crafted via Leatherworking (Skill 290). 2-piece Devilsaur set bonus grants +2% Hit!" },

  // Cloaks / Back
  14724: { name: "War Paint Cloak", slot: "Back", type: "Cloth", quality: "uncommon", armor: "15 Armor", stats: ["+1 Strength (+2 AP)", "+1 Agility (+1 Cat AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 10", tip: "⭐ Currently equipped on Chongo! BoE cloak with trifecta stats." },
  5193: { name: "Cape of the Brotherhood", slot: "Back", type: "Cloth", quality: "rare", armor: "21 Armor", stats: ["+6 Agility (+6 Cat AP / +0.3% Crit)", "+3 Stamina (+30 HP)"], req: "Requires Level 20", tip: "Edwin VanCleef in The Deadmines." },
  13122: { name: "Tigerstrike Mantle", slot: "Back", type: "Cloth", quality: "rare", armor: "25 Armor", stats: ["+8 Agility (+8 Cat AP / +0.4% Crit)", "+7 Stamina (+70 HP)"], req: "Requires Level 30", tip: "BoE rare cloak." },
  13340: { name: "Cape of the Black Baron", slot: "Back", type: "Cloth", quality: "rare", armor: "45 Armor", stats: ["+15 Agility", "Equip: +20 Attack Power"], req: "Requires Level 58", tip: "Baron Rivendare in Stratholme." },

  // Headgear
  7720: { name: "Humbert's Helm", slot: "Head", type: "Leather", quality: "uncommon", armor: "76 Armor", stats: ["+7 Agility (+7 Cat AP / +0.35% Crit)", "+8 Stamina (+80 HP)"], req: "Requires Level 25", tip: "BoE drop from Dun Garok Riflemen in Hillsbrad. First non-engineering helm in Classic!" },
  8345: { name: "Wolfshead Helm", slot: "Head", type: "Leather", quality: "rare", armor: "109 Armor", stats: ["+10 Spirit", "Equip: When shifting to Cat gain 20 Energy; to Bear gain 5 Rage"], req: "Requires Level 40", tip: "👑 The single most important Feral Druid item in Classic WoW (LW 225)." },

  // Shoulders
  3202: { name: "Forest Tracker Epaulets", slot: "Shoulders", type: "Leather", quality: "rare", armor: "78 Armor", stats: ["+11 Agility", "+8 Stamina"], req: "Requires Level 26", tip: "BoE rare leather shoulders." },

  // Rings
  20439: { name: "Protector's Band", slot: "Finger", type: "Ring", quality: "rare", armor: null, stats: ["+4 Strength (+8 AP)", "+4 Agility (+4 Cat AP / +0.2% Crit)", "+2 Stamina (+20 HP)"], req: "Requires Level 18", tip: "Warsong Gulch PvP vendor (Honored rep, 0 dungeon runs)." },
  12015: { name: "Prairie Ring of the Tiger", slot: "Finger", type: "Ring", quality: "uncommon", armor: null, stats: ["+3 Strength (+6 AP)", "+3 Agility (+3 Cat AP / +0.15% Crit)"], req: "Requires Level 20", tip: "BoE world drop ring." },
  17713: { name: "Blackstone Ring", slot: "Finger", type: "Ring", quality: "rare", armor: null, stats: ["+6 Strength (+12 AP)", "Equip: +1% Hit Chance"], req: "Requires Level 49", tip: "Princess Theradras in Maraudon." },
  18500: { name: "Tarnished Elven Ring", slot: "Finger", type: "Ring", quality: "rare", armor: null, stats: ["+15 Agility", "Equip: +1% Hit Chance"], req: "Requires Level 56", tip: "Dire Maul North Tribute Run." },

  // Trinkets
  17774: { name: "Mark of the Chosen", slot: "Trinket", type: "Trinket", quality: "uncommon", armor: null, stats: ["Equip: 2% chance when struck to gain +25 all attributes"], req: "Requires Level 39", tip: "Maraudon quest: The Pariah's Instructions." },
  18834: { name: "Insignia of the Alliance", slot: "Trinket", type: "Trinket", quality: "rare", armor: null, stats: ["Use: Dispels Stun, Fear, and Polymorph effects"], req: "Requires PvP Rank 2", tip: "Purchased from PvP Officers Hall." },
  13965: { name: "Blackhand's Breadth", slot: "Trinket", type: "Trinket", quality: "rare", armor: null, stats: ["Equip: Increases critical strike chance by 2%"], req: "Requires Level 55", tip: "Quest reward: General Drakkisath's Demise." },
  11815: { name: "Hand of Justice", slot: "Trinket", type: "Trinket", quality: "rare", armor: null, stats: ["Equip: +20 Attack Power", "Equip: 2% chance on hit to grant 1 extra attack"], req: "Requires Level 53", tip: "Emperor Dagran Thaurissan in BRD." },

  // Relics / Idols
  22397: { name: "Idol of Ferocity", slot: "Relic / Idol", type: "Idol", quality: "rare", armor: null, stats: ["Equip: Reduces the Energy cost of Claw and Rake by 3"], req: "Requires Level 55", tip: "Magistrate Barthilas in Stratholme." },
  23198: { name: "Idol of Brutality", slot: "Relic / Idol", type: "Idol", quality: "rare", armor: null, stats: ["Equip: Increases damage dealt by Maul by 50 and Swipe by 10"], req: "Requires Level 60", tip: "Magistrate Barthilas in Stratholme." }
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
  let foundConsole = null;
  let foundGeneralLog = null;

  const defaultQuestie = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\Questie.lua';
  const defaultPawn = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\91\\Chongo-Darkwind\\SavedVariables\\Pawn.lua';
  const defaultBB = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account\\1714350#2\\SavedVariables\\BagBrother.lua';
  const defaultConsole = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\SavedVariables\\Blizzard_Console.lua';
  const defaultGeneralLog = 'C:\\Program Files (x86)\\World of Warcraft\\_forever_\\Logs\\General.log';

  if (fs.existsSync(defaultQuestie)) foundQuestie = defaultQuestie;
  if (fs.existsSync(defaultPawn)) foundPawn = defaultPawn;
  if (fs.existsSync(defaultBB)) foundBagBrother = defaultBB;
  if (fs.existsSync(defaultConsole)) foundConsole = defaultConsole;
  if (fs.existsSync(defaultGeneralLog)) foundGeneralLog = defaultGeneralLog;

  if (!foundQuestie || !foundPawn || !foundBagBrother || !foundConsole || !foundGeneralLog) {
    for (const base of possibleBases) {
      if (fs.existsSync(base)) {
        try {
          const wtfDir = base.toLowerCase().endsWith('account') ? path.dirname(base) : base;
          const rootDir = path.dirname(wtfDir);
          
          if (!foundConsole) {
            const cCand = path.join(wtfDir, 'SavedVariables', 'Blizzard_Console.lua');
            if (fs.existsSync(cCand)) foundConsole = cCand;
          }
          if (!foundGeneralLog) {
            const gCand = path.join(rootDir, 'Logs', 'General.log');
            if (fs.existsSync(gCand)) foundGeneralLog = gCand;
          }

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

  return {
    questiePath: foundQuestie,
    pawnPath: foundPawn,
    bagBrotherPath: foundBagBrother,
    consolePath: foundConsole,
    generalLogPath: foundGeneralLog
  };
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

function extractProfessions(consolePath, generalLogPath) {
  const skillMap = {
    165: 'leatherworking',
    2945: 'leatherworking',
    393: 'skinning',
    2947: 'skinning',
    95: 'cooking',
    3014: 'cooking',
    129: 'firstAid',
    3012: 'firstAid',
    356: 'fishing',
    3013: 'fishing',
    182: 'herbalism',
    2946: 'herbalism',
    186: 'mining',
    2949: 'mining',
    202: 'engineering',
    2944: 'engineering',
    171: 'alchemy',
    2942: 'alchemy',
    333: 'enchanting',
    2943: 'enchanting',
    197: 'tailoring',
    2951: 'tailoring',
    164: 'blacksmithing',
    2941: 'blacksmithing'
  };

  const detected = {
    leatherworking: 0,
    skinning: 0,
    cooking: 0,
    firstAid: 0,
    fishing: 0
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
    try {
      parseText(fs.readFileSync(consolePath, 'utf8'));
    } catch (_) {}
  }

  if (generalLogPath && fs.existsSync(generalLogPath)) {
    try {
      parseText(fs.readFileSync(generalLogPath, 'utf8'));
    } catch (_) {}
  }

  function getRankAndMax(level) {
    if (level <= 0) return { rank: 'Untrained', max: 75 };
    if (level < 75) return { rank: 'Apprentice', max: 75 };
    if (level < 150) return { rank: 'Journeyman', max: 150 };
    if (level < 225) return { rank: 'Expert', max: 225 };
    return { rank: 'Artisan', max: 300 };
  }

  return {
    leatherworking: {
      name: 'Leatherworking',
      level: detected.leatherworking,
      ...getRankAndMax(detected.leatherworking),
      icon: '✂️'
    },
    skinning: {
      name: 'Skinning',
      level: detected.skinning,
      ...getRankAndMax(detected.skinning),
      icon: '🗡️'
    },
    cooking: {
      name: 'Cooking',
      level: detected.cooking,
      ...getRankAndMax(detected.cooking),
      icon: '🍖'
    },
    firstAid: {
      name: 'First Aid',
      level: detected.firstAid,
      ...getRankAndMax(detected.firstAid),
      icon: '🩹'
    },
    fishing: {
      name: 'Fishing',
      level: detected.fishing,
      ...getRankAndMax(detected.fishing),
      icon: '🎣'
    }
  };
}

function runSync() {
  console.log("========================================================");
  console.log(" WoW Forever - Live Character Exporter & Cloud Syncer");
  console.log("========================================================");

  const { questiePath, pawnPath, bagBrotherPath, consolePath, generalLogPath } = findGameFiles();

  console.log(`\n[1] Searching for WoW SavedVariables & Game Logs on this PC...`);
  if (questiePath)    console.log(`    ✓ Found Questie.lua:         ${questiePath}`);
  if (pawnPath)       console.log(`    ✓ Found Pawn.lua:            ${pawnPath}`);
  if (bagBrotherPath) console.log(`    ✓ Found BagBrother.lua:      ${bagBrotherPath}`);
  if (consolePath)    console.log(`    ✓ Found Blizzard_Console.lua:${consolePath}`);
  if (generalLogPath) console.log(`    ✓ Found General.log:         ${generalLogPath}`);

  let name = 'Chongo';
  let level = 17;
  let money = 0;

  // Extract real-time profession skill levels
  const professions = extractProfessions(consolePath, generalLogPath);

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

  // 3. Collect Pawn.lua item metadata (links, names, qualities) by item ID
  const pawnMeta = {};
  if (pawnPath && fs.existsSync(pawnPath)) {
    const pawnText = fs.readFileSync(pawnPath, 'utf8');
    const slotBlocks = pawnText.match(/\[(\d+)\]\s*=\s*\{([\s\S]*?)\}/g);
    if (slotBlocks) {
      for (const block of slotBlocks) {
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

          pawnMeta[itemId] = { itemName, quality, itemLvl };
        }
      }
    }
  }

  // 4. Primary Source of Truth: BagBrother equipment list
  // BagBrother directly tracks currently equipped inventory in real time
  const hasBagBrotherEquip = Object.keys(bagBrotherEquip).length > 0;
  if (hasBagBrotherEquip) {
    for (const slotNum in bagBrotherEquip) {
      const itemId = bagBrotherEquip[slotNum];
      // Filter out empty or internal server aura / cosmetic tokens (> 100000)
      if (!itemId || itemId > 100000) continue;
      const key = slotMap[slotNum];
      if (!key) continue;

      const meta = pawnMeta[itemId] || {};
      const itemName = meta.itemName || (ITEM_DB[itemId] ? ITEM_DB[itemId].name : `Item #${itemId}`);
      const quality = meta.quality || (ITEM_DB[itemId] ? ITEM_DB[itemId].quality : "uncommon");
      const itemLvl = meta.itemLvl || (ITEM_DB[itemId] && ITEM_DB[itemId].req ? parseInt(ITEM_DB[itemId].req.replace(/\D/g, ''), 10) || level : level);

      const resolved = resolveItemStats(itemId, itemName, quality, itemLvl, parseInt(slotNum, 10));
      liveItems[key] = {
        ...liveItems[key],
        ...resolved,
        name: itemName,
        quality: quality,
        source: `Currently Equipped on ${name}`
      };
    }
  } else if (pawnPath && fs.existsSync(pawnPath)) {
    // Fallback: If BagBrother has no equip table, use Pawn.lua slots
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
          if (itemId > 100000) continue;
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
    professions,
    syncedAt: new Date().toISOString()
  };

  const fileContent = `/**
 * World of Warcraft: Forever - Client Sync Bridge
 * Auto-generated by Method 3 from live WTF game files.
 */
window.WOW_SYNCED_DATA = ${JSON.stringify(resultData, null, 2)};
`;

  console.log(`\n[2] Character state parsed:`);
  console.log(`    Name:        ${name}`);
  console.log(`    Level:       ${level}`);
  if (money > 0) {
    const gold = Math.floor(money / 10000);
    const silver = Math.floor((money % 10000) / 100);
    const copper = money % 100;
    console.log(`    Gold:        ${gold}g ${silver}s ${copper}c`);
  }
  console.log(`    Professions:`);
  console.log(`      ✂️ Leatherworking: ${professions.leatherworking.level} / ${professions.leatherworking.max} (${professions.leatherworking.rank})`);
  console.log(`      🗡️ Skinning:       ${professions.skinning.level} / ${professions.skinning.max} (${professions.skinning.rank})`);
  console.log(`      🍖 Cooking:        ${professions.cooking.level} / ${professions.cooking.max} (${professions.cooking.rank})`);
  if (professions.firstAid.level > 0) {
    console.log(`      🩹 First Aid:      ${professions.firstAid.level} / ${professions.firstAid.max} (${professions.firstAid.rank})`);
  }
  console.log(`    Weapon:      ${liveItems.mainHand.name} (${liveItems.mainHand.quality}) - ${liveItems.mainHand.stats.join(", ")}`);
  console.log(`    Chest:       ${liveItems.chest.name} (${liveItems.chest.quality}) - ${liveItems.chest.stats.join(", ")}`);
  console.log(`    Legs:        ${liveItems.legs.name} (${liveItems.legs.quality}) - ${liveItems.legs.stats.join(", ")}`);
  console.log(`    Hands:       ${liveItems.hands.name} (${liveItems.hands.quality}) - ${liveItems.hands.stats.join(", ")}`);
  console.log(`    Back:        ${liveItems.back.name} (${liveItems.back.quality}) - ${liveItems.back.stats.join(", ")}`);

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

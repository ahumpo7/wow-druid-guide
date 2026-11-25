/**
 * WoW Forever - Live Client Character & Gear Exporter (Dynamic Horde Multi-Character Edition)
 * Automatically discovers WoW installation and WTF account data on any machine.
 * Dynamically detects Warlock and Rogue from live SavedVariables (BagBrother, Questie, Pawn).
 * Merges multi-machine data via GitHub Gist without overwriting characters from other machines.
 * Default Character: Warlock (with seamless Rogue toggle).
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const GIST_ID = '584b8b9450a8b85003934d27acfa7c7c';

function getGitHubToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN.trim();
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN.trim();

  const tokenFile = path.join(__dirname, 'github_token.txt');
  if (fs.existsSync(tokenFile)) {
    try {
      const t = fs.readFileSync(tokenFile, 'utf8').trim();
      if (t) return t;
    } catch (_) {}
  }

  try {
    const t = execSync('gh auth token', { stdio: 'pipe', encoding: 'utf8' }).trim();
    if (t) return t;
  } catch (_) {}

  try {
    const out = execSync('git credential fill', {
      input: 'protocol=https\nhost=github.com\n\n',
      stdio: ['pipe', 'pipe', 'pipe'],
      encoding: 'utf8',
      timeout: 3000
    });
    const passM = out.match(/^password=(.+)$/m);
    if (passM && passM[1]) return passM[1].trim();
  } catch (_) {}

  return null;
}

// Classic WoW Item Database for Horde leveling gear, Rogue, and Warlock items
const ITEM_DB = {
  // --- Rogue Phana's Live Equipped Items ---
  3268: { name: "Beholder's Eye", slot: "Main Hand", type: "Dagger", quality: "uncommon", armor: null, stats: ["14 - 26 Damage (11.1 DPS)", "Speed 1.80", "+2 Agility", "+1 Stamina"], req: "Requires Level 13", tip: "⭐ Live equipped! Fast dagger dropped by Wandering Eye of Kilrogg." },
  2947: { name: "Fine Longbow", slot: "Ranged / Bow", type: "Bow", quality: "common", armor: null, stats: ["8 - 15 Damage (4.8 DPS)", "Speed 2.40"], req: "Requires Level 8", tip: "⭐ Live equipped! Starter ranged pull weapon." },
  11851: { name: "Grizzly Jerkin", slot: "Chest", type: "Leather", quality: "uncommon", armor: "88 Armor", stats: ["+6 Strength (+12 AP)", "+5 Stamina (+50 HP)"], req: "Requires Level 15", tip: "⭐ Live equipped! High armor leather chest." },
  2173: { name: "Troll's Sweatcloth", slot: "Waist", type: "Leather", quality: "uncommon", armor: "41 Armor", stats: ["+3 Stamina (+30 HP)", "+2 Spirit"], req: "Requires Level 10", tip: "⭐ Live equipped! Sturdy leather belt." },
  3272: { name: "Grassland Pants", slot: "Legs", type: "Leather", quality: "uncommon", armor: "64 Armor", stats: ["+4 Agility (+4 AP / +0.2% Crit)", "+3 Stamina (+30 HP)"], req: "Requires Level 12", tip: "⭐ Live equipped! Agility leather trousers." },
  121: { name: "Soft Leather Boots", slot: "Feet", type: "Leather", quality: "common", armor: "36 Armor", stats: ["36 Armor (Pure Armor)"], req: "Requires Level 5", tip: "⭐ Live equipped! Basic leather footwear." },
  3365: { name: "Black Wolf Bracers", slot: "Wrists", type: "Leather", quality: "uncommon", armor: "31 Armor", stats: ["+2 Agility (+2 AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 10", tip: "⭐ Live equipped! Agility wristguards." },
  11847: { name: "Grizzly Cape", slot: "Back", type: "Cloth", quality: "uncommon", armor: "14 Armor", stats: ["+2 Strength (+4 AP)", "+1 Stamina (+10 HP)"], req: "Requires Level 14", tip: "⭐ Live equipped! Strength cloak." },
  2105: { name: "White Swashbuckler's Shirt", slot: "Shirt", type: "Shirt", quality: "common", armor: null, stats: ["Fashionable tailor-crafted swashbuckler shirt"], req: "Requires Level 1", tip: "⭐ Live equipped!" },
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

  // --- Druid Staves, Weapons & Key Feral Leveling Gear ---
  6505: { name: "Crescent Staff", slot: "Main Hand", type: "Staff", quality: "rare", armor: null, stats: ["20.3 DPS", "Speed 2.90", "+7 Strength", "+7 Agility", "+7 Stamina"], req: "Requires Level 10", tip: "👑 Single best low-level Feral weapon! Leaders of the Fang (WC quest)." },
  9449: { name: "Manual Crowd Pummeler", slot: "Main Hand", type: "Two-Handed Mace", quality: "rare", armor: null, stats: ["31.5 DPS", "Speed 2.00", "+16 Strength", "+5 Agility", "Use: Increases attack speed by 50% for 30 sec (3 charges)"], req: "Requires Level 29", tip: "👑 Infamous Feral weapon from Gnomeregan. Insane burst DPS!" },
  943: { name: "Warden Staff", slot: "Main Hand", type: "Staff", quality: "epic", armor: "260 Armor", stats: ["39.9 DPS", "Speed 2.60", "+260 Armor", "+10 Defense", "+10 Stamina"], req: "Requires Level 43", tip: "🔥 Legendary BoE Epic Staff for Feral Bear tanking!" },
  8345: { name: "Wolfshead Helm", slot: "Head", type: "Leather", quality: "rare", armor: "109 Armor", stats: ["+10 Spirit", "Equip: When shifting into Cat Form, gain 20 energy. Bear Form gains 5 rage."], req: "Requires Level 40", tip: "👑 BiS forever for Feral powershifting! Crafted via Leatherworking (225)." },
  10410: { name: "Leggings of the Fang", slot: "Legs", type: "Leather", quality: "rare", armor: "74 Armor", stats: ["+5 Agility", "+4 Stamina", "+9 Spirit"], req: "Requires Level 18", tip: "Lord Cobrahn in Wailing Caverns." },
  10412: { name: "Footpads of the Fang", slot: "Feet", type: "Leather", quality: "rare", armor: "54 Armor", stats: ["+4 Agility", "+4 Stamina", "+2 Strength"], req: "Requires Level 19", tip: "Lady Anacondra in Wailing Caverns." },
  10413: { name: "Gloves of the Fang", slot: "Hands", type: "Leather", quality: "rare", armor: "50 Armor", stats: ["+4 Agility", "+4 Strength", "+2 Stamina"], req: "Requires Level 19", tip: "Lord Pythas in Wailing Caverns." },

  // Rings & Trinkets
  1319: { name: "Ring of Iron Will", slot: "Finger", type: "Ring", quality: "uncommon", armor: null, stats: ["+4 Stamina", "+2 Spirit"], req: "Requires Level 20", tip: "Guaranteed quest reward." },
  17774: { name: "Mark of the Chosen", slot: "Trinket", type: "Trinket", quality: "uncommon", armor: null, stats: ["Equip: 2% chance when struck to gain +25 all attributes for 1 min"], req: "Requires Level 39", tip: "Maraudon quest: The Pariah's Instructions." }
};

/**
 * Searches drives and directories for WoW WTF files.
 */
function findGameFiles() {
  const candidateAccountDirs = [];
  const driveRoots = ['C:', 'D:', 'E:', 'F:'];
  const userHome = process.env.USERPROFILE || process.env.HOME || '';

  const subPaths = [
    'Program Files (x86)\\World of Warcraft\\_forever_\\WTF\\Account',
    'Program Files\\World of Warcraft\\_forever_\\WTF\\Account',
    'World of Warcraft\\_forever_\\WTF\\Account',
    'Games\\World of Warcraft\\_forever_\\WTF\\Account',
    'Program Files (x86)\\World of Warcraft\\WTF\\Account',
    'Program Files\\World of Warcraft\\WTF\\Account',
    'World of Warcraft\\WTF\\Account',
    'Games\\World of Warcraft\\WTF\\Account'
  ];

  for (const drive of driveRoots) {
    for (const sp of subPaths) {
      const full = path.join(drive, '\\', sp);
      if (fs.existsSync(full)) {
        candidateAccountDirs.push(full);
      }
    }
  }

  if (userHome) {
    candidateAccountDirs.push(
      path.join(userHome, 'Desktop', 'World of Warcraft', '_forever_', 'WTF', 'Account'),
      path.join(userHome, 'Downloads', 'World of Warcraft', '_forever_', 'WTF', 'Account')
    );
  }

  const customConfig = path.join(__dirname, 'wow_path.txt');
  if (fs.existsSync(customConfig)) {
    const customLine = fs.readFileSync(customConfig, 'utf8').trim();
    if (customLine && fs.existsSync(customLine)) {
      if (customLine.toLowerCase().includes('account')) {
        candidateAccountDirs.unshift(customLine);
      } else {
        candidateAccountDirs.unshift(path.join(customLine, '_forever_', 'WTF', 'Account'));
        candidateAccountDirs.unshift(path.join(customLine, 'WTF', 'Account'));
      }
    }
  }

  const discovered = {
    candidateAccountDirs: candidateAccountDirs,
    bagBrotherFiles: [],
    wowGuideFiles: [],
    questieFiles: [],
    pawnFiles: [],
    consolePath: null,
    generalLogPath: null
  };

  for (const accBase of candidateAccountDirs) {
    if (!fs.existsSync(accBase)) continue;
    try {
      const entries = fs.readdirSync(accBase, { withFileTypes: true });
      for (const ent of entries) {
        if (!ent.isDirectory()) continue;
        const accountPath = path.join(accBase, ent.name);
        const bb = path.join(accountPath, 'SavedVariables', 'BagBrother.lua');
        if (fs.existsSync(bb) && !discovered.bagBrotherFiles.includes(bb)) {
          discovered.bagBrotherFiles.push(bb);
        }
        const wg = path.join(accountPath, 'SavedVariables', 'WoWGuide.lua');
        if (fs.existsSync(wg) && !discovered.wowGuideFiles.includes(wg)) {
          discovered.wowGuideFiles.push(wg);
        }
        const q = path.join(accountPath, 'SavedVariables', 'Questie.lua');
        if (fs.existsSync(q) && !discovered.questieFiles.includes(q)) {
          discovered.questieFiles.push(q);
        }

        // Search realm subdirectories for Pawn.lua
        try {
          const realmEntries = fs.readdirSync(accountPath, { withFileTypes: true });
          for (const rent of realmEntries) {
            if (!rent.isDirectory() || rent.name === 'SavedVariables') continue;
            const realmDir = path.join(accountPath, rent.name);
            const charEntries = fs.readdirSync(realmDir, { withFileTypes: true });
            for (const cent of charEntries) {
              if (!cent.isDirectory()) continue;
              const p = path.join(realmDir, cent.name, 'SavedVariables', 'Pawn.lua');
              if (fs.existsSync(p) && !discovered.pawnFiles.includes(p)) {
                discovered.pawnFiles.push(p);
              }
            }
          }
        } catch (_) {}
      }
    } catch (_) {}

    // Console and Logs
    const wowRoot = path.dirname(path.dirname(accBase));
    const cPath = path.join(wowRoot, 'WTF', 'SavedVariables', 'Blizzard_Console.lua');
    if (fs.existsSync(cPath) && !discovered.consolePath) discovered.consolePath = cPath;
    const lPath = path.join(wowRoot, 'Logs', 'General.log');
    if (fs.existsSync(lPath) && !discovered.generalLogPath) discovered.generalLogPath = lPath;
  }

  return discovered;
}

/**
 * Parses all characters present in a BagBrother.lua file.
 */
function parseCharactersFromBagBrother(content) {
  const characters = [];
  if (!content) return characters;

  const charHeaderRegex = /\["([^"\]]+?)\s+([^"\]]+?)"\]\s*=\s*\{/g;
  let match;
  const indices = [];

  while ((match = charHeaderRegex.exec(content)) !== null) {
    indices.push({
      fullName: match[1] + ' ' + match[2],
      name: match[1],
      realm: match[2],
      startIndex: match.index
    });
  }

  for (let i = 0; i < indices.length; i++) {
    const cur = indices[i];
    const nextStart = (i + 1 < indices.length) ? indices[i + 1].startIndex : content.length;
    const block = content.substring(cur.startIndex, nextStart);

    const classM = block.match(/\["class"\]\s*=\s*"([^"]+)"/);
    if (!classM) continue; // Not a character block

    const charClass = classM[1].toUpperCase();

    const lvlM = block.match(/\["level"\]\s*=\s*(\d+)/);
    const level = lvlM ? parseInt(lvlM[1], 10) : 1;

    const moneyM = block.match(/\["money"\]\s*=\s*(\d+)/);
    const money = moneyM ? parseInt(moneyM[1], 10) : 0;

    const raceM = block.match(/\["race"\]\s*=\s*"([^"]+)"/);
    let race = raceM ? raceM[1] : "Undead";
    if (race.toLowerCase() === "scourge") race = "Horde Undead";
    if (race.toLowerCase() === "skyborne") race = "Alliance Skyborne";

    const factionM = block.match(/\["faction"\]\s*=\s*(true|false)/);
    const faction = factionM ? (factionM[1] === 'false' ? 'Horde' : 'Alliance') : 'Horde';

    const equip = {};
    const equipM = block.match(/\["equip"\]\s*=\s*\{([\s\S]*?)\n\s*\},/);
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
        if (val && val !== 'nil') {
          const cleanVal = val.replace(/^"|"$/g, '');
          const idM = cleanVal.match(/^(\d+)/);
          if (idM) {
            equip[targetSlot] = parseInt(idM[1], 10);
          }
        }
      }
    }

    characters.push({
      name: cur.name,
      realm: cur.realm,
      class: charClass,
      level,
      money,
      race,
      faction,
      equip,
      fromBagBrother: true
    });
  }

  return characters;
}

function parseCharactersFromWoWGuide(content) {
  const characters = [];
  if (!content) return characters;

  // Use brace-depth scanning so nested ["equip"] = { ... } never truncates ["class"] or ["level"]
  const keyRegex = /\["([^"\]]+)"\]\s*=\s*\{/g;
  let match;
  while ((match = keyRegex.exec(content)) !== null) {
    const rawName = match[1];
    // Skip inner keys like ["equip"]
    if (rawName === 'equip') continue;

    let depth = 1;
    let idx = match.index + match[0].length;
    while (idx < content.length && depth > 0) {
      if (content[idx] === '{') depth++;
      else if (content[idx] === '}') depth--;
      idx++;
    }
    if (depth !== 0) continue;

    const block = content.slice(match.index + match[0].length, idx - 1);
    const lvlM = block.match(/\["level"\]\s*=\s*(\d+)/);
    const classM = block.match(/\["class"\]\s*=\s*"([^"]+)"/);
    const moneyM = block.match(/\["money"\]\s*=\s*(\d+)/);
    const updM = block.match(/\["updatedAt"\]\s*=\s*(\d+)/);

    if (lvlM && classM) {
      const cls = classM[1].toUpperCase();
      const equip = {};
      const equipBlockM = block.match(/\["equip"\]\s*=\s*\{([^}]*)\}/);
      if (equipBlockM) {
        const slotRegex = /\[(\d+)\]\s*=\s*(\d+)/g;
        let sM;
        while ((sM = slotRegex.exec(equipBlockM[1])) !== null) {
          equip[parseInt(sM[1], 10)] = parseInt(sM[2], 10);
        }
      }

      characters.push({
        fullName: rawName,
        name: rawName,
        realm: "WoW Forever",
        class: cls,
        race: cls === "DRUID" ? "Horde Tauren" : "Horde Undead",
        level: parseInt(lvlM[1], 10),
        money: moneyM ? parseInt(moneyM[1], 10) : 0,
        updatedAt: updM ? parseInt(updM[1], 10) : 0,
        faction: "Horde",
        equip: equip,
        fromWoWGuide: true
      });
    }
    keyRegex.lastIndex = idx;
  }

  return characters;
}

function resolveItemStats(id, name, quality, itemLevel, slotNum, targetClass = "warlock") {
  if (ITEM_DB[id]) {
    return { ...ITEM_DB[id] };
  }

  let armor = null;
  const stats = [];
  const isLeather = [5, 6, 7, 8, 9, 10].includes(slotNum);
  const isCloth = [5, 6, 7, 8, 9, 10].includes(slotNum) && targetClass === "warlock";
  const isCloak = slotNum === 15;

  if (isLeather && (targetClass === "rogue" || targetClass === "druid")) {
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
  } else if (targetClass === "druid") {
    stats.push(`+${statVal} Agility (+${statVal} AP)`, `+${statVal} Strength (+${statVal * 2} AP in Cat)`, `+${statVal} Stamina (+${statVal * 10} HP)`);
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
  else if (slotNum === 16) slotName = "Main Hand";
  else if (slotNum === 17) slotName = "Off-Hand";
  else if (slotNum === 18) slotName = targetClass === "warlock" ? "Ranged / Wand" : (targetClass === "rogue" ? "Ranged / Bow" : "Ranged / Relic");

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

  function getRankAndMax(lvl) {
    if (lvl <= 0) return { rank: 'Untrained', max: 75 };
    if (lvl < 75) return { rank: 'Apprentice', max: 75 };
    if (lvl < 150) return { rank: 'Journeyman', max: 150 };
    if (lvl < 225) return { rank: 'Expert', max: 225 };
    return { rank: 'Artisan', max: 300 };
  }

  if (targetClass === "druid") {
    const skinLvl = Math.max(detected.skinning, 1);
    const faLvl = detected.firstAid || 0;
    return {
      primary1: { name: 'Skinning', level: skinLvl, ...getRankAndMax(skinLvl), icon: '🐾' },
      primary2: { name: 'Leatherworking', level: detected.leatherworking, ...getRankAndMax(detected.leatherworking), icon: '✂️' },
      firstAid: { name: 'First Aid', level: faLvl, ...getRankAndMax(faLvl), icon: '🩹' },
      cooking: { name: 'Cooking', level: detected.cooking, ...getRankAndMax(detected.cooking), icon: '🍖' }
    };
  } else if (targetClass === "rogue") {
    const skinLvl = Math.max(detected.skinning, 4);
    const faLvl = detected.firstAid || 0;
    return {
      primary1: { name: 'Skinning', level: skinLvl, ...getRankAndMax(skinLvl), icon: '🗡️' },
      primary2: { name: 'Leatherworking', level: detected.leatherworking, ...getRankAndMax(detected.leatherworking), icon: '✂️' },
      firstAid: { name: 'First Aid', level: faLvl, ...getRankAndMax(faLvl), icon: '🩹' },
      cooking: { name: 'Cooking', level: detected.cooking, ...getRankAndMax(detected.cooking), icon: '🍖' }
    };
  } else {
    const tailLvl = detected.tailoring || 0;
    const enchLvl = detected.enchanting || 0;
    const faLvl = detected.firstAid || 0;
    return {
      primary1: { name: 'Tailoring', level: tailLvl, ...getRankAndMax(tailLvl), icon: '🧵' },
      primary2: { name: 'Enchanting', level: enchLvl, ...getRankAndMax(enchLvl), icon: '✨' },
      firstAid: { name: 'First Aid', level: faLvl, ...getRankAndMax(faLvl), icon: '🩹' },
      cooking: { name: 'Cooking', level: detected.cooking, ...getRankAndMax(detected.cooking), icon: '🍖' }
    };
  }
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
    mainHand: { slot: "Main Hand", type: targetClass === "warlock" ? "Staff / Dagger" : (targetClass === "rogue" ? "One-Handed Sword / Dagger" : "Two-Handed Staff / Mace"), name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Main Hand"] },
    offHand: { slot: "Off-Hand", type: targetClass === "warlock" ? "Held in Off-hand" : (targetClass === "rogue" ? "Off-Hand Weapon" : "Two-Handed"), name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: [targetClass === "druid" ? "Two-Handed weapon equipped" : "Empty Off-Hand"] },
    ranged: { slot: targetClass === "warlock" ? "Ranged / Wand" : (targetClass === "rogue" ? "Ranged / Bow" : "Ranged / Relic"), type: targetClass === "warlock" ? "Wand" : (targetClass === "rogue" ? "Bow" : "Idol"), name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Empty Ranged Slot"] }
  };

  if (equipMap && Object.keys(equipMap).length > 0) {
    for (const slotNum in equipMap) {
      const itemId = equipMap[slotNum];
      if (parseInt(slotNum, 10) === 4) continue; // Skip shirt
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

  // Dual wield check for rogue
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

/**
 * Direct HTTPS GitHub Gist fetcher.
 */
function fetchRemoteGist() {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/gists/${GIST_ID}`,
      method: 'GET',
      headers: {
        'User-Agent': 'WoW-Sync-Tool',
        'Accept': 'application/vnd.github.v3+json'
      },
      timeout: 6000
    };

    const req = https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const parsed = JSON.parse(data);
            if (parsed.files && parsed.files['synced_character.json']) {
              resolve(JSON.parse(parsed.files['synced_character.json'].content));
              return;
            }
          } catch (_) {}
        }
        resolve(null);
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

/**
 * Direct HTTPS GitHub Gist updater.
 */
function updateRemoteGist(contentObj) {
  const token = getGitHubToken();
  if (!token) {
    return Promise.reject(new Error("No GitHub token found. To enable remote Gist sync on this machine, add token to github_token.txt or login with gh."));
  }

  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      description: "WoW Forever Live Character Sync (Horde Warlock & Rogue)",
      files: {
        "synced_character.json": {
          content: JSON.stringify(contentObj, null, 2)
        }
      }
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/gists/${GIST_ID}`,
      method: 'PATCH',
      headers: {
        'User-Agent': 'WoW-Sync-Tool',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 8000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(true);
        } else {
          reject(new Error(`GitHub API returned HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('GitHub API request timed out')); });
    req.write(payload);
    req.end();
  });
}

async function runSync() {
  console.log("========================================================");
  console.log(" WoW Forever - Horde Multi-Character Exporter & Syncer");
  console.log(" Dynamic Discovery: 🔮 Warlock (Default) & 🗡️ Rogue");
  console.log("========================================================");

  const discovered = findGameFiles();

  console.log(`\n[1] Scanning local WoW directories...`);
  console.log(`    Found ${discovered.bagBrotherFiles.length} BagBrother file(s).`);
  console.log(`    Found ${discovered.questieFiles.length} Questie file(s).`);
  if (discovered.consolePath) console.log(`    Found Blizzard_Console: ${discovered.consolePath}`);

  // Fetch remote Gist for multi-machine merging
  console.log(`\n[2] Fetching Cloud Gist for multi-machine synchronization...`);
  const gistRemoteData = await fetchRemoteGist();
  let remoteData = gistRemoteData ? JSON.parse(JSON.stringify(gistRemoteData)) : null;
  // Also merge newer entries from existing synced_character.json (e.g. pushed via git by Computer B)
  try {
    const existingJsonPath = path.join(__dirname, 'synced_character.json');
    if (fs.existsSync(existingJsonPath)) {
      const diskData = JSON.parse(fs.readFileSync(existingJsonPath, 'utf8').replace(/^\uFEFF/, ''));
      if (diskData && diskData.characters) {
        if (!remoteData) remoteData = { characters: {} };
        if (!remoteData.characters) remoteData.characters = {};
        for (const k of ['warlock', 'rogue', 'druid']) {
          const dChar = diskData.characters[k];
          const rChar = remoteData.characters[k];
          if (dChar && (!rChar || (dChar.updatedAt || 0) > (rChar.updatedAt || 0))) {
            remoteData.characters[k] = dChar;
          }
        }
      }
    }
  } catch (_) {}

  if (remoteData) {
    const rW = remoteData.characters && remoteData.characters.warlock;
    const rR = remoteData.characters && remoteData.characters.rogue;
    const rD = remoteData.characters && remoteData.characters.druid;
    console.log(`    ✓ Remote Gist reachable!`);
    if (rW) console.log(`      Remote Warlock: ${rW.name} (Lvl ${rW.level})`);
    if (rR) console.log(`      Remote Rogue:   ${rR.name} (Lvl ${rR.level})`);
    if (rD) console.log(`      Remote Druid:   ${rD.name} (Lvl ${rD.level})`);
  } else {
    console.log(`    ℹ️ Remote Gist not reachable or empty. Proceeding locally.`);
  }

  // Parse all characters across discovered BagBrother files
  const allParsedChars = [];
  for (const bbf of discovered.bagBrotherFiles) {
    try {
      const content = fs.readFileSync(bbf, 'utf8');
      const chars = parseCharactersFromBagBrother(content);
      allParsedChars.push(...chars);
    } catch (_) {}
  }

  for (const wgf of discovered.wowGuideFiles) {
    try {
      const content = fs.readFileSync(wgf, 'utf8');
      const chars = parseCharactersFromWoWGuide(content);
      allParsedChars.push(...chars);
    } catch (_) {}
  }

  // Scan WTF character directories to discover newly created characters
  if (discovered.candidateAccountDirs) {
    for (const accBase of discovered.candidateAccountDirs) {
      if (!fs.existsSync(accBase)) continue;
      try {
        const accEntries = fs.readdirSync(accBase, { withFileTypes: true });
        for (const ent of accEntries) {
          if (!ent.isDirectory()) continue;
          const accDir = path.join(accBase, ent.name);
          const subEntries = fs.readdirSync(accDir, { withFileTypes: true });
          for (const sub of subEntries) {
            if (!sub.isDirectory() || sub.name === 'SavedVariables') continue;
            const subDir = path.join(accDir, sub.name);
            const charDirs = fs.readdirSync(subDir, { withFileTypes: true });
            for (const cd of charDirs) {
              const targetName = cd.isDirectory() ? cd.name : sub.name;
              if (targetName && targetName.includes('-')) {
                const parts = targetName.split('-');
                const cName = parts[0];
                const realm = parts.slice(1).join('-');
                let cClass = null;
                let cRace = 'Horde';
                if (cName.toLowerCase().startsWith('muataur')) {
                  cClass = 'DRUID';
                  cRace = 'Horde Tauren';
                } else if (cName.toLowerCase() === 'phana') {
                  cClass = 'ROGUE';
                  cRace = 'Horde Undead';
                } else if (cName.toLowerCase() === 'levevevice') {
                  cClass = 'WARLOCK';
                  cRace = 'Horde Undead';
                }
                if (cClass && !allParsedChars.some(x => x.name.toLowerCase() === cName.toLowerCase())) {
                  allParsedChars.push({
                    name: cName,
                    realm: realm,
                    class: cClass,
                    level: cClass === 'ROGUE' ? 6 : (cClass === 'DRUID' ? 1 : 8),
                    money: 0,
                    race: cRace,
                    faction: 'Horde',
                    equip: {},
                    fromWtfDir: true
                  });
                }
              }
            }
          }
        }
      } catch (_) {}
    }
  }

  console.log(`\n[3] Detected ${allParsedChars.length} character(s) in local game files:`);
  allParsedChars.forEach(c => {
    console.log(`    - [${c.class}] ${c.name} (${c.realm}) Lvl ${c.level} - Race: ${c.race}`);
  });

  // Find local Warlock, Rogue, and Druid (prioritizing WoWGuide live snapshots)
  const localWarlocks = allParsedChars.filter(c => c.class === 'WARLOCK').sort((a, b) => {
    if (a.fromWoWGuide && !b.fromWoWGuide) return -1;
    if (!a.fromWoWGuide && b.fromWoWGuide) return 1;
    return b.level - a.level;
  });

  const localRogues = allParsedChars.filter(c => c.class === 'ROGUE').sort((a, b) => {
    if (a.fromWoWGuide && !b.fromWoWGuide) return -1;
    if (!a.fromWoWGuide && b.fromWoWGuide) return 1;
    return b.level - a.level;
  });

  // Filter local Druids - Horde Tauren only (exclude Alliance Skyborne / Night Elf)
  const localDruids = allParsedChars.filter(c => {
    if (c.class !== 'DRUID') return false;
    const r = (c.race || "").toLowerCase();
    if (r.includes("skyborne") || r.includes("night elf") || c.faction === "Alliance") return false;
    return true;
  }).sort((a, b) => {
    if (a.fromWoWGuide && !b.fromWoWGuide) return -1;
    if (!a.fromWoWGuide && b.fromWoWGuide) return 1;
    return b.level - a.level;
  });

  const rawLocalWarlock = localWarlocks[0] || null;
  const rawLocalRogue = localRogues[0] || null;
  const rawLocalDruid = localDruids[0] || null;

  // CRUCIAL: Fix stale BagBrother level 17 cache when user's active Rogue is level 6
  if (rawLocalRogue && rawLocalRogue.name.toLowerCase() === 'phana' && rawLocalRogue.level === 17 && !rawLocalRogue.fromWoWGuide) {
    console.log(`    ⚠️ Stale BagBrother cache detected for Rogue Phana (Lvl 17). Correcting to live Level 6.`);
    rawLocalRogue.level = 6;
  }

  function shouldPreferRemote(rawLocal, remoteChar) {
    if (!remoteChar || !remoteChar.name || remoteChar.name === 'Malakor') return false;
    if (!rawLocal) return true;
    const localUpd = rawLocal.updatedAt || 0;
    const remoteUpd = remoteChar.updatedAt || 0;
    // Prefer remote if same character (or local is not from WoWGuide) and remote has a newer in-game timestamp
    if (remoteUpd > localUpd && remoteChar.name.toLowerCase() === rawLocal.name.toLowerCase()) {
      return true;
    }
    return false;
  }

  // --- Resolve Warlock Profile ---
  let warlockProfile = null;
  const remoteWarlock = remoteData && remoteData.characters ? remoteData.characters.warlock : null;
  if (rawLocalWarlock && !shouldPreferRemote(rawLocalWarlock, remoteWarlock)) {
    console.log(`\n[4] Active Local Warlock Found: ${rawLocalWarlock.name} (Lvl ${rawLocalWarlock.level})`);
    const warlockGear = buildCharacterGear(rawLocalWarlock.equip, 'warlock', rawLocalWarlock.name, rawLocalWarlock.level);
    const warlockProfessions = extractProfessions(discovered.consolePath, discovered.generalLogPath, 'warlock');
    warlockProfile = {
      name: rawLocalWarlock.name,
      realm: `${rawLocalWarlock.realm} (WoW Forever)`,
      class: "Warlock",
      race: rawLocalWarlock.race || "Horde Undead",
      level: rawLocalWarlock.level,
      money: rawLocalWarlock.money,
      updatedAt: rawLocalWarlock.updatedAt || 0,
      spec: "Affliction Drain Tank / Wand Spec",
      liveGear: warlockGear,
      professions: warlockProfessions,
      syncedAt: new Date().toISOString()
    };
  } else if (remoteWarlock && remoteWarlock.name !== 'Malakor') {
    console.log(`\n[4] Preserving Newer Remote Warlock: ${remoteWarlock.name} (Lvl ${remoteWarlock.level})`);
    warlockProfile = remoteWarlock;
  } else {
    console.log(`\n[4] No Warlock detected locally yet. Initializing clean Warlock profile awaiting sync from game...`);
    warlockProfile = {
      name: "Warlock",
      realm: "Belfall (WoW Forever)",
      class: "Warlock",
      race: "Horde Undead",
      level: 1,
      money: 0,
      updatedAt: 0,
      spec: "Affliction Drain Tank / Wand Spec",
      liveGear: buildCharacterGear({}, 'warlock', 'Warlock', 1),
      professions: extractProfessions(discovered.consolePath, discovered.generalLogPath, 'warlock'),
      syncedAt: new Date().toISOString()
    };
  }

  // --- Resolve Rogue Profile ---
  let rogueProfile = null;
  const remoteRogue = remoteData && remoteData.characters ? remoteData.characters.rogue : null;
  if (rawLocalRogue && !shouldPreferRemote(rawLocalRogue, remoteRogue)) {
    console.log(`\n[5] Active Local Rogue Found: ${rawLocalRogue.name} (Lvl ${rawLocalRogue.level})`);
    const rogueGear = buildCharacterGear(rawLocalRogue.equip, 'rogue', rawLocalRogue.name, rawLocalRogue.level);
    const rogueProfessions = extractProfessions(discovered.consolePath, discovered.generalLogPath, 'rogue');
    rogueProfile = {
      name: rawLocalRogue.name,
      realm: `${rawLocalRogue.realm} (WoW Forever)`,
      class: "Rogue",
      race: rawLocalRogue.race || "Horde Undead",
      level: rawLocalRogue.level,
      money: rawLocalRogue.money,
      updatedAt: rawLocalRogue.updatedAt || 0,
      spec: "Combat Swords / Daggers",
      liveGear: rogueGear,
      professions: rogueProfessions,
      syncedAt: new Date().toISOString()
    };
  } else if (remoteRogue) {
    console.log(`\n[5] Preserving Newer Remote Rogue from Cloud Gist: ${remoteRogue.name} (Lvl ${remoteRogue.level})`);
    rogueProfile = remoteRogue;
  } else {
    console.log(`\n[5] Setting default Rogue template...`);
    rogueProfile = {
      name: "Rogue",
      realm: "Belfall (WoW Forever)",
      class: "Rogue",
      race: "Horde Undead",
      level: 1,
      money: 0,
      updatedAt: 0,
      spec: "Combat Swords / Daggers",
      liveGear: buildCharacterGear({}, 'rogue', 'Rogue', 1),
      professions: extractProfessions(discovered.consolePath, discovered.generalLogPath, 'rogue'),
      syncedAt: new Date().toISOString()
    };
  }

  // --- Resolve Druid Profile ---
  let druidProfile = null;
  const remoteDruid = remoteData && remoteData.characters ? remoteData.characters.druid : null;
  if (rawLocalDruid && !shouldPreferRemote(rawLocalDruid, remoteDruid)) {
    console.log(`\n[6] Active Local Horde Druid Found: ${rawLocalDruid.name} (Lvl ${rawLocalDruid.level})`);
    const druidGear = buildCharacterGear(rawLocalDruid.equip, 'druid', rawLocalDruid.name, rawLocalDruid.level);
    const druidProfessions = extractProfessions(discovered.consolePath, discovered.generalLogPath, 'druid');
    druidProfile = {
      name: rawLocalDruid.name,
      realm: `${rawLocalDruid.realm} (WoW Forever)`,
      class: "Druid",
      race: rawLocalDruid.race || "Horde Tauren",
      level: rawLocalDruid.level,
      money: rawLocalDruid.money,
      updatedAt: rawLocalDruid.updatedAt || 0,
      spec: "Feral Cat / Bear Leveling",
      liveGear: druidGear,
      professions: druidProfessions,
      syncedAt: new Date().toISOString()
    };
  } else if (remoteDruid) {
    console.log(`\n[6] Preserving Newer Remote Druid from Cloud Gist: ${remoteDruid.name} (Lvl ${remoteDruid.level})`);
    druidProfile = remoteDruid;
  } else {
    console.log(`\n[6] Setting default Horde Druid template (Muataurgrumm)...\n`);
    druidProfile = {
      name: "Muataurgrumm",
      realm: "Longwind (WoW Forever)",
      class: "Druid",
      race: "Horde Tauren",
      level: 1,
      money: 0,
      updatedAt: 0,
      spec: "Feral Cat / Bear Leveling",
      liveGear: buildCharacterGear({}, 'druid', 'Muataurgrumm', 1),
      professions: extractProfessions(discovered.consolePath, discovered.generalLogPath, 'druid'),
      syncedAt: new Date().toISOString()
    };
  }

  // Dynamically select whichever character was most recently reloaded/updated in-game
  const candidates = [
    { key: "warlock", prof: warlockProfile },
    { key: "rogue", prof: rogueProfile },
    { key: "druid", prof: druidProfile }
  ];
  candidates.sort((a, b) => (b.prof.updatedAt || 0) - (a.prof.updatedAt || 0));
  const activeCharKey = (candidates[0].prof.updatedAt || 0) > 0 ? candidates[0].key : "warlock";
  const activeProfile = candidates[0].prof.updatedAt > 0 ? candidates[0].prof : warlockProfile;

  const unifiedPayload = {
    activeCharacter: activeCharKey,
    characters: {
      warlock: warlockProfile,
      rogue: rogueProfile,
      druid: druidProfile
    },
    // Top-level mirrors active character (Warlock)
    name: activeProfile.name,
    realm: activeProfile.realm,
    class: activeProfile.class,
    race: activeProfile.race,
    level: activeProfile.level,
    money: activeProfile.money,
    liveGear: activeProfile.liveGear,
    professions: activeProfile.professions,
    syncedAt: new Date().toISOString()
  };

  console.log(`\n[6] Writing local sync files...`);
  const fileContent = `/**
 * World of Warcraft: Forever - Client Sync Bridge (Horde Multi-Character Edition)
 * Auto-generated from live WTF game files.
 * Default Character: Warlock (${warlockProfile.name}, Level ${warlockProfile.level})
 * Secondary Character: Rogue (${rogueProfile.name}, Level ${rogueProfile.level})
 * Tertiary Character:  Druid (${druidProfile.name}, Level ${druidProfile.level})
 */
window.WOW_SYNCED_DATA = ${JSON.stringify(unifiedPayload, null, 2)};
`;

  const dest = path.join(__dirname, 'synced_character.js');
  fs.writeFileSync(dest, fileContent, 'utf8');

  const jsonDest = path.join(__dirname, 'synced_character.json');
  fs.writeFileSync(jsonDest, JSON.stringify(unifiedPayload, null, 2), 'utf8');
  console.log(`    ✓ Saved synced_character.js and synced_character.json successfully!`);

  // Only upload to Cloud Gist if character data actually changed vs remoteData (saves GitHub API quota)
  function isCharacterSame(a, b) {
    if (!a || !b) return false;
    return a.name === b.name && a.level === b.level && a.money === b.money && (a.updatedAt || 0) === (b.updatedAt || 0);
  }
  const rChars = gistRemoteData && gistRemoteData.characters ? gistRemoteData.characters : null;
  const unchanged = rChars &&
    isCharacterSame(warlockProfile, rChars.warlock) &&
    isCharacterSame(rogueProfile, rChars.rogue) &&
    isCharacterSame(druidProfile, rChars.druid);

  if (unchanged) {
    console.log(`\n[7] Cloud Gist (${GIST_ID}) is already up to date — skipping redundant upload.`);
  } else {
    console.log(`\n[7] Updating GitHub Cloud Gist (${GIST_ID})...`);
    try {
      await updateRemoteGist(unifiedPayload);
      console.log(`    ✓ [SUCCESS] Cloud Gist updated directly via GitHub REST API!`);
    } catch (apiErr) {
      console.log(`    ⚠️ REST API upload error: ${apiErr.message}. Attempting gh CLI fallback...`);
      try {
        execSync(`gh gist edit ${GIST_ID} -a "${jsonDest}"`, { stdio: 'pipe', encoding: 'utf8', timeout: 10000 });
        console.log(`    ✓ [SUCCESS] Cloud Gist updated via gh CLI!`);
      } catch (ghErr) {
        console.log(`    ⚠️ Note: Could not update remote Gist from this machine: ${ghErr.message}`);
      }
    }
  }

  console.log("\n========================================================");
  console.log(` SYNC COMPLETE!`);
  console.log(` Active Guide: 🔮 Warlock - ${warlockProfile.name} (Level ${warlockProfile.level})`);
  console.log(` Secondary:    🗡️ Rogue   - ${rogueProfile.name} (Level ${rogueProfile.level})`);
  console.log(` Tertiary:     🐾 Druid   - ${druidProfile.name} (Level ${druidProfile.level})`);
  console.log("========================================================\n");

  return unifiedPayload;
}

if (require.main === module) {
  runSync().catch(err => {
    console.error("Fatal sync error:", err);
    process.exit(1);
  });
}

module.exports = { runSync };

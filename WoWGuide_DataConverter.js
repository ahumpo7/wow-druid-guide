const fs = require('fs');
const path = require('path');

const wData = require('./warlock_data.js');
const rData = require('./rogue_data.js');
const dData = require('./horde_druid_data.js');

function stripEmojis(str) {
  if (!str) return "";
  return String(str)
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E0}-\u{1F1FF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '')
    .replace(/[⭐★📜📍🏰💡🔮🗡️🌲⚔️⚡🔥🐾🩸✓👉⏱️❤️💚🧠🛡️🏹💀☣️]/g, '')
    .trim();
}

function escapeLuaString(str) {
  if (!str) return '""';
  const clean = stripEmojis(str);
  return JSON.stringify(clean);
}

function formatTalentTable(t) {
  if (!t) return 'nil';
  if (typeof t === 'string') {
    const s = stripEmojis(t);
    return s.length > 0 ? escapeLuaString(s) : 'nil';
  }
  if (typeof t === 'object') {
    return `{ name = ${escapeLuaString(t.name)}, rank = ${escapeLuaString(t.rank)}, tree = ${escapeLuaString(t.tree)}, why = ${escapeLuaString(t.why)} }`;
  }
  return 'nil';
}

function generateWarlockLua() {
  let out = `-- WoW Forever: Complete Warlock Leveling Codex (Levels 1-60)\n`;
  out += `local addonName, addonTable = ...\n`;
  out += `WoWGuide_Warlock = WoWGuide_Warlock or {}\n`;
  out += `if addonTable then addonTable.Warlock = WoWGuide_Warlock end\n`;
  out += `_G["WoWGuide_Warlock"] = WoWGuide_Warlock\n\n`;
  out += `WoWGuide_Warlock.className = "WARLOCK"\n`;
  out += `WoWGuide_Warlock.classColor = "9482C9"\n`;
  out += `WoWGuide_Warlock.title = "Affliction Drain Tank & Wand Leveling"\n`;
  out += `WoWGuide_Warlock.specSummary = "30 Affliction / 21 Demonology"\n`;
  out += `WoWGuide_Warlock.levels = {\n`;

  for (let lvl = 1; lvl <= 60; lvl++) {
    const d = wData.WARLOCK_LEVEL_DATA[lvl] || {};
    out += `  [${lvl}] = {\n`;
    out += `    title = ${escapeLuaString(d.title || `Level ${lvl}`)},\n`;
    out += `    zone = ${escapeLuaString(d.zone || "")},\n`;
    out += `    zoneRange = ${escapeLuaString(d.zoneRange || "")},\n`;
    out += `    hubs = ${escapeLuaString(d.hubs || "")},\n`;
    out += `    zoneInstructions = ${escapeLuaString(d.zoneInstructions || "")},\n`;
    out += `    talent = ${formatTalentTable(d.talent)},\n`;
    out += `    talentNote = ${escapeLuaString(d.talentNote || "")},\n`;
    out += `    gearTip = ${escapeLuaString(d.gearTip || "Prioritize Stamina (Health & Life Tap fuel) > Intellect (Mana pool & Spell Crit) > Spirit.")},\n`;
    
    out += `    trainerTrain = {`;
    if (d.trainerTrain && d.trainerTrain.length > 0) {
      out += d.trainerTrain.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    rotation = {`;
    if (d.rotation && d.rotation.length > 0) {
      out += d.rotation.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    dungeonGear = {\n`;
    if (d.dungeonGear && d.dungeonGear.length > 0) {
      for (const dg of d.dungeonGear) {
        out += `      { name = ${escapeLuaString(dg.name)}, quality = ${escapeLuaString(dg.quality)}, source = ${escapeLuaString(dg.source)}, stats = ${escapeLuaString(dg.stats)}, tip = ${escapeLuaString(dg.tip || "")} },\n`;
      }
    }
    out += `    }\n`;
    out += `  },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Warlock.talentOrder = {\n`;
  for (let i = 0; i < wData.WARLOCK_TALENT_ORDER.length; i++) {
    const talentKey = wData.WARLOCK_TALENT_ORDER[i];
    const cfg = wData.WARLOCK_TALENTS_CONFIG.find(t => t.id === talentKey) || { name: talentKey, desc: "", tree: "affliction" };
    out += `  [${i + 10}] = { id = ${escapeLuaString(talentKey)}, name = ${escapeLuaString(cfg.name)}, desc = ${escapeLuaString(cfg.desc)}, tree = ${escapeLuaString(cfg.tree || "affliction")} },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Warlock.classQuests = {\n`;
  out += `  { lvl = 1, title = "The Mind's Eye (Summon Imp)", zone = "Deathknell (Tirisfal Glades)", npc = "Shadow Priest Sarvis", desc = "Collect the Scarlet Initiate head and complete the summoning ritual to bind your first demon minion, the Imp." },\n`;
  out += `  { lvl = 10, title = "The Binding (Summon Voidwalker)", zone = "Brill / Ruined Tower (Tirisfal Glades)", npc = "Luther Pickman", desc = "Retrieve the glyph, defeat the summoned Voidwalker in the ruined tower, and bind it to your will as your personal tank minion!" },\n`;
  out += `  { lvl = 20, title = "Hearts of Wood (Summon Succubus)", zone = "Undercity / Silverpine / Barrens", npc = "Caretaker Caice", desc = "Venture through the southern wetlands of the Barrens and the hills of Silverpine to gather the Hearts of Wood and bind the seductive Succubus." },\n`;
  out += `  { lvl = 30, title = "Tome of the Cabal (Summon Felhunter)", zone = "Undercity / Ratchet / Thousand Needles", npc = "Mennet Carkiek", desc = "Gather the scattered pages of the Tome of the Cabal and summon the devourer of magic, your Felhunter minion!" },\n`;
  out += `  { lvl = 40, title = "Summon Felsteed (FREE 60% Mount!)", zone = "Undercity / Orgrimmar Caster Trainers", npc = "Warlock Trainers", desc = "Visit your Warlock trainer to receive your Level 40 Felsteed mount directly - completely free with zero gold cost!" },\n`;
  out += `  { lvl = 50, title = "Infernal Minion & Niby the Almighty", zone = "Felwood (Jaedenar)", npc = "Niby the Almighty", desc = "Complete the infernal core retrieval in Jaedenar to learn how to call down a blazing Infernal from the sky!" },\n`;
  out += `  { lvl = 60, title = "Dreadsteed of Xoroth (Epic 100% Mount)", zone = "Burning Steppes / Dire Maul / Scholomance", npc = "Mor'zul Bloodbringer", desc = "Epic multi-dungeon quest line to summon and defeat the Dreadsteed of Xoroth for your 100% speed fiery epic mount." }\n`;
  out += `}\n\n`;

  out += `WoWGuide_Warlock.macros = {\n`;
  out += `  { title = "Spam-Safe Auto-Wand", code = "#showtooltip Shoot\\n/cast !Shoot", desc = "Never cancels wanding if spammed. Prevents accidentally stopping wand attacks." },\n`;
  out += `  { title = "Pet Attack + Instant Corruption", code = "#showtooltip Corruption\\n/petattack\\n/cast Corruption", desc = "Sends your pet immediately into melee while applying Corruption." },\n`;
  out += `  { title = "Panic Voidwalker Sacrifice + Healthstone", code = "#showtooltip Sacrifice\\n/cast Sacrifice\\n/use Healthstone", desc = "Instantly pops Voidwalker shield and uses the highest Healthstone available." },\n`;
  out += `  { title = "Mouseover Fear", code = "#showtooltip Fear\\n/cast [@mouseover,harm,nodead][harm,nodead] Fear", desc = "Fears incoming add without dropping your current drain target." },\n`;
  out += `  { title = "Dark Pact / Life Tap Battery", code = "#showtooltip Dark Pact\\n/cast [pet] Dark Pact; Life Tap", desc = "Siphons pet mana if demon is active; otherwise casts Life Tap automatically." }\n`;
  out += `}\n`;

  return out;
}

function generateRogueLua() {
  let out = `-- WoW Forever: Complete Rogue Leveling Codex (Levels 1-60)\n`;
  out += `local addonName, addonTable = ...\n`;
  out += `WoWGuide_Rogue = WoWGuide_Rogue or {}\n`;
  out += `if addonTable then addonTable.Rogue = WoWGuide_Rogue end\n`;
  out += `_G["WoWGuide_Rogue"] = WoWGuide_Rogue\n\n`;
  out += `WoWGuide_Rogue.className = "ROGUE"\n`;
  out += `WoWGuide_Rogue.classColor = "FFF569"\n`;
  out += `WoWGuide_Rogue.title = "Combat Swords / Daggers Leveling"\n`;
  out += `WoWGuide_Rogue.specSummary = "19 Assassination / 32 Combat"\n`;
  out += `WoWGuide_Rogue.levels = {\n`;

  for (let lvl = 1; lvl <= 60; lvl++) {
    const d = rData.ROGUE_LEVEL_DATA[lvl] || {};
    out += `  [${lvl}] = {\n`;
    out += `    title = ${escapeLuaString(d.title || `Level ${lvl}`)},\n`;
    out += `    zone = ${escapeLuaString(d.zone || "")},\n`;
    out += `    zoneRange = ${escapeLuaString(d.zoneRange || "")},\n`;
    out += `    hubs = ${escapeLuaString(d.hubs || "")},\n`;
    out += `    zoneInstructions = ${escapeLuaString(d.zoneInstructions || "")},\n`;
    out += `    talent = ${formatTalentTable(d.talent)},\n`;
    out += `    talentNote = ${escapeLuaString(d.talentNote || "")},\n`;
    out += `    gearTip = ${escapeLuaString(d.gearTip || "Prioritize Agility (Attack Power, Crit %, Dodge) > Strength (Attack Power) > Stamina.")},\n`;
    
    out += `    trainerTrain = {`;
    if (d.trainerTrain && d.trainerTrain.length > 0) {
      out += d.trainerTrain.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    rotation = {`;
    if (d.rotation && d.rotation.length > 0) {
      out += d.rotation.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    dungeonGear = {\n`;
    if (d.dungeonGear && d.dungeonGear.length > 0) {
      for (const dg of d.dungeonGear) {
        out += `      { name = ${escapeLuaString(dg.name)}, quality = ${escapeLuaString(dg.quality)}, source = ${escapeLuaString(dg.source)}, stats = ${escapeLuaString(dg.stats)}, tip = ${escapeLuaString(dg.tip || "")} },\n`;
      }
    }
    out += `    }\n`;
    out += `  },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Rogue.talentOrder = {\n`;
  for (let i = 0; i < rData.ROGUE_TALENT_ORDER.length; i++) {
    const talentKey = rData.ROGUE_TALENT_ORDER[i];
    const cfg = rData.ROGUE_TALENTS_CONFIG.find(t => t.id === talentKey) || { name: talentKey, desc: "", tree: "combat" };
    out += `  [${i + 10}] = { id = ${escapeLuaString(talentKey)}, name = ${escapeLuaString(cfg.name)}, desc = ${escapeLuaString(cfg.desc)}, tree = ${escapeLuaString(cfg.tree || "combat")} },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Rogue.classQuests = {\n`;
  out += `  { lvl = 10, title = "Dual Wielding Training", zone = "Brill / Undercity", npc = "Marion Call", desc = "Train Dual Wielding at level 10 to equip an off-hand dagger or sword, doubling your auto-attack output!" },\n`;
  out += `  { lvl = 16, title = "Lockpicking Mastery & Pirate Footlockers", zone = "Ratchet (Pirate Ships)", npc = "Wrenix the Wrench", desc = "Acquire your Thieves' Tools and practice picking the Buccaneer's Footlockers aboard the Southsea pirate vessel off Ratchet." },\n`;
  out += `  { lvl = 20, title = "The Shattered Hand & Sludge Fen Poisons", zone = "The Barrens (Sludge Fen Tower)", npc = "Shenthul (Orgrimmar)", desc = "CRUCIAL QUEST! Infiltrate the Venture Co. tower, pickpocket the Gallywix Key, crack the chest, craft antitoxin, and learn Instant Poison, Deadly Poison, and Thistle Tea!" },\n`;
  out += `  { lvl = 24, title = "Detect Traps & Disarm", zone = "Undercity (Rogues' Quarter)", npc = "Rogue Trainers", desc = "Learn to detect stealth traps and disarm enemy defenses." },\n`;
  out += `  { lvl = 34, title = "Blind & Blinding Powder", zone = "Undercity / Orgrimmar", npc = "Rogue Trainers", desc = "Learn Blind to disorient targets for 10 seconds. Always carry Fadeleaf to craft Blinding Powder." }\n`;
  out += `}\n\n`;

  out += `WoWGuide_Rogue.macros = {\n`;
  out += `  { title = "Spam-Safe Stealth", code = "#showtooltip Stealth\\n/cast [nostealth] Stealth", desc = "Spamming will never accidentally break stealth." },\n`;
  out += `  { title = "Sinister Strike + Auto-Attack", code = "#showtooltip Sinister Strike\\n/startattack\\n/cast Sinister Strike", desc = "Keeps swinging even when energy is depleted." },\n`;
  out += `  { title = "Riposte Priority Strike", code = "#showtooltip Riposte\\n/cast Riposte\\n/cast Sinister Strike", desc = "Fires Riposte whenever parry occurs; otherwise casts Sinister Strike." },\n`;
  out += `  { title = "Gouge & First Aid Reset", code = "#showtooltip Gouge\\n/cast Gouge\\n/stopattack", desc = "Incapacitates target for 4 seconds and stops attack so you can bandage." },\n`;
  out += `  { title = "Blade Flurry + Adrenaline Rush Cleave", code = "#showtooltip Adrenaline Rush\\n/cast Blade Flurry\\n/cast Adrenaline Rush", desc = "Pops 100% energy regen and 2-target cleave simultaneously for massive burst." }\n`;
  out += `}\n`;

  return out;
}

function generateDruidLua() {
  let out = `-- WoW Forever: Complete Horde Druid Leveling Codex (Levels 1-60)\n`;
  out += `local addonName, addonTable = ...\n`;
  out += `WoWGuide_Druid = WoWGuide_Druid or {}\n`;
  out += `if addonTable then addonTable.Druid = WoWGuide_Druid end\n`;
  out += `_G["WoWGuide_Druid"] = WoWGuide_Druid\n\n`;
  out += `WoWGuide_Druid.className = "DRUID"\n`;
  out += `WoWGuide_Druid.classColor = "FF7D0A"\n`;
  out += `WoWGuide_Druid.title = "Feral Cat & Bear Leveling"\n`;
  out += `WoWGuide_Druid.specSummary = "14 Balance / 32 Feral / 5 Restoration"\n`;
  out += `WoWGuide_Druid.levels = {\n`;

  for (let lvl = 1; lvl <= 60; lvl++) {
    const d = dData.DRUID_LEVEL_DATA[lvl] || {};
    out += `  [${lvl}] = {\n`;
    out += `    title = ${escapeLuaString(d.title || `Level ${lvl}`)},\n`;
    out += `    zone = ${escapeLuaString(d.zone || "")},\n`;
    out += `    zoneRange = ${escapeLuaString(d.zoneRange || "")},\n`;
    out += `    hubs = ${escapeLuaString(d.hubs || "")},\n`;
    out += `    zoneInstructions = ${escapeLuaString(d.zoneInstructions || "")},\n`;
    out += `    talent = ${formatTalentTable(d.talent)},\n`;
    out += `    talentNote = ${escapeLuaString(d.talentNote || "")},\n`;
    out += `    gearTip = ${escapeLuaString(d.gearTip || "Prioritize Agility > Strength > Stamina.")},\n`;
    
    out += `    trainerTrain = {`;
    if (d.trainerTrain && d.trainerTrain.length > 0) {
      out += d.trainerTrain.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    rotation = {`;
    if (d.rotation && d.rotation.length > 0) {
      out += d.rotation.map(s => escapeLuaString(s)).join(", ");
    }
    out += `},\n`;

    out += `    dungeonGear = {\n`;
    if (d.dungeonGear && d.dungeonGear.length > 0) {
      for (const dg of d.dungeonGear) {
        out += `      { name = ${escapeLuaString(dg.name)}, quality = ${escapeLuaString(dg.quality)}, source = ${escapeLuaString(dg.source)}, stats = ${escapeLuaString(dg.stats)}, tip = ${escapeLuaString(dg.tip || "")} },\n`;
      }
    }
    out += `    }\n`;
    out += `  },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Druid.talentOrder = {\n`;
  for (let i = 0; i < dData.DRUID_TALENT_ORDER.length; i++) {
    const talentKey = dData.DRUID_TALENT_ORDER[i];
    const cfg = dData.DRUID_TALENTS_CONFIG.find(t => t.id === talentKey) || { name: talentKey, desc: "", tree: "feral" };
    out += `  [${i + 10}] = { id = ${escapeLuaString(talentKey)}, name = ${escapeLuaString(cfg.name)}, desc = ${escapeLuaString(cfg.desc)}, tree = ${escapeLuaString(cfg.tree || "feral")} },\n`;
  }
  out += `}\n\n`;

  out += `WoWGuide_Druid.classQuests = {\n`;
  out += `  { lvl = 10, title = "Body and Heart (Bear Form Unlock)", zone = "Thunder Bluff / Moonglade / Mulgore", npc = "Turak Runetotem", desc = "Teleport to Moonglade to commune with the Great Bear Spirit, then summon Lunaclaw in Mulgore to learn Bear Form, Maul, and Demoralizing Roar!" },\n`;
  out += `  { lvl = 16, title = "Trial of the Sea Lion (Aquatic Form)", zone = "Moonglade / Silverpine / Barrens", npc = "Dendrite Starblaze", desc = "Retrieve the two halves of the Sea Lion Pendant from the depths of Silverpine and the Barrens coast to unlock Aquatic Form for +50% swim speed and infinite underwater breath!" },\n`;
  out += `  { lvl = 20, title = "Cat Form & Predator Mastery", zone = "Thunder Bluff / Camp Taurajo", npc = "Druid Trainers", desc = "Learn Cat Form, Claw, Rake, and Prowl! Pair with Feral Swiftness talents for permanent +30% movement speed outdoors!" },\n`;
  out += `  { lvl = 30, title = "Travel Form (40% Speed!)", zone = "Moonglade / Thunder Bluff", npc = "Loganaar", desc = "Learn Travel Form for instant-cast +40% speed outdoors. Huge questing speedup before your 40 mount!" },\n`;
  out += `  { lvl = 40, title = "Dire Bear Form & Kodo Riding", zone = "Thunder Bluff / Bloodhoof Village", npc = "Turak Runetotem", desc = "Unlock Dire Bear Form with massive armor and health multipliers. Train Riding in Bloodhoof Village for your Kodo mount." }\n`;
  out += `}\n\n`;

  out += `WoWGuide_Druid.macros = {\n`;
  out += `  { title = "Power Shift (Cat Form Reset)", code = "#showtooltip Cat Form\\n/cast !Cat Form", desc = "Instantly clears slows and roots while granting immediate Energy from Furor!" },\n`;
  out += `  { title = "Smart Travel / Aquatic Form", code = "/cast [swimming] Aquatic Form; [outdoors] Travel Form; Cat Form", desc = "Automatically shifts into Aquatic Form in water, Travel Form outdoors, or Cat Form indoors!" },\n`;
  out += `  { title = "Faerie Fire (Feral & Caster)", code = "#showtooltip Faerie Fire (Feral)\\n/cast [form:1/3] Faerie Fire (Feral); Faerie Fire", desc = "Casts Feral Faerie Fire in Bear or Cat form, and normal Faerie Fire in caster form." },\n`;
  out += `  { title = "Emergency Bash + Regrowth", code = "#showtooltip Bash\\n/cast Bash\\n/cast Regrowth", desc = "Stuns enemy in Bear Form, then immediately casts Regrowth heal." },\n`;
  out += `  { title = "Prowl + Ravage Opener", code = "#showtooltip Ravage\\n/cast [nostealth] Prowl\\n/cast [stealth] Ravage", desc = "Enters stealth if out of combat, or executes Ravage if stealthed behind enemy." }\n`;
  out += `}\n`;

  return out;
}

fs.writeFileSync(path.join(__dirname, 'WoWGuide', 'WarlockData.lua'), generateWarlockLua(), 'utf8');
fs.writeFileSync(path.join(__dirname, 'WoWGuide', 'RogueData.lua'), generateRogueLua(), 'utf8');
fs.writeFileSync(path.join(__dirname, 'WoWGuide', 'DruidData.lua'), generateDruidLua(), 'utf8');
console.log('✓ Successfully generated WarlockData.lua, RogueData.lua, and DruidData.lua!');

/**
 * WoW Forever - Horde Leveling Codex Engine
 * Dual Profile Architecture: 🔮 Warlock (Default) & 🗡️ Rogue (Phana)
 * Full Reactive State, Live WTF Sync, Interactive Paperdoll, Talent Calculator & Upgrade Advisor
 */

// Safe localStorage access
function safeGetJSON(key, defaultVal) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch (_) {
    return defaultVal;
  }
}

function safeSetJSON(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (_) {}
}

// Global Application State
let activeClass = "warlock"; // Defaults to Warlock as requested!
let currentLevel = 14;
let userChecklistState = {};
let userTalentsState = {};
let currentPresetKey = "live_gear";
let currentAdvisorFilter = "all";

// Active Data References
let ACTIVE_LEVEL_DATA = {};
let ACTIVE_TALENTS_CONFIG = [];
let ACTIVE_TALENT_ORDER = [];

// GitHub Cloud Gist Info
const GITHUB_GIST_ID = "584b8b9450a8b85003934d27acfa7c7c";
const GITHUB_GIST_API_URL = `https://api.github.com/gists/${GITHUB_GIST_ID}`;
const GITHUB_GIST_RAW_URL = `https://gist.githubusercontent.com/ahumpo7/${GITHUB_GIST_ID}/raw/synced_character.json`;

// Checklists for both classes
const WARLOCK_CHECKLIST = [
  { id: "w1", text: "Level 1-4: Complete 'The Mind's Eye' in Deathknell and summon your Imp" },
  { id: "w2", text: "Level 5: Craft or purchase Lesser Magic Wand (11.3 DPS) for zero-mana killing" },
  { id: "w3", text: "Level 10: Complete 'The Binding' class quest in Brill/Undercity to summon Voidwalker" },
  { id: "w4", text: "Level 13: Acquire Greater Magic Wand (17.5 DPS) for massive DPS leap" },
  { id: "w5", text: "Level 14: Max 5/5 Improved Corruption (100% INSTANT CAST Corruption!)" },
  { id: "w6", text: "Level 16: Max 2/2 Improved Drain Soul (+100% mana regen boost on kill)" },
  { id: "w7", text: "Level 20: Complete 'Hearts of Wood' quest in Silverpine/Barrens to summon Succubus" },
  { id: "w8", text: "Level 23: Max 5/5 Fel Concentration (70% pushback immunity on Drain Life)" },
  { id: "w9", text: "Level 26: Max 2/2 Nightfall (Instant Shadow Bolt procs on Corruption/Drain ticks)" },
  { id: "w10", text: "Level 27: Complete Blackfathom Deeps quest for the legendary Gravestone Scepter" },
  { id: "w11", text: "Level 30: Train Siphon Life & complete 'Tome of the Cabal' to summon Felhunter" },
  { id: "w12", text: "Level 35: Max 5/5 Shadow Mastery (+10% Shadow damage across all spells)" },
  { id: "w13", text: "Level 40: Unlock DARK PACT (infinite mana from pet) & learn FREE Summon Felsteed mount!" },
  { id: "w14", text: "Level 50: Max 5/5 Fel Intellect and speedrun Un'Goro Crater dinosaurs" },
  { id: "w15", text: "Level 60: Begin Epic Dreadsteed of Xoroth quest chain & collect Pre-Raid BiS!" }
];

const ROGUE_CHECKLIST = [
  { id: "r1", text: "Level 4: Train Stealth and Gouge for crowd control and mid-fight bandage resets" },
  { id: "r2", text: "Level 10: Train Dual Wield in Brill and invest in Remorseless Attacks (+40% crit)" },
  { id: "r3", text: "Level 12: Reduce Sinister Strike energy cost to 40 with 2/2 Improved Sinister Strike" },
  { id: "r4", text: "Level 13: Obtain Beholder's Eye dagger in The Barrens (equipped on Phana)" },
  { id: "r5", text: "Level 16: Train Lockpicking and practice picking footlockers off Ratchet pirate ships" },
  { id: "r6", text: "Level 19: Unlock RIPOSTE (10 energy for 150% weapon damage + 6s disarm on parry!)" },
  { id: "r7", text: "Level 20: Complete 'The Shattered Hand' poison quest in Sludge Fen (Instant Poison & Thistle Tea)" },
  { id: "r8", text: "Level 24: Max 5/5 Precision for +5% melee hit chance (eliminating special attack misses)" },
  { id: "r9", text: "Level 29: Max 5/5 Dual Wield Specialization for +50% off-hand weapon damage" },
  { id: "r10", text: "Level 30: Unlock BLADE FLURRY (+20% attack speed & 2-target cleave!)" },
  { id: "r11", text: "Level 34: Train Blind & craft Blinding Powder for emergency combat resets" },
  { id: "r12", text: "Level 35: Max 5/5 Sword Specialization (5% extra instant attack chance per swing)" },
  { id: "r13", text: "Level 40: Unlock ADRENALINE RUSH (100% increased energy regen) & buy Level 40 Mount!" },
  { id: "r14", text: "Level 45: Complete 'Corruption of Earth and Seed' in Maraudon for the legendary THRASH BLADE" },
  { id: "r15", text: "Level 50: Unlock Relentless Strikes (100% 25-energy refund on 5-point finishers)" },
  { id: "r16", text: "Level 57: Complete Scholomance quest for MIRAH'S SONG (BiS off-hand sword)" },
  { id: "r17", text: "Level 60: Complete Devilsaur 2-piece set (+2% Hit, +74 AP) & step into Molten Core!" }
];

// Gear Presets for Armor Mockup (Warlock & Rogue)
const WARLOCK_GEAR_PRESETS = {
  live_gear: {
    label: "⭐ Currently Equipped (Live Sync)",
    desc: "Live gear extracted directly from game client WTF SavedVariables for Warlock.",
    items: {}
  },
  lvl20: {
    label: "Level 20 Milestone (Early Affliction)",
    desc: "Recommended gear setup for Level 20: High Intellect and Stamina with Greater Magic Wand.",
    items: {
      chest: { slot: "Chest", name: "Robes of Arugal", quality: "rare", stats: ["55 Armor", "+10 Intellect", "+5 Spirit", "+3 Agility"], tip: "Shadowfang Keep drop." },
      waist: { slot: "Waist", name: "Frayed Belt of the Eagle", quality: "uncommon", stats: ["34 Armor", "+2 Intellect", "+2 Stamina"], tip: "BoE green cloth." },
      legs: { slot: "Legs", name: "Burlap Pants of the Eagle", quality: "uncommon", stats: ["45 Armor", "+3 Intellect", "+3 Stamina"], tip: "BoE green cloth." },
      feet: { slot: "Feet", name: "Frayed Shoes of the Eagle", quality: "uncommon", stats: ["30 Armor", "+2 Intellect", "+2 Stamina"], tip: "BoE green cloth." },
      wrists: { slot: "Wrists", name: "Mindthrust Bracers", quality: "rare", stats: ["24 Armor", "+5 Intellect", "+2 Spirit"], tip: "World drop." },
      hands: { slot: "Hands", name: "Gold-flecked Gloves", quality: "uncommon", stats: ["31 Armor", "+4 Intellect", "+3 Stamina"], tip: "Deadmines / SFK." },
      mainHand: { slot: "Main Hand", name: "Staff of the Blessed", quality: "uncommon", stats: ["+4 Intellect", "+2 Spirit"], tip: "Quest staff." },
      ranged: { slot: "Ranged / Wand", name: "Greater Magic Wand", quality: "uncommon", stats: ["17.5 DPS", "Arcane Damage", "Speed 1.30"], tip: "Enchanting 75 / AH." }
    }
  },
  lvl30: {
    label: "Level 30 Milestone (Wand & Siphon Life Master)",
    desc: "Level 30 gear with Gravestone Scepter and Shadow Damage pieces.",
    items: {
      chest: { slot: "Chest", name: "Robes of Arugal", quality: "rare", stats: ["55 Armor", "+10 Intellect", "+5 Spirit", "+3 Agility"], tip: "Baron Silverlaine (SFK)." },
      shoulders: { slot: "Shoulders", name: "Boreal Mantle", quality: "rare", stats: ["45 Armor", "+8 Intellect", "+7 Spirit"], tip: "World drop." },
      waist: { slot: "Waist", name: "Keller's Girdle", quality: "rare", stats: ["37 Armor", "+8 Intellect", "+7 Stamina"], tip: "World drop." },
      legs: { slot: "Legs", name: "Spellshock Leggings", quality: "rare", stats: ["54 Armor", "+10 Intellect", "+8 Stamina"], tip: "World drop." },
      mainHand: { slot: "Main Hand", name: "Hypnotic Blade", quality: "rare", stats: ["+8 Intellect", "+3 Spirit", "+9 Spell Damage"], tip: "Scarlet Monastery (Library)." },
      offHand: { slot: "Off-Hand", name: "Orb of the Forgotten", quality: "uncommon", stats: ["+6 Intellect", "+4 Stamina"], tip: "Caster off-hand." },
      ranged: { slot: "Ranged / Wand", name: "Gravestone Scepter", quality: "rare", stats: ["29.0 DPS", "Shadow Damage", "Speed 1.50", "+5 Shadow Res"], tip: "Blackfathom Villainy quest!" }
    }
  },
  lvl40: {
    label: "Level 40 Milestone (Dark Pact & Shadow Power)",
    desc: "Peak leveling gear with Robe of the Lich and Spellshock Wand.",
    items: {
      head: { slot: "Head", name: "Whitemane's Chapeau", quality: "rare", stats: ["+14 Intellect", "+14 Spirit", "+7 Spell Damage"], tip: "High Inquisitor Whitemane (SM)." },
      shoulders: { slot: "Shoulders", name: "Inquisitor's Shawl", quality: "rare", stats: ["+9 Intellect", "+8 Stamina", "+6 Shadow Damage"], tip: "Scarlet Monastery." },
      chest: { slot: "Chest", name: "Robe of the Lich", quality: "rare", stats: ["76 Armor", "+20 Stamina", "+14 Shadow Spell Damage"], tip: "Amnennar in RFD." },
      mainHand: { slot: "Main Hand", name: "Zum'rah's Vexing Cane", quality: "rare", stats: ["+10 Stamina", "+21 Shadow Spell Damage"], tip: "Witch Doctor Zum'rah (ZF)." },
      ranged: { slot: "Ranged / Wand", name: "Nether Force Wand", quality: "rare", stats: ["40.5 DPS", "Shadow Damage"], tip: "Tanaris quest." }
    }
  },
  lvl60: {
    label: "Level 60 Pre-Raid BiS (Raid Ready)",
    desc: "Top-tier pre-raid BiS gear for Molten Core and Onyxia.",
    items: {
      head: { slot: "Head", name: "Felcloth Hood", quality: "rare", stats: ["+10 Stamina", "+30 Shadow Spell Damage"], tip: "Crafted Tailoring 300." },
      neck: { slot: "Neck", name: "Diana's Pearl Necklace", quality: "rare", stats: ["+8 Intellect", "+18 Spell Damage"], tip: "Cannon Master Willey (Strat)." },
      shoulders: { slot: "Shoulders", name: "Felcloth Shoulders", quality: "rare", stats: ["+5 Stamina", "+26 Shadow Spell Damage"], tip: "Crafted Tailoring 300." },
      back: { slot: "Back", name: "Spritecaster Cape", quality: "rare", stats: ["+5 Stamina", "+14 Spell Damage"], tip: "BRD." },
      chest: { slot: "Chest", name: "Robe of the Void", quality: "epic", stats: ["+14 Stamina", "+46 Shadow Spell Damage", "Use: Heal 1200"], tip: "Crafted Tailoring 300." },
      wrists: { slot: "Wrists", name: "Sublime Wristguards", quality: "rare", stats: ["+10 Intellect", "+6 Stamina", "+12 Spell Damage"], tip: "Dire Maul." },
      hands: { slot: "Hands", name: "Felcloth Gloves", quality: "rare", stats: ["+9 Stamina", "+33 Shadow Spell Damage"], tip: "Crafted Tailoring 300." },
      waist: { slot: "Waist", name: "Ban'thok Sash", quality: "rare", stats: ["+11 Stamina", "+12 Spell Damage", "+1% Hit"], tip: "Okorok (BRD)." },
      legs: { slot: "Legs", name: "Felcloth Pants", quality: "rare", stats: ["+12 Stamina", "+26 Shadow Spell Damage"], tip: "Crafted Tailoring 300." },
      feet: { slot: "Feet", name: "Maleki's Footwraps", quality: "rare", stats: ["+9 Stamina", "+27 Shadow Spell Damage"], tip: "Maleki the Pallid (Strat)." },
      ring1: { slot: "Finger", name: "Band of Rumination", quality: "rare", stats: ["+5 Intellect", "+14 Spell Damage"], tip: "UBRS." },
      ring2: { slot: "Finger", name: "Maiden's Circle", quality: "rare", stats: ["+7 Intellect", "+18 Spell Damage"], tip: "World drop." },
      trinket1: { slot: "Trinket", name: "Briarwood Reed", quality: "rare", stats: ["Equip: +29 Spell Damage"], tip: "Jed Runewatcher (UBRS)." },
      trinket2: { slot: "Trinket", name: "Eye of the Beast", quality: "rare", stats: ["Equip: +2% Spell Crit"], tip: "UBRS quest." },
      mainHand: { slot: "Main Hand", name: "Rod of the Ogre Magi", quality: "rare", stats: ["+11 Stamina", "+14 Intellect", "+23 Spell Damage", "+1% Spell Crit"], tip: "Dire Maul Tribute." },
      ranged: { slot: "Ranged / Wand", name: "Skul's Ghastly Touch", quality: "rare", stats: ["+14 Shadow Spell Damage"], tip: "Skul (Strat)." }
    }
  }
};

const ROGUE_GEAR_PRESETS = {
  live_gear: {
    label: "⭐ Currently Equipped (Live Sync: Phana)",
    desc: "Live gear extracted directly from game client WTF SavedVariables for Phana.",
    items: {}
  },
  lvl20: {
    label: "Level 20 Milestone (Dual Dagger / Sword)",
    desc: "Agility leather gear with Poison quest weapons.",
    items: {
      chest: { slot: "Chest", name: "Grizzly Jerkin", quality: "uncommon", stats: ["88 Armor", "+6 Strength", "+5 Stamina"], tip: "Live equipped on Phana!" },
      waist: { slot: "Waist", name: "Troll's Sweatcloth", quality: "uncommon", stats: ["41 Armor", "+3 Stamina", "+2 Spirit"], tip: "Live equipped on Phana!" },
      legs: { slot: "Legs", name: "Grassland Pants", quality: "uncommon", stats: ["64 Armor", "+4 Agility", "+3 Stamina"], tip: "Live equipped on Phana!" },
      feet: { slot: "Feet", name: "Feet of the Lynx", quality: "rare", stats: ["63 Armor", "+8 Agility", "+3 Strength"], tip: "BoE rare physical boots." },
      wrists: { slot: "Wrists", name: "Black Wolf Bracers", quality: "uncommon", stats: ["31 Armor", "+2 Agility", "+1 Stamina"], tip: "Live equipped on Phana!" },
      back: { slot: "Back", name: "Grizzly Cape", quality: "uncommon", stats: ["14 Armor", "+2 Strength", "+1 Stamina"], tip: "Live equipped on Phana!" },
      mainHand: { slot: "Main Hand", name: "Beholder's Eye", quality: "uncommon", stats: ["14-26 Dmg (11.1 DPS)", "Speed 1.80", "+2 Agility", "+1 Stamina"], tip: "Live equipped on Phana!" },
      offHand: { slot: "Off-Hand", name: "Forsaken Dagger", quality: "uncommon", stats: ["14-26 Dmg (11.1 DPS)", "Speed 1.80"], tip: "Live equipped on Phana!" },
      ranged: { slot: "Ranged / Bow", name: "Fine Longbow", quality: "common", stats: ["8-15 Dmg (4.8 DPS)", "Speed 2.40"], tip: "Live equipped on Phana!" }
    }
  },
  lvl30: {
    label: "Level 30 Milestone (Blade Flurry Cleave)",
    desc: "Swords and high agility leather from Gnomeregan and Scarlet Monastery.",
    items: {
      head: { slot: "Head", name: "Humbert's Helm", quality: "uncommon", stats: ["76 Armor", "+7 Agility", "+8 Stamina"], tip: "Dun Garok Riflemen drop." },
      chest: { slot: "Chest", name: "Tunic of Westfall", quality: "rare", stats: ["92 Armor", "+11 Agility", "+5 Stamina"], tip: "Quest reward." },
      legs: { slot: "Legs", name: "Triprunner Dungarees", quality: "rare", stats: ["101 Armor", "+18 Agility", "+6 Stamina", "+3 Strength"], tip: "Rig Wars quest reward." },
      feet: { slot: "Feet", name: "Warsong Boots", quality: "uncommon", stats: ["64 Armor", "+6 Agility", "+5 Stamina"], tip: "Ashenvale quest." },
      mainHand: { slot: "Main Hand", name: "Sword of Omen", quality: "rare", stats: ["22.2 DPS", "Speed 2.20", "+7 Strength", "+5 Agility"], tip: "Scarlet Monastery quest." },
      offHand: { slot: "Off-Hand", name: "Thief's Blade", quality: "uncommon", stats: ["16.5 DPS", "Speed 2.20", "+3 Agility", "+2 Strength"], tip: "World drop sword." }
    }
  },
  lvl40: {
    label: "Level 40 Milestone (Adrenaline Rush Master)",
    desc: "Vanquisher's Sword with Adrenaline Rush cooldown burst.",
    items: {
      head: { slot: "Head", name: "Nightscape Headband", quality: "uncommon", stats: ["85 Armor", "+12 Agility", "+11 Stamina"], tip: "Crafted LW 205." },
      chest: { slot: "Chest", name: "Nightscape Tunic", quality: "uncommon", stats: ["113 Armor", "+15 Agility", "+6 Stamina"], tip: "Crafted LW 205." },
      legs: { slot: "Legs", name: "Nightscape Pants", quality: "uncommon", stats: ["106 Armor", "+14 Agility", "+7 Stamina"], tip: "Crafted LW 210." },
      mainHand: { slot: "Main Hand", name: "Vanquisher's Sword", quality: "rare", stats: ["30.6 DPS", "Speed 2.10", "+28 Attack Power"], tip: "Bring the Light (RFD quest)." },
      offHand: { slot: "Off-Hand", name: "Black Menace", quality: "rare", stats: ["20.4 DPS", "Speed 2.30", "Chance to Stun"], tip: "Razorfen Kraul." }
    }
  },
  lvl60: {
    label: "Level 60 Pre-Raid BiS (Thrash Blade & Mirah's Song)",
    desc: "Iconic Combat Swords pre-raid setup with 2-piece Devilsaur set.",
    items: {
      head: { slot: "Head", name: "Mask of the Unforgiven", quality: "rare", stats: ["123 Armor", "+12 Stamina", "+2% Hit", "+1% Crit"], tip: "The Unforgiven (Strat)." },
      neck: { slot: "Neck", name: "Mark of Fordring", quality: "rare", stats: ["+26 Attack Power", "+1% Crit"], tip: "In Dreams quest." },
      shoulders: { slot: "Shoulders", name: "Truestrike Shoulders", quality: "rare", stats: ["129 Armor", "+24 Attack Power", "+2% Hit"], tip: "Pyroguard Emberseer (UBRS)." },
      back: { slot: "Back", name: "Cape of the Black Baron", quality: "rare", stats: ["45 Armor", "+15 Agility", "+20 Attack Power"], tip: "Baron Rivendare (Strat)." },
      chest: { slot: "Chest", name: "Cadaverous Armor", quality: "rare", stats: ["172 Armor", "+8 Agility", "+8 Strength", "+60 Attack Power"], tip: "Scholomance bosses." },
      wrists: { slot: "Wrists", name: "Bracers of the Eclipse", quality: "rare", stats: ["76 Armor", "+10 Agility", "+9 Stamina", "+24 Attack Power"], tip: "Prince Tortheldrin (DM West)." },
      hands: { slot: "Hands", name: "Devilsaur Gauntlets", quality: "rare", stats: ["103 Armor", "+9 Stamina", "+28 Attack Power", "+1% Crit", "2pc: +2% Hit"], tip: "Crafted LW 290." },
      waist: { slot: "Waist", name: "Cloudrunner Girdle", quality: "rare", stats: ["85 Armor", "+15 Agility", "+14 Strength"], tip: "Quartermaster Zigris (LBRS)." },
      legs: { slot: "Legs", name: "Devilsaur Leggings", quality: "rare", stats: ["148 Armor", "+12 Stamina", "+46 Attack Power", "+1% Crit", "2pc: +2% Hit"], tip: "Crafted LW 300." },
      feet: { slot: "Feet", name: "Swiftwalker Boots", quality: "rare", stats: ["115 Armor", "+21 Agility", "+7 Stamina", "+4 Strength"], tip: "Princess Moira (BRD)." },
      ring1: { slot: "Finger", name: "Blackstone Ring", quality: "rare", stats: ["+6 Stamina", "+20 Attack Power", "+1% Hit"], tip: "Princess Theradras (Maraudon)." },
      ring2: { slot: "Finger", name: "Tarnished Elven Ring", quality: "rare", stats: ["+15 Agility", "+1% Hit"], tip: "Dire Maul Tribute." },
      trinket1: { slot: "Trinket", name: "Hand of Justice", quality: "rare", stats: ["+20 Attack Power", "2% Chance on hit for 1 extra attack"], tip: "Emperor Dagran Thaurissan (BRD)." },
      trinket2: { slot: "Trinket", name: "Blackhand's Breadth", quality: "rare", stats: ["+2% Critical Strike"], tip: "General Drakkisath's Demise quest." },
      mainHand: { slot: "Main Hand", name: "Thrash Blade", quality: "rare", stats: ["66-124 Dmg (39.4 DPS)", "Speed 2.70", "Chance on hit: 1 extra attack"], tip: "Corruption of Earth and Seed quest!" },
      offHand: { slot: "Off-Hand", name: "Mirah's Song", quality: "rare", stats: ["57-87 Dmg (39.4 DPS)", "Speed 1.80", "+9 Agility", "+9 Strength"], tip: "Kirtonos the Herald quest (Scholo)!" },
      ranged: { slot: "Ranged / Bow", name: "Blackcrow", quality: "rare", stats: ["40.8 DPS", "Speed 3.20", "+3 Agility", "+1% Hit"], tip: "Shadow Hunter Vosh'gajin (LBRS)." }
    }
  }
};

// Character Switcher Controller
function switchActiveCharacter(targetClass) {
  if (targetClass !== "warlock" && targetClass !== "rogue") return;
  activeClass = targetClass;
  try {
    localStorage.setItem("wow_active_character", targetClass);
  } catch (_) {}

  // Update switcher button active state
  const btnW = document.getElementById("btnSwitchWarlock");
  const btnR = document.getElementById("btnSwitchRogue");
  if (btnW) btnW.classList.toggle("active", activeClass === "warlock");
  if (btnR) btnR.classList.toggle("active", activeClass === "rogue");

  // Apply theme class to body
  document.body.classList.remove("theme-warlock", "theme-rogue");
  document.body.classList.add(`theme-${activeClass}`);

  // Point active references
  if (activeClass === "warlock") {
    ACTIVE_LEVEL_DATA = (typeof WARLOCK_LEVEL_DATA !== "undefined") ? WARLOCK_LEVEL_DATA : {};
    ACTIVE_TALENTS_CONFIG = (typeof WARLOCK_TALENTS_CONFIG !== "undefined") ? WARLOCK_TALENTS_CONFIG : [];
    ACTIVE_TALENT_ORDER = (typeof WARLOCK_TALENT_ORDER !== "undefined") ? WARLOCK_TALENT_ORDER : [];
  } else {
    ACTIVE_LEVEL_DATA = (typeof ROGUE_LEVEL_DATA !== "undefined") ? ROGUE_LEVEL_DATA : {};
    ACTIVE_TALENTS_CONFIG = (typeof ROGUE_TALENTS_CONFIG !== "undefined") ? ROGUE_TALENTS_CONFIG : [];
    ACTIVE_TALENT_ORDER = (typeof ROGUE_TALENT_ORDER !== "undefined") ? ROGUE_TALENT_ORDER : [];
  }

  // Retrieve synced data for target class
  const syncedData = (typeof window !== "undefined" && window.WOW_SYNCED_DATA) ? window.WOW_SYNCED_DATA : null;
  let charProfile = null;
  if (syncedData && syncedData.characters && syncedData.characters[activeClass]) {
    charProfile = syncedData.characters[activeClass];
  } else if (syncedData && (!syncedData.characters || syncedData.class.toLowerCase() === activeClass)) {
    charProfile = syncedData;
  }

  if (charProfile) {
    currentLevel = charProfile.level || (activeClass === "warlock" ? 14 : 17);
    // Align paperdoll live_gear
    if (charProfile.liveGear) {
      if (activeClass === "warlock") {
        WARLOCK_GEAR_PRESETS.live_gear.items = charProfile.liveGear;
      } else {
        ROGUE_GEAR_PRESETS.live_gear.items = charProfile.liveGear;
      }
    }
  } else {
    currentLevel = (activeClass === "warlock") ? 14 : 17;
  }

  // Update branding titles
  updateHeaderBranding(charProfile);

  // Align Talents State
  userTalentsState = safeGetJSON(`wow_${activeClass}_talents`, {});
  if (Object.keys(userTalentsState).length === 0 && currentLevel >= 10) {
    autoLearnTalentsToCurrentLevel(false);
  }

  // Update level slider
  const slider = document.getElementById("levelSlider");
  if (slider) {
    slider.value = currentLevel;
  }

  // Re-render all views
  renderLevel(currentLevel);
  renderTalentTreeSummary();
  renderTreeNodes();
  renderPaperdoll(currentPresetKey || "live_gear");
  renderUpgradeAdvisor(currentLevel);
  renderClassQuests();
  renderRotations();
  renderChecklist();
  renderProfessions();
  renderHordeMacros();
  updateSyncedProfessionsUI(charProfile ? charProfile.professions : null);
}
window.switchActiveCharacter = switchActiveCharacter;

function updateHeaderBranding(charProfile) {
  const isWarlock = activeClass === "warlock";
  const name = charProfile ? charProfile.name : (isWarlock ? "Malakor" : "Phana");
  const lvl = charProfile ? charProfile.level : (isWarlock ? 14 : 17);

  // Main Heading
  const classSpan = document.getElementById("codexClassSpan");
  if (classSpan) {
    classSpan.textContent = isWarlock ? "Affliction Warlock" : "Combat Rogue";
    classSpan.className = isWarlock ? "class-text warlock-text" : "class-text rogue-text";
  }

  const raceSpan = document.getElementById("codexRaceSpan");
  if (raceSpan) {
    raceSpan.textContent = "Horde Undead (Forsaken)";
  }

  // Header Pill
  const headerName = document.getElementById("headerCharName");
  if (headerName) headerName.textContent = name;

  const headerLvl = document.getElementById("headerCharLvl");
  if (headerLvl) headerLvl.textContent = lvl;

  // Switcher Pills Subtitles
  const wSub = document.getElementById("warlockSwitchSub");
  if (wSub && typeof window !== "undefined" && window.WOW_SYNCED_DATA && window.WOW_SYNCED_DATA.characters && window.WOW_SYNCED_DATA.characters.warlock) {
    wSub.textContent = `Lvl ${window.WOW_SYNCED_DATA.characters.warlock.level} • Affliction`;
  }
  const rSub = document.getElementById("rogueSwitchSub");
  if (rSub && typeof window !== "undefined" && window.WOW_SYNCED_DATA && window.WOW_SYNCED_DATA.characters && window.WOW_SYNCED_DATA.characters.rogue) {
    rSub.textContent = `Lvl ${window.WOW_SYNCED_DATA.characters.rogue.level} • Combat`;
  }
}

// Level Controller
function setLevel(lvl) {
  currentLevel = Math.max(1, Math.min(60, parseInt(lvl, 10)));
  const slider = document.getElementById("levelSlider");
  if (slider) slider.value = currentLevel;

  try {
    localStorage.setItem(`wow_${activeClass}_current_level`, currentLevel);
  } catch (_) {}

  renderLevel(currentLevel);
  renderTalentTreeSummary();
  renderUpgradeAdvisor(currentLevel);
}
window.setLevel = setLevel;

function quickStepLevel(delta) {
  setLevel(currentLevel + delta);
}
window.quickStepLevel = quickStepLevel;

// Render Level Codex View
function renderLevel(lvl) {
  const data = ACTIVE_LEVEL_DATA[lvl] || {
    title: `Level ${lvl} Progression`,
    zone: "The Barrens & Contested Territories",
    zoneRange: `${Math.max(1, lvl - 2)}-${lvl + 2}`,
    hubs: "Horde Outposts",
    zoneInstructions: `Continue questing through your level ${lvl} bracket. Keep your gear, trainer spells, and First Aid updated.`,
    talent: null,
    talentNote: lvl < 10 ? "Talents unlock at Level 10." : "Allocate your talent point in the Talent Build tab.",
    trainerTrain: [],
    trainerSkip: [],
    rotation: ["Execute standard combat rotation."],
    gearTip: "Check vendors and dungeon bosses for weapon and stat upgrades.",
    dungeonGear: []
  };

  // Header badges
  const lvlBadge = document.querySelector(".level-badge-huge .lvl-val");
  if (lvlBadge) lvlBadge.textContent = lvl;

  const mainTitle = document.getElementById("levelMainTitle");
  if (mainTitle) mainTitle.textContent = data.title;

  const mainSub = document.getElementById("levelMainSub");
  if (mainSub) mainSub.textContent = `${data.zone} • ${data.hubs}`;

  // Next/Prev Buttons
  const prevBtn = document.getElementById("prevLevelBtn");
  if (prevBtn) {
    prevBtn.disabled = (lvl <= 1);
    prevBtn.textContent = lvl > 1 ? `◀ Previous Level (${lvl - 1})` : "◀ Level 1";
  }

  const nextBtn = document.getElementById("nextLevelBtn");
  if (nextBtn) {
    nextBtn.disabled = (lvl >= 60);
    nextBtn.textContent = lvl < 60 ? `Next Level (${lvl + 1}) ▶` : "Level 60 Maxed ▶";
  }

  // Zone Card
  const zoneName = document.getElementById("zoneName");
  if (zoneName) zoneName.textContent = data.zone;

  const zoneRange = document.getElementById("zoneRange");
  if (zoneRange) zoneRange.textContent = `Bracket: ${data.zoneRange}`;

  const zoneHubs = document.getElementById("zoneHubs");
  if (zoneHubs) zoneHubs.textContent = `Flight Paths / Hubs: ${data.hubs}`;

  const zoneInstructions = document.getElementById("zoneInstructions");
  if (zoneInstructions) zoneInstructions.textContent = data.zoneInstructions;

  // Talent Card
  const talentContainer = document.getElementById("talentRecommendationBox");
  if (talentContainer) {
    if (lvl < 10) {
      talentContainer.innerHTML = `
        <div class="talent-callout-empty">
          <div class="talent-empty-icon">🔒</div>
          <div class="talent-empty-text">
            <strong>Talent Points Locked:</strong> Talents unlock at <strong>Level 10</strong>. Prepare your build for ${activeClass === 'warlock' ? 'Improved Corruption' : 'Remorseless Attacks'}!
          </div>
        </div>
      `;
    } else if (data.talent) {
      talentContainer.innerHTML = `
        <div class="talent-card-highlight">
          <div class="talent-icon-box">${data.talent.icon || '⭐'}</div>
          <div class="talent-info-box">
            <div class="talent-name-row">
              <h4>${data.talent.name}</h4>
              <span class="tag-badge talent">${data.talent.rank} • ${data.talent.tree.toUpperCase()}</span>
            </div>
            <p class="talent-why">${data.talent.why}</p>
          </div>
        </div>
      `;
    } else {
      talentContainer.innerHTML = `
        <div class="talent-card-highlight">
          <div class="talent-icon-box">🌲</div>
          <div class="talent-info-box">
            <h4>Level ${lvl} Talent Investment</h4>
            <p class="talent-why">${data.talentNote || 'Allocate your talent point according to the recommended leveling build in the Talent tab.'}</p>
          </div>
        </div>
      `;
    }
  }

  // Trainer Spells Card
  const trainList = document.getElementById("spellsTrainList");
  if (trainList) {
    if (data.trainerTrain && data.trainerTrain.length > 0) {
      trainList.innerHTML = data.trainerTrain.map(s => `<li class="spell-item train">✓ ${s}</li>`).join("");
    } else {
      trainList.innerHTML = `<li class="spell-item none">No critical trainer spells to learn at Level ${lvl}. Save your silver!</li>`;
    }
  }

  const skipList = document.getElementById("spellsSkipList");
  if (skipList) {
    if (data.trainerSkip && data.trainerSkip.length > 0) {
      skipList.innerHTML = data.trainerSkip.map(s => `<li class="spell-item skip">✗ ${s}</li>`).join("");
    } else {
      skipList.innerHTML = `<li class="spell-item none">Nothing to skip at this level.</li>`;
    }
  }

  // Rotation Card
  const rotList = document.getElementById("combatRotationList");
  if (rotList) {
    if (data.rotation && data.rotation.length > 0) {
      rotList.innerHTML = data.rotation.map((r, i) => `
        <li class="rot-step">
          <span class="rot-num">${i + 1}</span>
          <span class="rot-text">${r}</span>
        </li>
      `).join("");
    }
  }

  // Gear Tips Card
  const gearTip = document.getElementById("levelGearTipText");
  if (gearTip) {
    gearTip.textContent = data.gearTip || "Prioritize weapon DPS and primary stats (Agility for Rogue, Spell Power/Stamina for Warlock).";
  }

  // Milestone Highlight
  document.querySelectorAll(".pill-jump").forEach(pill => {
    const plvl = parseInt(pill.getAttribute("data-lvl"), 10);
    pill.classList.toggle("current-milestone", plvl === lvl);
  });
}

// Talent System
function getTotalTalentsSpent() {
  let count = 0;
  for (const tid in userTalentsState) {
    count += (userTalentsState[tid] || 0);
  }
  return count;
}

function getMaxTalentPointsAvailable() {
  return Math.max(0, currentLevel - 9);
}

function autoLearnTalentsToCurrentLevel(shouldAlert = true) {
  const maxPts = getMaxTalentPointsAvailable();
  userTalentsState = {};
  for (let i = 0; i < maxPts && i < ACTIVE_TALENT_ORDER.length; i++) {
    const tid = ACTIVE_TALENT_ORDER[i];
    userTalentsState[tid] = (userTalentsState[tid] || 0) + 1;
  }
  safeSetJSON(`wow_${activeClass}_talents`, userTalentsState);
  renderTalentTreeSummary();
  renderTreeNodes();
  if (shouldAlert) {
    alert(`⚡ Automatically allocated ${maxPts} talent points for Level ${currentLevel} ${activeClass.toUpperCase()}!`);
  }
}
window.autoLearnTalentsToCurrentLevel = autoLearnTalentsToCurrentLevel;

function resetTalents() {
  if (confirm(`Reset and respec all talent points for ${activeClass.toUpperCase()}?`)) {
    userTalentsState = {};
    safeSetJSON(`wow_${activeClass}_talents`, userTalentsState);
    renderTalentTreeSummary();
    renderTreeNodes();
  }
}
window.resetTalents = resetTalents;

function adjustTalent(id, delta) {
  const talent = ACTIVE_TALENTS_CONFIG.find(t => t.id === id);
  if (!talent) return;

  const currentVal = userTalentsState[id] || 0;
  const newVal = currentVal + delta;

  if (delta > 0) {
    if (getTotalTalentsSpent() >= getMaxTalentPointsAvailable()) {
      alert(`No talent points available! You have spent all points for Level ${currentLevel}. Level up to earn more!`);
      return;
    }
    if (newVal > talent.max) return;
  } else {
    if (newVal < 0) return;
  }

  if (newVal === 0) {
    delete userTalentsState[id];
  } else {
    userTalentsState[id] = newVal;
  }

  safeSetJSON(`wow_${activeClass}_talents`, userTalentsState);
  renderTalentTreeSummary();
  renderTreeNodes();
}
window.adjustTalent = adjustTalent;

function renderTalentTreeSummary() {
  const spent = getTotalTalentsSpent();
  const maxPts = getMaxTalentPointsAvailable();
  const rem = Math.max(0, maxPts - spent);

  const ptsAvail = document.getElementById("talentsPointsAvail");
  if (ptsAvail) ptsAvail.textContent = `${maxPts} Pts Total`;

  const ptsSpent = document.getElementById("talentsPointsSpent");
  if (ptsSpent) ptsSpent.textContent = `${spent} Spent`;

  const ptsRem = document.getElementById("talentsPointsRem");
  if (ptsRem) {
    ptsRem.textContent = `${rem} Available`;
    ptsRem.className = rem > 0 ? "points-pill available" : "points-pill spent";
  }

  const lvlBadge = document.getElementById("talentsCurrentLevelBadge");
  if (lvlBadge) lvlBadge.textContent = `Level ${currentLevel}`;

  // Trees Breakdown
  const trees = activeClass === "warlock" ? ["affliction", "demonology", "destruction"] : ["assassination", "combat", "subtlety"];
  const treeNames = activeClass === "warlock" ? ["Affliction", "Demonology", "Destruction"] : ["Assassination", "Combat", "Subtlety"];

  trees.forEach((tKey, idx) => {
    let tSpent = 0;
    ACTIVE_TALENTS_CONFIG.filter(t => t.tree === tKey).forEach(t => {
      tSpent += (userTalentsState[t.id] || 0);
    });
    const el = document.getElementById(`tree${idx + 1}Points`);
    if (el) el.textContent = `${tSpent} Pts`;

    const header = document.getElementById(`tree${idx + 1}Header`);
    if (header) header.textContent = treeNames[idx];
  });
}

function renderTreeNodes() {
  const trees = activeClass === "warlock" ? ["affliction", "demonology", "destruction"] : ["assassination", "combat", "subtlety"];

  trees.forEach((tKey, idx) => {
    const listEl = document.getElementById(`tree${idx + 1}List`);
    if (!listEl) return;

    const talents = ACTIVE_TALENTS_CONFIG.filter(t => t.tree === tKey);
    listEl.innerHTML = talents.map(t => {
      const pts = userTalentsState[t.id] || 0;
      const isMax = pts >= t.max;
      return `
        <div class="talent-row ${pts > 0 ? 'allocated' : ''}">
          <div class="talent-row-left">
            <span class="talent-icon-emoji">${t.icon || '🐾'}</span>
            <div class="talent-text-col">
              <div class="talent-name-line">
                <strong>${t.name}</strong>
                <span class="talent-rank-pill ${isMax ? 'maxed' : ''}">${pts} / ${t.max}</span>
              </div>
              <p class="talent-desc-text">${t.desc}</p>
            </div>
          </div>
          <div class="talent-btn-col">
            <button class="btn-t-step" onclick="adjustTalent('${t.id}', -1)" ${pts <= 0 ? 'disabled' : ''}>−</button>
            <button class="btn-t-step plus" onclick="adjustTalent('${t.id}', 1)" ${isMax ? 'disabled' : ''}>+</button>
          </div>
        </div>
      `;
    }).join("");
  });
}

// Interactive Paperdoll (Armor Mockup)
function renderPaperdoll(presetKey = currentPresetKey) {
  currentPresetKey = presetKey;
  const presets = activeClass === "warlock" ? WARLOCK_GEAR_PRESETS : ROGUE_GEAR_PRESETS;
  const data = presets[presetKey] || presets.live_gear;
  const items = data.items || {};

  // Update preset button active state
  document.querySelectorAll(".btn-preset").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-preset") === presetKey);
  });

  const titleEl = document.getElementById("mockupPresetTitle");
  const subEl = document.getElementById("mockupPresetSub");
  if (titleEl) titleEl.textContent = data.label || "Gear Preset";
  if (subEl) subEl.textContent = data.desc || "";

  // Left Column Slots
  renderSlot("slotHead", items.head);
  renderSlot("slotNeck", items.neck);
  renderSlot("slotShoulders", items.shoulders);
  renderSlot("slotBack", items.back);
  renderSlot("slotChest", items.chest);
  renderSlot("slotWrists", items.wrists);

  // Right Column Slots
  renderSlot("slotHands", items.hands);
  renderSlot("slotWaist", items.waist);
  renderSlot("slotLegs", items.legs);
  renderSlot("slotFeet", items.feet);
  renderSlot("slotRing1", items.ring1);
  renderSlot("slotRing2", items.ring2);
  renderSlot("slotTrinket1", items.trinket1);
  renderSlot("slotTrinket2", items.trinket2);

  // Bottom Weapons & Ranged Slots
  renderSlot("slotMainHand", items.mainHand, true);
  renderSlot("slotOffHand", items.offHand, true);
  renderSlot("slotRelic", items.ranged || items.relic, true);

  // Center Hero Card & Stats Sheet
  const isWarlock = activeClass === "warlock";
  const crestEl = document.getElementById("paperdollCrest");
  if (crestEl) crestEl.textContent = isWarlock ? "🔮" : "🗡️";

  const heroNameEl = document.getElementById("paperdollHeroName");
  if (heroNameEl) heroNameEl.textContent = isWarlock ? "Affliction Warlock" : "Combat Rogue";

  const specBadgeEl = document.getElementById("paperdollSpecBadge");
  if (specBadgeEl) {
    specBadgeEl.textContent = isWarlock ? "Affliction Drain Tank" : "Combat Swords / Daggers";
    specBadgeEl.style.color = isWarlock ? "#c084fc" : "#fbbf24";
    specBadgeEl.style.borderColor = isWarlock ? "#c084fc" : "#fbbf24";
  }

  // Update Stats Sheet
  const hpEl = document.getElementById("statHp");
  if (hpEl) hpEl.textContent = isWarlock ? (380 + currentLevel * 26) : (410 + currentLevel * 32);

  const resLbl = document.getElementById("statResourceLbl");
  if (resLbl) resLbl.textContent = isWarlock ? "Mana (MP):" : "Energy:";

  const mpEl = document.getElementById("statMp");
  if (mpEl) mpEl.textContent = isWarlock ? (420 + currentLevel * 28) : "100";

  const pwrLbl = document.getElementById("statPowerLbl");
  if (pwrLbl) pwrLbl.textContent = isWarlock ? "Shadow Spell Power:" : "Attack Power (AP):";

  const pwrVal = document.getElementById("statPowerVal");
  if (pwrVal) {
    pwrVal.textContent = isWarlock
      ? `+${Math.max(0, (currentLevel - 10) * 4)} Shadow`
      : `${Math.floor(currentLevel * 14 + 40)} AP`;
  }

  const armorVal = document.getElementById("statArmorVal");
  if (armorVal) {
    armorVal.textContent = isWarlock
      ? `${currentLevel * 12 + 60} (~14%)`
      : `${currentLevel * 35 + 120} (~28%)`;
  }

  const critLbl = document.getElementById("statCritLbl");
  if (critLbl) critLbl.textContent = isWarlock ? "Spell Crit:" : "Melee Crit:";

  const critEl = document.getElementById("statCrit");
  if (critEl) critEl.textContent = isWarlock ? "5.4%" : "14.8%";

  const subLbl = document.getElementById("statSubLbl");
  if (subLbl) subLbl.textContent = isWarlock ? "Drain Life / sec:" : "Dodge Chance:";

  const subVal = document.getElementById("statSubVal");
  if (subVal) {
    subVal.textContent = isWarlock
      ? `${Math.floor(currentLevel * 3.5 + 18)} / sec`
      : `${Math.min(25, (8 + currentLevel * 0.3)).toFixed(1)}%`;
  }

  const hitEl = document.getElementById("statHit");
  if (hitEl) hitEl.textContent = presetKey === "lvl60" ? "+2% (BiS)" : "0%";

  initTooltipEvents();
}
window.renderPaperdoll = renderPaperdoll;

function renderSlot(elementId, itemData, isWeaponRow = false) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const isWarlock = activeClass === "warlock";
  const defaultSlotName = capitalize(elementId.replace("slot", ""));
  const item = itemData || {
    slot: defaultSlotName,
    name: "None Equipped",
    quality: "common",
    source: "Empty Slot",
    stats: []
  };

  try {
    el.dataset.itemJson = JSON.stringify(item);
  } catch (_) {}

  const iconBox = el.querySelector(".slot-icon-box");
  const nameEl = el.querySelector(".slot-item-name");
  const sourceEl = el.querySelector(".slot-source-text");
  const badgeEl = el.querySelector(".weapon-slot-badge");
  const labelEl = el.querySelector(".slot-label-text");

  if (iconBox) {
    iconBox.className = `slot-icon-box rarity-${item.quality || 'common'}`;
    iconBox.textContent = getSlotEmoji(item.slot || elementId);
  }

  if (nameEl) {
    nameEl.textContent = item.name || "None Equipped";
    nameEl.className = `slot-item-name ${item.quality || 'common'}`;
  }

  if (sourceEl) {
    sourceEl.textContent = item.source || item.tip || "Empty Slot";
  }

  if (labelEl && elementId === "slotRelic") {
    labelEl.textContent = isWarlock ? "Ranged / Wand" : "Ranged / Bow";
  }

  if (badgeEl && isWeaponRow) {
    if (elementId === "slotMainHand") {
      badgeEl.className = "weapon-slot-badge badge-2h";
      badgeEl.textContent = isWarlock ? "Main Hand / Staff" : "Main Hand (Slow)";
    } else if (elementId === "slotOffHand") {
      if (item.quality === "disabled") {
        badgeEl.className = "weapon-slot-badge badge-no-shield";
        badgeEl.textContent = "Empty";
      } else {
        badgeEl.className = "weapon-slot-badge badge-offhand";
        badgeEl.textContent = isWarlock ? "Off-Hand / Tome" : "Off-Hand (Fast)";
      }
    } else if (elementId === "slotRelic") {
      badgeEl.className = "weapon-slot-badge badge-relic";
      badgeEl.textContent = isWarlock ? "Wand / Ranged" : "Bow / Gun";
    }
  }
}

function getSlotEmoji(slot) {
  const s = String(slot).toLowerCase();
  if (s.includes("head")) return "👑";
  if (s.includes("neck")) return "📿";
  if (s.includes("shoulder")) return "🛡️";
  if (s.includes("back") || s.includes("cloak")) return "🧣";
  if (s.includes("chest") || s.includes("robe")) return "🥋";
  if (s.includes("wrist") || s.includes("bracer")) return "⛓️";
  if (s.includes("hand") || s.includes("glove")) return "🧤";
  if (s.includes("waist") || s.includes("belt")) return "🎗️";
  if (s.includes("leg") || s.includes("pant")) return "👖";
  if (s.includes("feet") || s.includes("boot")) return "👢";
  if (s.includes("ring") || s.includes("finger")) return "💍";
  if (s.includes("trinket")) return "🔮";
  if (s.includes("main") || s.includes("two-hand") || s.includes("sword") || s.includes("dagger")) return "⚔️";
  if (s.includes("off-hand")) return activeClass === "warlock" ? "📖" : "🗡️";
  if (s.includes("relic") || s.includes("ranged") || s.includes("wand")) return activeClass === "warlock" ? "✨" : "🏹";
  return "📦";
}

// Tooltip System
let tooltipEl = null;
function initTooltipEvents() {
  tooltipEl = document.getElementById("wowItemTooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "wowItemTooltip";
    tooltipEl.className = "wow-item-tooltip";
    document.body.appendChild(tooltipEl);
  }

  document.querySelectorAll(".gear-slot-item, .weapon-slot-card").forEach(slotEl => {
    slotEl.onmouseenter = (e) => showItemTooltip(slotEl, e);
    slotEl.onmousemove = (e) => positionTooltip(e);
    slotEl.onmouseleave = () => hideItemTooltip();
  });
}

function showItemTooltip(slotEl, e) {
  if (!slotEl || !slotEl.dataset || !slotEl.dataset.itemJson) return;
  let item = null;
  try {
    item = JSON.parse(slotEl.dataset.itemJson);
  } catch (_) {
    return;
  }
  if (!item || !item.name || item.name === "None Equipped") {
    hideItemTooltip();
    return;
  }

  let html = `
    <div class="tt-name ${item.quality || 'common'}">${item.name}</div>
    <div class="tt-bind">Binds when picked up</div>
    <div class="tt-slot-row">
      <span>${item.slot || ""}</span>
      <span>${item.type || ""}</span>
    </div>
  `;
  if (item.armor) html += `<div class="tt-armor">${item.armor}</div>`;
  if (item.stats && item.stats.length > 0) {
    item.stats.forEach(st => { html += `<div class="tt-stat">${st}</div>`; });
  }
  if (item.req) html += `<div class="tt-req">${item.req}</div>`;
  if (item.tip || item.source) html += `<div class="tt-source">Source: ${item.source || item.tip}</div>`;

  tooltipEl.innerHTML = html;
  tooltipEl.style.display = "block";
  positionTooltip(e);
}

function positionTooltip(e) {
  if (!tooltipEl) return;
  const x = e.pageX + 16;
  const y = e.pageY + 16;
  tooltipEl.style.left = `${x}px`;
  tooltipEl.style.top = `${y}px`;
}

function hideItemTooltip() {
  if (tooltipEl) tooltipEl.style.display = "none";
}

// Upgrade Advisor
function renderUpgradeAdvisor(lvl, filter = currentAdvisorFilter) {
  currentAdvisorFilter = filter;
  const container = document.getElementById("advisorCardsContainer") || document.getElementById("upgradeAdvisorContainer");
  const badgeEl = document.getElementById("advisorLevelBadge");
  if (badgeEl) badgeEl.textContent = lvl;
  if (!container) return;

  const isWarlock = activeClass === "warlock";
  const upgrades = isWarlock ? [
    { lvl: 5, name: "Lesser Magic Wand", slot: "Ranged / Wand", source: "Enchanting (10) / AH", dps: "11.3 DPS", why: "Crucial zero-mana wanding" },
    { lvl: 13, name: "Greater Magic Wand", slot: "Ranged / Wand", source: "Enchanting (75) / AH", dps: "17.5 DPS", why: "Massive DPS leap for early leveling" },
    { lvl: 24, name: "Robes of Arugal", slot: "Chest", source: "Baron Silverlaine (SFK)", stats: "+10 Int, +5 Spirit", why: "Best caster robe until late 30s" },
    { lvl: 27, name: "Gravestone Scepter", slot: "Ranged / Wand", source: "Blackfathom Villainy quest (BFD)", stats: "29.0 DPS, Shadow Damage", why: "👑 Best wand in the entire 20-40 bracket!" },
    { lvl: 39, name: "Robe of the Lich", slot: "Chest", source: "Amnennar (RFD)", stats: "+20 Stamina, +14 Shadow Damage", why: "Massive shadow power and stamina" },
    { lvl: 42, name: "Nether Force Wand", slot: "Ranged / Wand", source: "Tanaris Quest", stats: "40.5 DPS, Shadow Damage", why: "High DPS shadow wand" },
    { lvl: 45, name: "Zum'rah's Vexing Cane", slot: "Main Hand", source: "Witch Doctor Zum'rah (ZF)", stats: "+21 Shadow Damage", why: "Top tier caster staff" },
    { lvl: 57, name: "Robe of the Void", slot: "Chest", source: "Tailoring (300)", stats: "+46 Shadow Damage, Heal 1200", why: "Legendary Classic Warlock chestpiece" }
  ] : [
    { lvl: 13, name: "Beholder's Eye", slot: "Main Hand", source: "Wandering Eye of Kilrogg", stats: "11.1 DPS, +2 Agi, +1 Stam", why: "⭐ Currently equipped on Phana!" },
    { lvl: 15, name: "Grizzly Jerkin", slot: "Chest", source: "World Drop (Barrens)", stats: "88 Armor, +6 Str, +5 Stam", why: "⭐ Currently equipped on Phana!" },
    { lvl: 17, name: "Thief's Blade", slot: "Main Hand", source: "World Drop / AH", stats: "16.5 DPS, +3 Agi, +2 Str", why: "Superb Combat sword upgrade" },
    { lvl: 19, name: "Feet of the Lynx", slot: "Feet", source: "World Drop / AH", stats: "63 Armor, +8 Agi, +3 Str", why: "Best physical boots in early game" },
    { lvl: 25, name: "Triprunner Dungarees", slot: "Legs", source: "Rig Wars (Gnomeregan quest)", stats: "+18 Agility, +6 Stamina", why: "👑 God-tier agility pants!" },
    { lvl: 30, name: "Sword of Omen", slot: "Main Hand", source: "Scarlet Monastery Quest", stats: "22.2 DPS, +7 Str, +5 Agi", why: "Premier quest sword" },
    { lvl: 40, name: "Vanquisher's Sword", slot: "Main Hand", source: "Bring the Light (RFD quest)", stats: "30.6 DPS, +28 Attack Power", why: "Guaranteed sword upgrade at 40" },
    { lvl: 45, name: "Thrash Blade", slot: "Main Hand", source: "Corruption of Earth and Seed (Maraudon)", stats: "39.4 DPS, Extra Attack Proc", why: "👑 Undisputed #1 leveling sword in Classic WoW!" },
    { lvl: 57, name: "Mirah's Song", slot: "Off-Hand", source: "Kirtonos the Herald (Scholomance)", stats: "+9 Agi, +9 Str, 39.4 DPS", why: "👑 Premier off-hand sword for Combat Rogues" }
  ];

  container.innerHTML = upgrades.map(u => `
    <div class="upgrade-card ${u.lvl <= lvl ? 'available-now' : 'upcoming'}">
      <div class="upgrade-header">
        <span class="upgrade-lvl">Lvl ${u.lvl}</span>
        <strong>${u.name}</strong>
        <span class="upgrade-slot">${u.slot}</span>
      </div>
      <div class="upgrade-source">📍 ${u.source}</div>
      <div class="upgrade-why">${u.why}</div>
    </div>
  `).join("");
}
window.renderUpgradeAdvisor = renderUpgradeAdvisor;

// Class Quests View
function renderClassQuests() {
  const container = document.getElementById("classQuestsContainer");
  if (!container) return;

  const isWarlock = activeClass === "warlock";
  const quests = isWarlock ? [
    { lvl: 1, title: "The Mind's Eye (Summon Imp)", zone: "Deathknell (Tirisfal Glades)", npc: "Shadow Priest Sarvis", desc: "Collect the Scarlet Initiate head and complete the summoning ritual to bind your first demon minion, the Imp." },
    { lvl: 10, title: "The Binding (Summon Voidwalker)", zone: "Brill / Ruined Tower (Tirisfal Glades)", npc: "Luther Pickman", desc: "Retrieve the glyph, defeat the summoned Voidwalker in the ruined tower, and bind it to your will as your personal tank!" },
    { lvl: 20, title: "Hearts of Wood (Summon Succubus)", zone: "Undercity / Silverpine / Barrens", npc: "Caretaker Caice", desc: "Venture through the southern wetlands of the Barrens and the hills of Silverpine to gather the Hearts of Wood and bind the seductive Succubus." },
    { lvl: 30, title: "Tome of the Cabal (Summon Felhunter)", zone: "Undercity / Ratchet / Thousand Needles", npc: "Mennet Carkiek", desc: "Gather the scattered pages of the Tome of the Cabal and summon the devourer of magic, your Felhunter minion!" },
    { lvl: 40, title: "Summon Felsteed (FREE 60% Mount!)", zone: "Undercity / Orgrimmar Caster Trainers", npc: "Warlock Trainers", desc: "Visit your Warlock trainer to receive your Level 40 Felsteed mount directly—completely free with zero gold cost!" },
    { lvl: 50, title: "Infernal Minion & Niby the Almighty", zone: "Felwood (Jaedenar)", npc: "Niby the Almighty", desc: "Complete the infernal core retrieval in Jaedenar to learn how to call down a blazing Infernal from the sky!" },
    { lvl: 60, title: "Dreadsteed of Xoroth (Epic 100% Mount)", zone: "Burning Steppes / Dire Maul / Scholomance", npc: "Mor'zul Bloodbringer", desc: "Epic multi-dungeon quest line to summon and defeat the Dreadsteed of Xoroth for your 100% speed fiery epic mount." }
  ] : [
    { lvl: 10, title: "Dual Wielding Training", zone: "Brill / Undercity", npc: "Marion Call", desc: "Train Dual Wielding at level 10 to equip an off-hand dagger or sword, doubling your auto-attack output!" },
    { lvl: 16, title: "Lockpicking Mastery & Pirate Footlockers", zone: "Ratchet (Pirate Ships)", npc: "Wrenix the Wrench", desc: "Acquire your Thieves' Tools and practice picking the Buccaneer's Footlockers aboard the Southsea pirate vessel off Ratchet." },
    { lvl: 20, title: "The Shattered Hand & Sludge Fen Poisons", zone: "The Barrens (Sludge Fen Tower)", npc: "Shenthul (Orgrimmar)", desc: "CRUCIAL QUEST! Infiltrate the Venture Co. tower, pickpocket the Gallywix Key, crack the chest, craft antitoxin, and learn Instant Poison, Deadly Poison, and Thistle Tea!" },
    { lvl: 24, title: "Detect Traps & Disarm", zone: "Undercity (Rogues' Quarter)", npc: "Rogue Trainers", desc: "Learn to detect stealth traps and disarm enemy defenses." },
    { lvl: 34, title: "Blind & Blinding Powder", zone: "Undercity / Orgrimmar", npc: "Rogue Trainers", desc: "Learn Blind to disorient targets for 10 seconds. Always carry Fadeleaf to craft Blinding Powder." }
  ];

  container.innerHTML = quests.map(q => `
    <div class="quest-codex-card ${q.lvl <= currentLevel ? 'completed-card' : ''}">
      <div class="quest-codex-header">
        <span class="quest-lvl-tag">Level ${q.lvl}</span>
        <strong>${q.title}</strong>
        <span class="quest-zone-tag">📍 ${q.zone}</span>
      </div>
      <div class="quest-npc-line">NPC: <em>${q.npc}</em></div>
      <p class="quest-codex-desc">${q.desc}</p>
    </div>
  `).join("");
}

// Rotations View
function renderRotations() {
  const container = document.getElementById("rotationsCodexContainer");
  if (!container) return;

  const isWarlock = activeClass === "warlock";
  if (isWarlock) {
    container.innerHTML = `
      <div class="guide-card">
        <h3>🔮 Master Solo Drain Tank Rotation (Level 20–60)</h3>
        <p style="color: var(--text-muted); margin-bottom: 12px;">Zero downtime, infinite health, and infinite mana:</p>
        <ol style="padding-left: 20px; line-height: 1.8;">
          <li><strong>Send Pet:</strong> Set Succubus or Voidwalker to attack.</li>
          <li><strong>Instant Corruption:</strong> Cast while walking into 30yd range.</li>
          <li><strong>Siphon Life:</strong> Apply 30-second heal-over-time.</li>
          <li><strong>Curse of Agony:</strong> Apply scaling shadow DoT.</li>
          <li><strong>Face-Tank with Drain Life:</strong> Channel Drain Life (70% pushback resistant via Fel Concentration). It heals you for all damage taken!</li>
          <li><strong>Nightfall Procs:</strong> Fire INSTANT Shadow Bolt immediately when Shadow Trance procs!</li>
          <li><strong>Dark Pact Recovery:</strong> Tap Dark Pact 2-3 times to drain pet mana directly into your mana bar. Pull next mob immediately!</li>
        </ol>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="guide-card">
        <h3>🗡️ Master Combat Swords Rotation (Level 10–60)</h3>
        <p style="color: var(--text-muted); margin-bottom: 12px;">Maximum sustained physical DPS and defensive uptime:</p>
        <ol style="padding-left: 20px; line-height: 1.8;">
          <li><strong>Poisons:</strong> ALWAYS keep Instant Poison applied to both Main Hand and Off-Hand!</li>
          <li><strong>Opener:</strong> Open from Stealth with Cheap Shot (4s stun) or Sinister Strike with Remorseless Attacks (+40% crit!).</li>
          <li><strong>Slice and Dice:</strong> Spend 1-2 Combo Points to activate Slice and Dice (+20% to +30% attack speed). KEEP IT UP 100% OF THE TIME!</li>
          <li><strong>Riposte on Parry:</strong> Whenever you parry, press Riposte immediately (10 energy for 150% weapon damage + 6s disarm!).</li>
          <li><strong>Finisher:</strong> Spend 4-5 Combo Points on Eviscerate (Relentless Strikes refunds 25 energy).</li>
          <li><strong>Double Pulls / Packs:</strong> Pop Blade Flurry (+20% speed + cleave both) + Adrenaline Rush (100% energy regen) and shred entire packs!</li>
          <li><strong>Emergency Survival:</strong> Gouge (4s incapacitate) -> Step back -> Apply First Aid bandage -> Re-engage!</li>
        </ol>
      </div>
    `;
  }
}

// Checklist Tracker View
function renderChecklist() {
  const container = document.getElementById("checklistItemsContainer");
  if (!container) return;

  const list = activeClass === "warlock" ? WARLOCK_CHECKLIST : ROGUE_CHECKLIST;
  userChecklistState = safeGetJSON(`wow_${activeClass}_checklist`, {});

  container.innerHTML = list.map(item => {
    const isChecked = !!userChecklistState[item.id];
    return `
      <div class="checklist-item ${isChecked ? 'completed' : ''}" onclick="toggleChecklistItem('${item.id}')">
        <input type="checkbox" id="chk_${item.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); toggleChecklistItem('${item.id}')">
        <label for="chk_${item.id}">${item.text}</label>
      </div>
    `;
  }).join("");
}

function toggleChecklistItem(id) {
  userChecklistState = safeGetJSON(`wow_${activeClass}_checklist`, {});
  userChecklistState[id] = !userChecklistState[id];
  safeSetJSON(`wow_${activeClass}_checklist`, userChecklistState);
  renderChecklist();
}
window.toggleChecklistItem = toggleChecklistItem;

// Professions Codex View
function renderProfessions() {
  const container = document.getElementById("professionsContainer");
  if (!container) return;

  const isWarlock = activeClass === "warlock";
  const syncedData = (typeof window !== "undefined" && window.WOW_SYNCED_DATA) ? window.WOW_SYNCED_DATA : null;
  const char = (syncedData && syncedData.characters && syncedData.characters[activeClass]) || syncedData || {};
  const profs = char.professions || {};

  const p1 = profs.primary1 || (isWarlock ? { name: "Tailoring", level: 65, max: 75, rank: "Apprentice", icon: "🧵" } : { name: "Skinning", level: 4, max: 75, rank: "Apprentice", icon: "🗡️" });
  const p2 = profs.primary2 || (isWarlock ? { name: "Enchanting", level: 45, max: 75, rank: "Apprentice", icon: "✨" } : { name: "Leatherworking", level: 0, max: 75, rank: "Untrained", icon: "✂️" });

  let html = `
    <div class="guide-card">
      <div class="card-header-with-badge" style="margin-bottom: 8px;">
        <h3 class="card-title" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <svg viewBox="0 0 24 24"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg>
          ${isWarlock ? "Tailoring & Enchanting 1–300 Speed Guide" : "Skinning, Leatherworking & Poisons 1–300 Guide"}
        </h3>
        <span class="tag-badge" style="background: rgba(220, 38, 38, 0.2); color: #f87171;">Horde 1-300 Blueprint</span>
      </div>

      <!-- Live Synced Professions Banner -->
      <div class="prof-sync-banner" style="margin-bottom: 20px;">
        <div class="prof-sync-header">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="sync-status-dot"></span>
            <span class="prof-sync-title">Live Client Professions (${char.name || (isWarlock ? "Malakor" : "Phana")})</span>
          </div>
          <button type="button" class="btn-prof-sync" onclick="directSyncHeaderClick()">⚡ Re-Sync</button>
        </div>
        <div class="prof-sync-grid">
          <div class="prof-sync-card">
            <div class="prof-sync-card-top">
              <span>${p1.icon || '🛠️'} ${p1.name}</span>
              <span class="prof-sync-rank">${p1.rank}</span>
            </div>
            <div class="prof-sync-val">${p1.level} <span class="prof-sync-max">/ ${p1.max}</span></div>
            <div class="prof-sync-bar-bg">
              <div class="prof-sync-bar-fill" style="width: ${Math.min(100, Math.round((p1.level / p1.max) * 100))}%; background: #4ade80;"></div>
            </div>
          </div>
          <div class="prof-sync-card">
            <div class="prof-sync-card-top">
              <span>${p2.icon || '✨'} ${p2.name}</span>
              <span class="prof-sync-rank">${p2.rank}</span>
            </div>
            <div class="prof-sync-val">${p2.level} <span class="prof-sync-max">/ ${p2.max}</span></div>
            <div class="prof-sync-bar-bg">
              <div class="prof-sync-bar-fill" style="width: ${Math.min(100, Math.round((p2.level / Math.max(1, p2.max)) * 100))}%; background: #38bdf8;"></div>
            </div>
          </div>
        </div>
      </div>
  `;

  if (isWarlock) {
    html += `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: rgba(168, 85, 247, 0.08); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(168, 85, 247, 0.3);">
          <h4 style="color: #c084fc; margin-bottom: 8px;">🧵 Tailoring Progression (Bags & Robe of the Void)</h4>
          <p style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
            • <strong>1–45:</strong> Bolt of Linen Cloth (Linen from Tirisfal/Silverpine)<br>
            • <strong>45–70:</strong> Heavy Linen Gloves & Linen Bag (6-slot bags for self)<br>
            • <strong>70–105:</strong> Woolen Bag (8-slot bags)<br>
            • <strong>105–150:</strong> Silk Bandage & Small Silk Pack (10-slot)<br>
            • <strong>150–200:</strong> Robes of Arcana (Crucial Warlock quest reagent!)<br>
            • <strong>200–250:</strong> Shadoweave Set (+Shadow Spell Damage)<br>
            • <strong>250–300:</strong> Felcloth Set & Pre-Raid BiS <strong>Robe of the Void</strong> (+46 Shadow Dmg, Heal 1200)!
          </p>
        </div>
        <div style="background: rgba(56, 189, 248, 0.08); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(56, 189, 248, 0.3);">
          <h4 style="color: #38bdf8; margin-bottom: 8px;">✨ Enchanting Progression (Lesser & Greater Magic Wands)</h4>
          <p style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
            • <strong>Skill 10 (Lvl 5): Lesser Magic Wand</strong> (11.3 DPS) • 1x Simple Wood, 1x Lesser Magic Essence.<br>
            • <strong>Skill 75 (Lvl 13): Greater Magic Wand</strong> (17.5 DPS) • 1x Simple Wood, 1x Greater Magic Essence.<br>
            • <strong>Zero-Mana Leveling:</strong> In early levels, wand DPS exceeds Shadow Bolt mana efficiency. Disenchant greens to self-craft wands for infinite killing speed!
          </p>
        </div>
      </div>
    `;
  } else {
    html += `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: rgba(245, 158, 11, 0.08); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(245, 158, 11, 0.3);">
          <h4 style="color: #fbbf24; margin-bottom: 8px;">🗡️ Skinning & Leatherworking (Devilsaur Pre-Raid BiS)</h4>
          <p style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
            • <strong>1–75:</strong> Light Leather from Barrens beasts (Plainstriders, raptors, boars).<br>
            • <strong>75–150:</strong> Medium Leather & craft Deviate Scale Belt (Level 18, +5 Agi, +6 Stam).<br>
            • <strong>150–225:</strong> Heavy Leather in Hillsbrad, Arathi, and Ashenvale.<br>
            • <strong>225–300:</strong> Thick & Rugged Leather in Feralas and Un'Goro.<br>
            • <strong>Devilsaur Armor (290–300):</strong> Solo skin Devilsaurs in Un'Goro Crater using Blind and Gouge to craft your Pre-Raid BiS 2-piece set (+2% Hit, +28 AP)!
          </p>
        </div>
        <div style="background: rgba(34, 197, 94, 0.08); padding: 18px; border-radius: var(--radius-md); border: 1px solid rgba(34, 197, 94, 0.3);">
          <h4 style="color: #4ade80; margin-bottom: 8px;">☠️ Poisons & Lockpicking Master Blueprint</h4>
          <p style="font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
            • <strong>Level 20 Poisons Quest:</strong> 'The Shattered Hand' in Sludge Fen. Pickpocket the foreman, open the locked chest, and learn Instant Poison.<br>
            • <strong>Instant Poison (Main & Off-Hand):</strong> Adds 20-30% extra flat damage to every melee swing!<br>
            • <strong>Crippling Poison (Level 20):</strong> 70% movement slow prevents fleeing humanoid runners from pulling extra mobs.<br>
            • <strong>Lockpicking 1–100:</strong> Pick pirate lockboxes inside the hold of the Southsea Pirate ships south of Ratchet.
          </p>
        </div>
      </div>
    `;
  }

  html += `
    <div style="margin-top: 18px; background: rgba(0,0,0,0.25); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid #10b981;">
      <strong>🩹 Mandatory Secondary: First Aid:</strong> Never spend mana or energy healing! Heavy Wool, Silk, and Mageweave Bandages let you bandage immediately after crowd control (Gouge for Rogue, Fear for Warlock).
    </div>
  </div>`;

  container.innerHTML = html;
}

// Horde Racials & Macros View
function renderHordeMacros() {
  const container = document.getElementById("hordeMacrosContainer");
  if (!container) return;

  const isWarlock = activeClass === "warlock";

  let html = `
    <div class="guide-card">
      <h3 class="card-title">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
        Horde Champions Master Guide & 1-Click Essential Macros
      </h3>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 16px;">
        Pair your Undead Forsaken racials with these essential ${isWarlock ? "Warlock" : "Rogue"} macros for optimal combat speed and zero-target loss!
      </p>

      <div class="sidebar-widget" style="margin-bottom: 20px;">
        <h4 style="color: #f87171; margin-bottom: 8px;">💀 Undead (Forsaken) Racial Synergies</h4>
        <div style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.6;">
          • <strong>Will of the Forsaken:</strong> Active. Breaks Charm, Fear, and Sleep and grants 5-second immunity. The king of Classic PvP and PvE!<br>
          • <strong>Cannibalize:</strong> Active. Restores 35% health over 10s by eating humanoid corpses. Perfect synergy with Life Tap or between stealth pulls!<br>
          • <strong>Underwater Breathing:</strong> Passive. 300% lung capacity for underwater questing.<br>
          • <strong>Shadow Resistance:</strong> +10 passive Shadow Resistance.
        </div>
      </div>
  `;

  if (isWarlock) {
    html += `
      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">1. Spam-Safe Auto-Wand (Never Cancels on Re-click)</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Shoot
/cast !Shoot</div>
        <div class="macro-explain">Standard wanding cancels if clicked twice. Adding exclamation point prevents accidentally stopping your wand attack!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">2. Pet Attack + Corruption (One-Click Pull)</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Corruption
/petattack
/cast Corruption</div>
        <div class="macro-explain">Sends your pet immediately into melee while applying instant Corruption on your target!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">3. Panic Voidwalker Sacrifice + Healthstone Bubble</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Sacrifice
/cast Sacrifice
/use Master Healthstone
/use Major Healthstone
/use Greater Healthstone
/use Healthstone</div>
        <div class="macro-explain">Instantly pops your Voidwalker shield for thousands of absorption and uses the highest available Healthstone in your bags!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">4. Mouseover Fear (Emergency Crowd Control)</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Fear
/cast [@mouseover,harm,nodead][harm,nodead] Fear</div>
        <div class="macro-explain">Fears an extra incoming add without having to deselect the monster you are currently drain-tanking!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">5. Dark Pact / Life Tap Mana Battery</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Dark Pact
/cast [pet] Dark Pact; Life Tap</div>
        <div class="macro-explain">If your demon pet is alive, siphons mana from your pet. If your pet is dead, automatically casts Life Tap instead!</div>
      </div>
    `;
  } else {
    html += `
      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">1. Spam-Safe Stealth (Never Cancels on Double Tap)</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Stealth
/cast [nostealth] Stealth</div>
        <div class="macro-explain">Spamming standard stealth cancels it if hit twice. This macro guarantees you only enter stealth and never accidentally break it!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">2. Sinister Strike & Start Attack</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Sinister Strike
/startattack
/cast Sinister Strike</div>
        <div class="macro-explain">Ensures your weapons keep swinging even if you don't have enough Energy for Sinister Strike!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">3. Riposte & Sinister Strike Priority</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Riposte
/cast Riposte
/cast Sinister Strike</div>
        <div class="macro-explain">Presses Riposte if you recently parried (10 energy for 150% dmg + 6s disarm). Otherwise casts Sinister Strike!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">4. Gouge & First Aid Combat Reset</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Gouge
/cast Gouge
/stopattack</div>
        <div class="macro-explain">Incapacitates target for 4 seconds and immediately halts auto-attacks so you don't break the gouge. Step back and use a bandage!</div>
      </div>

      <div class="macro-box">
        <div class="macro-top">
          <span class="macro-title">5. Blade Flurry + Adrenaline Rush Burst Window</span>
          <button class="btn-copy" onclick="copyMacro(this)">Copy Macro</button>
        </div>
        <div class="macro-code">#showtooltip Adrenaline Rush
/cast Blade Flurry
/cast Adrenaline Rush</div>
        <div class="macro-explain">Pops both cooldowns simultaneously to shred packs of 2-3 mobs with 100% increased energy regeneration and 20% attack speed cleave!</div>
      </div>
    `;
  }

  html += `</div>`;
  container.innerHTML = html;
}

// 1-Click Macro Copy Helper
function copyMacro(btn) {
  const box = btn.closest(".macro-box");
  if (!box) return;
  const codeEl = box.querySelector(".macro-code");
  if (!codeEl) return;
  const text = codeEl.textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = "✓ Copied!";
    btn.style.backgroundColor = "#4ade80";
    btn.style.color = "#000";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.backgroundColor = "";
      btn.style.color = "";
    }, 2000);
  });
}
window.copyMacro = copyMacro;

// Professions UI Bridge
function updateSyncedProfessionsUI(professions) {
  if (!professions) return;
  const p1 = professions.primary1 || professions.leatherworking || professions.tailoring || null;
  const p2 = professions.primary2 || professions.skinning || professions.enchanting || null;

  const prof1El = document.getElementById("headerProf1");
  if (prof1El && p1) {
    prof1El.textContent = `${p1.icon || '🛠️'} ${p1.level}`;
    prof1El.title = `${p1.name}: ${p1.level}/${p1.max} (${p1.rank})`;
  }

  const prof2El = document.getElementById("headerProf2");
  if (prof2El && p2) {
    prof2El.textContent = `${p2.icon || '🗡️'} ${p2.level}`;
    prof2El.title = `${p2.name}: ${p2.level}/${p2.max} (${p2.rank})`;
  }
}

// Direct 1-Click Game & Gist Sync Action
async function executeGameSyncFromSite() {
  const btnHeader = document.getElementById("btnHeaderDirectSync");
  if (btnHeader) {
    btnHeader.innerHTML = "⏳ Syncing...";
    btnHeader.style.backgroundColor = "#38bdf8";
    btnHeader.style.color = "#000";
  }

  const feedbackEl = document.getElementById("syncFeedbackMsg");
  if (feedbackEl) {
    feedbackEl.style.display = "block";
    feedbackEl.style.color = "#38bdf8";
    feedbackEl.textContent = "⚡ Syncing live character data from WTF & Cloud...";
  }

  let syncedResult = null;

  // Step 1: Check local companion server first
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("http://127.0.0.1:3888/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const json = await res.json();
      if (json && json.character) syncedResult = json.character;
    }
  } catch (_) {}

  // Step 2: Fallback to GitHub Cloud Gist REST API
  if (!syncedResult) {
    try {
      const res = await fetch(`${GITHUB_GIST_API_URL}?t=${Date.now()}`, {
        headers: { "Accept": "application/vnd.github.v3+json" }
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.files && json.files["synced_character.json"]) {
          syncedResult = JSON.parse(json.files["synced_character.json"].content);
        }
      }
    } catch (_) {}
  }

  if (syncedResult) {
    window.WOW_SYNCED_DATA = syncedResult;
    // Switch or refresh active character
    switchActiveCharacter(activeClass);
    if (feedbackEl) {
      feedbackEl.style.color = "#4ade80";
      feedbackEl.textContent = `✓ Successfully synced! Active: ${activeClass.toUpperCase()} (Lvl ${currentLevel})`;
      setTimeout(() => { feedbackEl.style.display = "none"; }, 4000);
    }
  } else {
    if (feedbackEl) {
      feedbackEl.style.color = "#fbbf24";
      feedbackEl.textContent = "⚠️ Could not reach local sync server. Refreshing from local cache.";
    }
  }

  if (btnHeader) {
    btnHeader.innerHTML = "⚡ Sync";
    btnHeader.style.backgroundColor = "";
    btnHeader.style.color = "";
  }
}
window.executeGameSyncFromSite = executeGameSyncFromSite;

function directSyncHeaderClick() {
  executeGameSyncFromSite();
}
window.directSyncHeaderClick = directSyncHeaderClick;

// Modal Controls
function openSyncModal() {
  const m = document.getElementById("syncAccountModal") || document.getElementById("syncModalOverlay");
  if (m) m.style.display = "flex";
}
window.openSyncModal = openSyncModal;

function closeSyncModal() {
  const m = document.getElementById("syncAccountModal") || document.getElementById("syncModalOverlay");
  if (m) m.style.display = "none";
}
window.closeSyncModal = closeSyncModal;

// Navigation Tab Switcher
function initNavigation() {
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-tab");
      const panel = document.getElementById(targetId);
      if (panel) panel.classList.add("active");
    });
  });
}

function initSlider() {
  const slider = document.getElementById("levelSlider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      setLevel(parseInt(e.target.value, 10));
    });
  }

  const prevBtn = document.getElementById("prevLevelBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => quickStepLevel(-1));
  }

  const nextBtn = document.getElementById("nextLevelBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => quickStepLevel(1));
  }

  document.querySelectorAll(".pill-jump").forEach(pill => {
    pill.addEventListener("click", () => {
      const plvl = parseInt(pill.getAttribute("data-lvl"), 10);
      setLevel(plvl);
    });
  });
}

function initPresetButtons() {
  document.querySelectorAll(".preset-buttons .btn-preset").forEach(btn => {
    btn.addEventListener("click", () => {
      const presetKey = btn.getAttribute("data-preset");
      if (presetKey) renderPaperdoll(presetKey);
    });
  });

  document.querySelectorAll(".btn-adv-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".btn-adv-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter") || "all";
      renderUpgradeAdvisor(currentLevel, filter);
    });
  });
}

// Utility String Helpers
function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// App Initialization
function initApp() {
  initNavigation();
  initSlider();
  initPresetButtons();
  initTooltipEvents();

  // Load active character preference (defaulting to Warlock)
  const savedChar = localStorage.getItem("wow_active_character") || (window.WOW_SYNCED_DATA && window.WOW_SYNCED_DATA.activeCharacter) || "warlock";
  switchActiveCharacter(savedChar);

  // Background check for Cloud Gist updates
  setTimeout(() => {
    executeGameSyncFromSite();
  }, 1000);
}

document.addEventListener("DOMContentLoaded", initApp);

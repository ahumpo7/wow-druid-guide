-- WoW Forever: Complete Horde Druid Leveling Codex (Levels 1-60)
local addonName, addonTable = ...
WoWGuide_Druid = WoWGuide_Druid or {}
if addonTable then addonTable.Druid = WoWGuide_Druid end
_G["WoWGuide_Druid"] = WoWGuide_Druid

WoWGuide_Druid.className = "DRUID"
WoWGuide_Druid.classColor = "FF7D0A"
WoWGuide_Druid.title = "Feral Cat & Bear Leveling"
WoWGuide_Druid.specSummary = "14 Balance / 32 Feral / 5 Restoration"
WoWGuide_Druid.levels = {
  [1] = {
    title = "Awakening in Camp Narache & The Earthmother",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Rise as a Tauren Druid in Red Cloud Mesa. Speak to Chief Hawkwind and Gart Mistrunner (Druid Trainer). Complete 'The Rites of the Earthmother' and 'Shared Burden'. Learn Wrath, Healing Touch, and Mark of the Wild. Kill Plainstriders around the camp.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Wrath (Rank 1)", "Healing Touch (Rank 1)", "Mark of the Wild (Rank 1)"},
    rotation = {"Cast Wrath at range to pull", "Melee with your starter 2H club", "Cast Healing Touch when HP drops below 50%"},
    dungeonGear = {
    }
  },
  [2] = {
    title = "Moonfire & Plainstrider Feathers",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Visit Gart Mistrunner to learn Moonfire (Rank 1). Pick up 'A Humble Task' and 'Rites of the Earthmother part 2'. Gather Plainstrider feathers and Dirt-stained maps. Kill Mountain Cougar cubs.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Wrath -> Moonfire -> Melee until dead"},
    dungeonGear = {
    }
  },
  [3] = {
    title = "Bristleback Quilboar Incursion",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Pick up 'Break the Keystone'. Head to the Bristleback Quilboar camp in southwestern Red Cloud Mesa. Kill Bristleback Shamans and Battleboars. Loot the Bristleback Keys to free the captured earth spirit.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Wrath -> Moonfire -> Melee with club"},
    dungeonGear = {
    }
  },
  [4] = {
    title = "Rejuvenation & Bristleback Leaders",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Return to Gart Mistrunner to train Rejuvenation (Rank 1). Head into the Bristleback den and eliminate Chief Sharptusk Battleboar. Apply Rejuvenation to keep healing while you melee.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Moonfire (Rank 1)", "Rejuvenation (Rank 1)"},
    rotation = {"Wrath -> Moonfire -> Cast Rejuvenation on yourself -> Melee"},
    dungeonGear = {
    }
  },
  [5] = {
    title = "Rites of the Earthmother Conclusion",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Deliver the dirt-stained map to Chief Hawkwind. Ascend to the sun stone in the hills to complete the final rite of Camp Narache. Gather your gear and prepare to leave the mesa for Bloodhoof Village.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Wrath -> Moonfire -> Rejuvenation -> Melee"},
    dungeonGear = {
    }
  },
  [6] = {
    title = "Bloodhoof Village & Thorns Unleashed",
    zone = "Mulgore (Camp Narache)",
    zoneRange = "1-6",
    hubs = "Camp Narache",
    zoneInstructions = "Journey north to Bloodhoof Village. Meet Baine Bloodhoof and Gahn Commonpath (Druid Trainer). Train Thorns (Rank 1) and Moonfire (Rank 2). Cast Thorns on yourself for free passive damage whenever mobs attack you!",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Thorns (Rank 1)", "Wrath (Rank 2)"},
    rotation = {"Keep Thorns and Mark of the Wild active", "Wrath -> Moonfire -> Melee down"},
    dungeonGear = {
    }
  },
  [7] = {
    title = "Mazzranache & Swoop Hunting",
    zone = "Mulgore (Bloodhoof Village)",
    zoneRange = "6-10",
    hubs = "Bloodhoof Village, Thunder Bluff",
    zoneInstructions = "Pick up 'Mazzranache', 'Swoop Hunting', and 'The Venture Co.' from Bloodhoof Village. Hunt Swoops for Swoop Gizzards and Plainstriders for Prairie Wolf Paws. Keep Thorns up at all times.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Wrath -> Moonfire -> Rejuvenation -> Staff melee"},
    dungeonGear = {
    }
  },
  [8] = {
    title = "Entangling Roots & Wrath Rank 2",
    zone = "Mulgore (Bloodhoof Village)",
    zoneRange = "6-10",
    hubs = "Bloodhoof Village, Thunder Bluff",
    zoneInstructions = "Train Entangling Roots (Rank 1) and Wrath (Rank 2). Entangling Roots locks melee mobs in place for up to 12 seconds! Pick up 'The Ravaged Caravan' and hunt Harpies in the northern bluffs.",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Entangling Roots (Rank 1)", "Healing Touch (Rank 2)"},
    rotation = {"Entangling Roots to freeze mob -> Cast 2x Wrath safely -> Moonfire -> Melee"},
    dungeonGear = {
    }
  },
  [9] = {
    title = "Venture Co. Mine & Pre-Bear Preparation",
    zone = "Mulgore (Bloodhoof Village)",
    zoneRange = "6-10",
    hubs = "Bloodhoof Village, Thunder Bluff",
    zoneInstructions = "Clear the Venture Co. mine in southeastern Mulgore. Slay Supervisor Fizsprocket and loot his clipboard. Sell grays in Bloodhoof Village and save at least 15 silver for your Level 10 Bear Form training!",
    talent = nil,
    talentNote = "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Entangling Roots -> Wrath -> Moonfire -> Rejuvenation -> Finish with staff"},
    dungeonGear = {
    }
  },
  [10] = {
    title = "BEAR FORM UNLOCKED & MOONGLADE TELEPORT",
    zone = "Mulgore (Bloodhoof Village)",
    zoneRange = "6-10",
    hubs = "Bloodhoof Village, Thunder Bluff",
    zoneInstructions = "MAJOR MILESTONE! Visit Turak Runetotem in Thunder Bluff (Elder Rise) to accept 'Heeding the Call'. Use Teleport: Moonglade to visit the Great Bear Spirit in Nighthaven! Return to Bloodhoof Village, summon Lunaclaw in the cave with Cenarion Dust, defeat him, and learn BEAR FORM, MAUL, and DEMORALIZING ROAR!",
    talent = { name = "Ferocity", rank = "1/5", tree = "feral", why = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5." },
    talentNote = "Ferocity (1/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Bear Form (Quest)", "Maul (Rank 1)", "Demoralizing Roar (Rank 1)", "Growl (Rank 1)", "Teleport: Moonglade", "Moonfire (Rank 2)", "Rejuvenation (Rank 2)"},
    rotation = {"Shift into Bear Form", "Enrage for instant Rage", "Demoralizing Roar to reduce mob damage", "Spam Maul to shred armor"},
    dungeonGear = {
    }
  },
  [11] = {
    title = "Entering The Barrens & Crossroad Routes",
    zone = "The Barrens (Crossroads)",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Leave Mulgore and enter The Barrens. Run east to The Crossroads. Grab the flight path immediately! Pick up 'Disrupt the Attacks', 'The Forgotten Pools', and 'Plainstrider Menace'. Level up in Bear Form with 180% increased armor!",
    talent = { name = "Ferocity", rank = "2/5", tree = "feral", why = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5." },
    talentNote = "Ferocity (2/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Bear Form -> Enrage -> Demoralizing Roar -> Maul on cooldown"},
    dungeonGear = {
    }
  },
  [12] = {
    title = "Bash & Regrowth at The Crossroads",
    zone = "The Barrens (Crossroads)",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Visit the Druid trainer in Camp Taurajo or Thunder Bluff. Train Bash (Rank 1) - an instant 2-second melee stun! Train Regrowth (Rank 1) and Maul (Rank 2). Bash lets you stun mobs, shift to caster, and heal yourself!",
    talent = { name = "Ferocity", rank = "3/5", tree = "feral", why = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5." },
    talentNote = "Ferocity (3/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Regrowth (Rank 1)", "Enrage (Rank 1)", "Healing Touch (Rank 3)"},
    rotation = {"Bear Form -> Maul -> When HP drops, Bash to stun mob -> Shift out -> Regrowth -> Shift back to Bear!"},
    dungeonGear = {
    }
  },
  [13] = {
    title = "The Forgotten Pools & Fungal Spores",
    zone = "The Barrens (Crossroads)",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Explore The Forgotten Pools northwest of Crossroads. Dive down to inspect the bubbling fissure. Slay Oasis Snapjaws and gather Kolkar Centaur boots.",
    talent = { name = "Ferocity", rank = "4/5", tree = "feral", why = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5." },
    talentNote = "Ferocity (4/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Bear Form -> Demoralizing Roar -> Maul spam"},
    dungeonGear = {
    }
  },
  [14] = {
    title = "Demoralizing Roar Rank 2 & Centaur Camps",
    zone = "The Barrens (Crossroads)",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Train Demoralizing Roar (Rank 2). Head south to the Stagnant Oasis. Clear Kolkar Centaurs and gather the glowing fungal spores for apothecary Zamah.",
    talent = { name = "Ferocity", rank = "5/5", tree = "feral", why = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5." },
    talentNote = "Ferocity (5/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Bash (Rank 1)", "Cure Poison (Quest)", "Demoralizing Roar (Rank 2)", "Wrath (Rank 3)"},
    rotation = {"Bear Form -> Enrage -> Demoralizing Roar -> Maul"},
    dungeonGear = {
    }
  },
  [15] = {
    title = "Wailing Caverns Pre-Quests & Camp Taurajo",
    zone = "The Barrens (Crossroads)",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Pick up 'Smart Drinks' in Ratchet and 'Leaders of the Fang' in Thunder Bluff. Run south to Camp Taurajo and grab the flight path! Clear Razormane Quilboars along the road.",
    talent = { name = "Feral Aggression", rank = "1/5", tree = "feral", why = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%." },
    talentNote = "Feral Aggression (1/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Bear Form -> Demoralizing Roar -> Maul. Use Bash for stuns."},
    dungeonGear = {
    }
  },
  [16] = {
    title = "AQUATIC FORM UNLOCKED & TRIAL OF THE SEA LION",
    zone = "The Barrens / Wailing Caverns",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo, Ratchet",
    zoneInstructions = "MAJOR CLASS QUEST! Accept 'Trial of the Sea Lion' from Turak Runetotem in Thunder Bluff. Teleport to Moonglade, then dive into the waters of Silverpine and the Barrens coast to recover the two halves of the Sea Lion Pendant! Learn Aquatic Form for 50% swim speed and infinite underwater breathing!",
    talent = { name = "Feral Aggression", rank = "2/5", tree = "feral", why = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%." },
    talentNote = "Feral Aggression (2/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Aquatic Form (Quest)", "Hibernate (Rank 1)", "Swipe (Rank 1)", "Moonfire (Rank 3)", "Rejuvenation (Rank 3)"},
    rotation = {"Bear Form -> Demoralizing Roar -> Maul. Aquatic form for all water quests!"},
    dungeonGear = {
    }
  },
  [17] = {
    title = "Wailing Caverns Dungeon Run",
    zone = "The Barrens / Wailing Caverns",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo, Ratchet",
    zoneInstructions = "Assemble a group for Wailing Caverns. You can tank as Bear or heal as Caster! Defeat Lord Cobrahn, Lord Pythas, and Mutanus the Devourer. Aim for Crescent Staff and Kodo Hunter's Leggings!",
    talent = { name = "Feral Aggression", rank = "3/5", tree = "feral", why = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%." },
    talentNote = "Feral Aggression (3/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Tanking: Bear Form -> Growl -> Demoralizing Roar -> Swipe & Maul"},
    dungeonGear = {
      { name = "Crescent Staff", quality = "rare", source = "Wailing Caverns Quest: Leaders of the Fang", stats = "+7 Spirit, +7 Intellect, +7 Stamina", tip = "Best early leveling staff in the game!" },
      { name = "Kodo Hunter's Leggings", quality = "uncommon", source = "Mulgore Quest", stats = "+5 Stamina, +4 Strength", tip = "Great feral leather legs." },
    }
  },
  [18] = {
    title = "Faerie Fire & Camp Taurajo Outpost",
    zone = "The Barrens / Wailing Caverns",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo, Ratchet",
    zoneInstructions = "Train Faerie Fire (Rank 1). Cast Faerie Fire at 30 yards to pull mobs, reduce their armor, and prevent stealth! Hunt Bristleback Geomancers in southern Barrens.",
    talent = { name = "Feral Aggression", rank = "4/5", tree = "feral", why = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%." },
    talentNote = "Feral Aggression (4/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {"Faerie Fire (Rank 1)", "Maul (Rank 2)", "Regrowth (Rank 2)", "Healing Touch (Rank 4)"},
    rotation = {"Cast Faerie Fire at 30 yards -> Shift to Bear Form -> Demoralizing Roar -> Maul"},
    dungeonGear = {
    }
  },
  [19] = {
    title = "Bael'dun Dwarf Excavation Clearing",
    zone = "The Barrens / Wailing Caverns",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo, Ratchet",
    zoneInstructions = "Clear Bael'dun Digsite in the southwestern Barrens. Defeat Prospector Khazgorm and loot his digging tools. Save up silver for Level 20 Cat Form!",
    talent = { name = "Feral Aggression", rank = "5/5", tree = "feral", why = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%." },
    talentNote = "Feral Aggression (5/5) - FERAL Tree.",
    gearTip = "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    trainerTrain = {},
    rotation = {"Faerie Fire -> Bear Form -> Enrage -> Maul. Bash + Regrowth for healing."},
    dungeonGear = {
    }
  },
  [20] = {
    title = "CAT FORM UNLOCKED & 30% FERAL SWIFTNESS",
    zone = "The Barrens / Wailing Caverns",
    zoneRange = "10-20",
    hubs = "The Crossroads, Camp Taurajo, Ratchet",
    zoneInstructions = "THE BIGGEST DRUID MILESTONE! Visit your trainer to unlock CAT FORM, CLAW, RAKE, and PROWL! Invest your Level 20 & 21 talent points into Feral Swiftness for +30% movement speed outdoors! You are now a stealthy, high-DPS solo predator with zero mana downtime!",
    talent = { name = "Feral Swiftness", rank = "1/2", tree = "feral", why = "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!" },
    talentNote = "Feral Swiftness (1/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Cat Form (Quest)", "Claw (Rank 1)", "Prowl (Rank 1)", "Rebirth (Rank 1)", "Rip (Rank 1)", "Mark of the Wild (Rank 2)", "Wrath (Rank 4)"},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [21] = {
    title = "Ashenvale & Stonetalon Mountains Questing & Exploration",
    zone = "Ashenvale & Stonetalon Mountains",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat, Splintertree Post",
    zoneInstructions = "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Feral Swiftness", rank = "2/2", tree = "feral", why = "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!" },
    talentNote = "Feral Swiftness (2/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [22] = {
    title = "Ashenvale & Stonetalon Mountains Questing & Exploration",
    zone = "Ashenvale & Stonetalon Mountains",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat, Splintertree Post",
    zoneInstructions = "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Sharpened Claws", rank = "1/3", tree = "feral", why = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%." },
    talentNote = "Sharpened Claws (1/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Rake (Rank 1)", "Moonfire (Rank 4)", "Rejuvenation (Rank 4)"},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [23] = {
    title = "Ashenvale & Stonetalon Mountains Questing & Exploration",
    zone = "Ashenvale & Stonetalon Mountains",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat, Splintertree Post",
    zoneInstructions = "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Sharpened Claws", rank = "2/3", tree = "feral", why = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%." },
    talentNote = "Sharpened Claws (2/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [24] = {
    title = "Ashenvale & Stonetalon Mountains Questing & Exploration",
    zone = "Ashenvale & Stonetalon Mountains",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat, Splintertree Post",
    zoneInstructions = "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Sharpened Claws", rank = "3/3", tree = "feral", why = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%." },
    talentNote = "Sharpened Claws (3/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Tiger's Fury (Rank 1)", "Bash (Rank 2)", "Demoralizing Roar (Rank 3)", "Swipe (Rank 2)", "Regrowth (Rank 3)", "Healing Touch (Rank 5)"},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [25] = {
    title = "Ashenvale & Stonetalon Mountains Questing & Exploration",
    zone = "Ashenvale & Stonetalon Mountains",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat, Splintertree Post",
    zoneInstructions = "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Predatory Strikes", rank = "1/3", tree = "feral", why = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level." },
    talentNote = "Predatory Strikes (1/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [26] = {
    title = "Thousand Needles & Southern Barrens Questing & Exploration",
    zone = "Thousand Needles & Southern Barrens",
    zoneRange = "25-30",
    hubs = "Freewind Post, Camp Taurajo",
    zoneInstructions = "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Predatory Strikes", rank = "2/3", tree = "feral", why = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level." },
    talentNote = "Predatory Strikes (2/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Abolish Poison", "Maul (Rank 3)", "Rip (Rank 2)", "Hibernate (Rank 2)"},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [27] = {
    title = "Thousand Needles & Southern Barrens Questing & Exploration",
    zone = "Thousand Needles & Southern Barrens",
    zoneRange = "25-30",
    hubs = "Freewind Post, Camp Taurajo",
    zoneInstructions = "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Predatory Strikes", rank = "3/3", tree = "feral", why = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level." },
    talentNote = "Predatory Strikes (3/3) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [28] = {
    title = "Thousand Needles & Southern Barrens Questing & Exploration",
    zone = "Thousand Needles & Southern Barrens",
    zoneRange = "25-30",
    hubs = "Freewind Post, Camp Taurajo",
    zoneInstructions = "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Blood Frenzy", rank = "1/2", tree = "feral", why = "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point." },
    talentNote = "Blood Frenzy (1/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Claw (Rank 2)", "Cower (Rank 1)", "Rake (Rank 2)", "Moonfire (Rank 5)", "Rejuvenation (Rank 5)"},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
    }
  },
  [29] = {
    title = "Thousand Needles & Southern Barrens Questing & Exploration",
    zone = "Thousand Needles & Southern Barrens",
    zoneRange = "25-30",
    hubs = "Freewind Post, Camp Taurajo",
    zoneInstructions = "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Blood Frenzy", rank = "2/2", tree = "feral", why = "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point." },
    talentNote = "Blood Frenzy (2/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Claw + Rake DoT (Cat attacks scale directly with slow high-DPS 2H staves/maces in WoW Forever!)", "Spend baseline Omen of Clarity (Clearcasting) procs on free 0-energy Claw/Shred or Rip!", "Finish with Rip at 4-5 Combo Points -> Shift out to Rejuvenation/Healing Touch if needed"},
    dungeonGear = {
      { name = "Manual Crowd Pummeler", quality = "rare", source = "Gnomeregan - Crowd Pummeler 9-60", stats = "+16 Strength, +5 Agility, +50% Attack Speed On-Use!", tip = "Legendary feral weapon! Keep the on-use for bosses!" },
    }
  },
  [30] = {
    title = "Thousand Needles & Southern Barrens Questing & Exploration",
    zone = "Thousand Needles & Southern Barrens",
    zoneRange = "25-30",
    hubs = "Freewind Post, Camp Taurajo",
    zoneInstructions = "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Faerie Fire (Feral)", rank = "1/1", tree = "feral", why = "Allows casting Faerie Fire in Cat and Bear Form! Reduces enemy armor and prevents stealth with ZERO mana cost!" },
    talentNote = "Faerie Fire (Feral) (1/1) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Travel Form (40% Speed!)", "Shred (Rank 1)", "Faerie Fire (Rank 2)", "Mark of the Wild (Rank 3)", "Healing Touch (Rank 6)"},
    rotation = {"Prowl -> Claw + Faerie Fire (Feral) for zero-mana armor reduction", "Apply Rake DoT -> spend baseline Omen of Clarity Clearcasting procs on free Shred/Claw!", "Rip finisher at 4-5 Combo Points -> Travel Form between quest hubs (+40% speed)"},
    dungeonGear = {
    }
  },
  [31] = {
    title = "Thousand Needles (Shimmering Flats) Questing & Exploration",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway, Freewind Post",
    zoneInstructions = "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Savage Fury", rank = "1/2", tree = "feral", why = "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%." },
    talentNote = "Savage Fury (1/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Claw + Faerie Fire (Feral) for zero-mana armor reduction", "Apply Rake DoT -> spend baseline Omen of Clarity Clearcasting procs on free Shred/Claw!", "Rip finisher at 4-5 Combo Points -> Travel Form between quest hubs (+40% speed)"},
    dungeonGear = {
    }
  },
  [32] = {
    title = "Thousand Needles (Shimmering Flats) Questing & Exploration",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway, Freewind Post",
    zoneInstructions = "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Savage Fury", rank = "2/2", tree = "feral", why = "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%." },
    talentNote = "Savage Fury (2/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Ferocious Bite (Rank 1)", "Swipe (Rank 3)", "Regrowth (Rank 4)", "Wrath (Rank 5)"},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [33] = {
    title = "Thousand Needles (Shimmering Flats) Questing & Exploration",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway, Freewind Post",
    zoneInstructions = "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Primal Fury", rank = "1/2", tree = "feral", why = "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form." },
    talentNote = "Primal Fury (1/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [34] = {
    title = "Thousand Needles (Shimmering Flats) Questing & Exploration",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway, Freewind Post",
    zoneInstructions = "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Primal Fury", rank = "2/2", tree = "feral", why = "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form." },
    talentNote = "Primal Fury (2/2) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Ravage (Rank 1)", "Maul (Rank 4)", "Demoralizing Roar (Rank 4)", "Rip (Rank 3)"},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [35] = {
    title = "Thousand Needles (Shimmering Flats) Questing & Exploration",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway, Freewind Post",
    zoneInstructions = "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Heart of the Wild", rank = "1/5", tree = "feral", why = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever)." },
    talentNote = "Heart of the Wild (1/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [36] = {
    title = "Desolace & Stranglethorn Vale Questing & Exploration",
    zone = "Desolace & Stranglethorn Vale",
    zoneRange = "35-40",
    hubs = "Shadowprey Village, Grom'gol Base Camp",
    zoneInstructions = "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Heart of the Wild", rank = "2/5", tree = "feral", why = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever)." },
    talentNote = "Heart of the Wild (2/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Pounce (Rank 1)", "Rake (Rank 3)", "Cower (Rank 2)", "Moonfire (Rank 6)", "Rejuvenation (Rank 6)"},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [37] = {
    title = "Desolace & Stranglethorn Vale Questing & Exploration",
    zone = "Desolace & Stranglethorn Vale",
    zoneRange = "35-40",
    hubs = "Shadowprey Village, Grom'gol Base Camp",
    zoneInstructions = "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Heart of the Wild", rank = "3/5", tree = "feral", why = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever)." },
    talentNote = "Heart of the Wild (3/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [38] = {
    title = "Desolace & Stranglethorn Vale Questing & Exploration",
    zone = "Desolace & Stranglethorn Vale",
    zoneRange = "35-40",
    hubs = "Shadowprey Village, Grom'gol Base Camp",
    zoneInstructions = "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Heart of the Wild", rank = "4/5", tree = "feral", why = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever)." },
    talentNote = "Heart of the Wild (4/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Claw (Rank 3)", "Tiger's Fury (Rank 2)", "Bash (Rank 3)", "Healing Touch (Rank 7)"},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [39] = {
    title = "Desolace & Stranglethorn Vale Questing & Exploration",
    zone = "Desolace & Stranglethorn Vale",
    zoneRange = "35-40",
    hubs = "Shadowprey Village, Grom'gol Base Camp",
    zoneInstructions = "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Heart of the Wild", rank = "5/5", tree = "feral", why = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever)." },
    talentNote = "Heart of the Wild (5/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Open with Ravage (from behind) + Faerie Fire (Feral)", "Apply Rake -> Shred (behind) or Claw to 4-5 Combo Points (use Omen of Clarity Clearcasting on Shred!)", "Finish with Ferocious Bite (or Rip on high-HP mobs)"},
    dungeonGear = {
    }
  },
  [40] = {
    title = "Desolace & Stranglethorn Vale Questing & Exploration",
    zone = "Desolace & Stranglethorn Vale",
    zoneRange = "35-40",
    hubs = "Shadowprey Village, Grom'gol Base Camp",
    zoneInstructions = "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Leader of the Pack", rank = "1/1", tree = "feral", why = "WoW Forever Feral Capstone: Increases physical critical strike chance by 3% for you and your raid/party while in Cat or Bear Form." },
    talentNote = "Leader of the Pack (1/1) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Dire Bear Form", "Ferocious Bite (Rank 2)", "Regrowth (Rank 5)", "Rebirth (Rank 2)", "Mount Riding"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [41] = {
    title = "Tanaris & Feralas Questing & Exploration",
    zone = "Tanaris & Feralas",
    zoneRange = "40-45",
    hubs = "Gadgetzan, Camp Mojache",
    zoneInstructions = "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Furor", rank = "1/5", tree = "restoration", why = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!" },
    talentNote = "Furor (1/5) - RESTORATION Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [42] = {
    title = "Tanaris & Feralas Questing & Exploration",
    zone = "Tanaris & Feralas",
    zoneRange = "40-45",
    hubs = "Gadgetzan, Camp Mojache",
    zoneInstructions = "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Furor", rank = "2/5", tree = "restoration", why = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!" },
    talentNote = "Furor (2/5) - RESTORATION Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Maul (Rank 5)", "Shred (Rank 2)", "Rip (Rank 4)", "Moonfire (Rank 7)", "Rejuvenation (Rank 7)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [43] = {
    title = "Tanaris & Feralas Questing & Exploration",
    zone = "Tanaris & Feralas",
    zoneRange = "40-45",
    hubs = "Gadgetzan, Camp Mojache",
    zoneInstructions = "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Furor", rank = "3/5", tree = "restoration", why = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!" },
    talentNote = "Furor (3/5) - RESTORATION Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [44] = {
    title = "Tanaris & Feralas Questing & Exploration",
    zone = "Tanaris & Feralas",
    zoneRange = "40-45",
    hubs = "Gadgetzan, Camp Mojache",
    zoneInstructions = "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Furor", rank = "4/5", tree = "restoration", why = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!" },
    talentNote = "Furor (4/5) - RESTORATION Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Barkskin", "Rake (Rank 4)", "Swipe (Rank 4)", "Demoralizing Roar (Rank 5)", "Healing Touch (Rank 8)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [45] = {
    title = "Tanaris & Feralas Questing & Exploration",
    zone = "Tanaris & Feralas",
    zoneRange = "40-45",
    hubs = "Gadgetzan, Camp Mojache",
    zoneInstructions = "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Furor", rank = "5/5", tree = "restoration", why = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!" },
    talentNote = "Furor (5/5) - RESTORATION Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
      { name = "Resurgence Rod", quality = "rare", source = "Maraudon Quest: Corruption of Earth and Seed", stats = "+15 Stamina, +15 Intellect, +15 Spirit", tip = "Incredible all-around staff." },
    }
  },
  [46] = {
    title = "The Hinterlands & Feralas Questing & Exploration",
    zone = "The Hinterlands & Feralas",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Camp Mojache",
    zoneInstructions = "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Nature's Grasp", rank = "1/1", tree = "balance", why = "While active, any enemy striking you has a 35% chance to be afflicted by Entangling Roots. Emergency peel tool!" },
    talentNote = "Nature's Grasp (1/1) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Ravage (Rank 2)", "Cower (Rank 3)", "Regrowth (Rank 6)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [47] = {
    title = "The Hinterlands & Feralas Questing & Exploration",
    zone = "The Hinterlands & Feralas",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Camp Mojache",
    zoneInstructions = "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Improved Nature's Grasp", rank = "1/4", tree = "balance", why = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%." },
    talentNote = "Improved Nature's Grasp (1/4) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [48] = {
    title = "The Hinterlands & Feralas Questing & Exploration",
    zone = "The Hinterlands & Feralas",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Camp Mojache",
    zoneInstructions = "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Improved Nature's Grasp", rank = "2/4", tree = "balance", why = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%." },
    talentNote = "Improved Nature's Grasp (2/4) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Claw (Rank 4)", "Ferocious Bite (Rank 3)", "Tiger's Fury (Rank 3)", "Moonfire (Rank 8)", "Rejuvenation (Rank 8)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [49] = {
    title = "The Hinterlands & Feralas Questing & Exploration",
    zone = "The Hinterlands & Feralas",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Camp Mojache",
    zoneInstructions = "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Improved Nature's Grasp", rank = "3/4", tree = "balance", why = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%." },
    talentNote = "Improved Nature's Grasp (3/4) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [50] = {
    title = "The Hinterlands & Feralas Questing & Exploration",
    zone = "The Hinterlands & Feralas",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Camp Mojache",
    zoneInstructions = "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Improved Nature's Grasp", rank = "4/4", tree = "balance", why = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%." },
    talentNote = "Improved Nature's Grasp (4/4) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Maul (Rank 6)", "Shred (Rank 3)", "Rip (Rank 5)", "Healing Touch (Rank 9)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [51] = {
    title = "Un'Goro Crater & Felwood Questing & Exploration",
    zone = "Un'Goro Crater & Felwood",
    zoneRange = "50-55",
    hubs = "Marshal's Refuge, Bloodvenom Post",
    zoneInstructions = "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Weapons", rank = "1/5", tree = "balance", why = "Increases the damage you deal with physical attacks in all forms by 2%-10%!" },
    talentNote = "Natural Weapons (1/5) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [52] = {
    title = "Un'Goro Crater & Felwood Questing & Exploration",
    zone = "Un'Goro Crater & Felwood",
    zoneRange = "50-55",
    hubs = "Marshal's Refuge, Bloodvenom Post",
    zoneInstructions = "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Weapons", rank = "2/5", tree = "balance", why = "Increases the damage you deal with physical attacks in all forms by 2%-10%!" },
    talentNote = "Natural Weapons (2/5) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Rake (Rank 5)", "Bash (Rank 4)", "Regrowth (Rank 7)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [53] = {
    title = "Un'Goro Crater & Felwood Questing & Exploration",
    zone = "Un'Goro Crater & Felwood",
    zoneRange = "50-55",
    hubs = "Marshal's Refuge, Bloodvenom Post",
    zoneInstructions = "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Weapons", rank = "3/5", tree = "balance", why = "Increases the damage you deal with physical attacks in all forms by 2%-10%!" },
    talentNote = "Natural Weapons (3/5) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [54] = {
    title = "Un'Goro Crater & Felwood Questing & Exploration",
    zone = "Un'Goro Crater & Felwood",
    zoneRange = "50-55",
    hubs = "Marshal's Refuge, Bloodvenom Post",
    zoneInstructions = "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Weapons", rank = "4/5", tree = "balance", why = "Increases the damage you deal with physical attacks in all forms by 2%-10%!" },
    talentNote = "Natural Weapons (4/5) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Demoralizing Roar (Rank 6)", "Swipe (Rank 5)", "Moonfire (Rank 9)", "Rejuvenation (Rank 9)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [55] = {
    title = "Un'Goro Crater & Felwood Questing & Exploration",
    zone = "Un'Goro Crater & Felwood",
    zoneRange = "50-55",
    hubs = "Marshal's Refuge, Bloodvenom Post",
    zoneInstructions = "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Weapons", rank = "5/5", tree = "balance", why = "Increases the damage you deal with physical attacks in all forms by 2%-10%!" },
    talentNote = "Natural Weapons (5/5) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [56] = {
    title = "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    zone = "Winterspring & Western/Eastern Plaguelands",
    zoneRange = "55-60",
    hubs = "Everlook, Brill, Light's Hope Chapel",
    zoneInstructions = "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Shapeshifter", rank = "1/3", tree = "balance", why = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting." },
    talentNote = "Natural Shapeshifter (1/3) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Ferocious Bite (Rank 4)", "Ravage (Rank 3)", "Cower (Rank 4)", "Healing Touch (Rank 10)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [57] = {
    title = "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    zone = "Winterspring & Western/Eastern Plaguelands",
    zoneRange = "55-60",
    hubs = "Everlook, Brill, Light's Hope Chapel",
    zoneInstructions = "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Shapeshifter", rank = "2/3", tree = "balance", why = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting." },
    talentNote = "Natural Shapeshifter (2/3) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [58] = {
    title = "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    zone = "Winterspring & Western/Eastern Plaguelands",
    zoneRange = "55-60",
    hubs = "Everlook, Brill, Light's Hope Chapel",
    zoneInstructions = "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Natural Shapeshifter", rank = "3/3", tree = "balance", why = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting." },
    talentNote = "Natural Shapeshifter (3/3) - BALANCE Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Claw (Rank 5)", "Shred (Rank 4)", "Maul (Rank 7)", "Rip (Rank 6)", "Regrowth (Rank 8)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [59] = {
    title = "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    zone = "Winterspring & Western/Eastern Plaguelands",
    zoneRange = "55-60",
    hubs = "Everlook, Brill, Light's Hope Chapel",
    zoneInstructions = "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Thick Hide", rank = "1/5", tree = "feral", why = "Increases your Armor contribution from cloth and leather items by 2%-10%." },
    talentNote = "Thick Hide (1/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
  [60] = {
    title = "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    zone = "Winterspring & Western/Eastern Plaguelands",
    zoneRange = "55-60",
    hubs = "Everlook, Brill, Light's Hope Chapel",
    zoneInstructions = "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    talent = { name = "Thick Hide", rank = "2/5", tree = "feral", why = "Increases your Armor contribution from cloth and leather items by 2%-10%." },
    talentNote = "Thick Hide (2/5) - FERAL Tree.",
    gearTip = "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    trainerTrain = {"Ferocious Bite (Rank 5)", "Rake (Rank 6)", "Rebirth (Rank 3)", "Mark of the Wild (Rank 7)", "Moonfire (Rank 10)", "Rejuvenation (Rank 10)", "Healing Touch (Rank 11)"},
    rotation = {"Prowl -> Ravage + Faerie Fire (Feral) (raid-wide +3% crit from Leader of the Pack!)", "Rake -> Shred (on Clearcasting procs) / Claw -> Ferocious Bite", "Convert spare mana into +40 Energy with Shifting Power / Furor shifts for nonstop zero-downtime pulls!"},
    dungeonGear = {
    }
  },
}

WoWGuide_Druid.talentOrder = {
  [10] = { id = "ferocity", name = "Ferocity", desc = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5.", tree = "feral" },
  [11] = { id = "ferocity", name = "Ferocity", desc = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5.", tree = "feral" },
  [12] = { id = "ferocity", name = "Ferocity", desc = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5.", tree = "feral" },
  [13] = { id = "ferocity", name = "Ferocity", desc = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5.", tree = "feral" },
  [14] = { id = "ferocity", name = "Ferocity", desc = "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5.", tree = "feral" },
  [15] = { id = "feral_aggression", name = "Feral Aggression", desc = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%.", tree = "feral" },
  [16] = { id = "feral_aggression", name = "Feral Aggression", desc = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%.", tree = "feral" },
  [17] = { id = "feral_aggression", name = "Feral Aggression", desc = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%.", tree = "feral" },
  [18] = { id = "feral_aggression", name = "Feral Aggression", desc = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%.", tree = "feral" },
  [19] = { id = "feral_aggression", name = "Feral Aggression", desc = "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%.", tree = "feral" },
  [20] = { id = "feral_swiftness", name = "Feral Swiftness", desc = "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!", tree = "feral" },
  [21] = { id = "feral_swiftness", name = "Feral Swiftness", desc = "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!", tree = "feral" },
  [22] = { id = "sharpened_claws", name = "Sharpened Claws", desc = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%.", tree = "feral" },
  [23] = { id = "sharpened_claws", name = "Sharpened Claws", desc = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%.", tree = "feral" },
  [24] = { id = "sharpened_claws", name = "Sharpened Claws", desc = "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%.", tree = "feral" },
  [25] = { id = "predatory_strikes", name = "Predatory Strikes", desc = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level.", tree = "feral" },
  [26] = { id = "predatory_strikes", name = "Predatory Strikes", desc = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level.", tree = "feral" },
  [27] = { id = "predatory_strikes", name = "Predatory Strikes", desc = "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level.", tree = "feral" },
  [28] = { id = "blood_frenzy", name = "Blood Frenzy", desc = "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point.", tree = "feral" },
  [29] = { id = "blood_frenzy", name = "Blood Frenzy", desc = "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point.", tree = "feral" },
  [30] = { id = "faerie_fire_feral", name = "Faerie Fire (Feral)", desc = "Allows casting Faerie Fire in Cat and Bear Form! Reduces enemy armor and prevents stealth with ZERO mana cost!", tree = "feral" },
  [31] = { id = "savage_fury", name = "Savage Fury", desc = "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%.", tree = "feral" },
  [32] = { id = "savage_fury", name = "Savage Fury", desc = "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%.", tree = "feral" },
  [33] = { id = "primal_fury", name = "Primal Fury", desc = "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form.", tree = "feral" },
  [34] = { id = "primal_fury", name = "Primal Fury", desc = "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form.", tree = "feral" },
  [35] = { id = "heart_of_the_wild", name = "Heart of the Wild", desc = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever).", tree = "feral" },
  [36] = { id = "heart_of_the_wild", name = "Heart of the Wild", desc = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever).", tree = "feral" },
  [37] = { id = "heart_of_the_wild", name = "Heart of the Wild", desc = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever).", tree = "feral" },
  [38] = { id = "heart_of_the_wild", name = "Heart of the Wild", desc = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever).", tree = "feral" },
  [39] = { id = "heart_of_the_wild", name = "Heart of the Wild", desc = "WoW Forever: Increases Intellect by 4%-20%, Bear Form Stamina by 4%-20%, and Cat Form Strength by 2%-10% (scales in WoW Forever).", tree = "feral" },
  [40] = { id = "leader_of_the_pack", name = "Leader of the Pack", desc = "WoW Forever Feral Capstone: Increases physical critical strike chance by 3% for you and your raid/party while in Cat or Bear Form.", tree = "feral" },
  [41] = { id = "furor", name = "Furor", desc = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!", tree = "restoration" },
  [42] = { id = "furor", name = "Furor", desc = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!", tree = "restoration" },
  [43] = { id = "furor", name = "Furor", desc = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!", tree = "restoration" },
  [44] = { id = "furor", name = "Furor", desc = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!", tree = "restoration" },
  [45] = { id = "furor", name = "Furor", desc = "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!", tree = "restoration" },
  [46] = { id = "nature_grasp", name = "Nature's Grasp", desc = "While active, any enemy striking you has a 35% chance to be afflicted by Entangling Roots. Emergency peel tool!", tree = "balance" },
  [47] = { id = "improved_natures_grasp", name = "Improved Nature's Grasp", desc = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%.", tree = "balance" },
  [48] = { id = "improved_natures_grasp", name = "Improved Nature's Grasp", desc = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%.", tree = "balance" },
  [49] = { id = "improved_natures_grasp", name = "Improved Nature's Grasp", desc = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%.", tree = "balance" },
  [50] = { id = "improved_natures_grasp", name = "Improved Nature's Grasp", desc = "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%.", tree = "balance" },
  [51] = { id = "natural_weapons", name = "Natural Weapons", desc = "Increases the damage you deal with physical attacks in all forms by 2%-10%!", tree = "balance" },
  [52] = { id = "natural_weapons", name = "Natural Weapons", desc = "Increases the damage you deal with physical attacks in all forms by 2%-10%!", tree = "balance" },
  [53] = { id = "natural_weapons", name = "Natural Weapons", desc = "Increases the damage you deal with physical attacks in all forms by 2%-10%!", tree = "balance" },
  [54] = { id = "natural_weapons", name = "Natural Weapons", desc = "Increases the damage you deal with physical attacks in all forms by 2%-10%!", tree = "balance" },
  [55] = { id = "natural_weapons", name = "Natural Weapons", desc = "Increases the damage you deal with physical attacks in all forms by 2%-10%!", tree = "balance" },
  [56] = { id = "natural_shapeshifter", name = "Natural Shapeshifter", desc = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting.", tree = "balance" },
  [57] = { id = "natural_shapeshifter", name = "Natural Shapeshifter", desc = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting.", tree = "balance" },
  [58] = { id = "natural_shapeshifter", name = "Natural Shapeshifter", desc = "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting.", tree = "balance" },
  [59] = { id = "thick_hide", name = "Thick Hide", desc = "Increases your Armor contribution from cloth and leather items by 2%-10%.", tree = "feral" },
  [60] = { id = "thick_hide", name = "Thick Hide", desc = "Increases your Armor contribution from cloth and leather items by 2%-10%.", tree = "feral" },
}

WoWGuide_Druid.classQuests = {
  { lvl = 10, title = "Body and Heart (Bear Form Unlock)", zone = "Thunder Bluff / Moonglade / Mulgore", npc = "Turak Runetotem", desc = "Teleport to Moonglade to commune with the Great Bear Spirit, then summon Lunaclaw in Mulgore to learn Bear Form, Maul, and Demoralizing Roar!" },
  { lvl = 16, title = "Trial of the Sea Lion (Aquatic Form)", zone = "Moonglade / Silverpine / Barrens", npc = "Dendrite Starblaze", desc = "Retrieve the two halves of the Sea Lion Pendant from the depths of Silverpine and the Barrens coast to unlock Aquatic Form for +50% swim speed and infinite underwater breath!" },
  { lvl = 20, title = "Cat Form & Predator Mastery", zone = "Thunder Bluff / Camp Taurajo", npc = "Druid Trainers", desc = "Learn Cat Form, Claw, Rake, and Prowl! Pair with Feral Swiftness talents for permanent +30% movement speed outdoors!" },
  { lvl = 30, title = "Travel Form (40% Speed!)", zone = "Moonglade / Thunder Bluff", npc = "Loganaar", desc = "Learn Travel Form for instant-cast +40% speed outdoors. Huge questing speedup before your 40 mount!" },
  { lvl = 40, title = "Dire Bear Form & Kodo Riding", zone = "Thunder Bluff / Bloodhoof Village", npc = "Turak Runetotem", desc = "Unlock Dire Bear Form with massive armor and health multipliers. Train Riding in Bloodhoof Village for your Kodo mount." }
}

WoWGuide_Druid.macros = {
  { title = "Power Shift (Cat Form Reset)", code = "#showtooltip Cat Form\n/cast !Cat Form", desc = "Instantly clears slows and roots while granting immediate Energy from Furor!" },
  { title = "Smart Travel / Aquatic Form", code = "/cast [swimming] Aquatic Form; [outdoors] Travel Form; Cat Form", desc = "Automatically shifts into Aquatic Form in water, Travel Form outdoors, or Cat Form indoors!" },
  { title = "Faerie Fire (Feral & Caster)", code = "#showtooltip Faerie Fire (Feral)\n/cast [form:1/3] Faerie Fire (Feral); Faerie Fire", desc = "Casts Feral Faerie Fire in Bear or Cat form, and normal Faerie Fire in caster form." },
  { title = "Emergency Bash + Regrowth", code = "#showtooltip Bash\n/cast Bash\n/cast Regrowth", desc = "Stuns enemy in Bear Form, then immediately casts Regrowth heal." },
  { title = "Prowl + Ravage Opener", code = "#showtooltip Ravage\n/cast [nostealth] Prowl\n/cast [stealth] Ravage", desc = "Enters stealth if out of combat, or executes Ravage if stealthed behind enemy." }
}

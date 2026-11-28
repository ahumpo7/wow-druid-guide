/**
 * WoW Forever - Horde Tauren Druid Leveling Codex (1-60)
 * Optimal Solo Leveling: Feral Cat / Bear Spec
 * Comprehensive quest routes, talent paths, trainer spells, rotations, and gear upgrades.
 */

const DRUID_LEVEL_DATA = {
  "1": {
    "title": "Awakening in Camp Narache & The Earthmother",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Rise as a Tauren Druid in Red Cloud Mesa. Speak to Chief Hawkwind and Gart Mistrunner (Druid Trainer). Complete 'The Rites of the Earthmother' and 'Shared Burden'. Learn Wrath, Healing Touch, and Mark of the Wild. Kill Plainstriders around the camp.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [
      "Wrath (Rank 1)",
      "Healing Touch (Rank 1)",
      "Mark of the Wild (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Cast Wrath at range to pull",
      "Melee with your starter 2H club",
      "Cast Healing Touch when HP drops below 50%"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "2": {
    "title": "Moonfire & Plainstrider Feathers",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Visit Gart Mistrunner to learn Moonfire (Rank 1). Pick up 'A Humble Task' and 'Rites of the Earthmother part 2'. Gather Plainstrider feathers and Dirt-stained maps. Kill Mountain Cougar cubs.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Wrath -> Moonfire -> Melee until dead"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "3": {
    "title": "Bristleback Quilboar Incursion",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Pick up 'Break the Keystone'. Head to the Bristleback Quilboar camp in southwestern Red Cloud Mesa. Kill Bristleback Shamans and Battleboars. Loot the Bristleback Keys to free the captured earth spirit.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Wrath -> Moonfire -> Melee with club"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "4": {
    "title": "Rejuvenation & Bristleback Leaders",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Return to Gart Mistrunner to train Rejuvenation (Rank 1). Head into the Bristleback den and eliminate Chief Sharptusk Battleboar. Apply Rejuvenation to keep healing while you melee.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [
      "Moonfire (Rank 1)",
      "Rejuvenation (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Wrath -> Moonfire -> Cast Rejuvenation on yourself -> Melee"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "5": {
    "title": "Rites of the Earthmother Conclusion",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Deliver the dirt-stained map to Chief Hawkwind. Ascend to the sun stone in the hills to complete the final rite of Camp Narache. Gather your gear and prepare to leave the mesa for Bloodhoof Village.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Wrath -> Moonfire -> Rejuvenation -> Melee"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "6": {
    "title": "Bloodhoof Village & Thorns Unleashed",
    "zone": "Mulgore (Camp Narache)",
    "zoneRange": "1-6",
    "hubs": "Camp Narache",
    "zoneInstructions": "Journey north to Bloodhoof Village. Meet Baine Bloodhoof and Gahn Commonpath (Druid Trainer). Train Thorns (Rank 1) and Moonfire (Rank 2). Cast Thorns on yourself for free passive damage whenever mobs attack you!",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [
      "Thorns (Rank 1)",
      "Wrath (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Keep Thorns and Mark of the Wild active",
      "Wrath -> Moonfire -> Melee down"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "7": {
    "title": "Mazzranache & Swoop Hunting",
    "zone": "Mulgore (Bloodhoof Village)",
    "zoneRange": "6-10",
    "hubs": "Bloodhoof Village, Thunder Bluff",
    "zoneInstructions": "Pick up 'Mazzranache', 'Swoop Hunting', and 'The Venture Co.' from Bloodhoof Village. Hunt Swoops for Swoop Gizzards and Plainstriders for Prairie Wolf Paws. Keep Thorns up at all times.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Wrath -> Moonfire -> Rejuvenation -> Staff melee"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "8": {
    "title": "Entangling Roots & Wrath Rank 2",
    "zone": "Mulgore (Bloodhoof Village)",
    "zoneRange": "6-10",
    "hubs": "Bloodhoof Village, Thunder Bluff",
    "zoneInstructions": "Train Entangling Roots (Rank 1) and Wrath (Rank 2). Entangling Roots locks melee mobs in place for up to 12 seconds! Pick up 'The Ravaged Caravan' and hunt Harpies in the northern bluffs.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [
      "Entangling Roots (Rank 1)",
      "Healing Touch (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Entangling Roots to freeze mob -> Cast 2x Wrath safely -> Moonfire -> Melee"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "9": {
    "title": "Venture Co. Mine & Pre-Bear Preparation",
    "zone": "Mulgore (Bloodhoof Village)",
    "zoneRange": "6-10",
    "hubs": "Bloodhoof Village, Thunder Bluff",
    "zoneInstructions": "Clear the Venture Co. mine in southeastern Mulgore. Slay Supervisor Fizsprocket and loot his clipboard. Sell grays in Bloodhoof Village and save at least 15 silver for your Level 10 Bear Form training!",
    "talent": null,
    "talentNote": "Talents unlock at Level 10. Prepare for Ferocity in the Feral tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Entangling Roots -> Wrath -> Moonfire -> Rejuvenation -> Finish with staff"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "10": {
    "title": "BEAR FORM UNLOCKED & MOONGLADE TELEPORT",
    "zone": "Mulgore (Bloodhoof Village)",
    "zoneRange": "6-10",
    "hubs": "Bloodhoof Village, Thunder Bluff",
    "zoneInstructions": "MAJOR MILESTONE! Visit Turak Runetotem in Thunder Bluff (Elder Rise) to accept 'Heeding the Call'. Use Teleport: Moonglade to visit the Great Bear Spirit in Nighthaven! Return to Bloodhoof Village, summon Lunaclaw in the cave with Cenarion Dust, defeat him, and learn BEAR FORM, MAUL, and DEMORALIZING ROAR!",
    "talent": {
      "name": "Ferocity",
      "rank": "1/5",
      "tree": "feral",
      "why": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
    },
    "talentNote": "Ferocity (1/5) - FERAL Tree.",
    "trainerTrain": [
      "Bear Form (Quest)",
      "Maul (Rank 1)",
      "Demoralizing Roar (Rank 1)",
      "Growl (Rank 1)",
      "Teleport: Moonglade",
      "Moonfire (Rank 2)",
      "Rejuvenation (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Shift into Bear Form",
      "Enrage for instant Rage",
      "Demoralizing Roar to reduce mob damage",
      "Spam Maul to shred armor"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "11": {
    "title": "Entering The Barrens & Crossroad Routes",
    "zone": "The Barrens (Crossroads)",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Leave Mulgore and enter The Barrens. Run east to The Crossroads. Grab the flight path immediately! Pick up 'Disrupt the Attacks', 'The Forgotten Pools', and 'Plainstrider Menace'. Level up in Bear Form with 180% increased armor!",
    "talent": {
      "name": "Ferocity",
      "rank": "2/5",
      "tree": "feral",
      "why": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
    },
    "talentNote": "Ferocity (2/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Enrage -> Demoralizing Roar -> Maul on cooldown"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "12": {
    "title": "Bash & Regrowth at The Crossroads",
    "zone": "The Barrens (Crossroads)",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Visit the Druid trainer in Camp Taurajo or Thunder Bluff. Train Bash (Rank 1) - an instant 2-second melee stun! Train Regrowth (Rank 1) and Maul (Rank 2). Bash lets you stun mobs, shift to caster, and heal yourself!",
    "talent": {
      "name": "Ferocity",
      "rank": "3/5",
      "tree": "feral",
      "why": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
    },
    "talentNote": "Ferocity (3/5) - FERAL Tree.",
    "trainerTrain": [
      "Regrowth (Rank 1)",
      "Enrage (Rank 1)",
      "Healing Touch (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Maul -> When HP drops, Bash to stun mob -> Shift out -> Regrowth -> Shift back to Bear!"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "13": {
    "title": "The Forgotten Pools & Fungal Spores",
    "zone": "The Barrens (Crossroads)",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Explore The Forgotten Pools northwest of Crossroads. Dive down to inspect the bubbling fissure. Slay Oasis Snapjaws and gather Kolkar Centaur boots.",
    "talent": {
      "name": "Ferocity",
      "rank": "4/5",
      "tree": "feral",
      "why": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
    },
    "talentNote": "Ferocity (4/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Demoralizing Roar -> Maul spam"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "14": {
    "title": "Demoralizing Roar Rank 2 & Centaur Camps",
    "zone": "The Barrens (Crossroads)",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Train Demoralizing Roar (Rank 2). Head south to the Stagnant Oasis. Clear Kolkar Centaurs and gather the glowing fungal spores for apothecary Zamah.",
    "talent": {
      "name": "Ferocity",
      "rank": "5/5",
      "tree": "feral",
      "why": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
    },
    "talentNote": "Ferocity (5/5) - FERAL Tree.",
    "trainerTrain": [
      "Bash (Rank 1)",
      "Cure Poison (Quest)",
      "Demoralizing Roar (Rank 2)",
      "Wrath (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Enrage -> Demoralizing Roar -> Maul"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "15": {
    "title": "Wailing Caverns Pre-Quests & Camp Taurajo",
    "zone": "The Barrens (Crossroads)",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Pick up 'Smart Drinks' in Ratchet and 'Leaders of the Fang' in Thunder Bluff. Run south to Camp Taurajo and grab the flight path! Clear Razormane Quilboars along the road.",
    "talent": {
      "name": "Feral Aggression",
      "rank": "1/5",
      "tree": "feral",
      "why": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
    },
    "talentNote": "Feral Aggression (1/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Demoralizing Roar -> Maul. Use Bash for stuns."
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "16": {
    "title": "AQUATIC FORM UNLOCKED & TRIAL OF THE SEA LION",
    "zone": "The Barrens / Wailing Caverns",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo, Ratchet",
    "zoneInstructions": "MAJOR CLASS QUEST! Accept 'Trial of the Sea Lion' from Turak Runetotem in Thunder Bluff. Teleport to Moonglade, then dive into the waters of Silverpine and the Barrens coast to recover the two halves of the Sea Lion Pendant! Learn Aquatic Form for 50% swim speed and infinite underwater breathing!",
    "talent": {
      "name": "Feral Aggression",
      "rank": "2/5",
      "tree": "feral",
      "why": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
    },
    "talentNote": "Feral Aggression (2/5) - FERAL Tree.",
    "trainerTrain": [
      "Aquatic Form (Quest)",
      "Hibernate (Rank 1)",
      "Swipe (Rank 1)",
      "Moonfire (Rank 3)",
      "Rejuvenation (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Bear Form -> Demoralizing Roar -> Maul. Aquatic form for all water quests!"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "17": {
    "title": "Wailing Caverns Dungeon Run",
    "zone": "The Barrens / Wailing Caverns",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo, Ratchet",
    "zoneInstructions": "Assemble a group for Wailing Caverns. You can tank as Bear or heal as Caster! Defeat Lord Cobrahn, Lord Pythas, and Mutanus the Devourer. Aim for Crescent Staff and Kodo Hunter's Leggings!",
    "talent": {
      "name": "Feral Aggression",
      "rank": "3/5",
      "tree": "feral",
      "why": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
    },
    "talentNote": "Feral Aggression (3/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Tanking: Bear Form -> Growl -> Demoralizing Roar -> Swipe & Maul"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": [
      {
        "name": "Crescent Staff",
        "quality": "rare",
        "source": "Wailing Caverns Quest: Leaders of the Fang",
        "stats": "+7 Spirit, +7 Intellect, +7 Stamina",
        "tip": "Best early leveling staff in the game!"
      },
      {
        "name": "Kodo Hunter's Leggings",
        "quality": "uncommon",
        "source": "Mulgore Quest",
        "stats": "+5 Stamina, +4 Strength",
        "tip": "Great feral leather legs."
      }
    ]
  },
  "18": {
    "title": "Faerie Fire & Camp Taurajo Outpost",
    "zone": "The Barrens / Wailing Caverns",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo, Ratchet",
    "zoneInstructions": "Train Faerie Fire (Rank 1). Cast Faerie Fire at 30 yards to pull mobs, reduce their armor, and prevent stealth! Hunt Bristleback Geomancers in southern Barrens.",
    "talent": {
      "name": "Feral Aggression",
      "rank": "4/5",
      "tree": "feral",
      "why": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
    },
    "talentNote": "Feral Aggression (4/5) - FERAL Tree.",
    "trainerTrain": [
      "Faerie Fire (Rank 1)",
      "Maul (Rank 2)",
      "Regrowth (Rank 2)",
      "Healing Touch (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Cast Faerie Fire at 30 yards -> Shift to Bear Form -> Demoralizing Roar -> Maul"
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "19": {
    "title": "Bael'dun Dwarf Excavation Clearing",
    "zone": "The Barrens / Wailing Caverns",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo, Ratchet",
    "zoneInstructions": "Clear Bael'dun Digsite in the southwestern Barrens. Defeat Prospector Khazgorm and loot his digging tools. Save up silver for Level 20 Cat Form!",
    "talent": {
      "name": "Feral Aggression",
      "rank": "5/5",
      "tree": "feral",
      "why": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
    },
    "talentNote": "Feral Aggression (5/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Faerie Fire -> Bear Form -> Enrage -> Maul. Bash + Regrowth for healing."
    ],
    "gearTip": "Prioritize Stamina and Strength for Bear Form survival and melee damage.",
    "dungeonGear": []
  },
  "20": {
    "title": "CAT FORM UNLOCKED & 30% FERAL SWIFTNESS",
    "zone": "The Barrens / Wailing Caverns",
    "zoneRange": "10-20",
    "hubs": "The Crossroads, Camp Taurajo, Ratchet",
    "zoneInstructions": "THE BIGGEST DRUID MILESTONE! Visit your trainer to unlock CAT FORM, CLAW, RAKE, and PROWL! Invest your Level 20 & 21 talent points into Feral Swiftness for +30% movement speed outdoors! You are now a stealthy, high-DPS solo predator with zero mana downtime!",
    "talent": {
      "name": "Feral Swiftness",
      "rank": "1/2",
      "tree": "feral",
      "why": "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!"
    },
    "talentNote": "Feral Swiftness (1/2) - FERAL Tree.",
    "trainerTrain": [
      "Cat Form (Quest)",
      "Claw (Rank 1)",
      "Prowl (Rank 1)",
      "Rebirth (Rank 1)",
      "Rip (Rank 1)",
      "Mark of the Wild (Rank 2)",
      "Wrath (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "21": {
    "title": "Ashenvale & Stonetalon Mountains Questing & Exploration",
    "zone": "Ashenvale & Stonetalon Mountains",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat, Splintertree Post",
    "zoneInstructions": "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Feral Swiftness",
      "rank": "2/2",
      "tree": "feral",
      "why": "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!"
    },
    "talentNote": "Feral Swiftness (2/2) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "22": {
    "title": "Ashenvale & Stonetalon Mountains Questing & Exploration",
    "zone": "Ashenvale & Stonetalon Mountains",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat, Splintertree Post",
    "zoneInstructions": "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Sharpened Claws",
      "rank": "1/3",
      "tree": "feral",
      "why": "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%."
    },
    "talentNote": "Sharpened Claws (1/3) - FERAL Tree.",
    "trainerTrain": [
      "Rake (Rank 1)",
      "Moonfire (Rank 4)",
      "Rejuvenation (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "23": {
    "title": "Ashenvale & Stonetalon Mountains Questing & Exploration",
    "zone": "Ashenvale & Stonetalon Mountains",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat, Splintertree Post",
    "zoneInstructions": "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Sharpened Claws",
      "rank": "2/3",
      "tree": "feral",
      "why": "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%."
    },
    "talentNote": "Sharpened Claws (2/3) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "24": {
    "title": "Ashenvale & Stonetalon Mountains Questing & Exploration",
    "zone": "Ashenvale & Stonetalon Mountains",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat, Splintertree Post",
    "zoneInstructions": "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Sharpened Claws",
      "rank": "3/3",
      "tree": "feral",
      "why": "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%."
    },
    "talentNote": "Sharpened Claws (3/3) - FERAL Tree.",
    "trainerTrain": [
      "Tiger's Fury (Rank 1)",
      "Bash (Rank 2)",
      "Demoralizing Roar (Rank 3)",
      "Swipe (Rank 2)",
      "Regrowth (Rank 3)",
      "Healing Touch (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "25": {
    "title": "Ashenvale & Stonetalon Mountains Questing & Exploration",
    "zone": "Ashenvale & Stonetalon Mountains",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat, Splintertree Post",
    "zoneInstructions": "Quest throughout Ashenvale & Stonetalon Mountains operating from Sun Rock Retreat, Splintertree Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Predatory Strikes",
      "rank": "1/3",
      "tree": "feral",
      "why": "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level."
    },
    "talentNote": "Predatory Strikes (1/3) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "26": {
    "title": "Thousand Needles & Southern Barrens Questing & Exploration",
    "zone": "Thousand Needles & Southern Barrens",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Camp Taurajo",
    "zoneInstructions": "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Predatory Strikes",
      "rank": "2/3",
      "tree": "feral",
      "why": "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level."
    },
    "talentNote": "Predatory Strikes (2/3) - FERAL Tree.",
    "trainerTrain": [
      "Abolish Poison",
      "Maul (Rank 3)",
      "Rip (Rank 2)",
      "Hibernate (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "27": {
    "title": "Thousand Needles & Southern Barrens Questing & Exploration",
    "zone": "Thousand Needles & Southern Barrens",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Camp Taurajo",
    "zoneInstructions": "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Predatory Strikes",
      "rank": "3/3",
      "tree": "feral",
      "why": "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level."
    },
    "talentNote": "Predatory Strikes (3/3) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "28": {
    "title": "Thousand Needles & Southern Barrens Questing & Exploration",
    "zone": "Thousand Needles & Southern Barrens",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Camp Taurajo",
    "zoneInstructions": "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Blood Frenzy",
      "rank": "1/2",
      "tree": "feral",
      "why": "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point."
    },
    "talentNote": "Blood Frenzy (1/2) - FERAL Tree.",
    "trainerTrain": [
      "Claw (Rank 2)",
      "Cower (Rank 1)",
      "Rake (Rank 2)",
      "Moonfire (Rank 5)",
      "Rejuvenation (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "29": {
    "title": "Thousand Needles & Southern Barrens Questing & Exploration",
    "zone": "Thousand Needles & Southern Barrens",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Camp Taurajo",
    "zoneInstructions": "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Blood Frenzy",
      "rank": "2/2",
      "tree": "feral",
      "why": "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point."
    },
    "talentNote": "Blood Frenzy (2/2) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Enter Prowl (Stealth) -> Open with Claw",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Rip (Ferocious Bite unlocks at Level 32) -> Shift out to heal if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": [
      {
        "name": "Manual Crowd Pummeler",
        "quality": "rare",
        "source": "Gnomeregan - Crowd Pummeler 9-60",
        "stats": "+16 Strength, +5 Agility, +50% Attack Speed On-Use!",
        "tip": "Legendary feral weapon! Keep the on-use for bosses!"
      }
    ]
  },
  "30": {
    "title": "Thousand Needles & Southern Barrens Questing & Exploration",
    "zone": "Thousand Needles & Southern Barrens",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Camp Taurajo",
    "zoneInstructions": "Quest throughout Thousand Needles & Southern Barrens operating from Freewind Post, Camp Taurajo. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Faerie Fire (Feral)",
      "rank": "1/1",
      "tree": "feral",
      "why": "Allows casting Faerie Fire in Cat and Bear Form! Reduces enemy armor and prevents stealth with ZERO mana cost!"
    },
    "talentNote": "Faerie Fire (Feral) (1/1) - FERAL Tree.",
    "trainerTrain": [
      "Travel Form (40% Speed!)",
      "Shred (Rank 1)",
      "Faerie Fire (Rank 2)",
      "Mark of the Wild (Rank 3)",
      "Healing Touch (Rank 6)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Open with Claw + Faerie Fire (Feral) for zero-mana armor reduction",
      "Apply Rake DoT -> Claw to 4-5 Combo Points -> Rip finisher",
      "Shift out to Rejuvenation / Healing Touch between pulls if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "31": {
    "title": "Thousand Needles (Shimmering Flats) Questing & Exploration",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway, Freewind Post",
    "zoneInstructions": "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Savage Fury",
      "rank": "1/2",
      "tree": "feral",
      "why": "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%."
    },
    "talentNote": "Savage Fury (1/2) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Open with Claw + Faerie Fire (Feral) for zero-mana armor reduction",
      "Apply Rake DoT -> Claw to 4-5 Combo Points -> Rip finisher",
      "Shift out to Rejuvenation / Healing Touch between pulls if needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "32": {
    "title": "Thousand Needles (Shimmering Flats) Questing & Exploration",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway, Freewind Post",
    "zoneInstructions": "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Savage Fury",
      "rank": "2/2",
      "tree": "feral",
      "why": "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%."
    },
    "talentNote": "Savage Fury (2/2) - FERAL Tree.",
    "trainerTrain": [
      "Ferocious Bite (Rank 1)",
      "Swipe (Rank 3)",
      "Regrowth (Rank 4)",
      "Wrath (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "33": {
    "title": "Thousand Needles (Shimmering Flats) Questing & Exploration",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway, Freewind Post",
    "zoneInstructions": "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Primal Fury",
      "rank": "1/2",
      "tree": "feral",
      "why": "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form."
    },
    "talentNote": "Primal Fury (1/2) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "34": {
    "title": "Thousand Needles (Shimmering Flats) Questing & Exploration",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway, Freewind Post",
    "zoneInstructions": "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Primal Fury",
      "rank": "2/2",
      "tree": "feral",
      "why": "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form."
    },
    "talentNote": "Primal Fury (2/2) - FERAL Tree.",
    "trainerTrain": [
      "Ravage (Rank 1)",
      "Maul (Rank 4)",
      "Demoralizing Roar (Rank 4)",
      "Rip (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "35": {
    "title": "Thousand Needles (Shimmering Flats) Questing & Exploration",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway, Freewind Post",
    "zoneInstructions": "Quest throughout Thousand Needles (Shimmering Flats) operating from Mirage Raceway, Freewind Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Heart of the Wild",
      "rank": "1/5",
      "tree": "feral",
      "why": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
    },
    "talentNote": "Heart of the Wild (1/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "36": {
    "title": "Desolace & Stranglethorn Vale Questing & Exploration",
    "zone": "Desolace & Stranglethorn Vale",
    "zoneRange": "35-40",
    "hubs": "Shadowprey Village, Grom'gol Base Camp",
    "zoneInstructions": "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Heart of the Wild",
      "rank": "2/5",
      "tree": "feral",
      "why": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
    },
    "talentNote": "Heart of the Wild (2/5) - FERAL Tree.",
    "trainerTrain": [
      "Pounce (Rank 1)",
      "Rake (Rank 3)",
      "Cower (Rank 2)",
      "Moonfire (Rank 6)",
      "Rejuvenation (Rank 6)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "37": {
    "title": "Desolace & Stranglethorn Vale Questing & Exploration",
    "zone": "Desolace & Stranglethorn Vale",
    "zoneRange": "35-40",
    "hubs": "Shadowprey Village, Grom'gol Base Camp",
    "zoneInstructions": "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Heart of the Wild",
      "rank": "3/5",
      "tree": "feral",
      "why": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
    },
    "talentNote": "Heart of the Wild (3/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "38": {
    "title": "Desolace & Stranglethorn Vale Questing & Exploration",
    "zone": "Desolace & Stranglethorn Vale",
    "zoneRange": "35-40",
    "hubs": "Shadowprey Village, Grom'gol Base Camp",
    "zoneInstructions": "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Heart of the Wild",
      "rank": "4/5",
      "tree": "feral",
      "why": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
    },
    "talentNote": "Heart of the Wild (4/5) - FERAL Tree.",
    "trainerTrain": [
      "Claw (Rank 3)",
      "Tiger's Fury (Rank 2)",
      "Bash (Rank 3)",
      "Healing Touch (Rank 7)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "39": {
    "title": "Desolace & Stranglethorn Vale Questing & Exploration",
    "zone": "Desolace & Stranglethorn Vale",
    "zoneRange": "35-40",
    "hubs": "Shadowprey Village, Grom'gol Base Camp",
    "zoneInstructions": "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Heart of the Wild",
      "rank": "5/5",
      "tree": "feral",
      "why": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
    },
    "talentNote": "Heart of the Wild (5/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "40": {
    "title": "Desolace & Stranglethorn Vale Questing & Exploration",
    "zone": "Desolace & Stranglethorn Vale",
    "zoneRange": "35-40",
    "hubs": "Shadowprey Village, Grom'gol Base Camp",
    "zoneInstructions": "Quest throughout Desolace & Stranglethorn Vale operating from Shadowprey Village, Grom'gol Base Camp. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Leader of the Pack",
      "rank": "1/1",
      "tree": "feral",
      "why": "While in Cat or Bear Form, gives you and all party members within 45 yards a 3% increased physical critical strike chance!"
    },
    "talentNote": "Leader of the Pack (1/1) - FERAL Tree.",
    "trainerTrain": [
      "Dire Bear Form",
      "Ferocious Bite (Rank 2)",
      "Regrowth (Rank 5)",
      "Rebirth (Rank 2)",
      "Mount Riding"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl (Stealth) -> Open with Ravage (from behind) + Faerie Fire (Feral)",
      "Apply Rake DoT -> Claw to 4-5 Combo Points",
      "Finish with Ferocious Bite for instant burst! Shift out to heal when needed"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "41": {
    "title": "Tanaris & Feralas Questing & Exploration",
    "zone": "Tanaris & Feralas",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan, Camp Mojache",
    "zoneInstructions": "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Furor",
      "rank": "1/5",
      "tree": "restoration",
      "why": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
    },
    "talentNote": "Furor (1/5) - RESTORATION Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "42": {
    "title": "Tanaris & Feralas Questing & Exploration",
    "zone": "Tanaris & Feralas",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan, Camp Mojache",
    "zoneInstructions": "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Furor",
      "rank": "2/5",
      "tree": "restoration",
      "why": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
    },
    "talentNote": "Furor (2/5) - RESTORATION Tree.",
    "trainerTrain": [
      "Maul (Rank 5)",
      "Shred (Rank 2)",
      "Rip (Rank 4)",
      "Moonfire (Rank 7)",
      "Rejuvenation (Rank 7)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "43": {
    "title": "Tanaris & Feralas Questing & Exploration",
    "zone": "Tanaris & Feralas",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan, Camp Mojache",
    "zoneInstructions": "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Furor",
      "rank": "3/5",
      "tree": "restoration",
      "why": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
    },
    "talentNote": "Furor (3/5) - RESTORATION Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "44": {
    "title": "Tanaris & Feralas Questing & Exploration",
    "zone": "Tanaris & Feralas",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan, Camp Mojache",
    "zoneInstructions": "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Furor",
      "rank": "4/5",
      "tree": "restoration",
      "why": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
    },
    "talentNote": "Furor (4/5) - RESTORATION Tree.",
    "trainerTrain": [
      "Barkskin",
      "Rake (Rank 4)",
      "Swipe (Rank 4)",
      "Demoralizing Roar (Rank 5)",
      "Healing Touch (Rank 8)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "45": {
    "title": "Tanaris & Feralas Questing & Exploration",
    "zone": "Tanaris & Feralas",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan, Camp Mojache",
    "zoneInstructions": "Quest throughout Tanaris & Feralas operating from Gadgetzan, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Furor",
      "rank": "5/5",
      "tree": "restoration",
      "why": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
    },
    "talentNote": "Furor (5/5) - RESTORATION Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": [
      {
        "name": "Resurgence Rod",
        "quality": "rare",
        "source": "Maraudon Quest: Corruption of Earth and Seed",
        "stats": "+15 Stamina, +15 Intellect, +15 Spirit",
        "tip": "Incredible all-around staff."
      }
    ]
  },
  "46": {
    "title": "The Hinterlands & Feralas Questing & Exploration",
    "zone": "The Hinterlands & Feralas",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Camp Mojache",
    "zoneInstructions": "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Nature's Grasp",
      "rank": "1/1",
      "tree": "balance",
      "why": "While active, any enemy striking you has a 35% chance to be afflicted by Entangling Roots. Emergency peel tool!"
    },
    "talentNote": "Nature's Grasp (1/1) - BALANCE Tree.",
    "trainerTrain": [
      "Ravage (Rank 2)",
      "Cower (Rank 3)",
      "Regrowth (Rank 6)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "47": {
    "title": "The Hinterlands & Feralas Questing & Exploration",
    "zone": "The Hinterlands & Feralas",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Camp Mojache",
    "zoneInstructions": "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Improved Nature's Grasp",
      "rank": "1/4",
      "tree": "balance",
      "why": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%."
    },
    "talentNote": "Improved Nature's Grasp (1/4) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "48": {
    "title": "The Hinterlands & Feralas Questing & Exploration",
    "zone": "The Hinterlands & Feralas",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Camp Mojache",
    "zoneInstructions": "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Improved Nature's Grasp",
      "rank": "2/4",
      "tree": "balance",
      "why": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%."
    },
    "talentNote": "Improved Nature's Grasp (2/4) - BALANCE Tree.",
    "trainerTrain": [
      "Claw (Rank 4)",
      "Ferocious Bite (Rank 3)",
      "Tiger's Fury (Rank 3)",
      "Moonfire (Rank 8)",
      "Rejuvenation (Rank 8)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "49": {
    "title": "The Hinterlands & Feralas Questing & Exploration",
    "zone": "The Hinterlands & Feralas",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Camp Mojache",
    "zoneInstructions": "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Improved Nature's Grasp",
      "rank": "3/4",
      "tree": "balance",
      "why": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%."
    },
    "talentNote": "Improved Nature's Grasp (3/4) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "50": {
    "title": "The Hinterlands & Feralas Questing & Exploration",
    "zone": "The Hinterlands & Feralas",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Camp Mojache",
    "zoneInstructions": "Quest throughout The Hinterlands & Feralas operating from Revantusk Village, Camp Mojache. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Improved Nature's Grasp",
      "rank": "4/4",
      "tree": "balance",
      "why": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%."
    },
    "talentNote": "Improved Nature's Grasp (4/4) - BALANCE Tree.",
    "trainerTrain": [
      "Maul (Rank 6)",
      "Shred (Rank 3)",
      "Rip (Rank 5)",
      "Healing Touch (Rank 9)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "51": {
    "title": "Un'Goro Crater & Felwood Questing & Exploration",
    "zone": "Un'Goro Crater & Felwood",
    "zoneRange": "50-55",
    "hubs": "Marshal's Refuge, Bloodvenom Post",
    "zoneInstructions": "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Weapons",
      "rank": "1/5",
      "tree": "balance",
      "why": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
    },
    "talentNote": "Natural Weapons (1/5) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "52": {
    "title": "Un'Goro Crater & Felwood Questing & Exploration",
    "zone": "Un'Goro Crater & Felwood",
    "zoneRange": "50-55",
    "hubs": "Marshal's Refuge, Bloodvenom Post",
    "zoneInstructions": "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Weapons",
      "rank": "2/5",
      "tree": "balance",
      "why": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
    },
    "talentNote": "Natural Weapons (2/5) - BALANCE Tree.",
    "trainerTrain": [
      "Rake (Rank 5)",
      "Bash (Rank 4)",
      "Regrowth (Rank 7)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "53": {
    "title": "Un'Goro Crater & Felwood Questing & Exploration",
    "zone": "Un'Goro Crater & Felwood",
    "zoneRange": "50-55",
    "hubs": "Marshal's Refuge, Bloodvenom Post",
    "zoneInstructions": "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Weapons",
      "rank": "3/5",
      "tree": "balance",
      "why": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
    },
    "talentNote": "Natural Weapons (3/5) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "54": {
    "title": "Un'Goro Crater & Felwood Questing & Exploration",
    "zone": "Un'Goro Crater & Felwood",
    "zoneRange": "50-55",
    "hubs": "Marshal's Refuge, Bloodvenom Post",
    "zoneInstructions": "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Weapons",
      "rank": "4/5",
      "tree": "balance",
      "why": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
    },
    "talentNote": "Natural Weapons (4/5) - BALANCE Tree.",
    "trainerTrain": [
      "Demoralizing Roar (Rank 6)",
      "Swipe (Rank 5)",
      "Moonfire (Rank 9)",
      "Rejuvenation (Rank 9)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "55": {
    "title": "Un'Goro Crater & Felwood Questing & Exploration",
    "zone": "Un'Goro Crater & Felwood",
    "zoneRange": "50-55",
    "hubs": "Marshal's Refuge, Bloodvenom Post",
    "zoneInstructions": "Quest throughout Un'Goro Crater & Felwood operating from Marshal's Refuge, Bloodvenom Post. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Weapons",
      "rank": "5/5",
      "tree": "balance",
      "why": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
    },
    "talentNote": "Natural Weapons (5/5) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "56": {
    "title": "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    "zone": "Winterspring & Western/Eastern Plaguelands",
    "zoneRange": "55-60",
    "hubs": "Everlook, Brill, Light's Hope Chapel",
    "zoneInstructions": "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Shapeshifter",
      "rank": "1/3",
      "tree": "balance",
      "why": "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting."
    },
    "talentNote": "Natural Shapeshifter (1/3) - BALANCE Tree.",
    "trainerTrain": [
      "Ferocious Bite (Rank 4)",
      "Ravage (Rank 3)",
      "Cower (Rank 4)",
      "Healing Touch (Rank 10)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "57": {
    "title": "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    "zone": "Winterspring & Western/Eastern Plaguelands",
    "zoneRange": "55-60",
    "hubs": "Everlook, Brill, Light's Hope Chapel",
    "zoneInstructions": "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Shapeshifter",
      "rank": "2/3",
      "tree": "balance",
      "why": "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting."
    },
    "talentNote": "Natural Shapeshifter (2/3) - BALANCE Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "58": {
    "title": "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    "zone": "Winterspring & Western/Eastern Plaguelands",
    "zoneRange": "55-60",
    "hubs": "Everlook, Brill, Light's Hope Chapel",
    "zoneInstructions": "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Natural Shapeshifter",
      "rank": "3/3",
      "tree": "balance",
      "why": "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting."
    },
    "talentNote": "Natural Shapeshifter (3/3) - BALANCE Tree.",
    "trainerTrain": [
      "Claw (Rank 5)",
      "Shred (Rank 4)",
      "Maul (Rank 7)",
      "Rip (Rank 6)",
      "Regrowth (Rank 8)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "59": {
    "title": "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    "zone": "Winterspring & Western/Eastern Plaguelands",
    "zoneRange": "55-60",
    "hubs": "Everlook, Brill, Light's Hope Chapel",
    "zoneInstructions": "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Thick Hide",
      "rank": "1/5",
      "tree": "feral",
      "why": "Increases your Armor contribution from cloth and leather items by 2%-10%."
    },
    "talentNote": "Thick Hide (1/5) - FERAL Tree.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  },
  "60": {
    "title": "Winterspring & Western/Eastern Plaguelands Questing & Exploration",
    "zone": "Winterspring & Western/Eastern Plaguelands",
    "zoneRange": "55-60",
    "hubs": "Everlook, Brill, Light's Hope Chapel",
    "zoneInstructions": "Quest throughout Winterspring & Western/Eastern Plaguelands operating from Everlook, Brill, Light's Hope Chapel. Maintain your Feral Cat Form speed outdoors. Prioritize Agility and Strength for high physical burst and fast kills.",
    "talent": {
      "name": "Thick Hide",
      "rank": "2/5",
      "tree": "feral",
      "why": "Increases your Armor contribution from cloth and leather items by 2%-10%."
    },
    "talentNote": "Thick Hide (2/5) - FERAL Tree.",
    "trainerTrain": [
      "Ferocious Bite (Rank 5)",
      "Rake (Rank 6)",
      "Rebirth (Rank 3)",
      "Mark of the Wild (Rank 7)",
      "Moonfire (Rank 10)",
      "Rejuvenation (Rank 10)",
      "Healing Touch (Rank 11)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Prowl -> Ravage opener + Faerie Fire (Feral) (+3% Crit from Leader of the Pack!)",
      "Rake -> Claw to 4-5 Combo Points -> Ferocious Bite",
      "Powershift (Furor 5/5 gives +40 Energy on shift; +60 with Wolfshead Helm!)"
    ],
    "gearTip": "Prioritize Agility (Attack Power, Crit %, Dodge %) > Strength (2 Attack Power per point in Cat Form!) > Stamina.",
    "dungeonGear": []
  }
};

const DRUID_TALENTS_CONFIG = [
  {
    "id": "ferocity",
    "name": "Ferocity",
    "max": 5,
    "tree": "feral",
    "desc": "Reduces the Rage cost of Maul and Swipe by 1-5, and the Energy cost of Claw and Rake by 1-5."
  },
  {
    "id": "feral_aggression",
    "name": "Feral Aggression",
    "max": 5,
    "tree": "feral",
    "desc": "Increases attack power reduction of Demoralizing Roar by 8%-40% and damage of Ferocious Bite by 3%-15%."
  },
  {
    "id": "feral_swiftness",
    "name": "Feral Swiftness",
    "max": 2,
    "tree": "feral",
    "desc": "Increases your movement speed by 15%/30% while in Cat Form outdoors. HUGE LEVELING MOBILITY!"
  },
  {
    "id": "sharpened_claws",
    "name": "Sharpened Claws",
    "max": 3,
    "tree": "feral",
    "desc": "Increases your critical strike chance while in Bear, Dire Bear, or Cat Form by 2%/4%/6%."
  },
  {
    "id": "predatory_strikes",
    "name": "Predatory Strikes",
    "max": 3,
    "tree": "feral",
    "desc": "Increases your melee attack power in Cat, Bear, and Dire Bear Forms by 50%/100%/150% of your level."
  },
  {
    "id": "blood_frenzy",
    "name": "Blood Frenzy",
    "max": 2,
    "tree": "feral",
    "desc": "Your critical strikes from Cat Form abilities that add combo points have a 50%/100% chance to add an additional combo point."
  },
  {
    "id": "faerie_fire_feral",
    "name": "Faerie Fire (Feral)",
    "max": 1,
    "tree": "feral",
    "desc": "Allows casting Faerie Fire in Cat and Bear Form! Reduces enemy armor and prevents stealth with ZERO mana cost!"
  },
  {
    "id": "heart_of_the_wild",
    "name": "Heart of the Wild",
    "max": 5,
    "tree": "feral",
    "desc": "Increases your Intellect by 4%-20%, your Stamina in Bear Form by 4%-20%, and your Strength in Cat Form by 4%-20%!"
  },
  {
    "id": "leader_of_the_pack",
    "name": "Leader of the Pack",
    "max": 1,
    "tree": "feral",
    "desc": "While in Cat or Bear Form, gives you and all party members within 45 yards a 3% increased physical critical strike chance!"
  },
  {
    "id": "furor",
    "name": "Furor",
    "max": 5,
    "tree": "restoration",
    "desc": "Gives you a 20%-100% chance to gain 10 Rage when shifting into Bear Form, or 40 Energy when shifting into Cat Form!"
  },
  {
    "id": "nature_grasp",
    "name": "Nature's Grasp",
    "max": 1,
    "tree": "balance",
    "desc": "While active, any enemy striking you has a 35% chance to be afflicted by Entangling Roots. Emergency peel tool!"
  },
  {
    "id": "thick_hide",
    "name": "Thick Hide",
    "max": 5,
    "tree": "feral",
    "desc": "Increases your Armor contribution from cloth and leather items by 2%-10%."
  },
  {
    "id": "savage_fury",
    "name": "Savage Fury",
    "max": 2,
    "tree": "feral",
    "desc": "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%/20%."
  },
  {
    "id": "primal_fury",
    "name": "Primal Fury",
    "max": 2,
    "tree": "feral",
    "desc": "Gives you a 50%/100% chance to gain an additional 5 Rage anytime you score a critical strike in Bear Form."
  },
  {
    "id": "improved_natures_grasp",
    "name": "Improved Nature's Grasp",
    "max": 4,
    "tree": "balance",
    "desc": "Increases the chance for your Nature's Grasp to entangle an enemy by 15%-65%."
  },
  {
    "id": "natural_weapons",
    "name": "Natural Weapons",
    "max": 5,
    "tree": "balance",
    "desc": "Increases the damage you deal with physical attacks in all forms by 2%-10%!"
  },
  {
    "id": "natural_shapeshifter",
    "name": "Natural Shapeshifter",
    "max": 3,
    "tree": "balance",
    "desc": "Reduces the mana cost of all shapeshifting by 10%-30% for smoother powershifting."
  }
];

const DRUID_TALENT_ORDER = [
  "ferocity",
  "ferocity",
  "ferocity",
  "ferocity",
  "ferocity",
  "feral_aggression",
  "feral_aggression",
  "feral_aggression",
  "feral_aggression",
  "feral_aggression",
  "feral_swiftness",
  "feral_swiftness",
  "sharpened_claws",
  "sharpened_claws",
  "sharpened_claws",
  "predatory_strikes",
  "predatory_strikes",
  "predatory_strikes",
  "blood_frenzy",
  "blood_frenzy",
  "faerie_fire_feral",
  "savage_fury",
  "savage_fury",
  "primal_fury",
  "primal_fury",
  "heart_of_the_wild",
  "heart_of_the_wild",
  "heart_of_the_wild",
  "heart_of_the_wild",
  "heart_of_the_wild",
  "leader_of_the_pack",
  "furor",
  "furor",
  "furor",
  "furor",
  "furor",
  "nature_grasp",
  "improved_natures_grasp",
  "improved_natures_grasp",
  "improved_natures_grasp",
  "improved_natures_grasp",
  "natural_weapons",
  "natural_weapons",
  "natural_weapons",
  "natural_weapons",
  "natural_weapons",
  "natural_shapeshifter",
  "natural_shapeshifter",
  "natural_shapeshifter",
  "thick_hide",
  "thick_hide"
];

const DRUID_GEAR_PRESETS = {
  live_gear: {
    label: "⭐ Currently Equipped (Live Sync: Muataurgrumm)",
    desc: "Live gear extracted directly from game client WTF SavedVariables for Druid.",
    items: {}
  },
  lvl20: {
    label: "Level 20 Milestone (Crescent Staff & Feral Cat)",
    desc: "Crescent Staff from Wailing Caverns quest with agility leather for newly unlocked Cat Form.",
    items: {
      chest: { slot: "Chest", name: "Tunic of Westfall", quality: "rare", stats: ["92 Armor", "+11 Agility", "+5 Stamina"], tip: "Dungeon / quest leather." },
      waist: { slot: "Waist", name: "Deviate Scale Belt", quality: "uncommon", stats: ["43 Armor", "+5 Stamina", "+4 Agility"], tip: "Crafted Leatherworking 115." },
      legs: { slot: "Legs", name: "Leggings of the Fang", quality: "rare", stats: ["74 Armor", "+5 Agility", "+4 Stamina", "+9 Spirit"], tip: "Lord Cobrahn in Wailing Caverns." },
      feet: { slot: "Feet", name: "Footpads of the Fang", quality: "rare", stats: ["54 Armor", "+4 Agility", "+4 Stamina", "+2 Strength"], tip: "Lady Anacondra in Wailing Caverns." },
      wrists: { slot: "Wrists", name: "Black Wolf Bracers", quality: "uncommon", stats: ["31 Armor", "+2 Agility", "+1 Stamina"], tip: "BoE leather wrists." },
      hands: { slot: "Hands", name: "Gloves of the Fang", quality: "rare", stats: ["50 Armor", "+4 Agility", "+4 Strength", "+2 Stamina"], tip: "Lord Pythas in Wailing Caverns." },
      back: { slot: "Back", name: "Glowing Lizardscale Cloak", quality: "rare", stats: ["20 Armor", "+6 Agility", "+2 Stamina"], tip: "Skum in Wailing Caverns." },
      mainHand: { slot: "Main Hand", name: "Crescent Staff", quality: "rare", stats: ["20.3 DPS", "Speed 2.90", "+7 Strength", "+7 Agility", "+7 Stamina"], tip: "⭐ Guaranteed quest reward: Leaders of the Fang (Wailing Caverns). The #1 early Feral weapon!" },
      offHand: { slot: "Off-Hand", name: "None (Two-Handed)", quality: "common", stats: ["Two-Handed Staff equipped"], tip: "Druids use Staves and 2H Maces." },
      ranged: { slot: "Ranged / Relic", name: "None (Unlocked later)", quality: "common", stats: ["Idols start at higher levels"], tip: "Empty relic slot." }
    }
  },
  lvl30: {
    label: "Level 30 Milestone (Manual Crowd Pummeler & Travel Form)",
    desc: "Manual Crowd Pummeler from Gnomeregan for 50% haste bursts with Travel Form mobility.",
    items: {
      head: { slot: "Head", name: "Humbert's Helm", quality: "uncommon", stats: ["76 Armor", "+7 Agility", "+8 Stamina"], tip: "Dun Garok Riflemen drop in Hillsbrad." },
      chest: { slot: "Chest", name: "Triprunner Dungarees", quality: "rare", stats: ["101 Armor", "+18 Agility", "+6 Stamina", "+3 Strength"], tip: "Rig Wars quest reward." },
      mainHand: { slot: "Main Hand", name: "Manual Crowd Pummeler", quality: "rare", stats: ["31.5 DPS", "Speed 2.00", "+16 Strength", "+5 Agility", "Use: Increases attack speed by 50% for 30 sec (3 charges)"], tip: "👑 Crowd Pummeler 9-60 in Gnomeregan. The ultimate Feral burst weapon!" },
      offHand: { slot: "Off-Hand", name: "None (Two-Handed)", quality: "common", stats: ["Two-Handed Mace"], tip: "Two-Handed" },
      feet: { slot: "Feet", name: "Warsong Boots", quality: "uncommon", stats: ["64 Armor", "+6 Agility", "+5 Stamina"], tip: "Ashenvale quest." }
    }
  },
  lvl40: {
    label: "Level 40 Milestone (Dire Bear & Heart of the Wild)",
    desc: "Massive armor and health multipliers with Dire Bear Form and Heart of the Wild talents.",
    items: {
      head: { slot: "Head", name: "Nightscape Headband", quality: "uncommon", stats: ["85 Armor", "+12 Agility", "+11 Stamina"], tip: "Crafted LW 205." },
      chest: { slot: "Chest", name: "Nightscape Tunic", quality: "uncommon", stats: ["113 Armor", "+15 Agility", "+6 Stamina"], tip: "Crafted LW 205." },
      legs: { slot: "Legs", name: "Nightscape Pants", quality: "uncommon", stats: ["106 Armor", "+14 Agility", "+7 Stamina"], tip: "Crafted LW 210." },
      mainHand: { slot: "Main Hand", name: "Warden Staff", quality: "epic", stats: ["132 - 199 Damage (39.9 DPS)", "+260 Armor", "+10 Defense", "+10 Stamina"], tip: "🔥 Legendary BoE Epic Staff for Feral Bear tanking!" },
      offHand: { slot: "Off-Hand", name: "None (Two-Handed)", quality: "common", stats: ["Two-Handed Staff"], tip: "Two-Handed" }
    }
  },
  lvl60: {
    label: "Level 60 Pre-Raid BiS (Warden Staff & Wolfshead Helm)",
    desc: "Full Feral Pre-Raid BiS featuring Wolfshead Helm for infinite powershifting energy.",
    items: {
      head: { slot: "Head", name: "Wolfshead Helm", quality: "rare", stats: ["109 Armor", "+10 Spirit", "Equip: When you shapeshift into Cat Form, gain 20 energy. Bear Form gains 5 rage."], tip: "👑 BiS forever for Cat DPS powershifting! Crafted LW 225." },
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
      trinket1: { slot: "Trinket", name: "Hand of Justice", quality: "rare", stats: ["+20 Attack Power", "2% Chance for extra swing"], tip: "Emperor Dagran Thaurissan (BRD)." },
      trinket2: { slot: "Trinket", name: "Blackhand's Breadth", quality: "rare", stats: ["+2% Critical Strike"], tip: "General Drakkisath's Demise quest." },
      mainHand: { slot: "Main Hand", name: "Warden Staff", quality: "epic", stats: ["39.9 DPS", "+260 Armor", "+10 Defense", "+10 Stamina"], tip: "World drop epic staff (or Bonecrusher from Dire Maul)." },
      offHand: { slot: "Off-Hand", name: "None (Two-Handed)", quality: "common", stats: ["Two-Handed Staff"], tip: "Two-Handed" },
      ranged: { slot: "Ranged / Relic", name: "Idol of Brutality", quality: "rare", stats: ["Equip: Reduces rage cost of Maul and Swipe by 3"], tip: "Magmus (BRD)." }
    }
  }
};

const DRUID_CHECKLIST = [
  { id: "c1", label: "Level 1-6: Red Cloud Mesa Quests & Weapon Trainer (Staff)", tip: "Complete 'Rites of the Earthmother'. Learn 2H weapons from Thunder Bluff weapon master." },
  { id: "c2", label: "Level 10: Complete Bear Form Quest 'Heeding the Call'", tip: "Visit Moonglade, commune with Great Bear Spirit, defeat Lunaclaw, and learn Bear Form & Enrage." },
  { id: "c3", label: "Level 14: Complete Cure Poison Quest", tip: "Moonglade questline: collect Earthroot and Peat in Silverpine/Mulgore to unlock Cure Poison." },
  { id: "c4", label: "Level 16: Complete Aquatic Form Quest", tip: "Trial of the Sea Lion: retrieve Half Pendant of Aquatic Endurance from Silverpine and Barrens." },
  { id: "c5", label: "Level 18: Wailing Caverns & Crescent Staff", tip: "Complete 'Leaders of the Fang' in Thunder Bluff for Crescent Staff (+7 Str, +7 Agi, +7 Sta)." },
  { id: "c6", label: "Level 20: Train Cat Form at Druid Trainer", tip: "Visit Thunder Bluff or Camp Taurajo at level 20 to learn Cat Form, Claw, and Prowl!" },
  { id: "c7", label: "Level 30: Train Travel Form (40% Outdoor Speed)", tip: "Learn Travel Form directly from the trainer for 40% increased movement speed outdoors." },
  { id: "c8", label: "Level 30-34: Farm Manual Crowd Pummeler in Gnomeregan", tip: "Crowd Pummeler 9-60 drops the 50% haste on-use weapon (3 charges each). Stockpile for bosses!" },
  { id: "c9", label: "Level 40: Train Dire Bear Form & Mount", tip: "Learn Dire Bear Form (360% armor bonus) and purchase Kodo mount in Bloodhoof Village." },
  { id: "c10", label: "Level 50: Craft Wolfshead Helm (Leatherworking 225)", tip: "BiS Feral Cat helmet: +20 energy on Cat Form shift for infinite powershifting rotations." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DRUID_LEVEL_DATA,
    DRUID_TALENTS_CONFIG,
    DRUID_TALENT_ORDER,
    DRUID_GEAR_PRESETS,
    DRUID_CHECKLIST
  };
}

/**
 * WoW Forever - Horde Warlock Leveling Codex (1-60)
 * Optimal Solo Leveling: Affliction Drain Tank & Wand Spec
 * Comprehensive quest routes, talent paths, trainer spells, rotations, and gear upgrades.
 */

const WARLOCK_LEVEL_DATA = {
  "1": {
    "title": "Awakening in Deathknell & The First Minion",
    "zone": "Tirisfal Glades (Deathknell)",
    "zoneRange": "1-6",
    "hubs": "Deathknell Crypt, Shadow Grave",
    "zoneInstructions": "Rise from the crypt and speak to Undertaker Mordo and Shadow Priest Sarvis. Complete 'Rude Awakening' and 'The Mind's Eye'. Accept your first Warlock class quest to summon and bind the Imp. Learn to cast Immolate, then Shadow Bolt, and finish with melee/wand attacks.",
    "talent": null,
    "talentNote": "First talent point unlocks at Level 10. Prepare for Affliction (Improved Corruption).",
    "trainerTrain": [
      "Shadow Bolt (Rank 1)",
      "Demon Skin (Rank 1)",
      "Immolate (Rank 1)",
      "Summon Imp (Quest)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Send Imp in to attack (set Imp on Defensive)",
      "Cast Immolate at 30 yards range",
      "Cast Shadow Bolt to burst initial health",
      "Melee with dagger/staff or wand to conserve mana"
    ],
    "gearTip": "Prioritize any gear with Intellect and Stamina. Spirit helps health/mana regeneration between pulls.",
    "dungeonGear": []
  },
  "2": {
    "title": "Deathknell Scavengers & Bloodsnarl Vines",
    "zone": "Tirisfal Glades (Deathknell)",
    "zoneRange": "1-6",
    "hubs": "Deathknell",
    "zoneInstructions": "Pick up 'Scavenging Deathknell' and 'Night Web's Hollow'. Kill Scavengers and Duskbats around Deathknell. Train Corruption at Level 4 immediately when you return.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Immolate -> Shadow Bolt -> Melee/Wand until dead."
    ],
    "gearTip": "Equip any cloth items that drop from humanoids or bandits.",
    "dungeonGear": []
  },
  "3": {
    "title": "Night Web's Hollow Spider Clearing",
    "zone": "Tirisfal Glades (Deathknell)",
    "zoneRange": "1-6",
    "hubs": "Deathknell",
    "zoneInstructions": "Enter Night Web's Hollow and kill Young Night Web Spiders and Night Web Spiders. Collect Venom Glands and Ichor. Save cloth for First Aid bandages.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Immolate -> Shadow Bolt -> Imp Firebolt -> Finish with staff."
    ],
    "gearTip": "Keep all Linen Cloth! First Aid is vital for Warlocks to restore HP after Life Tap.",
    "dungeonGear": []
  },
  "4": {
    "title": "Corruption & Bane of Agony Acquired!",
    "zone": "Tirisfal Glades (Deathknell)",
    "zoneRange": "1-6",
    "hubs": "Deathknell",
    "zoneInstructions": "Return to Maximillion (Warlock Trainer) in Deathknell. Learn Corruption (Rank 1) and Curse of Weakness. You are now a true damage-over-time caster! Pick up 'The Damned' and 'Marla's Last Wish'.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [
      "Corruption (Rank 1)",
      "Curse of Weakness (Rank 1)"
    ],
    "trainerSkip": [
      "Curse of Weakness (skip if low on copper)"
    ],
    "rotation": [
      "Send Imp to attack with Firebolt",
      "Cast Immolate (2.0s cast)",
      "Cast Corruption (DoT begins ticking)",
      "Cast Shadow Bolt or melee auto-attack"
    ],
    "gearTip": "Visit general goods vendor to sell trash grays and buy 6-slot bags if available.",
    "dungeonGear": []
  },
  "5": {
    "title": "Deathknell Finale & Lesser Magic Wand Milestone",
    "zone": "Tirisfal Glades (Deathknell)",
    "zoneRange": "1-6",
    "hubs": "Deathknell -> Road to Brill",
    "zoneInstructions": "Kill Samuel Fitts and his Rot Hide gnolls for 'The Damned'. Turn in all quests in Deathknell and receive 'Vital Intelligence' to head north to Brill. Check the Auction House or an Enchanter for a Lesser Magic Wand (req lvl 5)—it increases your leveling speed by 200%!",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Immolate -> Corruption -> Shoot Lesser Magic Wand until mob is dead! Zero mana wasted."
    ],
    "gearTip": "⭐ CRAFT OR BUY: Lesser Magic Wand (11.3 DPS). Outdamages your spells with ZERO mana cost!",
    "dungeonGear": [
      {
        "name": "Lesser Magic Wand",
        "quality": "uncommon",
        "source": "Enchanting (Skill 10)",
        "stats": "11.3 DPS, Fire Damage, Speed 1.50",
        "tip": "🔥 Crucial Warlock leveling milestone!"
      }
    ]
  },
  "6": {
    "title": "Arrival in Brill & Life Tap Unleashed",
    "zone": "Tirisfal Glades (Brill)",
    "zoneRange": "6-10",
    "hubs": "Brill (Innkeeper Renee, Flight Master Karos Razok)",
    "zoneInstructions": "Set your Hearthstone at the Gallows End Tavern in Brill. Speak to Apprentice Aleister and Deathguard Simmer. Learn Life Tap (Rank 1)—your engine of infinite mana. Pick up 'A New Plague', 'A Putrid Task', and 'The Chill Web Spider'.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [
      "Life Tap (Rank 1)",
      "Shadow Bolt (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Send Imp to attack",
      "Immolate -> Corruption -> Shoot Wand",
      "Tap Life Tap once per mob to convert health to mana",
      "Bandage or eat between combat to stay topped"
    ],
    "gearTip": "Look for 'Of the Eagle' (Int + Stam) or 'Of the Owl' (Int + Spirit) cloth pieces.",
    "dungeonGear": []
  },
  "7": {
    "title": "Garren's Haunt & Fields of Tirisfal",
    "zone": "Tirisfal Glades (Brill)",
    "zoneRange": "6-10",
    "hubs": "Brill",
    "zoneInstructions": "Head east to Garren's Haunt for 'A Putrid Task' and kill Rotting Dead and Ravaged Corpse. Collect Putrid Claws. Be cautious of wandering Son of Arugal (level 24 elite roaming nearby silverpine border).",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Immolate -> Wand. Use Life Tap while moving."
    ],
    "gearTip": "Check corpse drops for green cloth gear and wand upgrades.",
    "dungeonGear": []
  },
  "8": {
    "title": "Bane of Agony & Fear Acquired!",
    "zone": "Tirisfal Glades (Brill)",
    "zoneRange": "6-10",
    "hubs": "Brill",
    "zoneInstructions": "Visit Luther Pickman (Warlock Trainer) in Brill. Train Bane of Agony (Rank 1) and Fear (Rank 1)—your ultimate crowd control tool. Pick up 'The Haunted Mills' and 'At War with the Scarlet Crusade'.",
    "talent": null,
    "talentNote": "Talents unlock at Level 10.",
    "trainerTrain": [
      "Bane of Agony (Rank 1)",
      "Fear (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Immolate -> Bane of Agony -> Corruption",
      "Cast Fear if mob reaches melee range or if you pull two mobs",
      "Wand down the feared target safely!"
    ],
    "gearTip": "Keep your Wand equipped and stay topped on Food/Water before venturing into Agamand Mills.",
    "dungeonGear": []
  },
  "9": {
    "title": "Agamand Mills & Scarlet Crusade Camp",
    "zone": "Tirisfal Glades (Agamand Mills)",
    "zoneRange": "6-10",
    "hubs": "Brill",
    "zoneInstructions": "Head northwest to Agamand Mills. Kill Vicious Night Web Spiders and Scarlet Converts / Initiates for Captain Perrine. Gather Devlin's Remains. Prepare your gold and reagents for Level 10!",
    "talent": null,
    "talentNote": "First talent point at Level 10! You will choose Improved Corruption.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Bane of Agony -> Corruption -> Immolate -> Wand. Use Fear if adds join."
    ],
    "gearTip": "Sell grays in Brill and prepare 10 silver for trainer skills and grimoires.",
    "dungeonGear": []
  },
  "10": {
    "title": "VOIDWALKER UNLOCKED & IMPROVED CORRUPTION (1/5)",
    "zone": "Tirisfal Glades (Brill) -> The Barrens / Silverpine",
    "zoneRange": "10-15",
    "hubs": "Brill, Undercity",
    "zoneInstructions": "MAJOR MILESTONE! Visit Luther Pickman in Brill to accept 'The Binding' (Voidwalker Class Quest). Travel to the ruined tower in northern Tirisfal, defeat the summoned Voidwalker, and bind it to your will! Now you have a personal tank minion with Taunt (Torment) and Sacrifice shield!",
    "talent": {
      "name": "Improved Corruption",
      "rank": "1/5",
      "tree": "affliction",
      "why": "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)."
    },
    "talentNote": "Start of Affliction Mastery. Instant Corruption is the foundation of Warlock leveling.",
    "trainerTrain": [
      "Create Healthstone (Minor)",
      "Summon Voidwalker (Quest)",
      "Drain Soul (Rank 1)",
      "Demon Skin (Rank 2)",
      "Immolate (Rank 2)",
      "Health Funnel (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Order Voidwalker to attack (Torment grabs aggro)",
      "Bane of Agony -> Corruption -> Immolate",
      "Shoot Wand while Voidwalker tanks",
      "Cast Drain Soul when mob reaches 10% HP to harvest a Soul Shard!"
    ],
    "gearTip": "Create Minor Healthstone before every combat run for an instant emergency heal. Keep 4-8 Soul Shards ready for pet summons.",
    "dungeonGear": [
      {
        "name": "Staff of the Blessed",
        "quality": "uncommon",
        "source": "Tirisfal Glades Quest",
        "stats": "+4 Intellect, +2 Spirit",
        "tip": "Solid starter caster staff."
      }
    ]
  },
  "11": {
    "title": "Silverpine Incursion & Improved Corruption (2/5)",
    "zone": "Silverpine Forest (The Sepulcher)",
    "zoneRange": "10-15",
    "hubs": "The Sepulcher (Flight Master Karos, Innkeeper)",
    "zoneInstructions": "Head south into Silverpine Forest and reach The Sepulcher. Grab the flight path! Pick up 'Proudfang / Moonrage Whitescalp' quests. Watch out for wandering Arugal's pets.",
    "talent": {
      "name": "Improved Corruption",
      "rank": "2/5",
      "tree": "affliction",
      "why": "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)."
    },
    "talentNote": "Corruption cast is noticeably faster.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Voidwalker Torment -> Agony -> Corruption -> Immolate -> Wand."
    ],
    "gearTip": "Keep Voidwalker's Torment at maximum rank from the Demon Trainer in Undercity.",
    "dungeonGear": []
  },
  "12": {
    "title": "Silverpine Crypts & Improved Corruption (3/5)",
    "zone": "Silverpine Forest (The Sepulcher)",
    "zoneRange": "10-15",
    "hubs": "The Sepulcher",
    "zoneInstructions": "Travel to Pyrewood Village border and kill Moonrage Worgen. Train Life Tap (Rank 2) and Corruption (Rank 2) at the Warlock Trainer in Undercity (Magic Quarter).",
    "talent": {
      "name": "Improved Corruption",
      "rank": "3/5",
      "tree": "affliction",
      "why": "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)."
    },
    "talentNote": "Corruption is almost instant.",
    "trainerTrain": [
      "Curse of Weakness (Rank 2)",
      "Shadow Bolt (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Voidwalker attacks -> Agony -> Corruption -> Wand -> Life Tap -> First Aid bandage."
    ],
    "gearTip": "Check weapon vendors in Undercity for off-hand books with intellect.",
    "dungeonGear": []
  },
  "13": {
    "title": "Greater Magic Wand Leap & Improved Corruption (4/5)",
    "zone": "Silverpine Forest -> The Barrens (Crossroads)",
    "zoneRange": "10-15",
    "hubs": "The Crossroads (The Barrens)",
    "zoneInstructions": "Take the Zeppelin from Brill to Durotar, then walk west to The Crossroads in The Barrens! CRUCIAL: Acquire a Greater Magic Wand (req lvl 13, 17.5 DPS). This wand single-handedly obliterates mobs in seconds without spending any mana!",
    "talent": {
      "name": "Improved Corruption",
      "rank": "4/5",
      "tree": "affliction",
      "why": "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)."
    },
    "talentNote": "One more point until full instant-cast Corruption!",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Voidwalker Torment -> Agony -> Corruption -> Drain Life or Shoot Greater Magic Wand!",
      "Greater Magic Wand deals 17.5 DPS for 0 mana!"
    ],
    "gearTip": "🔥 GREATER MAGIC WAND: 17.5 Arcane DPS. Craft via Enchanting (75) or purchase on AH.",
    "dungeonGear": [
      {
        "name": "Greater Magic Wand",
        "quality": "uncommon",
        "source": "Enchanting (75) / AH",
        "stats": "17.5 DPS, Arcane, Speed 1.30",
        "tip": "Huge DPS leap for Warlock leveling!"
      }
    ]
  },
  "14": {
    "title": "INSTANT CORRUPTION UNLOCKED (5/5) & Barrens Quests",
    "zone": "The Barrens (The Crossroads)",
    "zoneRange": "10-15",
    "hubs": "The Crossroads",
    "zoneInstructions": "GAME CHANGER! Improved Corruption reaches 5/5, making Corruption 100% INSTANT CAST! Now you can tag mobs, kite, and cast DoTs on the run without stopping. Pick up 'Disrupt the Attacks', 'The Forgotten Pools', and 'Plainstrider Menace'.",
    "talent": {
      "name": "Improved Corruption",
      "rank": "5/5",
      "tree": "affliction",
      "why": "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)."
    },
    "talentNote": "The single biggest quality-of-life milestone for Warlock leveling.",
    "trainerTrain": [
      "Corruption (Rank 2)",
      "Drain Life (Rank 1)",
      "Curse of Recklessness (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Cast instant Corruption while running toward mob",
      "Voidwalker charges in and Torments",
      "Apply Bane of Agony instantly",
      "Wand with Greater Magic Wand -> Mob dies -> Life Tap -> Keep running!"
    ],
    "gearTip": "Look for 'Of the Eagle' cloth robes and pants.",
    "dungeonGear": []
  },
  "15": {
    "title": "Improved Drain Soul (1/2) & Barrens Oases",
    "zone": "The Barrens (The Crossroads)",
    "zoneRange": "15-20",
    "hubs": "The Crossroads",
    "zoneInstructions": "Investigate The Forgotten Pools and The Lushwater Oasis for Apothecary Helbrim. Kill Oasis Snapjaws and Centaur. Drain Soul right as the mob dies to trigger mana regen.",
    "talent": {
      "name": "Improved Drain Soul",
      "rank": "1/2",
      "tree": "affliction",
      "why": "Gives a 50% / 100% increase to mana regeneration for 10 sec after killing a target while channeling Drain Soul."
    },
    "talentNote": "Combines with Life Tap to give zero downtime.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Agony -> Wand -> Channel Drain Soul on final 5% HP."
    ],
    "gearTip": "First Aid: Keep your bandages updated to Thick Linen or Silk.",
    "dungeonGear": []
  },
  "16": {
    "title": "100% MANA REGEN ON KILL (2/2) & Samophlange",
    "zone": "The Barrens (The Crossroads & Sludge Fen)",
    "zoneRange": "15-20",
    "hubs": "The Crossroads, Ratchet",
    "zoneInstructions": "Improved Drain Soul hits 2/2! Killing an enemy while channeling Drain Soul gives +100% mana regeneration and allows 50% mana regen to continue while casting for 10 seconds! Complete 'The Samophlange' chain at the Venture Co. oil rig in Sludge Fen.",
    "talent": {
      "name": "Improved Drain Soul",
      "rank": "2/2",
      "tree": "affliction",
      "why": "Gives a 50% / 100% increase to mana regeneration for 10 sec after killing a target while channeling Drain Soul."
    },
    "talentNote": "Always finish mobs with Drain Soul to refill your mana bar automatically.",
    "trainerTrain": [
      "Life Tap (Rank 2)",
      "Unending Breath"
    ],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Bane of Agony",
      "Wand down to 10% health",
      "Cast Drain Soul -> Mob dies -> Mana bar surges back to full!"
    ],
    "gearTip": "Necrology Robes or Burlap Vest of the Eagle.",
    "dungeonGear": []
  },
  "17": {
    "title": "Improved Life Tap (1/2) & Ratchet Quests",
    "zone": "The Barrens (Ratchet & South Barrens)",
    "zoneRange": "15-20",
    "hubs": "Ratchet (Gazlowe, Flight Master)",
    "zoneInstructions": "Head to Ratchet and grab the Flight Path. Complete 'Raptor Horns', 'Southsea Freebooters', and 'The Guns of Northwatch'.",
    "talent": {
      "name": "Improved Life Tap",
      "rank": "1/2",
      "tree": "affliction",
      "why": "Increases the mana awarded by your Life Tap spell by 10% / 20%."
    },
    "talentNote": "Makes your health-to-mana conversion much more efficient.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Agony -> Wand -> Drain Soul finisher -> Life Tap."
    ],
    "gearTip": "Check Ratchet vendors for upgraded bags (8-slot / 10-slot).",
    "dungeonGear": []
  },
  "18": {
    "title": "Improved Life Tap (2/2) & Wailing Caverns Pre-Quests",
    "zone": "The Barrens (Wailing Caverns & Camp Taurajo)",
    "zoneRange": "15-20",
    "hubs": "The Crossroads, Camp Taurajo",
    "zoneInstructions": "Max out Improved Life Tap (+20% mana conversion). Pick up Wailing Caverns quests: 'Leaders of the Fang', 'Deviate Hides', and 'Smart Drinks'. Optionally run Wailing Caverns for Robe of the Moccasin and Deviate Scale Belt.",
    "talent": {
      "name": "Improved Life Tap",
      "rank": "2/2",
      "tree": "affliction",
      "why": "Increases the mana awarded by your Life Tap spell by 10% / 20%."
    },
    "talentNote": "Life Tap is now a supercharged mana battery.",
    "trainerTrain": [
      "Create Soulstone (Minor)",
      "Bane of Agony (Rank 2)",
      "Searing Pain (Rank 1)",
      "Drain Soul (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Bane of Agony -> Wand -> Drain Soul -> Life Tap."
    ],
    "gearTip": "Look for high Stamina pieces—every point of Stamina translates to more mana via Life Tap!",
    "dungeonGear": [
      {
        "name": "Robe of the Moccasin",
        "quality": "uncommon",
        "source": "Lord Cobrahn (Wailing Caverns)",
        "stats": "+6 Spirit, +3 Intellect",
        "tip": "Great caster robe from early dungeon run."
      }
    ]
  },
  "19": {
    "title": "Fel Concentration (1/5) & Wailing Caverns Finale",
    "zone": "The Barrens (Camp Taurajo)",
    "zoneRange": "15-20",
    "hubs": "Camp Taurajo (Flight Master)",
    "zoneInstructions": "Kill Thunderhawks and Bristleback Quilboars around Camp Taurajo. Complete 'Tribal Warfare' and 'Betrayal from Within'. Prepare for your Level 20 Succubus class quest!",
    "talent": {
      "name": "Suppression",
      "rank": "1/5",
      "tree": "affliction",
      "why": "Reduces the chance for enemies to resist your Affliction spells by 2% to 10%."
    },
    "talentNote": "Building toward 70% pushback immunity so you can Drain Tank in melee range.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Agony -> Wand -> Drain Soul finisher."
    ],
    "gearTip": "Save Silk Cloth and Wool Cloth for tailoring/bandages.",
    "dungeonGear": []
  },
  "20": {
    "title": "SUCCUBUS UNLOCKED & FEL CONCENTRATION (2/5)",
    "zone": "The Barrens -> Silverpine -> Undercity",
    "zoneRange": "20-25",
    "hubs": "Brill / Undercity / The Crossroads",
    "zoneInstructions": "MAJOR MILESTONE! Pick up 'Devourer of Souls' (Succubus Class Quest) from Caretaker Caice in Undercity or The Crossroads. Travel to the Silverpine hills and the wetlands of the Barrens to collect the Hearts of Wood. Summon and defeat the Succubus to bind her! The Succubus brings high DPS, Seduction CC, and Lash of Pain!",
    "talent": {
      "name": "Fel Concentration",
      "rank": "1/5",
      "tree": "affliction",
      "why": "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana."
    },
    "talentNote": "Succubus provides incredible single-target leveling DPS.",
    "trainerTrain": [
      "Demon Armor (Rank 1)",
      "Summon Succubus (Quest)",
      "Ritual of Summoning",
      "Shadow Bolt (Rank 4)",
      "Immolate (Rank 3)",
      "Health Funnel (Rank 2)",
      "Rain of Fire (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Send Succubus in with Lash of Pain (huge damage burst)",
      "Instant Corruption -> Bane of Agony",
      "Channel Drain Life or Shoot Wand",
      "Finish with Drain Soul for mana refund"
    ],
    "gearTip": "Greater Magic Wand remains excellent, but keep an eye out for Shadowfang Keep caster drops.",
    "dungeonGear": [
      {
        "name": "Robes of Arugal",
        "quality": "rare",
        "source": "Baron Silverlaine / Arugal (SFK)",
        "stats": "+10 Intellect, +5 Spirit, +3 Agility",
        "tip": "🔥 Best caster robe until your 30s!"
      }
    ]
  },
  "21": {
    "title": "Stonetalon Mountains Foot & Fel Concentration (3/5)",
    "zone": "Stonetalon Mountains (Sun Rock Retreat)",
    "zoneRange": "20-25",
    "hubs": "Sun Rock Retreat (Flight Master)",
    "zoneInstructions": "Travel west from The Barrens into Stonetalon Mountains. Grab the Flight Path at Sun Rock Retreat. Complete 'Avenge My Village' and kill Grimtotem Tauren.",
    "talent": {
      "name": "Fel Concentration",
      "rank": "2/5",
      "tree": "affliction",
      "why": "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana."
    },
    "talentNote": "Channeling Drain Life under attack becomes noticeably smoother.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Succubus attacks -> Instant Corruption -> Agony -> Drain Life -> Wand."
    ],
    "gearTip": "Look for 'Of Shadow Wrath' gear (+Shadow Spell Damage). It scales every single tick of Corruption and Drain Life!",
    "dungeonGear": []
  },
  "22": {
    "title": "Hillsbrad Foothills & Fel Concentration (4/5)",
    "zone": "Hillsbrad Foothills (Tarren Mill)",
    "zoneRange": "20-25",
    "hubs": "Tarren Mill (Flight Master, Inn)",
    "zoneInstructions": "Fly to The Sepulcher and run east into Hillsbrad Foothills! Reach Tarren Mill and secure the Flight Path. Pick up 'The Battle for Hillsbrad' (Town Hall & Farmers) and 'Elixir of Suffering'.",
    "talent": {
      "name": "Fel Concentration",
      "rank": "3/5",
      "tree": "affliction",
      "why": "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana."
    },
    "talentNote": "Almost immune to spell pushback.",
    "trainerTrain": [
      "Create Healthstone (Lesser)",
      "Drain Life (Rank 2)",
      "Curse of Tongues (Rank 1)",
      "Eye of Kilrogg",
      "Curse of Weakness (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Agony -> Drain Life directly tanking mobs in face."
    ],
    "gearTip": "Check Tarren Mill vendors for high stamina cloth gear.",
    "dungeonGear": []
  },
  "23": {
    "title": "70% PUSHBACK RESISTANCE (5/5) - DRAIN TANK ONLINE!",
    "zone": "Hillsbrad Foothills (Tarren Mill)",
    "zoneRange": "20-25",
    "hubs": "Tarren Mill",
    "zoneInstructions": "MAX FEL CONCENTRATION! You now have a 70% chance to resist pushback while channeling Drain Life. Mobs hitting you in melee will rarely interrupt your heal-drain! You can now face-tank enemies comfortably.",
    "talent": {
      "name": "Fel Concentration",
      "rank": "4/5",
      "tree": "affliction",
      "why": "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana."
    },
    "talentNote": "Drain TANK playstyle is officially online. You heal through mob damage while dealing shadow damage.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Bane of Agony",
      "Face tank the mob while channeling Drain Life",
      "Drain Life heals you for all damage taken",
      "Finish with Drain Soul -> Life Tap back to full mana!"
    ],
    "gearTip": "Shadow Spell Damage pieces make Drain Life heal for more!",
    "dungeonGear": []
  },
  "24": {
    "title": "Amplify Curse (1/1) & Hillsbrad Fields",
    "zone": "Hillsbrad Foothills (Tarren Mill)",
    "zoneRange": "20-25",
    "hubs": "Tarren Mill",
    "zoneInstructions": "Complete 'The Battle for Hillsbrad' part 1 and 2 at Hillsbrad Fields. Kill Hillsbrad Farmers, Clerics, and Miners. Train Life Tap (Rank 4) and Corruption (Rank 4) in Undercity.",
    "talent": {
      "name": "Fel Concentration",
      "rank": "5/5",
      "tree": "affliction",
      "why": "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana."
    },
    "talentNote": "Use Amplify Curse on tough elites or named quest targets.",
    "trainerTrain": [
      "Corruption (Rank 3)",
      "Drain Mana (Rank 1)",
      "Life Tap (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Amplify Curse + Bane of Agony -> Instant Corruption -> Drain Life -> Wand."
    ],
    "gearTip": "Shadowfang Keep drop: Robes of Arugal or Necrology Robes.",
    "dungeonGear": []
  },
  "25": {
    "title": "Nightfall (1/2) & Thousand Needles Arrival",
    "zone": "Thousand Needles (Freewind Post)",
    "zoneRange": "25-30",
    "hubs": "Freewind Post (Flight Master, Innkeeper)",
    "zoneInstructions": "Head south through The Barrens into Thousand Needles! Climb the elevator and reach Freewind Post on top of the canyon needle. Grab the Flight Path! Pick up 'Alien Egg', 'Wind Rider', and 'A Different Approach'.",
    "talent": {
      "name": "Amplify Curse",
      "rank": "1/1",
      "tree": "affliction",
      "why": "Increases the effect of your next Bane of Agony by 50% or Curse of Exhaustion by 20% on a 3 min cooldown."
    },
    "talentNote": "Free instant Shadow Bolts will start proccing randomly during fights.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Bane of Agony -> Drain Life",
      "Watch for Nightfall 'Shadow Trance' buff -> Immediately fire INSTANT SHADOW BOLT!"
    ],
    "gearTip": "Freewind Post quests reward solid leather/cloth and green rings.",
    "dungeonGear": []
  },
  "26": {
    "title": "NIGHTFALL (2/2) & Gravestone Scepter Prep",
    "zone": "Thousand Needles & Ashenvale (Splintertree Post)",
    "zoneRange": "25-30",
    "hubs": "Freewind Post, Splintertree Post",
    "zoneInstructions": "Max out Nightfall to 2/2 (4% proc chance per tick). With Corruption and Drain Life ticking simultaneously, Nightfall procs frequently! Pick up 'Blackfathom Villainy' for Blackfathom Deeps—the quest reward is the legendary GRAVESTONE SCEPTER (29.0 DPS Shadow Wand!).",
    "talent": {
      "name": "Nightfall",
      "rank": "1/2",
      "tree": "affliction",
      "why": "Gives your Corruption and Drain Life ticks a 2% / 4% chance to grant an instant-cast Shadow Bolt."
    },
    "talentNote": "Nightfall procs make combat feel incredibly dynamic and fast.",
    "trainerTrain": [
      "Demon Armor (Rank 2)",
      "Curse of Recklessness (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Agony -> Drain Life -> INSTANT Shadow Bolt on proc!"
    ],
    "gearTip": "🔥 TARGET ITEM: Gravestone Scepter (BFD quest: Blackfathom Villainy). Best wand in the entire 20-40 bracket!",
    "dungeonGear": [
      {
        "name": "Gravestone Scepter",
        "quality": "rare",
        "source": "Quest: Blackfathom Villainy (BFD)",
        "stats": "29.0 DPS, Shadow Damage, Speed 1.50, +5 Shadow Res",
        "tip": "👑 The legendary leveling wand! Carries you all the way to level 45!"
      }
    ]
  },
  "27": {
    "title": "Grim Reach (1/2) & Shimmering Flats Entrance",
    "zone": "Thousand Needles (Freewind Post)",
    "zoneRange": "25-30",
    "hubs": "Freewind Post",
    "zoneInstructions": "Clear the Galak Centaur camps in the Thousand Needles basin. Complete 'Assault on Freewind Post'. Turn in 'Alien Egg'.",
    "talent": {
      "name": "Nightfall",
      "rank": "2/2",
      "tree": "affliction",
      "why": "Gives your Corruption and Drain Life ticks a 2% / 4% chance to grant an instant-cast Shadow Bolt."
    },
    "talentNote": "Extra range gives more time to tag mobs before they reach you.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Tag from 33 yards with Instant Corruption -> Agony -> Drain Life."
    ],
    "gearTip": "Ensure your bags have 8-10 Soul Shards for dungeon groups or elite quests.",
    "dungeonGear": []
  },
  "28": {
    "title": "Grim Reach (2/2) & Tarren Mill Syndicate",
    "zone": "Hillsbrad Foothills (Syndicate Camps)",
    "zoneRange": "25-30",
    "hubs": "Tarren Mill",
    "zoneInstructions": "Travel back to Hillsbrad Foothills. Clear Durnholde Keep and the Syndicate camps for 'The Battle for Hillsbrad' finale and 'Prison Break in Durnholde'.",
    "talent": {
      "name": "Grim Reach",
      "rank": "1/2",
      "tree": "affliction",
      "why": "Increases the range of your Affliction spells by 10% / 20% (up to 36 yards)."
    },
    "talentNote": "36-yard Corruption and Agony range lets you pull from safe distances.",
    "trainerTrain": [
      "Banish (Rank 1)",
      "Bane of Agony (Rank 3)",
      "Shadow Bolt (Rank 5)",
      "Create Firestone (Lesser)",
      "Create Soulstone (Lesser)",
      "Immolate (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "36yd Corruption -> 36yd Agony -> Drain Life -> Instant Shadow Bolt on Nightfall proc."
    ],
    "gearTip": "Silk bandages from First Aid (150) heal for 400 HP over 8 sec.",
    "dungeonGear": []
  },
  "29": {
    "title": "Improved Drain Life (1/5) & Level 30 Preparation",
    "zone": "Thousand Needles (Mirage Raceway)",
    "zoneRange": "25-30",
    "hubs": "Mirage Raceway (Shimmering Flats)",
    "zoneInstructions": "Head east into the Shimmering Flats! Grab the quests at the Gnomish and Goblin race track: 'Rocket Car Parts', 'Salt Flat Venom', and 'Hardened Shells'. Prepare for Level 30 Felhunter quest!",
    "talent": {
      "name": "Grim Reach",
      "rank": "2/2",
      "tree": "affliction",
      "why": "Increases the range of your Affliction spells by 10% / 20% (up to 36 yards)."
    },
    "talentNote": "Next level is Siphon Life—the crown jewel of Affliction leveling!",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Bane of Agony -> Drain Life -> Drain Soul on kill."
    ],
    "gearTip": "Sell full bags at Mirage Raceway vendor.",
    "dungeonGear": []
  },
  "30": {
    "title": "SIPHON LIFE UNLOCKED (1/1) & FELHUNTER MINION!",
    "zone": "Thousand Needles -> Ratchet -> Undercity",
    "zoneRange": "30-35",
    "hubs": "Freewind Post, Mirage Raceway, Undercity",
    "zoneInstructions": "MASSIVE MILESTONE! 1) Train SIPHON LIFE—a permanent 30-second heal-over-time that damages the enemy while continually healing you! 2) Accept 'Tome of the Cabal' (Felhunter Class Quest) from Mennet Carkiek in Undercity. Travel to Ratchet, Hillsbrad, and Thousand Needles to gather the pages and summon your Felhunter (magic devourer and caster slayer)!",
    "talent": {
      "name": "Siphon Life",
      "rank": "1/1",
      "tree": "affliction",
      "why": "Transfers health from the target to the caster every 3 sec for 30 sec. Foundation of Affliction soloing."
    },
    "talentNote": "Your DoT trifecta is now complete: Corruption + Bane of Agony + Siphon Life!",
    "trainerTrain": [
      "Summon Felhunter (Quest)",
      "Enslave Demon (Rank 1)",
      "Drain Life (Rank 3)",
      "Drain Soul (Rank 3)",
      "Hellfire (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Instant Corruption -> Siphon Life -> Bane of Agony (all 3 DoTs ticking!)",
      "Channel Drain Life -> Double healing incoming!",
      "Health stays near 100% while mob melts",
      "Life Tap to full mana -> Next mob immediately!"
    ],
    "gearTip": "Shadow Damage gear makes Siphon Life tick for massive healing numbers.",
    "dungeonGear": [
      {
        "name": "Hypnotic Blade",
        "quality": "rare",
        "source": "Scarlet Monastery (Library)",
        "stats": "+8 Intellect, +3 Spirit, +9 Spell Damage",
        "tip": "Incredible caster one-hand dagger."
      }
    ]
  },
  "31": {
    "title": "Shadow Mastery (1/5) & Shimmering Flats Speedrun",
    "zone": "Thousand Needles (Shimmering Flats)",
    "zoneRange": "30-35",
    "hubs": "Mirage Raceway",
    "zoneInstructions": "The Shimmering Flats is the single best solo grinding zone in the game! Mobs are densely packed turtles, basilisks, and scorpids with no line of sight obstructions. Dot 2-3 mobs simultaneously and let Siphon Life heal you through everything!",
    "talent": {
      "name": "Improved Drain Life",
      "rank": "1/5",
      "tree": "affliction",
      "why": "Increases the health drained by your Drain Life spell by 2% to 10%."
    },
    "talentNote": "Shadow Mastery increases damage AND healing of all shadow abilities.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Multi-dot: Dot Mob A (Corruption + Siphon + Agony), Dot Mob B, Drain Life Mob A."
    ],
    "gearTip": "Heavy Silk Bandages heal for 640 HP.",
    "dungeonGear": []
  },
  "32": {
    "title": "Shadow Mastery (2/5) & Arathi Highlands Arrival",
    "zone": "Arathi Highlands (Hammerfall)",
    "zoneRange": "30-35",
    "hubs": "Hammerfall (Flight Master, Innkeeper)",
    "zoneInstructions": "Travel east from Tarren Mill across the bridge into Arathi Highlands. Secure the Hammerfall Flight Path. Pick up 'Hammerfall', 'Foul Magics', and 'Sigil of Stromgarde'.",
    "talent": {
      "name": "Improved Drain Life",
      "rank": "2/5",
      "tree": "affliction",
      "why": "Increases the health drained by your Drain Life spell by 2% to 10%."
    },
    "talentNote": "Both your damage and healing increase by 4%.",
    "trainerTrain": [
      "Curse of the Elements (Rank 1)",
      "Fear (Rank 2)",
      "Shadow Ward (Rank 1)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Instant Shadow Bolt on proc."
    ],
    "gearTip": "Look for 'Of Shadow Wrath' shoulders and belts.",
    "dungeonGear": []
  },
  "33": {
    "title": "Shadow Mastery (3/5) & Desolace (Ghost Walker Post)",
    "zone": "Desolace (Ghost Walker Post / Shadowprey)",
    "zoneRange": "30-35",
    "hubs": "Ghost Walker Post, Shadowprey Village",
    "zoneInstructions": "Travel west from Stonetalon into Desolace. Grab Ghost Walker Post and Shadowprey Village flight paths. Complete 'Gelkis Alliance' (kill Magram centaur) and 'Bone Collector'.",
    "talent": {
      "name": "Improved Drain Life",
      "rank": "3/5",
      "tree": "affliction",
      "why": "Increases the health drained by your Drain Life spell by 2% to 10%."
    },
    "talentNote": "6% shadow damage bonus active across all abilities.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Multi-dot centaur camps with Siphon Life + Corruption."
    ],
    "gearTip": "Shadowprey Village has fishing vendors and fish quests.",
    "dungeonGear": []
  },
  "34": {
    "title": "Shadow Mastery (4/5) & Stranglethorn Vale Landing",
    "zone": "Stranglethorn Vale (Grom'gol Base Camp)",
    "zoneRange": "30-35",
    "hubs": "Grom'gol Base Camp (Zeppelin to Undercity/Orgrimmar)",
    "zoneInstructions": "Take the Zeppelin from Undercity directly to Grom'gol Base Camp in Stranglethorn Vale! Grab the Flight Path. Pick up 'Welcome to the Jungle', 'Bloodscalp Ears', and 'Hunt for Yenniku'.",
    "talent": {
      "name": "Improved Drain Life",
      "rank": "4/5",
      "tree": "affliction",
      "why": "Increases the health drained by your Drain Life spell by 2% to 10%."
    },
    "talentNote": "Only 1 point away from full +10% Shadow Mastery!",
    "trainerTrain": [
      "Create Healthstone (Rank 3)",
      "Corruption (Rank 4)",
      "Searing Pain (Rank 2)",
      "Rain of Fire (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Wand."
    ],
    "gearTip": "Keep PvP trinket or healthstone ready on Grom'gol's contested roads.",
    "dungeonGear": []
  },
  "35": {
    "title": "10% SHADOW MASTERY (5/5) & Nesingwary Camp",
    "zone": "Stranglethorn Vale (Nesingwary Expedition)",
    "zoneRange": "35-40",
    "hubs": "Grom'gol, Nesingwary's Camp",
    "zoneInstructions": "MAX SHADOW MASTERY! All Shadow spells (Corruption, Drain Life, Siphon Life, Agony, Shadow Bolt) deal +10% MORE DAMAGE! Complete the Tiger, Panther, and Raptor mastery hunting quests at Nesingwary's camp.",
    "talent": {
      "name": "Shadow Mastery",
      "rank": "1/5",
      "tree": "affliction",
      "why": "Increases the damage dealt by your Shadow spells or effects by 2% to 10%."
    },
    "talentNote": "Affliction damage scaling reaches peak efficiency.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Full 10% boosted DoTs: Siphon Life + Corruption + Agony -> Drain Life face tank!"
    ],
    "gearTip": "Robes of Arugal or Robe of the Lich (from Razorfen Downs).",
    "dungeonGear": [
      {
        "name": "Robe of the Lich",
        "quality": "rare",
        "source": "Razorfen Downs (Amnennar)",
        "stats": "+20 Stamina, +14 Shadow Spell Damage",
        "tip": "⭐ Incredible leveling robe for Affliction Warlocks!"
      }
    ]
  },
  "36": {
    "title": "Demonic Embrace (1/5) & Badlands Incursion",
    "zone": "Badlands (Kargath)",
    "zoneRange": "35-40",
    "hubs": "Kargath (Flight Master, Inn)",
    "zoneInstructions": "Take the flight to Hammerfall and run south through Loch Modan into the Badlands! Reach Kargath and claim the Flight Path. Pick up 'Badlands Reagents' and 'Mirages'.",
    "talent": {
      "name": "Shadow Mastery",
      "rank": "2/5",
      "tree": "affliction",
      "why": "Increases the damage dealt by your Shadow spells or effects by 2% to 10%."
    },
    "talentNote": "Transition into Demonology utility for maximum survivability and Dark Pact synergy.",
    "trainerTrain": [
      "Demon Armor (Rank 3)",
      "Shadow Bolt (Rank 6)",
      "Life Tap (Rank 4)",
      "Drain Mana (Rank 2)",
      "Curse of Weakness (Rank 4)",
      "Create Firestone (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life -> Life Tap."
    ],
    "gearTip": "Kargath vendor sells level 35+ food, water, and reagents.",
    "dungeonGear": []
  },
  "37": {
    "title": "Demonic Embrace (2/5) & Dustbelcher Ogre Caves",
    "zone": "Badlands (Dustbelcher Grotto)",
    "zoneRange": "35-40",
    "hubs": "Kargath",
    "zoneInstructions": "Clear Dustbelcher Ogres and Lesser Rock Elementals in the Badlands for Lotwil Veriatus. Farm Solid Stone and Elemental Earth (sells for big gold on AH!).",
    "talent": {
      "name": "Shadow Mastery",
      "rank": "3/5",
      "tree": "affliction",
      "why": "Increases the damage dealt by your Shadow spells or effects by 2% to 10%."
    },
    "talentNote": "Your health pool grows rapidly, giving larger Life Tap pools.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life face-tank."
    ],
    "gearTip": "Elemental Earth from rock elementals is valuable—hold for AH sale.",
    "dungeonGear": []
  },
  "38": {
    "title": "Demonic Embrace (3/5) & Swamp of Sorrows",
    "zone": "Swamp of Sorrows (Stonard)",
    "zoneRange": "35-40",
    "hubs": "Stonard (Flight Master)",
    "zoneInstructions": "Head to Stonard in Swamp of Sorrows. Grab the Flight Path. Complete 'Fall Savage' and kill Swamp Jaguars and Sorrow Spinners.",
    "talent": {
      "name": "Shadow Mastery",
      "rank": "4/5",
      "tree": "affliction",
      "why": "Increases the damage dealt by your Shadow spells or effects by 2% to 10%."
    },
    "talentNote": "+9% total Stamina makes you deceptively tanky against gankers.",
    "trainerTrain": [
      "Create Soulstone (Rank 3)",
      "Bane of Agony (Rank 4)",
      "Drain Life (Rank 4)",
      "Immolate (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "DoT trifecta -> Drain Life -> Nightfall Shadow Bolt procs."
    ],
    "gearTip": "Stonard innkeeper and flight path make Swamp of Sorrows easy to traverse.",
    "dungeonGear": []
  },
  "39": {
    "title": "Demonic Embrace (4/5) & Preparation for Mount!",
    "zone": "Stranglethorn Vale (Grom'gol & Bloodscalp Ruins)",
    "zoneRange": "35-40",
    "hubs": "Grom'gol Base Camp",
    "zoneInstructions": "Return to Grom'gol and finish Bloodscalp Ruins quests. Gather 90 silver (Warlock mount is practically FREE at trainer!). Level 40 is right around the corner!",
    "talent": {
      "name": "Shadow Mastery",
      "rank": "5/5",
      "tree": "affliction",
      "why": "Increases the damage dealt by your Shadow spells or effects by 2% to 10%."
    },
    "talentNote": "Get ready for Level 40: Free Felsteed Mount + Dark Pact capstone!",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life."
    ],
    "gearTip": "Prepare to visit Undercity / Orgrimmar Warlock Trainer at 40.",
    "dungeonGear": []
  },
  "40": {
    "title": "FELSTEED FREE MOUNT & DARK PACT (1/1) - INFINITE MANA!",
    "zone": "Undercity / Orgrimmar -> Tanaris (Gadgetzan)",
    "zoneRange": "40-45",
    "hubs": "Undercity, Gadgetzan",
    "zoneInstructions": "THE ULTIMATE WARLOCK MILESTONE! 1) Learn 'Summon Felsteed' directly from your Warlock trainer—A FREE 60% MOUNT! No 100 gold cost like other classes! 2) Learn DARK PACT (Affliction 31-point capstone)! Dark Pact instantly drains 150 mana from your summoned demon and transfers it directly to you! Keep your Imp or Succubus out, and you have INFINITE MANA without spending health or drinking water ever again!",
    "talent": {
      "name": "Dark Pact",
      "rank": "1/1",
      "tree": "affliction",
      "why": "Drains 150-300 mana from your summoned demon and transfers it directly to you. Eliminates mana downtime."
    },
    "talentNote": "God-mode leveling is active. You literally never have to stop or sit down.",
    "trainerTrain": [
      "Howl of Terror (Rank 1)",
      "Summon Felsteed (FREE Mount!)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Keep Succubus or Imp on Passive with max mana",
      "Tag mob with Instant Corruption + Siphon Life + Agony",
      "Face-tank with Drain Life -> Mob dies",
      "Tap Dark Pact 2-3 times -> Pet gives you all its mana back -> Immediately pull next mob!"
    ],
    "gearTip": "Mount increases questing and travel speed by 60%! Head immediately to Tanaris (Gadgetzan).",
    "dungeonGear": [
      {
        "name": "Spellshock Wand",
        "quality": "rare",
        "source": "World Drop / AH",
        "stats": "48.8 DPS, Arcane Damage",
        "tip": "Superb wand upgrade around level 40-45."
      }
    ]
  },
  "41": {
    "title": "Demonic Embrace (5/5) & Tanaris (Gadgetzan)",
    "zone": "Tanaris (Gadgetzan)",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan (Flight Master, Neutral City)",
    "zoneInstructions": "Ride your fiery Felsteed into Gadgetzan! Pick up 'WANTED: Caliph Scorpidsting', 'Water Pouch Bounty', and 'Wastewander Justice'. Farm Wastewanders in the desert dunes.",
    "talent": {
      "name": "Demonic Embrace",
      "rank": "1/5",
      "tree": "demonology",
      "why": "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%."
    },
    "talentNote": "15% stamina scaling keeps your survivability at raid-tier levels.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact mana from pet."
    ],
    "gearTip": "Water Pouch bounty gives massive XP and gold.",
    "dungeonGear": []
  },
  "42": {
    "title": "Improved Voidwalker (1/3) & Nether Force Wand",
    "zone": "Tanaris (Gadgetzan & Noonshade Ruins)",
    "zoneRange": "40-45",
    "hubs": "Gadgetzan",
    "zoneInstructions": "Complete 'More Wastewander Justice' and farm Dunemaul Ogres. Complete the Tanaris wand quest for the NETHER FORCE WAND (40.5 Shadow DPS!).",
    "talent": {
      "name": "Demonic Embrace",
      "rank": "2/5",
      "tree": "demonology",
      "why": "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%."
    },
    "talentNote": "Sacrifice shield absorbs huge emergency damage if ganked in Tanaris.",
    "trainerTrain": [
      "Death Coil (Rank 1)",
      "Corruption (Rank 5)",
      "Banish (Rank 2)",
      "Curse of Recklessness (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "DoT -> Drain Life -> Nether Force Wand finishes."
    ],
    "gearTip": "Nether Force Wand: 40.5 Shadow DPS!",
    "dungeonGear": [
      {
        "name": "Nether Force Wand",
        "quality": "rare",
        "source": "Tanaris Quest Reward",
        "stats": "40.5 DPS, Shadow Damage",
        "tip": "Massive wand upgrade in Tanaris."
      }
    ]
  },
  "43": {
    "title": "Improved Voidwalker (2/3) & Feralas (Camp Mojache)",
    "zone": "Feralas (Camp Mojache)",
    "zoneRange": "40-45",
    "hubs": "Camp Mojache (Flight Master, Innkeeper)",
    "zoneInstructions": "Travel west through Thousand Needles into Feralas! Reach Camp Mojache and grab the Flight Path. Pick up 'A New Cloak's Sheen', 'Gordunni Cobalt', and 'The Woodpaw Gnolls'.",
    "talent": {
      "name": "Demonic Embrace",
      "rank": "3/5",
      "tree": "demonology",
      "why": "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%."
    },
    "talentNote": "Emergency Voidwalker Sacrifice shield absorbs ~1,000+ damage.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life -> Dark Pact pet mana."
    ],
    "gearTip": "Camp Mojache has leatherworking and tailoring trainers.",
    "dungeonGear": []
  },
  "44": {
    "title": "Improved Voidwalker (3/3) & Hinterlands Arrival",
    "zone": "The Hinterlands (Revantusk Village)",
    "zoneRange": "40-45",
    "hubs": "Revantusk Village (Flight Master on coast)",
    "zoneInstructions": "Take the Zeppelin to Undercity, fly to Tarren Mill, and head northeast through the mountain pass into The Hinterlands! Reach Revantusk Village on the eastern coast. Claim the Flight Path.",
    "talent": {
      "name": "Demonic Embrace",
      "rank": "4/5",
      "tree": "demonology",
      "why": "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%."
    },
    "talentNote": "Sacrifice is now a guaranteed life-saver.",
    "trainerTrain": [
      "Curse of Shadow (Rank 1)",
      "Shadow Bolt (Rank 7)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Full DoTs -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Hinterlands quests reward exceptional blue items for casters.",
    "dungeonGear": []
  },
  "45": {
    "title": "FEL DOMINATION (1/1) - INSTANT PET SUMMON!",
    "zone": "The Hinterlands & Tanaris (Zul'Farrak)",
    "zoneRange": "45-50",
    "hubs": "Revantusk Village, Gadgetzan",
    "zoneInstructions": "HUGE DEFENSIVE TOOL! Fel Domination reduces your next pet summon cast time by 5.5 seconds and its mana cost by 50% on a 15-minute cooldown! If your pet dies or you need an instant Voidwalker Sacrifice shield in PvP/danger, pop Fel Domination and summon in 0.5 seconds flat!",
    "talent": {
      "name": "Demonic Embrace",
      "rank": "5/5",
      "tree": "demonology",
      "why": "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%."
    },
    "talentNote": "Macro: /cast Fel Domination /cast Summon Voidwalker for instant emergency shield.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "DoTs -> Drain Life -> Dark Pact",
      "If in danger: Pop Fel Domination -> Summon Voidwalker -> Pop Sacrifice for 1200 HP shield!"
    ],
    "gearTip": "Zul'Farrak run: Zum'rah's Vexing Cane (+Spell Damage staff).",
    "dungeonGear": [
      {
        "name": "Zum'rah's Vexing Cane",
        "quality": "rare",
        "source": "Witch Doctor Zum'rah (Zul'Farrak)",
        "stats": "+10 Stamina, +21 Shadow Spell Damage",
        "tip": "🔥 Premier Warlock staff from ZF!"
      }
    ]
  },
  "46": {
    "title": "Fel Intellect (1/5) & Searing Gorge",
    "zone": "Searing Gorge (Thorium Point)",
    "zoneRange": "45-50",
    "hubs": "Thorium Point (Flight Master)",
    "zoneInstructions": "Travel to Searing Gorge via the Badlands key gate. Grab Thorium Point flight path. Complete 'STOLEN: Smithing Tuyere and Lookout's Spyglass', 'Incendosaurs? Whatever-osaurs!', and 'The Flawless Flame'.",
    "talent": {
      "name": "Improved Voidwalker",
      "rank": "1/3",
      "tree": "demonology",
      "why": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%."
    },
    "talentNote": "Higher demon mana pool = more mana transferred via Dark Pact.",
    "trainerTrain": [
      "Create Healthstone (Greater)",
      "Create Soulstone (Greater)",
      "Demon Armor (Rank 4)",
      "Drain Life (Rank 5)",
      "Life Tap (Rank 5)",
      "Drain Soul (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Thorium Brotherhood reputation starts here.",
    "dungeonGear": []
  },
  "47": {
    "title": "Fel Intellect (2/5) & Feralas Ruins",
    "zone": "Feralas (Ruins of Ravenwind & Isildien)",
    "zoneRange": "45-50",
    "hubs": "Camp Mojache",
    "zoneInstructions": "Return to Feralas and finish the high-level quests at the Ruins of Ravenwind (Harpies) and Isildien (Ogres). Turn in Gordok scrolls.",
    "talent": {
      "name": "Improved Voidwalker",
      "rank": "2/3",
      "tree": "demonology",
      "why": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%."
    },
    "talentNote": "Pet mana bar grows steadily.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Multi-dot harpies and drain tank."
    ],
    "gearTip": "Vendor gray drops in Camp Mojache.",
    "dungeonGear": []
  },
  "48": {
    "title": "Fel Intellect (3/5) & Tanaris South Coast",
    "zone": "Tanaris (Southbreak Shore & Thistleshrub Valley)",
    "zoneRange": "45-50",
    "hubs": "Gadgetzan",
    "zoneInstructions": "Head to Thistleshrub Valley in southwest Tanaris. Clear Gnarled Thistleshrubs for 'Tooga's Quest' and pirate camps on the Southbreak Shore for Southsea pirate hats.",
    "talent": {
      "name": "Improved Voidwalker",
      "rank": "3/3",
      "tree": "demonology",
      "why": "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%."
    },
    "talentNote": "+9% pet mana pool.",
    "trainerTrain": [
      "Bane of Agony (Rank 5)",
      "Soul Fire (Rank 1)",
      "Immolate (Rank 6)",
      "Searing Pain (Rank 3)",
      "Rain of Fire (Rank 3)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Prepare soul shards and reagents for your level 50 class quest.",
    "dungeonGear": []
  },
  "49": {
    "title": "Fel Intellect (4/5) & Blasted Lands Initiation",
    "zone": "Blasted Lands (Bloodvenom / Nethergarde)",
    "zoneRange": "45-50",
    "hubs": "Stonard -> Bloodvenom Post",
    "zoneInstructions": "Travel south from Swamp of Sorrows into the crimson wastes of Blasted Lands. Speak to Bloodmage Lynnore and Kum'isha the Collector. Complete 'A Boar's Vitality', 'Snickerfang Jowls', and 'The Decisive Strife'.",
    "talent": {
      "name": "Fel Intellect",
      "rank": "1/5",
      "tree": "demonology",
      "why": "Increases the maximum mana of your summoned demons by 3% to 15%."
    },
    "talentNote": "Almost maximum pet mana bonus.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "DoT -> Drain Life -> Dark Pact. Multi-pull beasts safely."
    ],
    "gearTip": "Blasted Lands buff consumables grant +25 Stamina or +25 Intellect for 1 hour!",
    "dungeonGear": []
  },
  "50": {
    "title": "15% PET MANA (5/5) & UN'GORO CRATER EXPLORATION!",
    "zone": "Un'Goro Crater (Marshal's Stand / Horde Camp)",
    "zoneRange": "50-55",
    "hubs": "Marshal's Stand (Un'Goro Crater)",
    "zoneInstructions": "THE DINO CRATER SPEEDRUN! Descend from Tanaris into the prehistoric jungle of Un'Goro Crater. Grab all quests: 'It's a Secret to Everybody' (Linken chain), 'Lurking Prowlers', 'Alien Ecology', and 'Chasing A-Me 01'. Dinos give massive XP!",
    "talent": {
      "name": "Fel Intellect",
      "rank": "2/5",
      "tree": "demonology",
      "why": "Increases the maximum mana of your summoned demons by 3% to 15%."
    },
    "talentNote": "Un'Goro is one of the fastest leveling zones in Classic for Affliction Warlocks.",
    "trainerTrain": [
      "Inferno (Quest)",
      "Corruption (Rank 6)",
      "Drain Mana (Rank 3)",
      "Curse of Weakness (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Send Succubus -> Corruption -> Siphon Life -> Agony",
      "Face tank Pterodactyls and Raptors with Drain Life",
      "Drain pet mana with Dark Pact -> Mob dead -> Pull next dinosaur immediately!"
    ],
    "gearTip": "Un'Goro Soil and Bloodpetal Sprouts are needed for quests.",
    "dungeonGear": []
  },
  "51": {
    "title": "Master Summoner (1/2) & Un'Goro Dinosaurs",
    "zone": "Un'Goro Crater (Tar Pits & Golakka Hot Springs)",
    "zoneRange": "50-55",
    "hubs": "Marshal's Stand",
    "zoneInstructions": "Kill Stegodons, Pterodactyls, and Tar Beasts around Golakka Hot Springs. Complete 'Super Sticky' and 'Volcanic Activity'.",
    "talent": {
      "name": "Fel Domination",
      "rank": "1/1",
      "tree": "demonology",
      "why": "Your next Imp, Voidwalker, Succubus, or Felhunter summon spell has its cast time reduced by 5.5s and mana cost by 50%."
    },
    "talentNote": "Speeds up regular pet summons significantly.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "DoT trifecta -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Look for Devilsaur spawns—call out to high-level guildies or skinners.",
    "dungeonGear": []
  },
  "52": {
    "title": "Master Summoner (2/2) & Felwood (Bloodvenom Post)",
    "zone": "Felwood (Bloodvenom Post)",
    "zoneRange": "50-55",
    "hubs": "Bloodvenom Post (Flight Master)",
    "zoneInstructions": "Travel north into the corrupted forests of Felwood. Claim the Bloodvenom Post Flight Path. Pick up 'Forces of Jaedenar', 'Well of Corruption', and 'Cleansing Felwood'.",
    "talent": {
      "name": "Fel Intellect",
      "rank": "3/5",
      "tree": "demonology",
      "why": "Increases the maximum mana of your summoned demons by 3% to 15%."
    },
    "talentNote": "Pet summons take only 2.0s without Fel Domination.",
    "trainerTrain": [
      "Shadow Bolt (Rank 8)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Corrupted flowers in Felwood provide Whipper Root Tubers (instant heal!).",
    "dungeonGear": []
  },
  "53": {
    "title": "Fel Stamina (1/5) & Jaedenar Cultists",
    "zone": "Felwood (Jaedenar & Shadow Hold)",
    "zoneRange": "50-55",
    "hubs": "Bloodvenom Post",
    "zoneInstructions": "Descend into Jaedenar and clear Shadow Council Warlocks and Infernals. Complete 'A Husband's Revenge' and collect Corrupted Soul Shards.",
    "talent": {
      "name": "Fel Intellect",
      "rank": "4/5",
      "tree": "demonology",
      "why": "Increases the maximum mana of your summoned demons by 3% to 15%."
    },
    "talentNote": "Toughens your pet so it never dies to cleaves.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Drain Life -> Dark Pact -> Drain Soul."
    ],
    "gearTip": "Borean Mantle from world drop or Scholomance prep.",
    "dungeonGear": []
  },
  "54": {
    "title": "Fel Stamina (2/5) & Western Plaguelands (The Bulwark)",
    "zone": "Western Plaguelands (The Bulwark)",
    "zoneRange": "50-55",
    "hubs": "The Bulwark (Tirisfal/WPL border, Flight Master)",
    "zoneInstructions": "Fly to Brill and run east through The Bulwark into Western Plaguelands! Pick up the Cauldron quest chain: 'A Plague Upon Thee', 'Target: Felstone Field', and 'Target: Dalson's Tears'. Clear the undead scythemen and ghouls.",
    "talent": {
      "name": "Fel Intellect",
      "rank": "5/5",
      "tree": "demonology",
      "why": "Increases the maximum mana of your summoned demons by 3% to 15%."
    },
    "talentNote": "Pet survives high-level Undead disease auras.",
    "trainerTrain": [
      "Create Soulstone (Major)",
      "Demon Armor (Rank 5)",
      "Drain Life (Rank 6)",
      "Hellfire (Rank 2)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life face tank."
    ],
    "gearTip": "Cauldron quest turn-ins grant gigantic lump-sum XP payouts!",
    "dungeonGear": []
  },
  "55": {
    "title": "Fel Stamina (3/5) & Winterspring (Everlook)",
    "zone": "Winterspring (Everlook)",
    "zoneRange": "55-60",
    "hubs": "Everlook (Flight Master, Neutral Goblin Town)",
    "zoneInstructions": "Pass through the Timbermaw Tunnel from Felwood into the snowy alpine peaks of Winterspring! Grab the Everlook Flight Path. Pick up 'Winterfall Intruders', 'Frostsaber Provisions', and 'Are We There, Yeti?'.",
    "talent": {
      "name": "Fel Stamina",
      "rank": "1/5",
      "tree": "demonology",
      "why": "Increases the maximum health of your summoned demons by 3% to 15%."
    },
    "talentNote": "Level 55+: The final stretch to 60 begins!",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "DoT trifecta -> Drain Life -> Dark Pact pet mana."
    ],
    "gearTip": "Winterfall Furbolgs drop Firewater and Ekos (valuable raid consumables).",
    "dungeonGear": []
  },
  "56": {
    "title": "Fel Stamina (4/5) & Eastern Plaguelands",
    "zone": "Eastern Plaguelands (Light's Hope Chapel)",
    "zoneRange": "55-60",
    "hubs": "Light's Hope Chapel (Flight Master)",
    "zoneInstructions": "Ride east past Sorrow Hill into Eastern Plaguelands! Secure the Light's Hope Chapel Flight Path. Complete 'The Restless Souls', 'Carrion Grub Apocalypse', and 'Zaeldron's Head'.",
    "talent": {
      "name": "Master Summoner",
      "rank": "1/2",
      "tree": "demonology",
      "why": "Reduces the casting time of your summoning spells by 2s / 4s, and the mana cost by 20% / 40%."
    },
    "talentNote": "Pet health pool is rock-solid.",
    "trainerTrain": [
      "Life Tap (Rank 6)",
      "Fear (Rank 3)",
      "Immolate (Rank 7)",
      "Rain of Fire (Rank 4)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life face-tank."
    ],
    "gearTip": "Collect Argent Dawn Valor Tokens from scourge mobs.",
    "dungeonGear": []
  },
  "57": {
    "title": "15% PET STAMINA (5/5) & Burning Steppes (Flame Crest)",
    "zone": "Burning Steppes (Flame Crest)",
    "zoneRange": "55-60",
    "hubs": "Flame Crest (Flight Master)",
    "zoneInstructions": "Travel south of Blackrock Mountain into Burning Steppes. Secure Flame Crest flight path. Complete 'Marrow Fiend', 'Broodling Essence', and 'Tablet of the Seven'.",
    "talent": {
      "name": "Master Summoner",
      "rank": "2/2",
      "tree": "demonology",
      "why": "Reduces the casting time of your summoning spells by 2s / 4s, and the mana cost by 20% / 40%."
    },
    "talentNote": "Demon survivability maxed out.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "DoTs -> Drain Life -> Dark Pact -> Drain Soul."
    ],
    "gearTip": "Blackrock Mountain dungeons: BRD, LBRS, Stratholme.",
    "dungeonGear": []
  },
  "58": {
    "title": "Improved Healthstone (1/2) & Dungeon Pre-BIS Runs",
    "zone": "Blackrock Depths & Stratholme",
    "zoneRange": "55-60",
    "hubs": "Flame Crest, Light's Hope Chapel",
    "zoneInstructions": "Start running high-level 5-man dungeons! Complete Blackrock Depths (Emperor Dagran Thaurissan), Scholomance, and Stratholme. Complete the Onyxia attunement chain starting in Kargath.",
    "talent": {
      "name": "Fel Stamina",
      "rank": "2/5",
      "tree": "demonology",
      "why": "Increases the maximum health of your summoned demons by 3% to 15%."
    },
    "talentNote": "Healthstone now heals for ~1,320 HP in emergency combat.",
    "trainerTrain": [
      "Create Healthstone (Major)",
      "Bane of Agony (Rank 6)",
      "Banish (Rank 3)",
      "Drain Soul (Rank 5)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Curse of Shadows / Elements in dungeons -> Shadow Bolt / Corruption."
    ],
    "gearTip": "Scholomance: Necropile Raiment set pieces.",
    "dungeonGear": [
      {
        "name": "Skibi's Pendant",
        "quality": "rare",
        "source": "Scholomance",
        "stats": "+15 Intellect, +5 Spirit, +14 Spell Damage",
        "tip": "Superb neck piece."
      }
    ]
  },
  "59": {
    "title": "Improved Healthstone (2/2) & Final Push to 60!",
    "zone": "Western Plaguelands (Hearthglen) & Winterspring",
    "zoneRange": "55-60",
    "hubs": "Light's Hope Chapel, Everlook",
    "zoneInstructions": "Final level before 60! Farm Scarlet Spellbinders in Hearthglen for Crusader Enchant formulas, or grind Winterfall Furbolgs in Winterspring. Turn in all completed dungeon and elite quests.",
    "talent": {
      "name": "Fel Stamina",
      "rank": "3/5",
      "tree": "demonology",
      "why": "Increases the maximum health of your summoned demons by 3% to 15%."
    },
    "talentNote": "Massive instant heal for raid survival and PvP.",
    "trainerTrain": [],
    "trainerSkip": [],
    "rotation": [
      "Siphon Life -> Corruption -> Agony -> Drain Life -> Dark Pact."
    ],
    "gearTip": "Collect 300 gold or prep materials for Epic Dreadsteed quest line at Level 60!",
    "dungeonGear": []
  },
  "60": {
    "title": "LEVEL 60 ACHIEVED - RAID READY & DREADSTEED AWAITS!",
    "zone": "Undercity / Orgrimmar / Dire Maul / Scholomance",
    "zoneRange": "60",
    "hubs": "Undercity, Orgrimmar",
    "zoneInstructions": "CONGRATULATIONS! You have conquered Classic WoW and reached Level 60 as an Affliction Warlock! 1) Train max rank spells: Corruption Rank 10, Drain Life Rank 7, Shadow Bolt Rank 10, Curse of Shadows / Elements. 2) Begin the epic DREADSTEED OF XOROTH quest chain with Mor'zul Bloodbringer in Burning Steppes for your 100% Epic Mount! 3) Collect Pre-Raid BiS from Stratholme, Scholomance, and BRD. 4) Prepare for Molten Core and Onyxia's Lair!",
    "talent": {
      "name": "Fel Stamina",
      "rank": "4/5",
      "tree": "demonology",
      "why": "Increases the maximum health of your summoned demons by 3% to 15%."
    },
    "talentNote": "You are now fully geared, leveled, and raid-ready for the Horde!",
    "trainerTrain": [
      "Bane of Doom (Rank 1)",
      "Corruption (Rank 7)",
      "Shadow Bolt (Rank 9)",
      "Ritual of Doom",
      "Summon Dreadsteed (Epic Mount Quest)",
      "Demon Armor (Rank 6)",
      "Immolate (Rank 8)"
    ],
    "trainerSkip": [],
    "rotation": [
      "Solo Drain Tank: Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact",
      "Raid Boss: Curse of the Elements / Shadows -> Corruption (if debuff slot allows) -> Shadow Bolt spam"
    ],
    "gearTip": "Crown of the Ogre King, Robe of the Void (Crafted Tailoring 300), Briarwood Reed, Rod of the Ogre Magi.",
    "dungeonGear": [
      {
        "name": "Robe of the Void",
        "quality": "epic",
        "source": "Tailoring (Skill 300)",
        "stats": "+14 Stamina, +46 Shadow Spell Damage, Use: Heal 1200",
        "tip": "🏆 The ultimate classic Warlock chestpiece!"
      },
      {
        "name": "Briarwood Reed",
        "quality": "rare",
        "source": "Jed Runewatcher (UBRS)",
        "stats": "Equip: +29 Spell Damage",
        "tip": "Essential pre-raid BiS trinket!"
      }
    ]
  }
};

const WARLOCK_TALENTS_CONFIG = [
  // --- Affliction (Tree 1) ---
  { id: "suppression", name: "Suppression", max: 5, tree: "affliction", icon: "👁️", desc: "Reduces the chance for enemies to resist your Affliction spells by 2% to 10%." },
  { id: "improved_corruption", name: "Improved Corruption", max: 5, tree: "affliction", icon: "☣️", desc: "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!)." },
  { id: "improved_drain_soul", name: "Improved Drain Soul", max: 2, tree: "affliction", icon: "💀", desc: "Gives a 50% / 100% increase to mana regeneration for 10 sec after killing a target while channeling Drain Soul." },
  { id: "improved_life_tap", name: "Improved Life Tap", max: 2, tree: "affliction", icon: "🩸", desc: "Increases the mana awarded by your Life Tap spell by 10% / 20%." },
  { id: "improved_drain_life", name: "Improved Drain Life", max: 5, tree: "affliction", icon: "🩸", desc: "Increases the health drained by your Drain Life spell by 2% to 10%." },
  { id: "fel_concentration", name: "Fel Concentration", max: 5, tree: "affliction", icon: "🛡️", desc: "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana." },
  { id: "amplify_curse", name: "Amplify Curse", max: 1, tree: "affliction", icon: "⚡", desc: "Increases the effect of your next Bane of Agony by 50% or Curse of Exhaustion by 20% on a 3 min cooldown." },
  { id: "grim_reach", name: "Grim Reach", max: 2, tree: "affliction", icon: "🏹", desc: "Increases the range of your Affliction spells by 10% / 20% (up to 36 yards)." },
  { id: "nightfall", name: "Nightfall", max: 2, tree: "affliction", icon: "🌑", desc: "Gives your Corruption and Drain Life ticks a 2% / 4% chance to grant an instant-cast Shadow Bolt." },
  { id: "siphon_life", name: "Siphon Life", max: 1, tree: "affliction", icon: "🩸", desc: "Transfers health from the target to the caster every 3 sec for 30 sec. Foundation of Affliction soloing." },
  { id: "shadow_mastery", name: "Shadow Mastery", max: 5, tree: "affliction", icon: "🔮", desc: "Increases the damage dealt by your Shadow spells or effects by 2% to 10%." },
  { id: "dark_pact", name: "Dark Pact", max: 1, tree: "affliction", icon: "🌀", desc: "Drains 150-300 mana from your summoned demon and transfers it directly to you. Eliminates mana downtime." },

  // --- Demonology (Tree 2) ---
  { id: "improved_healthstone", name: "Improved Healthstone", max: 2, tree: "demonology", icon: "💚", desc: "Increases the amount of health restored by your Healthstone by 10% / 20%." },
  { id: "improved_imp", name: "Improved Imp", max: 3, tree: "demonology", icon: "🔥", desc: "Increases the effect of your Imp's Firebolt, Fire Shield, and Blood Pact spells by 10% to 30%." },
  { id: "demonic_embrace", name: "Demonic Embrace", max: 5, tree: "demonology", icon: "💪", desc: "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%." },
  { id: "improved_voidwalker", name: "Improved Voidwalker", max: 3, tree: "demonology", icon: "🛡️", desc: "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%." },
  { id: "fel_intellect", name: "Fel Intellect", max: 5, tree: "demonology", icon: "🧠", desc: "Increases the maximum mana of your summoned demons by 3% to 15%." },
  { id: "fel_domination", name: "Fel Domination", max: 1, tree: "demonology", icon: "⚡", desc: "Your next Imp, Voidwalker, Succubus, or Felhunter summon spell has its cast time reduced by 5.5s and mana cost by 50%." },
  { id: "fel_stamina", name: "Fel Stamina", max: 5, tree: "demonology", icon: "❤️", desc: "Increases the maximum health of your summoned demons by 3% to 15%." },
  { id: "master_summoner", name: "Master Summoner", max: 2, tree: "demonology", icon: "⏱️", desc: "Reduces the casting time of your summoning spells by 2s / 4s, and the mana cost by 20% / 40%." },

  // --- Destruction (Tree 3) ---
  { id: "improved_shadow_bolt", name: "Improved Shadow Bolt", max: 5, tree: "destruction", icon: "⚡", desc: "Critical strikes from Shadow Bolt increase Shadow damage dealt to the target by 4% to 20% for 4 non-periodic strikes." },
  { id: "cataclysm", name: "Cataclysm", max: 5, tree: "destruction", icon: "☄️", desc: "Reduces the mana cost of your Destruction spells by 1% to 5%." },
  { id: "bane", name: "Bane", max: 5, tree: "destruction", icon: "🔥", desc: "Reduces the casting time of your Shadow Bolt and Immolate spells by 0.1s to 0.5s." },
  { id: "devastation", name: "Devastation", max: 5, tree: "destruction", icon: "💥", desc: "Increases the critical strike chance of your Destruction spells by 1% to 5%." },
  { id: "shadowburn", name: "Shadowburn", max: 1, tree: "destruction", icon: "🔥", desc: "Instantly blasts the target for Shadow damage. Requires 1 Soul Shard." },
  { id: "ruin", name: "Ruin", max: 1, tree: "destruction", icon: "👑", desc: "Increases the critical strike damage bonus of your Destruction spells by 100%." }
];

const WARLOCK_TALENT_ORDER = [
  "improved_corruption",
  "improved_corruption",
  "improved_corruption",
  "improved_corruption",
  "improved_corruption",
  "improved_drain_soul",
  "improved_drain_soul",
  "improved_life_tap",
  "improved_life_tap",
  "suppression",
  "fel_concentration",
  "fel_concentration",
  "fel_concentration",
  "fel_concentration",
  "fel_concentration",
  "amplify_curse",
  "nightfall",
  "nightfall",
  "grim_reach",
  "grim_reach",
  "siphon_life",
  "improved_drain_life",
  "improved_drain_life",
  "improved_drain_life",
  "improved_drain_life",
  "shadow_mastery",
  "shadow_mastery",
  "shadow_mastery",
  "shadow_mastery",
  "shadow_mastery",
  "dark_pact",
  "demonic_embrace",
  "demonic_embrace",
  "demonic_embrace",
  "demonic_embrace",
  "demonic_embrace",
  "improved_voidwalker",
  "improved_voidwalker",
  "improved_voidwalker",
  "fel_intellect",
  "fel_intellect",
  "fel_domination",
  "fel_intellect",
  "fel_intellect",
  "fel_intellect",
  "fel_stamina",
  "master_summoner",
  "master_summoner",
  "fel_stamina",
  "fel_stamina",
  "fel_stamina"
];

if (typeof window !== "undefined") {
  window.WARLOCK_LEVEL_DATA = WARLOCK_LEVEL_DATA;
  window.WARLOCK_TALENTS_CONFIG = WARLOCK_TALENTS_CONFIG;
  window.WARLOCK_TALENT_ORDER = WARLOCK_TALENT_ORDER;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WARLOCK_LEVEL_DATA, WARLOCK_TALENTS_CONFIG, WARLOCK_TALENT_ORDER };
}

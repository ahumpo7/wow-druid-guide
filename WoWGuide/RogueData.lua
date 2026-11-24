-- WoW Forever: Complete Rogue Leveling Codex (Levels 1-60)
WoWGuide_Rogue = {
  className = "ROGUE",
  classColor = "FFF569",
  title = "Combat Swords / Daggers Leveling",
  specSummary = "19 Assassination / 32 Combat",
  levels = {
    [1] = {
      title = "Awakening in Deathknell & First Daggers",
      zone = "Tirisfal Glades (Deathknell)",
      zoneRange = "1-6",
      hubs = "Deathknell Crypt, Shadow Grave",
      zoneInstructions = "Rise from the crypt as an Undead Rogue. Speak to Undertaker Mordo and Shadow Priest Sarvis. Visit David Trias (Rogue Trainer) to learn Sinister Strike (Rank 1). Equip your starter dagger and kill Mindless Zombies.",
      talent = "",
      talentNote = "First talent point unlocks at Level 10. Prepare for Remorseless Attacks in Assassination.",
      gearTip = "Equip any dropped daggers or one-handed swords. Agility increases Attack Power, Crit, and Dodge.",
      trainerTrain = {"Sinister Strike (Rank 1)", "Eviscerate (Rank 1)"},
      rotation = {"Walk up behind target", "Sinister Strike twice to build 2 Combo Points", "Eviscerate to finish mob", "Use Cannibalize (Undead racial) on humanoids/undead corpses to restore 7% max health every 2 sec for 10 sec!"},
      dungeonGear = {
      }
    },
    [2] = {
      title = "Deathknell Scavengers & Combo Point Mastery",
      zone = "Tirisfal Glades (Deathknell)",
      zoneRange = "1-6",
      hubs = "Deathknell",
      zoneInstructions = "Pick up 'Scavenging Deathknell' and 'Night Web's Hollow'. Practice building combo points with Sinister Strike and finishing with Eviscerate.",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Always Cannibalize corpses between pulls to eliminate eating downtime.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Sinister Strike -> Eviscerate."},
      dungeonGear = {
      }
    },
    [3] = {
      title = "Spider Clearing & Linen Cloth Collection",
      zone = "Tirisfal Glades (Deathknell)",
      zoneRange = "1-6",
      hubs = "Deathknell",
      zoneInstructions = "Clear Night Web Spiders in the hollow. Save all Linen Cloth to level First Aid—bandages are critical for solo Rogues.",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Start Skinning beasts if training skinning, or hold leather scraps.",
      trainerTrain = {},
      rotation = {"Sinister Strike x3 -> Eviscerate."},
      dungeonGear = {
      }
    },
    [4] = {
      title = "Stealth & Gouge Acquired!",
      zone = "Tirisfal Glades (Deathknell)",
      zoneRange = "1-6",
      hubs = "Deathknell",
      zoneInstructions = "Visit David Trias in Deathknell. Learn STEALTH (Rank 1) and GOUGE (Rank 1)! Stealth allows you to sneak past unwanted mobs. Gouge incapacitates the target for 4 seconds, allowing you to bandage mid-fight!",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Always Pickpocket humanoids before opening attack for extra money and potions.",
      trainerTrain = {"Stealth (Rank 1)", "Gouge (Rank 1)", "Pickpocket"},
      rotation = {"Enter Stealth -> Creep behind mob", "Pickpocket for free copper and lockboxes before attacking!", "Open with Sinister Strike -> Build combo points", "If health drops: Gouge (4 sec stun) -> Step back -> Apply First Aid bandage -> Re-engage!"},
      dungeonGear = {
      }
    },
    [5] = {
      title = "Deathknell Finale & Road to Brill",
      zone = "Tirisfal Glades (Deathknell)",
      zoneRange = "1-6",
      hubs = "Deathknell -> Brill",
      zoneInstructions = "Kill Samuel Fitts and his Rot Hide gnolls. Turn in all quests in Deathknell and receive 'Vital Intelligence'. Follow the road north to Brill.",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Sell trash grays in Brill and buy starter 6-slot bags.",
      trainerTrain = {},
      rotation = {"Stealth -> Pickpocket -> Sinister Strike x3 -> Eviscerate."},
      dungeonGear = {
      }
    },
    [6] = {
      title = "Arrival in Brill & Sinister Strike Rank 2",
      zone = "Tirisfal Glades (Brill)",
      zoneRange = "6-10",
      hubs = "Brill (Gallows End Tavern, Flight Master)",
      zoneInstructions = "Bind your Hearthstone at Gallows End Tavern in Brill. Speak to Marion Call (Rogue Trainer). Learn Sinister Strike (Rank 2) and Evasion (Rank 1)—increases your dodge chance by 50% for 15 seconds!",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Look for leather armor with Agility and Strength.",
      trainerTrain = {"Sinister Strike (Rank 2)", "Evasion (Rank 1)"},
      rotation = {"Stealth -> Pickpocket -> Sinister Strike Rank 2", "Pop Evasion whenever you pull 2+ mobs (+50% dodge keeps you alive!)", "Finish with Eviscerate"},
      dungeonGear = {
      }
    },
    [7] = {
      title = "Garren's Haunt & Fields of Tirisfal",
      zone = "Tirisfal Glades (Brill)",
      zoneRange = "6-10",
      hubs = "Brill",
      zoneInstructions = "Head east to Garren's Haunt for 'A Putrid Task' and kill Rotting Dead. Watch out for wandering level 24 Son of Arugal near the Silverpine border—Stealth if you see him!",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Check corpse drops for green leather boots and gloves.",
      trainerTrain = {},
      rotation = {"Sinister Strike x3 -> Eviscerate. Use Cannibalize between pulls."},
      dungeonGear = {
      }
    },
    [8] = {
      title = "Eviscerate Rank 2 & Sprint Unleashed!",
      zone = "Tirisfal Glades (Brill)",
      zoneRange = "6-10",
      hubs = "Brill",
      zoneInstructions = "Visit Marion Call in Brill. Train SPRINT (Rank 1)—increases run speed by 50% for 15 seconds! Essential for escaping danger or chasing down runners. Train Eviscerate (Rank 2).",
      talent = "",
      talentNote = "Talents unlock at Level 10.",
      gearTip = "Fine Longbow or Thrown weapon for pulling single mobs safely.",
      trainerTrain = {"Sprint (Rank 1)", "Eviscerate (Rank 2)"},
      rotation = {"Sinister Strike x3 -> Eviscerate Rank 2. Use Sprint to close distance."},
      dungeonGear = {
      }
    },
    [9] = {
      title = "Agamand Mills & Scarlet Converts",
      zone = "Tirisfal Glades (Agamand Mills)",
      zoneRange = "6-10",
      hubs = "Brill",
      zoneInstructions = "Clear Agamand Mills and Scarlet Crusade camps in northern Tirisfal. Turn in 'The Haunted Mills'. Prepare for Level 10 Dual Wielding!",
      talent = "",
      talentNote = "First talent point at Level 10! You will choose Remorseless Attacks.",
      gearTip = "Prepare a secondary one-handed weapon in your bags for Dual Wielding at 10.",
      trainerTrain = {},
      rotation = {"Stealth -> Open with Sinister Strike -> Eviscerate -> Cannibalize."},
      dungeonGear = {
      }
    },
    [10] = {
      title = "DUAL WIELD UNLOCKED & REMORSELESS ATTACKS (1/2)",
      zone = "Tirisfal Glades (Brill) -> The Barrens / Silverpine",
      zoneRange = "10-15",
      hubs = "Brill, Undercity",
      zoneInstructions = "MAJOR MILESTONE! Visit Marion Call in Brill to train DUAL WIELD! You can now equip an off-hand dagger or sword, doubling your auto-attack frequency! Learn Slice and Dice (Rank 1)—your most important combat finisher.",
      talent = {"name":"Remorseless Attacks","rank":"1/2","tree":"assassination","icon":"💀","why":"After killing a target that yields experience, your next Sinister Strike, Backstab, or Ambush has a 20% increased critical strike chance for 20 sec!"},
      talentNote = "Huge chain-pulling burst. Chaining mobs back-to-back yields constant crits.",
      gearTip = "Equip your highest damage weapon in Main Hand (slow is best for Sinister Strike), and fastest weapon in Off-Hand.",
      trainerTrain = {"Dual Wield", "Slice and Dice (Rank 1)", "Sap (Rank 1)"},
      rotation = {"Open with Sinister Strike", "Build 1-2 Combo Points -> CAST SLICE AND DICE (+20% Attack Speed!)", "Spam Sinister Strike with fast off-hand attacks shredding mob", "Finish with Eviscerate -> Remorseless Attacks procs for next mob!"},
      dungeonGear = {
        { name = "Forsaken Dagger", quality = "uncommon", source = "Tirisfal Glades Quest", stats = "14-26 Damage, 11.1 DPS, Speed 1.80", tip = "Great early leveling weapon!" },
      }
    },
    [11] = {
      title = "+40% CRIT CHANCE (2/2) & Silverpine Border",
      zone = "Silverpine Forest (The Sepulcher)",
      zoneRange = "10-15",
      hubs = "The Sepulcher (Flight Master, Innkeeper)",
      zoneInstructions = "MAX REMORSELESS ATTACKS! After killing any mob that yields XP, your next Sinister Strike has a massive +40% CRITICAL STRIKE CHANCE! Head south into Silverpine Forest and reach The Sepulcher.",
      talent = {"name":"Remorseless Attacks","rank":"2/2","tree":"assassination","icon":"💀","why":"40% INCREASED CRIT CHANCE ON NEXT ATTACK! Nearly guaranteed critical strike on every pull!"},
      talentNote = "Chain pulls are insanely fast. Kill mob -> Run to next -> Instant 40% crit!",
      gearTip = "Keep dual weapons updated. Black Wolf Bracers (+2 Agility).",
      trainerTrain = {},
      rotation = {"Pull with +40% Crit Sinister Strike opener!", "Slice and Dice at 1-2 CP -> Sinister Strike to death -> Chain next mob!"},
      dungeonGear = {
      }
    },
    [12] = {
      title = "Improved Sinister Strike (1/2) & Sepulcher Quests",
      zone = "Silverpine Forest (The Sepulcher)",
      zoneRange = "10-15",
      hubs = "The Sepulcher",
      zoneInstructions = "Complete 'Proudfang / Moonrage Whitescalp' quests. Train Kick (Rank 1) at the Rogue Trainer in Undercity (Rogues' Quarter)—essential for interrupting enemy spellcasters!",
      talent = {"name":"Improved Sinister Strike","rank":"1/2","tree":"combat","icon":"⚔️","why":"Reduces the Energy cost of Sinister Strike by 3 (from 45 to 42 energy)."},
      talentNote = "Transition into the Combat tree for unmatched sustained physical DPS.",
      gearTip = "Grassland Pants (+4 Agility, +3 Stamina).",
      trainerTrain = {"Kick (Rank 1)", "Gouge (Rank 2)"},
      rotation = {"Sinister Strike -> Kick enemy spell casts -> Slice and Dice -> Eviscerate."},
      dungeonGear = {
      }
    },
    [13] = {
      title = "40 ENERGY SINISTER STRIKE (2/2) & Beholder's Eye",
      zone = "Silverpine Forest -> The Barrens (Crossroads)",
      zoneRange = "10-15",
      hubs = "The Crossroads (The Barrens)",
      zoneInstructions = "MAX IMPROVED SINISTER STRIKE! Sinister Strike now costs only 40 ENERGY (down from 45)! You can now pool energy faster and spam Sinister Strike every 4 seconds! Target weapon: Beholder's Eye (11.1 DPS dagger). Take Zeppelin to The Barrens.",
      talent = {"name":"Improved Sinister Strike","rank":"2/2","tree":"combat","icon":"⚔️","why":"SINISTER STRIKE NOW COSTS 40 ENERGY! You can now cast 2 Sinister Strikes instantly from full 100 energy pool!"},
      talentNote = "The single most important energy reduction talent in the game for leveling.",
      gearTip = "⭐ BEHOLDER'S EYE: 14-26 Damage, Speed 1.80, +2 Agi, +1 Stam. Equipped on Phana!",
      trainerTrain = {"Sinister Strike (Rank 3)"},
      rotation = {"Open with 40-energy Sinister Strike (critting via Remorseless Attacks!)", "Immediate 2nd Sinister Strike", "Slice and Dice -> Spam Sinister Strike -> Eviscerate!"},
      dungeonGear = {
        { name = "Beholder's Eye", quality = "uncommon", source = "Wandering Eye of Kilrogg", stats = "14-26 Dmg, 11.1 DPS, +2 Agi, +1 Stam", tip = "Live equipped on Phana!" },
      }
    },
    [14] = {
      title = "Deflection (1/5) & The Barrens Incursion",
      zone = "The Barrens (The Crossroads)",
      zoneRange = "10-15",
      hubs = "The Crossroads (Flight Master)",
      zoneInstructions = "Arrive at The Crossroads. Pick up 'Disrupt the Attacks', 'The Forgotten Pools', and 'Plainstrider Menace'. Hunt Plainstriders and Raptors in the central savannah.",
      talent = {"name":"Deflection","rank":"1/5","tree":"combat","icon":"🛡️","why":"Increases your Parry chance by 1%. Building toward Riposte at Level 19!"},
      talentNote = "Parrying avoids 100% of physical damage and resets swing timer.",
      gearTip = "Troll's Sweatcloth (+3 Stamina, +2 Spirit).",
      trainerTrain = {"Garrote (Rank 1)"},
      rotation = {"Stealth -> Garrote opener on high-armor mobs -> Slice and Dice -> Sinister Strike."},
      dungeonGear = {
      }
    },
    [15] = {
      title = "Deflection (2/5) & Grizzly Jerkin Upgrade",
      zone = "The Barrens (The Crossroads & Sludge Fen)",
      zoneRange = "15-20",
      hubs = "The Crossroads",
      zoneInstructions = "Clear Sludge Fen Venture Co. drillers. Equip Grizzly Jerkin (88 Armor, +6 Strength, +5 Stamina) for a massive durability boost against humanoid mobs.",
      talent = {"name":"Deflection","rank":"2/5","tree":"combat","icon":"🛡️","why":"Increases Parry chance by 2%."},
      talentNote = "Every parry prevents incoming damage.",
      gearTip = "⭐ GRIZZLY JERKIN: 88 Armor, +6 Strength (+12 AP), +5 Stamina. Equipped on Phana!",
      trainerTrain = {},
      rotation = {"Remorseless Sinister Strike -> Slice and Dice -> Sinister Strike spam."},
      dungeonGear = {
      }
    },
    [16] = {
      title = "LOCKPICKING UNLOCKED & Deflection (3/5)",
      zone = "The Barrens & Ratchet (Lockpicking Practice)",
      zoneRange = "15-20",
      hubs = "Ratchet (Pirate Ships)",
      zoneInstructions = "MAJOR MILESTONE! Visit the Rogue Trainer to unlock LOCKPICKING! Learn Feint (Rank 1) and Eviscerate (Rank 3). Travel to the Southsea pirate vessel off Ratchet and practice picking the Buccaneer's Footlockers up to skill 75-100!",
      talent = {"name":"Deflection","rank":"3/5","tree":"combat","icon":"🛡️","why":"Increases Parry chance by 3%."},
      talentNote = "Lockpicking lets you open locked strongboxes, footlockers, and dungeon doors.",
      gearTip = "Keep Thieves' Tools in your inventory at all times to pick lockboxes.",
      trainerTrain = {"Lockpicking", "Eviscerate (Rank 3)", "Feint (Rank 1)"},
      rotation = {"Sinister Strike x2 -> Slice and Dice -> Sinister Strike -> Eviscerate."},
      dungeonGear = {
      }
    },
    [17] = {
      title = "Deflection (4/5) & CURRENT LIVE PHANA STATUS!",
      zone = "The Barrens (Lushwater Oasis & South Barrens)",
      zoneRange = "15-20",
      hubs = "The Crossroads, Camp Taurajo",
      zoneInstructions = "YOU ARE HERE! Phana is Level 17 in The Barrens! Clear the Kolkar Centaur around Lushwater Oasis and Stagnant Oasis for 'The Stagnant Oasis' and 'Altered Beings'. Target weapon upgrade: Thief's Blade (16.5 DPS sword) or Shadowfang.",
      talent = {"name":"Deflection","rank":"4/5","tree":"combat","icon":"🛡️","why":"Increases Parry chance by 4%. One more point to unlock Riposte!"},
      talentNote = "Phana's current progression level. Riposte unlocks at Level 19!",
      gearTip = "Current gear: Beholder's Eye dagger, Fine Longbow, Grizzly Jerkin, Grizzly Cape, Grassland Pants, Black Wolf Bracers, Troll's Sweatcloth.",
      trainerTrain = {},
      rotation = {"Open with Remorseless Attacks (+40% Crit Sinister Strike!)", "Pop Slice and Dice at 1-2 Combo Points", "Keep Slice and Dice active 100% of the time", "Use Gouge + First Aid bandage if health dips below 50%"},
      dungeonGear = {
        { name = "Thief's Blade", quality = "uncommon", source = "World Drop / AH", stats = "21-39 Dmg, 16.5 DPS, Speed 2.20, +3 Agi, +2 Str", tip = "Superb Combat sword upgrade!" },
      }
    },
    [18] = {
      title = "Deflection (5/5) & Ambush / Wailing Caverns",
      zone = "The Barrens (Wailing Caverns & Camp Taurajo)",
      zoneRange = "15-20",
      hubs = "Camp Taurajo (Flight Master)",
      zoneInstructions = "Max out Deflection (+5% Parry). Train AMBUSH (Rank 1)—devastating stealth dagger opener! Pick up Wailing Caverns quests: 'Leaders of the Fang' and 'Deviate Hides'. Optional Wailing Caverns run for Leggings of the Fang (+9 Agi, +4 Str).",
      talent = {"name":"Deflection","rank":"5/5","tree":"combat","icon":"🛡️","why":"+5% PARRY CHANCE! Complete prerequisite for Riposte! You now parry 1 out of every 10 melee swings!"},
      talentNote = "Riposte unlocks on your next level ding!",
      gearTip = "Leggings of the Fang (+9 Agility, +4 Strength) from Wailing Caverns.",
      trainerTrain = {"Ambush (Rank 1)", "Sinister Strike (Rank 4)"},
      rotation = {"Stealth -> Ambush opener with Beholder's Eye dagger (massive chunk damage!)", "Slice and Dice -> Sinister Strike spam -> Eviscerate"},
      dungeonGear = {
        { name = "Leggings of the Fang", quality = "rare", source = "Lord Cobrahn (WC)", stats = "+9 Agility, +4 Strength", tip = "🔥 Best leveling legs in the 18-30 bracket!" },
      }
    },
    [19] = {
      title = "RIPOSTE UNLOCKED (1/1) - MELEE COUNTER GOD!",
      zone = "The Barrens (Camp Taurajo)",
      zoneRange = "15-20",
      hubs = "Camp Taurajo",
      zoneInstructions = "COMBAT GAME CHANGER! Learn RIPOSTE! Whenever you parry an enemy attack, Riposte lights up: for only 10 ENERGY, it deals 150% WEAPON DAMAGE and DISARMS THE TARGET FOR 6 SECONDS! Mobs cannot use their weapons, taking away 80% of their damage while you shred them!",
      talent = {"name":"Riposte","rank":"1/1","tree":"combat","icon":"⚔️","why":"RIPOSTE UNLOCKED! 10 energy counterattack for 150% weapon damage + 6 SEC DISARM on any parry! Insane damage and survivability!"},
      talentNote = "Bind Riposte to an easily reachable key (e.g. 'F' or 'Q'). Press it immediately whenever you parry!",
      gearTip = "Shadowfang (SFK drop) or Thief's Blade in Main Hand.",
      trainerTrain = {},
      rotation = {"Open with Sinister Strike", "Slice and Dice for +20% attack speed", "Watch for Parry -> HIT RIPOSTE IMMEDIATELY (10 energy for 150% dmg + disarm!)", "Finish with Eviscerate"},
      dungeonGear = {
        { name = "Shadowfang", quality = "epic", source = "Shadowfang Keep Drop", stats = "18.1 DPS, Speed 1.90, Proc: 30 Shadow Damage", tip = "The legendary rogue one-hander." },
      }
    },
    [20] = {
      title = "POISONS QUEST COMPLETE! & PRECISION (1/5)",
      zone = "The Barrens -> Sludge Fen (The Shattered Hand)",
      zoneRange = "20-25",
      hubs = "The Crossroads, Orgrimmar",
      zoneInstructions = "CRUCIAL CLASS MILESTONE! Visit Shenthul in Orgrimmar or The Crossroads to accept the Horde Rogue POISON QUEST ('The Shattered Hand'). Head to Sludge Fen, pickpocket the Venture Co. tower boss for the Gallywix Key, lockpick the chest at the top of the tower, and craft your antitoxin! Learn INSTANT POISON, DEADLY POISON, and THISTLE TEA recipe (restores 100 energy instantly!). Apply Instant Poison to BOTH weapons!",
      talent = {"name":"Precision","rank":"1/5","tree":"combat","icon":"🎯","why":"Increases your chance to hit with melee weapons by 1%."},
      talentNote = "Dual wield hit penalty is reduced. Working toward +5% hit chance.",
      gearTip = "Always carry 1-2 vials of Thistle Tea for emergency 100 energy bursts.",
      trainerTrain = {"Instant Poison (Rank 1)", "Deadly Poison (Rank 1)", "Crippling Poison (Rank 1)", "Thistle Tea"},
      rotation = {"ALWAYS KEEP INSTANT POISON APPLIED TO MAIN HAND & OFF HAND!", "Every auto-attack now has a 20% chance to proc 22 bonus nature damage!", "Slice and Dice increases poison application rate by 30%!"},
      dungeonGear = {
        { name = "Feet of the Lynx", quality = "rare", source = "World Drop / AH", stats = "+8 Agility, +3 Strength", tip = "Best boots in Classic at Level 19-20." },
      }
    },
    [21] = {
      title = "Precision (2/5) & Stonetalon Mountains Ascent",
      zone = "Stonetalon Mountains (Sun Rock Retreat)",
      zoneRange = "20-25",
      hubs = "Sun Rock Retreat (Flight Master)",
      zoneInstructions = "Head west into Stonetalon Mountains. Secure Sun Rock Retreat Flight Path. Complete 'Avenge My Village', 'Kill Grundig Darkcloud', and 'Gerenzo's Orders'.",
      talent = {"name":"Precision","rank":"2/5","tree":"combat","icon":"🎯","why":"Increases melee hit chance by 2%."},
      talentNote = "Fewer missed Sinister Strikes and auto-attacks.",
      gearTip = "Look for 'Of the Tiger' (+Agi, +Str) or 'Of the Monkey' (+Agi, +Stam).",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte on parry -> Eviscerate."},
      dungeonGear = {
      }
    },
    [22] = {
      title = "Precision (3/5) & Hillsbrad Foothills Landing",
      zone = "Hillsbrad Foothills (Tarren Mill)",
      zoneRange = "20-25",
      hubs = "Tarren Mill (Flight Master, Innkeeper)",
      zoneInstructions = "Fly to The Sepulcher and run east into Hillsbrad Foothills. Secure Tarren Mill Flight Path. Pick up 'The Battle for Hillsbrad' (Farmers and Clerics). Learn Sinister Strike (Rank 4) in Undercity.",
      talent = {"name":"Precision","rank":"3/5","tree":"combat","icon":"🎯","why":"Increases melee hit chance by 3%."},
      talentNote = "Hit chance continues scaling.",
      gearTip = "Distract stops wandering guards and turns them around for easy stealth openers.",
      trainerTrain = {"Sinister Strike (Rank 4)", "Distract (Rank 1)"},
      rotation = {"Distract patrols -> Ambush/Sinister Strike -> Slice and Dice -> Riposte."},
      dungeonGear = {
        { name = "Wolfclaw Gloves", quality = "rare", source = "World Drop / AH", stats = "+6 Agility, +6 Stamina, +5 Strength", tip = "Superb rogue physical gloves." },
      }
    },
    [23] = {
      title = "Precision (4/5) & Hillsbrad Town Hall",
      zone = "Hillsbrad Foothills (Tarren Mill)",
      zoneRange = "20-25",
      hubs = "Tarren Mill",
      zoneInstructions = "Fight Hillsbrad Councilmen and Blacksmith Veren at the Town Hall. Complete 'Elixir of Pain'.",
      talent = {"name":"Precision","rank":"4/5","tree":"combat","icon":"🎯","why":"Increases melee hit chance by 4%."},
      talentNote = "Yellow ability attacks will almost never miss same-level mobs.",
      gearTip = "Brawler Gloves (+8 Strength, +7 Stamina).",
      trainerTrain = {},
      rotation = {"Remorseless opener -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [24] = {
      title = "+5% HIT CHANCE (5/5) & DETECT TRAPS",
      zone = "Hillsbrad Foothills (Tarren Mill)",
      zoneRange = "20-25",
      hubs = "Tarren Mill",
      zoneInstructions = "MAX PRECISION! You now have +5% HIT CHANCE! In Classic WoW, +5% hit completely eliminates the miss penalty for all special attacks (Sinister Strike, Riposte, Eviscerate) against same-level mobs! Learn DETECT TRAPS and Eviscerate (Rank 4).",
      talent = {"name":"Precision","rank":"5/5","tree":"combat","icon":"🎯","why":"+5% MELEE HIT CHANCE! Special attacks (yellow damage) can no longer miss same-level mobs! Huge DPS stability!"},
      talentNote = "Yellow attacks are hit-capped for leveling.",
      gearTip = "Check Tarren Mill vendors for Silk Bandages.",
      trainerTrain = {"Detect Traps", "Eviscerate (Rank 4)", "Instant Poison (Rank 2)"},
      rotation = {"Apply Instant Poison II -> Sinister Strike -> Slice and Dice -> Riposte."},
      dungeonGear = {
      }
    },
    [25] = {
      title = "Dual Wield Spec (1/5) & Thousand Needles",
      zone = "Thousand Needles (Freewind Post)",
      zoneRange = "25-30",
      hubs = "Freewind Post (Flight Master)",
      zoneInstructions = "Ride the Great Lift down into Thousand Needles. Climb the elevator to Freewind Post and grab the Flight Path. Clear Galak Centaur and Harpies.",
      talent = {"name":"Dual Wield Specialization","rank":"1/5","tree":"combat","icon":"🗡️","why":"Increases damage dealt by your off-hand weapon by 10% (normally penalized by 50%)."},
      talentNote = "Building toward +50% off-hand damage bonus.",
      gearTip = "Humbert's Helm (Hillsbrad drop) or Engineering goggles.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
        { name = "Triprunner Dungarees", quality = "rare", source = "Quest: Rig Wars (Gnomeregan)", stats = "+18 Agility, +6 Stamina, +3 Strength", tip = "👑 God-tier leather pants for the 25-40 bracket!" },
      }
    },
    [26] = {
      title = "Dual Wield Spec (2/5) & Freewind Post Quests",
      zone = "Thousand Needles (Freewind Post)",
      zoneRange = "25-30",
      hubs = "Freewind Post",
      zoneInstructions = "Complete 'Alien Egg', 'Wind Rider', and 'A Different Approach'. Clear the canyon cougars and wind serpents.",
      talent = {"name":"Dual Wield Specialization","rank":"2/5","tree":"combat","icon":"🗡️","why":"Increases off-hand weapon damage by 20%."},
      talentNote = "Off-hand auto-attacks hit noticeably harder.",
      gearTip = "Cheap Shot provides 4 seconds of free damage before mob can touch you.",
      trainerTrain = {"Cheap Shot", "Kick (Rank 2)"},
      rotation = {"Open with CHEAP SHOT (4 sec stun + 2 combo points from Stealth!)", "Cast Slice and Dice immediately", "Sinister Strike spam -> Riposte on parry -> Eviscerate"},
      dungeonGear = {
      }
    },
    [27] = {
      title = "Dual Wield Spec (3/5) & Ashenvale Outpost",
      zone = "Ashenvale (Splintertree Post)",
      zoneRange = "25-30",
      hubs = "Splintertree Post (Flight Master)",
      zoneInstructions = "Head north to Splintertree Post in Ashenvale. Complete 'The Befouled Elementals' and 'Warsong Supplies'. Watch out for Alliance gankers near Astranaar.",
      talent = {"name":"Dual Wield Specialization","rank":"3/5","tree":"combat","icon":"🗡️","why":"Increases off-hand weapon damage by 30%."},
      talentNote = "Off-hand damage scaling rapidly.",
      gearTip = "Splintertree Post flight path connects to Crossroads and Orgrimmar.",
      trainerTrain = {},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte."},
      dungeonGear = {
      }
    },
    [28] = {
      title = "Dual Wield Spec (4/5) & Durnholde Keep Infiltration",
      zone = "Hillsbrad Foothills (Durnholde Keep)",
      zoneRange = "25-30",
      hubs = "Tarren Mill",
      zoneInstructions = "Return to Hillsbrad. Infiltrate Durnholde Keep and clear Syndicate Rogue camps for 'Prison Break in Durnholde'. Pickpocket Syndicate members for lockboxes.",
      talent = {"name":"Dual Wield Specialization","rank":"4/5","tree":"combat","icon":"🗡️","why":"Increases off-hand weapon damage by 40%."},
      talentNote = "One point away from full +50% off-hand damage.",
      gearTip = "Syndicate lockboxes level Lockpicking to 125-150.",
      trainerTrain = {"Sinister Strike (Rank 5)", "Sprint (Rank 2)"},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [29] = {
      title = "+50% OFF-HAND DAMAGE (5/5) & Mirage Raceway Prep",
      zone = "Thousand Needles (Shimmering Flats)",
      zoneRange = "25-30",
      hubs = "Mirage Raceway",
      zoneInstructions = "MAX DUAL WIELD SPECIALIZATION! Your off-hand weapon now deals a full +50% DAMAGE, completely negating the dual-wield damage reduction! Head east into the salt flats of Mirage Raceway. Level 30 Blade Flurry unlocks on next ding!",
      talent = {"name":"Dual Wield Specialization","rank":"5/5","tree":"combat","icon":"🗡️","why":"+50% OFF-HAND WEAPON DAMAGE! Off-hand hits now deal full damage, boosting white damage by ~20% overall!"},
      talentNote = "Next level is Blade Flurry—the premier multi-target physical cooldown!",
      gearTip = "Mirage Raceway vendors sell repair and poison reagents.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [30] = {
      title = "BLADE FLURRY UNLOCKED (1/1) - AOE CLEAVE GOD!",
      zone = "Thousand Needles (Shimmering Flats)",
      zoneRange = "30-35",
      hubs = "Mirage Raceway",
      zoneInstructions = "COMBAT MASTERSTROKE! Learn BLADE FLURRY! Increases your attack speed by 20% AND causes your attacks to strike an additional nearby enemy for 15 seconds on a 2-minute cooldown! You can now pull 2 mobs at once, pop Blade Flurry + Slice and Dice, and shred both targets simultaneously!",
      talent = {"name":"Blade Flurry","rank":"1/1","tree":"combat","icon":"🌀","why":"BLADE FLURRY UNLOCKED! +20% Attack Speed AND strikes a 2nd target for 100% damage! Melts 2 mobs in the time of 1!"},
      talentNote = "Combine Blade Flurry + Evasion to wipe out double pulls effortlessly.",
      gearTip = "Tigerstrike Mantle (+8 Agility, +7 Stamina) cloak.",
      trainerTrain = {"Blade Flurry", "Kidney Shot (Rank 1)", "Deadly Poison (Rank 2)"},
      rotation = {"Pull 2 mobs -> Pop Blade Flurry (+20% haste + cleave both!)", "Sinister Strike -> Slice and Dice (+30% more haste = +50% total attack speed!)", "Riposte on parry -> Watch both mobs disintegrate!"},
      dungeonGear = {
        { name = "Sword of Omen", quality = "rare", source = "Scarlet Monastery Quest", stats = "22.2 DPS, Speed 2.20, +7 Str, +5 Agi", tip = "🔥 Premier quest sword for Combat Rogues!" },
      }
    },
    [31] = {
      title = "Sword Specialization (1/5) & Shimmering Flats Grind",
      zone = "Thousand Needles (Shimmering Flats)",
      zoneRange = "30-35",
      hubs = "Mirage Raceway",
      zoneInstructions = "The salt flats are a paradise for Combat Rogues! Dense turtles, scorpids, and basilisks with no obstructions. Pop Blade Flurry every 2 minutes and cleave pairs of mobs.",
      talent = {"name":"Sword Specialization","rank":"1/5","tree":"combat","icon":"⚔️","why":"Gives you a 1% chance to get an extra attack on the same target after dealing damage with your sword."},
      talentNote = "Start using swords in Main Hand (e.g. Sword of Omen / Thief's Blade) for extra swing procs.",
      gearTip = "Heavy Silk Bandages keep downtime to 0.",
      trainerTrain = {},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Blade Flurry on double pulls."},
      dungeonGear = {
      }
    },
    [32] = {
      title = "Sword Specialization (2/5) & Arathi Highlands",
      zone = "Arathi Highlands (Hammerfall)",
      zoneRange = "30-35",
      hubs = "Hammerfall (Flight Master)",
      zoneInstructions = "Travel east from Hillsbrad into Arathi Highlands. Secure Hammerfall Flight Path. Complete 'Foul Magics', 'The Broken Sigil', and clear Boulderfist Ogres.",
      talent = {"name":"Sword Specialization","rank":"2/5","tree":"combat","icon":"⚔️","why":"2% chance on hit to strike an extra attack."},
      talentNote = "Extra swing procs can trigger poisons and combo points.",
      gearTip = "Hammerfall vendors sell level 35+ gear and poison reagents.",
      trainerTrain = {"Eviscerate (Rank 5)", "Instant Poison (Rank 3)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [33] = {
      title = "Sword Specialization (3/5) & Desolace (Shadowprey)",
      zone = "Desolace (Shadowprey Village)",
      zoneRange = "30-35",
      hubs = "Shadowprey Village, Ghost Walker Post",
      zoneInstructions = "Travel into Desolace. Secure flight paths. Complete 'Gelkis Alliance' and 'Bone Collector'. Clear Magram centaur camps with Blade Flurry cleave.",
      talent = {"name":"Sword Specialization","rank":"3/5","tree":"combat","icon":"⚔️","why":"3% chance on hit to strike an extra attack."},
      talentNote = "Extra attacks feel great when critting.",
      gearTip = "Centaur ears and bones give great XP turn-ins.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [34] = {
      title = "BLIND UNLOCKED & Sword Specialization (4/5)",
      zone = "Stranglethorn Vale (Grom'gol Base Camp)",
      zoneRange = "30-35",
      hubs = "Grom'gol Base Camp",
      zoneInstructions = "MAJOR UTILITY MILESTONE! Visit the Rogue Trainer to learn BLIND! Blinds the target for up to 10 seconds (consumes Blinding Powder). Essential for stopping runners, resetting fights, or controlling adds! Take Zeppelin to Grom'gol.",
      talent = {"name":"Sword Specialization","rank":"4/5","tree":"combat","icon":"⚔️","why":"4% chance on hit to strike an extra attack."},
      talentNote = "Carry Fadeleaf to craft Blinding Powder.",
      gearTip = "Always keep 10-20 Blinding Powders in your bags.",
      trainerTrain = {"Blind", "Sinister Strike (Rank 6)"},
      rotation = {"Blind add if two mobs attack -> Focus down primary target", "Or Blind target -> Step back -> Apply bandage -> Re-open with Cheap Shot!"},
      dungeonGear = {
      }
    },
    [35] = {
      title = "5% SWORD SPECIALIZATION (5/5) & Nesingwary STV",
      zone = "Stranglethorn Vale (Nesingwary Expedition)",
      zoneRange = "35-40",
      hubs = "Grom'gol, Nesingwary's Camp",
      zoneInstructions = "MAX SWORD SPECIALIZATION! 5% chance on EVERY sword swing to trigger an immediate extra attack! Combined with fast off-hand and Slice and Dice, bonus attacks fly non-stop! Clear Tiger, Panther, and Raptor mastery quests.",
      talent = {"name":"Sword Specialization","rank":"5/5","tree":"combat","icon":"⚔️","why":"5% EXTRA SWING CHANCE! Free instant swings trigger extra damage, poison procs, and energy!"},
      talentNote = "Swords are now undisputed best-in-slot for leveling.",
      gearTip = "Check AH for Vanquisher's Sword or Black Menace.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Extra attacks proc constantly!"},
      dungeonGear = {
      }
    },
    [36] = {
      title = "Weapon Expertise (1/2) & Badlands (Kargath)",
      zone = "Badlands (Kargath)",
      zoneRange = "35-40",
      hubs = "Kargath (Flight Master)",
      zoneInstructions = "Travel to Kargath in the Badlands. Grab the Flight Path. Pick up 'Badlands Reagents' and 'Mirages'. Kill Coyotes and Lesser Rock Elementals.",
      talent = {"name":"Weapon Expertise","rank":"1/2","tree":"combat","icon":"⚔️","why":"Increases your skill with Swords, Daggers, and Maces by 3. Reduces chance for target to dodge or parry!"},
      talentNote = "Weapon skill reduces glancing blow penalty against higher-level mobs.",
      gearTip = "Slice and Dice Rank 2 duration increased.",
      trainerTrain = {"Slice and Dice (Rank 2)", "Instant Poison (Rank 4)"},
      rotation = {"Slice and Dice Rank 2 (+30% attack speed!) -> Sinister Strike -> Riposte."},
      dungeonGear = {
      }
    },
    [37] = {
      title = "+5 WEAPON SKILL (2/2) & Dustbelcher Ogres",
      zone = "Badlands (Dustbelcher Grotto)",
      zoneRange = "35-40",
      hubs = "Kargath",
      zoneInstructions = "MAX WEAPON EXPERTISE! +5 Weapon Skill with all weapons! This virtually eliminates glancing blow penalties and reduces mob dodge/parry by 1%. Clear Dustbelcher Ogres.",
      talent = {"name":"Weapon Expertise","rank":"2/2","tree":"combat","icon":"⚔️","why":"+5 WEAPON SKILL! Dramatically reduces glancing blows and increases hit chance against higher-level mobs!"},
      talentNote = "Massive mathematical DPS increase in Classic WoW.",
      gearTip = "Elemental Earth sells for high gold on AH.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [38] = {
      title = "Aggression (1/3) & Swamp of Sorrows",
      zone = "Swamp of Sorrows (Stonard)",
      zoneRange = "35-40",
      hubs = "Stonard (Flight Master)",
      zoneInstructions = "Travel to Stonard in Swamp of Sorrows. Clear Swamp Jaguars and Dragonkin. Prepare for your Level 40 Mount!",
      talent = {"name":"Aggression","rank":"1/3","tree":"combat","icon":"💢","why":"Increases the damage of your Sinister Strike and Eviscerate abilities by 2%."},
      talentNote = "Direct damage multiplier to your primary spenders.",
      gearTip = "Save gold for Level 40 mount (approx 90g with honored reputation).",
      trainerTrain = {"Sinister Strike (Rank 7)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [39] = {
      title = "Aggression (2/3) & Stranglethorn Vale Finale",
      zone = "Stranglethorn Vale (Bloodscalp & Skullsplitter)",
      zoneRange = "35-40",
      hubs = "Grom'gol Base Camp",
      zoneInstructions = "Complete 'Venture Co. Mining' and 'Skullsplitter Tusk' quests in STV. Finish off the Nesingwary big game hunt. Ding 40 incoming!",
      talent = {"name":"Aggression","rank":"2/3","tree":"combat","icon":"💢","why":"Increases Sinister Strike and Eviscerate damage by 4%."},
      talentNote = "Next level is Adrenaline Rush—the ultimate physical burst cooldown!",
      gearTip = "Visit bank to collect Mount gold.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [40] = {
      title = "ADRENALINE RUSH UNLOCKED (1/1) & LEVEL 40 MOUNT!",
      zone = "Undercity / Orgrimmar -> Tanaris (Gadgetzan)",
      zoneRange = "40-45",
      hubs = "Undercity, Gadgetzan",
      zoneInstructions = "THE GREATEST ROGUE MILESTONE! 1) Learn ADRENALINE RUSH! Increases your energy regeneration rate by 100% (20 energy every second!) for 15 seconds on a 5-minute cooldown! You can spam Sinister Strike non-stop like a machine gun! 2) Purchase your Level 40 Mount (Undead Skeletal Warhorse) for 60% faster movement! 3) Ride into Tanaris!",
      talent = {"name":"Adrenaline Rush","rank":"1/1","tree":"combat","icon":"⚡","why":"ADRENALINE RUSH UNLOCKED! 100% INCREASED ENERGY REGEN FOR 15 SECONDS! Unlimited Sinister Strike spam on demand!"},
      talentNote = "Macro: /cast Blade Flurry /cast Adrenaline Rush for legendary boss and elite melting!",
      gearTip = "Equip your skeletal warhorse mount. Head immediately to Gadgetzan.",
      trainerTrain = {"Adrenaline Rush", "Eviscerate (Rank 6)", "Mount Riding"},
      rotation = {"For elites or pack pulls: Pop Blade Flurry + ADRENALINE RUSH", "Spam Sinister Strike every second -> Slice and Dice -> Riposte", "Watch entire packs of mobs melt in 10 seconds flat!"},
      dungeonGear = {
        { name = "Vanquisher's Sword", quality = "rare", source = "Quest: Bring the Light (RFD)", stats = "30.6 DPS, Speed 2.10, +28 Attack Power", tip = "⭐ Guaranteed quest sword upgrade at Level 40-45!" },
      }
    },
    [41] = {
      title = "Aggression (3/3) & Tanaris Wastewanders",
      zone = "Tanaris (Gadgetzan)",
      zoneRange = "40-45",
      hubs = "Gadgetzan (Flight Master)",
      zoneInstructions = "Ride across the Tanaris desert. Pick up 'WANTED: Caliph Scorpidsting' and 'Water Pouch Bounty'. Clear Wastewander thieves and assassins.",
      talent = {"name":"Aggression","rank":"3/3","tree":"combat","icon":"💢","why":"MAX AGGRESSION! Sinister Strike and Eviscerate damage increased by 6%!"},
      talentNote = "Combat tree core complete. Now moving to Assassination for Crit!",
      gearTip = "Water pouches give great gold and XP turn-in.",
      trainerTrain = {},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [42] = {
      title = "Malice (1/5) & Feralas (Camp Mojache)",
      zone = "Feralas (Camp Mojache)",
      zoneRange = "40-45",
      hubs = "Camp Mojache (Flight Master)",
      zoneInstructions = "Travel west to Camp Mojache in Feralas. Pick up 'A New Cloak's Sheen', 'Gordunni Cobalt', and 'The Woodpaw Gnolls'.",
      talent = {"name":"Malice","rank":"1/5","tree":"assassination","icon":"🗡️","why":"Increases your critical strike chance by 1%."},
      talentNote = "Stacking passive crit for physical strikes.",
      gearTip = "Camp Mojache vendors sell level 40+ reagents.",
      trainerTrain = {"Instant Poison (Rank 5)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [43] = {
      title = "Malice (2/5) & Woodpaw Gnoll Camps",
      zone = "Feralas (Camp Mojache)",
      zoneRange = "40-45",
      hubs = "Camp Mojache",
      zoneInstructions = "Clear Woodpaw Gnoll camps in southern Feralas. Pickpocket gnolls for Heavy Lockboxes (skill 175-200).",
      talent = {"name":"Malice","rank":"2/5","tree":"assassination","icon":"🗡️","why":"Increases critical strike chance by 2%."},
      talentNote = "Crit chance continues climbing.",
      gearTip = "Heavy Silk / Mageweave bandages.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [44] = {
      title = "Malice (3/5) & The Hinterlands (Revantusk)",
      zone = "The Hinterlands (Revantusk Village)",
      zoneRange = "40-45",
      hubs = "Revantusk Village (Flight Master)",
      zoneInstructions = "Fly to Tarren Mill and ride into The Hinterlands. Claim Revantusk Village Flight Path. Complete 'Cannibalistic Cousins' and 'Message to the Wildhammer'.",
      talent = {"name":"Malice","rank":"3/5","tree":"assassination","icon":"🗡️","why":"Increases critical strike chance by 3%."},
      talentNote = "+3% passive crit active.",
      gearTip = "Revantusk troll quests give incredible XP and blue agility rewards.",
      trainerTrain = {"Sinister Strike (Rank 8)"},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte."},
      dungeonGear = {
      }
    },
    [45] = {
      title = "Malice (4/5) & THRASH BLADE PREPARATION!",
      zone = "Tanaris (Zul'Farrak) & Desolace (Maraudon)",
      zoneRange = "45-50",
      hubs = "Gadgetzan, Shadowprey Village",
      zoneInstructions = "MAJOR WEAPON QUEST ALERT! Pick up 'Corruption of Earth and Seed' in Desolace for Maraudon. The quest reward is the legendary THRASH BLADE (Speed 2.70, chance on hit to grant an EXTRA ATTACK)! Combines with Sword Spec to trigger insane multi-swings!",
      talent = {"name":"Malice","rank":"4/5","tree":"assassination","icon":"🗡️","why":"Increases critical strike chance by 4%."},
      talentNote = "One point away from full +5% Malice.",
      gearTip = "👑 THRASH BLADE: 39.4 DPS, Speed 2.70, Chance on hit: 1 extra attack! The best leveling sword in Vanilla WoW!",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
        { name = "Thrash Blade", quality = "rare", source = "Quest: Corruption of Earth and Seed (Maraudon)", stats = "66-124 Dmg, 39.4 DPS, Speed 2.70, Extra Attack Proc", tip = "👑 Undisputed #1 leveling sword in Classic WoW!" },
      }
    },
    [46] = {
      title = "+5% CRIT CHANCE (5/5) & Searing Gorge",
      zone = "Searing Gorge (Thorium Point)",
      zoneRange = "45-50",
      hubs = "Thorium Point (Flight Master)",
      zoneInstructions = "MAX MALICE! +5% Critical Strike chance with all attacks and abilities! Travel to Searing Gorge and clear Dark Iron Dwarves and Golems at the Cauldron.",
      talent = {"name":"Malice","rank":"5/5","tree":"assassination","icon":"🗡️","why":"+5% PASSIVE CRIT CHANCE! Huge crit rating increase across all auto-attacks and Sinister Strikes!"},
      talentNote = "Crits trigger Remorseless Attacks and huge burst.",
      gearTip = "Thorium Point quests give great armor upgrades.",
      trainerTrain = {"Eviscerate (Rank 7)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [47] = {
      title = "Ruthlessness (1/3) & Tanaris South Dunes",
      zone = "Tanaris (Southbreak Shore & Thistleshrub)",
      zoneRange = "45-50",
      hubs = "Gadgetzan",
      zoneInstructions = "Clear south Tanaris. Complete 'Tooga's Quest' and pirate camps. Pickpocket southsea pirates for Mageweave and lockboxes.",
      talent = {"name":"Ruthlessness","rank":"1/3","tree":"assassination","icon":"🩸","why":"Gives your finishing moves a 20% chance to add a combo point to your target."},
      talentNote = "Starts building free combo point resets.",
      gearTip = "Mageweave bandages heal for 1,148 HP.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Eviscerate -> Combo point refunds."},
      dungeonGear = {
      }
    },
    [48] = {
      title = "Ruthlessness (2/3) & Blasted Lands Initiation",
      zone = "Blasted Lands (Bloodvenom / Nethergarde)",
      zoneRange = "45-50",
      hubs = "Stonard -> Bloodvenom Post",
      zoneInstructions = "Head to the Blasted Lands. Complete 'A Boar's Vitality', 'Snickerfang Jowls', and 'The Decisive Strife' for permanent +25 Agility stat food buffs!",
      talent = {"name":"Ruthlessness","rank":"2/3","tree":"assassination","icon":"🩸","why":"Gives your finishing moves a 40% chance to add a combo point to your target."},
      talentNote = "40% combo point refund on every finisher.",
      gearTip = "Blasted Lands Agility buffs grant +25 Agility (+50 AP / +0.8% crit) for 1 hour!",
      trainerTrain = {"Instant Poison (Rank 6)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [49] = {
      title = "Ruthlessness (3/3) & Un'Goro Crater Descent",
      zone = "Un'Goro Crater (Marshal's Stand / Horde Camp)",
      zoneRange = "50-55",
      hubs = "Marshal's Stand (Un'Goro Crater)",
      zoneInstructions = "Descend into Un'Goro Crater! Grab all quests: 'Lurking Prowlers', 'Alien Ecology', 'Super Sticky', and 'It's a Secret to Everybody'. Dinos give massive XP!",
      talent = {"name":"Ruthlessness","rank":"3/3","tree":"assassination","icon":"🩸","why":"60% CHANCE ON FINISHER TO GRANT 1 FREE COMBO POINT! You practically always start the next rotation at 1 Combo Point!"},
      talentNote = "Combines with Relentless Strikes on next level for infinite energy loops.",
      gearTip = "Blackstone Ring (Princess Theradras in Maraudon) provides +20 AP and +1% Hit!",
      trainerTrain = {},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Eviscerate -> Instant 1 CP refund!"},
      dungeonGear = {
        { name = "Blackstone Ring", quality = "rare", source = "Princess Theradras (Maraudon)", stats = "+6 Stamina, +20 Attack Power, +1% Hit", tip = "BiS leveling ring!" },
      }
    },
    [50] = {
      title = "RELENTLESS STRIKES (1/1) - INFINITE ENERGY FINISHER!",
      zone = "Un'Goro Crater (Golakka Hot Springs)",
      zoneRange = "50-55",
      hubs = "Marshal's Stand",
      zoneInstructions = "ROTATIONAL BREAKTHROUGH! Learn RELENTLESS STRIKES! Your finishing moves have a 20% chance per combo point to restore 25 ENERGY! When executing a 5-point Eviscerate or Slice and Dice, you have a 100% GUARANTEED CHANCE TO GET 25 ENERGY BACK INSTANTLY! Combined with Ruthlessness, finishers are practically free!",
      talent = {"name":"Relentless Strikes","rank":"1/1","tree":"assassination","icon":"⚡","why":"100% CHANCE TO REFUND 25 ENERGY ON 5-POINT FINISHERS! Eliminates energy starvation completely!"},
      talentNote = "5-point Slice and Dice or Eviscerate refunds 25 energy + 60% chance for 1 combo point!",
      gearTip = "Un'Goro raptors and gorillas are great for Skinning (thick leather/rugged leather).",
      trainerTrain = {"Sinister Strike (Rank 9)"},
      rotation = {"Sinister Strike to 5 Combo Points", "Cast Eviscerate -> Instant 25 energy refunded + 1 combo point granted!", "Immediately cast Slice and Dice or Sinister Strike with refunded energy!"},
      dungeonGear = {
      }
    },
    [51] = {
      title = "Murder (1/2) & Tar Pits Beast Hunting",
      zone = "Un'Goro Crater (Tar Pits)",
      zoneRange = "50-55",
      hubs = "Marshal's Stand",
      zoneInstructions = "Clear Stegodons, Pterodactyls, and Tar Beasts. Turn in 'Volcanic Activity' and 'Chasing A-Me 01'.",
      talent = {"name":"Murder","rank":"1/2","tree":"assassination","icon":"🗡️","why":"Increases all damage dealt by 1% against Humanoids, Giants, Beasts, and Dragonkin."},
      talentNote = "Universal damage increase against virtually all leveling mobs.",
      gearTip = "Devilsaur Leather from devilsaurs in Un'Goro is used for BiS raid gloves and legs.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [52] = {
      title = "Murder (2/2) & Felwood (Bloodvenom Post)",
      zone = "Felwood (Bloodvenom Post)",
      zoneRange = "50-55",
      hubs = "Bloodvenom Post (Flight Master)",
      zoneInstructions = "Travel north into the tainted forests of Felwood. Claim Bloodvenom Post Flight Path. Complete 'Forces of Jaedenar' and 'Well of Corruption'.",
      talent = {"name":"Murder","rank":"2/2","tree":"assassination","icon":"🗡️","why":"Increases all damage dealt by 2% against Humanoids, Giants, Beasts, and Dragonkin."},
      talentNote = "2% flat damage boost.",
      gearTip = "Whipper Root Tubers in Felwood restore 700-900 HP instantly without sharing potion cooldown!",
      trainerTrain = {"Sprint (Rank 3)"},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte."},
      dungeonGear = {
      }
    },
    [53] = {
      title = "Lethality (1/5) & Jaedenar Shadow Hold",
      zone = "Felwood (Jaedenar)",
      zoneRange = "50-55",
      hubs = "Bloodvenom Post",
      zoneInstructions = "Infiltrate Shadow Hold in Jaedenar. Clear Shadow Council warlocks and cultists. Kick demonic summoners.",
      talent = {"name":"Lethality","rank":"1/5","tree":"assassination","icon":"💀","why":"Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6%."},
      talentNote = "Building toward +30% crit damage bonus on Sinister Strike.",
      gearTip = "Pickpocket cultists for heavy lockboxes (Lockpicking 200-225).",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [54] = {
      title = "Lethality (2/5) & Western Plaguelands (The Bulwark)",
      zone = "Western Plaguelands (The Bulwark)",
      zoneRange = "50-55",
      hubs = "The Bulwark (Tirisfal/WPL border, Flight Master)",
      zoneInstructions = "Fly to Brill and ride east into The Bulwark! Accept Cauldron quests: 'Target: Felstone Field', 'Target: Dalson's Tears', and 'A Plague Upon Thee'. Clear Sorrow Hill and Sorrow Hill crypts.",
      talent = {"name":"Lethality","rank":"2/5","tree":"assassination","icon":"💀","why":"Increases critical strike damage bonus by 12%."},
      talentNote = "Sinister Strike crits hit noticeably harder.",
      gearTip = "Cauldron quest turn-ins grant massive lump-sum XP!",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [55] = {
      title = "Lethality (3/5) & Winterspring (Everlook)",
      zone = "Winterspring (Everlook)",
      zoneRange = "55-60",
      hubs = "Everlook (Flight Master, Goblin Town)",
      zoneInstructions = "Pass through Timbermaw Tunnel into Winterspring! Secure Everlook Flight Path. Complete 'Winterfall Intruders' and 'Frostsaber Provisions'. Farm Winterfall Ursa and Shaman for Firewater.",
      talent = {"name":"Lethality","rank":"3/5","tree":"assassination","icon":"💀","why":"Increases critical strike damage bonus by 18%."},
      talentNote = "The final stretch to 60 begins!",
      gearTip = "Winterfall Firewater grants +35 Attack Power and enlarges character for 20 min!",
      trainerTrain = {},
      rotation = {"Cheap Shot -> Slice and Dice -> Sinister Strike -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [56] = {
      title = "Lethality (4/5) & Eastern Plaguelands",
      zone = "Eastern Plaguelands (Light's Hope Chapel)",
      zoneRange = "55-60",
      hubs = "Light's Hope Chapel (Flight Master)",
      zoneInstructions = "Ride east into Eastern Plaguelands. Secure Light's Hope Chapel Flight Path. Complete 'The Restless Souls', 'Carrion Grub Apocalypse', and 'Zaeldron's Head'.",
      talent = {"name":"Lethality","rank":"4/5","tree":"assassination","icon":"💀","why":"Increases critical strike damage bonus by 24%."},
      talentNote = "Nearly maxed crit bonus.",
      gearTip = "Collect Argent Dawn Valor Tokens from undead.",
      trainerTrain = {"Eviscerate (Rank 8)"},
      rotation = {"Sinister Strike -> Slice and Dice -> Riposte -> Eviscerate."},
      dungeonGear = {
      }
    },
    [57] = {
      title = "+30% CRIT DAMAGE (5/5) & Mirah's Song Quest",
      zone = "Western Plaguelands (Scholomance / Caer Darrow)",
      zoneRange = "55-60",
      hubs = "The Bulwark, Caer Darrow",
      zoneInstructions = "MAX LETHALITY! +30% Critical Strike Damage bonus to Sinister Strike and Riposte! Complete the Caer Darrow quest chain for Scholomance ('Kirtonos the Herald') to receive MIRAH'S SONG (Speed 1.80, +9 Agi, +9 Str)—the premier off-hand sword in Classic WoW!",
      talent = {"name":"Lethality","rank":"5/5","tree":"assassination","icon":"💀","why":"+30% CRIT DAMAGE BONUS! Sinister Strike crits deal devastating chunks of damage!"},
      talentNote = "Mirah's Song paired with Thrash Blade forms the iconic Combat Swords leveling duo.",
      gearTip = "⭐ MIRAH'S SONG: 39.4 DPS, Speed 1.80, +9 Agi, +9 Str. Best off-hand sword in the game!",
      trainerTrain = {},
      rotation = {"Sinister Strike crits shred targets -> Slice and Dice -> Riposte."},
      dungeonGear = {
        { name = "Mirah's Song", quality = "rare", source = "Quest: Kirtonos the Herald (Scholomance)", stats = "57-87 Dmg, 39.4 DPS, Speed 1.80, +9 Agi, +9 Str", tip = "👑 The ultimate off-hand sword for Combat Rogues!" },
      }
    },
    [58] = {
      title = "Improved Slice and Dice (1/3) & Blackrock Depths",
      zone = "Blackrock Depths (BRD)",
      zoneRange = "55-60",
      hubs = "Kargath, Flame Crest",
      zoneInstructions = "Start running Blackrock Depths! Clear the Ring of Law, General Angerforge, and Emperor Dagran Thaurissan. Target: Hand of Justice (+20 AP, 2% extra attack chance!). Complete Onyxia attunement chain.",
      talent = {"name":"Improved Slice and Dice","rank":"1/3","tree":"assassination","icon":"⚔️","why":"Increases the duration of Slice and Dice by 15%."},
      talentNote = "Less combo points spent refreshing Slice and Dice = more 5-point Eviscerates!",
      gearTip = "Hand of Justice trinket (Emperor Dagran Thaurissan in BRD).",
      trainerTrain = {},
      rotation = {"Slice and Dice now lasts longer -> More energy and combo points spent on Eviscerate."},
      dungeonGear = {
        { name = "Hand of Justice", quality = "rare", source = "Emperor Dagran Thaurissan (BRD)", stats = "+20 Attack Power, 2% Chance on hit to grant extra attack", tip = "🔥 BiS melee trinket throughout entire Classic era!" },
      }
    },
    [59] = {
      title = "Improved Slice and Dice (2/3) & Final Push to 60!",
      zone = "Stratholme & Scholomance",
      zoneRange = "55-60",
      hubs = "Light's Hope Chapel",
      zoneInstructions = "Final level before 60! Run Stratholme Live and Undead sides for Cape of the Black Baron (+15 Agi, +20 AP) and Shadowcraft Armor pieces. Turn in all high-level dungeon quests.",
      talent = {"name":"Improved Slice and Dice","rank":"2/3","tree":"assassination","icon":"⚔️","why":"Increases Slice and Dice duration by 30%."},
      talentNote = "Slice and Dice lasts up to 27+ seconds.",
      gearTip = "Cadaverous Armor (Scholomance) or Devilsaur 2-piece set.",
      trainerTrain = {},
      rotation = {"Sinister Strike -> Long Slice and Dice -> Riposte -> 5-CP Eviscerate."},
      dungeonGear = {
        { name = "Cape of the Black Baron", quality = "rare", source = "Baron Rivendare (Stratholme)", stats = "+15 Agility, +20 Attack Power", tip = "BiS rogue cloak!" },
      }
    },
    [60] = {
      title = "LEVEL 60 ACHIEVED - RAID READY COMBAT SWORD ROGUE!",
      zone = "Orgrimmar / Blackrock Spire / Stratholme",
      zoneRange = "60",
      hubs = "Orgrimmar, Undercity",
      zoneInstructions = "CONGRATULATIONS! You have conquered Classic WoW and reached Level 60 as a Combat Swords Rogue! 1) Train max rank abilities: Sinister Strike Rank 9, Eviscerate Rank 8, Instant Poison VI. 2) Equip the iconic Thrash Blade (Main Hand) and Mirah's Song (Off-Hand). 3) Complete Devilsaur 2-piece set (+2% Hit, +74 AP!). 4) Get attuned for Molten Core and Onyxia's Lair. You are now a top-tier DPS juggernaut for the Horde!",
      talent = {"name":"Improved Slice and Dice","rank":"3/3","tree":"assassination","icon":"⚔️","why":"+45% SLICE AND DICE DURATION! Keeps your attack speed bonus up for almost half a minute per cast!"},
      talentNote = "You are now fully leveled, geared, and raid-ready for Molten Core!",
      gearTip = "Devilsaur Gauntlets & Leggings (2% Hit bonus), Thrash Blade, Mirah's Song, Hand of Justice, Blackhand's Breadth.",
      trainerTrain = {"Instant Poison (Rank 6)", "Deadly Poison (Rank 4)"},
      rotation = {"Keep Slice and Dice up 100% of the fight (5-point Slice and Dice lasts 30.5 seconds!)", "Pop Blade Flurry + Adrenaline Rush during boss burn phases", "Spam Sinister Strike -> Use Riposte on parry -> Eviscerate at 5 Combo Points!"},
      dungeonGear = {
        { name = "Devilsaur Leggings", quality = "rare", source = "Crafted via Leatherworking (300)", stats = "+12 Stamina, +46 AP, +1% Crit, 2pc: +2% Hit", tip = "👑 Mandatory pre-raid physical DPS armor!" },
        { name = "Devilsaur Gauntlets", quality = "rare", source = "Crafted via Leatherworking (290)", stats = "+9 Stamina, +28 AP, +1% Crit, 2pc: +2% Hit", tip = "👑 Mandatory pre-raid physical DPS gloves!" },
      }
    },
  },

  talentOrder = {
    [10] = { id = "remorseless_attacks", name = "Remorseless Attacks", desc = "After killing an opponent that yields experience, gives a 20% / 40% increased critical strike chance on your next Sinister Strike, Backstab, or Ambush.", icon = "💀", tree = "assassination" },
    [11] = { id = "remorseless_attacks", name = "Remorseless Attacks", desc = "After killing an opponent that yields experience, gives a 20% / 40% increased critical strike chance on your next Sinister Strike, Backstab, or Ambush.", icon = "💀", tree = "assassination" },
    [12] = { id = "improved_sinister_strike", name = "Improved Sinister Strike", desc = "Reduces the Energy cost of your Sinister Strike ability by 3 / 5 (down to 40 energy!).", icon = "⚔️", tree = "combat" },
    [13] = { id = "improved_sinister_strike", name = "Improved Sinister Strike", desc = "Reduces the Energy cost of your Sinister Strike ability by 3 / 5 (down to 40 energy!).", icon = "⚔️", tree = "combat" },
    [14] = { id = "deflection", name = "Deflection", desc = "Increases your Parry chance by 1% to 5%. Prerequisite for Riposte.", icon = "🛡️", tree = "combat" },
    [15] = { id = "deflection", name = "Deflection", desc = "Increases your Parry chance by 1% to 5%. Prerequisite for Riposte.", icon = "🛡️", tree = "combat" },
    [16] = { id = "deflection", name = "Deflection", desc = "Increases your Parry chance by 1% to 5%. Prerequisite for Riposte.", icon = "🛡️", tree = "combat" },
    [17] = { id = "deflection", name = "Deflection", desc = "Increases your Parry chance by 1% to 5%. Prerequisite for Riposte.", icon = "🛡️", tree = "combat" },
    [18] = { id = "deflection", name = "Deflection", desc = "Increases your Parry chance by 1% to 5%. Prerequisite for Riposte.", icon = "🛡️", tree = "combat" },
    [19] = { id = "riposte", name = "Riposte", desc = "A strike that becomes active after parrying an attack. Deals 150% weapon damage and disarms the target for 6 sec for only 10 energy.", icon = "⚔️", tree = "combat" },
    [20] = { id = "precision", name = "Precision", desc = "Increases your chance to hit with melee weapons by 1% to 5%. Eliminates yellow attack misses against same-level mobs.", icon = "🎯", tree = "combat" },
    [21] = { id = "precision", name = "Precision", desc = "Increases your chance to hit with melee weapons by 1% to 5%. Eliminates yellow attack misses against same-level mobs.", icon = "🎯", tree = "combat" },
    [22] = { id = "precision", name = "Precision", desc = "Increases your chance to hit with melee weapons by 1% to 5%. Eliminates yellow attack misses against same-level mobs.", icon = "🎯", tree = "combat" },
    [23] = { id = "precision", name = "Precision", desc = "Increases your chance to hit with melee weapons by 1% to 5%. Eliminates yellow attack misses against same-level mobs.", icon = "🎯", tree = "combat" },
    [24] = { id = "precision", name = "Precision", desc = "Increases your chance to hit with melee weapons by 1% to 5%. Eliminates yellow attack misses against same-level mobs.", icon = "🎯", tree = "combat" },
    [25] = { id = "dual_wield_specialization", name = "Dual Wield Specialization", desc = "Increases the damage dealt by your off-hand weapon by 10% to 50%.", icon = "🗡️", tree = "combat" },
    [26] = { id = "dual_wield_specialization", name = "Dual Wield Specialization", desc = "Increases the damage dealt by your off-hand weapon by 10% to 50%.", icon = "🗡️", tree = "combat" },
    [27] = { id = "dual_wield_specialization", name = "Dual Wield Specialization", desc = "Increases the damage dealt by your off-hand weapon by 10% to 50%.", icon = "🗡️", tree = "combat" },
    [28] = { id = "dual_wield_specialization", name = "Dual Wield Specialization", desc = "Increases the damage dealt by your off-hand weapon by 10% to 50%.", icon = "🗡️", tree = "combat" },
    [29] = { id = "dual_wield_specialization", name = "Dual Wield Specialization", desc = "Increases the damage dealt by your off-hand weapon by 10% to 50%.", icon = "🗡️", tree = "combat" },
    [30] = { id = "blade_flurry", name = "Blade Flurry", desc = "Increases your attack speed by 20% and strikes an additional nearby enemy for 100% damage for 15 sec on a 2 min cooldown.", icon = "🌀", tree = "combat" },
    [31] = { id = "sword_specialization", name = "Sword Specialization", desc = "Gives you a 1% to 5% chance to get an extra attack on the same target after dealing damage with your sword.", icon = "⚔️", tree = "combat" },
    [32] = { id = "sword_specialization", name = "Sword Specialization", desc = "Gives you a 1% to 5% chance to get an extra attack on the same target after dealing damage with your sword.", icon = "⚔️", tree = "combat" },
    [33] = { id = "sword_specialization", name = "Sword Specialization", desc = "Gives you a 1% to 5% chance to get an extra attack on the same target after dealing damage with your sword.", icon = "⚔️", tree = "combat" },
    [34] = { id = "sword_specialization", name = "Sword Specialization", desc = "Gives you a 1% to 5% chance to get an extra attack on the same target after dealing damage with your sword.", icon = "⚔️", tree = "combat" },
    [35] = { id = "sword_specialization", name = "Sword Specialization", desc = "Gives you a 1% to 5% chance to get an extra attack on the same target after dealing damage with your sword.", icon = "⚔️", tree = "combat" },
    [36] = { id = "weapon_expertise", name = "Weapon Expertise", desc = "Increases your skill with Swords, Daggers, and Maces by 3 / 5. Reduces glancing blow penalty.", icon = "⚔️", tree = "combat" },
    [37] = { id = "weapon_expertise", name = "Weapon Expertise", desc = "Increases your skill with Swords, Daggers, and Maces by 3 / 5. Reduces glancing blow penalty.", icon = "⚔️", tree = "combat" },
    [38] = { id = "aggression", name = "Aggression", desc = "Increases the damage of your Sinister Strike and Eviscerate abilities by 2% to 6%.", icon = "💢", tree = "combat" },
    [39] = { id = "aggression", name = "Aggression", desc = "Increases the damage of your Sinister Strike and Eviscerate abilities by 2% to 6%.", icon = "💢", tree = "combat" },
    [40] = { id = "adrenaline_rush", name = "Adrenaline Rush", desc = "Increases your energy regeneration rate by 100% for 15 sec on a 5 min cooldown.", icon = "⚡", tree = "combat" },
    [41] = { id = "aggression", name = "Aggression", desc = "Increases the damage of your Sinister Strike and Eviscerate abilities by 2% to 6%.", icon = "💢", tree = "combat" },
    [42] = { id = "malice", name = "Malice", desc = "Increases your critical strike chance by 1% to 5%.", icon = "🗡️", tree = "assassination" },
    [43] = { id = "malice", name = "Malice", desc = "Increases your critical strike chance by 1% to 5%.", icon = "🗡️", tree = "assassination" },
    [44] = { id = "malice", name = "Malice", desc = "Increases your critical strike chance by 1% to 5%.", icon = "🗡️", tree = "assassination" },
    [45] = { id = "malice", name = "Malice", desc = "Increases your critical strike chance by 1% to 5%.", icon = "🗡️", tree = "assassination" },
    [46] = { id = "malice", name = "Malice", desc = "Increases your critical strike chance by 1% to 5%.", icon = "🗡️", tree = "assassination" },
    [47] = { id = "ruthlessness", name = "Ruthlessness", desc = "Gives your finishing moves a 20% / 40% / 60% chance to add a combo point to your target.", icon = "🩸", tree = "assassination" },
    [48] = { id = "ruthlessness", name = "Ruthlessness", desc = "Gives your finishing moves a 20% / 40% / 60% chance to add a combo point to your target.", icon = "🩸", tree = "assassination" },
    [49] = { id = "ruthlessness", name = "Ruthlessness", desc = "Gives your finishing moves a 20% / 40% / 60% chance to add a combo point to your target.", icon = "🩸", tree = "assassination" },
    [50] = { id = "relentless_strikes", name = "Relentless Strikes", desc = "Your finishing moves have a 20% chance per combo point to restore 25 energy (100% on a 5-CP finisher!).", icon = "⚡", tree = "assassination" },
    [51] = { id = "murder", name = "Murder", desc = "Increases all damage dealt by 1% / 2% against Humanoids, Giants, Beasts, and Dragonkin.", icon = "🗡️", tree = "assassination" },
    [52] = { id = "murder", name = "Murder", desc = "Increases all damage dealt by 1% / 2% against Humanoids, Giants, Beasts, and Dragonkin.", icon = "🗡️", tree = "assassination" },
    [53] = { id = "lethality", name = "Lethality", desc = "Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6% to 30%.", icon = "💀", tree = "assassination" },
    [54] = { id = "lethality", name = "Lethality", desc = "Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6% to 30%.", icon = "💀", tree = "assassination" },
    [55] = { id = "lethality", name = "Lethality", desc = "Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6% to 30%.", icon = "💀", tree = "assassination" },
    [56] = { id = "lethality", name = "Lethality", desc = "Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6% to 30%.", icon = "💀", tree = "assassination" },
    [57] = { id = "lethality", name = "Lethality", desc = "Increases the critical strike damage bonus of your Sinister Strike, Gouge, and Riposte by 6% to 30%.", icon = "💀", tree = "assassination" },
    [58] = { id = "improved_slice_and_dice", name = "Improved Slice and Dice", desc = "Increases the duration of your Slice and Dice ability by 15% / 30% / 45%.", icon = "⚔️", tree = "assassination" },
    [59] = { id = "improved_slice_and_dice", name = "Improved Slice and Dice", desc = "Increases the duration of your Slice and Dice ability by 15% / 30% / 45%.", icon = "⚔️", tree = "assassination" },
    [60] = { id = "improved_slice_and_dice", name = "Improved Slice and Dice", desc = "Increases the duration of your Slice and Dice ability by 15% / 30% / 45%.", icon = "⚔️", tree = "assassination" },
  },

  classQuests = {
    { lvl = 10, title = "Dual Wielding Training", zone = "Brill / Undercity", npc = "Marion Call", desc = "Train Dual Wielding at level 10 to equip an off-hand dagger or sword, doubling your auto-attack output!" },
    { lvl = 16, title = "Lockpicking Mastery & Pirate Footlockers", zone = "Ratchet (Pirate Ships)", npc = "Wrenix the Wrench", desc = "Acquire your Thieves' Tools and practice picking the Buccaneer's Footlockers aboard the Southsea pirate vessel off Ratchet." },
    { lvl = 20, title = "The Shattered Hand & Sludge Fen Poisons", zone = "The Barrens (Sludge Fen Tower)", npc = "Shenthul (Orgrimmar)", desc = "CRUCIAL QUEST! Infiltrate the Venture Co. tower, pickpocket the Gallywix Key, crack the chest, craft antitoxin, and learn Instant Poison, Deadly Poison, and Thistle Tea!" },
    { lvl = 24, title = "Detect Traps & Disarm", zone = "Undercity (Rogues' Quarter)", npc = "Rogue Trainers", desc = "Learn to detect stealth traps and disarm enemy defenses." },
    { lvl = 34, title = "Blind & Blinding Powder", zone = "Undercity / Orgrimmar", npc = "Rogue Trainers", desc = "Learn Blind to disorient targets for 10 seconds. Always carry Fadeleaf to craft Blinding Powder." }
  },

  macros = {
    { title = "Spam-Safe Stealth", code = "#showtooltip Stealth\n/cast [nostealth] Stealth", desc = "Spamming will never accidentally break stealth." },
    { title = "Sinister Strike + Auto-Attack", code = "#showtooltip Sinister Strike\n/startattack\n/cast Sinister Strike", desc = "Keeps swinging even when energy is depleted." },
    { title = "Riposte Priority Strike", code = "#showtooltip Riposte\n/cast Riposte\n/cast Sinister Strike", desc = "Fires Riposte whenever parry occurs; otherwise casts Sinister Strike." },
    { title = "Gouge & First Aid Reset", code = "#showtooltip Gouge\n/cast Gouge\n/stopattack", desc = "Incapacitates target for 4 seconds and stops attack so you can bandage." },
    { title = "Blade Flurry + Adrenaline Rush Cleave", code = "#showtooltip Adrenaline Rush\n/cast Blade Flurry\n/cast Adrenaline Rush", desc = "Pops 100% energy regen and 2-target cleave simultaneously for massive burst." }
  }
}

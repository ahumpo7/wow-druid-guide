-- WoW Forever: Complete Warlock Leveling Codex (Levels 1-60)
local addonName, addonTable = ...
WoWGuide_Warlock = WoWGuide_Warlock or {}
if addonTable then addonTable.Warlock = WoWGuide_Warlock end
_G["WoWGuide_Warlock"] = WoWGuide_Warlock

WoWGuide_Warlock.className = "WARLOCK"
WoWGuide_Warlock.classColor = "9482C9"
WoWGuide_Warlock.title = "Affliction Drain Tank & Wand Leveling"
WoWGuide_Warlock.specSummary = "30 Affliction / 21 Demonology"
WoWGuide_Warlock.levels = {
  [1] = {
    title = "Awakening in Deathknell & The First Minion",
    zone = "Tirisfal Glades (Deathknell)",
    zoneRange = "1-6",
    hubs = "Deathknell Crypt, Shadow Grave",
    zoneInstructions = "Rise from the crypt and speak to Undertaker Mordo and Shadow Priest Sarvis. Complete 'Rude Awakening' and 'The Mind's Eye'. Accept your first Warlock class quest to summon and bind the Imp. Learn to cast Immolate, then Shadow Bolt, and finish with melee/wand attacks.",
    talent = nil,
    talentNote = "First talent point unlocks at Level 10. Prepare for Affliction (Improved Corruption).",
    gearTip = "Prioritize any gear with Intellect and Stamina. Spirit helps health/mana regeneration between pulls.",
    trainerTrain = {"Shadow Bolt (Rank 1)", "Demon Skin (Rank 1)", "Immolate (Rank 1)", "Summon Imp (Quest)"},
    rotation = {"Send Imp in to attack (set Imp on Defensive)", "Cast Immolate at 30 yards range", "Cast Shadow Bolt to burst initial health", "Melee with dagger/staff or wand to conserve mana"},
    dungeonGear = {
    }
  },
  [2] = {
    title = "Deathknell Scavengers & Bloodsnarl Vines",
    zone = "Tirisfal Glades (Deathknell)",
    zoneRange = "1-6",
    hubs = "Deathknell",
    zoneInstructions = "Pick up 'Scavenging Deathknell' and 'Night Web's Hollow'. Kill Scavengers and Duskbats around Deathknell. Train Corruption at Level 4 immediately when you return.",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Equip any cloth items that drop from humanoids or bandits.",
    trainerTrain = {},
    rotation = {"Immolate -> Shadow Bolt -> Melee/Wand until dead."},
    dungeonGear = {
    }
  },
  [3] = {
    title = "Night Web's Hollow Spider Clearing",
    zone = "Tirisfal Glades (Deathknell)",
    zoneRange = "1-6",
    hubs = "Deathknell",
    zoneInstructions = "Enter Night Web's Hollow and kill Young Night Web Spiders and Night Web Spiders. Collect Venom Glands and Ichor. Save cloth for First Aid bandages.",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Keep all Linen Cloth! First Aid is vital for Warlocks to restore HP after Life Tap.",
    trainerTrain = {},
    rotation = {"Immolate -> Shadow Bolt -> Imp Firebolt -> Finish with staff."},
    dungeonGear = {
    }
  },
  [4] = {
    title = "Corruption & Bane of Agony Acquired!",
    zone = "Tirisfal Glades (Deathknell)",
    zoneRange = "1-6",
    hubs = "Deathknell",
    zoneInstructions = "Return to Maximillion (Warlock Trainer) in Deathknell. Learn Corruption (Rank 1) and Curse of Weakness. You are now a true damage-over-time caster! Pick up 'The Damned' and 'Marla's Last Wish'.",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Visit general goods vendor to sell trash grays and buy 6-slot bags if available.",
    trainerTrain = {"Corruption (Rank 1)", "Curse of Weakness (Rank 1)"},
    rotation = {"Send Imp to attack with Firebolt", "Cast Immolate (2.0s cast)", "Cast Corruption (DoT begins ticking)", "Cast Shadow Bolt or melee auto-attack"},
    dungeonGear = {
    }
  },
  [5] = {
    title = "Deathknell Finale & Lesser Magic Wand Milestone",
    zone = "Tirisfal Glades (Deathknell)",
    zoneRange = "1-6",
    hubs = "Deathknell -> Road to Brill",
    zoneInstructions = "Kill Samuel Fitts and his Rot Hide gnolls for 'The Damned'. Turn in all quests in Deathknell and receive 'Vital Intelligence' to head north to Brill. Check the Auction House or an Enchanter for a Lesser Magic Wand (req lvl 5) - it increases your leveling speed by 200%!",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "CRAFT OR BUY: Lesser Magic Wand (11.3 DPS). Outdamages your spells with ZERO mana cost!",
    trainerTrain = {},
    rotation = {"Immolate -> Corruption -> Shoot Lesser Magic Wand until mob is dead! Zero mana wasted."},
    dungeonGear = {
      { name = "Lesser Magic Wand", quality = "uncommon", source = "Enchanting (Skill 10)", stats = "11.3 DPS, Fire Damage, Speed 1.50", tip = "Crucial Warlock leveling milestone!" },
    }
  },
  [6] = {
    title = "Arrival in Brill & Life Tap Unleashed",
    zone = "Tirisfal Glades (Brill)",
    zoneRange = "6-10",
    hubs = "Brill (Innkeeper Renee, Flight Master Karos Razok)",
    zoneInstructions = "Set your Hearthstone at the Gallows End Tavern in Brill. Speak to Apprentice Aleister and Deathguard Simmer. Learn Life Tap (Rank 1) - your engine of infinite mana. Pick up 'A New Plague', 'A Putrid Task', and 'The Chill Web Spider'.",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Look for 'Of the Eagle' (Int + Stam) or 'Of the Owl' (Int + Spirit) cloth pieces.",
    trainerTrain = {"Life Tap (Rank 1)", "Shadow Bolt (Rank 2)"},
    rotation = {"Send Imp to attack", "Immolate -> Corruption -> Shoot Wand", "Tap Life Tap once per mob to convert health to mana", "Bandage or eat between combat to stay topped"},
    dungeonGear = {
    }
  },
  [7] = {
    title = "Garren's Haunt & Fields of Tirisfal",
    zone = "Tirisfal Glades (Brill)",
    zoneRange = "6-10",
    hubs = "Brill",
    zoneInstructions = "Head east to Garren's Haunt for 'A Putrid Task' and kill Rotting Dead and Ravaged Corpse. Collect Putrid Claws. Be cautious of wandering Son of Arugal (level 24 elite roaming nearby silverpine border).",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Check corpse drops for green cloth gear and wand upgrades.",
    trainerTrain = {},
    rotation = {"Corruption -> Immolate -> Wand. Use Life Tap while moving."},
    dungeonGear = {
    }
  },
  [8] = {
    title = "Bane of Agony & Fear Acquired!",
    zone = "Tirisfal Glades (Brill)",
    zoneRange = "6-10",
    hubs = "Brill",
    zoneInstructions = "Visit Luther Pickman (Warlock Trainer) in Brill. Train Bane of Agony (Rank 1) and Fear (Rank 1) - your ultimate crowd control tool. Pick up 'The Haunted Mills' and 'At War with the Scarlet Crusade'.",
    talent = nil,
    talentNote = "Talents unlock at Level 10.",
    gearTip = "Keep your Wand equipped and stay topped on Food/Water before venturing into Agamand Mills.",
    trainerTrain = {"Bane of Agony (Rank 1)", "Fear (Rank 1)"},
    rotation = {"Immolate -> Bane of Agony -> Corruption", "Cast Fear if mob reaches melee range or if you pull two mobs", "Wand down the feared target safely!"},
    dungeonGear = {
    }
  },
  [9] = {
    title = "Agamand Mills & Scarlet Crusade Camp",
    zone = "Tirisfal Glades (Agamand Mills)",
    zoneRange = "6-10",
    hubs = "Brill",
    zoneInstructions = "Head northwest to Agamand Mills. Kill Vicious Night Web Spiders and Scarlet Converts / Initiates for Captain Perrine. Gather Devlin's Remains. Prepare your gold and reagents for Level 10!",
    talent = nil,
    talentNote = "First talent point at Level 10! You will choose Improved Corruption.",
    gearTip = "Sell grays in Brill and prepare 10 silver for trainer skills and grimoires.",
    trainerTrain = {},
    rotation = {"Bane of Agony -> Corruption -> Immolate -> Wand. Use Fear if adds join."},
    dungeonGear = {
    }
  },
  [10] = {
    title = "VOIDWALKER UNLOCKED & IMPROVED CORRUPTION (1/5)",
    zone = "Tirisfal Glades (Brill) -> The Barrens / Silverpine",
    zoneRange = "10-15",
    hubs = "Brill, Undercity",
    zoneInstructions = "MAJOR MILESTONE! Visit Luther Pickman in Brill to accept 'The Binding' (Voidwalker Class Quest). Travel to the ruined tower in northern Tirisfal, defeat the summoned Voidwalker, and bind it to your will! Now you have a personal tank minion with Taunt (Torment) and Sacrifice shield!",
    talent = { name = "Improved Corruption", rank = "1/5", tree = "affliction", why = "Reduces cast time of Corruption by 0.4s. Working toward making Corruption 100% INSTANT CAST at 5/5!" },
    talentNote = "Start of Affliction Mastery. Instant Corruption is the foundation of Warlock leveling.",
    gearTip = "Create Minor Healthstone before every combat run for an instant emergency heal. Keep 4-8 Soul Shards ready for pet summons.",
    trainerTrain = {"Create Healthstone (Minor)", "Summon Voidwalker (Quest)", "Drain Soul (Rank 1)", "Demon Skin (Rank 2)", "Immolate (Rank 2)", "Health Funnel (Rank 1)"},
    rotation = {"Order Voidwalker to attack (Torment grabs aggro)", "Bane of Agony -> Corruption -> Immolate", "Shoot Wand while Voidwalker tanks", "Cast Drain Soul when mob reaches 10% HP to harvest a Soul Shard!"},
    dungeonGear = {
      { name = "Staff of the Blessed", quality = "uncommon", source = "Tirisfal Glades Quest", stats = "+4 Intellect, +2 Spirit", tip = "Solid starter caster staff." },
    }
  },
  [11] = {
    title = "Silverpine Incursion & Improved Corruption (2/5)",
    zone = "Silverpine Forest (The Sepulcher)",
    zoneRange = "10-15",
    hubs = "The Sepulcher (Flight Master Karos, Innkeeper)",
    zoneInstructions = "Head south into Silverpine Forest and reach The Sepulcher. Grab the flight path! Pick up 'Proudfang / Moonrage Whitescalp' quests. Watch out for wandering Arugal's pets.",
    talent = { name = "Improved Corruption", rank = "2/5", tree = "affliction", why = "Reduces Corruption cast time by 0.8s (from 2.0s to 1.2s)." },
    talentNote = "Corruption cast is noticeably faster.",
    gearTip = "Keep Voidwalker's Torment at maximum rank from the Demon Trainer in Undercity.",
    trainerTrain = {},
    rotation = {"Voidwalker Torment -> Agony -> Corruption -> Immolate -> Wand."},
    dungeonGear = {
    }
  },
  [12] = {
    title = "Silverpine Crypts & Improved Corruption (3/5)",
    zone = "Silverpine Forest (The Sepulcher)",
    zoneRange = "10-15",
    hubs = "The Sepulcher",
    zoneInstructions = "Travel to Pyrewood Village border and kill Moonrage Worgen. Train Life Tap (Rank 2) and Corruption (Rank 2) at the Warlock Trainer in Undercity (Magic Quarter).",
    talent = { name = "Improved Corruption", rank = "3/5", tree = "affliction", why = "Reduces Corruption cast time by 1.2s (only 0.8s cast remaining!)." },
    talentNote = "Corruption is almost instant.",
    gearTip = "Check weapon vendors in Undercity for off-hand books with intellect.",
    trainerTrain = {"Curse of Weakness (Rank 2)", "Shadow Bolt (Rank 3)"},
    rotation = {"Voidwalker attacks -> Agony -> Corruption -> Wand -> Life Tap -> First Aid bandage."},
    dungeonGear = {
    }
  },
  [13] = {
    title = "Greater Magic Wand Leap & Improved Corruption (4/5)",
    zone = "Silverpine Forest -> The Barrens (Crossroads)",
    zoneRange = "10-15",
    hubs = "The Crossroads (The Barrens)",
    zoneInstructions = "Take the Zeppelin from Brill to Durotar, then walk west to The Crossroads in The Barrens! CRUCIAL: Acquire a Greater Magic Wand (req lvl 13, 17.5 DPS). This wand single-handedly obliterates mobs in seconds without spending any mana!",
    talent = { name = "Improved Corruption", rank = "4/5", tree = "affliction", why = "Reduces Corruption cast time by 1.6s (down to 0.4s)." },
    talentNote = "One more point until full instant-cast Corruption!",
    gearTip = "GREATER MAGIC WAND: 17.5 Arcane DPS. Craft via Enchanting (75) or purchase on AH.",
    trainerTrain = {},
    rotation = {"Voidwalker Torment -> Agony -> Corruption -> Drain Life or Shoot Greater Magic Wand!", "Greater Magic Wand deals 17.5 DPS for 0 mana!"},
    dungeonGear = {
      { name = "Greater Magic Wand", quality = "uncommon", source = "Enchanting (75) / AH", stats = "17.5 DPS, Arcane, Speed 1.30", tip = "Huge DPS leap for Warlock leveling!" },
    }
  },
  [14] = {
    title = "INSTANT CORRUPTION UNLOCKED (5/5) & Barrens Quests",
    zone = "The Barrens (The Crossroads)",
    zoneRange = "10-15",
    hubs = "The Crossroads",
    zoneInstructions = "GAME CHANGER! Improved Corruption reaches 5/5, making Corruption 100% INSTANT CAST! Now you can tag mobs, kite, and cast DoTs on the run without stopping. Pick up 'Disrupt the Attacks', 'The Forgotten Pools', and 'Plainstrider Menace'.",
    talent = { name = "Improved Corruption", rank = "5/5", tree = "affliction", why = "CORRUPTION IS NOW INSTANT CAST! Cast on the move, kite effortlessly, and tag mobs instantly!" },
    talentNote = "The single biggest quality-of-life milestone for Warlock leveling.",
    gearTip = "Look for 'Of the Eagle' cloth robes and pants.",
    trainerTrain = {"Corruption (Rank 2)", "Drain Life (Rank 1)", "Curse of Recklessness (Rank 1)"},
    rotation = {"Cast instant Corruption while running toward mob", "Voidwalker charges in and Torments", "Apply Bane of Agony instantly", "Wand with Greater Magic Wand -> Mob dies -> Life Tap -> Keep running!"},
    dungeonGear = {
    }
  },
  [15] = {
    title = "Improved Drain Soul (1/2) & Barrens Oases",
    zone = "The Barrens (The Crossroads)",
    zoneRange = "15-20",
    hubs = "The Crossroads",
    zoneInstructions = "Investigate The Forgotten Pools and The Lushwater Oasis for Apothecary Helbrim. Kill Oasis Snapjaws and Centaur. Drain Soul right as the mob dies to trigger mana regen.",
    talent = { name = "Improved Drain Soul", rank = "1/2", tree = "affliction", why = "Provides a 50% increase to mana regeneration for 10 sec after killing a mob that yields experience while draining its soul!" },
    talentNote = "Combines with Life Tap to give zero downtime.",
    gearTip = "First Aid: Keep your bandages updated to Thick Linen or Silk.",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Agony -> Wand -> Channel Drain Soul on final 5% HP."},
    dungeonGear = {
    }
  },
  [16] = {
    title = "100% MANA REGEN ON KILL (2/2) & Samophlange",
    zone = "The Barrens (The Crossroads & Sludge Fen)",
    zoneRange = "15-20",
    hubs = "The Crossroads, Ratchet",
    zoneInstructions = "Improved Drain Soul hits 2/2! Killing an enemy while channeling Drain Soul gives +100% mana regeneration and allows 50% mana regen to continue while casting for 10 seconds! Complete 'The Samophlange' chain at the Venture Co. oil rig in Sludge Fen.",
    talent = { name = "Improved Drain Soul", rank = "2/2", tree = "affliction", why = "100% INCREASE TO MANA REGEN FOR 10 SECONDS ON KILL! Zero downtime leveling unlocked!" },
    talentNote = "Always finish mobs with Drain Soul to refill your mana bar automatically.",
    gearTip = "Necrology Robes or Burlap Vest of the Eagle.",
    trainerTrain = {"Life Tap (Rank 2)", "Unending Breath"},
    rotation = {"Instant Corruption -> Bane of Agony", "Wand down to 10% health", "Cast Drain Soul -> Mob dies -> Mana bar surges back to full!"},
    dungeonGear = {
    }
  },
  [17] = {
    title = "Improved Life Tap (1/2) & Ratchet Quests",
    zone = "The Barrens (Ratchet & South Barrens)",
    zoneRange = "15-20",
    hubs = "Ratchet (Gazlowe, Flight Master)",
    zoneInstructions = "Head to Ratchet and grab the Flight Path. Complete 'Raptor Horns', 'Southsea Freebooters', and 'The Guns of Northwatch'.",
    talent = { name = "Improved Life Tap", rank = "1/2", tree = "affliction", why = "Increases mana gained from Life Tap by 10%." },
    talentNote = "Makes your health-to-mana conversion much more efficient.",
    gearTip = "Check Ratchet vendors for upgraded bags (8-slot / 10-slot).",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Agony -> Wand -> Drain Soul finisher -> Life Tap."},
    dungeonGear = {
    }
  },
  [18] = {
    title = "Improved Life Tap (2/2) & Wailing Caverns Pre-Quests",
    zone = "The Barrens (Wailing Caverns & Camp Taurajo)",
    zoneRange = "15-20",
    hubs = "The Crossroads, Camp Taurajo",
    zoneInstructions = "Max out Improved Life Tap (+20% mana conversion). Pick up Wailing Caverns quests: 'Leaders of the Fang', 'Deviate Hides', and 'Smart Drinks'. Optionally run Wailing Caverns for Robe of the Moccasin and Deviate Scale Belt.",
    talent = { name = "Improved Life Tap", rank = "2/2", tree = "affliction", why = "Increases mana awarded by Life Tap by 20%. You now get maximum mana for minimal health spent." },
    talentNote = "Life Tap is now a supercharged mana battery.",
    gearTip = "Look for high Stamina pieces - every point of Stamina translates to more mana via Life Tap!",
    trainerTrain = {"Create Soulstone (Minor)", "Bane of Agony (Rank 2)", "Searing Pain (Rank 1)", "Drain Soul (Rank 2)"},
    rotation = {"Instant Corruption -> Bane of Agony -> Wand -> Drain Soul -> Life Tap."},
    dungeonGear = {
      { name = "Robe of the Moccasin", quality = "uncommon", source = "Lord Cobrahn (Wailing Caverns)", stats = "+6 Spirit, +3 Intellect", tip = "Great caster robe from early dungeon run." },
    }
  },
  [19] = {
    title = "Fel Concentration (1/5) & Wailing Caverns Finale",
    zone = "The Barrens (Camp Taurajo)",
    zoneRange = "15-20",
    hubs = "Camp Taurajo (Flight Master)",
    zoneInstructions = "Kill Thunderhawks and Bristleback Quilboars around Camp Taurajo. Complete 'Tribal Warfare' and 'Betrayal from Within'. Prepare for your Level 20 Succubus class quest!",
    talent = { name = "Fel Concentration", rank = "1/5", tree = "affliction", why = "Gives a 14% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana." },
    talentNote = "Building toward 70% pushback immunity so you can Drain Tank in melee range.",
    gearTip = "Save Silk Cloth and Wool Cloth for tailoring/bandages.",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Agony -> Wand -> Drain Soul finisher."},
    dungeonGear = {
    }
  },
  [20] = {
    title = "SUCCUBUS UNLOCKED & FEL CONCENTRATION (2/5)",
    zone = "The Barrens -> Silverpine -> Undercity",
    zoneRange = "20-25",
    hubs = "Brill / Undercity / The Crossroads",
    zoneInstructions = "MAJOR MILESTONE! Pick up 'Devourer of Souls' (Succubus Class Quest) from Caretaker Caice in Undercity or The Crossroads. Travel to the Silverpine hills and the wetlands of the Barrens to collect the Hearts of Wood. Summon and defeat the Succubus to bind her! The Succubus brings high DPS, Seduction CC, and Lash of Pain!",
    talent = { name = "Fel Concentration", rank = "2/5", tree = "affliction", why = "Gives 28% pushback resistance on channeling Drain Life." },
    talentNote = "Succubus provides incredible single-target leveling DPS.",
    gearTip = "Greater Magic Wand remains excellent, but keep an eye out for Shadowfang Keep caster drops.",
    trainerTrain = {"Demon Armor (Rank 1)", "Summon Succubus (Quest)", "Ritual of Summoning", "Shadow Bolt (Rank 4)", "Immolate (Rank 3)", "Health Funnel (Rank 2)", "Rain of Fire (Rank 1)"},
    rotation = {"Send Succubus in with Lash of Pain (huge damage burst)", "Instant Corruption -> Bane of Agony", "Channel Drain Life or Shoot Wand", "Finish with Drain Soul for mana refund"},
    dungeonGear = {
      { name = "Robes of Arugal", quality = "rare", source = "Baron Silverlaine / Arugal (SFK)", stats = "+10 Intellect, +5 Spirit, +3 Agility", tip = "Best caster robe until your 30s!" },
    }
  },
  [21] = {
    title = "Stonetalon Mountains Foot & Fel Concentration (3/5)",
    zone = "Stonetalon Mountains (Sun Rock Retreat)",
    zoneRange = "20-25",
    hubs = "Sun Rock Retreat (Flight Master)",
    zoneInstructions = "Travel west from The Barrens into Stonetalon Mountains. Grab the Flight Path at Sun Rock Retreat. Complete 'Avenge My Village' and kill Grimtotem Tauren.",
    talent = { name = "Fel Concentration", rank = "3/5", tree = "affliction", why = "Gives 42% pushback resistance on Drain Life." },
    talentNote = "Channeling Drain Life under attack becomes noticeably smoother.",
    gearTip = "Look for 'Of Shadow Wrath' gear (+Shadow Spell Damage). It scales every single tick of Corruption and Drain Life!",
    trainerTrain = {},
    rotation = {"Succubus attacks -> Instant Corruption -> Agony -> Drain Life -> Wand."},
    dungeonGear = {
    }
  },
  [22] = {
    title = "Hillsbrad Foothills & Fel Concentration (4/5)",
    zone = "Hillsbrad Foothills (Tarren Mill)",
    zoneRange = "20-25",
    hubs = "Tarren Mill (Flight Master, Inn)",
    zoneInstructions = "Fly to The Sepulcher and run east into Hillsbrad Foothills! Reach Tarren Mill and secure the Flight Path. Pick up 'The Battle for Hillsbrad' (Town Hall & Farmers) and 'Elixir of Suffering'.",
    talent = { name = "Fel Concentration", rank = "4/5", tree = "affliction", why = "Gives 56% pushback resistance on Drain Life." },
    talentNote = "Almost immune to spell pushback.",
    gearTip = "Check Tarren Mill vendors for high stamina cloth gear.",
    trainerTrain = {"Create Healthstone (Lesser)", "Drain Life (Rank 2)", "Curse of Tongues (Rank 1)", "Eye of Kilrogg", "Curse of Weakness (Rank 3)"},
    rotation = {"Instant Corruption -> Agony -> Drain Life directly tanking mobs in face."},
    dungeonGear = {
    }
  },
  [23] = {
    title = "70% PUSHBACK RESISTANCE (5/5) - DRAIN TANK ONLINE!",
    zone = "Hillsbrad Foothills (Tarren Mill)",
    zoneRange = "20-25",
    hubs = "Tarren Mill",
    zoneInstructions = "MAX FEL CONCENTRATION! You now have a 70% chance to resist pushback while channeling Drain Life. Mobs hitting you in melee will rarely interrupt your heal-drain! You can now face-tank enemies comfortably.",
    talent = { name = "Fel Concentration", rank = "5/5", tree = "affliction", why = "70% CHANCE TO AVOID PUSHBACK ON DRAIN LIFE! The core foundation of the Drain Tank leveling build!" },
    talentNote = "Drain TANK playstyle is officially online. You heal through mob damage while dealing shadow damage.",
    gearTip = "Shadow Spell Damage pieces make Drain Life heal for more!",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Bane of Agony", "Face tank the mob while channeling Drain Life", "Drain Life heals you for all damage taken", "Finish with Drain Soul -> Life Tap back to full mana!"},
    dungeonGear = {
    }
  },
  [24] = {
    title = "Amplify Curse (1/1) & Hillsbrad Fields",
    zone = "Hillsbrad Foothills (Tarren Mill)",
    zoneRange = "20-25",
    hubs = "Tarren Mill",
    zoneInstructions = "Complete 'The Battle for Hillsbrad' part 1 and 2 at Hillsbrad Fields. Kill Hillsbrad Farmers, Clerics, and Miners. Train Life Tap (Rank 4) and Corruption (Rank 4) in Undercity.",
    talent = { name = "Amplify Curse", rank = "1/1", tree = "affliction", why = "Increases the effect of your next Bane of Agony by 50% on a 3 min cooldown. Amazing for elite mobs and quest bosses!" },
    talentNote = "Use Amplify Curse on tough elites or named quest targets.",
    gearTip = "Shadowfang Keep drop: Robes of Arugal or Necrology Robes.",
    trainerTrain = {"Corruption (Rank 3)", "Drain Mana (Rank 1)", "Life Tap (Rank 3)"},
    rotation = {"Amplify Curse + Bane of Agony -> Instant Corruption -> Drain Life -> Wand."},
    dungeonGear = {
    }
  },
  [25] = {
    title = "Nightfall (1/2) & Thousand Needles Arrival",
    zone = "Thousand Needles (Freewind Post)",
    zoneRange = "25-30",
    hubs = "Freewind Post (Flight Master, Innkeeper)",
    zoneInstructions = "Head south through The Barrens into Thousand Needles! Climb the elevator and reach Freewind Post on top of the canyon needle. Grab the Flight Path! Pick up 'Alien Egg', 'Wind Rider', and 'A Different Approach'.",
    talent = { name = "Nightfall", rank = "1/2", tree = "affliction", why = "Gives your Corruption and Drain Life ticks a 2% chance to enter a Shadow Trance, making your next Shadow Bolt 100% INSTANT CAST!" },
    talentNote = "Free instant Shadow Bolts will start proccing randomly during fights.",
    gearTip = "Freewind Post quests reward solid leather/cloth and green rings.",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Bane of Agony -> Drain Life", "Watch for Nightfall 'Shadow Trance' buff -> Immediately fire INSTANT SHADOW BOLT!"},
    dungeonGear = {
    }
  },
  [26] = {
    title = "NIGHTFALL (2/2) & Gravestone Scepter Prep",
    zone = "Thousand Needles & Ashenvale (Splintertree Post)",
    zoneRange = "25-30",
    hubs = "Freewind Post, Splintertree Post",
    zoneInstructions = "Max out Nightfall to 2/2 (4% proc chance per tick). With Corruption and Drain Life ticking simultaneously, Nightfall procs frequently! Pick up 'Blackfathom Villainy' for Blackfathom Deeps - the quest reward is the legendary GRAVESTONE SCEPTER (29.0 DPS Shadow Wand!).",
    talent = { name = "Nightfall", rank = "2/2", tree = "affliction", why = "4% CHANCE PER TICK TO GRANT INSTANT SHADOW BOLT! Massive free burst damage during combat!" },
    talentNote = "Nightfall procs make combat feel incredibly dynamic and fast.",
    gearTip = "TARGET ITEM: Gravestone Scepter (BFD quest: Blackfathom Villainy). Best wand in the entire 20-40 bracket!",
    trainerTrain = {"Demon Armor (Rank 2)", "Curse of Recklessness (Rank 2)"},
    rotation = {"Instant Corruption -> Agony -> Drain Life -> INSTANT Shadow Bolt on proc!"},
    dungeonGear = {
      { name = "Gravestone Scepter", quality = "rare", source = "Quest: Blackfathom Villainy (BFD)", stats = "29.0 DPS, Shadow Damage, Speed 1.50, +5 Shadow Res", tip = "The legendary leveling wand! Carries you all the way to level 45!" },
    }
  },
  [27] = {
    title = "Grim Reach (1/2) & Shimmering Flats Entrance",
    zone = "Thousand Needles (Freewind Post)",
    zoneRange = "25-30",
    hubs = "Freewind Post",
    zoneInstructions = "Clear the Galak Centaur camps in the Thousand Needles basin. Complete 'Assault on Freewind Post'. Turn in 'Alien Egg'.",
    talent = { name = "Grim Reach", rank = "1/2", tree = "affliction", why = "Increases the range of your Affliction spells by 10% (from 30 yds to 33 yds)." },
    talentNote = "Extra range gives more time to tag mobs before they reach you.",
    gearTip = "Ensure your bags have 8-10 Soul Shards for dungeon groups or elite quests.",
    trainerTrain = {},
    rotation = {"Tag from 33 yards with Instant Corruption -> Agony -> Drain Life."},
    dungeonGear = {
    }
  },
  [28] = {
    title = "Grim Reach (2/2) & Tarren Mill Syndicate",
    zone = "Hillsbrad Foothills (Syndicate Camps)",
    zoneRange = "25-30",
    hubs = "Tarren Mill",
    zoneInstructions = "Travel back to Hillsbrad Foothills. Clear Durnholde Keep and the Syndicate camps for 'The Battle for Hillsbrad' finale and 'Prison Break in Durnholde'.",
    talent = { name = "Grim Reach", rank = "2/2", tree = "affliction", why = "Increases Affliction range by 20% (maximum 36 yards!)." },
    talentNote = "36-yard Corruption and Agony range lets you pull from safe distances.",
    gearTip = "Silk bandages from First Aid (150) heal for 400 HP over 8 sec.",
    trainerTrain = {"Banish (Rank 1)", "Bane of Agony (Rank 3)", "Shadow Bolt (Rank 5)", "Create Firestone (Lesser)", "Create Soulstone (Lesser)", "Immolate (Rank 4)"},
    rotation = {"36yd Corruption -> 36yd Agony -> Drain Life -> Instant Shadow Bolt on Nightfall proc."},
    dungeonGear = {
    }
  },
  [29] = {
    title = "Improved Drain Life (1/5) & Level 30 Preparation",
    zone = "Thousand Needles (Mirage Raceway)",
    zoneRange = "25-30",
    hubs = "Mirage Raceway (Shimmering Flats)",
    zoneInstructions = "Head east into the Shimmering Flats! Grab the quests at the Gnomish and Goblin race track: 'Rocket Car Parts', 'Salt Flat Venom', and 'Hardened Shells'. Prepare for Level 30 Felhunter quest!",
    talent = { name = "Improved Drain Life", rank = "1/5", tree = "affliction", why = "Increases the health drained by your Drain Life spell by 2%." },
    talentNote = "Next level is Siphon Life - the crown jewel of Affliction leveling!",
    gearTip = "Sell full bags at Mirage Raceway vendor.",
    trainerTrain = {},
    rotation = {"Instant Corruption -> Bane of Agony -> Drain Life -> Drain Soul on kill."},
    dungeonGear = {
    }
  },
  [30] = {
    title = "SIPHON LIFE UNLOCKED (1/1) & FELHUNTER MINION!",
    zone = "Thousand Needles -> Ratchet -> Undercity",
    zoneRange = "30-35",
    hubs = "Freewind Post, Mirage Raceway, Undercity",
    zoneInstructions = "MASSIVE MILESTONE! 1) Train SIPHON LIFE - a permanent 30-second heal-over-time that damages the enemy while continually healing you! 2) Accept 'Tome of the Cabal' (Felhunter Class Quest) from Mennet Carkiek in Undercity. Travel to Ratchet, Hillsbrad, and Thousand Needles to gather the pages and summon your Felhunter (magic devourer and caster slayer)!",
    talent = { name = "Siphon Life", rank = "1/1", tree = "affliction", why = "SIPHON LIFE UNLOCKED! A 30-second DoT that transfers health from the target directly to you every 3 seconds! You now heal continuously while dealing damage!" },
    talentNote = "Your DoT trifecta is now complete: Corruption + Bane of Agony + Siphon Life!",
    gearTip = "Shadow Damage gear makes Siphon Life tick for massive healing numbers.",
    trainerTrain = {"Summon Felhunter (Quest)", "Enslave Demon (Rank 1)", "Drain Life (Rank 3)", "Drain Soul (Rank 3)", "Hellfire (Rank 1)"},
    rotation = {"Instant Corruption -> Siphon Life -> Bane of Agony (all 3 DoTs ticking!)", "Channel Drain Life -> Double healing incoming!", "Health stays near 100% while mob melts", "Life Tap to full mana -> Next mob immediately!"},
    dungeonGear = {
      { name = "Hypnotic Blade", quality = "rare", source = "Scarlet Monastery (Library)", stats = "+8 Intellect, +3 Spirit, +9 Spell Damage", tip = "Incredible caster one-hand dagger." },
    }
  },
  [31] = {
    title = "Shadow Mastery (1/5) & Shimmering Flats Speedrun",
    zone = "Thousand Needles (Shimmering Flats)",
    zoneRange = "30-35",
    hubs = "Mirage Raceway",
    zoneInstructions = "The Shimmering Flats is the single best solo grinding zone in the game! Mobs are densely packed turtles, basilisks, and scorpids with no line of sight obstructions. Dot 2-3 mobs simultaneously and let Siphon Life heal you through everything!",
    talent = { name = "Shadow Mastery", rank = "1/5", tree = "affliction", why = "Increases the damage dealt by your Shadow spells or effects by 2%." },
    talentNote = "Shadow Mastery increases damage AND healing of all shadow abilities.",
    gearTip = "Heavy Silk Bandages heal for 640 HP.",
    trainerTrain = {},
    rotation = {"Multi-dot: Dot Mob A (Corruption + Siphon + Agony), Dot Mob B, Drain Life Mob A."},
    dungeonGear = {
    }
  },
  [32] = {
    title = "Shadow Mastery (2/5) & Arathi Highlands Arrival",
    zone = "Arathi Highlands (Hammerfall)",
    zoneRange = "30-35",
    hubs = "Hammerfall (Flight Master, Innkeeper)",
    zoneInstructions = "Travel east from Tarren Mill across the bridge into Arathi Highlands. Secure the Hammerfall Flight Path. Pick up 'Hammerfall', 'Foul Magics', and 'Sigil of Stromgarde'.",
    talent = { name = "Shadow Mastery", rank = "2/5", tree = "affliction", why = "Increases Shadow spell damage by 4%." },
    talentNote = "Both your damage and healing increase by 4%.",
    gearTip = "Look for 'Of Shadow Wrath' shoulders and belts.",
    trainerTrain = {"Curse of the Elements (Rank 1)", "Fear (Rank 2)", "Shadow Ward (Rank 1)"},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Instant Shadow Bolt on proc."},
    dungeonGear = {
    }
  },
  [33] = {
    title = "Shadow Mastery (3/5) & Desolace (Ghost Walker Post)",
    zone = "Desolace (Ghost Walker Post / Shadowprey)",
    zoneRange = "30-35",
    hubs = "Ghost Walker Post, Shadowprey Village",
    zoneInstructions = "Travel west from Stonetalon into Desolace. Grab Ghost Walker Post and Shadowprey Village flight paths. Complete 'Gelkis Alliance' (kill Magram centaur) and 'Bone Collector'.",
    talent = { name = "Shadow Mastery", rank = "3/5", tree = "affliction", why = "Increases Shadow spell damage by 6%." },
    talentNote = "6% shadow damage bonus active across all abilities.",
    gearTip = "Shadowprey Village has fishing vendors and fish quests.",
    trainerTrain = {},
    rotation = {"Multi-dot centaur camps with Siphon Life + Corruption."},
    dungeonGear = {
    }
  },
  [34] = {
    title = "Shadow Mastery (4/5) & Stranglethorn Vale Landing",
    zone = "Stranglethorn Vale (Grom'gol Base Camp)",
    zoneRange = "30-35",
    hubs = "Grom'gol Base Camp (Zeppelin to Undercity/Orgrimmar)",
    zoneInstructions = "Take the Zeppelin from Undercity directly to Grom'gol Base Camp in Stranglethorn Vale! Grab the Flight Path. Pick up 'Welcome to the Jungle', 'Bloodscalp Ears', and 'Hunt for Yenniku'.",
    talent = { name = "Shadow Mastery", rank = "4/5", tree = "affliction", why = "Increases Shadow spell damage by 8%." },
    talentNote = "Only 1 point away from full +10% Shadow Mastery!",
    gearTip = "Keep PvP trinket or healthstone ready on Grom'gol's contested roads.",
    trainerTrain = {"Create Healthstone (Rank 3)", "Corruption (Rank 4)", "Searing Pain (Rank 2)", "Rain of Fire (Rank 2)"},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Wand."},
    dungeonGear = {
    }
  },
  [35] = {
    title = "10% SHADOW MASTERY (5/5) & Nesingwary Camp",
    zone = "Stranglethorn Vale (Nesingwary Expedition)",
    zoneRange = "35-40",
    hubs = "Grom'gol, Nesingwary's Camp",
    zoneInstructions = "MAX SHADOW MASTERY! All Shadow spells (Corruption, Drain Life, Siphon Life, Agony, Shadow Bolt) deal +10% MORE DAMAGE! Complete the Tiger, Panther, and Raptor mastery hunting quests at Nesingwary's camp.",
    talent = { name = "Shadow Mastery", rank = "5/5", tree = "affliction", why = "+10% SHADOW SPELL DAMAGE AND DRAIN HEALING! Every single dot and drain is now boosted by a full 10%!" },
    talentNote = "Affliction damage scaling reaches peak efficiency.",
    gearTip = "Robes of Arugal or Robe of the Lich (from Razorfen Downs).",
    trainerTrain = {},
    rotation = {"Full 10% boosted DoTs: Siphon Life + Corruption + Agony -> Drain Life face tank!"},
    dungeonGear = {
      { name = "Robe of the Lich", quality = "rare", source = "Razorfen Downs (Amnennar)", stats = "+20 Stamina, +14 Shadow Spell Damage", tip = "Incredible leveling robe for Affliction Warlocks!" },
    }
  },
  [36] = {
    title = "Demonic Embrace (1/5) & Badlands Incursion",
    zone = "Badlands (Kargath)",
    zoneRange = "35-40",
    hubs = "Kargath (Flight Master, Inn)",
    zoneInstructions = "Take the flight to Hammerfall and run south through Loch Modan into the Badlands! Reach Kargath and claim the Flight Path. Pick up 'Badlands Reagents' and 'Mirages'.",
    talent = { name = "Demonic Embrace", rank = "1/5", tree = "demonology", why = "Increases your total Stamina by 3% (at the cost of 1% spirit). Stamina directly fuels Life Tap!" },
    talentNote = "Transition into Demonology utility for maximum survivability and Dark Pact synergy.",
    gearTip = "Kargath vendor sells level 35+ food, water, and reagents.",
    trainerTrain = {"Demon Armor (Rank 3)", "Shadow Bolt (Rank 6)", "Life Tap (Rank 4)", "Drain Mana (Rank 2)", "Curse of Weakness (Rank 4)", "Create Firestone (Rank 2)"},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life -> Life Tap."},
    dungeonGear = {
    }
  },
  [37] = {
    title = "Demonic Embrace (2/5) & Dustbelcher Ogre Caves",
    zone = "Badlands (Dustbelcher Grotto)",
    zoneRange = "35-40",
    hubs = "Kargath",
    zoneInstructions = "Clear Dustbelcher Ogres and Lesser Rock Elementals in the Badlands for Lotwil Veriatus. Farm Solid Stone and Elemental Earth (sells for big gold on AH!).",
    talent = { name = "Demonic Embrace", rank = "2/5", tree = "demonology", why = "Increases total Stamina by 6%." },
    talentNote = "Your health pool grows rapidly, giving larger Life Tap pools.",
    gearTip = "Elemental Earth from rock elementals is valuable - hold for AH sale.",
    trainerTrain = {},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life face-tank."},
    dungeonGear = {
    }
  },
  [38] = {
    title = "Demonic Embrace (3/5) & Swamp of Sorrows",
    zone = "Swamp of Sorrows (Stonard)",
    zoneRange = "35-40",
    hubs = "Stonard (Flight Master)",
    zoneInstructions = "Head to Stonard in Swamp of Sorrows. Grab the Flight Path. Complete 'Fall Savage' and kill Swamp Jaguars and Sorrow Spinners.",
    talent = { name = "Demonic Embrace", rank = "3/5", tree = "demonology", why = "Increases total Stamina by 9%." },
    talentNote = "+9% total Stamina makes you deceptively tanky against gankers.",
    gearTip = "Stonard innkeeper and flight path make Swamp of Sorrows easy to traverse.",
    trainerTrain = {"Create Soulstone (Rank 3)", "Bane of Agony (Rank 4)", "Drain Life (Rank 4)", "Immolate (Rank 5)"},
    rotation = {"DoT trifecta -> Drain Life -> Nightfall Shadow Bolt procs."},
    dungeonGear = {
    }
  },
  [39] = {
    title = "Demonic Embrace (4/5) & Preparation for Mount!",
    zone = "Stranglethorn Vale (Grom'gol & Bloodscalp Ruins)",
    zoneRange = "35-40",
    hubs = "Grom'gol Base Camp",
    zoneInstructions = "Return to Grom'gol and finish Bloodscalp Ruins quests. Gather 90 silver (Warlock mount is practically FREE at trainer!). Level 40 is right around the corner!",
    talent = { name = "Demonic Embrace", rank = "4/5", tree = "demonology", why = "Increases total Stamina by 12%." },
    talentNote = "Get ready for Level 40: Free Felsteed Mount + Dark Pact capstone!",
    gearTip = "Prepare to visit Undercity / Orgrimmar Warlock Trainer at 40.",
    trainerTrain = {},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life."},
    dungeonGear = {
    }
  },
  [40] = {
    title = "FELSTEED FREE MOUNT & DARK PACT (1/1) - INFINITE MANA!",
    zone = "Undercity / Orgrimmar -> Tanaris (Gadgetzan)",
    zoneRange = "40-45",
    hubs = "Undercity, Gadgetzan",
    zoneInstructions = "THE ULTIMATE WARLOCK MILESTONE! 1) Learn 'Summon Felsteed' directly from your Warlock trainer - A FREE 60% MOUNT! No 100 gold cost like other classes! 2) Learn DARK PACT (Affliction 31-point capstone)! Dark Pact instantly drains 150 mana from your summoned demon and transfers it directly to you! Keep your Imp or Succubus out, and you have INFINITE MANA without spending health or drinking water ever again!",
    talent = { name = "Dark Pact", rank = "1/1", tree = "affliction", why = "DARK PACT UNLOCKED! Instantly drains mana from your pet and transfers it directly to you on demand! ZERO DOWNTIME PERMANENT LEVELING! NEVER DRINK WATER AGAIN!" },
    talentNote = "God-mode leveling is active. You literally never have to stop or sit down.",
    gearTip = "Mount increases questing and travel speed by 60%! Head immediately to Tanaris (Gadgetzan).",
    trainerTrain = {"Howl of Terror (Rank 1)", "Summon Felsteed (FREE Mount!)"},
    rotation = {"Keep Succubus or Imp on Passive with max mana", "Tag mob with Instant Corruption + Siphon Life + Agony", "Face-tank with Drain Life -> Mob dies", "Tap Dark Pact 2-3 times -> Pet gives you all its mana back -> Immediately pull next mob!"},
    dungeonGear = {
      { name = "Spellshock Wand", quality = "rare", source = "World Drop / AH", stats = "48.8 DPS, Arcane Damage", tip = "Superb wand upgrade around level 40-45." },
    }
  },
  [41] = {
    title = "Demonic Embrace (5/5) & Tanaris (Gadgetzan)",
    zone = "Tanaris (Gadgetzan)",
    zoneRange = "40-45",
    hubs = "Gadgetzan (Flight Master, Neutral City)",
    zoneInstructions = "Ride your fiery Felsteed into Gadgetzan! Pick up 'WANTED: Caliph Scorpidsting', 'Water Pouch Bounty', and 'Wastewander Justice'. Farm Wastewanders in the desert dunes.",
    talent = { name = "Demonic Embrace", rank = "5/5", tree = "demonology", why = "MAX DEMONIC EMBRACE! Total Stamina increased by 15%! Huge health pool for solo survival." },
    talentNote = "15% stamina scaling keeps your survivability at raid-tier levels.",
    gearTip = "Water Pouch bounty gives massive XP and gold.",
    trainerTrain = {},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact mana from pet."},
    dungeonGear = {
    }
  },
  [42] = {
    title = "Improved Voidwalker (1/3) & Nether Force Wand",
    zone = "Tanaris (Gadgetzan & Noonshade Ruins)",
    zoneRange = "40-45",
    hubs = "Gadgetzan",
    zoneInstructions = "Complete 'More Wastewander Justice' and farm Dunemaul Ogres. Complete the Tanaris wand quest for the NETHER FORCE WAND (40.5 Shadow DPS!).",
    talent = { name = "Improved Voidwalker", rank = "1/3", tree = "demonology", why = "Increases Voidwalker's Torment, Consume Shadows, and Sacrifice shield by 10%." },
    talentNote = "Sacrifice shield absorbs huge emergency damage if ganked in Tanaris.",
    gearTip = "Nether Force Wand: 40.5 Shadow DPS!",
    trainerTrain = {"Death Coil (Rank 1)", "Corruption (Rank 5)", "Banish (Rank 2)", "Curse of Recklessness (Rank 3)"},
    rotation = {"DoT -> Drain Life -> Nether Force Wand finishes."},
    dungeonGear = {
      { name = "Nether Force Wand", quality = "rare", source = "Tanaris Quest Reward", stats = "40.5 DPS, Shadow Damage", tip = "Massive wand upgrade in Tanaris." },
    }
  },
  [43] = {
    title = "Improved Voidwalker (2/3) & Feralas (Camp Mojache)",
    zone = "Feralas (Camp Mojache)",
    zoneRange = "40-45",
    hubs = "Camp Mojache (Flight Master, Innkeeper)",
    zoneInstructions = "Travel west through Thousand Needles into Feralas! Reach Camp Mojache and grab the Flight Path. Pick up 'A New Cloak's Sheen', 'Gordunni Cobalt', and 'The Woodpaw Gnolls'.",
    talent = { name = "Improved Voidwalker", rank = "2/3", tree = "demonology", why = "Increases Voidwalker abilities and Sacrifice shield by 20%." },
    talentNote = "Emergency Voidwalker Sacrifice shield absorbs ~1,000+ damage.",
    gearTip = "Camp Mojache has leatherworking and tailoring trainers.",
    trainerTrain = {},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life -> Dark Pact pet mana."},
    dungeonGear = {
    }
  },
  [44] = {
    title = "Improved Voidwalker (3/3) & Hinterlands Arrival",
    zone = "The Hinterlands (Revantusk Village)",
    zoneRange = "40-45",
    hubs = "Revantusk Village (Flight Master on coast)",
    zoneInstructions = "Take the Zeppelin to Undercity, fly to Tarren Mill, and head northeast through the mountain pass into The Hinterlands! Reach Revantusk Village on the eastern coast. Claim the Flight Path.",
    talent = { name = "Improved Voidwalker", rank = "3/3", tree = "demonology", why = "Increases Voidwalker effectiveness and Sacrifice shield by 30%!" },
    talentNote = "Sacrifice is now a guaranteed life-saver.",
    gearTip = "Hinterlands quests reward exceptional blue items for casters.",
    trainerTrain = {"Curse of Shadow (Rank 1)", "Shadow Bolt (Rank 7)"},
    rotation = {"Full DoTs -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [45] = {
    title = "FEL DOMINATION (1/1) - INSTANT PET SUMMON!",
    zone = "The Hinterlands & Tanaris (Zul'Farrak)",
    zoneRange = "45-50",
    hubs = "Revantusk Village, Gadgetzan",
    zoneInstructions = "HUGE DEFENSIVE TOOL! Fel Domination reduces your next pet summon cast time by 5.5 seconds and its mana cost by 50% on a 15-minute cooldown! If your pet dies or you need an instant Voidwalker Sacrifice shield in PvP/danger, pop Fel Domination and summon in 0.5 seconds flat!",
    talent = { name = "Fel Domination", rank = "1/1", tree = "demonology", why = "INSTANT PET SUMMON! Reduces summon cast time from 6.0s down to 0.5s! Essential emergency tool!" },
    talentNote = "Macro: /cast Fel Domination /cast Summon Voidwalker for instant emergency shield.",
    gearTip = "Zul'Farrak run: Zum'rah's Vexing Cane (+Spell Damage staff).",
    trainerTrain = {},
    rotation = {"DoTs -> Drain Life -> Dark Pact", "If in danger: Pop Fel Domination -> Summon Voidwalker -> Pop Sacrifice for 1200 HP shield!"},
    dungeonGear = {
      { name = "Zum'rah's Vexing Cane", quality = "rare", source = "Witch Doctor Zum'rah (Zul'Farrak)", stats = "+10 Stamina, +21 Shadow Spell Damage", tip = "Premier Warlock staff from ZF!" },
    }
  },
  [46] = {
    title = "Fel Intellect (1/5) & Searing Gorge",
    zone = "Searing Gorge (Thorium Point)",
    zoneRange = "45-50",
    hubs = "Thorium Point (Flight Master)",
    zoneInstructions = "Travel to Searing Gorge via the Badlands key gate. Grab Thorium Point flight path. Complete 'STOLEN: Smithing Tuyere and Lookout's Spyglass', 'Incendosaurs? Whatever-osaurs!', and 'The Flawless Flame'.",
    talent = { name = "Fel Intellect", rank = "1/5", tree = "demonology", why = "Increases the maximum mana of your summoned demons by 3%. More mana for your Dark Pact!" },
    talentNote = "Higher demon mana pool = more mana transferred via Dark Pact.",
    gearTip = "Thorium Brotherhood reputation starts here.",
    trainerTrain = {"Create Healthstone (Greater)", "Create Soulstone (Greater)", "Demon Armor (Rank 4)", "Drain Life (Rank 5)", "Life Tap (Rank 5)", "Drain Soul (Rank 4)"},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [47] = {
    title = "Fel Intellect (2/5) & Feralas Ruins",
    zone = "Feralas (Ruins of Ravenwind & Isildien)",
    zoneRange = "45-50",
    hubs = "Camp Mojache",
    zoneInstructions = "Return to Feralas and finish the high-level quests at the Ruins of Ravenwind (Harpies) and Isildien (Ogres). Turn in Gordok scrolls.",
    talent = { name = "Fel Intellect", rank = "2/5", tree = "demonology", why = "Increases demon maximum mana by 6%." },
    talentNote = "Pet mana bar grows steadily.",
    gearTip = "Vendor gray drops in Camp Mojache.",
    trainerTrain = {},
    rotation = {"Multi-dot harpies and drain tank."},
    dungeonGear = {
    }
  },
  [48] = {
    title = "Fel Intellect (3/5) & Tanaris South Coast",
    zone = "Tanaris (Southbreak Shore & Thistleshrub Valley)",
    zoneRange = "45-50",
    hubs = "Gadgetzan",
    zoneInstructions = "Head to Thistleshrub Valley in southwest Tanaris. Clear Gnarled Thistleshrubs for 'Tooga's Quest' and pirate camps on the Southbreak Shore for Southsea pirate hats.",
    talent = { name = "Fel Intellect", rank = "3/5", tree = "demonology", why = "Increases demon maximum mana by 9%." },
    talentNote = "+9% pet mana pool.",
    gearTip = "Prepare soul shards and reagents for your level 50 class quest.",
    trainerTrain = {"Bane of Agony (Rank 5)", "Soul Fire (Rank 1)", "Immolate (Rank 6)", "Searing Pain (Rank 3)", "Rain of Fire (Rank 3)"},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [49] = {
    title = "Fel Intellect (4/5) & Blasted Lands Initiation",
    zone = "Blasted Lands (Bloodvenom / Nethergarde)",
    zoneRange = "45-50",
    hubs = "Stonard -> Bloodvenom Post",
    zoneInstructions = "Travel south from Swamp of Sorrows into the crimson wastes of Blasted Lands. Speak to Bloodmage Lynnore and Kum'isha the Collector. Complete 'A Boar's Vitality', 'Snickerfang Jowls', and 'The Decisive Strife'.",
    talent = { name = "Fel Intellect", rank = "4/5", tree = "demonology", why = "Increases demon maximum mana by 12%." },
    talentNote = "Almost maximum pet mana bonus.",
    gearTip = "Blasted Lands buff consumables grant +25 Stamina or +25 Intellect for 1 hour!",
    trainerTrain = {},
    rotation = {"DoT -> Drain Life -> Dark Pact. Multi-pull beasts safely."},
    dungeonGear = {
    }
  },
  [50] = {
    title = "15% PET MANA (5/5) & UN'GORO CRATER EXPLORATION!",
    zone = "Un'Goro Crater (Marshal's Stand / Horde Camp)",
    zoneRange = "50-55",
    hubs = "Marshal's Stand (Un'Goro Crater)",
    zoneInstructions = "THE DINO CRATER SPEEDRUN! Descend from Tanaris into the prehistoric jungle of Un'Goro Crater. Grab all quests: 'It's a Secret to Everybody' (Linken chain), 'Lurking Prowlers', 'Alien Ecology', and 'Chasing A-Me 01'. Dinos give massive XP!",
    talent = { name = "Fel Intellect", rank = "5/5", tree = "demonology", why = "MAX FEL INTELLECT! Demon mana increased by 15%! Your pet is now an endless, supercharged mana generator for Dark Pact!" },
    talentNote = "Un'Goro is one of the fastest leveling zones in Classic for Affliction Warlocks.",
    gearTip = "Un'Goro Soil and Bloodpetal Sprouts are needed for quests.",
    trainerTrain = {"Inferno (Quest)", "Corruption (Rank 6)", "Drain Mana (Rank 3)", "Curse of Weakness (Rank 5)"},
    rotation = {"Send Succubus -> Corruption -> Siphon Life -> Agony", "Face tank Pterodactyls and Raptors with Drain Life", "Drain pet mana with Dark Pact -> Mob dead -> Pull next dinosaur immediately!"},
    dungeonGear = {
    }
  },
  [51] = {
    title = "Master Summoner (1/2) & Un'Goro Dinosaurs",
    zone = "Un'Goro Crater (Tar Pits & Golakka Hot Springs)",
    zoneRange = "50-55",
    hubs = "Marshal's Stand",
    zoneInstructions = "Kill Stegodons, Pterodactyls, and Tar Beasts around Golakka Hot Springs. Complete 'Super Sticky' and 'Volcanic Activity'.",
    talent = { name = "Master Summoner", rank = "1/2", tree = "demonology", why = "Reduces the casting time of Summon Imp, Voidwalker, Succubus, and Felhunter by 2 sec, and the mana cost by 20%." },
    talentNote = "Speeds up regular pet summons significantly.",
    gearTip = "Look for Devilsaur spawns - call out to high-level guildies or skinners.",
    trainerTrain = {},
    rotation = {"DoT trifecta -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [52] = {
    title = "Master Summoner (2/2) & Felwood (Bloodvenom Post)",
    zone = "Felwood (Bloodvenom Post)",
    zoneRange = "50-55",
    hubs = "Bloodvenom Post (Flight Master)",
    zoneInstructions = "Travel north into the corrupted forests of Felwood. Claim the Bloodvenom Post Flight Path. Pick up 'Forces of Jaedenar', 'Well of Corruption', and 'Cleansing Felwood'.",
    talent = { name = "Master Summoner", rank = "2/2", tree = "demonology", why = "Reduces pet summoning cast time by 4 sec and mana cost by 40%!" },
    talentNote = "Pet summons take only 2.0s without Fel Domination.",
    gearTip = "Corrupted flowers in Felwood provide Whipper Root Tubers (instant heal!).",
    trainerTrain = {"Shadow Bolt (Rank 8)"},
    rotation = {"Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [53] = {
    title = "Fel Stamina (1/5) & Jaedenar Cultists",
    zone = "Felwood (Jaedenar & Shadow Hold)",
    zoneRange = "50-55",
    hubs = "Bloodvenom Post",
    zoneInstructions = "Descend into Jaedenar and clear Shadow Council Warlocks and Infernals. Complete 'A Husband's Revenge' and collect Corrupted Soul Shards.",
    talent = { name = "Fel Stamina", rank = "1/5", tree = "demonology", why = "Increases the maximum health of your summoned demons by 3%." },
    talentNote = "Toughens your pet so it never dies to cleaves.",
    gearTip = "Borean Mantle from world drop or Scholomance prep.",
    trainerTrain = {},
    rotation = {"Drain Life -> Dark Pact -> Drain Soul."},
    dungeonGear = {
    }
  },
  [54] = {
    title = "Fel Stamina (2/5) & Western Plaguelands (The Bulwark)",
    zone = "Western Plaguelands (The Bulwark)",
    zoneRange = "50-55",
    hubs = "The Bulwark (Tirisfal/WPL border, Flight Master)",
    zoneInstructions = "Fly to Brill and run east through The Bulwark into Western Plaguelands! Pick up the Cauldron quest chain: 'A Plague Upon Thee', 'Target: Felstone Field', and 'Target: Dalson's Tears'. Clear the undead scythemen and ghouls.",
    talent = { name = "Fel Stamina", rank = "2/5", tree = "demonology", why = "Increases demon maximum health by 6%." },
    talentNote = "Pet survives high-level Undead disease auras.",
    gearTip = "Cauldron quest turn-ins grant gigantic lump-sum XP payouts!",
    trainerTrain = {"Create Soulstone (Major)", "Demon Armor (Rank 5)", "Drain Life (Rank 6)", "Hellfire (Rank 2)"},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life face tank."},
    dungeonGear = {
    }
  },
  [55] = {
    title = "Fel Stamina (3/5) & Winterspring (Everlook)",
    zone = "Winterspring (Everlook)",
    zoneRange = "55-60",
    hubs = "Everlook (Flight Master, Neutral Goblin Town)",
    zoneInstructions = "Pass through the Timbermaw Tunnel from Felwood into the snowy alpine peaks of Winterspring! Grab the Everlook Flight Path. Pick up 'Winterfall Intruders', 'Frostsaber Provisions', and 'Are We There, Yeti?'.",
    talent = { name = "Fel Stamina", rank = "3/5", tree = "demonology", why = "Increases demon maximum health by 9%." },
    talentNote = "Level 55+: The final stretch to 60 begins!",
    gearTip = "Winterfall Furbolgs drop Firewater and Ekos (valuable raid consumables).",
    trainerTrain = {},
    rotation = {"DoT trifecta -> Drain Life -> Dark Pact pet mana."},
    dungeonGear = {
    }
  },
  [56] = {
    title = "Fel Stamina (4/5) & Eastern Plaguelands",
    zone = "Eastern Plaguelands (Light's Hope Chapel)",
    zoneRange = "55-60",
    hubs = "Light's Hope Chapel (Flight Master)",
    zoneInstructions = "Ride east past Sorrow Hill into Eastern Plaguelands! Secure the Light's Hope Chapel Flight Path. Complete 'The Restless Souls', 'Carrion Grub Apocalypse', and 'Zaeldron's Head'.",
    talent = { name = "Fel Stamina", rank = "4/5", tree = "demonology", why = "Increases demon maximum health by 12%." },
    talentNote = "Pet health pool is rock-solid.",
    gearTip = "Collect Argent Dawn Valor Tokens from scourge mobs.",
    trainerTrain = {"Life Tap (Rank 6)", "Fear (Rank 3)", "Immolate (Rank 7)", "Rain of Fire (Rank 4)"},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life face-tank."},
    dungeonGear = {
    }
  },
  [57] = {
    title = "15% PET STAMINA (5/5) & Burning Steppes (Flame Crest)",
    zone = "Burning Steppes (Flame Crest)",
    zoneRange = "55-60",
    hubs = "Flame Crest (Flight Master)",
    zoneInstructions = "Travel south of Blackrock Mountain into Burning Steppes. Secure Flame Crest flight path. Complete 'Marrow Fiend', 'Broodling Essence', and 'Tablet of the Seven'.",
    talent = { name = "Fel Stamina", rank = "5/5", tree = "demonology", why = "Increases demon maximum health by 15%." },
    talentNote = "Demon survivability maxed out.",
    gearTip = "Blackrock Mountain dungeons: BRD, LBRS, Stratholme.",
    trainerTrain = {},
    rotation = {"DoTs -> Drain Life -> Dark Pact -> Drain Soul."},
    dungeonGear = {
    }
  },
  [58] = {
    title = "Improved Healthstone (1/2) & Dungeon Pre-BIS Runs",
    zone = "Blackrock Depths & Stratholme",
    zoneRange = "55-60",
    hubs = "Flame Crest, Light's Hope Chapel",
    zoneInstructions = "Start running high-level 5-man dungeons! Complete Blackrock Depths (Emperor Dagran Thaurissan), Scholomance, and Stratholme. Complete the Onyxia attunement chain starting in Kargath.",
    talent = { name = "Improved Healthstone", rank = "1/2", tree = "demonology", why = "Increases the amount of health restored by your Healthstone by 10%." },
    talentNote = "Healthstone now heals for ~1,320 HP in emergency combat.",
    gearTip = "Scholomance: Necropile Raiment set pieces.",
    trainerTrain = {"Create Healthstone (Major)", "Bane of Agony (Rank 6)", "Banish (Rank 3)", "Drain Soul (Rank 5)"},
    rotation = {"Curse of Shadows / Elements in dungeons -> Shadow Bolt / Corruption."},
    dungeonGear = {
      { name = "Skibi's Pendant", quality = "rare", source = "Scholomance", stats = "+15 Intellect, +5 Spirit, +14 Spell Damage", tip = "Superb neck piece." },
    }
  },
  [59] = {
    title = "Improved Healthstone (2/2) & Final Push to 60!",
    zone = "Western Plaguelands (Hearthglen) & Winterspring",
    zoneRange = "55-60",
    hubs = "Light's Hope Chapel, Everlook",
    zoneInstructions = "Final level before 60! Farm Scarlet Spellbinders in Hearthglen for Crusader Enchant formulas, or grind Winterfall Furbolgs in Winterspring. Turn in all completed dungeon and elite quests.",
    talent = { name = "Improved Healthstone", rank = "2/2", tree = "demonology", why = "Increases Healthstone healing by 20%! Grants an instant 1,440 HP heal on demand!" },
    talentNote = "Massive instant heal for raid survival and PvP.",
    gearTip = "Collect 300 gold or prep materials for Epic Dreadsteed quest line at Level 60!",
    trainerTrain = {},
    rotation = {"Siphon Life -> Corruption -> Agony -> Drain Life -> Dark Pact."},
    dungeonGear = {
    }
  },
  [60] = {
    title = "LEVEL 60 ACHIEVED - RAID READY & DREADSTEED AWAITS!",
    zone = "Undercity / Orgrimmar / Dire Maul / Scholomance",
    zoneRange = "60",
    hubs = "Undercity, Orgrimmar",
    zoneInstructions = "CONGRATULATIONS! You have conquered Classic WoW and reached Level 60 as an Affliction Warlock! 1) Train max rank spells: Corruption Rank 10, Drain Life Rank 7, Shadow Bolt Rank 10, Curse of Shadows / Elements. 2) Begin the epic DREADSTEED OF XOROTH quest chain with Mor'zul Bloodbringer in Burning Steppes for your 100% Epic Mount! 3) Collect Pre-Raid BiS from Stratholme, Scholomance, and BRD. 4) Prepare for Molten Core and Onyxia's Lair!",
    talent = { name = "Improved Drain Life", rank = "2/5", tree = "affliction", why = "Final leveling talent point invested into Improved Drain Life (+4% healing) or swap to SM/Ruin raid build!" },
    talentNote = "You are now fully geared, leveled, and raid-ready for the Horde!",
    gearTip = "Crown of the Ogre King, Robe of the Void (Crafted Tailoring 300), Briarwood Reed, Rod of the Ogre Magi.",
    trainerTrain = {"Bane of Doom (Rank 1)", "Corruption (Rank 7)", "Shadow Bolt (Rank 9)", "Ritual of Doom", "Summon Dreadsteed (Epic Mount Quest)", "Demon Armor (Rank 6)", "Immolate (Rank 8)"},
    rotation = {"Solo Drain Tank: Corruption -> Siphon Life -> Agony -> Drain Life -> Dark Pact", "Raid Boss: Curse of the Elements / Shadows -> Corruption (if debuff slot allows) -> Shadow Bolt spam"},
    dungeonGear = {
      { name = "Robe of the Void", quality = "epic", source = "Tailoring (Skill 300)", stats = "+14 Stamina, +46 Shadow Spell Damage, Use: Heal 1200", tip = "The ultimate classic Warlock chestpiece!" },
      { name = "Briarwood Reed", quality = "rare", source = "Jed Runewatcher (UBRS)", stats = "Equip: +29 Spell Damage", tip = "Essential pre-raid BiS trinket!" },
    }
  },
}

WoWGuide_Warlock.talentOrder = {
  [10] = { id = "improved_corruption", name = "Improved Corruption", desc = "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!).", tree = "affliction" },
  [11] = { id = "improved_corruption", name = "Improved Corruption", desc = "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!).", tree = "affliction" },
  [12] = { id = "improved_corruption", name = "Improved Corruption", desc = "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!).", tree = "affliction" },
  [13] = { id = "improved_corruption", name = "Improved Corruption", desc = "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!).", tree = "affliction" },
  [14] = { id = "improved_corruption", name = "Improved Corruption", desc = "Reduces the casting time of your Corruption spell by 0.4s to 2.0s (100% instant cast at 5/5!).", tree = "affliction" },
  [15] = { id = "improved_drain_soul", name = "Improved Drain Soul", desc = "Gives a 50% / 100% increase to mana regeneration for 10 sec after killing a target while channeling Drain Soul.", tree = "affliction" },
  [16] = { id = "improved_drain_soul", name = "Improved Drain Soul", desc = "Gives a 50% / 100% increase to mana regeneration for 10 sec after killing a target while channeling Drain Soul.", tree = "affliction" },
  [17] = { id = "improved_life_tap", name = "Improved Life Tap", desc = "Increases the mana awarded by your Life Tap spell by 10% / 20%.", tree = "affliction" },
  [18] = { id = "improved_life_tap", name = "Improved Life Tap", desc = "Increases the mana awarded by your Life Tap spell by 10% / 20%.", tree = "affliction" },
  [19] = { id = "fel_concentration", name = "Fel Concentration", desc = "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana.", tree = "affliction" },
  [20] = { id = "fel_concentration", name = "Fel Concentration", desc = "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana.", tree = "affliction" },
  [21] = { id = "fel_concentration", name = "Fel Concentration", desc = "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana.", tree = "affliction" },
  [22] = { id = "fel_concentration", name = "Fel Concentration", desc = "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana.", tree = "affliction" },
  [23] = { id = "fel_concentration", name = "Fel Concentration", desc = "Gives a 14% to 70% chance to avoid interruption caused by damage while channeling Drain Life, Drain Soul, or Drain Mana.", tree = "affliction" },
  [24] = { id = "amplify_curse", name = "Amplify Curse", desc = "Increases the effect of your next Bane of Agony by 50% or Curse of Exhaustion by 20% on a 3 min cooldown.", tree = "affliction" },
  [25] = { id = "nightfall", name = "Nightfall", desc = "Gives your Corruption and Drain Life ticks a 2% / 4% chance to grant an instant-cast Shadow Bolt.", tree = "affliction" },
  [26] = { id = "nightfall", name = "Nightfall", desc = "Gives your Corruption and Drain Life ticks a 2% / 4% chance to grant an instant-cast Shadow Bolt.", tree = "affliction" },
  [27] = { id = "grim_reach", name = "Grim Reach", desc = "Increases the range of your Affliction spells by 10% / 20% (up to 36 yards).", tree = "affliction" },
  [28] = { id = "grim_reach", name = "Grim Reach", desc = "Increases the range of your Affliction spells by 10% / 20% (up to 36 yards).", tree = "affliction" },
  [29] = { id = "improved_drain_life", name = "Improved Drain Life", desc = "Increases the health drained by your Drain Life spell by 2% to 10%.", tree = "affliction" },
  [30] = { id = "siphon_life", name = "Siphon Life", desc = "Transfers health from the target to the caster every 3 sec for 30 sec. Foundation of Affliction soloing.", tree = "affliction" },
  [31] = { id = "shadow_mastery", name = "Shadow Mastery", desc = "Increases the damage dealt by your Shadow spells or effects by 2% to 10%.", tree = "affliction" },
  [32] = { id = "shadow_mastery", name = "Shadow Mastery", desc = "Increases the damage dealt by your Shadow spells or effects by 2% to 10%.", tree = "affliction" },
  [33] = { id = "shadow_mastery", name = "Shadow Mastery", desc = "Increases the damage dealt by your Shadow spells or effects by 2% to 10%.", tree = "affliction" },
  [34] = { id = "shadow_mastery", name = "Shadow Mastery", desc = "Increases the damage dealt by your Shadow spells or effects by 2% to 10%.", tree = "affliction" },
  [35] = { id = "shadow_mastery", name = "Shadow Mastery", desc = "Increases the damage dealt by your Shadow spells or effects by 2% to 10%.", tree = "affliction" },
  [36] = { id = "demonic_embrace", name = "Demonic Embrace", desc = "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%.", tree = "demonology" },
  [37] = { id = "demonic_embrace", name = "Demonic Embrace", desc = "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%.", tree = "demonology" },
  [38] = { id = "demonic_embrace", name = "Demonic Embrace", desc = "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%.", tree = "demonology" },
  [39] = { id = "demonic_embrace", name = "Demonic Embrace", desc = "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%.", tree = "demonology" },
  [40] = { id = "dark_pact", name = "Dark Pact", desc = "Drains 150-300 mana from your summoned demon and transfers it directly to you. Eliminates mana downtime.", tree = "affliction" },
  [41] = { id = "demonic_embrace", name = "Demonic Embrace", desc = "Increases your total Stamina by 3% to 15%, but reduces your total Spirit by 1% to 5%.", tree = "demonology" },
  [42] = { id = "improved_voidwalker", name = "Improved Voidwalker", desc = "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%.", tree = "demonology" },
  [43] = { id = "improved_voidwalker", name = "Improved Voidwalker", desc = "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%.", tree = "demonology" },
  [44] = { id = "improved_voidwalker", name = "Improved Voidwalker", desc = "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, and Sacrifice by 10% to 30%.", tree = "demonology" },
  [45] = { id = "fel_domination", name = "Fel Domination", desc = "Your next Imp, Voidwalker, Succubus, or Felhunter summon spell has its cast time reduced by 5.5s and mana cost by 50%.", tree = "demonology" },
  [46] = { id = "fel_intellect", name = "Fel Intellect", desc = "Increases the maximum mana of your summoned demons by 3% to 15%.", tree = "demonology" },
  [47] = { id = "fel_intellect", name = "Fel Intellect", desc = "Increases the maximum mana of your summoned demons by 3% to 15%.", tree = "demonology" },
  [48] = { id = "fel_intellect", name = "Fel Intellect", desc = "Increases the maximum mana of your summoned demons by 3% to 15%.", tree = "demonology" },
  [49] = { id = "fel_intellect", name = "Fel Intellect", desc = "Increases the maximum mana of your summoned demons by 3% to 15%.", tree = "demonology" },
  [50] = { id = "fel_intellect", name = "Fel Intellect", desc = "Increases the maximum mana of your summoned demons by 3% to 15%.", tree = "demonology" },
  [51] = { id = "master_summoner", name = "Master Summoner", desc = "Reduces the casting time of your summoning spells by 2s / 4s, and the mana cost by 20% / 40%.", tree = "demonology" },
  [52] = { id = "master_summoner", name = "Master Summoner", desc = "Reduces the casting time of your summoning spells by 2s / 4s, and the mana cost by 20% / 40%.", tree = "demonology" },
  [53] = { id = "fel_stamina", name = "Fel Stamina", desc = "Increases the maximum health of your summoned demons by 3% to 15%.", tree = "demonology" },
  [54] = { id = "fel_stamina", name = "Fel Stamina", desc = "Increases the maximum health of your summoned demons by 3% to 15%.", tree = "demonology" },
  [55] = { id = "fel_stamina", name = "Fel Stamina", desc = "Increases the maximum health of your summoned demons by 3% to 15%.", tree = "demonology" },
  [56] = { id = "fel_stamina", name = "Fel Stamina", desc = "Increases the maximum health of your summoned demons by 3% to 15%.", tree = "demonology" },
  [57] = { id = "fel_stamina", name = "Fel Stamina", desc = "Increases the maximum health of your summoned demons by 3% to 15%.", tree = "demonology" },
  [58] = { id = "improved_healthstone", name = "Improved Healthstone", desc = "Increases the amount of health restored by your Healthstone by 10% / 20%.", tree = "demonology" },
  [59] = { id = "improved_healthstone", name = "Improved Healthstone", desc = "Increases the amount of health restored by your Healthstone by 10% / 20%.", tree = "demonology" },
  [60] = { id = "improved_drain_life", name = "Improved Drain Life", desc = "Increases the health drained by your Drain Life spell by 2% to 10%.", tree = "affliction" },
}

WoWGuide_Warlock.classQuests = {
  { lvl = 1, title = "The Mind's Eye (Summon Imp)", zone = "Deathknell (Tirisfal Glades)", npc = "Shadow Priest Sarvis", desc = "Collect the Scarlet Initiate head and complete the summoning ritual to bind your first demon minion, the Imp." },
  { lvl = 10, title = "The Binding (Summon Voidwalker)", zone = "Brill / Ruined Tower (Tirisfal Glades)", npc = "Luther Pickman", desc = "Retrieve the glyph, defeat the summoned Voidwalker in the ruined tower, and bind it to your will as your personal tank minion!" },
  { lvl = 20, title = "Hearts of Wood (Summon Succubus)", zone = "Undercity / Silverpine / Barrens", npc = "Caretaker Caice", desc = "Venture through the southern wetlands of the Barrens and the hills of Silverpine to gather the Hearts of Wood and bind the seductive Succubus." },
  { lvl = 30, title = "Tome of the Cabal (Summon Felhunter)", zone = "Undercity / Ratchet / Thousand Needles", npc = "Mennet Carkiek", desc = "Gather the scattered pages of the Tome of the Cabal and summon the devourer of magic, your Felhunter minion!" },
  { lvl = 40, title = "Summon Felsteed (FREE 60% Mount!)", zone = "Undercity / Orgrimmar Caster Trainers", npc = "Warlock Trainers", desc = "Visit your Warlock trainer to receive your Level 40 Felsteed mount directly - completely free with zero gold cost!" },
  { lvl = 50, title = "Infernal Minion & Niby the Almighty", zone = "Felwood (Jaedenar)", npc = "Niby the Almighty", desc = "Complete the infernal core retrieval in Jaedenar to learn how to call down a blazing Infernal from the sky!" },
  { lvl = 60, title = "Dreadsteed of Xoroth (Epic 100% Mount)", zone = "Burning Steppes / Dire Maul / Scholomance", npc = "Mor'zul Bloodbringer", desc = "Epic multi-dungeon quest line to summon and defeat the Dreadsteed of Xoroth for your 100% speed fiery epic mount." }
}

WoWGuide_Warlock.macros = {
  { title = "Spam-Safe Auto-Wand", code = "#showtooltip Shoot\n/cast !Shoot", desc = "Never cancels wanding if spammed. Prevents accidentally stopping wand attacks." },
  { title = "Pet Attack + Instant Corruption", code = "#showtooltip Corruption\n/petattack\n/cast Corruption", desc = "Sends your pet immediately into melee while applying Corruption." },
  { title = "Panic Voidwalker Sacrifice + Healthstone", code = "#showtooltip Sacrifice\n/cast Sacrifice\n/use Healthstone", desc = "Instantly pops Voidwalker shield and uses the highest Healthstone available." },
  { title = "Mouseover Fear", code = "#showtooltip Fear\n/cast [@mouseover,harm,nodead][harm,nodead] Fear", desc = "Fears incoming add without dropping your current drain target." },
  { title = "Dark Pact / Life Tap Battery", code = "#showtooltip Dark Pact\n/cast [pet] Dark Pact; Life Tap", desc = "Siphons pet mana if demon is active; otherwise casts Life Tap automatically." }
}

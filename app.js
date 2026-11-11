/**
 * WoW Forever - Alliance Skyborne Feral Druid Leveling Guide Data & Engine
 * Comprehensive level-by-level progression from 9 to 60.
 */

const DRUID_LEVEL_DATA = {
  // Level 1-8 summary
  1: {
    title: "The Awakening on Zephras Isle",
    zone: "Zephras Isle (Shen'dar Highlands)",
    zoneRange: "1-6",
    hubs: "Sanctuary of Whispers, Zephras Ridge",
    zoneInstructions: "Complete early Skyborne starting quests. Learn to weave auto-attacks with Wrath casts. Familiarize yourself with Walk on Air (racial glide) to navigate cliffs safely.",
    talent: null,
    trainerTrain: ["Wrath (Rank 1)", "Healing Touch (Rank 1)"],
    trainerSkip: [],
    rotation: [
      "Cast Wrath at maximum range (30 yds)",
      "Cast Moonfire to apply early DoT",
      "Melee auto-attack with your staff or mace until mob dies",
      "Use Healing Touch Rank 1 between pulls"
    ],
    gearTip: "Equip any cloth/leather with +Spirit or +Intellect for faster mana regen between pulls.",
    dungeonGear: []
  },
  9: {
    title: "Zephras Isle Finale & Skyborne Pre-Ascension",
    zone: "Zephras Isle (Gustberry Lowlands & High Order Enclave)",
    zoneRange: "8-10",
    hubs: "High Order Enclave / Akir's Descent",
    zoneInstructions: "You are currently Level 9! Wrap up the final remaining quests in the southern Gustberry Lowlands and near the waterfall of Akir. Stock up on food and water. You are right at the door of Level 10, where your entire Druid journey transforms with Bear Form! At level 10, talk to your trainer Lotheluum Starbreeze in town to accept 'The Great Ursera Spirit', which directs you to Urs'endris at the East Pylon Watchtower (69.8, 61.7).",
    talent: null,
    talentNote: "First talent point unlocks at Level 10! Get ready to invest in Ferocity.",
    trainerTrain: ["Moonfire (Rank 2)", "Rejuvenation (Rank 2)"],
    trainerSkip: ["Thorns (Rank 1 upgrade if tight on silver)"],
    rotation: [
      "Open with 2x Wrath from max 30 yards range",
      "Apply Moonfire Rank 2 while mob runs toward you",
      "Melee with your weapon to conserve mana; re-apply Rejuvenation if below 70% HP",
      "Racial Tip: If pulled off a cliff by gust elementals, tap 'Walk on Air' immediately to glide safely to the ground!"
    ],
    gearTip: "Prioritize leather with Agility or Strength if you find any 'Of the Tiger' / 'Of the Bear' drops. Otherwise, high Spirit gear speeds up health and mana recovery.",
    dungeonGear: [
      { name: "Staff of the Windcaller", quality: "uncommon", source: "Zephras Isle Quest", stats: "+3 Spirit, +2 Stamina", tip: "Great high-spirit stat stick before leaving the island." }
    ]
  },
  10: {
    title: "Bear Form Unlocked! 'Strength and Mercy' Class Quest",
    zone: "Zephras Isle -> Alliance Capital (Stormwind City)",
    zoneRange: "10-12",
    hubs: "High Order Enclave -> Stormwind City / Westfall",
    zoneInstructions: "CRITICAL CLASS QUEST WALKTHROUGH:\n1. Speak to Druid Trainer Lotheluum Starbreeze in the High Order Enclave to pick up 'The Great Ursera Spirit'.\n2. Travel east to the East Pylon Watchtower at coordinates (69.8, 61.7) (northeast of Valanaar, near the waterfall below the Shrine of Akir) and speak to Urs'endris to accept 'Strength and Mercy'.\n3. Head west toward the Overlook Standing Stones at coordinates (53.7, 65.0) in the bluffs between Shen'dar Highlands and Gustberry Lowlands.\n4. IMPORTANT: Approach the cave from the NORTHERN side (the southern approach is steep cliffs and rocks). Enter the cave and slay Ur'endra.\n5. Return to Urs'endris at the East Pylon Watchtower (69.8, 61.7) to turn in the quest and unlock Bear Form!\n6. Take the High Order portal to Stormwind City to begin mainland Alliance leveling.",
    talent: {
      name: "Ferocity (Rank 1/5)",
      tree: "Feral Combat",
      rank: "1/5",
      effect: "Reduces the Rage cost of Maul and Swipe by 1, and the Energy cost of Claw and Rake by 1.",
      why: "Ferocity is the single best early leveling talent. It directly increases how often you can cast Maul in Bear Form, drastically increasing rage efficiency."
    },
    trainerTrain: ["Bear Form (Class Quest)", "Maul (Rank 1)", "Demoralizing Roar (Rank 1)", "Growl (Rank 1)"],
    trainerSkip: ["Teleport: Moonglade (You get this free from quest, don't pay extra)"],
    rotation: [
      "Cast Rejuvenation on yourself before shifting (HoT will continue ticking while in Bear!)",
      "Shift into Bear Form",
      "Queue up Maul on every auto-attack where you have at least 15 rage",
      "Use Demoralizing Roar if fighting 2 or more physical mobs to reduce incoming damage by 15-20%"
    ],
    gearTip: "In Bear Form, Armor from items is multiplied by your Bear Form bonus (+180% armor!). Leather with high Armor and Stamina turns you into a juggernaut.",
    dungeonGear: [
      { name: "Heavy Spiked Mace", quality: "common", source: "Weaponsmith Vendor", stats: "High base DPS", tip: "Remember: feral attack power scales with level in classic, but stat bonuses on weapons are huge." }
    ]
  },
  11: {
    title: "Stepping into Westfall or Loch Modan",
    zone: "Westfall (Sentinel Hill) or Loch Modan (Thelsamar)",
    zoneRange: "10-14",
    hubs: "Sentinel Hill (Westfall) / Thelsamar (Loch Modan)",
    zoneInstructions: "Westfall has the famous Defias quest chain, while Loch Modan is packed with condensed Trogg and Kobold kill quests. Pick one or bounce between both for optimal XP. Learn First Aid and Skinning in Sentinel Hill or Thelsamar.",
    talent: {
      name: "Ferocity (Rank 2/5)",
      tree: "Feral Combat",
      rank: "2/5",
      effect: "Reduces the Rage cost of Maul and Swipe by 2.",
      why: "Lowers Maul cost down to 13 Rage. You will now be able to Maul almost every single swing."
    },
    trainerTrain: ["No trainer spells at 11 (Save your silver!)"],
    trainerSkip: [],
    rotation: [
      "Pre-cast Rejuvenation -> Shift Bear -> Maul on cooldown.",
      "If low on health, shift out, cast Regrowth + Rejuvenation, and immediately shift back into Bear."
    ],
    gearTip: "Skin every beast you kill in Westfall (coyotes, boars, vultures) or Loch Modan (bears, crocolisks). Craft Light Armor Kits (+8 armor per slot).",
    dungeonGear: []
  },
  12: {
    title: "Enrage & Bash: Mastering Crowd Control",
    zone: "Westfall (The Jansen / Saldean Farms) or Loch Modan",
    zoneRange: "11-15",
    hubs: "Sentinel Hill, Saldean's Farm",
    zoneInstructions: "Continue Westfall Defias investigations or Loch Modan excavation sites. Watch out for Defias Pillagers in Moonbrook (their Fireballs hit hard—use Bash to interrupt them!).",
    talent: {
      name: "Ferocity (Rank 3/5)",
      tree: "Feral Combat",
      rank: "3/5",
      effect: "Reduces the Rage cost of Maul and Swipe by 3.",
      why: "Maul cost is now down to 12 Rage. Rage starvation is practically eliminated on standard pulls."
    },
    trainerTrain: ["Bash (Rank 1 - Crucial 2-sec stun interrupt!)", "Enrage (Generate free rage out of combat)", "Healing Touch (Rank 3)"],
    trainerSkip: ["Regrowth (Rank 1 - High mana cost, stick to Rejuv/HT)"],
    rotation: [
      "Use Enrage before pulling to start with free Rage",
      "Engage in Bear Form -> Maul",
      "When a caster starts casting (like Defias Pillager Fireball), hit Bash immediately to interrupt!"
    ],
    gearTip: "Look for 'Of the Bear' green items (+Str, +Stam) or 'Of the Tiger' (+Str, +Agi).",
    dungeonGear: []
  },
  13: {
    title: "Pushing through Westfall / Loch Modan",
    zone: "Westfall (Moonbrook outskirts) / Loch Modan (Valley of Kings)",
    zoneRange: "12-16",
    hubs: "Sentinel Hill / Thelsamar",
    zoneInstructions: "Clear the Valley of Kings trogg quests in southern Loch Modan, or the Goretusk / Riverpaw gnoll camps in Westfall. Skinning will be hitting 50+ easily now.",
    talent: {
      name: "Ferocity (Rank 4/5)",
      tree: "Feral Combat",
      rank: "4/5",
      effect: "Reduces the Rage cost of Maul and Swipe by 4.",
      why: "Takes Maul cost down to 11 Rage. Nearly uninterrupted heavy hits."
    },
    trainerTrain: ["No spells at 13."],
    trainerSkip: [],
    rotation: [
      "Enrage -> Bear pull -> Maul -> Bash casters.",
      "Skyborne tip: Activate 'Read Ley Line' when out of combat to instantly regenerate your full mana pool in seconds without drinking water!"
    ],
    gearTip: "Turn Medium Leather into Cured Medium Leather for upcoming chest and boots crafted recipes.",
    dungeonGear: []
  },
  14: {
    title: "Ferocity Capped & Demoralizing Roar Upgrade",
    zone: "Westfall (Moonbrook & Sentinel Tower) or Darkshore",
    zoneRange: "13-17",
    hubs: "Sentinel Hill / Auberdine",
    zoneInstructions: "SOLO ROUTE: Finish up the People's Militia quest chain in Westfall (Defias scouts and harvest watchers). Skip the elite Deadmines dungeon quests and turn in your completed Sentinel Hill quests. Head toward Darkshore or begin traveling east toward Lakeshire in Redridge Mountains.",
    talent: {
      name: "Ferocity (Rank 5/5)",
      tree: "Feral Combat",
      rank: "5/5",
      effect: "Reduces the Rage cost of Maul/Swipe by 5, and Claw/Rake by 5.",
      why: "MAXED FEROCITY! Maul now costs only 10 Rage (down from 15). At level 20, your Cat Form Claw will cost 40 instead of 45 Energy, allowing an immediate extra strike."
    },
    trainerTrain: ["Demoralizing Roar (Rank 2)", "Healing Touch (Rank 4)"],
    trainerSkip: ["Thorns (Rank 2 - Skip to conserve silver)"],
    rotation: [
      "Enrage -> Bear -> Demoralizing Roar -> Maul spam.",
      "Notice how quickly mobs fall without you ever running out of rage!"
    ],
    gearTip: "Check auction house or crafted gear for 'Embossed Leather' pieces (+Stam/Str).",
    dungeonGear: []
  },
  15: {
    title: "Brutal Impact: Extending Lockout Power",
    zone: "Westfall (Moonbrook) / Redridge Mountains entry",
    zoneRange: "14-18",
    hubs: "Lakeshire (Redridge) / Sentinel Hill",
    zoneInstructions: "Pick up the Redridge Mountains flight path in Lakeshire. Redridge quests start around level 15. The Gnolls and Murlocs hit hard, making your Bear armor shine.",
    talent: {
      name: "Brutal Impact (Rank 1/2)",
      tree: "Feral Combat",
      rank: "1/2",
      effect: "Increases the stun duration of your Bash and Pounce abilities by 0.5 sec.",
      why: "Extends Bash to 2.5 seconds. Gives you plenty of time to safely shift out and get a full Healing Touch cast off without being hit!"
    },
    trainerTrain: ["No spells at 15."],
    trainerSkip: [],
    rotation: [
      "Combat Heal Combo: When at 25% HP in Bear Form, wait for Bash -> Bash the enemy -> Shift Caster -> Cast Healing Touch Rank 4 -> Shift back to Bear. Mob is stunned the entire time!"
    ],
    gearTip: "Save all light/medium leather for Leatherworking skill level 100+.",
    dungeonGear: []
  },
  16: {
    title: "Aquatic Form Quest & Swipe Unlocked!",
    zone: "Moonglade & Westfall / Darkshore",
    zoneRange: "15-19",
    hubs: "Moonglade (Nighthaven) -> Westfall / Darkshore coast",
    zoneInstructions: "CLASS QUEST: Teleport to Moonglade to pick up 'Trial of the Sea Lion'. You will retrieve two pendants from underwater shrines (one in Darkshore and one off the coast of Westfall). Completing this gives you Aquatic Form (50% swim speed and unlimited underwater breathing!).",
    talent: {
      name: "Brutal Impact (Rank 2/2)",
      tree: "Feral Combat",
      rank: "2/2",
      effect: "Increases the stun duration of your Bash and Pounce by 1.0 sec (Bash is now 3.0 sec!).",
      why: "A full 3-second stun allows effortless in-combat healing with Healing Touch or uninterrupted escape with Walk on Air."
    },
    trainerTrain: ["Aquatic Form (Class Quest)", "Swipe (Rank 1 - First AoE rage spender!)", "Moonfire (Rank 3)"],
    trainerSkip: ["Entangling Roots (Rank 2 - Rank 1 is fine for utility)"],
    rotation: [
      "Single Target: Enrage -> Maul.",
      "Multi-Target (2-3 mobs): Demoralizing Roar -> Swipe to hit all targets -> Maul priority target."
    ],
    gearTip: "Keep a staff with high intellect in your bags just in case you need to heal a dungeon group.",
    dungeonGear: []
  },
  17: {
    title: "Westfall Coastal Finale & Redridge Mountains Entry",
    zone: "Westfall (Coast & Moonbrook) & Redridge Mountains",
    zoneRange: "16-19",
    hubs: "Sentinel Hill (Westfall) / Lakeshire (Redridge)",
    zoneInstructions: "SOLO LEVELING ROUTE:\n1. Complete Captain Sanders' Hidden Treasure chain off the Westfall coast (free 8-slot bag and huge solo XP).\n2. Finish the Moonbrook Defias outdoor quests (Defias Trappers and Smugglers outside the portal).\n3. Travel east to Lakeshire in Redridge Mountains. Grab the flight path and start the Lakeside gnoll and murloc bounties. In Bear Form with Thick Hide, you can easily face-tank 2-3 mobs at once.",
    talent: {
      name: "Thick Hide (Rank 1/3)",
      tree: "Feral Combat",
      rank: "1/3",
      effect: "Increases your Armor contribution from items by 3.3% (compounded by Bear Form's +180% Armor multiplier).",
      why: "BEST SOLO CHOICE: In solo play, you take 100% of all incoming physical damage. Threat talents provide zero benefit when fighting alone, but Thick Hide amplifies your armor against every mob, significantly reducing physical damage taken and downtime."
    },
    trainerTrain: ["No spells at 17."],
    trainerSkip: [],
    rotation: [
      "Solo Combat: Pull from 30 yards with Moonfire (or Faerie Fire at 18) -> Shift into Bear Form -> Enrage for quick rage -> Maul on swing timer -> Bash if you need to shift out and cast Healing Touch."
    ],
    gearTip: "Look for 'Heavy Spiked Mace of the Bear' on the AH or 'Hillborne Gloves' quest reward in Redridge. No dungeon drops needed!",
    dungeonGear: [
      { name: "Smite's Mighty Hammer", quality: "rare", source: "Mr. Smite (Deadmines)", stats: "+11 Strength, +4 Agility", tip: "INSANE weapon. 11 Strength gives 22 Feral Attack Power. Lasts you until level 28+!" },
      { name: "Tunic of Westfall", quality: "rare", source: "The Defias Brotherhood Quest", stats: "+11 Agility, +5 Stamina", tip: "Massive agility boost for upcoming Cat form!" },
      { name: "Blackened Defias Armor", quality: "rare", source: "Edwin VanCleef (Deadmines)", stats: "+10 Agility, +3 Stamina", tip: "Top tier leather chest piece." }
    ]
  },
  18: {
    title: "Faerie Fire (Caster) & Rejuvenation Boost",
    zone: "Loch Modan (Mo'grosh Stronghold) or Redridge Mountains",
    zoneRange: "17-21",
    hubs: "Thelsamar / Lakeshire",
    zoneInstructions: "SOLO ROUTE: Redridge Mountains offers high-density solo kill quests around Lake Everstill (Murlocs, Hilary's Necklace) and the gnolls along the road. Skip the elite castle quests (Stonewatch Keep) for now—stick to yellow-level outdoor beasts and humanoids where your Bear armor minimizes food/drink downtime.",
    talent: {
      name: "Thick Hide (Rank 2/3)",
      tree: "Feral Combat",
      rank: "2/3",
      effect: "Increases your Armor contribution from items by 6.6% (compounded by Bear Form's +180% Armor multiplier).",
      why: "Doubles your armor bonus from gear. You take noticeably less physical damage from multiple gnolls and beasts in Redridge and Westfall."
    },
    trainerTrain: ["Faerie Fire (Rank 1 - Reduces enemy armor by 175 and prevents stealth!)", "Rejuvenation (Rank 4)"],
    trainerSkip: ["Hibernate (Rank 1 - Rarely needed in leveling, train only if needed for beasts)"],
    rotation: [
      "Pull from 30 yards with Faerie Fire (reduces enemy armor so your Bear attacks hit much harder) -> Shift Bear -> Maul."
    ],
    gearTip: "Craft 'Deviate Scale Belt' (+5 Agi, +6 Stam, +5 Spirit) if you have Leatherworking 115.",
    dungeonGear: []
  },
  19: {
    title: "The Eve of Cat Form!",
    zone: "Redridge Mountains (Lakeshire) or Ashenvale entry",
    zoneRange: "18-22",
    hubs: "Lakeshire",
    zoneInstructions: "Complete 'Free at Last' and the bellygrub boar quest in Redridge. You are 1 level away from unlocking Cat Form, the biggest speed spike in the entire leveling process!",
    talent: {
      name: "Thick Hide (Rank 3/3)",
      tree: "Feral Combat",
      rank: "3/3",
      effect: "Increases your Armor contribution from items by 10% (MAX RANK).",
      why: "Reaches the 10-point threshold in Feral Combat! You are now maximally resilient and ready to unlock Tier 3 (Feline Swiftness +30% movement speed) the exact second you hit Level 20."
    },
    trainerTrain: ["No spells at 19."],
    trainerSkip: [],
    rotation: [
      "Bear rotation remains supreme for one last level. Maul on swing timer, Bash to interrupt spells."
    ],
    gearTip: "Ensure your bags have Agility leather ready for Cat Form at 20.",
    dungeonGear: []
  },
  20: {
    title: "CAT FORM UNLOCKED! Welcome to Stealth DPS",
    zone: "Darnassus / Stormwind -> Redridge Mountains & Ashenvale",
    zoneRange: "20-24",
    hubs: "Lakeshire (Redridge) / Astranaar (Ashenvale)",
    zoneInstructions: "MAJOR MILESTONE: Visit any Druid trainer to learn Cat Form, Prowl, Claw, Rip, and Tiger's Fury! Your gameplay now transforms from slow and tanky to rapid-fire rogue-like stealth bursts with zero downtime.",
    talent: {
      name: "Feline Swiftness (Rank 1/2)",
      tree: "Feral Combat",
      rank: "1/2",
      effect: "Increases your movement speed by 15% while in Cat Form outdoors.",
      why: "15% constant run speed outdoors! This drastically cuts travel time between quest mobs and objectives."
    },
    trainerTrain: ["Cat Form", "Claw (Rank 1)", "Prowl (Rank 1)", "Rip (Rank 1)", "Tiger's Fury (Rank 1)"],
    trainerSkip: ["Starfire (Rank 1 - Pure balance spell, never cast this while feral)"],
    rotation: [
      "Enter Prowl (stealth) -> Sneak behind mob",
      "Open with Tiger's Fury (+dmg) followed by Claw",
      "Build up 3-4 Combo Points using Claw (40 energy thanks to Ferocity)",
      "Finish with Rip to let high bleed damage tick while you auto-attack",
      "If mob hits hard, switch to Bear Form and finish them off!"
    ],
    gearTip: "AGILITY IS NOW KING! Every point of Agility gives you 1 Attack Power, Crit Chance, and Dodge in Cat Form. Stack 'Of the Tiger' gear.",
    dungeonGear: [
      { name: "Triprunner Dungarees", quality: "rare", source: "Gnomeregan Quest", stats: "+18 Agility, +4 Strength", tip: "One of the best leveling pants in the entire game. Keep until level 40+!" }
    ]
  },
  21: {
    title: "30% Permanent Cat Speed (Feline Swiftness 2/2)",
    zone: "Redridge Mountains (Render's Camp) / Ashenvale (Astranaar)",
    zoneRange: "20-25",
    hubs: "Astranaar / Lakeshire",
    zoneInstructions: "Pick up the Astranaar flight path in Ashenvale. With 30% outdoor movement speed, you outrun nearly all other players and non-mounted mobs!",
    talent: {
      name: "Feline Swiftness (Rank 2/2)",
      tree: "Feral Combat",
      rank: "2/2",
      effect: "Increases your movement speed by 30% while in Cat Form outdoors.",
      why: "30% permanent bonus speed! You now have a mini-mount 20 levels before anyone else gets their first mount at 40."
    },
    trainerTrain: ["No spells at 21."],
    trainerSkip: [],
    rotation: [
      "Sprint between mobs in Cat Form -> Open with Claw -> Build combo points -> Rip -> Move to next mob.",
      "Skyborne tip: Jump off any cliff in Ashenvale or Redridge and hit Walk on Air to glide smoothly across the terrain at hyper speed!"
    ],
    gearTip: "Check your Skinning: you should be skinning Medium Leather easily in Ashenvale and Redridge.",
    dungeonGear: []
  },
  22: {
    title: "Sharpened Claws: Cranking Up Critical Strike",
    zone: "Ashenvale (Raynewood Retreat / Astranaar) or Duskwood entry",
    zoneRange: "21-26",
    hubs: "Astranaar / Darkshire",
    zoneInstructions: "Darkshire in Duskwood opens up with the Night Watch questline. Duskwood has high-density beast quests (wolves, spiders) perfect for Skinning.",
    talent: {
      name: "Sharpened Claws (Rank 1/3)",
      tree: "Feral Combat",
      rank: "1/3",
      effect: "Increases your critical strike chance in Bear, Dire Bear, and Cat form by 2%.",
      why: "Crit chance accelerates kill speeds and sets up future rage/energy generating talents like Primal Fury."
    },
    trainerTrain: ["Rake (Rank 1 - Direct bleed opener!)", "Healing Touch (Rank 5)"],
    trainerSkip: ["Soothe Animal (Very niche, save money)"],
    rotation: [
      "Prowl -> Open with Rake (applies bleed and starts energy tick) -> Claw -> Claw -> Rip.",
      "Rake is very energy-efficient against high-armor mobs."
    ],
    gearTip: "Get 'Feet of the Lynx' or crafted 'Fine Leather Boots' (+Agi).",
    dungeonGear: []
  },
  23: {
    title: "Sharpened Claws Rank 2 & Darkshire Night Watch",
    zone: "Duskwood (Darkshire - The Night Watch)",
    zoneRange: "22-27",
    hubs: "Darkshire",
    zoneInstructions: "Grind the skeletal fiends and ghouls around the cemetery, and hunt duskbats and wolves in the woods. Beware of Stitches walking along the road!",
    talent: {
      name: "Sharpened Claws (Rank 2/3)",
      tree: "Feral Combat",
      rank: "2/3",
      effect: "Increases your critical strike chance in forms by 4%.",
      why: "More frequent yellow crits mean faster kills and less incoming damage."
    },
    trainerTrain: ["No spells at 23."],
    trainerSkip: [],
    rotation: [
      "Open with Rake -> Claw to 3 combo points -> Rip. Use 'Read Ley Line' whenever you need full mana before re-buffing Mark of the Wild."
    ],
    gearTip: "Skin Duskwood Wolves for Heavy Leather to push Leatherworking toward 150.",
    dungeonGear: []
  },
  24: {
    title: "Sharpened Claws Capped (6% Crit) & Shred Unlocked",
    zone: "Duskwood (Raven Hill cemetery) / Wetlands (Menethil Harbor)",
    zoneRange: "23-28",
    hubs: "Darkshire / Menethil Harbor",
    zoneInstructions: "SOLO ROUTE: Pick up the flight path in Menethil Harbor (Wetlands). Wetlands and Duskwood have incredible solo leveling density. Hunt crocolisks, spiders, and raptors along the road. Shred is unlocked—open from Prowl behind mobs for huge burst damage!",
    talent: {
      name: "Sharpened Claws (Rank 3/3)",
      tree: "Feral Combat",
      rank: "3/3",
      effect: "Increases your critical strike chance in forms by 6%.",
      why: "A flat 6% crit chance bonus across all forms is gigantic for level 24."
    },
    trainerTrain: ["Shred (Rank 1 - Huge damage attack from behind target!)", "Demoralizing Roar (Rank 3)", "Moonfire (Rank 4)"],
    trainerSkip: ["Entangling Roots (Rank 3 - Skip)"],
    rotation: [
      "Solo Cat: Open with Prowl -> Rake -> Claw -> Rip.",
      "Solo Shred: When Bash or roots are active, circle behind the mob and hit Shred for massive critical burst damage!"
    ],
    gearTip: "Look for 'Wolfshead Helm' crafting plans or save heavy leather for it later.",
    dungeonGear: []
  },
  25: {
    title: "Feral Charge: Your Signature Bear Gap-Closer",
    zone: "Wetlands (Excavation Site / Mosshide Fens)",
    zoneRange: "24-29",
    hubs: "Menethil Harbor / Greenwarden's Grove",
    zoneInstructions: "Tackle the Mosshide Gnolls in Wetlands. You now have Feral Charge, making caster mobs and runners completely trivial!",
    talent: {
      name: "Feral Charge (Rank 1/1)",
      tree: "Feral Combat",
      rank: "1/1",
      effect: "Causes you to charge an enemy, immobilizing them for 4 sec and interrupting any spell being cast. (8-25 yd range, Bear Form).",
      why: "GAME CHANGER. Instantly closes distance, stops fleeing humanoid mobs from pulling extra packs, and interrupts dangerous spellcasts from range."
    },
    trainerTrain: ["No spells at 25."],
    trainerSkip: [],
    rotation: [
      "Bear Pull: Enrage -> Feral Charge from 25 yards -> Target is rooted and silenced -> Maul -> Bash if needed.",
      "In Cat: If mob runs away at 15% HP, shift to Bear -> Feral Charge to root them before they pull friends!"
    ],
    gearTip: "Check for 'Staff of the Blessed Seer' or high-Agi 2H maces.",
    dungeonGear: []
  },
  26: {
    title: "Primal Fury / Savage Fury: Building Pure Burst",
    zone: "Wetlands (Dun Modr) or Duskwood (Hermit of Duskwood)",
    zoneRange: "25-30",
    hubs: "Menethil Harbor / Darkshire",
    zoneInstructions: "Finish Morbent Fel questline in Raven Hill or clear Dark Iron Dwarves in northern Wetlands. You are closing in on level 30!",
    talent: {
      name: "Predatory Strikes (Rank 1/3)",
      tree: "Feral Combat",
      rank: "1/3",
      effect: "Increases your melee attack power in Cat, Bear, and Dire Bear forms by 50% of your level.",
      why: "Provides flat attack power that scales automatically every time you level up."
    },
    trainerTrain: ["No spells at 26."],
    trainerSkip: [],
    rotation: [
      "Rake opener -> Claw -> Rip finisher. Pop Tiger's Fury right before building combo points for bonus flat damage on every hit."
    ],
    gearTip: "Skin raptors in Wetlands for Raptor Hides and Heavy Leather.",
    dungeonGear: []
  },
  27: {
    title: "Predatory Strikes Rank 2",
    zone: "Ashenvale (Forest Song) / Redridge (Stonewatch Keep)",
    zoneRange: "26-31",
    hubs: "Astranaar / Lakeshire",
    zoneInstructions: "SOLO ROUTE: Skip the Stonewatch Keep elite castle quests in Redridge. Head to Forest Song in eastern Ashenvale or clear the Hermit of Duskwood quests. Stick to yellow humanoid and beast camps where you can skin every kill for steady leather income.",
    talent: {
      name: "Predatory Strikes (Rank 2/3)",
      tree: "Feral Combat",
      rank: "2/3",
      effect: "Increases melee attack power in forms by 100% of your level.",
      why: "At level 27, this grants +27 free Attack Power in all forms."
    },
    trainerTrain: ["No spells at 27."],
    trainerSkip: [],
    rotation: [
      "Maintain smooth tempo: Prowl -> Rake -> Claw x2 -> Rip. Bandage with First Aid between pulls to preserve 100% mana."
    ],
    gearTip: "Craft 'Barbaric Leggings' or 'Barbaric Shoulders' (+Str, +Agi).",
    dungeonGear: []
  },
  28: {
    title: "Capping Predatory Strikes & Duskwood Solo Power Grinding",
    zone: "Duskwood (Rotting Orchard & Raven Hill) & Ashenvale (Forest Song)",
    zoneRange: "26-30",
    hubs: "Darkshire / Astranaar",
    zoneInstructions: "SOLO ROUTE: Skip the Stockade dungeon entirely! Duskwood has the premier solo quest hubs in Vanilla. Clear The Night Watch Part 3 (ghouls and skeletons in Raven Hill cemetery) and the Rotting Orchard spiders. With maxed Predatory Strikes, your Cat Form attack power spikes enormously, letting you drop mobs in 4-5 seconds flat from Prowl + Ravage.",
    talent: {
      name: "Predatory Strikes (Rank 3/3)",
      tree: "Feral Combat",
      rank: "3/3",
      effect: "Increases melee attack power in forms by 150% of your level.",
      why: "Massive scaling. At level 28, you gain +42 Attack Power, and this grows automatically all the way to +90 AP at level 60!"
    },
    trainerTrain: ["Faerie Fire (Feral) (Rank 1 - Castable in Bear/Cat form!)", "Healing Touch (Rank 6)"],
    trainerSkip: ["Starfire (Rank 2 - Skip)"],
    rotation: [
      "REVOLUTIONARY SPELL: Faerie Fire (Feral) can be cast directly while in Cat or Bear form for ZERO mana! Cast it on every single mob immediately on pull to strip 250+ armor!",
      "Solo Cat Prowl: Prowl behind target -> Ravage (or Claw) -> Faerie Fire (Feral) -> Rake -> Claw to 5 Combo Points -> Rip -> Shift Bear if fighting multiple adds."
    ],
    gearTip: "Hunt for 'Manual Crowd Pumper' in Gnomeregan soon (gives insane attack speed active).",
    dungeonGear: [
      { name: "Manual Crowd Pumper", quality: "rare", source: "Crowd Pumper 9-60 (Gnomeregan)", stats: "+16 Strength, +5 Agility, Use: +50% Attack Speed for 30s", tip: "One of the most famous Feral weapons in WoW history! The +50% haste active makes your Cat shred bosses like a chainsaw." }
    ]
  },
  29: {
    title: "Blood Frenzy: Generating Extra Combo Points",
    zone: "Hillsbrad Foothills (Southshore) / Ashenvale finale",
    zoneRange: "28-33",
    hubs: "Southshore (Hillsbrad)",
    zoneInstructions: "Grab the Southshore flight path in Hillsbrad Foothills. Clear the syndicate camps and river murlocs. Watch out for Horde players roaming the road.",
    talent: {
      name: "Blood Frenzy (Rank 1/2)",
      tree: "Feral Combat",
      rank: "1/2",
      effect: "Your critical strikes from Claw, Rake, Shred, and Ravage add an additional combo point.",
      why: "Whenever your Claw or Rake crits, you instantly gain 2 combo points instead of 1, allowing lightning-fast 5-point finishers!"
    },
    trainerTrain: ["No spells at 29."],
    trainerSkip: [],
    rotation: [
      "Faerie Fire (Feral) -> Rake -> Claw. When Claw crits, you get 2 combo points! Hit Rip as soon as you reach 3-5 points."
    ],
    gearTip: "Stock up on Silk Cloth for Silk Bandages (First Aid 150+).",
    dungeonGear: []
  },
  30: {
    title: "TRAVEL FORM & LEADER OF THE PACK AURA!",
    zone: "Hillsbrad Foothills (Southshore) -> Stranglethorn Vale (Rebel Camp)",
    zoneRange: "30-34",
    hubs: "Southshore / Rebel Camp (STV)",
    zoneInstructions: "HUGE DOUBLE MILESTONE: Visit your trainer to unlock Travel Form (40% outdoor run speed for zero mount cost!) and talent Leader of the Pack (+3% permanent crit aura). Head south to Stranglethorn Vale!",
    talent: {
      name: "Leader of the Pack (Rank 1/1)",
      tree: "Feral Combat",
      rank: "1/1",
      effect: "Increases ranged and melee critical chance of all party members within 45 yards by 3% while in Cat, Bear, or Dire Bear form.",
      why: "ICONIC FERAL TALENT. You permanently gain +3% critical strike chance, and every dungeon party will fight to have you in their group for this aura!"
    },
    trainerTrain: ["Travel Form (40% run speed!)", "Bite / Ferocious Bite (Rank 1 - First instant burst finisher!)", "Regrowth (Rank 3)"],
    trainerSkip: ["Tree Form / Tranquility if tight on silver"],
    rotation: [
      "NEW FINISHER: Ferocious Bite! Instead of Rip's slow bleed, Ferocious Bite consumes all remaining energy to deal gigantic instant physical burst damage! Use Rip on high-HP mobs and Bite to execute mobs under 30% HP."
    ],
    gearTip: "Travel Form lets you out-kite almost any world PvP ganker or escape sticky mob encounters effortlessly.",
    dungeonGear: []
  },
  31: {
    title: "Savage Fury: Boosting Claw & Rake Damage",
    zone: "Stranglethorn Vale (Rebel Camp & Kurzen's Compound)",
    zoneRange: "30-35",
    hubs: "Rebel Camp (Northern STV)",
    zoneInstructions: "Kill Kurzen jungle fighters, panthers, and tigers. Panthers and tigers in STV yield incredible amounts of Heavy Leather.",
    talent: {
      name: "Savage Fury (Rank 1/2)",
      tree: "Feral Combat",
      rank: "1/2",
      effect: "Increases the damage caused by your Claw, Rake, Maul, and Swipe abilities by 10%.",
      why: "Direct 10% flat damage multiplier to all your primary builders in both Cat and Bear form."
    },
    trainerTrain: ["No spells at 31."],
    trainerSkip: [],
    rotation: [
      "Faerie Fire (Feral) -> Rake -> Claw -> Ferocious Bite execute. Mobs melt in 6-8 seconds."
    ],
    gearTip: "Craft 'Nightscape Boots' (+Agi, +Stam) or 'Nightscape Tunic'.",
    dungeonGear: []
  },
  32: {
    title: "Savage Fury Rank 2 (20% More Damage!)",
    zone: "Stranglethorn Vale / Arathi Highlands (Refuge Pointe)",
    zoneRange: "31-36",
    hubs: "Refuge Pointe (Arathi) / Rebel Camp",
    zoneInstructions: "Arathi Highlands has open plains with raptors and spiders. Grab the Refuge Pointe flight path.",
    talent: {
      name: "Savage Fury (Rank 2/2)",
      tree: "Feral Combat",
      rank: "2/2",
      effect: "Increases the damage caused by Claw, Rake, Maul, and Swipe by 20%.",
      why: "A permanent 20% damage amplifier. Your Claw and Maul now hit like absolute trucks."
    },
    trainerTrain: ["Ferocious Bite (Rank 2)", "Healing Touch (Rank 7)"],
    trainerSkip: ["Moonfire (Rank 5 - Skip to save gold)"],
    rotation: [
      "Cat pull: Prowl -> Rake -> Claw -> Claw -> Ferocious Bite. Target is dead before your energy pool runs dry."
    ],
    gearTip: "Look for 'Tigerstrike Mantle' or 'Falcon's Leather' armor pieces.",
    dungeonGear: []
  },
  33: {
    title: "Blood Frenzy Rank 2",
    zone: "Arathi Highlands (Witherbark Village) / Desolace (Nijel's Point)",
    zoneRange: "32-37",
    hubs: "Nijel's Point (Desolace) / Refuge Pointe",
    zoneInstructions: "Nijel's Point in Desolace has a cluster of uninterrupted Alliance quests: centaur reputation, kodo hunting, and satyrs.",
    talent: {
      name: "Blood Frenzy (Rank 2/2)",
      tree: "Feral Combat",
      rank: "2/2",
      effect: "Your critical strikes from Claw, Rake, Shred, and Ravage add an additional combo point 100% of the time.",
      why: "Guaranteed 2 combo points every time you crit. Fast-tracks your 5-point Ferocious Bites."
    },
    trainerTrain: ["No spells at 33."],
    trainerSkip: [],
    rotation: [
      "Crit synergy: With 15%+ crit chance and Leader of the Pack, you will get multiple double combo points in every fight!"
    ],
    gearTip: "Desolace kodos and scorpids yield Heavy and Thick Leather.",
    dungeonGear: []
  },
  34: {
    title: "Heart of the Wild: The Ultimate Hybrid Scaling",
    zone: "Desolace (Ghost Walker Post) / Stranglethorn (Nesingwary's)",
    zoneRange: "33-38",
    hubs: "Nesingwary Expedition (STV)",
    zoneInstructions: "Hemet Nesingwary's camp in STV is the legendary hunting hub: Tiger Mastery, Panther Mastery, and Raptor Mastery. Massive Skinning profits!",
    talent: {
      name: "Heart of the Wild (Rank 1/5)",
      tree: "Feral Combat",
      rank: "1/5",
      effect: "Increases your Intellect by 4%. In addition, while in Bear form, Stamina is increased by 4%, and while in Cat form, Strength is increased by 4%.",
      why: "Heart of the Wild is the most stat-dense talent in the entire Druid tree. It gives triple value across all forms."
    },
    trainerTrain: ["No spells at 34."],
    trainerSkip: [],
    rotation: [
      "Faerie Fire (Feral) -> Open with Ravage if behind, or Rake from front -> Claw -> Ferocious Bite execute."
    ],
    gearTip: "Check auction house for 'Wolfshead Helm' recipe or crafted helm—it remains BiS for power-shifting energy gains.",
    dungeonGear: []
  },
  35: {
    title: "Heart of the Wild Rank 2 & Desolace Solo Expansion",
    zone: "Desolace (Ghost Walker Post) & Stranglethorn Vale (Nesingwary)",
    zoneRange: "34-39",
    hubs: "Nijel's Point (Desolace) / Rebel Camp (STV)",
    zoneInstructions: "SOLO ROUTE: Avoid the long travel time and group coordination of Scarlet Monastery. Head to Nijel's Point in Desolace to initiate the Gelkis Centaur alliance and clear the Kodo Graveyard. Alternatively, solo the Nesingwary Panther & Tiger Chapter 2 hunts in northern Stranglethorn. With Heart of the Wild, your stamina and cat strength make solo mob grinding rapid and virtually downtime-free.",
    talent: {
      name: "Heart of the Wild (Rank 2/5)",
      tree: "Feral Combat",
      rank: "2/5",
      effect: "Increases Intellect by 8%, Bear Stamina by 8%, and Cat Strength by 8%.",
      why: "Boosts your health pool as a tank and raw attack power as a cat simultaneously."
    },
    trainerTrain: ["No spells at 35."],
    trainerSkip: [],
    rotation: [
      "Solo Grinding: Faerie Fire (Feral) -> Prowl Ravage -> Rake -> Claw -> Ferocious Bite -> Cast Rejuvenation after combat -> Travel Form or Prowl to next mob. Downtime is essentially zero!"
    ],
    gearTip: "Skin every raptor and kodo for Thick Leather. Craft Barbaric Harness or save leather for Wolfshead Helm.",
    dungeonGear: [
      { name: "Triprunner Dungarees", quality: "rare", source: "Gnomeregan Quest", stats: "+18 Agility, +4 Strength", tip: "Still supreme if you haven't done Gnomeregan yet!" }
    ]
  },
  36: {
    title: "Heart of the Wild Rank 3 & Pounce Unlocked",
    zone: "Desolace (Gelkis Centaur) / Stranglethorn (Grom'gol outskirts)",
    zoneRange: "35-40",
    hubs: "Nijel's Point / Booty Bay",
    zoneInstructions: "Pick up the Booty Bay flight path at the southern tip of Stranglethorn Vale. Grab boat travel to Ratchet if needed.",
    talent: {
      name: "Heart of the Wild (Rank 3/5)",
      tree: "Feral Combat",
      rank: "3/5",
      effect: "Increases Intellect by 12%, Bear Stamina by 12%, and Cat Strength by 12%.",
      why: "Stat bonuses are becoming massive chunks of free character stats."
    },
    trainerTrain: ["Pounce (Rank 1 - 2-second stun opener with bleed!)", "Rejuvenation (Rank 6)"],
    trainerSkip: ["Thorns (Rank 4 - Skip)"],
    rotation: [
      "NEW STEALTH OPENER: Pounce! Open from Prowl behind the mob -> Pounce stuns target for 3 sec (thanks to Brutal Impact) and puts a bleed on them -> Claw -> Ferocious Bite!"
    ],
    gearTip: "Craft 'Nightscape Tunic' and 'Nightscape Pants' (Leatherworking 175).",
    dungeonGear: []
  },
  37: {
    title: "Heart of the Wild Rank 4 & Badlands Exploration",
    zone: "Badlands / Arathi Highlands (Faldir's Cove)",
    zoneRange: "36-41",
    hubs: "Kargath (watch out!) / Dustbelcher Grotto",
    zoneInstructions: "Head to Badlands from Loch Modan. Badlands has high-density rock elementals and coyotes.",
    talent: {
      name: "Heart of the Wild (Rank 4/5)",
      tree: "Feral Combat",
      rank: "4/5",
      effect: "Increases Intellect by 16%, Bear Stamina by 16%, and Cat Strength by 16%.",
      why: "Gives your Cat form enormous physical punch on every Claw and Bite."
    },
    trainerTrain: ["No spells at 37."],
    trainerSkip: [],
    rotation: [
      "Skyborne Elemental Bonus: Your passive 'Elemental Insight' deals +5% extra damage against all Rock and Dust elementals in Badlands!"
    ],
    gearTip: "Skin Badlands Coyotes for Thick Leather.",
    dungeonGear: []
  },
  38: {
    title: "MAX HEART OF THE WILD (20% All Stats!)",
    zone: "Badlands (Mirage Raceway pre-quests) / Stranglethorn",
    zoneRange: "37-42",
    hubs: "Nesingwary Expedition / Booty Bay",
    zoneInstructions: "Finish up the mid-tier Nesingwary quests (Panther & Tiger Chapter 3) and hunt elder gorillas in southern STV.",
    talent: {
      name: "Heart of the Wild (Rank 5/5)",
      tree: "Feral Combat",
      rank: "5/5",
      effect: "Increases Intellect by 20%, Bear Stamina by 20%, and Cat Strength by 20%.",
      why: "FULL 20% STAT AMPLIFIER. You now possess raid-tier durability in Bear form and brutal melee scaling in Cat form."
    },
    trainerTrain: ["Healing Touch (Rank 8)"],
    trainerSkip: ["Starfire (Rank 3 - Skip)"],
    rotation: [
      "Prowl -> Pounce -> Faerie Fire (Feral) -> Claw -> 5-Point Ferocious Bite -> Loot."
    ],
    gearTip: "Check your gold savings! You need 90-100 gold for your Level 40 Riding training and mount.",
    dungeonGear: []
  },
  39: {
    title: "The Eve of Level 40: Dire Bear Prep",
    zone: "Badlands (Dustbelcher Grotto) & Northern Stranglethorn",
    zoneRange: "38-43",
    hubs: "Thelsamar / Lakeshire (Rest & bank prep)",
    zoneInstructions: "SOLO ROUTE: Badlands offers clustered solo beast and humanoid grinding (Coyotes, Rock Elementals, Buzzards). Sell gathered leather, herbs, and BoE green drops on the Auction House. Ensure you reach 90+ gold for your level 40 mount purchase!",
    talent: {
      name: "Primal Fury (Rank 1/2)",
      tree: "Feral Combat",
      rank: "1/2",
      effect: "Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear and Dire Bear form.",
      why: "Makes Bear crits self-funding for infinite Maul and Swipe loops."
    },
    trainerTrain: ["No spells at 39."],
    trainerSkip: [],
    rotation: [
      "Standard Pounce -> Faerie Fire -> Claw -> Ferocious Bite."
    ],
    gearTip: "Hold all high-value items to fund your mount purchase at level 40.",
    dungeonGear: []
  },
  40: {
    title: "LEVEL 40 MILESTONE: DIRE BEAR FORM & MOUNT!",
    zone: "Stormwind / Darnassus -> Tanaris (Gadgetzan) & Dustwallow Marsh",
    zoneRange: "40-44",
    hubs: "Gadgetzan (Tanaris) / Theramore (Dustwallow)",
    zoneInstructions: "SOLO MILESTONE ACHIEVED!\n1. Mount Up: Purchase your 60% Mount and Riding Skill in Elwynn Forest / Darnassus.\n2. Train Spells: Learn Dire Bear Form (+360% armor bonus!), Ferocious Bite Rank 3, and Innervate.\n3. Head to Tanaris: Fly or ride to Gadgetzan to unlock the flight path and start the Wastewander Bandit bounty quests. Your outdoor travel time is now cut in half!",
    talent: {
      name: "Berserk / Primal Fury (Rank 2/2)",
      tree: "Feral Combat",
      rank: "2/2",
      effect: "In WoW Forever, unlocks deep burst potential and guarantees 5 Rage on every Bear critical strike.",
      why: "Dire Bear form combined with maxed Primal Fury transforms you into an indestructible solo tank. You can round up 3-4 yellow mobs at once and cleave them down with zero risk of dying."
    },
    trainerTrain: ["Dire Bear Form (Massive armor multiplier!)", "Ferocious Bite (Rank 3)", "Innervate (Crucial mana battery!)"],
    trainerSkip: ["Hurricane (Rank 1 - Huge mana drain, totally skip)"],
    rotation: [
      "DIRE BEAR UPGRADE: Your Bear form is now Dire Bear (+360% armor bonus!). You can now easily solo multiple mobs simultaneously with Swipe and Maul.",
      "Skyborne Innervate Synergy: Pair 'Innervate' with your Alliance racial 'Read Ley Line' to refill your entire mana bar in a few seconds flat!"
    ],
    gearTip: "Look for 'Warden Staff' (Epic level 43 world drop staff with +260 Armor and +10 Defense)—the undisputed best Bear tanking weapon in Vanilla!",
    dungeonGear: [
      { name: "Warden Staff", quality: "epic", source: "World Drop / Auction House", stats: "+260 Armor, +10 Defense, +11 Stamina", tip: "The ultimate tanking weapon. Armor on this weapon is multiplied by Dire Bear form!" }
    ]
  },
  41: {
    title: "Tanaris Wastewander Nomads & Feralas Entry",
    zone: "Tanaris (Gadgetzan) & Feralas (Feathermoon Stronghold)",
    zoneRange: "41-46",
    hubs: "Gadgetzan / Feathermoon Stronghold (Feralas)",
    zoneInstructions: "Kill Wastewander bandits in Tanaris and water thieves. Head west to Feathermoon Stronghold in Feralas. Feralas is a Druid haven with lush greenery and high beast density.",
    talent: {
      name: "Furor (Rank 1/5 - Restoration Tree)",
      tree: "Restoration",
      rank: "1/5",
      effect: "Gives you a 20% chance to gain 10 Rage when you shift into Bear, or 8 Energy when shifting into Cat.",
      why: "Beginning the legendary Restoration shift dip. Shifting into form instantly yields attack resources."
    },
    trainerTrain: ["No spells at 41."],
    trainerSkip: [],
    rotation: [
      "Mount up on 60% mount between distant desert quest nodes.",
      "Combat: Open with Pounce -> Faerie Fire -> Claw -> Bite."
    ],
    gearTip: "Skin hyenas and basilisks in Tanaris for Thick Leather.",
    dungeonGear: []
  },
  42: {
    title: "Furor Rank 2 & Tanaris Wastewander Bounties",
    zone: "Tanaris (Gadgetzan & Sandsorrow Watch) / Feralas entry",
    zoneRange: "42-47",
    hubs: "Gadgetzan / Feathermoon",
    zoneInstructions: "SOLO ROUTE: Clear the Wastewander bandit camps in Tanaris (Water Pouch turn-ins give great repeatable XP and raw coin). In Feralas, take the boat from Menethil or fly from Darnassus to Feathermoon Stronghold to begin coastal island solo quests.",
    talent: {
      name: "Furor (Rank 2/5 - Restoration)",
      tree: "Restoration",
      rank: "2/5",
      effect: "Gives you a 40% chance to gain 10 Rage / 16 Energy on shapeshifting.",
      why: "Smoother shifting into form with immediate resources to strike."
    },
    trainerTrain: ["Healing Touch (Rank 9)"],
    trainerSkip: ["Moonfire (Rank 6 - Skip)"],
    rotation: [
      "If interrupted or knocked out of form, re-shifting instantly supplies resources to Bash or Claw."
    ],
    gearTip: "Craft 'Wild Leather Boots' and 'Wild Leather Helmet' (Leatherworking 225+).",
    dungeonGear: []
  },
  43: {
    title: "Furor Rank 3 & Hinterlands Alliance Base",
    zone: "The Hinterlands (Aerie Peak) / Tanaris",
    zoneRange: "43-48",
    hubs: "Aerie Peak (Hinterlands) / Gadgetzan",
    zoneInstructions: "Aerie Peak in the Hinterlands has great dwarf quests, troll temples, and owlbeast hunts. Perfect for skinning Thick and Rugged Leather.",
    talent: {
      name: "Furor (Rank 3/5 - Restoration)",
      tree: "Restoration",
      rank: "3/5",
      effect: "Gives you a 60% chance to gain 10 Rage / 24 Energy on shapeshifting.",
      why: "More than half your shapeshifts now provide instant attack capability."
    },
    trainerTrain: ["No spells at 43."],
    trainerSkip: [],
    rotation: [
      "Owlbeast farming: Faerie Fire (Feral) -> Pounce -> Claw -> Claw -> Ferocious Bite."
    ],
    gearTip: "Keep an eye out for 'Glowstar Rod' or high agility maces.",
    dungeonGear: []
  },
  44: {
    title: "Feralas Inland Wilderness & Tanaris Dunerunner Hunts",
    zone: "Feralas (Feathermoon Stronghold) & Tanaris (Noonshade Ruins)",
    zoneRange: "43-48",
    hubs: "Feathermoon Stronghold (Feralas) / Gadgetzan",
    zoneInstructions: "SOLO ROUTE: Skip Zul'Farrak dungeon groups! Feralas is one of the greatest solo questing zones in Classic for Druids. Pick up the Gordunni Ogre and Yeti hunting quests from Feathermoon Stronghold. The yetis in the inland caves drop massive amounts of Thick Leather and vendor trash. In Tanaris, solo the Dunerunners and Basilisks south of Gadgetzan.",
    talent: {
      name: "Furor (Rank 4/5 - Restoration)",
      tree: "Restoration",
      rank: "4/5",
      effect: "Gives you an 80% chance to gain 10 Rage / 32 Energy on shapeshifting.",
      why: "Almost guaranteed instant energy and rage upon shifting."
    },
    trainerTrain: ["Barkskin (Rank 1 - Reduces physical damage taken by 20%!)", "Rejuvenation (Rank 7)"],
    trainerSkip: ["Thorns (Rank 5 - Skip)"],
    rotation: [
      "Barkskin Trick: You can cast Barkskin right before shifting into Dire Bear for 20% flat damage reduction on dangerous pull spikes!",
      "Solo Farming: Keep Faerie Fire (Feral) on target -> Cat DPS rotation -> Shift out to heal with Regrowth + Rejuvenation -> Re-enter Cat. Downtime is zero."
    ],
    gearTip: "Skin Yetis and Ogres for Thick and Heavy Leather. Save money toward your epic mount at 60.",
    dungeonGear: [
      { name: "Sul'thraze the Lasher", quality: "epic", source: "Zul'Farrak combined drops", stats: "High stats", tip: "Fun to combine, but stick to 2H high agility/strength stat sticks for Feral." }
    ]
  },
  45: {
    title: "MAX FUROR (100% Guaranteed Rage/Energy Shift!)",
    zone: "Feralas (Woodpaw Hills) / Hinterlands",
    zoneRange: "44-49",
    hubs: "Feathermoon Stronghold / Aerie Peak",
    zoneInstructions: "Clear the yeti and gnoll caves in Feralas. Complete 'The Missing Courier' quest chain.",
    talent: {
      name: "Furor (Rank 5/5 - Restoration)",
      tree: "Restoration",
      rank: "5/5",
      effect: "Gives you a 100% chance to gain 10 Rage when shifting into Bear, or 40 Energy when shifting into Cat Form.",
      why: "MILESTONE TALENT. Every time you shift into Cat Form, you instantly get 40 Energy—meaning an IMMEDIATE Claw or Rake the exact millisecond you shift! Every Bear shift gives 10 instant rage for an immediate Bash or Feral Charge."
    },
    trainerTrain: ["No spells at 45."],
    trainerSkip: [],
    rotation: [
      "POWERSHIFTING POWER: If you run out of Energy in Cat Form, you can shift out to Caster and immediately shift back into Cat to instantly gain 40 Energy! With Wolfshead Helm, this jumps to 60 Energy!"
    ],
    gearTip: "Skin Yetis in Feralas for Thick Leather and Thick Hide.",
    dungeonGear: []
  },
  46: {
    title: "Branching to Balance: Nature's Grasp & Thorium Point Solo Prep",
    zone: "Tanaris (Thistleshrub Valley) / Searing Gorge entry",
    zoneRange: "45-50",
    hubs: "Thorium Point (Searing Gorge) / Gadgetzan",
    zoneInstructions: "SOLO ROUTE: Skip Maraudon dungeon attunements. Clear Thistleshrub Valley south of Gadgetzan (dense plant/elemental spawns for fast solo XP). Ride into Searing Gorge and unlock the Thorium Point flight path on the northern ridge to prepare for the compact solo kill bounties.",
    talent: {
      name: "Nature's Grasp (Rank 1/1 - Balance Tree)",
      tree: "Balance",
      rank: "1/1",
      effect: "When activated, any enemy striking you has a 35% chance to be afflicted by Entangling Roots.",
      why: "First step toward Omen of Clarity. Provides an instant defensive peel when you get ambushed by melee mobs or rogue gankers."
    },
    trainerTrain: ["Ferocious Bite (Rank 4)", "Healing Touch (Rank 10)"],
    trainerSkip: ["Starfire (Rank 4 - Skip)"],
    rotation: [
      "In PvP or multi-mob emergency: Cast Nature's Grasp -> Shift Cat/Bear -> Attacking mobs root themselves in place automatically!"
    ],
    gearTip: "Searing Gorge dark irons drop Thorium Ore and valuable trade goods.",
    dungeonGear: []
  },
  47: {
    title: "Improved Nature's Grasp (50% Root Chance) & Searing Gorge Bounties",
    zone: "Searing Gorge (The Cauldron) / Hinterlands (Jintha'Alor)",
    zoneRange: "46-51",
    hubs: "Thorium Point / Aerie Peak",
    zoneInstructions: "SOLO ROUTE: Clear the compact solo bounties from Thorium Point in Searing Gorge (Heavy Golems, Magma Elementals, Dark Iron Geologists). In the Hinterlands, hunt the silvermane wolves and owlbeasts in the western forests. Skip the elite Jintha'Alor temple unless using Prowl to solo grab ground chests.",
    talent: {
      name: "Improved Nature's Grasp (Rank 1/4)",
      tree: "Balance",
      rank: "1/4",
      effect: "Increases the chance for Nature's Grasp to root attackers by 15% (up to 50% total).",
      why: "Paths toward Natural Weapons and Omen of Clarity in the Balance tree."
    },
    trainerTrain: ["No spells at 47."],
    trainerSkip: [],
    rotation: [
      "Pounce -> Faerie Fire -> Claw -> Ferocious Bite -> Powershift if target still alive."
    ],
    gearTip: "Look for 'Rune of the Guard Captain' from Hinterlands quests (+20 AP and +1% Hit!).",
    dungeonGear: []
  },
  48: {
    title: "Tanaris Southbreak Shore & Feralas Yeti Farming",
    zone: "Tanaris (Southbreak Shore) & Feralas (Rage Scar Hold)",
    zoneRange: "47-52",
    hubs: "Gadgetzan / Feathermoon Stronghold",
    zoneInstructions: "SOLO ROUTE: Avoid the hours-long grind of Maraudon groups. Farm the Southbreak Shore pirate camps in Tanaris for Pirate Hats, lockboxes, and raw silver. In Feralas, clear Rage Scar Hold yetis—they are tightly grouped, non-elite, and can be skinned for stacks of Thick and Rugged Leather worth considerable gold.",
    talent: {
      name: "Improved Nature's Grasp (Rank 2/4)",
      tree: "Balance",
      rank: "2/4",
      effect: "Increases Nature's Grasp root chance by another 15% (65% total).",
      why: "Stepping stone to unlock Tier 2 of the Balance tree."
    },
    trainerTrain: ["Demoralizing Roar (Rank 4)"],
    trainerSkip: ["Moonfire (Rank 7 - Skip)"],
    rotation: [
      "Maraudon Bosses: Maintain Faerie Fire (Feral) 100% of the fight to increase all physical raid/group DPS."
    ],
    gearTip: "Blackstone Ring from Princess Theradras is BiS for all physical damage dealers!",
    dungeonGear: [
      { name: "Blackstone Ring", quality: "rare", source: "Princess Theradras (Maraudon)", stats: "+6 Strength, +1% Hit Chance", tip: "One of the best rings in the game. Keep all the way into molten core raids!" }
    ]
  },
  49: {
    title: "Natural Weapons: Increasing All Physical Damage",
    zone: "Un'Goro Crater (Marshal's Refuge) entry",
    zoneRange: "48-53",
    hubs: "Marshal's Refuge (Un'Goro Crater)",
    zoneInstructions: "Descend into Un'Goro Crater from southern Tanaris. Un'Goro is dinosaur paradise: raptors, pterodactyls, stegodons, and devilsaurs!",
    talent: {
      name: "Natural Weapons (Rank 1/3)",
      tree: "Balance",
      rank: "1/3",
      effect: "Increases the physical damage you deal in all forms by 3%.",
      why: "A direct percentage damage multiplier to every single claw, maul, bite, and auto-attack you perform."
    },
    trainerTrain: ["No spells at 49."],
    trainerSkip: [],
    rotation: [
      "In Un'Goro: Kill dinosaurs rapidly. Use Walk on Air if knocking yourself off the rim of the volcano (Fire Plume Ridge)!"
    ],
    gearTip: "Devilsaur Leather: Devilsaurs roam Un'Goro. If you kill them, skin them for Devilsaur Leather (essential for end-game BiS armor set!).",
    dungeonGear: []
  },
  50: {
    title: "LEVEL 50: UN'GORO POWER LEVELING & NATURAL WEAPONS 2",
    zone: "Un'Goro Crater (Marshal's Refuge & Fire Plume Ridge)",
    zoneRange: "50-55",
    hubs: "Marshal's Refuge",
    zoneInstructions: "Collect Un'Goro Soil, Power Crystals (Red, Blue, Green, Yellow), and hunt Tar Lords and Gorillas. Un'Goro gives some of the fastest solo XP in the entire game.",
    talent: {
      name: "Natural Weapons (Rank 2/3)",
      tree: "Balance",
      rank: "2/3",
      effect: "Increases physical damage in all forms by 6%.",
      why: "6% flat damage buff to your entire toolkit."
    },
    trainerTrain: ["Rejuvenation (Rank 8)"],
    trainerSkip: ["Thorns (Rank 6 - Skip)"],
    rotation: [
      "Tar Lord pull: Faerie Fire (Feral) -> Pounce -> Rake -> Claw -> Ferocious Bite. Mobs die in 5 hits."
    ],
    gearTip: "Save all Devilsaur Leather for Leatherworking 300.",
    dungeonGear: []
  },
  51: {
    title: "Natural Weapons Capped (10% Damage Boost!)",
    zone: "Un'Goro Crater (Golakka Hot Springs) / Felwood entry",
    zoneRange: "50-55",
    hubs: "Emerald Sanctuary (Felwood) / Marshal's Refuge",
    zoneInstructions: "Finish Un'Goro dinosaur quests. Grab flight path at Emerald Sanctuary in Felwood. Cleanse corrupted plants for Songflower buffs.",
    talent: {
      name: "Natural Weapons (Rank 3/3)",
      tree: "Balance",
      rank: "3/3",
      effect: "Increases physical damage you deal in all forms by 10%.",
      why: "A massive 10% multiplier to all auto-attacks, Claws, Mauls, and Bites. Unlocks Omen of Clarity access!"
    },
    trainerTrain: ["No spells at 51."],
    trainerSkip: [],
    rotation: [
      "With 10% Natural Weapons, 20% Savage Fury, and Heart of the Wild, your Cat form output rivals Rogues of the same level."
    ],
    gearTip: "Turn in Un'Goro crystal pylons for Crystal Spire and Crystal Force consumable buffs.",
    dungeonGear: []
  },
  52: {
    title: "OMEN OF CLARITY: Free Resource Procs!",
    zone: "Felwood (Bloodvenom Post / Jaedenar) or Burning Steppes",
    zoneRange: "51-56",
    hubs: "Emerald Sanctuary / Morgan's Vigil (Burning Steppes)",
    zoneInstructions: "Clear the demonic camps in Jaedenar or head to Burning Steppes to hunt Blackrock Orcs near Morgan's Vigil.",
    talent: {
      name: "Omen of Clarity (Rank 1/1 - Balance Capstone)",
      tree: "Balance",
      rank: "1/1",
      effect: "Each of your melee attacks has a chance of causing you to enter a Clearcasting state. Your next offensive or healing spell/ability costs 0 Rage, Energy, or Mana!",
      why: "THE HOLY GRAIL OF FERAL SUSTAIN. Gives free Shreds, free Ferocious Bites, free Mauls, or free Healing Touches when dropping form. Procs constantly in Cat form due to fast 1.0 attack speed!"
    },
    trainerTrain: ["Ferocious Bite (Rank 5)", "Healing Touch (Rank 11)"],
    trainerSkip: ["Starfire (Rank 5 - Skip)"],
    rotation: [
      "OMEN OF CLARITY USAGE: Whenever you see the Clearcasting purple aura proc: IMMEDIATELY hit your highest-cost ability (Ferocious Bite, Shred, or Maul) for ZERO energy/rage! Free 50-energy ability every few pulls!"
    ],
    gearTip: "Look for 'Heart of the Fiend' or agility leather in Felwood.",
    dungeonGear: []
  },
  53: {
    title: "Felwood Furbolg Solo Power Grind & Jaedenar Perimeter",
    zone: "Felwood (Emerald Sanctuary / Timbermaw Gate) & Burning Steppes",
    zoneRange: "52-57",
    hubs: "Nethergarde Keep / Emerald Sanctuary",
    zoneInstructions: "SOLO ROUTE: Bypass the confusing corridors and group wipes of Sunken Temple. Felwood is a goldmine for solo Druids. Hunt Deadwood Furbolgs in southern and northern Felwood to build Timbermaw Hold reputation early. Cleanse Corrupted Whipper Root and Night Dragon plants with Cenarion Plant Salves to get free instant-cast combat healing and mana consumables!",
    talent: {
      name: "Naturalist (Rank 1/5 - Restoration) or Thick Hide",
      tree: "Restoration",
      rank: "1/5",
      effect: "Reduces cast time of Healing Touch by 0.1 sec and increases physical damage by 2%.",
      why: "Further amplifies physical throughput and speeds up emergency healing."
    },
    trainerTrain: ["No spells at 53."],
    trainerSkip: [],
    rotation: [
      "Solo Clearcasting: Omen of Clarity procs allow non-stop Claw, Rake, and 5-point Ferocious Bite pressure with zero energy cost.",
      "Consumable Farming: Farm Whipper Root Tubers and Night Dragon's Breath in Felwood for instant 800+ HP heals in combat!"
    ],
    gearTip: "Skin Deadwood and Timbermaw beasts for Rugged Leather. Save all furbolg feathers and beads for rep turn-ins.",
    dungeonGear: [
      { name: "Grizzled Pelt", quality: "rare", source: "Druid Class Quest (Sunken Temple)", stats: "+15 Stamina, +337 Armor in Dire Bear", tip: "Phenomenal Dire Bear tanking cloak!" }
    ]
  },
  54: {
    title: "Western Plaguelands: Sorrow Hill & The Cauldron",
    zone: "Western Plaguelands (Chillwind Camp)",
    zoneRange: "53-58",
    hubs: "Chillwind Camp (WPL)",
    zoneInstructions: "Pick up the Chillwind Camp flight path. Start the four Plague Cauldron quests (Felstone Field, Dalson's Tears, Writhing Haunt, Gahrron's Withering). Each cauldron gives enormous turn-in XP!",
    talent: {
      name: "Naturalist (Rank 2/5)",
      tree: "Restoration",
      rank: "2/5",
      effect: "Reduces Healing Touch cast time by 0.2s and boosts physical damage by 4%.",
      why: "Scaling your damage higher while shaving cast time off your big heals."
    },
    trainerTrain: ["Moonfire (Rank 8)"],
    trainerSkip: ["Entangling Roots (Rank 5 - Skip)"],
    rotation: [
      "Cauldron ghouls: Faerie Fire (Feral) -> Pounce -> Claw -> Ferocious Bite on Clearcasting proc."
    ],
    gearTip: "Turn in Minion's Scourgestones at Chillwind Camp for Argent Dawn reputation.",
    dungeonGear: []
  },
  55: {
    title: "Winterspring: Frostsaber Hunting & Starfall Village",
    zone: "Winterspring (Everlook)",
    zoneRange: "55-60",
    hubs: "Everlook (Winterspring)",
    zoneInstructions: "Travel through Timbermaw Hold to reach snowy Winterspring. Grab the Everlook flight path. Hunt Frostsaber cats and Yetis for high-level Rugged Leather.",
    talent: {
      name: "Naturalist (Rank 3/5)",
      tree: "Restoration",
      rank: "3/5",
      effect: "Reduces Healing Touch cast time by 0.3s and boosts physical damage by 6%.",
      why: "Faster emergency healing when soloing high level elite quests."
    },
    trainerTrain: ["No spells at 55."],
    trainerSkip: [],
    rotation: [
      "Winterspring Yetis: Farm these for thick and rugged leather, pristine yeti horns, and high vendor trash silver."
    ],
    gearTip: "Frostsaber cats drop Rugged Leather at a 100% skinning rate.",
    dungeonGear: []
  },
  56: {
    title: "Western Plaguelands: The Four Plague Cauldron Solo Chains",
    zone: "Western Plaguelands (Felstone Field, Dalson's Tears & Sorrow Hill)",
    zoneRange: "54-59",
    hubs: "Chillwind Camp (WPL)",
    zoneInstructions: "SOLO ROUTE: Skip Blackrock Depths group runs! Western Plaguelands offers the four famous Plague Cauldron solo quest chains (Felstone Field, Dalson's Tears, Writhing Haunt, Gahrron's Withering). Each cauldron field quest rewards 4,000–6,000 turn-in XP! In Dire Bear Form, you can easily solo the undead guards and Cauldron Lords with zero danger.",
    talent: {
      name: "Naturalist (Rank 4/5)",
      tree: "Restoration",
      rank: "4/5",
      effect: "Reduces Healing Touch cast time by 0.4s and boosts physical damage by 8%.",
      why: "Takes Healing Touch down to a rapid cast while maximizing auto-attack power."
    },
    trainerTrain: ["Healing Touch (Rank 12)"],
    trainerSkip: ["Thorns (Rank 7 - Skip)"],
    rotation: [
      "Solo Undead Farming: Pull with Faerie Fire (Feral) -> Shred/Claw in Cat Form -> If 2+ adds arrive, shift Dire Bear -> Swipe to cleave -> Maul -> Bash to self-heal."
    ],
    gearTip: "Turn in Scourgestones at Chillwind Camp. Farm Hearthglen perimeter or Sorrow Hill for Runecloth.",
    dungeonGear: [
      { name: "Band of the Penitent", quality: "rare", source: "BRD Quests", stats: "+Str, +Agi, +Stam", tip: "Solid tank and DPS leveling ring." }
    ]
  },
  57: {
    title: "Eastern Plaguelands: Lights Hope Chapel",
    zone: "Eastern Plaguelands (Light's Hope Chapel)",
    zoneRange: "55-60",
    hubs: "Light's Hope Chapel (EPL)",
    zoneInstructions: "Pick up the Light's Hope Chapel flight path. Start the Tyr's Hand and Corin's Crossing Scourge cleanup quests. Great argent dawn rewards.",
    talent: {
      name: "Naturalist (Rank 5/5)",
      tree: "Restoration",
      rank: "5/5",
      effect: "Reduces Healing Touch cast time by 0.5s and increases all physical damage you deal by a full 10%.",
      why: "Maxed Naturalist gives you 0.5-second faster healing and another 10% flat damage multiplier in Cat and Bear forms!"
    },
    trainerTrain: ["No spells at 57."],
    trainerSkip: [],
    rotation: [
      "Scourge farming: Clearcasting procs allow non-stop Bite executes. Use Read Ley Line out of combat for zero-mana downtime."
    ],
    gearTip: "Collect Bone Fragments and Crypt Fiend Parts for Argent Dawn token turn-ins.",
    dungeonGear: []
  },
  58: {
    title: "Eastern Plaguelands: Light's Hope Chapel Solo Blitz",
    zone: "Eastern Plaguelands (Light's Hope Chapel & Corin's Crossing)",
    zoneRange: "56-60",
    hubs: "Chillwind Camp / Light's Hope",
    zoneInstructions: "SOLO ROUTE: Skip Stratholme and Scholomance dungeon groups. Eastern Plaguelands has dozens of open-world solo Scourge quests centered around Light's Hope Chapel. Farm Corin's Crossing, Browman Mill, and Blackwood Lake. Collect Scourge Scraps and Bone Fragments for Argent Dawn reputation tokens. Use Prowl to bypass heavy trash packs and assassinate named quest targets.",
    talent: {
      name: "Subtlety or Nurturing Instinct (Rank 1/2)",
      tree: "Restoration",
      rank: "1/2",
      effect: "Reduces threat generated by healing spells or increases healing by Agility.",
      why: "Fine-tuning your hybrid endurance and threat moderation."
    },
    trainerTrain: ["Rejuvenation (Rank 9)"],
    trainerSkip: ["Starfire (Rank 6 - Skip)"],
    rotation: [
      "Solo Stealth Assassination: Prowl into enemy camps -> Identify named quest mob -> Ravage -> Tiger's Fury + Claw -> Ferocious Bite -> Loot quest item -> Walk on Air glide or Shadowmeld/Prowl away."
    ],
    gearTip: "Equip 'Devilsaur Gauntlets' and 'Devilsaur Leggings' craftable with Leatherworking 300. Incredible solo DPS boost!",
    dungeonGear: [
      { name: "Devilsaur Armor Set", quality: "rare", source: "Leatherworking (Crafted)", stats: "+2% Hit Chance, +46 Agility, +28 AP", tip: "The absolute gold standard for Feral Cat DPS heading into Molten Core!" }
    ]
  },
  59: {
    title: "Final Push: 99% to Level 60",
    zone: "Winterspring (Timbermaw Hold) or Eastern Plaguelands",
    zoneRange: "57-60",
    hubs: "Everlook / Light's Hope",
    zoneInstructions: "Farm Timbermaw Hold reputation in northern Felwood/Winterspring or finish Western Plaguelands Cauldron finale quests. You are just bars away from max level 60!",
    talent: {
      name: "Subtlety / Nurturing Instinct (Rank 2/2)",
      tree: "Restoration",
      rank: "2/2",
      effect: "Increases your healing spells by an amount equal to 100% of your Agility in Cat form.",
      why: "Gives your Cat form enormous self-healing power when you shift out to heal."
    },
    trainerTrain: ["No spells at 59."],
    trainerSkip: [],
    rotation: [
      "High tempo: Pounce -> Faerie Fire -> Claw -> Ferocious Bite -> Loot -> Mount to next target."
    ],
    gearTip: "Prepare your Molten Core and Onyxia attunement quest chains in Blackrock Mountain.",
    dungeonGear: []
  },
  60: {
    title: "LEVEL 60 MAXIMUM LEVEL: SOLO MASTER & PRE-RAID WORLD ASCENSION!",
    zone: "Winterspring / Eastern Plaguelands / Silithus (Cenarion Hold)",
    zoneRange: "60 (Max)",
    hubs: "Everlook / Light's Hope Chapel / Cenarion Hold",
    zoneInstructions: "SOLO MASTERY ACHIEVED: You have reached Level 60 entirely solo! As an Alliance Feral Druid, you are the ultimate open-world solo powerhouse: stealth-farm high-tier herb/ore nodes in Silithus and EPL, solo farm Timbermaw Hold reputation for BiS agility enchant recipes, grind Devilsaur leather in Un'Goro Crater with zero downtime, and complete world epic questlines at your own pace.",
    talent: {
      name: "Master Feral Hybrid (14/32/5 or 0/46/5)",
      tree: "Mastery",
      rank: "51/51",
      effect: "Full leveling tree unlocked. Combine 14 Balance (Natural Weapons + Omen of Clarity), 32 Feral Combat (Leader of the Pack + Heart of the Wild), and 5 Restoration (Furor).",
      why: "The optimal world-renowned hybrid build: elite Cat DPS, unkillable Bear Tanking, and limitless solo utility."
    },
    trainerTrain: ["Ferocious Bite (Rank 6)", "Healing Touch (Rank 13)", "Mark of the Wild (Rank 7)"],
    trainerSkip: [],
    rotation: [
      "Solo Level 60 Cat Farming: Maintain Faerie Fire (Feral) -> Shred behind mob -> Ferocious Bite -> Powershift with Wolfshead Helm for instant energy refreshes -> Endless farming rhythm.",
      "Solo Elite / Named Mob Bear: Pull with Faerie Fire -> Maul on swing timer -> Bash to interrupt deadly spells -> Barkskin + Frenzied Regeneration for extreme survivability."
    ],
    gearTip: "Pursue Pre-Raid BiS: Wolfshead Helm, Devilsaur Set, Blackstone Ring, Warden Staff (for Bear), Bonecrusher / Crowd Pumper (for Cat), and Mark of the Dragon Lord.",
    dungeonGear: [
      { name: "Wolfshead Helm", quality: "rare", source: "Leatherworking 225 (Crafted)", stats: "When you shapeshift into Cat Form, gain 20 Energy. In Bear, gain 5 Rage.", tip: "THE MOST IMPORTANT ITEM FOR CAT DPS. Kept even into Naxxramas!" },
      { name: "Warden Staff", quality: "epic", source: "World Drop / Auction House", stats: "+260 Armor, +10 Defense, +11 Stamina", tip: "Unbeatable Bear Tanking weapon in Classic / Forever." },
      { name: "Devilsaur Gauntlets & Leggings", quality: "rare", source: "Leatherworking 300 (Crafted)", stats: "+2% Hit, +46 Agility, +28 Attack Power", tip: "BiS armor set for physical DPS." }
    ]
  }
};

// Fill in remaining early levels (2-8) so any level selector works seamlessly
for (let lvl = 2; lvl <= 8; lvl++) {
  if (!DRUID_LEVEL_DATA[lvl]) {
    DRUID_LEVEL_DATA[lvl] = {
      title: `Zephras Isle Exploration (Level ${lvl})`,
      zone: "Zephras Isle (Shen'dar Highlands & Whispering Bluffs)",
      zoneRange: "1-9",
      hubs: "Sanctuary of Whispers / Zephras Outpost",
      zoneInstructions: `Continue standard Skyborne starting quests on Zephras Isle. Practice gliding with Walk on Air. At level 4 train Moonfire and Rejuvenation. At level 6 train Thorns. Conserve your mana by using auto-attacks to finish low-HP mobs.`,
      talent: null,
      trainerTrain: lvl === 4 ? ["Moonfire (Rank 1)", "Rejuvenation (Rank 1)"] : (lvl === 6 ? ["Thorns (Rank 1)"] : lvl === 8 ? ["Healing Touch (Rank 2)"] : []),
      trainerSkip: [],
      rotation: [
        "Pull with Wrath at 30 yards",
        "Apply Moonfire to tag and tick damage",
        "Staff/Mace melee swing until mob expires",
        "Heal with Rejuvenation or Healing Touch after combat"
      ],
      gearTip: "Look for cloth and leather items with Spirit or Intellect to minimize mana drinking downtime.",
      dungeonGear: []
    };
  }
}

// Interactive Talent Configuration & Level-by-Level Order
const DRUID_TALENTS_CONFIG = [
  // Feral Combat
  { id: "ferocity", name: "Ferocity", max: 5, tree: "feral", icon: "🐾", desc: "Reduces Rage cost of Maul/Swipe and Energy of Claw/Rake by 1 per rank." },
  { id: "feral_aggression", name: "Feral Aggression", max: 5, tree: "feral", icon: "🐯", desc: "Increases Demoralizing Roar attack power reduction by 8%-40% and Ferocious Bite damage by 3%-15%." },
  { id: "thick_hide", name: "Thick Hide", max: 3, tree: "feral", icon: "🛡️", desc: "Increases your Armor contribution from items by 3.3% / 6.6% / 10% (massively multiplied in Bear Form)." },
  { id: "brutal_impact", name: "Brutal Impact", max: 2, tree: "feral", icon: "💥", desc: "Increases stun duration of Bash and Pounce by 0.5s per rank." },
  { id: "feral_instinct", name: "Feral Instinct", max: 1, tree: "feral", icon: "👁️", desc: "Increases threat in Bear Form and reduces chance of detection in Prowl." },
  { id: "feline_swiftness", name: "Feline Swiftness", max: 2, tree: "feral", icon: "🐆", desc: "Increases movement speed by 15% / 30% outdoors in Cat Form." },
  { id: "sharpened_claws", name: "Sharpened Claws", max: 3, tree: "feral", icon: "⚔️", desc: "Increases critical strike chance in forms by 2% per rank." },
  { id: "feral_charge", name: "Feral Charge", max: 1, tree: "feral", icon: "🛡️", desc: "Bear gap closer that roots for 4s and interrupts spellcasts." },
  { id: "predatory_strikes", name: "Predatory Strikes", max: 3, tree: "feral", icon: "⚡", desc: "Increases attack power in forms by 50%/100%/150% of your level." },
  { id: "blood_frenzy", name: "Blood Frenzy", max: 2, tree: "feral", icon: "🩸", desc: "Critical strikes from Claw, Rake, Shred add an extra combo point." },
  { id: "savage_fury", name: "Savage Fury", max: 2, tree: "feral", icon: "🔥", desc: "Increases damage of Claw, Rake, Maul, Swipe by 10% / 20%." },
  { id: "leader_of_the_pack", name: "Leader of the Pack", max: 1, tree: "feral", icon: "🐺", desc: "Grants +3% permanent party melee/ranged critical strike aura." },
  { id: "heart_of_the_wild", name: "Heart of the Wild", max: 5, tree: "feral", icon: "❤️", desc: "Increases Int by 20%, Bear Stamina by 20%, Cat Strength by 20%." },
  { id: "primal_fury", name: "Primal Fury / Berserk", max: 2, tree: "feral", icon: "⚡", desc: "Critical strikes in Bear Form generate 5 extra Rage." },

  // Balance
  { id: "natures_grasp", name: "Nature's Grasp", max: 1, tree: "balance", icon: "🌿", desc: "When struck, 35% chance to entangle enemy in roots." },
  { id: "imp_natures_grasp", name: "Imp. Nature's Grasp", max: 4, tree: "balance", icon: "🌱", desc: "Increases root chance by 15% per rank." },
  { id: "natural_weapons", name: "Natural Weapons", max: 3, tree: "balance", icon: "🗡️", desc: "Increases physical damage in all forms by 3% / 6% / 10%." },
  { id: "omen_of_clarity", name: "Omen of Clarity", max: 1, tree: "balance", icon: "✨", desc: "Melee attacks have a chance to make next ability cost 0 resources!" },

  // Restoration
  { id: "furor", name: "Furor", max: 5, tree: "resto", icon: "⚡", desc: "100% chance to gain 10 Rage in Bear, or 40 Energy in Cat Form on shift." },
  { id: "naturalist", name: "Naturalist", max: 5, tree: "resto", icon: "🍃", desc: "Reduces Healing Touch cast time by 0.5s and boosts physical damage by 10%." }
];

// Optimal Leveling Allocation Order for Levels 10 through 60 (51 points total)
const TALENT_LEVEL_ORDER = [
  "ferocity", "ferocity", "ferocity", "ferocity", "ferocity", // 10-14 (Rage & Energy conservation)
  "brutal_impact", "brutal_impact", // 15-16 (3.0s stun enables full Healing Touch)
  "thick_hide", "thick_hide", "thick_hide", // 17-19 (Best Solo Play: +10% armor from items, multiplied by Bear)
  "feline_swiftness", "feline_swiftness", // 20-21 (+30% move speed outdoors in Cat Form)
  "sharpened_claws", "sharpened_claws", "sharpened_claws", // 22-24 (+6% crit)
  "feral_charge", // 25 (Bear root + spell interrupt)
  "predatory_strikes", "predatory_strikes", "predatory_strikes", // 26-28 (+150% level as Attack Power)
  "blood_frenzy", // 29 (Extra combo points on crit)
  "leader_of_the_pack", // 30 (+3% physical crit aura)
  "savage_fury", "savage_fury", // 31-32 (+20% Claw, Rake, Maul, Swipe damage)
  "blood_frenzy", // 33 (Max Blood Frenzy)
  "heart_of_the_wild", "heart_of_the_wild", "heart_of_the_wild", "heart_of_the_wild", "heart_of_the_wild", // 34-38 (+20% Stam in Bear, +20% Str in Cat)
  "primal_fury", "primal_fury", // 39-40 (5 Rage on Bear crits)
  "furor", "furor", "furor", "furor", "furor", // 41-45 (Instant 10 Rage on Bear shift / 40 Energy on Cat shift)
  "natures_grasp", "imp_natures_grasp", "imp_natures_grasp", "imp_natures_grasp", // 46-49 (Instant root defensive utility)
  "natural_weapons", "natural_weapons", "natural_weapons", // 50-52 (+10% physical damage in all forms)
  "omen_of_clarity", // 53 (Clearcasting proc for 0 mana/rage/energy abilities)
  "naturalist", "naturalist", "naturalist", "naturalist", "naturalist", // 54-58 (+10% melee damage & faster heals)
  "feral_instinct", // 59 (WoW Forever 1-point cap: extra threat & stealth level)
  "feral_aggression" // 60 (Increased Demoralizing Roar AP reduction / Bite damage)
];

// Safe LocalStorage Helper Functions (Immune to corrupted values or disabled storage)
function safeGetJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw || raw === "undefined" || raw === "null" || raw === "[object Object]") return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function safeSetJSON(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
}

// Global App State with LocalStorage Persistence
let currentLevel = 10;
try {
  const saved = localStorage.getItem("wow_druid_current_level");
  if (saved && !isNaN(parseInt(saved, 10))) {
    currentLevel = Math.max(1, Math.min(60, parseInt(saved, 10)));
  }
} catch (e) {
  currentLevel = 10;
}

let userChecklistState = safeGetJSON("wow_druid_checklist", {});
let userTalentsState = safeGetJSON("wow_druid_talents", {});
let userProfileState = safeGetJSON("wow_druid_profile", { name: "Chongo", realm: "Darkwind (WoW Forever)" });

// If synced data script is present from Method 3, align immediately
if (typeof window !== "undefined" && window.WOW_SYNCED_DATA) {
  if (window.WOW_SYNCED_DATA.name) userProfileState.name = window.WOW_SYNCED_DATA.name;
  if (window.WOW_SYNCED_DATA.realm) userProfileState.realm = window.WOW_SYNCED_DATA.realm;
  if (window.WOW_SYNCED_DATA.level) currentLevel = window.WOW_SYNCED_DATA.level;
  safeSetJSON("wow_druid_profile", userProfileState);
  try { localStorage.setItem("wow_druid_current_level", currentLevel); } catch (e) {}
} else if (!userProfileState.name || userProfileState.name === "Skyborne Druid") {
  userProfileState.name = "Chongo";
  userProfileState.realm = "Darkwind (WoW Forever)";
  safeSetJSON("wow_druid_profile", userProfileState);
}

// If user has never allocated talents and is at or above level 10, initialize recommended talents
if (Object.keys(userTalentsState).length === 0 && currentLevel >= 10) {
  const points = Math.max(0, currentLevel - 9);
  for (let i = 0; i < points && i < TALENT_LEVEL_ORDER.length; i++) {
    const tid = TALENT_LEVEL_ORDER[i];
    userTalentsState[tid] = (userTalentsState[tid] || 0) + 1;
  }
  safeSetJSON("wow_druid_talents", userTalentsState);
} else {
  // Migration: Rebalance any old feral_instinct allocations to Thick Hide & enforce talent rank limits
  if (userTalentsState["feral_instinct"] && (userTalentsState["feral_instinct"] > 1 || currentLevel < 59)) {
    const fiPoints = userTalentsState["feral_instinct"];
    if (currentLevel < 59) {
      userTalentsState["thick_hide"] = (userTalentsState["thick_hide"] || 0) + fiPoints;
      delete userTalentsState["feral_instinct"];
    } else if (fiPoints > 1) {
      userTalentsState["feral_instinct"] = 1;
      userTalentsState["thick_hide"] = Math.min(3, (userTalentsState["thick_hide"] || 0) + (fiPoints - 1));
    }
  }
  DRUID_TALENTS_CONFIG.forEach(t => {
    if (userTalentsState[t.id] && userTalentsState[t.id] > t.max) {
      userTalentsState[t.id] = t.max;
    }
  });
  safeSetJSON("wow_druid_talents", userTalentsState);
}

const GITHUB_GIST_ID = "584b8b9450a8b85003934d27acfa7c7c";
const GITHUB_GIST_API_URL = `https://api.github.com/gists/${GITHUB_GIST_ID}`;

async function checkCloudCharacterSync() {
  try {
    const res = await fetch(GITHUB_GIST_API_URL, {
      headers: { "Accept": "application/vnd.github.v3+json" }
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !json.files || !json.files["synced_character.json"]) return null;
    const cloudChar = JSON.parse(json.files["synced_character.json"].content);
    if (!cloudChar || !cloudChar.name) return null;

    console.log(`[Cloud Sync] Loaded ${cloudChar.name} (Lvl ${cloudChar.level}) from GitHub Cloud!`);
    
    // Update synced data bridge in memory
    window.WOW_SYNCED_DATA = cloudChar;

    if (cloudChar.liveGear && typeof MAXROLL_GEAR_PRESETS !== "undefined" && MAXROLL_GEAR_PRESETS.chongo_live) {
      MAXROLL_GEAR_PRESETS.chongo_live.items = cloudChar.liveGear;
      if (typeof renderPaperdoll === "function") {
        renderPaperdoll(currentPresetKey || "chongo_live");
      }
    }

    // Advance level if cloud data is higher or current level is lower
    if (cloudChar.level && cloudChar.level >= currentLevel) {
      userProfileState.name = cloudChar.name;
      userProfileState.level = cloudChar.level;
      setLevel(cloudChar.level);
    }

    updateCharacterProfileUI();
    if (typeof renderUpgradeAdvisor === "function") {
      renderUpgradeAdvisor(currentLevel);
    }

    const pill = document.querySelector(".header-sync-pill");
    if (pill) {
      pill.title = `☁️ Cloud Synced via GitHub (${cloudChar.name} • Lvl ${cloudChar.level})`;
    }
    return cloudChar;
  } catch (e) {
    console.warn("Cloud sync check skipped or offline:", e);
    return null;
  }
}
window.checkCloudCharacterSync = checkCloudCharacterSync;

// Direct 1-Click Header Sync Action & Companion Server Bridge
async function executeGameSyncFromSite() {
  const btnHeader = document.getElementById("btnHeaderDirectSync");
  const origHeader = btnHeader ? btnHeader.innerHTML : "⚡ Sync";
  if (btnHeader) {
    btnHeader.innerHTML = "⏳ Syncing...";
    btnHeader.style.backgroundColor = "#38bdf8";
    btnHeader.style.color = "#000";
  }

  const feedbackEl = document.getElementById("syncFeedbackMsg");
  if (feedbackEl) {
    feedbackEl.style.display = "block";
    feedbackEl.style.color = "#38bdf8";
    feedbackEl.textContent = "⚡ Checking companion server and GitHub cloud sync...";
  }

  try {
    const res = await fetch("http://127.0.0.1:3888/api/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });
    
    if (res.ok) {
      const json = await res.json();
      if (json && json.character) {
        window.WOW_SYNCED_DATA = json.character;
        if (typeof MAXROLL_GEAR_PRESETS !== "undefined" && MAXROLL_GEAR_PRESETS.chongo_live) {
          MAXROLL_GEAR_PRESETS.chongo_live.items = json.character.liveGear;
        }
        loadDetectedClientCharacter();
        if (typeof renderPaperdoll === "function") {
          renderPaperdoll(currentPresetKey);
        }
        if (typeof renderUpgradeAdvisor === "function") {
          renderUpgradeAdvisor(currentLevel);
        }

        if (btnHeader) {
          btnHeader.innerHTML = "✓ Synced!";
          btnHeader.style.backgroundColor = "#4ade80";
          btnHeader.style.color = "#000";
          setTimeout(() => {
            btnHeader.innerHTML = origHeader;
            btnHeader.style.backgroundColor = "";
            btnHeader.style.color = "";
          }, 2500);
        }

        if (feedbackEl) {
          feedbackEl.style.color = "#4ade80";
          feedbackEl.textContent = `✓ Successfully synced live game files: ${json.character.name} (Lvl ${json.character.level}) with ${json.character.liveGear.mainHand.name}!`;
          setTimeout(() => {
            feedbackEl.style.display = "none";
            closeSyncModal();
          }, 2000);
        }
        return;
      }
    }
    throw new Error("Invalid response from local sync server");
  } catch (err) {
    console.log("Local companion server not reachable; trying GitHub Cloud Sync...", err);
    // Try GitHub Cloud Gist sync (works from 2nd computer, phone, or remote browser!)
    const cloudResult = await checkCloudCharacterSync();
    if (cloudResult) {
      if (btnHeader) {
        btnHeader.innerHTML = "☁️ Synced!";
        btnHeader.style.backgroundColor = "#38bdf8";
        btnHeader.style.color = "#000";
        setTimeout(() => {
          btnHeader.innerHTML = origHeader;
          btnHeader.style.backgroundColor = "";
          btnHeader.style.color = "";
        }, 2500);
      }
      if (feedbackEl) {
        feedbackEl.style.color = "#38bdf8";
        feedbackEl.textContent = `☁️ Synced from GitHub Cloud: ${cloudResult.name} (Lvl ${cloudResult.level}) • ${cloudResult.liveGear.mainHand.name}!`;
        setTimeout(() => {
          feedbackEl.style.display = "none";
          closeSyncModal();
        }, 2200);
      }
      return;
    }

    // Fallback to cached bridge if offline
    loadDetectedClientCharacter();
    if (btnHeader) {
      btnHeader.innerHTML = "✓ Synced!";
      btnHeader.style.backgroundColor = "#4ade80";
      btnHeader.style.color = "#000";
      setTimeout(() => {
        btnHeader.innerHTML = origHeader;
        btnHeader.style.backgroundColor = "";
        btnHeader.style.color = "";
      }, 2000);
    }
    if (feedbackEl) {
      feedbackEl.style.color = "#f59e0b";
      feedbackEl.textContent = "Synced with local cached bridge.";
      setTimeout(() => {
        feedbackEl.style.display = "none";
        closeSyncModal();
      }, 2500);
    }
  }
}
window.executeGameSyncFromSite = executeGameSyncFromSite;

function directSyncHeaderClick() {
  executeGameSyncFromSite();
}
window.directSyncHeaderClick = directSyncHeaderClick;

// DOM Elements & Robust Initialization (Handles both loading and already-interactive states)
function initApp() {
  try { initNavigation(); } catch (e) { console.error("initNavigation error:", e); }
  try { initLevelControls(); } catch (e) { console.error("initLevelControls error:", e); }
  try { updateCharacterProfileUI(); } catch (e) { console.error("updateProfile error:", e); }
  try { renderLevel(currentLevel); } catch (e) { console.error("renderLevel error:", e); }
  try { renderChecklist(); } catch (e) { console.error("renderChecklist error:", e); }
  try { renderTalentTreeSummary(); } catch (e) { console.error("renderTalents error:", e); }
  try { initMaxrollPaperdoll(); } catch (e) { console.error("initPaperdoll error:", e); }
  try { initUpgradeAdvisor(); } catch (e) { console.error("initUpgradeAdvisor error:", e); }
  try { initLeatherworkingGuide(); } catch (e) { console.error("initLW error:", e); }
  try { checkCloudCharacterSync(); } catch (e) { console.error("cloudSync error:", e); }
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    // If DOM is already interactive or complete, initialize immediately
    initApp();
  }
}

function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const targetView = tab.getAttribute("data-tab");
      document.querySelectorAll(".view-panel").forEach(panel => {
        panel.classList.remove("active");
      });
      const activePanel = document.getElementById(targetView);
      if (activePanel) activePanel.classList.add("active");
    });
  });
}

function initLevelControls() {
  const slider = document.getElementById("levelSlider");
  const prevBtn = document.getElementById("prevLevelBtn");
  const nextBtn = document.getElementById("nextLevelBtn");
  
  if (slider) {
    slider.value = currentLevel;
    slider.addEventListener("input", (e) => {
      setLevel(parseInt(e.target.value));
    });
  }
  
  if (prevBtn) {
    prevBtn.disabled = (currentLevel <= 1);
    prevBtn.addEventListener("click", () => {
      if (currentLevel > 1) setLevel(currentLevel - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.disabled = (currentLevel >= 60);
    nextBtn.addEventListener("click", () => {
      if (currentLevel < 60) setLevel(currentLevel + 1);
    });
  }
  
  // Milestone jumps
  document.querySelectorAll(".pill-jump").forEach(pill => {
    const pLvl = parseInt(pill.getAttribute("data-lvl"));
    pill.classList.toggle("current-milestone", pLvl === currentLevel);
    pill.addEventListener("click", () => {
      const lvl = parseInt(pill.getAttribute("data-lvl"));
      if (lvl) setLevel(lvl);
    });
  });
}

function setLevel(lvl) {
  if (lvl < 1) lvl = 1;
  if (lvl > 60) lvl = 60;
  currentLevel = lvl;
  localStorage.setItem("wow_druid_current_level", currentLevel);
  
  const slider = document.getElementById("levelSlider");
  if (slider) slider.value = currentLevel;
  
  const prevBtn = document.getElementById("prevLevelBtn");
  const nextBtn = document.getElementById("nextLevelBtn");
  if (prevBtn) prevBtn.disabled = (currentLevel <= 1);
  if (nextBtn) nextBtn.disabled = (currentLevel >= 60);
  
  // Highlight active milestone pill
  document.querySelectorAll(".pill-jump").forEach(pill => {
    const pLvl = parseInt(pill.getAttribute("data-lvl"));
    pill.classList.toggle("current-milestone", pLvl === currentLevel);
  });
  
  renderLevel(currentLevel);
  renderTalentTreeSummary();
  updateCharacterProfileUI();
  if (typeof renderUpgradeAdvisor === "function") renderUpgradeAdvisor(currentLevel);
}

function renderLevel(lvl) {
  const data = DRUID_LEVEL_DATA[lvl] || DRUID_LEVEL_DATA[9];
  
  // Level badge and title
  const valEl = document.querySelector(".level-badge-huge .lvl-val");
  const titleEl = document.getElementById("levelMainTitle");
  const subEl = document.getElementById("levelMainSub");
  
  if (valEl) valEl.textContent = lvl;
  if (titleEl) titleEl.textContent = `Level ${lvl}: ${data.title}`;
  if (subEl) subEl.textContent = `${data.zone} • ${data.hubs}`;
  
  // Zone Card
  const zoneNameEl = document.getElementById("zoneName");
  const zoneRangeEl = document.getElementById("zoneRange");
  const zoneHubsEl = document.getElementById("zoneHubs");
  const zoneInstructionsEl = document.getElementById("zoneInstructions");
  
  if (zoneNameEl) zoneNameEl.textContent = data.zone;
  if (zoneRangeEl) zoneRangeEl.textContent = `Bracket: ${data.zoneRange}`;
  if (zoneHubsEl) zoneHubsEl.textContent = `Flight Paths / Hubs: ${data.hubs}`;
  if (zoneInstructionsEl) zoneInstructionsEl.innerHTML = formatInstructions(data.zoneInstructions);
  
  // Class Quest / Bear Form Callout if lvl 9 or 10 or 16 or 20
  const questCallout = document.getElementById("classQuestCallout");
  if (questCallout) {
    if (lvl === 9) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">⭐</div>
        <div class="quest-callout-text">
          <strong>Prepare for Level 10:</strong> At Level 10, speak to your town trainer <strong>Lotheluum Starbreeze</strong> to pick up <em>"The Great Ursera Spirit"</em>, which directs you to <strong>Urs'endris</strong> at the <strong>East Pylon Watchtower (coords 69.8, 61.7)</strong> for your Bear Form quest!
        </div>
      `;
    } else if (lvl === 10) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">🐻</div>
        <div class="quest-callout-text">
          <strong>CLASS QUEST: Strength and Mercy Walkthrough:</strong><br>
          • <strong>Quest Giver:</strong> <strong>Urs'endris</strong> at the <strong>East Pylon Watchtower (coords 69.8, 61.7)</strong> (northeast of Valanaar, near the waterfall below Shrine of Akir).<br>
          • <strong>Target Cave:</strong> Cave at the Overlook Standing Stones at <strong>coords (53.7, 65.0)</strong>.<br>
          • <strong>CRITICAL PATHING:</strong> Approach the cave from the <strong>NORTHERN side</strong> (the southern side is blocked by sheer rock cliffs). Defeat Ur'endra inside!<br>
          • <strong>Turn-in:</strong> Return to Urs'endris at <strong>(69.8, 61.7)</strong> to unlock <strong>Bear Form</strong>!
        </div>
      `;
    } else if (lvl === 16) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">🐬</div>
        <div class="quest-callout-text">
          <strong>CLASS QUEST: Trial of the Sea Lion:</strong> Teleport to Moonglade to begin your Aquatic Form quest. Retrieve the two halves of the Sea Lion Pendant from Westfall and Darkshore waters for 50% swim speed and infinite water breathing!
        </div>
      `;
    } else if (lvl === 20) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">🐾</div>
        <div class="quest-callout-text">
          <strong>CLASS MILESTONE: Cat Form Unlocked!</strong> Visit any Druid trainer to learn Cat Form, Prowl, Claw, Rip, and Tiger's Fury. Your DPS and questing speed now skyrocket!
        </div>
      `;
    } else if (lvl === 30) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">🐆</div>
        <div class="quest-callout-text">
          <strong>CLASS MILESTONE: Travel Form & Leader of the Pack!</strong> Learn 40% Travel Form at your trainer and talent into Leader of the Pack (+3% permanent party crit aura).
        </div>
      `;
    } else if (lvl === 40) {
      questCallout.style.display = "flex";
      questCallout.innerHTML = `
        <div class="quest-callout-icon">🐎</div>
        <div class="quest-callout-text">
          <strong>LEVEL 40 MILESTONE: Dire Bear Form & 60% Mount!</strong> Buy your racial mount for ~90 gold, learn Dire Bear Form (+360% armor bonus!), and pick up Innervate at your trainer.
        </div>
      `;
    } else {
      questCallout.style.display = "none";
    }
  }
  
  // Talent Card
  const talentContainer = document.getElementById("talentSpotlightContent");
  if (talentContainer) {
    if (data.talent) {
      const pointIndex = lvl - 10;
      const tid = (pointIndex >= 0 && pointIndex < TALENT_LEVEL_ORDER.length) ? TALENT_LEVEL_ORDER[pointIndex] : null;
      const rankLearned = tid ? (userTalentsState[tid] || 0) : 0;
      const isLearnedHere = rankLearned > 0;

      talentContainer.innerHTML = `
        <div class="talent-header-row">
          <div class="talent-name-group">
            <div class="talent-icon-frame">${getTreeEmoji(data.talent.tree)}</div>
            <div>
              <div class="talent-title-text">${data.talent.name}</div>
              <div class="talent-tree-name">${data.talent.tree} Tree</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="talent-rank-pill">${data.talent.rank}</div>
            ${isLearnedHere ? `<span style="background: rgba(74,222,128,0.2); color:#4ade80; border:1px solid #4ade80; font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:12px;">✓ Tracked (${rankLearned} pts)</span>` : ''}
          </div>
        </div>
        <div class="talent-desc">"${data.talent.effect}"</div>
        <div class="talent-why"><strong>Why this pick:</strong> ${data.talent.why}</div>
        <div style="margin-top: 12px; display: flex; align-items: center; gap: 10px;">
          <button class="btn-ctrl" onclick="learnCurrentLevelTalent(${lvl})" style="font-size:0.82rem; padding:6px 12px; border-color:${isLearnedHere ? '#4ade80' : 'var(--gold-accent)'}">
            ${isLearnedHere ? '✓ Learned in Game (Add Point)' : '+ Mark Learned in Game'}
          </button>
          <button class="btn-ctrl" onclick="document.querySelector('[data-tab=tab-talents]').click()" style="font-size:0.82rem; padding:6px 12px;">
            🌲 Open Full Talent Tree
          </button>
        </div>
      `;
    } else {
      talentContainer.innerHTML = `
        <div class="talent-desc" style="border-left-color: #64748b;">
          <em>${data.talentNote || "Talent points unlock at Level 10. Prepare to invest your first 5 points into Ferocity!"}</em>
        </div>
      `;
    }
  }
  
  // Spells to Train vs Skip
  const trainListEl = document.getElementById("spellsTrainList");
  const skipListEl = document.getElementById("spellsSkipList");
  
  if (trainListEl) {
    if (data.trainerTrain && data.trainerTrain.length > 0) {
      trainListEl.innerHTML = data.trainerTrain.map(sp => `
        <div class="spell-item">
          <span class="spell-name">✓ ${sp}</span>
          <span class="spell-role">BUY</span>
        </div>
      `).join("");
    } else {
      trainListEl.innerHTML = `<div class="spell-item"><span class="spell-name" style="color:#94a3b8;">No new core spells to buy this level. Save your gold!</span></div>`;
    }
  }
  
  if (skipListEl) {
    if (data.trainerSkip && data.trainerSkip.length > 0) {
      skipListEl.innerHTML = data.trainerSkip.map(sp => `
        <div class="spell-item">
          <span class="spell-name" style="color:#f87171;">✕ ${sp}</span>
          <span class="spell-role">SKIP</span>
        </div>
      `).join("");
    } else {
      skipListEl.innerHTML = `<div class="spell-item"><span class="spell-name" style="color:#94a3b8;">No expensive trap spells this level.</span></div>`;
    }
  }
  
  // Rotation Steps
  const rotationListEl = document.getElementById("rotationStepsList");
  if (rotationListEl) {
    rotationListEl.innerHTML = data.rotation.map((step, idx) => `
      <div class="rot-step">
        <div class="rot-num">${idx + 1}</div>
        <div class="rot-desc">${formatInstructions(step)}</div>
      </div>
    `).join("");
  }
  
  // Gear Upgrades Card
  const gearListEl = document.getElementById("gearItemList");
  const gearTipEl = document.getElementById("generalGearTip");
  if (gearTipEl) gearTipEl.textContent = data.gearTip;
  
  if (gearListEl) {
    if (data.dungeonGear && data.dungeonGear.length > 0) {
      gearListEl.innerHTML = data.dungeonGear.map(item => `
        <div class="gear-item-card">
          <div class="gear-item-top">
            <span class="gear-name ${item.quality}">${item.name}</span>
            <span class="gear-source">${item.source}</span>
          </div>
          <div class="gear-stats">${item.stats}</div>
          <div class="gear-tip">${item.tip}</div>
        </div>
      `).join("");
    } else {
      gearListEl.innerHTML = `
        <div class="gear-item-card">
          <div class="gear-stats" style="color:#94a3b8;">Focus on quest rewards or Leatherworking pieces with <strong>Agility & Strength</strong> ("Of the Tiger") or <strong>Strength & Stamina</strong> ("Of the Bear").</div>
        </div>
      `;
    }
  }
  
  // Update dynamic stat priorities based on bracket
  updateStatPriorityWidget(lvl);
  
  // Render Non-Dungeon Optimal Gear & Weapons (AH, LW, Quests)
  renderNonDungeonGear(lvl);
}

function updateStatPriorityWidget(lvl) {
  const container = document.getElementById("statPriorityContainer");
  if (!container) return;
  
  if (lvl < 20) {
    container.innerHTML = `
      <div class="stat-prio-item">
        <span class="stat-prio-name">1. Strength & Armor</span>
        <span class="stat-prio-badge prio-1">Top Priority</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">2. Stamina</span>
        <span class="stat-prio-badge prio-2">High</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">3. Spirit</span>
        <span class="stat-prio-badge prio-3">Medium (Mana Regen)</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">4. Agility</span>
        <span class="stat-prio-badge prio-4">Good for dodge</span>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="stat-prio-item">
        <span class="stat-prio-name">1. Agility (Agi)</span>
        <span class="stat-prio-badge prio-1">Top Priority (1 AP + Crit)</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">2. Strength (Str)</span>
        <span class="stat-prio-badge prio-2">High (2 AP per Str)</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">3. Stamina (Stam)</span>
        <span class="stat-prio-badge prio-3">Medium (Bear Tanking)</span>
      </div>
      <div class="stat-prio-item">
        <span class="stat-prio-name">4. Hit Rating (Endgame)</span>
        <span class="stat-prio-badge prio-4">Cap at 9% for raids</span>
      </div>
    `;
  }
}

function formatInstructions(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function getTreeEmoji(tree) {
  if (tree.includes("Feral")) return "🐾";
  if (tree.includes("Balance")) return "🌙";
  if (tree.includes("Resto")) return "🌿";
  return "⭐";
}

// Checklist rendering
const CHECKLIST_ITEMS = [
  { id: "c1", text: "Reach Level 10: Meet Urs'endris at East Pylon Watchtower (69.8, 61.7) & slay Ur'endra at (53.7, 65.0) for Bear Form" },
  { id: "c2", text: "Take High Order portal to Stormwind City & bind Hearthstone at Sentinel Hill / Thelsamar" },
  { id: "c3", text: "Learn Skinning & Leatherworking (reach skill 75 before level 15)" },
  { id: "c4", text: "Complete 5/5 Ferocity talent (reduces Maul/Claw/Swipe cost by 5)" },
  { id: "c5", text: "Run Deadmines and obtain Smite's Mighty Hammer or Tunic of Westfall" },
  { id: "c6", text: "Complete Level 16 Aquatic Form quest ('Trial of the Sea Lion')" },
  { id: "c7", text: "Reach Level 20: Train Cat Form, Prowl, and Feline Swiftness (30% run speed!)" },
  { id: "c8", text: "Obtain Triprunner Dungarees (+18 Agi, +4 Str) from Gnomeregan quest" },
  { id: "c9", text: "Reach Level 30: Train Travel Form (40% run speed) & talent Leader of the Pack" },
  { id: "c10", text: "Craft or purchase Wolfshead Helm (BiS powershifting energy helm)" },
  { id: "c11", text: "Reach Level 40: Purchase 60% Mount & train Dire Bear Form" },
  { id: "c12", text: "Run Maraudon: Farm Blackstone Ring from Princess Theradras" },
  { id: "c13", text: "Farm Devilsaurs in Un'Goro Crater for Devilsaur Leather set" },
  { id: "c14", text: "Talent into Omen of Clarity at Level 52 for free Clearcasting procs" },
  { id: "c15", text: "Reach Level 60 and complete Onyxia & Molten Core attunements!" }
];

function renderChecklist() {
  const container = document.getElementById("checklistItemsContainer");
  if (!container) return;
  
  container.innerHTML = CHECKLIST_ITEMS.map(item => {
    const isChecked = !!userChecklistState[item.id];
    return `
      <label class="checklist-item ${isChecked ? 'checked' : ''}" data-id="${item.id}">
        <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleChecklist('${item.id}')">
        <span>${item.text}</span>
      </label>
    `;
  }).join("");
}

window.toggleChecklist = function(id) {
  userChecklistState[id] = !userChecklistState[id];
  localStorage.setItem("wow_druid_checklist", JSON.stringify(userChecklistState));
  renderChecklist();
};

// Interactive Talent Allocation Engine
function getTotalTalentsSpent() {
  let total = 0;
  for (const key in userTalentsState) {
    total += userTalentsState[key] || 0;
  }
  return total;
}

function getMaxTalentPointsAvailable() {
  return Math.max(0, currentLevel - 9);
}

function getTreePointsSpent(treeName) {
  let total = 0;
  DRUID_TALENTS_CONFIG.filter(t => t.tree === treeName).forEach(t => {
    total += (userTalentsState[t.id] || 0);
  });
  return total;
}

function getTreeTargetPoints(treeName) {
  let count = 0;
  TALENT_LEVEL_ORDER.forEach(tid => {
    const t = DRUID_TALENTS_CONFIG.find(x => x.id === tid);
    if (t && t.tree === treeName) count++;
  });
  return count;
}

window.adjustTalentPoint = function(id, delta) {
  const cfg = DRUID_TALENTS_CONFIG.find(t => t.id === id);
  if (!cfg) return;
  const current = userTalentsState[id] || 0;
  const spent = getTotalTalentsSpent();
  const available = getMaxTalentPointsAvailable();

  if (delta > 0) {
    if (spent >= available) {
      alert(`You only have ${available} talent point(s) at Level ${currentLevel}! Level up on the slider or click 'Auto-Learn' to update.`);
      return;
    }
    if (current >= cfg.max) return;
    userTalentsState[id] = current + 1;
  } else if (delta < 0) {
    if (current <= 0) return;
    userTalentsState[id] = current - 1;
    if (userTalentsState[id] === 0) delete userTalentsState[id];
  }

  localStorage.setItem("wow_druid_talents", JSON.stringify(userTalentsState));
  renderTalentTreeSummary();
  renderLevel(currentLevel);
};

window.autoLearnTalentsToCurrentLevel = function() {
  userTalentsState = {};
  const points = getMaxTalentPointsAvailable();
  for (let i = 0; i < points && i < TALENT_LEVEL_ORDER.length; i++) {
    const tid = TALENT_LEVEL_ORDER[i];
    userTalentsState[tid] = (userTalentsState[tid] || 0) + 1;
  }
  localStorage.setItem("wow_druid_talents", JSON.stringify(userTalentsState));
  renderTalentTreeSummary();
  renderLevel(currentLevel);
};

window.resetTalents = function() {
  if (confirm("Reset all spent talent points? (Simulates visiting your Druid trainer to unlearn talents)")) {
    userTalentsState = {};
    localStorage.setItem("wow_druid_talents", JSON.stringify(userTalentsState));
    renderTalentTreeSummary();
    renderLevel(currentLevel);
  }
};

window.learnCurrentLevelTalent = function(lvl) {
  if (lvl < 10) return;
  const pointIndex = lvl - 10;
  if (pointIndex < TALENT_LEVEL_ORDER.length) {
    const tid = TALENT_LEVEL_ORDER[pointIndex];
    window.adjustTalentPoint(tid, 1);
  }
};

function renderTalentTreeSummary() {
  const available = getMaxTalentPointsAvailable();
  const spent = getTotalTalentsSpent();
  const remaining = Math.max(0, available - spent);

  // Update Points Header Bar if present
  const availEl = document.getElementById("talentsPointsAvail");
  const spentEl = document.getElementById("talentsPointsSpent");
  const remEl = document.getElementById("talentsPointsRem");
  const lvlBadgeEl = document.getElementById("talentsCurrentLevelBadge");

  if (availEl) availEl.textContent = `${available} Pts`;
  if (spentEl) spentEl.textContent = `${spent} Spent`;
  if (remEl) remEl.textContent = `${remaining} Remaining`;
  if (lvlBadgeEl) lvlBadgeEl.textContent = `Level ${currentLevel}`;

  // Tree totals
  const feralSpentEl = document.getElementById("feralTreePoints");
  const balanceSpentEl = document.getElementById("balanceTreePoints");
  const restoSpentEl = document.getElementById("restoTreePoints");

  if (feralSpentEl) feralSpentEl.textContent = `${getTreePointsSpent("feral")} / ${getTreeTargetPoints("feral")}`;
  if (balanceSpentEl) balanceSpentEl.textContent = `${getTreePointsSpent("balance")} / ${getTreeTargetPoints("balance")}`;
  if (restoSpentEl) restoSpentEl.textContent = `${getTreePointsSpent("resto")} / ${getTreeTargetPoints("resto")}`;

  // Render individual talent trees
  renderTreeNodes("feralTalentsList", "feral", remaining);
  renderTreeNodes("balanceTalentsList", "balance", remaining);
  renderTreeNodes("restoTalentsList", "resto", remaining);
}

function renderTreeNodes(containerId, treeName, remainingPoints) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const talents = DRUID_TALENTS_CONFIG.filter(t => t.tree === treeName);
  container.innerHTML = talents.map(t => {
    const rank = userTalentsState[t.id] || 0;
    const isLearned = rank > 0;
    const isMaxed = rank >= t.max;
    const canAdd = !isMaxed && remainingPoints > 0;
    const canSub = rank > 0;

    return `
      <div class="interactive-talent-node ${isMaxed ? 'maxed' : (isLearned ? 'learned' : '')}">
        <div class="talent-node-info">
          <div class="talent-node-icon">${t.icon}</div>
          <div class="talent-node-text-group">
            <span class="talent-node-name">${t.name}</span>
            <span class="talent-node-desc">${t.desc}</span>
          </div>
        </div>
        <div class="talent-node-controls">
          <button class="btn-talent-step" ${canSub ? '' : 'disabled'} onclick="adjustTalentPoint('${t.id}', -1)">−</button>
          <span class="talent-rank-counter">${rank}/${t.max}</span>
          <button class="btn-talent-step" ${canAdd ? '' : 'disabled'} onclick="adjustTalentPoint('${t.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join("");
}

// In-Game Account Sync & Character Linking Logic
function openSyncModal() {
  const modal = document.getElementById("syncAccountModal");
  if (modal) {
    modal.classList.add("active");
    // Pre-populate modal fields
    const directNameInput = document.getElementById("directSyncNameInput");
    const directLvlInput = document.getElementById("directSyncLevelInput");
    if (directNameInput && userProfileState.name) directNameInput.value = userProfileState.name;
    if (directLvlInput) directLvlInput.value = currentLevel;
    const feedbackEl = document.getElementById("syncFeedbackMsg");
    if (feedbackEl) feedbackEl.style.display = "none";
  }
}
window.openSyncModal = openSyncModal;

function closeSyncModal() {
  const modal = document.getElementById("syncAccountModal");
  if (modal) modal.classList.remove("active");
}
window.closeSyncModal = closeSyncModal;

function quickStepLevel(delta) {
  let target = currentLevel + delta;
  if (target < 1) target = 1;
  if (target > 60) target = 60;
  setLevel(target);
}
window.quickStepLevel = quickStepLevel;

function stepModalLevel(delta) {
  const lvlInput = document.getElementById("directSyncLevelInput");
  if (!lvlInput) return;
  let val = parseInt(lvlInput.value, 10) || currentLevel;
  val = Math.max(1, Math.min(60, val + delta));
  lvlInput.value = val;
}
window.stepModalLevel = stepModalLevel;

function handleDirectLevelSync() {
  const lvlInput = document.getElementById("directSyncLevelInput");
  const nameInput = document.getElementById("directSyncNameInput");
  const feedbackEl = document.getElementById("syncFeedbackMsg");

  const lvl = parseInt(lvlInput.value, 10);
  if (!lvl || lvl < 1 || lvl > 60) {
    if (feedbackEl) {
      feedbackEl.style.display = "block";
      feedbackEl.style.color = "#f87171";
      feedbackEl.textContent = "Please enter a valid level between 1 and 60.";
    }
    return;
  }

  if (nameInput && nameInput.value.trim()) {
    userProfileState.name = nameInput.value.trim();
    localStorage.setItem("wow_druid_profile", JSON.stringify(userProfileState));
  }

  setLevel(lvl);
  updateCharacterProfileUI();

  if (feedbackEl) {
    feedbackEl.style.display = "block";
    feedbackEl.style.color = "#4ade80";
    feedbackEl.textContent = `✓ Character linked! Set to Level ${lvl} (${userProfileState.name || 'Skyborne Druid'}).`;
    setTimeout(() => {
      feedbackEl.style.display = "none";
      closeSyncModal();
    }, 1200);
  }
}
window.handleDirectLevelSync = handleDirectLevelSync;

function handleInGameSyncString() {
  const inputEl = document.getElementById("inGameSyncInput");
  const feedbackEl = document.getElementById("syncFeedbackMsg");
  if (!inputEl) return;
  const raw = inputEl.value.trim();
  if (!raw) {
    if (feedbackEl) {
      feedbackEl.style.display = "block";
      feedbackEl.style.color = "#f87171";
      feedbackEl.textContent = "Please paste your sync string or enter a level.";
    }
    return;
  }

  let name = "";
  let level = null;

  // 1. Try parsing JSON format: {"name":"Thunderpaw","level":15}
  try {
    const json = JSON.parse(raw);
    if (json.level) level = parseInt(json.level, 10);
    if (json.name) name = String(json.name).trim();
  } catch (e) {
    // Not JSON, continue to string matchers
  }

  // 2. Try Name:Level or SYNC STRING: Name:Level
  if (!level) {
    const colonMatch = raw.match(/(?:SYNC STRING:\s*)?([A-Za-z\u00C0-\u024F\s']+):(\d+)/i);
    if (colonMatch) {
      name = colonMatch[1].trim();
      level = parseInt(colonMatch[2], 10);
    }
  }

  // 3. Try Name Level (e.g. "Thunderpaw 14")
  if (!level) {
    const wordNumMatch = raw.match(/^([A-Za-z\u00C0-\u024F']+)\s+(\d+)$/i);
    if (wordNumMatch) {
      name = wordNumMatch[1].trim();
      level = parseInt(wordNumMatch[2], 10);
    }
  }

  // 4. Try any number in string (e.g. "lvl 14" or "14")
  if (!level) {
    const numMatch = raw.match(/(\d+)/);
    if (numMatch) {
      level = parseInt(numMatch[1], 10);
    }
  }

  if (level && level >= 1 && level <= 60) {
    setLevel(level);
    if (name) {
      userProfileState.name = name;
      localStorage.setItem("wow_druid_profile", JSON.stringify(userProfileState));
    }
    updateCharacterProfileUI();

    if (feedbackEl) {
      feedbackEl.style.display = "block";
      feedbackEl.style.color = "#4ade80";
      feedbackEl.textContent = `✓ Successfully synced! Character: ${userProfileState.name || 'Skyborne Druid'}, Level: ${level}.`;
      setTimeout(() => {
        feedbackEl.style.display = "none";
        closeSyncModal();
      }, 1400);
    }
  } else {
    if (feedbackEl) {
      feedbackEl.style.display = "block";
      feedbackEl.style.color = "#f87171";
      feedbackEl.textContent = "Could not find a valid level (1–60) in that string. Try typing your level directly (e.g. 9).";
    }
  }
}
window.handleInGameSyncString = handleInGameSyncString;

function loadDetectedClientCharacter() {
  const syncedData = (typeof window !== "undefined" && window.WOW_SYNCED_DATA) ? window.WOW_SYNCED_DATA : null;
  const detectedName = (syncedData && syncedData.name) || userProfileState.name || "Chongo";
  const detectedLevel = (syncedData && syncedData.level) ? Math.max(currentLevel, syncedData.level) : Math.max(currentLevel, 11);

  userProfileState.name = detectedName;
  userProfileState.realm = "Darkwind (WoW Forever)";
  safeSetJSON("wow_druid_profile", userProfileState);
  setLevel(detectedLevel);
  updateCharacterProfileUI();

  // If live gear was updated, re-render paperdoll immediately
  if (syncedData && syncedData.liveGear && MAXROLL_GEAR_PRESETS.chongo_live) {
    MAXROLL_GEAR_PRESETS.chongo_live.items = syncedData.liveGear;
    if (typeof renderPaperdoll === "function") {
      renderPaperdoll("chongo_live");
    }
  }

  const feedbackEl = document.getElementById("syncFeedbackMsg");
  if (feedbackEl) {
    feedbackEl.style.display = "block";
    feedbackEl.style.color = "#4ade80";
    feedbackEl.textContent = `✓ Synced with WoW Forever client: ${detectedName} (Level ${detectedLevel})!`;
    setTimeout(() => {
      feedbackEl.style.display = "none";
      closeSyncModal();
    }, 1200);
  }
}
window.loadDetectedClientCharacter = loadDetectedClientCharacter;

function handleWtfFileUpload(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const feedbackEl = document.getElementById("syncFeedbackMsg");
  const reader = new FileReader();
  reader.onload = function(evt) {
    const text = evt.target.result;
    let level = null;
    let name = null;

    // 1. Check Questie.lua journey and profileKeys
    if (text.includes("QuestieConfig") || text.includes("journey") || (file.name && file.name.toLowerCase().includes("questie"))) {
      const pKeyMatch = text.match(/\["profileKeys"\]\s*=\s*\{\s*\["([^"]+)"\]/);
      if (pKeyMatch) {
        name = pKeyMatch[1].split(" ")[0]; // "Chongo" from "Chongo Darkwind"
      } else {
        const charMatch = text.match(/\["char"\]\s*=\s*\{\s*\["([^"]+)"\]/);
        if (charMatch) name = charMatch[1].split(" ")[0];
      }

      const journeyLevels = [...text.matchAll(/\["(?:Level|NewLevel)"\]\s*=\s*(\d+)/g)].map(m => parseInt(m[1], 10));
      if (journeyLevels.length > 0) {
        level = Math.max(...journeyLevels);
      }
    }

    // 2. Check Pawn.lua
    if (!name && text.includes("LastPlayerFullName")) {
      const pawnNameMatch = text.match(/\["LastPlayerFullName"\]\s*=\s*"([^"]+)"/);
      if (pawnNameMatch) name = pawnNameMatch[1].split(" ")[0];
    }

    // 3. Fallback generic level/name matches
    if (!level) {
      const lvlMatch = text.match(/\["level"\]\s*=\s*(\d+)/i) || text.match(/level\s*[:=]\s*(\d+)/i);
      if (lvlMatch) level = parseInt(lvlMatch[1], 10);
    }
    if (!name) {
      const nameMatch = text.match(/\["name"\]\s*=\s*"([^"]+)"/i) || text.match(/name\s*[:=]\s*"([^"]+)"/i);
      if (nameMatch) name = nameMatch[1];
    }

    if (level && level >= 1 && level <= 60) {
      if (name) {
        userProfileState.name = name;
        localStorage.setItem("wow_druid_profile", JSON.stringify(userProfileState));
      }
      setLevel(level);
      updateCharacterProfileUI();
      if (feedbackEl) {
        feedbackEl.style.display = "block";
        feedbackEl.style.color = "#4ade80";
        feedbackEl.textContent = `✓ Auto-detected from ${file.name}: ${name || 'Druid'} Level ${level}!`;
        setTimeout(() => {
          feedbackEl.style.display = "none";
          closeSyncModal();
        }, 1500);
      }
    } else {
      if (feedbackEl) {
        feedbackEl.style.display = "block";
        feedbackEl.style.color = "#f87171";
        feedbackEl.textContent = `Could not extract character level from ${file.name}. Ensure you select Questie.lua or a character SavedVariables file.`;
      }
    }
  };
  reader.readAsText(file);
}
window.handleWtfFileUpload = handleWtfFileUpload;

function updateCharacterProfileUI() {
  const name = userProfileState.name || "Skyborne Druid";
  
  // Header widget elements
  const headerNameEl = document.getElementById("headerCharName");
  const headerLvlEl = document.getElementById("headerCharLvl");
  if (headerNameEl) headerNameEl.textContent = name;
  if (headerLvlEl) headerLvlEl.textContent = currentLevel;

  // Paperdoll hero name
  const heroNameEl = document.querySelector(".character-hero-name");
  if (heroNameEl) {
    heroNameEl.textContent = name;
  }

  // Modal input elements
  const directNameInput = document.getElementById("directSyncNameInput");
  const directLvlInput = document.getElementById("directSyncLevelInput");
  if (directNameInput && !directNameInput.value) directNameInput.value = name;
  if (directLvlInput && !directLvlInput.matches(":focus")) directLvlInput.value = currentLevel;
}
window.updateCharacterProfileUI = updateCharacterProfileUI;

function copyMacro(btn, explicitCode) {
  let code = explicitCode;
  if (!code && btn) {
    const box = btn.closest(".macro-box");
    if (box) {
      const codeEl = box.querySelector(".macro-code");
      if (codeEl) code = codeEl.innerText || codeEl.textContent;
    }
  }
  if (!code) return;

  // Normalize linebreaks so WoW macro box receives authentic separate lines
  code = code.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();

  function setCopied() {
    const originalText = btn.textContent;
    btn.textContent = "✓ Copied!";
    btn.style.backgroundColor = "#4ade80";
    btn.style.color = "#000";
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.backgroundColor = "";
      btn.style.color = "";
    }, 2000);
  }

  // Modern clipboard API with fallback for file:/// protocol
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(setCopied).catch(() => {
      fallbackCopy(code, setCopied);
    });
  } else {
    fallbackCopy(code, setCopied);
  }

  function fallbackCopy(text, cb) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      ta.style.top = "0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      cb();
    } catch (err) {
      alert("Macro copied! If it did not reach clipboard, please copy manually:\n\n" + text);
    }
  }
}
window.copyMacro = copyMacro;


/* ==========================================================================
   Maxroll.gg Style Character Armor & Equipment Paperdoll System Engine
   ========================================================================== */

const MAXROLL_GEAR_PRESETS = {
  chongo_live: {
    id: "chongo_live",
    title: "Chongo's Live Equipped Gear",
    subtitle: "Synced live from WoW Forever client (Pawn.lua cache)",
    stats: {
      hp: "420",
      mp: "490",
      catAp: "142",
      bearArmor: "580 (38% Reduc)",
      crit: "6.8%",
      dodge: "5.4%",
      hit: "0%"
    },
    items: (typeof window !== "undefined" && window.WOW_SYNCED_DATA && window.WOW_SYNCED_DATA.liveGear) ? window.WOW_SYNCED_DATA.liveGear : {
      head: { slot: "Head", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped (Level 11)", armor: "0 Armor", stats: ["No head armor available until lvl 14+"] },
      neck: { slot: "Neck", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Neck items become available at lvl 18+"] },
      shoulders: { slot: "Shoulders", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: "0 Armor", stats: ["Shoulders start dropping around lvl 17"] },
      back: { slot: "Back", type: "Cloak", name: "Hunter's Simple Cloak", quality: "uncommon", source: "Zephras Isle Quest Reward", armor: "14 Armor", stats: ["+2 Stamina", "+1 Agility"], req: "Requires Level 8" },
      chest: { slot: "Chest", type: "Leather", name: "Bandit's Jerkin", quality: "common", source: "Equipped from Quest / Drop", armor: "42 Armor", stats: ["+2 Agility", "+1 Strength"], req: "Requires Level 7" },
      wrists: { slot: "Wrists", type: "Leather", name: "Worn Leather Bracers", quality: "poor", source: "Starting Quest / Vendor", armor: "12 Armor", stats: ["+1 Stamina"], req: "Requires Level 9" },
      hands: { slot: "Hands", type: "Leather", name: "Ragged Leather Gloves", quality: "poor", source: "Early Quest / Drop", armor: "16 Armor", stats: ["+1 Armor bonus"], req: "Requires Level 4" },
      waist: { slot: "Waist", type: "Leather", name: "Wolfhide Belt", quality: "common", source: "Leatherworking / Quest", armor: "28 Armor", stats: ["+2 Strength", "+1 Stamina"], req: "Requires Level 10" },
      legs: { slot: "Legs", type: "Leather", name: "Gardening Pants", quality: "common", source: "Gustberry Lowlands Quest Reward", armor: "38 Armor", stats: ["+2 Stamina", "+1 Spirit"], req: "Requires Level 5" },
      feet: { slot: "Feet", type: "Leather", name: "Ragged Leather Boots", quality: "poor", source: "Starting Quest / Vendor", armor: "15 Armor", stats: ["+1 Armor bonus"], req: "Requires Level 3" },
      ring1: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
      ring2: { slot: "Finger", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Rings start around lvl 14-16"] },
      trinket1: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
      trinket2: { slot: "Trinket", type: "Empty", name: "None Equipped", quality: "common", source: "Not yet equipped", armor: null, stats: ["Trinkets start around lvl 26+"] },
      mainHand: { slot: "Two-Hand", type: "Two-Handed Staff", name: "Sturdy Quarterstaff of the Bear", quality: "uncommon", source: "Currently Equipped on Chongo", armor: null, stats: ["+4 Strength (+8 AP)", "+4 Stamina"], req: "Item Level 13 (Requires Level 10)", tip: "⭐ GREAT WEAPON PICK! Two-handed staff with Strength and Stamina — perfect for Bear Form and leveling!" },
      offHand: { slot: "Off-Hand", type: "None (2H Equipped)", name: "Empty (2H Staff in Use)", quality: "disabled", source: "Two-Handed Weapon Occupies Both Hands", armor: null, stats: ["Two-Handed weapon equipped in Main Hand."], req: "Two-Hander in Use" },
      relic: { slot: "Relic / Idol", type: "Idol", name: "Empty Idol Slot", quality: "common", source: "Druid Relic", armor: null, stats: ["Idols become available in level 50+ dungeons and Stratholme"] }
    }
  },

  lvl10_20: {
    id: "lvl10_20",
    title: "Level 10–20 (Deadmines Era)",
    subtitle: "Early Bear Tanking & Questing Setup",
    stats: {
      hp: "840",
      mp: "760",
      catAp: "242",
      bearArmor: "1,620 (61% Reduc)",
      crit: "11.2%",
      dodge: "9.5%",
      hit: "0%"
    },
    items: {
      head: { slot: "Head", type: "Leather", name: "Feathered Headdress", quality: "uncommon", source: "Westfall / Loch Modan Quest", armor: "34 Armor", stats: ["+3 Spirit", "+2 Stamina"], req: "Requires Level 14" },
      neck: { slot: "Neck", type: "Necklace", name: "Sentinel's Medallion", quality: "rare", source: "Warsong Gulch Vendor / Quest", armor: null, stats: ["+2 Agility", "+2 Stamina"], req: "Requires Level 18" },
      shoulders: { slot: "Shoulders", type: "Leather", name: "Serpent's Shoulders", quality: "uncommon", source: "Wailing Caverns - Lord Pythas", armor: "48 Armor", stats: ["+5 Strength", "+2 Agility"], req: "Requires Level 17" },
      back: { slot: "Back", type: "Cloak", name: "Engineer's Cloak", quality: "rare", source: "Deadmines - Sneed", armor: "22 Armor", stats: ["+3 Agility", "+3 Stamina"], req: "Requires Level 16" },
      chest: { slot: "Chest", type: "Leather", name: "Tunic of Westfall", quality: "rare", source: "Quest: The Defias Brotherhood", armor: "89 Armor", stats: ["+11 Agility", "+5 Stamina"], req: "Requires Level 19" },
      wrists: { slot: "Wrists", type: "Leather", name: "Wrangler's Wristbands of the Bear", quality: "uncommon", source: "World Drop", armor: "28 Armor", stats: ["+3 Strength", "+2 Stamina"], req: "Requires Level 15" },
      
      hands: { slot: "Hands", type: "Leather", name: "Gloves of the Fang", quality: "rare", source: "Wailing Caverns Drop", armor: "54 Armor", stats: ["+4 Agility", "+4 Strength"], req: "Requires Level 19" },
      waist: { slot: "Waist", type: "Leather", name: "Deviate Scale Belt", quality: "uncommon", source: "Leatherworking (Skill 115)", armor: "49 Armor", stats: ["+5 Agility", "+6 Stamina", "+5 Spirit"], req: "Requires Level 18" },
      legs: { slot: "Legs", type: "Leather", name: "Leggings of the Fang", quality: "rare", source: "Wailing Caverns - Lord Cobrahn", armor: "78 Armor", stats: ["+5 Agility", "+4 Strength", "+4 Stamina"], req: "Requires Level 18" },
      feet: { slot: "Feet", type: "Leather", name: "Footpads of the Fang", quality: "rare", source: "Wailing Caverns - Lady Anacondra", armor: "52 Armor", stats: ["+4 Agility", "+4 Stamina"], req: "Requires Level 18" },
      ring1: { slot: "Finger", type: "Ring", name: "Silverlaine's Family Seal", quality: "rare", source: "Shadowfang Keep - Baron Silverlaine", armor: null, stats: ["+3 Strength", "+3 Stamina"], req: "Requires Level 18" },
      ring2: { slot: "Finger", type: "Ring", name: "Meadow Ring of the Tiger", quality: "uncommon", source: "World Drop", armor: null, stats: ["+3 Agility", "+3 Strength"], req: "Requires Level 15" },
      trinket1: { slot: "Trinket", type: "Trinket", name: "Minor Recombobulator", quality: "uncommon", source: "Gnomeregan Quest Reward", armor: null, stats: ["Use: Restores 150-250 HP and Mana"], req: "Requires Level 18" },
      trinket2: { slot: "Trinket", type: "Trinket", name: "Insignia of the Alliance", quality: "rare", source: "PvP Rank 2 Officer", armor: null, stats: ["Use: Dispels Stun, Fear, and Polymorph"], req: "Requires Level 20" },

      mainHand: { slot: "Two-Hand", type: "Two-Handed Mace", name: "Smite's Mighty Hammer", quality: "rare", source: "Mr. Smite (The Deadmines)", armor: null, stats: ["+11 Strength", "+4 Agility"], equip: "Grants +22 Feral Attack Power and +0.2% Crit! Dominates early leveling.", req: "Requires Level 18" },
      offHand: { slot: "Off-Hand", type: "None (2H Equipped)", name: "Empty (2H Mace Equipped)", quality: "disabled", source: "Shields Prohibited for Druid", armor: null, stats: ["Druids CANNOT equip shields.", "Off-hands only work with 1H Mace/Dagger."], req: "Two-Hander in Use" },
      relic: { slot: "Relic", type: "Idol", name: "Idol of Brutality", quality: "uncommon", source: "Druid Quest / Trainer", armor: null, stats: ["Equip: Reduces Rage cost of Maul and Swipe by 3."], req: "Requires Level 15" }
    }
  },

  lvl20_35: {
    id: "lvl20_35",
    title: "Level 20–35 (Cat Sprint Era)",
    subtitle: "High Agility & Gnomeregan Haste Burst",
    stats: {
      hp: "1,480",
      mp: "1,220",
      catAp: "492",
      bearArmor: "3,250 (66% Reduc)",
      crit: "18.4%",
      dodge: "15.1%",
      hit: "0%"
    },
    items: {
      head: { slot: "Head", type: "Leather", name: "Humbert's Helm", quality: "rare", source: "Hillsbrad Foothills Rare Drop", armor: "85 Armor", stats: ["+8 Agility", "+7 Strength", "+7 Stamina"], req: "Requires Level 31" },
      neck: { slot: "Neck", type: "Necklace", name: "River Pride Beacon", quality: "uncommon", source: "Duskwood Quest", armor: null, stats: ["+4 Agility", "+3 Stamina"], req: "Requires Level 25" },
      shoulders: { slot: "Shoulders", type: "Leather", name: "Forest Tracker Epaulets", quality: "uncommon", source: "Ashenvale / World Drop", armor: "76 Armor", stats: ["+7 Agility", "+6 Stamina"], req: "Requires Level 28" },
      back: { slot: "Back", type: "Cloak", name: "Tigerstrike Mantle", quality: "rare", source: "World Drop", armor: "31 Armor", stats: ["+8 Strength", "+3 Agility"], req: "Requires Level 30" },
      chest: { slot: "Chest", type: "Leather", name: "Raptor Hunter Tunic", quality: "rare", source: "Nesingwary: Raptor Mastery (STV)", armor: "115 Armor", stats: ["+8 Strength", "+15 Agility"], req: "Requires Level 33" },
      wrists: { slot: "Wrists", type: "Leather", name: "Barbaric Bracers", quality: "uncommon", source: "Leatherworking (160)", armor: "45 Armor", stats: ["+5 Strength", "+4 Agility"], req: "Requires Level 27" },
      
      hands: { slot: "Hands", type: "Leather", name: "Brawler Gloves", quality: "rare", source: "Gnomeregan - Grubbis", armor: "68 Armor", stats: ["+6 Strength", "+7 Agility"], req: "Requires Level 27" },
      waist: { slot: "Waist", type: "Leather", name: "Ogron's Sash", quality: "rare", source: "World Drop (Of the Tiger)", armor: "62 Armor", stats: ["+7 Agility", "+7 Strength"], req: "Requires Level 30" },
      legs: { slot: "Legs", type: "Leather", name: "Triprunner Dungarees", quality: "rare", source: "Gnomeregan Quest: The Great Fras Siabi", armor: "122 Armor", stats: ["+18 Agility", "+4 Strength"], equip: "Gigantic +18 Agility spike! Unequalled until level 40+.", req: "Requires Level 29" },
      feet: { slot: "Feet", type: "Leather", name: "Feet of the Lynx", quality: "rare", source: "World Drop", armor: "65 Armor", stats: ["+8 Agility", "+3 Strength"], req: "Requires Level 24" },
      ring1: { slot: "Finger", type: "Ring", name: "Charged Gear of the Tiger", quality: "rare", source: "Gnomeregan - Mekgineer Thermaplugg", armor: null, stats: ["+6 Agility", "+5 Strength"], req: "Requires Level 32" },
      ring2: { slot: "Finger", type: "Ring", name: "Seal of Wrynn", quality: "rare", source: "Stormwind: The Missing Diplomat", armor: null, stats: ["+3 Strength", "+4 Agility", "+4 Stamina", "+3 Int"], req: "Requires Level 31" },
      trinket1: { slot: "Trinket", type: "Trinket", name: "Nifty Stopwatch", quality: "rare", source: "Badlands Quest: This Is Lore", armor: null, stats: ["Use: +40% Run Speed for 10 sec"], req: "Requires Level 35" },
      trinket2: { slot: "Trinket", type: "Trinket", name: "Insignia of the Alliance", quality: "rare", source: "PvP Rank 2 Officer", armor: null, stats: ["Use: Dispels Stun, Fear, and Slows"], req: "Requires Level 20" },

      mainHand: { slot: "Two-Hand", type: "Two-Handed Mace", name: "Manual Crowd Pumper", quality: "rare", source: "Crowd Pumper 9-60 (Gnomeregan)", armor: null, stats: ["+16 Strength", "+5 Agility"], equip: "Use: Increases your attack speed by 50% for 30 sec! Turns Cat Form into a chainsaw on bosses.", req: "Requires Level 29" },
      offHand: { slot: "Off-Hand", type: "Held in Off-hand", name: "Furbolg Medicine Pouch (Alt)", quality: "rare", source: "Timbermaw Friendly / Rare", armor: null, stats: ["+10 Stamina", "Use: Plants a ward that heals 100 HP every 3 sec."], req: "Requires Level 30 (Use with 1H Mace)" },
      relic: { slot: "Relic", type: "Idol", name: "Idol of Ferocity", quality: "rare", source: "Mid-Game Quest / Stratholme Drop", armor: null, stats: ["Equip: Reduces the Energy cost of Claw and Rake by 3."], req: "Requires Level 28" }
    }
  },

  lvl35_50: {
    id: "lvl35_50",
    title: "Level 35–50 (Dire Bear & Mount Era)",
    subtitle: "Powershifting Energy & Raid Tank Prep",
    stats: {
      hp: "2,740",
      mp: "1,890",
      catAp: "795",
      bearArmor: "6,980 (71% Reduc)",
      crit: "23.1%",
      dodge: "18.8%",
      hit: "2.0%"
    },
    items: {
      head: { slot: "Head", type: "Leather", name: "Wolfshead Helm", quality: "rare", source: "Leatherworking (Skill 225)", armor: "109 Armor", stats: ["+10 Spirit"], equip: "When shifting into Cat Form, gain 20 Energy. In Bear, gain 5 Rage! Absolute core of Feral DPS.", req: "Requires Level 40" },
      neck: { slot: "Neck", type: "Necklace", name: "Scraggle's Bone Amulet", quality: "rare", source: "Tanaris Quest Reward", armor: null, stats: ["+7 Strength", "+6 Agility", "+6 Stamina"], req: "Requires Level 44" },
      shoulders: { slot: "Shoulders", type: "Leather", name: "Big Voodoo Shoulders", quality: "uncommon", source: "Zul'Farrak Drop / LW", armor: "95 Armor", stats: ["+11 Agility", "+8 Stamina"], req: "Requires Level 44" },
      back: { slot: "Back", type: "Cloak", name: "Dark Phantom Cape", quality: "rare", source: "World Drop", armor: "38 Armor", stats: ["+15 Agility"], req: "Requires Level 47" },
      chest: { slot: "Chest", type: "Leather", name: "Nightscape Tunic", quality: "uncommon", source: "Leatherworking (Skill 185)", armor: "128 Armor", stats: ["+10 Agility", "+11 Stamina"], req: "Requires Level 36" },
      wrists: { slot: "Wrists", type: "Leather", name: "Blackmist Armsplints", quality: "rare", source: "Maraudon - Princess Theradras", armor: "55 Armor", stats: ["+5 Strength", "+13 Agility"], req: "Requires Level 49" },
      
      hands: { slot: "Hands", type: "Leather", name: "Nightscape Boots & Gloves", quality: "uncommon", source: "Leatherworking (Skill 205)", armor: "80 Armor", stats: ["+9 Agility", "+9 Stamina"], req: "Requires Level 40" },
      waist: { slot: "Waist", type: "Leather", name: "Girdle of the Beast", quality: "rare", source: "World Drop", armor: "78 Armor", stats: ["+12 Strength", "+12 Agility"], req: "Requires Level 42" },
      legs: { slot: "Legs", type: "Leather", name: "Nightscape Pants", quality: "uncommon", source: "Leatherworking (Skill 195)", armor: "115 Armor", stats: ["+14 Agility", "+13 Stamina"], req: "Requires Level 38" },
      feet: { slot: "Feet", type: "Leather", name: "Albino Crocscale Boots", quality: "rare", source: "Zul'Farrak - Gahz'rilla", armor: "98 Armor", stats: ["+15 Agility", "+5 Stamina"], req: "Requires Level 46" },
      ring1: { slot: "Finger", type: "Ring", name: "Blackstone Ring", quality: "rare", source: "Maraudon - Princess Theradras", armor: null, stats: ["+6 Strength", "+1% Hit Chance"], equip: "Equip: Improves your chance to hit by 1%. Uncontested leveling BiS!", req: "Requires Level 49" },
      ring2: { slot: "Finger", type: "Ring", name: "Marsh Ring of the Tiger", quality: "rare", source: "World Drop", armor: null, stats: ["+8 Strength", "+8 Agility"], req: "Requires Level 45" },
      trinket1: { slot: "Trinket", type: "Trinket", name: "Rune of the Guard Captain", quality: "rare", source: "Hinterlands Quest: Job Opening: Guard Captain", armor: null, stats: ["+20 Attack Power", "+1% Hit Chance"], req: "Requires Level 45" },
      trinket2: { slot: "Trinket", type: "Trinket", name: "Mark of the Chosen", quality: "rare", source: "Maraudon Quest: The Pariah's Instructions", armor: null, stats: ["Equip: 2% chance when struck in combat to gain +25 to all Attributes for 1 min."], req: "Requires Level 46" },

      mainHand: { slot: "Two-Hand", type: "Two-Handed Staff", name: "Warden Staff", quality: "epic", source: "World Drop (Level 43)", armor: "260 Armor", stats: ["+10 Defense", "+11 Stamina"], equip: "Dire Bear multiplies this +260 Armor by 360% to yield over +936 effective armor! Undisputed best tanking weapon.", req: "Requires Level 43" },
      offHand: { slot: "Off-Hand", type: "None (2H Equipped)", name: "Empty (Two-Hand Staff Equipped)", quality: "disabled", source: "Shields Prohibited for Druid", armor: null, stats: ["Druids CANNOT equip shields.", "Off-hand slots are empty when wielding staves/2H maces."], req: "Two-Hander in Use" },
      relic: { slot: "Relic", type: "Idol", name: "Idol of Ferocity", quality: "rare", source: "Mid-Game Feral Quest", armor: null, stats: ["Equip: Reduces the Energy cost of Claw and Rake by 3."], req: "Requires Level 28" }
    }
  },

  lvl60_bis: {
    id: "lvl60_bis",
    title: "Level 60 Pre-Raid BiS (God Tier)",
    subtitle: "Hit Capped Raid Ready Cat & Bear Juggernaut",
    stats: {
      hp: "4,050",
      mp: "2,550",
      catAp: "1,220",
      bearArmor: "10,850 (74% Reduc)",
      crit: "32.4%",
      dodge: "24.5%",
      hit: "9.0% (Hit Capped)"
    },
    items: {
      head: { slot: "Head", type: "Leather", name: "Wolfshead Helm", quality: "rare", source: "Leatherworking (Skill 225)", armor: "109 Armor", stats: ["+10 Spirit"], equip: "When shifting into Cat Form, gain 20 Energy. Kept throughout Molten Core and BWL!", req: "Requires Level 40" },
      neck: { slot: "Neck", type: "Necklace", name: "Mark of Fordring", quality: "rare", source: "EPL Quest: In Dreams", armor: null, stats: ["+26 Attack Power", "+1% Critical Strike"], req: "Requires Level 58" },
      shoulders: { slot: "Shoulders", type: "Leather", name: "Truestrike Shoulders", quality: "rare", source: "Upper Blackrock Spire - Pyroguard Emberseer", armor: "129 Armor", stats: ["+24 Attack Power", "+2% Hit Chance"], equip: "Massive 2% Hit rating for raid cap.", req: "Requires Level 56" },
      back: { slot: "Back", type: "Cloak", name: "Cape of the Black Baron", quality: "rare", source: "Stratholme - Baron Rivendare", armor: "45 Armor", stats: ["+15 Agility", "+20 Attack Power"], req: "Requires Level 58" },
      chest: { slot: "Chest", type: "Leather", name: "Cadaverous Armor", quality: "rare", source: "Scholomance Mini-Bosses", armor: "172 Armor", stats: ["+8 Strength", "+8 Agility"], equip: "+60 Attack Power in forms!", req: "Requires Level 56" },
      wrists: { slot: "Wrists", type: "Leather", name: "Bracers of the Eclipse", quality: "rare", source: "Dire Maul West - Prince Tortheldrin", armor: "76 Armor", stats: ["+10 Strength", "+19 Agility"], req: "Requires Level 57" },
      
      hands: { slot: "Hands", type: "Leather", name: "Devilsaur Gauntlets", quality: "rare", source: "Leatherworking (Skill 300)", armor: "103 Armor", stats: ["+9 Stamina", "+28 Attack Power", "+1% Critical Strike"], equip: "Devilsaur 2-Set Bonus: Improves your chance to hit by 2%!", req: "Requires Level 53" },
      waist: { slot: "Waist", type: "Leather", name: "Cloudrunner Girdle", quality: "rare", source: "Lower Blackrock Spire - Quartermaster Zigris", armor: "98 Armor", stats: ["+14 Strength", "+15 Agility"], req: "Requires Level 55" },
      legs: { slot: "Legs", type: "Leather", name: "Devilsaur Leggings", quality: "rare", source: "Leatherworking (Skill 300)", armor: "148 Armor", stats: ["+12 Stamina", "+46 Attack Power", "+1% Critical Strike"], equip: "Devilsaur 2-Set Bonus: Improves your chance to hit by 2%!", req: "Requires Level 55" },
      feet: { slot: "Feet", type: "Leather", name: "Swiftwalker Boots", quality: "rare", source: "Blackrock Depths - High Interrogator Gerstahn", armor: "115 Armor", stats: ["+4 Strength", "+21 Agility", "+7 Stamina"], req: "Requires Level 52" },
      ring1: { slot: "Finger", type: "Ring", name: "Blackstone Ring", quality: "rare", source: "Maraudon - Princess Theradras", armor: null, stats: ["+6 Strength", "+1% Hit Chance"], req: "Requires Level 49" },
      ring2: { slot: "Finger", type: "Ring", name: "Tarnished Elven Ring", quality: "rare", source: "Dire Maul North Tribute Run", armor: null, stats: ["+15 Agility", "+1% Hit Chance"], req: "Requires Level 56" },
      trinket1: { slot: "Trinket", type: "Trinket", name: "Blackhand's Breadth", quality: "rare", source: "Quest: General Drakkisath's Demise", armor: null, stats: ["Equip: Increases your chance to land a critical strike by 2%."], req: "Requires Level 58" },
      trinket2: { slot: "Trinket", type: "Trinket", name: "Hand of Justice", quality: "rare", source: "Blackrock Depths - Emperor Thaurissan", armor: null, stats: ["+20 Attack Power", "Equip: 2% chance on hit to gain 1 extra attack."], req: "Requires Level 53" },

      mainHand: { slot: "Two-Hand", type: "Two-Handed Mace", name: "Bonecrusher / Warden Staff", quality: "epic", source: "Dire Maul / World Drop", armor: "260 Armor (Warden)", stats: ["+30 Strength (Bonecrusher)", "+11 Stamina, +10 Def (Warden)"], equip: "Bonecrusher provides +60 Cat AP; Warden Staff grants massive Bear Armor.", req: "Requires Level 58" },
      offHand: { slot: "Off-Hand", type: "None (2H Equipped)", name: "Empty (2-Handed Mace Equipped)", quality: "disabled", source: "Shields Prohibited for Druid", armor: null, stats: ["Druids CANNOT equip shields.", "Bear Form +360% armor bonus makes shields unnecessary!"], req: "Two-Hander in Use" },
      relic: { slot: "Relic", type: "Idol", name: "Idol of Ferocity", quality: "rare", source: "Stratholme - Magistrate Barthilas", armor: null, stats: ["Equip: Reduces the Energy cost of Claw and Rake by 3."], req: "Requires Level 55" }
    }
  }
};

let currentPresetKey = "chongo_live";

function initMaxrollPaperdoll() {
  const presetButtons = document.querySelectorAll(".btn-preset");
  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      presetButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-preset");
      if (key && MAXROLL_GEAR_PRESETS[key]) {
        currentPresetKey = key;
        renderPaperdoll(currentPresetKey);
      }
    });
  });

  renderPaperdoll(currentPresetKey);
  initTooltipEvents();
}

function renderPaperdoll(presetKey) {
  const data = MAXROLL_GEAR_PRESETS[presetKey];
  if (!data) return;

  // Header Title
  const titleEl = document.getElementById("mockupPresetTitle");
  const subEl = document.getElementById("mockupPresetSub");
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;

  // Stats Sheet
  const s = data.stats;
  setElementText("statHp", s.hp);
  setElementText("statMp", s.mp);
  setElementText("statCatAp", s.catAp);
  setElementText("statBearArmor", s.bearArmor);
  setElementText("statCrit", s.crit);
  setElementText("statDodge", s.dodge);
  setElementText("statHit", s.hit);

  // Left Column Slots
  renderSlot("slotHead", data.items.head);
  renderSlot("slotNeck", data.items.neck);
  renderSlot("slotShoulders", data.items.shoulders);
  renderSlot("slotBack", data.items.back);
  renderSlot("slotChest", data.items.chest);
  renderSlot("slotWrists", data.items.wrists);

  // Right Column Slots
  renderSlot("slotHands", data.items.hands);
  renderSlot("slotWaist", data.items.waist);
  renderSlot("slotLegs", data.items.legs);
  renderSlot("slotFeet", data.items.feet);
  renderSlot("slotRing1", data.items.ring1);
  renderSlot("slotRing2", data.items.ring2);
  renderSlot("slotTrinket1", data.items.trinket1);
  renderSlot("slotTrinket2", data.items.trinket2);

  // Bottom Weapons Row
  renderSlot("slotMainHand", data.items.mainHand, true);
  renderSlot("slotOffHand", data.items.offHand, true);
  renderSlot("slotRelic", data.items.relic, true);
}

function renderSlot(elementId, itemData, isWeaponRow = false) {
  const el = document.getElementById(elementId);
  if (!el || !itemData) return;

  // Store data on the element for tooltip
  el.dataset.itemJson = JSON.stringify(itemData);

  const iconBox = el.querySelector(".slot-icon-box");
  const nameEl = el.querySelector(".slot-item-name");
  const sourceEl = el.querySelector(".slot-source-text");
  const badgeEl = el.querySelector(".weapon-slot-badge");

  if (iconBox) {
    iconBox.className = `slot-icon-box rarity-${itemData.quality}`;
    iconBox.textContent = getSlotEmoji(itemData.slot);
  }

  if (nameEl) {
    nameEl.textContent = itemData.name;
    nameEl.className = `slot-item-name ${itemData.quality}`;
  }

  if (sourceEl) {
    sourceEl.textContent = itemData.source;
  }

  if (badgeEl && isWeaponRow) {
    if (itemData.slot === "Two-Hand") {
      badgeEl.className = "weapon-slot-badge badge-2h";
      badgeEl.textContent = "Two-Handed (Recommended)";
    } else if (itemData.slot === "Off-Hand") {
      if (itemData.quality === "disabled") {
        badgeEl.className = "weapon-slot-badge badge-no-shield";
        badgeEl.textContent = "Shields Prohibited (2H Active)";
      } else {
        badgeEl.className = "weapon-slot-badge badge-offhand";
        badgeEl.textContent = "Held in Off-hand";
      }
    } else if (itemData.slot === "Relic") {
      badgeEl.className = "weapon-slot-badge badge-relic";
      badgeEl.textContent = "Relic / Idol";
    }
  }
}

function getSlotEmoji(slot) {
  switch (slot) {
    case "Head": return "👑";
    case "Neck": return "📿";
    case "Shoulders": return "🛡️";
    case "Back": return "🧣";
    case "Chest": return "🥋";
    case "Wrists": return "⛓️";
    case "Hands": return "🧤";
    case "Waist": return "🎗️";
    case "Legs": return "👖";
    case "Feet": return "🥾";
    case "Finger": return "💍";
    case "Trinket": return "🔮";
    case "Two-Hand": return "🔨";
    case "Off-Hand": return "🚫";
    case "Relic": return "🗿";
    default: return "📦";
  }
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
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
    slotEl.addEventListener("mouseenter", (e) => {
      showItemTooltip(slotEl, e);
    });

    slotEl.addEventListener("mousemove", (e) => {
      positionTooltip(e);
    });

    slotEl.addEventListener("mouseleave", () => {
      hideItemTooltip();
    });
  });
}

function showItemTooltip(slotEl, e) {
  if (!slotEl.dataset.itemJson) return;
  const item = JSON.parse(slotEl.dataset.itemJson);

  let html = `
    <div class="tt-name ${item.quality}">${item.name}</div>
    <div class="tt-bind">Binds when picked up</div>
    <div class="tt-slot-row">
      <span>${item.slot}</span>
      <span>${item.type || ""}</span>
    </div>
  `;

  if (item.armor) {
    html += `<div class="tt-armor">${item.armor}</div>`;
  }

  if (item.stats && item.stats.length > 0) {
    item.stats.forEach(st => {
      html += `<div class="tt-stat">${st}</div>`;
    });
  }

  if (item.equip) {
    html += `<div class="tt-equip">${item.equip}</div>`;
  }

  if (item.req) {
    html += `<div class="tt-req">${item.req}</div>`;
  }

  if (item.source) {
    html += `<div class="tt-source">Source: ${item.source}</div>`;
  }

  tooltipEl.innerHTML = html;
  tooltipEl.style.display = "block";
  positionTooltip(e);
}

function positionTooltip(e) {
  if (!tooltipEl) return;
  const tooltipWidth = 330;
  const tooltipHeight = tooltipEl.offsetHeight || 200;

  let left = e.clientX + 16;
  let top = e.clientY + 16;

  if (left + tooltipWidth > window.innerWidth) {
    left = e.clientX - tooltipWidth - 16;
  }

  if (top + tooltipHeight > window.innerHeight) {
    top = window.innerHeight - tooltipHeight - 16;
  }

  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
}

function hideItemTooltip() {
  if (tooltipEl) tooltipEl.style.display = "none";
}


/* ==========================================================================
   OPTIMAL NON-DUNGEON GEAR & AUCTION HOUSE / LW RECOMMENDATIONS (1-60)
   ========================================================================== */
const NON_DUNGEON_GEAR_DATA = {
  "1": {
    "armorPrimary": {
      "name": "Handcrafted Leather Boots",
      "slot": "Feet",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+12 Armor",
      "tip": "Super cheap on AH or craft at LW 1."
    },
    "armorAlt": {
      "name": "Worn Leather Pants",
      "slot": "Legs",
      "quality": "common",
      "source": "Vendor / Quest",
      "stats": "+14 Armor",
      "tip": "Standard starting piece."
    },
    "weaponPrimary": {
      "name": "Acolyte's Staff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Starting Gear",
      "stats": "4.5 DPS",
      "tip": "Basic melee swing tool."
    },
    "weaponAlt": {
      "name": "Walking Stick",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Town Weapon Vendor",
      "stats": "5.1 DPS",
      "tip": "Available for copper at weapon vendor."
    }
  },
  "2": {
    "armorPrimary": {
      "name": "Handcrafted Leather Vest",
      "slot": "Chest",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+22 Armor",
      "tip": "First crafted chest."
    },
    "armorAlt": {
      "name": "Light Leather Bracers",
      "slot": "Wrists",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+10 Armor",
      "tip": "Fills empty wrist slot."
    },
    "weaponPrimary": {
      "name": "Walking Stick",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Weaponsmith Vendor",
      "stats": "5.1 DPS",
      "tip": "Solid vendor staff."
    },
    "weaponAlt": {
      "name": "Club",
      "type": "One-Hand Mace",
      "quality": "common",
      "source": "Starting Gear",
      "stats": "3.8 DPS",
      "tip": "1H mace alternative."
    }
  },
  "3": {
    "armorPrimary": {
      "name": "Handcrafted Leather Pants",
      "slot": "Legs",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+26 Armor",
      "tip": "Crafted at LW 20."
    },
    "armorAlt": {
      "name": "Rugged Leather Belt",
      "slot": "Waist",
      "quality": "common",
      "source": "Vendor / AH",
      "stats": "+12 Armor",
      "tip": "Fills waist slot."
    },
    "weaponPrimary": {
      "name": "Heavy Spiked Club",
      "type": "Two-Hand Staff / Mace",
      "quality": "common",
      "source": "Weapon Vendor",
      "stats": "5.8 DPS",
      "tip": "Early vendor weapon."
    },
    "weaponAlt": {
      "name": "Acolyte's Staff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Starting Gear",
      "stats": "4.5 DPS",
      "tip": "Fine for early Wrath pulls."
    }
  },
  "4": {
    "armorPrimary": {
      "name": "Embossed Leather Gloves",
      "slot": "Hands",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+24 Armor",
      "tip": "Crafted at LW 35."
    },
    "armorAlt": {
      "name": "Handcrafted Leather Boots",
      "slot": "Feet",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+16 Armor",
      "tip": "Easy to craft or buy."
    },
    "weaponPrimary": {
      "name": "Gnarled Staff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Weapon Vendor / AH",
      "stats": "6.4 DPS",
      "tip": "Higher melee DPS."
    },
    "weaponAlt": {
      "name": "Wooden Mallet",
      "type": "Two-Hand Mace",
      "quality": "common",
      "source": "Weapon Vendor",
      "stats": "6.0 DPS",
      "tip": "Available from macesmith."
    }
  },
  "5": {
    "armorPrimary": {
      "name": "Handcrafted Leather Vest of the Boar",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Strength, +1 Spirit",
      "tip": "First green stat piece."
    },
    "armorAlt": {
      "name": "Embossed Leather Boots",
      "slot": "Feet",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+22 Armor",
      "tip": "LW 40 craft."
    },
    "weaponPrimary": {
      "name": "Large Club of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Strength, +1 Stamina",
      "tip": "Great early stat stick."
    },
    "weaponAlt": {
      "name": "Gnarled Staff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Weapon Vendor",
      "stats": "7.1 DPS",
      "tip": "Vendor fallback."
    }
  },
  "6": {
    "armorPrimary": {
      "name": "Rugged Leather Pants of the Monkey",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Agility, +1 Stamina",
      "tip": "Great early agility."
    },
    "armorAlt": {
      "name": "Embossed Leather Vest",
      "slot": "Chest",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+36 Armor",
      "tip": "Solid physical armor."
    },
    "weaponPrimary": {
      "name": "Quarterstaff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Stormwind / Darnassus Vendor",
      "stats": "7.8 DPS",
      "tip": "Bought for 1 silver."
    },
    "weaponAlt": {
      "name": "Large Club of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Strength, +1 Agility",
      "tip": "High damage scaling."
    }
  },
  "7": {
    "armorPrimary": {
      "name": "Embossed Leather Cloak",
      "slot": "Back",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+14 Armor",
      "tip": "Fills cloak slot."
    },
    "armorAlt": {
      "name": "Handcrafted Leather Boots of the Tiger",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Agi, +1 Str",
      "tip": "Double offensive stats."
    },
    "weaponPrimary": {
      "name": "Wooden Mallet of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+1 Strength, +2 Stamina",
      "tip": "Good health boost."
    },
    "weaponAlt": {
      "name": "Quarterstaff",
      "type": "Two-Hand Staff",
      "quality": "common",
      "source": "Weapon Vendor",
      "stats": "8.2 DPS",
      "tip": "Vendor fallback."
    }
  },
  "8": {
    "armorPrimary": {
      "name": "Brawler's Harness of the Tiger",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +1 Agility",
      "tip": "Noticeable melee punch."
    },
    "armorAlt": {
      "name": "Embossed Leather Pants",
      "slot": "Legs",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+42 Armor",
      "tip": "High armor value."
    },
    "weaponPrimary": {
      "name": "Large Club of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +1 Agility",
      "tip": "Top level 8 weapon."
    },
    "weaponAlt": {
      "name": "Quarterstaff of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Stamina",
      "tip": "High survivability."
    }
  },
  "9": {
    "armorPrimary": {
      "name": "Fine Leather Boots of the Tiger",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Agility, +1 Strength",
      "tip": "Stacking early agility."
    },
    "armorAlt": {
      "name": "Fine Leather Cloak",
      "slot": "Back",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+18 Armor",
      "tip": "Cheap cloak craft."
    },
    "weaponPrimary": {
      "name": "Gnarled Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +2 Agility",
      "tip": "+6 total Attack Power!"
    },
    "weaponAlt": {
      "name": "Staff of the Windcaller",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Zephras Isle Quest",
      "stats": "+3 Spirit, +2 Stamina",
      "tip": "Free quest reward."
    }
  },
  "10": {
    "armorPrimary": {
      "name": "Embossed Leather Vest",
      "slot": "Chest",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+62 Armor, +3 Stamina",
      "tip": "Massive armor jump for Bear Form!"
    },
    "armorAlt": {
      "name": "Rugged Leather Pants of the Bear",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +2 Stamina",
      "tip": "Great tanking stats."
    },
    "weaponPrimary": {
      "name": "Heavy Spiked Mace",
      "type": "Two-Hand Mace",
      "quality": "common",
      "source": "Stormwind / Ironforge Vendor",
      "stats": "10.5 DPS, High Base Damage",
      "tip": "Purchase from town weaponsmith for 2 silver."
    },
    "weaponAlt": {
      "name": "Oak Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +2 Agility",
      "tip": "AH alternative."
    }
  },
  "11": {
    "armorPrimary": {
      "name": "Embossed Leather Boots",
      "slot": "Feet",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+44 Armor",
      "tip": "Crafted at LW 55."
    },
    "armorAlt": {
      "name": "Light Leather Bracers of the Bear",
      "slot": "Wrists",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Stamina",
      "tip": "Cheap wrist upgrade."
    },
    "weaponPrimary": {
      "name": "Wooden Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +2 Agility",
      "tip": "Scales Maul and auto-attacks."
    },
    "weaponAlt": {
      "name": "Quarterstaff of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Stamina",
      "tip": "Health pool booster."
    }
  },
  "12": {
    "armorPrimary": {
      "name": "Fine Leather Tunic",
      "slot": "Chest",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+72 Armor, +3 Agility",
      "tip": "Crafted at LW 75."
    },
    "armorAlt": {
      "name": "Embossed Leather Pants of the Bear",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Strength, +2 Stamina",
      "tip": "Heavy tanking stats."
    },
    "weaponPrimary": {
      "name": "Heavy Spiked Mace",
      "type": "Two-Hand Mace",
      "quality": "common",
      "source": "Weaponsmith Vendor",
      "stats": "12.2 DPS",
      "tip": "Rock solid vendor weapon."
    },
    "weaponAlt": {
      "name": "Ashwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Strength, +2 Agility",
      "tip": "+8 Attack Power!"
    }
  },
  "13": {
    "armorPrimary": {
      "name": "Fine Leather Boots",
      "slot": "Feet",
      "quality": "common",
      "source": "Leatherworking / AH",
      "stats": "+50 Armor, +3 Agility",
      "tip": "Crafted at LW 85."
    },
    "armorAlt": {
      "name": "Serpent Gloves of the Tiger",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Strength, +2 Agility",
      "tip": "AH green gloves."
    },
    "weaponPrimary": {
      "name": "Ashwood Staff of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Strength, +3 Stamina",
      "tip": "Perfect balance of damage and HP."
    },
    "weaponAlt": {
      "name": "Large Club of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Strength, +2 Agility",
      "tip": "Pure offensive pick."
    }
  },
  "14": {
    "armorPrimary": {
      "name": "Hillman's Leather Vest",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+82 Armor, +4 Str, +4 Stam",
      "tip": "Crafted at LW 100. Huge stats!"
    },
    "armorAlt": {
      "name": "Fine Leather Cloak of the Monkey",
      "slot": "Back",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+2 Agility, +2 Stamina",
      "tip": "Dodge and health."
    },
    "weaponPrimary": {
      "name": "Oaken Philosophy",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+4 Spirit, +3 Stamina",
      "tip": "Great out-of-combat regen."
    },
    "weaponAlt": {
      "name": "Ashwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+3 Strength, +3 Agility",
      "tip": "+9 Feral AP."
    }
  },
  "15": {
    "armorPrimary": {
      "name": "Hillman's Belt",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+56 Armor, +4 Agi, +4 Str",
      "tip": "Crafted at LW 120. +12 Attack Power!"
    },
    "armorAlt": {
      "name": "Burning Leather Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+4 Strength, +3 Stamina",
      "tip": "Great armor and damage."
    },
    "weaponPrimary": {
      "name": "Elm Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+4 Strength, +4 Agility",
      "tip": "+12 total Feral AP!"
    },
    "weaponAlt": {
      "name": "Cudgel of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Stamina, +3 Strength",
      "tip": "Massive health for Bear."
    }
  },
  "16": {
    "armorPrimary": {
      "name": "Hillman's Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+64 Armor, +4 Agi, +4 Str",
      "tip": "Fills shoulder slot early!"
    },
    "armorAlt": {
      "name": "Wolfclaw Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+4 Agility, +3 Strength",
      "tip": "Strong melee gloves."
    },
    "weaponPrimary": {
      "name": "Sturdy Quarterstaff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+4 Strength, +4 Agility",
      "tip": "Excellent physical DPS."
    },
    "weaponAlt": {
      "name": "Heavy War Mace of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Stamina, +4 Strength",
      "tip": "High survivability."
    }
  },
  "17": {
    "armorPrimary": {
      "name": "Deviate Scale Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+58 Armor, +4 Agility",
      "tip": "Crafted at LW 105."
    },
    "armorAlt": {
      "name": "Hillman's Leather Boots",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+52 Armor, +3 Str, +3 Stam",
      "tip": "Great all-around boots."
    },
    "weaponPrimary": {
      "name": "Heavy War Mace of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Strength, +4 Agility",
      "tip": "+14 Feral AP."
    },
    "weaponAlt": {
      "name": "Staff of Westfall",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "People's Militia Quest",
      "stats": "+5 Spirit, +4 Intellect",
      "tip": "Solo quest reward in Westfall."
    }
  },
  "18": {
    "armorPrimary": {
      "name": "Deviate Scale Belt",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+49 Armor, +5 Agi, +6 Stam, +5 Spirit",
      "tip": "Amazing leveling belt. BiS until level 30!"
    },
    "armorAlt": {
      "name": "Bandit Jerkin of the Tiger",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Agility, +4 Strength",
      "tip": "+13 Attack Power."
    },
    "weaponPrimary": {
      "name": "Dense Club of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Strength, +5 Agility",
      "tip": "Super high stat stick."
    },
    "weaponAlt": {
      "name": "Glacial Stone",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Stamina, +4 Spirit",
      "tip": "Defense and healing stats."
    }
  },
  "19": {
    "armorPrimary": {
      "name": "Feet of the Lynx",
      "slot": "Feet",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+8 Agility, +3 Strength",
      "tip": "THE iconic twink boots! Huge +11 AP and crit."
    },
    "armorAlt": {
      "name": "Blackened Defias Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Agility, +4 Stamina",
      "tip": "Clean agility pants."
    },
    "weaponPrimary": {
      "name": "Staff of the Blessed Seer",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+4 Strength, +4 Agi, +4 Stam, +4 Spirit",
      "tip": "All-stats powerhouse staff."
    },
    "weaponAlt": {
      "name": "Heavy Spiked Flail of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Strength, +5 Agility",
      "tip": "Budget AH option."
    }
  },
  "20": {
    "armorPrimary": {
      "name": "Deviate Scale Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+78 Armor, +7 Agi, +7 Stam",
      "tip": "Crafted at LW 125. Massive for Cat Form!"
    },
    "armorAlt": {
      "name": "Toughened Leather Armor",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+98 Armor, +5 Str, +5 Stam",
      "tip": "High bear mitigation."
    },
    "weaponPrimary": {
      "name": "Staff of the Friar",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+4 Strength, +5 Agi, +5 Stam",
      "tip": "Incredible Cat Form scaling."
    },
    "weaponAlt": {
      "name": "Solid Iron Maul of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Strength, +5 Agility",
      "tip": "+17 Feral AP."
    }
  },
  "21": {
    "armorPrimary": {
      "name": "Toughened Leather Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+62 Armor, +5 Str, +4 Agi",
      "tip": "LW 135 craft."
    },
    "armorAlt": {
      "name": "Bandit Boots of the Tiger",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Agility, +4 Strength",
      "tip": "Affordable AH upgrade."
    },
    "weaponPrimary": {
      "name": "Hardened Iron Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Strength, +5 Agility",
      "tip": "Massive claw and maul boost."
    },
    "weaponAlt": {
      "name": "Heavy Iron Mace of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Stamina, +4 Strength",
      "tip": "Tanking backup."
    }
  },
  "22": {
    "armorPrimary": {
      "name": "Barbaric Harness",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+108 Armor, +8 Str, +8 Stam",
      "tip": "Crafted at LW 145. King of early bear armor!"
    },
    "armorAlt": {
      "name": "Bandit Cinch of the Tiger",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Agility, +5 Strength",
      "tip": "Strong budget belt."
    },
    "weaponPrimary": {
      "name": "Skullcrusher of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Strength, +6 Agility",
      "tip": "+20 total Feral AP!"
    },
    "weaponAlt": {
      "name": "Totem of the West Wind",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Agility, +4 Stamina",
      "tip": "High crit staff."
    }
  },
  "23": {
    "armorPrimary": {
      "name": "Barbaric Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+78 Armor, +5 Str, +5 Agi",
      "tip": "Crafted at LW 150."
    },
    "armorAlt": {
      "name": "Bandit Pants of the Tiger",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Agility, +5 Strength",
      "tip": "Good AH pants."
    },
    "weaponPrimary": {
      "name": "Cedar Walking Stick of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+6 Strength, +6 Agility",
      "tip": "Balanced hybrid staff."
    },
    "weaponAlt": {
      "name": "Flanged Mace of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Stamina, +5 Strength",
      "tip": "Solid tank mace."
    }
  },
  "24": {
    "armorPrimary": {
      "name": "Barbaric Belt",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+68 Armor, +6 Str, +5 Agi",
      "tip": "Crafted at LW 155."
    },
    "armorAlt": {
      "name": "Superior Leather Pants of the Tiger",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Agility, +6 Strength",
      "tip": "Great budget green."
    },
    "weaponPrimary": {
      "name": "Bronze-Headed Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Strength, +7 Agility",
      "tip": "+21 Feral AP!"
    },
    "weaponAlt": {
      "name": "Ogre-Beater of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+8 Stamina, +5 Strength",
      "tip": "High health pool."
    }
  },
  "25": {
    "armorPrimary": {
      "name": "Barbaric Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+98 Armor, +7 Str, +7 Agi",
      "tip": "Crafted at LW 160. +21 Attack Power!"
    },
    "armorAlt": {
      "name": "Spidersilk Boots",
      "slot": "Feet",
      "quality": "rare",
      "source": "Tailoring / AH",
      "stats": "+4 Stamina, +7 Spirit",
      "tip": "Crafted alternative with high regen."
    },
    "weaponPrimary": {
      "name": "Heavy Bronze Club of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+8 Strength, +7 Agility",
      "tip": "+23 Feral AP."
    },
    "weaponAlt": {
      "name": "Relic Hunter Staff",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Wetlands Quest: Excavation",
      "stats": "+7 Spirit, +5 Stamina",
      "tip": "Free solo quest weapon."
    }
  },
  "26": {
    "armorPrimary": {
      "name": "Panther Hunter Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Nesingwary STV Quest",
      "stats": "+8 Agility, +6 Strength",
      "tip": "Easy solo hunting quest in STV."
    },
    "armorAlt": {
      "name": "Robust Bracers of the Tiger",
      "slot": "Wrists",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Agility, +4 Strength",
      "tip": "AH wrist piece."
    },
    "weaponPrimary": {
      "name": "Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+8 Strength, +8 Agility",
      "tip": "+24 Feral AP."
    },
    "weaponAlt": {
      "name": "Heavy War Mace of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+8 Strength, +7 Agility",
      "tip": "AH mace alternative."
    }
  },
  "27": {
    "armorPrimary": {
      "name": "Barbaric Bracers",
      "slot": "Wrists",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+52 Armor, +5 Str, +4 Agi",
      "tip": "Crafted at LW 165."
    },
    "armorAlt": {
      "name": "Wolfclaw Leggings of the Tiger",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Agility, +7 Strength",
      "tip": "AH green pants."
    },
    "weaponPrimary": {
      "name": "Warsong Staff",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "PvP Vendor / AH",
      "stats": "+8 Strength, +8 Stamina",
      "tip": "Warsong Outrider weapon."
    },
    "weaponAlt": {
      "name": "Heavy Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+8 Strength, +8 Agility",
      "tip": "Heavy hitting 2H mace."
    }
  },
  "28": {
    "armorPrimary": {
      "name": "Nightscape Boots",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+74 Armor, +7 Agi, +7 Stam",
      "tip": "Crafted at LW 175."
    },
    "armorAlt": {
      "name": "Raptor Hunter Tunic (Prep)",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Nesingwary STV Quest",
      "stats": "+8 Str, +10 Agi",
      "tip": "STV hunting chain."
    },
    "weaponPrimary": {
      "name": "Battleworn Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+9 Strength, +8 Agility",
      "tip": "+26 Feral AP!"
    },
    "weaponAlt": {
      "name": "Staff of Hale Magefire",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+11 Intellect, +6 Stamina",
      "tip": "Great hybrid/healer staff."
    }
  },
  "29": {
    "armorPrimary": {
      "name": "Panther Armor",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Nesingwary STV Quest",
      "stats": "+10 Agility, +6 Strength",
      "tip": "Reward from Panther Chapter 2."
    },
    "armorAlt": {
      "name": "Insignia Cloak of the Tiger",
      "slot": "Back",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+5 Agility, +5 Strength",
      "tip": "Clean offensive cloak."
    },
    "weaponPrimary": {
      "name": "Iron-Headed Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+9 Strength, +9 Agility",
      "tip": "+27 Feral AP."
    },
    "weaponAlt": {
      "name": "Skullsplitter",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+10 Strength, +5 Stamina",
      "tip": "Hard hitting 2H mace."
    }
  },
  "30": {
    "armorPrimary": {
      "name": "Tigerstrike Mantle",
      "slot": "Back",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+31 Armor, +8 Str, +3 Agi",
      "tip": "Rare BOE cloak. +19 Attack Power!"
    },
    "armorAlt": {
      "name": "Nightscape Tunic",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+115 Armor, +8 Agi, +9 Stam",
      "tip": "Crafted at LW 185."
    },
    "weaponPrimary": {
      "name": "Tok'kar's Murloc Basher",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Swamp of Sorrows Quest",
      "stats": "+10 Strength, +9 Stamina",
      "tip": "High damage solo quest mace."
    },
    "weaponAlt": {
      "name": "Beater of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+10 Strength, +9 Agility",
      "tip": "+29 Feral AP."
    }
  },
  "31": {
    "armorPrimary": {
      "name": "Humbert's Helm",
      "slot": "Head",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+85 Armor, +8 Agi, +7 Str, +7 Stam",
      "tip": "Iconic rare helm. Huge stat boost!"
    },
    "armorAlt": {
      "name": "Nightscape Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+85 Armor, +8 Agi, +7 Stam",
      "tip": "Crafted at LW 190."
    },
    "weaponPrimary": {
      "name": "Knight's War Hammer of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+10 Strength, +10 Agility",
      "tip": "+30 Feral AP!"
    },
    "weaponAlt": {
      "name": "Heavy Darkwood Staff of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+10 Stamina, +8 Strength",
      "tip": "Great tank staff."
    }
  },
  "32": {
    "armorPrimary": {
      "name": "Nightscape Pants",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+105 Armor, +14 Agi, +13 Stam",
      "tip": "Crafted at LW 195. Massive stats!"
    },
    "armorAlt": {
      "name": "Tiger Hunter Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Nesingwary STV Quest",
      "stats": "+7 Agility, +6 Strength",
      "tip": "STV hunting reward."
    },
    "weaponPrimary": {
      "name": "Cudgel of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+11 Strength, +10 Agility",
      "tip": "+32 Feral AP."
    },
    "weaponAlt": {
      "name": "Ogre Toothpick",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Desolace Quest",
      "stats": "+10 Agility, +8 Stamina",
      "tip": "Desolace solo quest weapon."
    }
  },
  "33": {
    "armorPrimary": {
      "name": "Raptor Hunter Tunic",
      "slot": "Chest",
      "quality": "rare",
      "source": "Nesingwary STV Quest",
      "stats": "+115 Armor, +8 Str, +15 Agi",
      "tip": "Legendary Nesingwary finale reward!"
    },
    "armorAlt": {
      "name": "Nightscape Cloak",
      "slot": "Back",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+34 Armor, +7 Agi, +6 Stam",
      "tip": "Crafted at LW 195."
    },
    "weaponPrimary": {
      "name": "Ironwood Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+11 Strength, +11 Agility",
      "tip": "+33 Feral AP."
    },
    "weaponAlt": {
      "name": "Staff of the Timbermaw",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+11 Agility, +9 Stamina",
      "tip": "High crit staff."
    }
  },
  "34": {
    "armorPrimary": {
      "name": "Guardian Leather Belt",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+78 Armor, +8 Agi, +8 Stam",
      "tip": "Crafted at LW 200."
    },
    "armorAlt": {
      "name": "Tracker's Headband of the Tiger",
      "slot": "Head",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+9 Agility, +8 Strength",
      "tip": "Budget helm on AH."
    },
    "weaponPrimary": {
      "name": "Heavy Darkwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+12 Strength, +11 Agility",
      "tip": "+35 Feral AP."
    },
    "weaponAlt": {
      "name": "Lead-Weighted Club of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+12 Stamina, +9 Strength",
      "tip": "Great Bear health."
    }
  },
  "35": {
    "armorPrimary": {
      "name": "Nightscape Headband",
      "slot": "Head",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+95 Armor, +12 Agi, +11 Stam",
      "tip": "Crafted at LW 205."
    },
    "armorAlt": {
      "name": "Swashbuckler's Eyepatch",
      "slot": "Head",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+10 Agility, +8 Stamina",
      "tip": "Pirate drop in STV."
    },
    "weaponPrimary": {
      "name": "The Pacifier",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+18 Strength, +8 Stamina",
      "tip": "+36 Attack Power! Amazing 2H mace."
    },
    "weaponAlt": {
      "name": "Staff of the Ancient Leader",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+11 Strength, +11 Agility",
      "tip": "Hybrid rare staff."
    }
  },
  "36": {
    "armorPrimary": {
      "name": "Nightscape Tunic",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+128 Armor, +10 Agi, +11 Stam",
      "tip": "Crafted at LW 210."
    },
    "armorAlt": {
      "name": "Falcon's Leather Vest",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+11 Agility, +9 Intellect",
      "tip": "Hybrid AH drop."
    },
    "weaponPrimary": {
      "name": "Heavy Knotwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+12 Strength, +12 Agility",
      "tip": "+36 Feral AP."
    },
    "weaponAlt": {
      "name": "Maul of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+13 Strength, +11 Agility",
      "tip": "Heavy hitting mace."
    }
  },
  "37": {
    "armorPrimary": {
      "name": "Wild Leather Boots",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+90 Armor, +10 Agi, +10 Stam",
      "tip": "Crafted at LW 225."
    },
    "armorAlt": {
      "name": "Tracker's Boots of the Tiger",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+10 Agility, +9 Strength",
      "tip": "AH green boots."
    },
    "weaponPrimary": {
      "name": "Bludgeon of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+13 Strength, +12 Agility",
      "tip": "+38 Feral AP."
    },
    "weaponAlt": {
      "name": "Staff of the Sun",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+13 Agility, +10 Spirit",
      "tip": "Clean agility staff."
    }
  },
  "38": {
    "armorPrimary": {
      "name": "Wild Leather Helmet",
      "slot": "Head",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+108 Armor, +10 Str, +8 Agi",
      "tip": "Crafted at LW 225."
    },
    "armorAlt": {
      "name": "Big Voodoo Pants",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+105 Armor, +12 Agi, +10 Stam",
      "tip": "Troll pattern craft."
    },
    "weaponPrimary": {
      "name": "Skull-Cracking Cudgel of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+13 Strength, +13 Agility",
      "tip": "+39 Feral AP."
    },
    "weaponAlt": {
      "name": "Lead-Filled Staff of the Bear",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+14 Stamina, +10 Strength",
      "tip": "Huge Bear tanking staff."
    }
  },
  "39": {
    "armorPrimary": {
      "name": "Girdle of the Beast",
      "slot": "Waist",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+78 Armor, +12 Str, +12 Agi",
      "tip": "One of the best leveling belts in game!"
    },
    "armorAlt": {
      "name": "Basilisk Hide Pants",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Tanaris / STV Quest",
      "stats": "+12 Agility, +10 Stamina",
      "tip": "Solid quest reward."
    },
    "weaponPrimary": {
      "name": "The Judge's Gavel",
      "type": "One-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+10 Strength, +5 Agility",
      "tip": "Pair with an Off-hand."
    },
    "weaponAlt": {
      "name": "Heavy War Hammer of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+14 Strength, +13 Agility",
      "tip": "Massive 2H strikes."
    }
  },
  "40": {
    "armorPrimary": {
      "name": "Wolfshead Helm",
      "slot": "Head",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+109 Armor, +10 Spirit",
      "tip": "CORE ITEM FOR CAT DPS. +20 Energy on shift! Kept until level 60."
    },
    "armorAlt": {
      "name": "Nightscape Tunic (Max)",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+135 Armor, +12 Agi, +12 Stam",
      "tip": "Crafted chest backup."
    },
    "weaponPrimary": {
      "name": "Smashing Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+14 Strength, +14 Agility",
      "tip": "+42 Feral AP."
    },
    "weaponAlt": {
      "name": "Hand of Righteousness",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+15 Strength, +10 Stamina",
      "tip": "Rare 2H mace."
    }
  },
  "41": {
    "armorPrimary": {
      "name": "Wild Leather Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+98 Armor, +10 Agi, +12 Stam",
      "tip": "Crafted at LW 230."
    },
    "armorAlt": {
      "name": "Tracker's Cloak of the Tiger",
      "slot": "Back",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+7 Agility, +6 Strength",
      "tip": "Clean AH cloak."
    },
    "weaponPrimary": {
      "name": "Hardened Knotwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+15 Strength, +14 Agility",
      "tip": "+44 Feral AP."
    },
    "weaponAlt": {
      "name": "Maul of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+15 Stamina, +11 Strength",
      "tip": "Dire Bear tank mace."
    }
  },
  "42": {
    "armorPrimary": {
      "name": "Wild Leather Vest",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+142 Armor, +14 Agi, +13 Stam",
      "tip": "Crafted at LW 235."
    },
    "armorAlt": {
      "name": "Girdle of the Beast",
      "slot": "Waist",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+78 Armor, +12 Str, +12 Agi",
      "tip": "Top tier belt."
    },
    "weaponPrimary": {
      "name": "Heavy Ironwood Club of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+15 Strength, +15 Agility",
      "tip": "+45 Feral AP."
    },
    "weaponAlt": {
      "name": "Staff of the Earth",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+15 Stamina, +12 Strength",
      "tip": "High HP staff."
    }
  },
  "43": {
    "armorPrimary": {
      "name": "Wild Leather Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+125 Armor, +16 Agi, +14 Stam",
      "tip": "Crafted at LW 240."
    },
    "armorAlt": {
      "name": "Huntsman's Armor of the Tiger",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+14 Agility, +12 Strength",
      "tip": "Heavy offensive chest."
    },
    "weaponPrimary": {
      "name": "Warden Staff",
      "type": "Two-Hand Staff",
      "quality": "epic",
      "source": "Auction House BOE",
      "stats": "+260 Armor, +10 Def, +11 Stam",
      "tip": "UNDISPUTED BiS BEAR TANK WEAPON! Dire Bear turns +260 armor into nearly +1,000 armor!"
    },
    "weaponAlt": {
      "name": "Heavy Knotwood Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+15 Strength, +15 Agility",
      "tip": "Budget Cat DPS mace."
    }
  },
  "44": {
    "armorPrimary": {
      "name": "Big Voodoo Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+95 Armor, +11 Agi, +8 Stam",
      "tip": "Crafted at LW 240."
    },
    "armorAlt": {
      "name": "Scraggle's Bone Amulet",
      "slot": "Neck",
      "quality": "rare",
      "source": "Tanaris Solo Quest",
      "stats": "+7 Str, +6 Agi, +6 Stam",
      "tip": "Super easy Tanaris quest necklace."
    },
    "weaponPrimary": {
      "name": "Resilient Knotwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+16 Strength, +15 Agility",
      "tip": "+47 Feral AP."
    },
    "weaponAlt": {
      "name": "The Shatterer",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+17 Strength, +10 Stamina",
      "tip": "Hard hitting 2H mace."
    }
  },
  "45": {
    "armorPrimary": {
      "name": "Rune of the Guard Captain",
      "slot": "Trinket",
      "quality": "rare",
      "source": "Hinterlands Quest: Job Opening",
      "stats": "+20 Attack Power, +1% Hit Chance",
      "tip": "Solo quest reward in Hinterlands! Kept for raid hit cap."
    },
    "armorAlt": {
      "name": "Frostbite Gloves of the Tiger",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+12 Agility, +11 Strength",
      "tip": "Great AH gloves."
    },
    "weaponPrimary": {
      "name": "Dense Knotwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+16 Strength, +16 Agility",
      "tip": "+48 Feral AP."
    },
    "weaponAlt": {
      "name": "War Maul of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+17 Strength, +15 Agility",
      "tip": "Heavy 2H mace."
    }
  },
  "46": {
    "armorPrimary": {
      "name": "Dark Phantom Cape",
      "slot": "Back",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+38 Armor, +15 Agility",
      "tip": "Huge +15 Agility on a cloak!"
    },
    "armorAlt": {
      "name": "Chitinous Plate Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Tanaris Solo Quest",
      "stats": "+14 Agility, +12 Stamina",
      "tip": "Wastewander quest reward."
    },
    "weaponPrimary": {
      "name": "Spiked Wooden Mallet of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+17 Strength, +16 Agility",
      "tip": "+50 Feral AP."
    },
    "weaponAlt": {
      "name": "Stonevault Staff",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+12 Agility, +12 Stamina",
      "tip": "Balanced hybrid staff."
    }
  },
  "47": {
    "armorPrimary": {
      "name": "Tough Scorpid Breastplate",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+152 Armor, +12 Agi, +12 Stam",
      "tip": "Crafted at LW 245."
    },
    "armorAlt": {
      "name": "Tracker's Gloves of the Tiger",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+13 Agility, +11 Strength",
      "tip": "High DPS gloves."
    },
    "weaponPrimary": {
      "name": "Dense Stone Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+17 Strength, +17 Agility",
      "tip": "+51 Feral AP."
    },
    "weaponAlt": {
      "name": "Smasher of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+18 Stamina, +13 Strength",
      "tip": "Great tanking mace."
    }
  },
  "48": {
    "armorPrimary": {
      "name": "Tough Scorpid Shoulders",
      "slot": "Shoulders",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+108 Armor, +11 Agi, +11 Stam",
      "tip": "Crafted at LW 250."
    },
    "armorAlt": {
      "name": "Mark of the Chosen",
      "slot": "Trinket",
      "quality": "rare",
      "source": "Maraudon Solo Pre-Quest",
      "stats": "+25 All Stats Proc when struck",
      "tip": "Best leveling survival trinket."
    },
    "weaponPrimary": {
      "name": "Mighty Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+18 Strength, +17 Agility",
      "tip": "+53 Feral AP."
    },
    "weaponAlt": {
      "name": "Heavy Mithril Mace of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+18 Strength, +16 Agility",
      "tip": "AH mace alternative."
    }
  },
  "49": {
    "armorPrimary": {
      "name": "Tough Scorpid Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+135 Armor, +14 Agi, +13 Stam",
      "tip": "Crafted at LW 255."
    },
    "armorAlt": {
      "name": "Quickdraw Belt",
      "slot": "Waist",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+88 Armor, +14 Agility",
      "tip": "High agility belt."
    },
    "weaponPrimary": {
      "name": "Lordly Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+18 Strength, +18 Agility",
      "tip": "+54 Feral AP."
    },
    "weaponAlt": {
      "name": "Skullstone Hammer of the Bear",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+18 Stamina, +14 Strength",
      "tip": "Dire Bear tank mace."
    }
  },
  "50": {
    "armorPrimary": {
      "name": "Chimeric Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+88 Armor, +12 Agi, +12 Stam",
      "tip": "Crafted at LW 265."
    },
    "armorAlt": {
      "name": "Stormshroud Pants",
      "slot": "Legs",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+138 Armor, +14 Agi, +14 Stam",
      "tip": "Crafted elemental leather."
    },
    "weaponPrimary": {
      "name": "The Chief's Enforcer",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+30 Strength, +10 Stamina",
      "tip": "+60 Feral AP! Massive critical burst."
    },
    "weaponAlt": {
      "name": "Resilient Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+19 Strength, +18 Agility",
      "tip": "Solid 2H staff alternative."
    }
  },
  "51": {
    "armorPrimary": {
      "name": "Chimeric Boots",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+102 Armor, +12 Agi, +12 Stam",
      "tip": "Crafted at LW 270."
    },
    "armorAlt": {
      "name": "Shadowskin Tunic",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+155 Armor, +15 Agility",
      "tip": "Pure agility chest."
    },
    "weaponPrimary": {
      "name": "Dense Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+19 Strength, +18 Agility",
      "tip": "+56 Feral AP."
    },
    "weaponAlt": {
      "name": "Heavy Dark Iron Mallet",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+20 Strength, +14 Stamina",
      "tip": "High strength mace."
    }
  },
  "52": {
    "armorPrimary": {
      "name": "Stormshroud Armor",
      "slot": "Chest",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+165 Armor, +15 Agi, +14 Stam, +Lightning Proc",
      "tip": "Crafted at LW 275. Free damage procs!"
    },
    "armorAlt": {
      "name": "Chimeric Tunic",
      "slot": "Chest",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+158 Armor, +15 Agi, +14 Stam",
      "tip": "LW 275 fallback."
    },
    "weaponPrimary": {
      "name": "The Chief's Enforcer",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Auction House BOE",
      "stats": "+30 Strength",
      "tip": "+60 Feral AP."
    },
    "weaponAlt": {
      "name": "Solid Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+19 Strength, +19 Agility",
      "tip": "+57 Feral AP."
    }
  },
  "53": {
    "armorPrimary": {
      "name": "Devilsaur Gauntlets",
      "slot": "Hands",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+103 Armor, +28 AP, +1% Crit, Set: +2% Hit",
      "tip": "PRE-RAID BiS! Buy on AH or craft at LW 300."
    },
    "armorAlt": {
      "name": "Chimeric Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+138 Armor, +16 Agi, +14 Stam",
      "tip": "Crafted at LW 280."
    },
    "weaponPrimary": {
      "name": "Ironbark Staff",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Western Plaguelands Quest",
      "stats": "+10 Str, +10 Agi, +10 Stam",
      "tip": "Clean solo cauldron quest reward."
    },
    "weaponAlt": {
      "name": "Heavy Stone Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+20 Strength, +19 Agility",
      "tip": "AH high stat staff."
    }
  },
  "54": {
    "armorPrimary": {
      "name": "Chimeric Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+138 Armor, +16 Agi, +14 Stam",
      "tip": "Crafted at LW 280."
    },
    "armorAlt": {
      "name": "Slagplate Leggings of the Tiger",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+16 Agility, +15 Strength",
      "tip": "Heavy offensive pants."
    },
    "weaponPrimary": {
      "name": "Ironbark Staff",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Western Plaguelands Quest",
      "stats": "+10 Str, +10 Agi, +10 Stam",
      "tip": "Balanced hybrid stats."
    },
    "weaponAlt": {
      "name": "Grand Darkwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+20 Strength, +19 Agility",
      "tip": "+59 Feral AP."
    }
  },
  "55": {
    "armorPrimary": {
      "name": "Devilsaur Leggings",
      "slot": "Legs",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+148 Armor, +46 AP, +1% Crit, Set: +2% Hit",
      "tip": "PRE-RAID BiS! Complete the 2-set for +2% Hit."
    },
    "armorAlt": {
      "name": "Stormshroud Shoulders",
      "slot": "Shoulders",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+112 Armor, +13 Agi, +12 Stam",
      "tip": "Crafted at LW 285."
    },
    "weaponPrimary": {
      "name": "Bonecrusher",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Dire Maul Solo/Group Quest",
      "stats": "+30 Strength",
      "tip": "+60 Attack Power! Superb for Cat Form."
    },
    "weaponAlt": {
      "name": "Mighty War Hammer of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+20 Strength, +20 Agility",
      "tip": "High damage AH alternative."
    }
  },
  "56": {
    "armorPrimary": {
      "name": "Stormshroud Shoulders",
      "slot": "Shoulders",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+112 Armor, +13 Agi, +12 Stam",
      "tip": "Crafted at LW 285."
    },
    "armorAlt": {
      "name": "Bracers of the Eclipse",
      "slot": "Wrists",
      "quality": "rare",
      "source": "Auction House BOE / Dire Maul",
      "stats": "+76 Armor, +10 Str, +19 Agi",
      "tip": "BiS bracers on AH."
    },
    "weaponPrimary": {
      "name": "Grand Ironwood Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+21 Strength, +20 Agility",
      "tip": "+62 Feral AP."
    },
    "weaponAlt": {
      "name": "Heavy Dark Iron Club",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+22 Strength, +16 Stamina",
      "tip": "Great tanking mace."
    }
  },
  "57": {
    "armorPrimary": {
      "name": "Frostsaber Leather Gloves",
      "slot": "Hands",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+98 Armor, +14 Agi, +13 Stam",
      "tip": "Crafted at LW 290."
    },
    "armorAlt": {
      "name": "Devilsaur Gauntlets",
      "slot": "Hands",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+28 AP, +1% Crit",
      "tip": "BiS gloves if not yet equipped."
    },
    "weaponPrimary": {
      "name": "Grand Stone Staff of the Tiger",
      "type": "Two-Hand Staff",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+21 Strength, +21 Agility",
      "tip": "+63 Feral AP."
    },
    "weaponAlt": {
      "name": "Smasher of the Tiger",
      "type": "Two-Hand Mace",
      "quality": "uncommon",
      "source": "Auction House BOE",
      "stats": "+22 Strength, +20 Agility",
      "tip": "AH mace alternative."
    }
  },
  "58": {
    "armorPrimary": {
      "name": "Mark of Fordring",
      "slot": "Neck",
      "quality": "rare",
      "source": "EPL Quest: In Dreams",
      "stats": "+26 Attack Power, +1% Crit Chance",
      "tip": "Epic solo quest chain in EPL! Raid BiS."
    },
    "armorAlt": {
      "name": "Frostsaber Boots",
      "slot": "Feet",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+112 Armor, +15 Agi, +14 Stam",
      "tip": "Crafted at LW 295."
    },
    "weaponPrimary": {
      "name": "Warden Staff",
      "type": "Two-Hand Staff",
      "quality": "epic",
      "source": "Auction House BOE",
      "stats": "+260 Armor, +10 Def, +11 Stam",
      "tip": "Unbeatable Bear Tanking weapon in Classic."
    },
    "weaponAlt": {
      "name": "Hammer of the Northern Wind",
      "type": "One-Hand Mace",
      "quality": "epic",
      "source": "Auction House BOE",
      "stats": "+Frost damage proc",
      "tip": "Epic 1H mace to pair with Off-hand."
    }
  },
  "59": {
    "armorPrimary": {
      "name": "Frostsaber Leggings",
      "slot": "Legs",
      "quality": "uncommon",
      "source": "Leatherworking / AH",
      "stats": "+148 Armor, +16 Agi, +15 Stam",
      "tip": "Crafted at LW 300."
    },
    "armorAlt": {
      "name": "Devilsaur Leggings",
      "slot": "Legs",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+46 AP, +1% Crit",
      "tip": "Top tier physical pants."
    },
    "weaponPrimary": {
      "name": "Bonecrusher",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Dire Maul Quest",
      "stats": "+30 Strength",
      "tip": "+60 Feral AP."
    },
    "weaponAlt": {
      "name": "Timeless Staff",
      "type": "Two-Hand Staff",
      "quality": "rare",
      "source": "Caverns of Time / Quest",
      "stats": "+15 Str, +15 Agi, +15 Stam",
      "tip": "Balanced hybrid staff."
    }
  },
  "60": {
    "armorPrimary": {
      "name": "Devilsaur Armor Set (Gauntlets & Leggings)",
      "slot": "Set",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+2% Hit Chance, +46 Agi, +28 AP",
      "tip": "THE GOLD STANDARD FOR CAT DPS HEADING INTO RAIDS!"
    },
    "armorAlt": {
      "name": "Wolfshead Helm",
      "slot": "Head",
      "quality": "rare",
      "source": "Leatherworking / AH",
      "stats": "+20 Energy on Cat Shift / +5 Rage Bear",
      "tip": "Permanent BiS Powershifting Helm throughout vanilla."
    },
    "weaponPrimary": {
      "name": "Warden Staff",
      "type": "Two-Hand Staff",
      "quality": "epic",
      "source": "Auction House BOE",
      "stats": "+260 Armor, +10 Def, +11 Stam",
      "tip": "Best Bear Tanking weapon in Vanilla/Forever."
    },
    "weaponAlt": {
      "name": "Bonecrusher",
      "type": "Two-Hand Mace",
      "quality": "rare",
      "source": "Dire Maul Quest",
      "stats": "+30 Strength (+60 AP)",
      "tip": "Supreme Cat DPS quest weapon."
    }
  }
};

function renderNonDungeonGear(lvl) {
  const container = document.getElementById("nonDungeonGearMainContainer");
  if (!container) return;
  
  const gear = NON_DUNGEON_GEAR_DATA[lvl] || NON_DUNGEON_GEAR_DATA[9];
  if (!gear) {
    container.innerHTML = '<p style="color:var(--text-muted); font-size:0.88rem;">No non-dungeon gear data available for this level.</p>';
    return;
  }

  function getSourceClass(sourceStr) {
    if (!sourceStr) return "source-ah";
    const s = sourceStr.toLowerCase();
    if (s.includes("auction") || s.includes("ah")) return "source-ah";
    if (s.includes("leatherworking") || s.includes("crafted") || s.includes("lw")) return "source-lw";
    if (s.includes("quest")) return "source-quest";
    if (s.includes("vendor")) return "source-vendor";
    return "source-ah";
  }

  container.innerHTML = `
    <div class="non-dungeon-gear-wrapper">
      <!-- Armor Category Card -->
      <div class="gear-category-card">
        <div class="gear-category-header">
          <div class="gear-category-title">
            <span>🛡️ Optimal Non-Dungeon Armor</span>
            <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">(Level ${lvl} Leatherworking / AH / Quest)</span>
          </div>
          <span class="gear-source-badge source-ah">Solo / AH Accessible</span>
        </div>
        <div class="gear-pair-grid">
          <!-- Primary Armor -->
          <div class="gear-pick-box primary">
            <div class="gear-pick-badge primary">⭐ Primary Recommendation</div>
            <div class="gear-pick-name-row">
              <span class="gear-pick-name quality-${gear.armorPrimary.quality}">${gear.armorPrimary.name}</span>
              <span class="gear-source-badge ${getSourceClass(gear.armorPrimary.source)}">${gear.armorPrimary.source}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Slot: ${gear.armorPrimary.slot}</div>
            <div class="gear-pick-stats">${gear.armorPrimary.stats}</div>
            <div class="gear-pick-tip">${gear.armorPrimary.tip}</div>
          </div>
          <!-- Alternate Armor -->
          <div class="gear-pick-box alternate">
            <div class="gear-pick-badge alternate">🔄 Alternate / Budget Option</div>
            <div class="gear-pick-name-row">
              <span class="gear-pick-name quality-${gear.armorAlt.quality}">${gear.armorAlt.name}</span>
              <span class="gear-source-badge ${getSourceClass(gear.armorAlt.source)}">${gear.armorAlt.source}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Slot: ${gear.armorAlt.slot}</div>
            <div class="gear-pick-stats">${gear.armorAlt.stats}</div>
            <div class="gear-pick-tip">${gear.armorAlt.tip}</div>
          </div>
        </div>
      </div>

      <!-- Weapon Category Card -->
      <div class="gear-category-card">
        <div class="gear-category-header">
          <div class="gear-category-title">
            <span>🔨 Optimal Non-Dungeon Weapon</span>
            <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">(Level ${lvl} Two-Hander)</span>
          </div>
          <span class="gear-source-badge source-ah">No Dungeon Required</span>
        </div>
        <div class="gear-pair-grid">
          <!-- Primary Weapon -->
          <div class="gear-pick-box primary">
            <div class="gear-pick-badge primary">⭐ Primary Recommendation</div>
            <div class="gear-pick-name-row">
              <span class="gear-pick-name quality-${gear.weaponPrimary.quality}">${gear.weaponPrimary.name}</span>
              <span class="gear-source-badge ${getSourceClass(gear.weaponPrimary.source)}">${gear.weaponPrimary.source}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Type: ${gear.weaponPrimary.type}</div>
            <div class="gear-pick-stats">${gear.weaponPrimary.stats}</div>
            <div class="gear-pick-tip">${gear.weaponPrimary.tip}</div>
          </div>
          <!-- Alternate Weapon -->
          <div class="gear-pick-box alternate">
            <div class="gear-pick-badge alternate">🔄 Alternate / Budget Option</div>
            <div class="gear-pick-name-row">
              <span class="gear-pick-name quality-${gear.weaponAlt.quality}">${gear.weaponAlt.name}</span>
              <span class="gear-source-badge ${getSourceClass(gear.weaponAlt.source)}">${gear.weaponAlt.source}</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Type: ${gear.weaponAlt.type}</div>
            <div class="gear-pick-stats">${gear.weaponAlt.stats}</div>
            <div class="gear-pick-tip">${gear.weaponAlt.tip}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}


/* ==========================================================================
   Armor Mockup Upgrade Advisor System (Non-Dungeon Solo Quests & AH/LW)
   ========================================================================== */

let currentAdvisorFilter = "all";

const FERAL_NON_DUNGEON_UPGRADES = [
  // WEAPONS (2H Staffs and 2H Maces only — Stat Sticks for Feral)
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 10,
    maxLevel: 13,
    upgradeName: "Sturdy Quarterstaff of the Bear",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop) / Vendor",
    stats: "+4 Strength, +4 Stamina",
    gain: "+8 Feral Attack Power, +40 HP",
    tip: "⭐ Best Level 10-13 weapon in the game. Strength gives 2 AP per point in Bear & Cat; Stamina scales with Bear Form!"
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 11,
    maxLevel: 14,
    upgradeName: "Wooden Mallet of the Tiger",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "+2 Strength, +2 Agility",
    gain: "+6 AP in Cat, +0.1% Crit, +4 AP in Bear",
    tip: "Strong balanced hybrid offensive stats for Cat stealth and Bear burst."
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 14,
    maxLevel: 19,
    upgradeName: "Heavy Spiked Mace of the Bear",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "+5 Strength, +4 Stamina",
    gain: "+10 Feral AP, +40 HP",
    tip: "The premier level 14-17 non-dungeon mace. Great upgrade once you reach Level 14 in Westfall."
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 15,
    maxLevel: 22,
    upgradeName: "Oakthistle Staff",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Quest: The Master's Glaive (Darkshore / Auberdine)",
    stats: "+3 Agility, +3 Stamina",
    gain: "+3 Cat AP, +0.15% Crit, +30 HP",
    tip: "100% guaranteed solo quest reward. Excellent Agility stat-stick."
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 18,
    maxLevel: 26,
    upgradeName: "Quarterstaff of the Tiger",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "+5 Strength, +5 Agility",
    gain: "+15 AP in Cat, +0.25% Crit, +10 AP in Bear",
    tip: "Huge boost right when you unlock Cat Form at 20."
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 27,
    maxLevel: 35,
    upgradeName: "Dutiful Quarterstaff",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Quest: Morbent Fel (Duskwood - Night Watch Chain)",
    stats: "+7 Strength, +7 Stamina",
    gain: "+14 AP, +70 HP",
    tip: "Outstanding quest staff from Duskwood. Completely bypasses the need for dungeon farming."
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 43,
    maxLevel: 60,
    upgradeName: "Warden Staff",
    quality: "epic",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "+260 Armor, +10 Defense, +11 Stamina",
    gain: "+936 Armor in Dire Bear (+15% Dmg Reduction!), +110 HP",
    tip: "🏆 THE #1 BEST BEAR TANKING WEAPON IN CLASSIC WOW. Buy on AH or save gold for it—lasts into Ahn'Qiraj!"
  },
  {
    slot: "Two-Hand Weapon",
    slotKey: "mainHand",
    category: "weapon",
    minLevel: 58,
    maxLevel: 60,
    upgradeName: "Bonecrusher",
    quality: "rare",
    sourceType: "quest",
    sourceDesc: "Solo Quest: In Dreams (Tirion Fordring Chain, Western Plaguelands)",
    stats: "+30 Attack Power, +1% Critical Strike",
    gain: "+30 AP, +1% Melee Crit in Bear & Cat",
    tip: "Top tier Pre-Raid BiS Cat DPS weapon obtainable from an epic solo quest chain!"
  },

  // CHEST
  {
    slot: "Chest",
    slotKey: "chest",
    category: "chest-legs",
    minLevel: 10,
    maxLevel: 14,
    upgradeName: "Fine Leather Tunic",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 85) or Buy on AH",
    stats: "54 Armor, +3 Agility, +2 Stamina",
    gain: "+12 Armor (+34 in Bear), +3 Agi (+3 Cat AP / +0.15% Crit), +20 HP",
    tip: "Direct upgrade over white Bandit's Jerkin. Gives Agility for critical strikes and Bear dodge!"
  },
  {
    slot: "Chest",
    slotKey: "chest",
    category: "chest-legs",
    minLevel: 11,
    maxLevel: 14,
    upgradeName: "Embossed Leather Vest",
    quality: "common",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 55) or Buy on AH",
    stats: "51 Armor, +2 Strength, +2 Stamina",
    gain: "+9 Armor (+25 in Bear), +4 Feral AP in Bear & Cat, +20 HP",
    tip: "Budget craft that adds Strength attack power and extra armor."
  },
  {
    slot: "Chest",
    slotKey: "chest",
    category: "chest-legs",
    minLevel: 18,
    maxLevel: 32,
    upgradeName: "Tunic of Westfall",
    quality: "rare",
    sourceType: "quest",
    sourceDesc: "Quest: The Defias Brotherhood (Turn in at Sentinel Hill, Westfall)",
    stats: "74 Armor, +11 Agility, +5 Stamina",
    gain: "+20 Armor (+56 in Bear), +11 Agility (+11 Cat AP / +0.55% Crit), +50 HP",
    tip: "🔥 One of the greatest quest rewards in Vanilla. Unmatched Agility for Cat Form!"
  },
  {
    slot: "Chest",
    slotKey: "chest",
    category: "chest-legs",
    minLevel: 36,
    maxLevel: 50,
    upgradeName: "Nightscape Tunic",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 205) or Buy on AH",
    stats: "118 Armor, +11 Agility, +10 Stamina",
    gain: "Massive armor and +11 Agility for Cat DPS / Bear Tanking.",
    tip: "Core mid-game staple craftable by any leatherworker."
  },
  {
    slot: "Chest",
    slotKey: "chest",
    category: "chest-legs",
    minLevel: 53,
    maxLevel: 60,
    upgradeName: "Warbear Harness",
    quality: "rare",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 275 - Timbermaw) or Buy on AH",
    stats: "158 Armor, +11 Agility, +27 Stamina",
    gain: "+270 HP, +11 Agi, +450 Armor in Dire Bear",
    tip: "Supreme solo/AH Dire Bear tanking chest piece."
  },

  // LEGS
  {
    slot: "Legs",
    slotKey: "legs",
    category: "chest-legs",
    minLevel: 10,
    maxLevel: 14,
    upgradeName: "Fine Leather Pants",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 100) or Buy on AH",
    stats: "63 Armor, +4 Agility, +3 Stamina",
    gain: "+25 Armor (+70 in Bear), +4 Agi (+4 Cat AP / +0.2% Crit), +30 HP",
    tip: "Replaces starting Gardening Pants (38 Armor) with almost double the armor and real feral combat stats!"
  },
  {
    slot: "Legs",
    slotKey: "legs",
    category: "chest-legs",
    minLevel: 14,
    maxLevel: 19,
    upgradeName: "Dark Leather Pants",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 115) or Buy on AH",
    stats: "69 Armor, +5 Agility, +4 Stamina",
    gain: "+31 Armor, +5 Agi (+5 AP / +0.25% Crit), +40 HP",
    tip: "Heavy Agility pants that speed up early kill times significantly."
  },
  {
    slot: "Legs",
    slotKey: "legs",
    category: "chest-legs",
    minLevel: 15,
    maxLevel: 25,
    upgradeName: "Troll's Bane Leggings",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Quest: The Trogg Threat (Loch Modan - Valley of Kings)",
    stats: "74 Armor, +5 Agility, +4 Stamina",
    gain: "Guaranteed solo quest reward from Loch Modan trogg slaying.",
    tip: "No dungeon or AH purchase needed—earned naturally while leveling in Loch Modan."
  },
  {
    slot: "Legs",
    slotKey: "legs",
    category: "chest-legs",
    minLevel: 55,
    maxLevel: 60,
    upgradeName: "Devilsaur Leggings",
    quality: "rare",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 300) or Buy on AH",
    stats: "148 Armor, +1% Hit Chance, +46 Attack Power, +14 Stamina",
    gain: "+1% Hit, +46 AP in Bear & Cat",
    tip: "🏆 Pre-Raid BiS set piece. Complete game changer for feral melee hit rating."
  },

  // FEET / BOOTS
  {
    slot: "Feet",
    slotKey: "feet",
    category: "accessories",
    minLevel: 9,
    maxLevel: 12,
    upgradeName: "Embossed Leather Boots",
    quality: "common",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 55) or Buy on AH",
    stats: "44 Armor, +3 Stamina",
    gain: "+29 Armor (+81 Bear Armor), +30 Health",
    tip: "Huge armor leap over 15 armor gray Ragged Leather Boots!"
  },
  {
    slot: "Feet",
    slotKey: "feet",
    category: "accessories",
    minLevel: 11,
    maxLevel: 14,
    upgradeName: "Fine Leather Boots",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 80) or Buy on AH",
    stats: "49 Armor, +3 Agility, +2 Stamina",
    gain: "+34 Armor (+95 Bear Armor), +3 Agility, +20 Health",
    tip: "Ideal green boots for level 11. Adds Agility for crit and dodge."
  },
  {
    slot: "Feet",
    slotKey: "feet",
    category: "accessories",
    minLevel: 12,
    maxLevel: 25,
    upgradeName: "Feet of the Lynx",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "54 Armor, +8 Agility, +3 Strength",
    gain: "+39 Armor, +8 Agi (+8 Cat AP / +0.4% Crit), +6 Bear AP",
    tip: "🔥 Renowned as the single best low-level physical boots in the entire game."
  },

  // HANDS / GLOVES
  {
    slot: "Hands",
    slotKey: "hands",
    category: "accessories",
    minLevel: 9,
    maxLevel: 12,
    upgradeName: "Embossed Leather Gloves",
    quality: "common",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 60) or Buy on AH",
    stats: "38 Armor, +2 Strength, +2 Agility",
    gain: "+22 Armor (+62 Bear Armor), +6 Cat AP, +4 Bear AP",
    tip: "Immediate upgrade over gray Ragged Leather Gloves (16 Armor)."
  },
  {
    slot: "Hands",
    slotKey: "hands",
    category: "accessories",
    minLevel: 12,
    maxLevel: 16,
    upgradeName: "Fine Leather Gloves",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 85) or Buy on AH",
    stats: "45 Armor, +3 Agility, +2 Stamina",
    gain: "+29 Armor, +3 Agility, +20 HP",
    tip: "Clean crafted upgrade giving critical strike chance and armor."
  },
  {
    slot: "Hands",
    slotKey: "hands",
    category: "accessories",
    minLevel: 17,
    maxLevel: 26,
    upgradeName: "Hillborne Gloves",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Quest: A Free Lunch (Redridge Mountains / Lakeshire)",
    stats: "51 Armor, +4 Strength, +3 Stamina",
    gain: "+8 Bear AP, +4 Cat AP, +30 HP",
    tip: "Quick solo quest reward in Redridge Mountains."
  },
  {
    slot: "Hands",
    slotKey: "hands",
    category: "accessories",
    minLevel: 55,
    maxLevel: 60,
    upgradeName: "Devilsaur Gauntlets",
    quality: "rare",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 300) or Buy on AH",
    stats: "103 Armor, +1% Hit Chance, +28 Attack Power, +9 Stamina",
    gain: "+1% Hit, +28 Attack Power",
    tip: "🏆 Set bonus (+2% Hit total) makes this irreplaceable pre-raid gear."
  },

  // WAIST / BELTS
  {
    slot: "Waist",
    slotKey: "waist",
    category: "accessories",
    minLevel: 10,
    maxLevel: 15,
    upgradeName: "Embossed Leather Belt",
    quality: "common",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 75) or Buy on AH",
    stats: "40 Armor, +2 Strength, +2 Stamina",
    gain: "+12 Armor (+34 in Bear), +4 Bear AP, +20 HP",
    tip: "Replaces starter Wolfhide Belt (28 Armor) with extra defense and AP."
  },
  {
    slot: "Waist",
    slotKey: "waist",
    category: "accessories",
    minLevel: 16,
    maxLevel: 28,
    upgradeName: "Deviate Scale Belt",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 115) or Buy on AH",
    stats: "52 Armor, +5 Agility, +6 Stamina, +5 Spirit",
    gain: "+24 Armor, +5 Agility (+0.25% Crit), +60 HP",
    tip: "Can buy the scales directly on the Auction House to craft without entering Wailing Caverns!"
  },

  // WRISTS / BRACERS
  {
    slot: "Wrists",
    slotKey: "wrists",
    category: "accessories",
    minLevel: 10,
    maxLevel: 14,
    upgradeName: "Light Leather Bracers of the Bear",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "22 Armor, +2 Strength, +2 Stamina",
    gain: "+10 Armor (+28 in Bear), +4 Bear AP, +20 HP",
    tip: "Replaces gray Worn Leather Bracers with raw Bear attack power and health."
  },
  {
    slot: "Wrists",
    slotKey: "wrists",
    category: "accessories",
    minLevel: 13,
    maxLevel: 18,
    upgradeName: "Fine Leather Bracers",
    quality: "uncommon",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 105) or Buy on AH",
    stats: "31 Armor, +3 Strength",
    gain: "+19 Armor (+53 in Bear), +6 Feral AP",
    tip: "High armor value for a level 13 bracer piece."
  },

  // BACK / CLOAK
  {
    slot: "Back",
    slotKey: "back",
    category: "accessories",
    minLevel: 8,
    maxLevel: 14,
    upgradeName: "Hunter's Simple Cloak",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Zephras Isle / Darkshore Quest Reward",
    stats: "14 Armor, +2 Stamina, +1 Agility",
    gain: "+20 HP, +1 Agility",
    tip: "⭐ Already equipped on Chongo! Solid until level 15+."
  },
  {
    slot: "Back",
    slotKey: "back",
    category: "accessories",
    minLevel: 15,
    maxLevel: 22,
    upgradeName: "Engineer's Cloak",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop) / Craft",
    stats: "18 Armor, +4 Agility",
    gain: "+4 Agility (+4 Cat AP / +0.2% Crit)",
    tip: "Next cloak upgrade once you reach level 15 in Westfall/Loch Modan."
  },

  // HEAD (Level 14+)
  {
    slot: "Head",
    slotKey: "head",
    category: "chest-legs",
    minLevel: 14,
    maxLevel: 24,
    upgradeName: "Feathered Headdress",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Quest: In Defense of the King's Lands (Loch Modan) / Westfall",
    stats: "46 Armor, +3 Spirit, +2 Stamina",
    gain: "Fills empty Head slot! +46 Armor (+128 Bear Armor), +20 HP",
    tip: "There are NO head items before level 14. This is your first non-dungeon headpiece!"
  },
  {
    slot: "Head",
    slotKey: "head",
    category: "chest-legs",
    minLevel: 40,
    maxLevel: 60,
    upgradeName: "Wolfshead Helm",
    quality: "rare",
    sourceType: "lw",
    sourceDesc: "Crafted via Leatherworking (Skill 225) or Buy on AH",
    stats: "109 Armor, 'On Cat shapeshift gain 20 Energy; on Bear gain 5 Rage.'",
    gain: "⚡ UNLIMITED POWERSHIFTING ENERGY! +20 Energy every time you shift into Cat Form!",
    tip: "👑 THE SINGLE MOST IMPORTANT FERAL DRUID ITEM IN THE GAME. Non-dungeon, craftable at 40!"
  },

  // FINGER / RINGS (Level 14+)
  {
    slot: "Finger",
    slotKey: "ring1",
    category: "accessories",
    minLevel: 14,
    maxLevel: 24,
    upgradeName: "Tiger Band / Ring of the Tiger",
    quality: "uncommon",
    sourceType: "ah",
    sourceDesc: "Auction House (BoE World Drop)",
    stats: "+2 Agility, +2 Strength",
    gain: "Fills empty Ring slot! +6 Cat AP, +0.1% Crit, +4 Bear AP",
    tip: "First level rings start appearing on the Auction House at level 14."
  },
  {
    slot: "Finger",
    slotKey: "ring2",
    category: "accessories",
    minLevel: 18,
    maxLevel: 28,
    upgradeName: "Protector's Band",
    quality: "uncommon",
    sourceType: "quest",
    sourceDesc: "Warsong Gulch Alliance Vendor (Silverwing Grove, Ashenvale)",
    stats: "+4 Agility, +2 Stamina",
    gain: "+4 Agility, +20 HP",
    tip: "Purchased for a few silver from the WSG PvP vendor once Friendly. Zero dungeon runs."
  }
];

function initUpgradeAdvisor() {
  const filterBtns = document.querySelectorAll(".btn-adv-filter");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAdvisorFilter = btn.getAttribute("data-filter") || "all";
      renderUpgradeAdvisor(currentLevel, currentAdvisorFilter);
    });
  });

  // Clicking on paperdoll slots also auto-scrolls and filters to that slot
  document.querySelectorAll(".gear-slot-item, .weapon-slot-card").forEach(slotEl => {
    slotEl.addEventListener("click", () => {
      const slotText = slotEl.querySelector(".slot-label-text");
      if (!slotText) return;
      const text = slotText.textContent.toLowerCase();
      let targetFilter = "all";
      if (text.includes("hand") || text.includes("weapon")) targetFilter = "weapon";
      else if (text.includes("chest") || text.includes("leg") || text.includes("head")) targetFilter = "chest-legs";
      else targetFilter = "accessories";

      const btn = document.querySelector(`.btn-adv-filter[data-filter="${targetFilter}"]`);
      if (btn) {
        document.querySelectorAll(".btn-adv-filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentAdvisorFilter = targetFilter;
        renderUpgradeAdvisor(currentLevel, currentAdvisorFilter);
        
        const advisorSection = document.getElementById("paperdollUpgradeAdvisor");
        if (advisorSection) {
          advisorSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  renderUpgradeAdvisor(currentLevel, currentAdvisorFilter);
}
window.initUpgradeAdvisor = initUpgradeAdvisor;

function renderUpgradeAdvisor(lvl, filter = currentAdvisorFilter) {
  const container = document.getElementById("advisorCardsContainer");
  const badgeEl = document.getElementById("advisorLevelBadge");
  if (badgeEl) badgeEl.textContent = lvl;
  if (!container) return;

  const currentItems = (MAXROLL_GEAR_PRESETS.chongo_live && MAXROLL_GEAR_PRESETS.chongo_live.items) ? MAXROLL_GEAR_PRESETS.chongo_live.items : {};

  // Filter upgrades relevant to the character level
  let list = FERAL_NON_DUNGEON_UPGRADES.filter(u => {
    // Show items within appropriate level range
    const lvlFit = (u.minLevel <= lvl + 3 && lvl <= u.maxLevel + 2);
    if (!lvlFit) return false;

    if (filter === "all") return true;
    if (filter === "weapon") return u.category === "weapon";
    if (filter === "chest-legs") return u.category === "chest-legs";
    if (filter === "accessories") return u.category === "accessories";
    if (filter === "ah") return u.sourceType === "ah" || u.sourceType === "lw";
    if (filter === "quest") return u.sourceType === "quest";
    return true;
  });

  if (list.length === 0) {
    // Fallback to show items available around this level
    list = FERAL_NON_DUNGEON_UPGRADES.filter(u => u.minLevel <= lvl);
  }

  container.innerHTML = list.map(upg => {
    const equipped = currentItems[upg.slotKey];
    const isCurrentlyEquipped = equipped && (
      equipped.name.toLowerCase() === upg.upgradeName.toLowerCase() ||
      (upg.slotKey === "mainHand" && equipped.name.toLowerCase().includes("sturdy quarterstaff"))
    );

    const isOptimal = isCurrentlyEquipped;
    const cardClass = isOptimal ? "advisor-card is-optimal" : "advisor-card";
    const statusTag = isOptimal 
      ? '<span class="adv-status-tag optimal">✅ Currently Equipped & Optimal</span>'
      : `<span class="adv-status-tag upgrade-ready">⚡ Recommended Upgrade (Lvl ${upg.minLevel}+)</span>`;

    const equippedName = equipped ? equipped.name : "None Equipped";
    const equippedQuality = equipped ? equipped.quality : "common";
    const equippedStats = (equipped && equipped.stats && equipped.stats.length > 0) 
      ? (Array.isArray(equipped.stats) ? equipped.stats.join(", ") : equipped.stats) 
      : (equipped ? (equipped.armor || "No combat stats") : "Empty slot");

    const sourceBadgeClass = (upg.sourceType === "quest") ? "source-quest" : (upg.sourceType === "lw" ? "source-lw" : "source-ah");
    const sourceLabel = (upg.sourceType === "quest") ? "📜 Solo Quest" : (upg.sourceType === "lw" ? "✂️ Leatherworking / AH" : "🏷️ Auction House BoE");

    return `
      <div class="${cardClass}">
        <div class="adv-card-header">
          <div class="adv-slot-badge">${getSlotEmoji(upg.slot.split(" ")[0])} ${upg.slot}</div>
          ${statusTag}
        </div>

        <div class="adv-comparison-row">
          <div class="adv-col-current">
            <span class="adv-col-label">Your Current</span>
            <span class="adv-item-name slot-item-name ${equippedQuality}">${equippedName}</span>
            <span class="adv-item-stats">${equippedStats}</span>
          </div>

          <div class="adv-col-upgrade">
            <span class="adv-col-label">Suggested Pick</span>
            <span class="adv-item-name slot-item-name ${upg.quality}">${upg.upgradeName}</span>
            <span class="adv-item-stats">${upg.stats}</span>
          </div>
        </div>

        <div class="adv-upgrade-meta">
          <div class="adv-source-line">
            <span class="gear-source-badge ${sourceBadgeClass}">${sourceLabel}</span>
            <span style="color:#cbd5e1; font-size:0.75rem;">${upg.sourceDesc}</span>
          </div>
          <div class="adv-gain-badge">Stat Boost: ${upg.gain}</div>
        </div>

        <div class="adv-tip-box">
          💡 ${upg.tip}
        </div>
      </div>
    `;
  }).join("");
}
window.renderUpgradeAdvisor = renderUpgradeAdvisor;

// ==========================================================================
// Optimal Leatherworking 1-300 Training Guide Data & Interactive Engine
// ==========================================================================

const LEATHERWORKING_PHASES = [
  {
    id: "apprentice",
    name: "Phase 1: Apprentice Leatherworking",
    range: "1 – 75",
    req: "Character Level 10 (Skill 50 for Journeyman)",
    trainer: "Alliance Apprentice Trainers: Adele Fielder (Elwynn Forest), Simon Tanner (Stormwind - Old Town 71.8, 62.8), Fimble Finespindle (Ironforge - Great Forge 40.0, 32.0), Telonis (Darnassus - Craftsmen's Terrace 64.6, 21.6).",
    warning: false,
    steps: [
      {
        min: 1, max: 45,
        range: "1 – 45",
        recipe: "Light Armor Kit",
        crafts: "~45–50",
        mats: "1x Light Leather",
        tip: "Keep these! Apply them to your chest, gloves, and boots for +8 Armor per piece (+24 Armor, heavily multiplied by Bear Form).",
        diff: "orange"
      },
      {
        min: 45, max: 55,
        range: "45 – 55",
        recipe: "Handstitched Leather Cloak",
        crafts: "10",
        mats: "2x Light Leather, 1x Coarse Thread",
        tip: "Fast and cheap cloaks using standard vendor Coarse Thread.",
        diff: "orange"
      },
      {
        min: 55, max: 75,
        range: "55 – 75",
        recipe: "Embossed Leather Gloves",
        crafts: "20–25",
        mats: "3x Light Leather, 2x Coarse Thread",
        tip: "⚠️ TRAINER CHECK: Learn Journeyman Leatherworking as soon as you reach skill 50-75 so your skill cap raises to 150!",
        diff: "yellow"
      }
    ]
  },
  {
    id: "journeyman",
    name: "Phase 2: Journeyman Leatherworking",
    range: "75 – 150",
    req: "Character Level 10+, Skill 50+",
    trainer: "Alliance Journeyman Trainers: Simon Tanner (Stormwind), Fimble Finespindle (Ironforge), Telonis (Darnassus).",
    warning: false,
    steps: [
      {
        min: 75, max: 85,
        range: "75 – 85",
        recipe: "Embossed Leather Gloves / Fine Leather Belt",
        crafts: "10",
        mats: "6x Light Leather, 2x Coarse Thread (for Belt)",
        tip: "Finish out any remaining Light Leather stocks before transitioning to Medium Leather.",
        diff: "yellow"
      },
      {
        min: 85, max: 100,
        range: "85 – 100",
        recipe: "Fine Leather Belt",
        crafts: "15",
        mats: "6x Light Leather, 2x Coarse Thread",
        tip: "Solid vendor value. Keep at least 1-2 belts in your bank for future Cured Medium Hide crafts.",
        diff: "yellow"
      },
      {
        min: 100, max: 115,
        range: "100 – 115",
        recipe: "Cured Medium Hide",
        crafts: "15",
        mats: "1x Medium Hide, 1x Salt",
        tip: "🔥 CRITICAL: SAVE ALL CURED HIDES! Do NOT sell these. You will need them for upcoming boots. (If short on hides, craft Medium Armor Kits with 4x Medium Leather).",
        diff: "orange"
      },
      {
        min: 115, max: 120,
        range: "115 – 120",
        recipe: "Fine Leather Boots (or Deviate Scale Belt)",
        crafts: "5",
        mats: "2x Medium Leather, 1x Cured Medium Hide, 1x Fine Thread",
        tip: "⭐ FERAL BIAS: If you have the Deviate Scale Belt pattern (WC drop or AH), craft it now for +5 Agi, +6 Stam, +5 Spirit!",
        diff: "orange"
      },
      {
        min: 120, max: 135,
        range: "120 – 135",
        recipe: "Dark Leather Boots",
        crafts: "15",
        mats: "4x Medium Leather, 2x Fine Thread, 1x Gray Dye",
        tip: "Gray Dye is bought cheap from trade vendors. Great stamina and armor boots.",
        diff: "yellow"
      },
      {
        min: 135, max: 150,
        range: "135 – 150",
        recipe: "Dark Leather Pants",
        crafts: "15",
        mats: "12x Medium Leather, 1x Fine Thread, 1x Gray Dye",
        tip: "⚠️ TRAINER CHECK: Equip 1 pair for yourself (+5 Agi, +4 Stam) and sell the rest. Train Expert Leatherworking at skill 125-150!",
        diff: "orange"
      }
    ]
  },
  {
    id: "expert",
    name: "Phase 3: Expert Leatherworking",
    range: "150 – 225",
    req: "Character Level 20+, Skill 125+",
    trainer: "Alliance Expert Trainers: Telonis (Darnassus - Craftsmen's Terrace 64.6, 21.6), Simon Tanner (Stormwind - Old Town 71.8, 62.8), Fimble Finespindle (Ironforge - Great Forge 40.0, 32.0).",
    warning: false,
    steps: [
      {
        min: 150, max: 155,
        range: "150 – 155",
        recipe: "Heavy Armor Kit",
        crafts: "5–7",
        mats: "5x Heavy Leather, 1x Fine Thread",
        tip: "Quick initial points using basic Heavy Leather from Duskwood or Wetlands beasts.",
        diff: "orange"
      },
      {
        min: 155, max: 165,
        range: "155 – 165",
        recipe: "Cured Heavy Hide",
        crafts: "10–15",
        mats: "1x Heavy Hide, 3x Salt",
        tip: "🔥 CRITICAL: SAVE ALL CURED HEAVY HIDES! You will strictly need them to craft Barbaric Shoulders at 180.",
        diff: "orange"
      },
      {
        min: 165, max: 180,
        range: "165 – 180",
        recipe: "Hillman's Leather Gloves",
        crafts: "15",
        mats: "14x Heavy Leather, 4x Fine Thread",
        tip: "Trainer recipe. Straightforward bulk craft using Heavy Leather from Stranglethorn or Wetlands.",
        diff: "yellow"
      },
      {
        min: 180, max: 190,
        range: "180 – 190",
        recipe: "Barbaric Shoulders",
        crafts: "10",
        mats: "8x Heavy Leather, 1x Cured Heavy Hide, 2x Fine Thread",
        tip: "⭐ FERAL UPGRADE: Equip a pair! Grants +5 Strength, +4 Agility. Uses the Cured Heavy Hides you saved.",
        diff: "orange"
      },
      {
        min: 190, max: 205,
        range: "190 – 205",
        recipe: "Duskworker Gloves",
        crafts: "15",
        mats: "16x Heavy Leather, 1x Silken Thread, 2x Black Dye",
        tip: "Black Dye and Silken Thread are bought from trade goods vendors. Pushes you smoothly to Thick Leather.",
        diff: "yellow"
      },
      {
        min: 205, max: 225,
        range: "205 – 225",
        recipe: "Nightscape Tunic",
        crafts: "20",
        mats: "7x Thick Leather, 2x Silken Thread",
        tip: "⚡ ULTRA EFFICIENT: Costs only 7 Thick Leather per craft (one of the cheapest skill-ups in Vanilla). Equip 1 (+10 Agi, +11 Stam)!",
        diff: "orange"
      }
    ]
  },
  {
    id: "artisan",
    name: "Phase 4: Artisan Leatherworking",
    range: "225 – 300",
    req: "Character Level 35+, Skill 200+",
    trainer: "🚨 CRITICAL ALLIANCE TRAINER: Artisan is NOT in Stormwind or Ironforge! You MUST visit Drakk Stonehand at Aerie Peak in The Hinterlands (13.4, 43.4).",
    warning: true,
    steps: [
      {
        min: 225, max: 235,
        range: "225 – 235",
        recipe: "Nightscape Headband",
        crafts: "10",
        mats: "5x Thick Leather, 2x Silken Thread",
        tip: "Learned directly from Drakk Stonehand in Hinterlands. Extremely cheap (5 Thick Leather each).",
        diff: "orange"
      },
      {
        min: 235, max: 250,
        range: "235 – 250",
        recipe: "Nightscape Pants",
        crafts: "15",
        mats: "14x Thick Leather, 4x Silken Thread",
        tip: "⭐ FERAL UPGRADE: Fantastic leveling legs (+14 Agility, +13 Stamina)! Equip for Cat DPS.",
        diff: "orange"
      },
      {
        min: 250, max: 260,
        range: "250 – 260",
        recipe: "Nightscape Boots",
        crafts: "10",
        mats: "16x Thick Leather, 2x Heavy Silken Thread",
        tip: "Solid +9 Agility, +9 Stamina boots. Takes you right to the Rugged Leather threshold.",
        diff: "yellow"
      },
      {
        min: 260, max: 280,
        range: "260 – 280",
        recipe: "Wicked Leather Gauntlets (or Rugged Armor Kit)",
        crafts: "20",
        mats: "8x Rugged Leather, 1x Black Dye, 1x Rune Thread",
        tip: "Recipe sold by vendor Wulmort Jinglepocket / AH. Alternative: Rugged Armor Kit (5x Rugged Leather) from 250 to 275.",
        diff: "yellow"
      },
      {
        min: 280, max: 300,
        range: "280 – 300",
        recipe: "Wicked Leather Headband",
        crafts: "20",
        mats: "12x Rugged Leather, 1x Black Dye, 1x Rune Thread",
        tip: "Recipe sold by vendor or AH. Alternatively, craft your endgame Devilsaur Gauntlets (at 290) and Devilsaur Leggings (at 300) to finish!",
        diff: "yellow"
      }
    ]
  }
];

let currentLwSkill = 1;
try {
  const savedLw = localStorage.getItem("wow_druid_lw_skill");
  if (savedLw && !isNaN(parseInt(savedLw, 10))) {
    currentLwSkill = Math.max(1, Math.min(300, parseInt(savedLw, 10)));
  }
} catch (e) {}

let activeLwFilter = "all";

function initLeatherworkingGuide() {
  const inputEl = document.getElementById("lwSkillInput");
  if (inputEl) inputEl.value = currentLwSkill;
  renderLeatherworkingGuide();
}

function setLwSkill(val) {
  const parsed = parseInt(val, 10);
  if (isNaN(parsed)) return;
  currentLwSkill = Math.max(1, Math.min(300, parsed));
  try { localStorage.setItem("wow_druid_lw_skill", currentLwSkill); } catch (e) {}
  
  const inputEl = document.getElementById("lwSkillInput");
  if (inputEl) inputEl.value = currentLwSkill;
  renderLeatherworkingGuide();
}

function adjustLwSkill(delta) {
  setLwSkill(currentLwSkill + delta);
}

function filterLwPhase(phaseKey) {
  activeLwFilter = phaseKey;
  
  document.querySelectorAll(".lw-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(`'${phaseKey}'`));
  });

  const phasesContainer = document.getElementById("lwPhasesContainer");
  const tribalCard = document.getElementById("lwTribalCard");
  const shoppingCard = document.getElementById("lwShoppingCard");

  if (phaseKey === "tribal") {
    if (phasesContainer) phasesContainer.style.display = "none";
    if (tribalCard) {
      tribalCard.style.display = "block";
      tribalCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (shoppingCard) shoppingCard.style.display = "none";
    return;
  }

  if (phaseKey === "shopping") {
    if (phasesContainer) phasesContainer.style.display = "none";
    if (tribalCard) tribalCard.style.display = "none";
    if (shoppingCard) {
      shoppingCard.style.display = "block";
      shoppingCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (phasesContainer) phasesContainer.style.display = "block";
  if (tribalCard) tribalCard.style.display = "block";
  if (shoppingCard) shoppingCard.style.display = "block";

  renderLeatherworkingGuide();
}

function getPhaseNameForSkill(skill) {
  if (skill < 75) return "Apprentice";
  if (skill < 150) return "Journeyman";
  if (skill < 225) return "Expert";
  if (skill < 300) return "Artisan";
  return "Master (Max 300)";
}

function renderLeatherworkingGuide() {
  const container = document.getElementById("lwPhasesContainer");
  const skillLabel = document.getElementById("lwSkillLabel");
  const phaseLabel = document.getElementById("lwPhaseLabel");
  const progressBar = document.getElementById("lwProgressBar");
  const calloutEl = document.getElementById("lwActiveCallout");

  if (skillLabel) skillLabel.textContent = `Skill: ${currentLwSkill} / 300`;
  if (phaseLabel) phaseLabel.textContent = getPhaseNameForSkill(currentLwSkill);
  if (progressBar) {
    const pct = Math.min(100, Math.round((currentLwSkill / 300) * 100));
    progressBar.style.width = `${Math.max(1, pct)}%`;
  }

  // Find active step matching current skill
  let activeStep = null;
  let activePhaseObj = null;

  for (const phase of LEATHERWORKING_PHASES) {
    for (const step of phase.steps) {
      if (currentLwSkill >= step.min && currentLwSkill < step.max) {
        activeStep = step;
        activePhaseObj = phase;
        break;
      }
    }
    if (activeStep) break;
  }

  if (!activeStep && currentLwSkill >= 300) {
    if (calloutEl) {
      calloutEl.innerHTML = `🎉 <strong>Skill 300 Reached!</strong> You are at max Leatherworking. Craft your Devilsaur Set, Wolfshead Helm, and Warbear Armor!`;
    }
  } else if (activeStep && calloutEl) {
    calloutEl.innerHTML = `
      👉 <strong>Current Optimal Craft:</strong> <span style="color:#fff; font-weight:700;">${activeStep.recipe}</span> (Skill ${activeStep.range}) • 
      Mats: <span style="color:#4ade80;">${activeStep.mats}</span> • 
      Expected Crafts: <span style="color:var(--gold-accent);">${activeStep.crafts}</span>
    `;
  }

  if (!container) return;

  const filteredPhases = (activeLwFilter === "all")
    ? LEATHERWORKING_PHASES
    : LEATHERWORKING_PHASES.filter(p => p.id === activeLwFilter);

  container.innerHTML = filteredPhases.map(phase => {
    return `
      <div class="lw-phase-card">
        <div class="lw-phase-header">
          <div class="lw-phase-title">
            <span>${phase.name}</span>
          </div>
          <div class="lw-phase-meta">
            <span>Range: <strong>${phase.range}</strong></span>
            <span>${phase.req}</span>
          </div>
        </div>

        <div class="lw-trainer-callout ${phase.warning ? 'warning' : ''}">
          ${phase.trainer}
        </div>

        <div class="lw-steps-list">
          ${phase.steps.map(step => {
            const isCurrent = (currentLwSkill >= step.min && currentLwSkill < step.max);
            return `
              <div class="lw-step-item ${isCurrent ? 'active-craft' : ''}">
                <div>
                  <span class="lw-range-badge">${step.range}</span>
                  ${isCurrent ? '<div style="font-size:0.68rem; font-weight:700; color:#4ade80; margin-top:3px;">ACTIVE</div>' : ''}
                </div>
                <div>
                  <span class="lw-recipe-name">${step.recipe}</span>
                  <span class="lw-craft-count">(${step.crafts} crafts)</span>
                </div>
                <div class="lw-mats-text">
                  ${step.mats}
                </div>
                <div class="lw-tip-text">
                  ${step.tip}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

window.initLeatherworkingGuide = initLeatherworkingGuide;
window.setLwSkill = setLwSkill;
window.adjustLwSkill = adjustLwSkill;
window.filterLwPhase = filterLwPhase;

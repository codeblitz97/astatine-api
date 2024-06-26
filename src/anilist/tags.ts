const tags: string[] = [
  "4-koma",
  "Achromatic",
  "Achronological Order",
  "Acrobatics",
  "Acting",
  "Adoption",
  "Advertisement",
  "Afterlife",
  "Age Gap",
  "Age Regression",
  "Agender",
  "Agriculture",
  "Airsoft",
  "Alchemy",
  "Aliens",
  "Alternate Universe",
  "American Football",
  "Amnesia",
  "Anachronism",
  "Ancient China",
  "Angels",
  "Animals",
  "Anthology",
  "Anthropomorphism",
  "Anti-Hero",
  "Archery",
  "Aromantic",
  "Arranged Marriage",
  "Artificial Intelligence",
  "Asexual",
  "Assassins",
  "Astronomy",
  "Athletics",
  "Augmented Reality",
  "Autobiographical",
  "Aviation",
  "Badminton",
  "Band",
  "Bar",
  "Baseball",
  "Basketball",
  "Battle Royale",
  "Biographical",
  "Bisexual",
  "Board Game",
  "Boarding School",
  "Body Horror",
  "Body Swapping",
  "Bowling",
  "Boxing",
  "Boys' Love",
  "Bullying",
  "Butler",
  "Calligraphy",
  "Cannibalism",
  "Card Battle",
  "Cars",
  "Centaur",
  "CGI",
  "Cheerleading",
  "Chibi",
  "Chimera",
  "Chuunibyou",
  "Circus",
  "Class Struggle",
  "Classic Literature",
  "Classical Music",
  "Clone",
  "Coastal",
  "College",
  "Coming of Age",
  "Conspiracy",
  "Cosmic Horror",
  "Cosplay",
  "Cowboys",
  "Crime",
  "Criminal Organization",
  "Crossdressing",
  "Crossover",
  "Cult",
  "Cultivation",
  "Cute Boys Doing Cute Things",
  "Cute Girls Doing Cute Things",
  "Cyberpunk",
  "Cyborg",
  "Cycling",
  "Dancing",
  "Death Game",
  "Delinquents",
  "Demons",
  "Denpa",
  "Desert",
  "Detective",
  "Dinosaurs",
  "Disability",
  "Dissociative Identities",
  "Dragons",
  "Drawing",
  "Drugs",
  "Dullahan",
  "Dungeon",
  "Dystopian",
  "E-Sports",
  "Eco-Horror",
  "Economics",
  "Educational",
  "Elderly Protagonist",
  "Elf",
  "Ensemble Cast",
  "Environmental",
  "Episodic",
  "Ero Guro",
  "Espionage",
  "Estranged Family",
  "Fairy",
  "Fairy Tale",
  "Fake Relationship",
  "Family Life",
  "Fashion",
  "Female Harem",
  "Female Protagonist",
  "Femboy",
  "Fencing",
  "Filmmaking",
  "Firefighters",
  "Fishing",
  "Fitness",
  "Flash",
  "Food",
  "Football",
  "Foreign",
  "Found Family",
  "Fugitive",
  "Full CGI",
  "Full Color",
  "Gambling",
  "Gangs",
  "Gender Bending",
  "Ghost",
  "Go",
  "Goblin",
  "Gods",
  "Golf",
  "Gore",
  "Guns",
  "Gyaru",
  "Handball",
  "Henshin",
  "Heterosexual",
  "Hikikomori",
  "Hip-hop Music",
  "Historical",
  "Homeless",
  "Horticulture",
  "Ice Skating",
  "Idol",
  "Inn",
  "Isekai",
  "Iyashikei",
  "Jazz Music",
  "Josei",
  "Judo",
  "Kaiju",
  "Karuta",
  "Kemonomimi",
  "Kids",
  "Kingdom Management",
  "Konbini",
  "Kuudere",
  "Lacrosse",
  "Language Barrier",
  "LGBTQ+ Themes",
  "Lost Civilization",
  "Love Triangle",
  "Mafia",
  "Magic",
  "Mahjong",
  "Maids",
  "Makeup",
  "Male Harem",
  "Male Protagonist",
  "Marriage",
  "Martial Arts",
  "Matchmaking",
  "Matriarchy",
  "Medicine",
  "Memory Manipulation",
  "Mermaid",
  "Meta",
  "Metal Music",
  "Military",
  "Mixed Gender Harem",
  "Monster Boy",
  "Monster Girl",
  "Mopeds",
  "Motorcycles",
  "Mountaineering",
  "Musical Theater",
  "Mythology",
  "Natural Disaster",
  "Necromancy",
  "Nekomimi",
  "Ninja",
  "No Dialogue",
  "Noir",
  "Non-fiction",
  "Nudity",
  "Nun",
  "Office",
  "Office Lady",
  "Oiran",
  "Ojou-sama",
  "Orphan",
  "Otaku Culture",
  "Outdoor",
  "Pandemic",
  "Parenthood",
  "Parkour",
  "Parody",
  "Philosophy",
  "Photography",
  "Pirates",
  "Poker",
  "Police",
  "Politics",
  "Polyamorous",
  "Post-Apocalyptic",
  "POV",
  "Primarily Adult Cast",
  "Primarily Animal Cast",
  "Primarily Child Cast",
  "Primarily Female Cast",
  "Primarily Male Cast",
  "Primarily Teen Cast",
  "Prison",
  "Proxy Battle",
  "Psychosexual",
  "Puppetry",
  "Rakugo",
  "Real Robot",
  "Rehabilitation",
  "Reincarnation",
  "Religion",
  "Restaurant",
  "Revenge",
  "Robots",
  "Rock Music",
  "Rotoscoping",
  "Royal Affairs",
  "Rugby",
  "Rural",
  "Samurai",
  "Satire",
  "School",
  "School Club",
  "Scuba Diving",
  "Seinen",
  "Shapeshifting",
  "Ships",
  "Shogi",
  "Shoujo",
  "Shounen",
  "Shrine Maiden",
  "Skateboarding",
  "Skeleton",
  "Slapstick",
  "Slavery",
  "Snowscape",
  "Software Development",
  "Space",
  "Space Opera",
  "Spearplay",
  "Steampunk",
  "Stop Motion",
  "Succubus",
  "Suicide",
  "Sumo",
  "Super Power",
  "Super Robot",
  "Superhero",
  "Surfing",
  "Surreal Comedy",
  "Survival",
  "Swimming",
  "Swordplay",
  "Table Tennis",
  "Tanks",
  "Tanned Skin",
  "Teacher",
  "Teens' Love",
  "Tennis",
  "Terrorism",
  "Time Loop",
  "Time Manipulation",
  "Time Skip",
  "Tokusatsu",
  "Tomboy",
  "Torture",
  "Tragedy",
  "Trains",
  "Transgender",
  "Travel",
  "Triads",
  "Tsundere",
  "Twins",
  "Unrequited Love",
  "Urban",
  "Urban Fantasy",
  "Vampire",
  "Veterinarian",
  "Video Games",
  "Vikings",
  "Villainess",
  "Virtual World",
  "Volleyball",
  "VTuber",
  "War",
  "Werewolf",
  "Witch",
  "Work",
  "Wrestling",
  "Writing",
  "Wuxia",
  "Yakuza",
  "Yandere",
  "Youkai",
  "Yuri",
  "Zombie",
];

export default tags;

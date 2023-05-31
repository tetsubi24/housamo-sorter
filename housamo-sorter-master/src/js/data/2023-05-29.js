dataSetVersion = "2023-05-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to only sort through characters of certain rarities.",
    checked: true,
    sub: [
      { name: "★★★+", tooltip: "Characters that are named and/or have cards of at least ☆3 rarity.", key: "3+" },
	  { name: "★★", tooltip: "Mob characters that have cards of ☆2 rarity.", key: "2", checked: false },
	  { name: "★", tooltip: "Mob characters that have cards of ☆1 rarity.", key: "1", checked: false },
    ]
  },
  {
    name: "Filter by Guild",
    key: "guild",
    tooltip: "Check this to only sort through characters of certain guilds. Includes Limited variant affiliations.",
    checked: false,
    sub: [
      { name: "Summoners", tooltip: "&quot;Shinjuku Summoners&quot;", key: "summoners" },
	  { name: "Berserkers", tooltip: "&quot;Ikebukuro Berserkers&quot;", key: "berserkers" },
	  { name: "Tycoons", tooltip: "&quot;Roppongi Tycoons&quot;", key: "tycoons" },
	  { name: "Wisemen", tooltip: "&quot;Hongo Wisemen&quot;", key: "wisemen" },
	  { name: "Missionaries", tooltip: "&quot;Aoyama Missionaries&quot;", key: "missionaries" },
	  { name: "Entertainers", tooltip: "&quot;Yurakucho Entertainers&quot;", key: "entertainers" },
	  { name: "Beast Tamers", tooltip: "&quot;Ueno Beast Tamers&quot;", key: "beast_tamers" },
	  { name: "Gurus", tooltip: "&quot;Asakusa Gurus&quot;", key: "gurus" },
	  { name: "Agents", tooltip: "&quot;Akasaka Agents&quot;", key: "agents" },
	  { name: "Outlaws", tooltip: "&quot;Kabukicho Outlaws&quot;", key: "outlaws" },
	  { name: "Game Masters", tooltip: "&quot;Oshiage Game Masters&quot;", key: "game_masters" },
	  { name: "Wanderers", tooltip: "&quot;Arakawa Wanderers&quot;", key: "wanderers" },
	  { name: "Creators", tooltip: "&quot;Akihabara Creators&quot;", key: "creators" },
	  { name: "Genociders", tooltip: "&quot;Otemachi Genociders&quot;", key: "genociders" },
	  { name: "Crafters", tooltip: "&quot;Kamata Crafters&quot;", key: "crafters" },
	  { name: "Warmongers", tooltip: "&quot;Nerima Warmongers&quot;", key: "warmongers" },
	  { name: "Rule Makers", tooltip: "&quot;Chuo Rule Makers&quot;", key: "rule_makers" },
	  { name: "Invaders", tooltip: "&quot;Shinagawa Invaders&quot;", key: "invaders" },
	  { name: "Unknown", tooltip: "Characters with unknown guild affiliations.", key: "no_guild" },
    ]
  },
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to only sort through characters of certain schools. Includes Limited variant affiliations.",
    checked: false,
    sub: [
      { name: "Shinjuku Academy", tooltip: " ", key: "shinjuku" },	  
	  { name: "Umamichi Academy", tooltip: " ", key: "umamichi" },
	  { name: "Bukuro Academy", tooltip: " ", key: "bukuro" },
	  { name: "Roppongi Academy", tooltip: " ", key: "roppongi" },
	  { name: "Togo Academy", tooltip: " ", key: "togo" },
	  { name: "Daikanyama Academy", tooltip: " ", key: "daikanyama" },
	  { name: "Ueno Academy", tooltip: " ", key: "ueno" },
	  { name: "Yoyogi Academy", tooltip: " ", key: "yoyogi" },
	  { name: "Toyosu Marine Academy", tooltip: " ", key: "toyosu" },
	  { name: "Akihabara Academy", tooltip: " ", key: "akihabara" },
	  { name: "Nakano Performing Arts Academy", tooltip: " ", key: "nakano" },
	  { name: "Tokyo Santa School", tooltip: " ", key: "santa" },
	  { name: "Fujimi Academy", tooltip: " ", key: "fujimi" },
	  { name: "Kiou Police Academy", tooltip: " ", key: "kiou" },
	  { name: "Kamata Technical Academy", tooltip: " ", key: "kamata" },
	  { name: "Kabukicho Academy", tooltip: " ", key: "kabukicho" },
	  { name: "Ojibo Academy", tooltip: " ", key: "ojibo" },
	  { name: "Penitentia Academy", tooltip: " ", key: "penitentia" },
	  { name: "&quot;Tokyo Firefighting University&quot;", tooltip: "Unofficial translation.", key: "fire" },
	  { name: "Kudan Martial Arts Academy", tooltip: " ", key: "kudan" },
	  { name: "Suidocho Business Academy", tooltip: " ", key: "suidocho" },
	  { name: "Setagaya Agricultural Academy", tooltip: " ", key: "setagaya" },
	  { name: "Unknown", tooltip: "Characters with unknown school affiliations.", key: "no_school" },
    ]
  },
  {
    name: "Filter by Other Affiliations",
    key: "other",
    tooltip: "Check this to only sort through characters of certain groups.",
    checked: false,
    sub: [
      { name: "Eight Dog Warriors", tooltip: "Named &quot;Hakkenshi&quot; in Japanese.", key: "eight" },
	  { name: "Viral Influence", tooltip: "Named &quot;Buzz Dreamers&quot; in Japanese.", key: "viral" },
	  { name: "Shinjuku Academy Mountaineers", tooltip: "Named &quot;Shinjuku Wandervogel Club&quot; in Japanese.", key: "mountain" },
    ]
  },
  {
    name: "Remove Protagonist",
    key: "protag",
    tooltip: "Check this to remove the protagonist from sorting choices."
  },
  {
    name: "Remove Unreleased Characters",
    key: "unreleased",
    tooltip: "Check this to remove unreleased characters from sorting choices. May contain spoilers."
  }
];

dataSet[dataSetVersion].characterData = [

/******
* 3-STAR CHARACTERS
******/

  {
    name: "Protagonist",
    img: "Hr5HVGp.gif",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  protag: true
    }
  },
  {
    name: "Shiro",
    img: "Hr5H6c7.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    }
  },
  {
    name: "Kengo",
    img: "Hr591B2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    }
  },
  {
    name: "Ryota",
    img: "Hr5HO9n.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Toji",
    img: "Hr5JVDb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku", "kiou" ],
    },
  },
  {
    name: "Oniwaka",
    img: "Hr5HuCQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Hanuman",
    img: "HrRys07.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Claude",
    img: "HrRyol9.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Licht",
    img: "Hr59rkg.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Duo",
    img: "HrRy5oQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Maria",
    img: "Hr59mYX.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Christine",
    img: "HrRynK7.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Moritaka",
    img: "Hr5HdQ4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Fenrir",
    img: "HrRyGRa.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Ashigara",
    img: "HrRpSnV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Asterius",
    img: "HrRpg6P.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Ganglie",
    img: "HrRy8Rs.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Ikutoshi",
    img: "Hr59fea.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Shinya",
    img: "Hr5H4FS.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "missionaries", "invaders" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Kenta",
    img: "Hr59E1S.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Kotaro",
    img: "Hr59hmb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Eita",
    img: "HrRyll1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Choji",
    img: "HrRyBPS.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Jugo",
    img: "Hr59aIf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Macan",
    img: "Hr59sQR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Ophion",
    img: "Hr5HAGV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Temujin",
    img: "Hr5JuNs.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "kudan", "no_school" ],
    },
  },
  {
    name: "Garmr",
    img: "HrRyjiN.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Makara",
    img: "Hr59QBp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Azazel",
    img: "HrRpP8g.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Cu Sith",
    img: "HrRyIHu.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Gunzo",
    img: "HrRyUbf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Marchosias",
    img: "Hr59t4I.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Nobuharu",
    img: "Hr5HBa9.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Kyuma",
    img: "Hr59vEB.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Kagutsuchi",
    img: "Hr59cX4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "R-19",
    img: "Hr5Hjat.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gabriel",
    img: "HrRyXxR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Alice",
    img: "HrRpW67.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Jambavan",
    img: "Hr59Tgt.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers", "game_masters" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Lucifuge",
    img: "Hr59PTJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Hati",
    img: "Hr59ZEN.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Barguest",
    img: "HrRpZtR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "unknown" ],
    },
  },
  {
    name: "Bathym",
    img: "HrRpbMN.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Kuniyoshi",
    img: "Hr59OLQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Motosumi",
    img: "Hr5H3Cl.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Kalki",
    img: "Hr59lLl.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Nomad",
    img: "Hr5HxTb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Snow",
    img: "Hr5HDox.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Gandharva",
    img: "HrRyhVp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Nyarlathotep",
    img: "Hr5Hzjj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "entertainers", "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Shuten",
    img: "Hr5Hs9e.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Pollux",
    img: "Hr5HW6N.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Taurus Mask",
    img: "Hr5JIHX.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Jiraiya",
    img: "Hr59R7n.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "gurus" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Andvari",
    img: "HrRpNyb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Yule",
    img: "Hr597mG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Ded",
    img: "HrRyADx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Babalon",
    img: "HrRyLg9.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Ibaraki",
    img: "Hr59FdF.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Horkeu Kamui",
    img: "Hr599sV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Taromaiti",
    img: "Hr5JxSt.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Sitri",
    img: "Hr5HZtj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tsathoggua",
    img: "Hr5JNfV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Hogen",
    img: "Hr592g1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Zao",
    img: "Hr5Jbbs.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Chernobog",
    img: "HrRyqV2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Melusine",
    img: "Hr59yps.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Zabaniyya",
    img: "Hr5JDen.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Arsalan",
    img: "HrRpvZQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Ifrit",
    img: "Hr59K5g.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Hakumen",
    img: "HrRyifS.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Benten",
    img: "HrRpyFt.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "nakano" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Ahab",
    img: "HrRpcyG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Typhon",
    img: "Hr5JeUP.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Jinn",
    img: "Hr59AdX.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Xolotl",
    img: "Hr5J6sR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Tadatomo",
    img: "Hr5JHS1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "summoners" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Volos",
    img: "Hr5JUba.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Tangaroa",
    img: "Hr5JBPp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Triton",
    img: "Hr5JXxj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Kijimuna",
    img: "Hr59Gr7.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Kurogane",
    img: "Hr59kBV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Robinson",
    img: "Hr5Hw8X.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Krampus",
    img: "Hr59wIj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Agyo",
    img: "HrRp0uf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "suidocho", "shinjuku" ],
    },
  },
  {
    name: "Aizen",
    img: "HrRp1j4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons", "missionaries" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Wakan Tanka",
    img: "Hr5JrzJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Thunderbird",
    img: "Hr5JllS.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Shino",
    img: "Hr5HgP2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Musashi",
    img: "Hr5HFG2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen", "crafters", "no_guild" ],
	  school: [ "kudan", "no_school" ],
    },
  },
  {
    name: "Amatsumara",
    img: "HrRpjae.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Durga",
    img: "HrRy7VV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Tetsuox",
    img: "Hr5JADG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Shuichi",
    img: "Hr5HLAu.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Suzuka",
    img: "Hr5J9cP.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Tajikarao",
    img: "Hr5JdHF.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Gyobu",
    img: "HrRy4Wl.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Gyumao",
    img: "HrRy6s2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Seth",
    img: "Hr5HSn4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Ebisu",
    img: "HrRyYiB.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Aegir",
    img: "HrRpEZl.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Arc",
    img: "HrRpkwx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Azathoth",
    img: "HrRp6cF.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Surtr",
    img: "Hr5HyKB.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Tanngrisnir",
    img: "Hr5JolI.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Gullinbursti",
    img: "HrRySOG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Takemaru",
    img: "Hr5J3Na.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Behemoth",
    img: "HrRpmPI.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Ziz",
    img: "Hr5JyXf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Mineaki",
    img: "Hr5HJjf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Tetsuya",
    img: "Hr5J5xf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Breke",
    img: "HrRy3Nf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Avarga",
    img: "HrRp4F1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Algernon",
    img: "HrRpVGS.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Ose",
    img: "Hr5Ha8F.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Oz",
    img: "Hr5H0ua.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tsukuyomi",
    img: "Hr5JhWx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku", "kabukicho" ],
    },
  },
  {
    name: "Korpokkur",
    img: "Hr59Xku.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "ojibo" ],
    },
  },
  {
    name: "Alp",
    img: "HrRphF9.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Leib",
    img: "Hr59U21.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Hephaestus",
    img: "HrRyDOb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Furufumi",
    img: "HrRyMOJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Hombre Tigre",
    img: "HrRyyWQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Arachne",
    img: "HrRpeuj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Goemon",
    img: "HrRyOlt.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Licho",
    img: "Hr59gYF.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Sanat Kumara",
    img: "Hr5Heus.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "game_masters" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Astaroth",
    img: "HrRpUMB.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Dagon",
    img: "HrRyTAb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Tomte",
    img: "Hr5JMOu.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Tezcatlipoca",
    img: "Hr5J7V4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Shennong",
    img: "Hr5HUMl.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers", "summoners" ],
	  school: [ "penitentia", "shinjuku" ],
    },
  },
  {
    name: "Yasuyori",
    img: "Hr5Js0N.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "yoyogi", "penitentia" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Jacob",
    img: "Hr59I1I.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Echo",
    img: "HrRycKP.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Heracles",
    img: "HrRybbj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Horus",
    img: "Hr59JqB.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Cthugha",
    img: "HrRyxSe.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Bael",
    img: "HrRpLAJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Leanan Sidhe",
    img: "Hr598rP.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators", "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Tanetomo",
    img: "Hr5JqVR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "nakano" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Daikoku",
    img: "HrRyuNj.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Teda",
    img: "Hr5JTRn.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Balor",
    img: "HrRpQwv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Nezha",
    img: "Hr5Hq37.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "The Hero",
    img: "Hr5JYil.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Orgus",
    img: "Hr5H73P.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sol",
    img: "Hr5HbMQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Nekros & Bacchus",
    img: "Hr5HK4S.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Kimun Kamui",
    img: "Hr59V29.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Yamasachihiko",
    img: "Hr5Jifp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Otohime",
    img: "Hr5Hcyg.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Cait Sith",
    img: "HrRyFt4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Tvastar",
    img: "Hr5JO0B.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Shiva",
    img: "Hr5HPS9.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Marduk",
    img: "Hr59b2t.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Bertro",
    img: "HrRyHSn.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Ellie",
    img: "HrRy0UF.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Itzamna",
    img: "Hr59osp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "MacRoich",
    img: "Hr59ihv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Yoritomo",
    img: "Hr5JLgI.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Mephistopheles",
    img: "Hr5HHTG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Babe Bunyan",
    img: "HrRps9a.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "ojibo" ],
    },
  },
  {
    name: "Volkh Vseslav",
    img: "Hr5JSOg.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Masanori",
    img: "Hr59pvn.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Akiha Gongen",
    img: "HrRpMn2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Kresnik",
    img: "Hr59Nhx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Tindalos",
    img: "Hr5JGRe.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Nodens",
    img: "Hr5Hnyu.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Fuxi",
    img: "HrRyVDv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sandayu",
    img: "Hr5HkwG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "no_school", "shinjuku", "kabukicho" ],
    },
  },
  {
    name: "Catoblepas",
    img: "HrRyfol.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Smoky God",
    img: "Hr5Jcf2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Oguchi Magami",
    img: "Hr5HIZx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Zhurong",
    img: "Hr5JpzG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wanderers" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Sarutahiko",
    img: "Hr5Hvtf.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Hotei",
    img: "Hr59d0P.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Wakan Tanka∞",
    img: "Hr5J4Wv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tangaroa∞",
    img: "Hr5JnKN.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Hermes",
    img: "HrRypzx.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Boogeyman",
    img: "HrRy2AG.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Barong",
    img: "HrRpDnp.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Enigma",
    img: "HrRyEHg.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Israfil",
    img: "Hr59nXR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tuaring",
    img: "Hr5JjiQ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Hecate",
    img: "HrRyt5u.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Perun",
    img: "Hr5HMnR.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Takeminakata",
    img: "Hr5JFDJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "no_guild" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Yoshito",
    img: "Hr5JZJt.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Ulaanbaatar",
    img: "Hr5JvJ1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "fire" ],
    },
  },
  {
    name: "Taishakuten",
    img: "Hr5J2Ag.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "∀Isaac",
    img: "Hr59Czv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gorozaemon",
    img: "HrRyeUX.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Jormungandr",
    img: "Hr595es.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Vapula",
    img: "Hr5J85F.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Ixbalanque",
    img: "Hr59zqN.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sphinx",
    img: "Hr5HmPV.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Kirito",
    img: "Hr59W7e.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders", "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Bigfoot",
    img: "HrRyd9s.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "entertainers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Simurgh",
    img: "Hr5HQwb.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Inaba",
    img: "Hr59qmJ.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Girimekra",
    img: "HrRyNfI.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus", "missionaries" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Hastur",
    img: "HrRyZJe.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Q'ursha",
    img: "Hr5HhFI.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Pazuzu",
    img: "Hr5HEZv.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Nobumichi",
    img: "Hr5HCve.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Amduscias",
    img: "HrRpw8u.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Oscar",
    img: "Hr5HYa1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gurangatch",
    img: "HrRyrx4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "fire" ],
    },
  },
  {
    name: "Yuma",
    img: "Hr5Jt5X.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Ahura Mazda",
    img: "HrRpavs.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Loki",
    img: "Hr594pa.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "penitentia", "no_school" ],
    },
  },
  {
    name: "Tianzun",
    img: "Hr5J0U7.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Beowulf",
    img: "HrRy9cX.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters", "no_guild" ],
	  school: [ "bukuro", "no_school" ],
    },
  },
  
/*****
* 2-STAR CHARACTERS
*****/

  {
    name: "Red Oni",
    img: "Hr5fG5B.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Oni",
    img: "Hr5fVb1.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Oni",
    img: "Hr5f0UQ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Oni",
    img: "Hr5fMOP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Oni",
    img: "Hr5fl0x.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Einherjar",
    img: "Hr5fBiG.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Einherjar",
    img: "Hr5fol4.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Einherjar",
    img: "Hr5fqVs.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Einherjar",
    img: "Hr5fnff.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Einherjar",
    img: "Hr5ffxn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Valkyrie",
    img: "Hr5Bl9V.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Valkyrie",
    img: "Hr5B1wP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Valkyrie",
    img: "Hr5Ba8Q.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Valkyrie",
    img: "Hr5B0AB.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Valkyrie",
    img: "Hr5BYcx.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Ruby Scaled Wyvern",
    img: "Hr5BZD7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Azure Scaled Wyvern",
    img: "Hr5BbVe.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Emerald Scaled Wyvern",
    img: "Hr5BLR2.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Gold Scaled Wyvern",
    img: "Hr5BDx9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Obsidian Scaled Wyvern",
    img: "Hr5BsHl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mobster",
    img: "Hr5fZdl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Mobster",
    img: "Hr5fDeS.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Mobster",
    img: "Hr5fs1f.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Mobster",
    img: "Hr5ft72.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Mobster",
    img: "Hr5fiqG.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mermaid",
    img: "Hr5q9Lu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Mermaid",
    img: "Hr5qd1j.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Mermaid",
    img: "Hr5fpI9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Mermaid",
    img: "Hr5qJqb.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Mermaid",
    img: "Hr5fbm7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Merman",
    img: "Hr5qfkB.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Merman",
    img: "Hr5qCI1.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Merman",
    img: "Hr5qFdQ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Merman",
    img: "Hr5qqmP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Merman",
    img: "Hr5q2rx.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Tribe",
    img: "Hr5qt6J.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Tribe",
    img: "Hr5qpvp.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Tribe",
    img: "Hr5qQCg.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Tribe",
    img: "Hr5qmaR.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Tribe",
    img: "Hr5qsZF.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Oni",
    img: "Hr5fEJV.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Deity",
    img: "Hr5q4yB.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Deity",
    img: "Hr5qij1.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Deity",
    img: "Hr5qgYQ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Deity",
    img: "Hr5qPTP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Deity",
    img: "Hr5qU3x.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Deity",
    img: "Hr5qrvV.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Baron",
    img: "Hr5fjsa.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Baron",
    img: "Hr5fO0v.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Baron",
    img: "Hr5fhWg.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Baron",
    img: "Hr5fNqJ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Baron",
    img: "Hr5fXzF.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Merman",
    img: "Hr5qK7V.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Mermaid",
    img: "Hr5fyXe.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Alchemist",
    img: "Hr5KkN9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Alchemist",
    img: "Hr5KUMb.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Alchemist",
    img: "Hr5KO9S.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Alchemist",
    img: "Hr5KSou.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Alchemist",
    img: "Hr5KwS2.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Alchemist",
    img: "Hr5KeA7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Trooper",
    img: "Hr5BIt9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Trooper",
    img: "Hr5BR6b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Trooper",
    img: "Hr5BxuS.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Trooper",
    img: "Hr5BAMu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Trooper",
    img: "Hr5Bo92.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Trooper",
    img: "Hr5Bzw7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Trooper",
    img: "Hr5Bune.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Trooper",
    img: "Hr5B7Fj.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Luchador",
    img: "Hr5BUVn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Luchador",
    img: "Hr5B6lf.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Luchador",
    img: "Hr5Bvtt.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Luchador",
    img: "Hr5B4KG.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Luchador",
    img: "Hr5BkNI.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Luchador",
    img: "Hr5BSoX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Luchador",
    img: "Hr5BgPs.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Luchador",
    img: "Hr5BPS4.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Yaksha",
    img: "Hr5CHUx.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Yaksha",
    img: "Hr5C3OB.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Yaksha",
    img: "Hr5ByKb.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Yaksha",
    img: "Hr5C2RV.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Yaksha",
    img: "Hr5Bmiu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Yaksha",
    img: "Hr5C9lj.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Yaksha",
    img: "Hr5CdHQ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Yaksha",
    img: "Hr5CFDP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Jiangshi",
    img: "Hr5fSeI.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Jiangshi",
    img: "Hr5f4Xn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Jiangshi",
    img: "Hr5fvJp.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Jiangshi",
    img: "Hr5frzX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Jiangshi",
    img: "Hr5fegR.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Tribe",
    img: "Hr5qZGa.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Tribe",
    img: "Hr5qb3v.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Tribe",
    img: "Hr5qyyN.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Giant",
    img: "Hr5fuO7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Giant",
    img: "Hr5fol4.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Giant",
    img: "Hr5fIJ2.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Giant",
    img: "Hr5f7Wu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Giant",
    img: "Hr5fxUl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Giant",
    img: "Hr5fTRS.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Giant",
    img: "Hr5fAb9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Giant",
    img: "Hr5fcfj.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Ciramantep",
    img: "Hr5fHSp.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Ciramantep",
    img: "Hr5f3Nt.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Ciramantep",
    img: "Hr5KyKv.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Ciramantep",
    img: "Hr5f2RI.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Ciramantep",
    img: "Hr5KmiJ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Ciramantep",
    img: "Hr5f9lR.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Ciramantep",
    img: "Hr5fdHN.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Ciramantep",
    img: "Hr5fFDX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Jiangshi",
    img: "Hr5f85N.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Jiangshi",
    img: "Hr5fUbt.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Jiangshi",
    img: "Hr5f6ss.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ranger",
    img: "Hr5qlQn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ranger",
    img: "Hr5qG4f.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ranger",
    img: "Hr5qaIt.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ranger",
    img: "Hr5qEEG.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ranger",
    img: "Hr5q7pI.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Ranger",
    img: "Hr5qchX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Ranger",
    img: "Hr5q1Bs.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Ranger",
    img: "Hr5qV24.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Alchemist",
    img: "Hr5Kvte.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Alchemist",
    img: "Hr5KgPj.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Nightgaunt",
    img: "Hr5qIEJ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Nightgaunt",
    img: "Hr5qR7p.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Nightgaunt",
    img: "Hr5qoLg.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Nightgaunt",
    img: "Hr5qA2R.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Nightgaunt",
    img: "Hr5qnhF.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Nightgaunt",
    img: "Hr5qzBa.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Nightgaunt",
    img: "Hr5qTrv.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Nightgaunt",
    img: "Hr5q5kN.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Agent",
    img: "Hr5K0ut.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Agent",
    img: "Hr5KhF4.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Agent",
    img: "Hr5K1wX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Agent",
    img: "Hr5KWPf.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Agent",
    img: "Hr5KVMG.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Agent",
    img: "Hr5KEtn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Agent",
    img: "Hr5KMns.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Agent",
    img: "Hr5Kjcl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Trickster",
    img: "Hr5B3nn.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Trickster",
    img: "Hr5BBa4.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Trickster",
    img: "Hr5BJjt.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Trickster",
    img: "Hr5BqFf.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Trickster",
    img: "Hr5BHuI.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Trickster",
    img: "Hr5BdZX.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Trickster",
    img: "Hr5BFGs.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Trickster",
    img: "Hr5BC8l.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Camouflager",
    img: "Hr5KLAP.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Camouflager",
    img: "Hr5KDog.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Camouflager",
    img: "Hr5KPSV.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Camouflager",
    img: "Hr5KZDF.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Camouflager",
    img: "Hr5K6cQ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Camouflager",
    img: "Hr5KsHB.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Camouflager",
    img: "Hr5KQN1.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Camouflager",
    img: "Hr5KbVa.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Sand Dragon",
    img: "Hr5qWYl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Wraith",
    img: "Hr5BWPa.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Wraith",
    img: "Hr5BwSR.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Wraith",
    img: "Hr5BMoF.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Wraith",
    img: "Hr5Bjcv.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Wraith",
    img: "Hr5BEt1.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Wraith",
    img: "Hr5BVMg.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Wraith",
    img: "Hr5BhKJ.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Wraith",
    img: "Hr5BO9p.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Senri",
    img: "Hr5qNj9.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Senri",
    img: "Hr5qvEb.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Senri",
    img: "Hr5qhpS.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Senri",
    img: "Hr5qkCu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Senri",
    img: "Hr5qXv2.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Senri",
    img: "Hr5qwT7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Senri",
    img: "Hr5qOQe.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Senri",
    img: "Hr5q84j.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  
/******
* 1-STAR CHARACTERS
******/

  {
    name: "Red Slime",
    img: "Hr5nXvR.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Slime",
    img: "Hr5nwTN.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Slime",
    img: "Hr5nV3J.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Slime",
    img: "Hr5nhpp.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Slime",
    img: "Hr5nG4a.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Devil",
    img: "Hr5CyXt.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Devil",
    img: "Hr5nJBn.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Devil",
    img: "Hr5CbmN.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Devil",
    img: "Hr5n9LX.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Devil",
    img: "Hr5CDep.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Fencer",
    img: "Hr5CO0b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Fencer",
    img: "Hr5Cvdx.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Fencer",
    img: "Hr5CNqu.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Fencer",
    img: "Hr5Cegj.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Fencer",
    img: "Hr5Cjse.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mage",
    img: "Hr5nnh7.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Ice Mage",
    img: "Hr5nzBe.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Earth Mage",
    img: "Hr5nCIS.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Light Mage",
    img: "Hr5noQ9.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Mage",
    img: "Hr5nqp2.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Wolf",
    img: "Hr5nvGn.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Wolf",
    img: "Hr5nU3G.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Wolf",
    img: "Hr5nOQt.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Wolf",
    img: "Hr5n84s.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Wolf",
    img: "Hr5nNjI.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ghost",
    img: "Hr5CLrJ.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ghost",
    img: "Hr5Ct7R.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ghost",
    img: "Hr5Ciqg.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ghost",
    img: "Hr5CZdv.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ghost",
    img: "Hr5C6LF.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Lucky Cat",
    img: "Hr5n7pV.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ninja",
    img: "Hr5CUmB.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ninja",
    img: "Hr5C4X1.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ninja",
    img: "Hr5CSeV.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ninja",
    img: "Hr5CrzP.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ninja",
    img: "Hr5C85Q.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Angel",
    img: "Hr5Cl0G.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Angel",
    img: "Hr5CXz7.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Angel",
    img: "Hr5C0gf.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Angel",
    img: "Hr5CVbS.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Angel",
    img: "Hr5CEJ4.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Maid",
    img: "Hr5nA2j.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Maid",
    img: "Hr5n5kQ.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Maid",
    img: "Hr5nTrb.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Maid",
    img: "Hr5nRYx.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Maid",
    img: "Hr5nIEu.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Pirate",
    img: "Hr5nlQ1.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Pirate",
    img: "Hr5nEEg.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Pirate",
    img: "Hr5nchP.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Pirate",
    img: "Hr5n1CF.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Pirate",
    img: "Hr5naTB.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Slime",
    img: "Hr5nWYv.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded D-Evil",
    img: "Hr5CpII.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Wolf",
    img: "Hr5nkCX.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Ghost",
    img: "Hr5Cs1a.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire-O'-Lantern",
    img: "Hr5nF2f.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water-O'-Lantern",
    img: "Hr5nfkl.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood-O'-Lantern",
    img: "Hr5n2rG.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether-O'-Lantern",
    img: "Hr5nK74.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether-O'-Lantern",
    img: "Hr5nd1s.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Angel",
    img: "Hr5CG5l.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Angel",
    img: "Hr5CMe2.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Angel",
    img: "Hr5ChX9.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },

/******
* UNRELEASED CHARACTERS
******/

  {
    name: "Lil' Salomon",
    img: "Hr5Fhp1.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Kyoma Mononobe",
    img: "Hr5FzBf.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Michael",
    img: "Hr5FGrQ.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Amaterasu",
    img: "Hr5FFdN.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Curren",
    img: "Hr5FqmX.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Odin",
    img: "Hr5FEEx.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Quantum",
    img: "Hr5FWYB.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Prometheus",
    img: "Hr0omJt.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Raven",
    img: "Hr0oDgI.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Yog-Sothoth",
    img: "Hr5FkCJ.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Thor",
    img: "Hr5FwTF.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fisher King",
    img: "Hr5FnXs.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Yukimura",
    img: "Hr5FvEv.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Witch of Orleans",
    img: "Hr5FoLG.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Mahakala",
    img: "Hr5F1Bj.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Ra Mu & Leviathan",
    img: "Hr5FXkP.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Black Storm",
    img: "Hr5FNhg.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Dagon (Raiders of the Lost Isle)",
    img: "Hr5Ffet.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Parvati",
    img: "Hr5FOQa.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Alberich",
    img: "Hr5F2gp.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Baal",
    img: "Hr5Fd1R.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fafnir",
    img: "Hr5FCIn.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Onamuchi",
    img: "Hr5FV2V.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Airavata",
    img: "Hr5FK7I.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fire Livestreamer",
    img: "Hr5FR7S.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Water Livestreamer",
    img: "Hr5Fchu.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Wood Livestreamer",
    img: "Hr5FTrl.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Aether Livestreamer",
    img: "Hr5FaIe.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Nether Livestreamer",
    img: "Hr5FI14.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Infernal Livestreamer",
    img: "Hr5FA22.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Valiant Livestreamer",
    img: "Hr5F5k7.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "World Livestreamer",
    img: "Hr5FlLb.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Fire Lucky Cat",
    img: "Hr5nsZ7.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Water Lucky Cat",
    img: "Hr5nijS.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Wood Lucky Cat",
    img: "Hr5nQn9.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Nether Lucky Cat",
    img: "Hr5nZGe.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
];

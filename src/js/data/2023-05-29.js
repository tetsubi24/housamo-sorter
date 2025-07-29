dataSetVersion = "2023-05-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to only sort through characters of certain rarities.",
    checked: true,
    sub: [
      { name: "★★★+", tooltip: "Characters that are named and/or have cards of at least ☆3 rarity.", key: "3+", checked: true },
	  { name: "★★", tooltip: "Mob characters that have cards of ☆2 rarity.", key: "2" },
	  { name: "★", tooltip: "Mob characters that have cards of ☆1 rarity.", key: "1" },
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
    tooltip: "Check this to remove the protagonist from sorting choices.",
	checked: true,
  },
  {
    name: "Remove Unreleased Characters",
    key: "unreleased",
    tooltip: "Check this to remove unreleased characters from sorting choices. May contain spoilers.",
	checked: true,
  }
];

dataSet[dataSetVersion].characterData = [

/******
* 3-STAR CHARACTERS
******/

  {
    name: "Protagonist",
    img: "3-star/icon_player01.gif",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  protag: true
    }
  },
  {
    name: "Shiro",
    img: "3-star/icon_shirou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    }
  },
  {
    name: "Kengo",
    img: "3-star/icon_kengo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    }
  },
  {
    name: "Ryota",
    img: "3-star/icon_ryouta01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Toji",
    img: "3-star/icon_touji01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku", "kiou" ],
    },
  },
  {
    name: "Oniwaka",
    img: "3-star/icon_oniwaka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Hanuman",
    img: "3-star/icon_hanuman01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Claude",
    img: "3-star/icon_claude01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Licht",
    img: "3-star/icon_licht01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Duo",
    img: "3-star/icon_duo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Maria",
    img: "3-star/icon_maria01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Christine",
    img: "3-star/icon_christine01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Moritaka",
    img: "3-star/icon_moritaka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Fenrir",
    img: "3-star/icon_fenrir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Ashigara",
    img: "3-star/icon_ashigara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Asterius",
    img: "3-star/icon_asterios01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Ganglie",
    img: "3-star/icon_gouryou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Ikutoshi",
    img: "3-star/icon_ikutoshi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Shinya",
    img: "3-star/icon_shinya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "missionaries", "invaders" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Kenta",
    img: "3-star/icon_kenta01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Kotaro",
    img: "3-star/icon_kotarou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Eita",
    img: "3-star/icon_eita01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Choji",
    img: "3-star/icon_chouji01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Jugo",
    img: "3-star/icon_juugo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Macan",
    img: "3-star/icon_magan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Ophion",
    img: "3-star/icon_ophion01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Temujin",
    img: "3-star/icon_temujin01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "kudan", "no_school" ],
    },
  },
  {
    name: "Garmr",
    img: "3-star/icon_garmr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Makara",
    img: "3-star/icon_makara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Azazel",
    img: "3-star/icon_azazel01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Cu Sith",
    img: "3-star/icon_cusith01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Gunzo",
    img: "3-star/icon_gunzou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Marchosias",
    img: "3-star/icon_marchosias01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Nobuharu",
    img: "3-star/icon_nobuharu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Kyuma",
    img: "3-star/icon_kyuuma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Kagutsuchi",
    img: "3-star/icon_kagutsuchi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "R-19",
    img: "3-star/icon_riku01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gabriel",
    img: "3-star/icon_gabriel01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Alice",
    img: "3-star/icon_alice01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Jambavan",
    img: "3-star/icon_jambavat01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers", "game_masters" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Lucifuge",
    img: "3-star/icon_lucifuge01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Hati",
    img: "3-star/icon_managarmr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Barguest",
    img: "3-star/icon_barguest01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "unknown" ],
    },
  },
  {
    name: "Bathym",
    img: "3-star/icon_bathym01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Kuniyoshi",
    img: "3-star/icon_kuniyoshi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Motosumi",
    img: "3-star/icon_motosumi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Kalki",
    img: "3-star/icon_kalki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Nomad",
    img: "3-star/icon_nomad01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Snow",
    img: "3-star/icon_snow01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Gandharva",
    img: "3-star/icon_gandharva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Nyarlathotep",
    img: "3-star/icon_nyarlathotep01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "entertainers", "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Shuten",
    img: "3-star/icon_shuten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Pollux",
    img: "3-star/icon_pollux01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Taurus Mask",
    img: "3-star/icon_taurus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Jiraiya",
    img: "3-star/icon_jiraiya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "gurus" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Andvari",
    img: "3-star/icon_andvari01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Yule",
    img: "3-star/icon_joul01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Ded",
    img: "3-star/icon_ded01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Babalon",
    img: "3-star/icon_harlot01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Ibaraki",
    img: "3-star/icon_ibaraki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Horkeu Kamui",
    img: "3-star/icon_horkeukamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Taromaiti",
    img: "3-star/icon_taromaiti01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Sitri",
    img: "3-star/icon_sitri01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tsathoggua",
    img: "3-star/icon_tuatgua01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Hogen",
    img: "3-star/icon_hougen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Zao",
    img: "3-star/icon_zaou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Chernobog",
    img: "3-star/icon_chernobog01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Melusine",
    img: "3-star/icon_melusine01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Zabaniyya",
    img: "3-star/icon_zabaniya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Arsalan",
    img: "3-star/icon_arslan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Ifrit",
    img: "3-star/icon_ifrit01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Hakumen",
    img: "3-star/icon_hakumen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Benten",
    img: "3-star/icon_benten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "nakano" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Ahab",
    img: "3-star/icon_ahab01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Typhon",
    img: "3-star/icon_typhon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
	  other: [ "viral" ],
    },
  },
  {
    name: "Jinn",
    img: "3-star/icon_jinn01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Xolotl",
    img: "3-star/icon_xolotl01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Tadatomo",
    img: "3-star/icon_tadatomo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "summoners" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Volos",
    img: "3-star/icon_volos01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Tangaroa",
    img: "3-star/icon_tangaroa01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Triton",
    img: "3-star/icon_triton01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Kijimuna",
    img: "3-star/icon_kijimuna01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Kurogane",
    img: "3-star/icon_kurogane01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Robinson",
    img: "3-star/icon_robinson01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Krampus",
    img: "3-star/icon_krampus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Agyo",
    img: "3-star/icon_agyou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "suidocho", "shinjuku" ],
    },
  },
  {
    name: "Aizen",
    img: "3-star/icon_aizen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons", "missionaries" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Wakan Tanka",
    img: "3-star/icon_wakantanka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Thunderbird",
    img: "3-star/icon_thunderbird01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Shino",
    img: "3-star/icon_shino01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Musashi",
    img: "3-star/icon_musashi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen", "crafters", "no_guild" ],
	  school: [ "kudan", "no_school" ],
    },
  },
  {
    name: "Amatsumara",
    img: "3-star/icon_amatsumara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Durga",
    img: "3-star/icon_durga01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  other: [ "mountain" ],
    },
  },
  {
    name: "Tetsuox",
    img: "3-star/icon_tetsugyuu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Shuichi",
    img: "3-star/icon_shuuichi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Suzuka",
    img: "3-star/icon_suzuka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Tajikarao",
    img: "3-star/icon_tadikarao01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Gyobu",
    img: "3-star/icon_gyoubu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Gyumao",
    img: "3-star/icon_gyuumaou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Seth",
    img: "3-star/icon_seth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Ebisu",
    img: "3-star/icon_ebisu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Aegir",
    img: "3-star/icon_aegir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Arc",
    img: "3-star/icon_arc01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Azathoth",
    img: "3-star/icon_azathoth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Surtr",
    img: "3-star/icon_surtr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
    },
  },
  {
    name: "Tanngrisnir",
    img: "3-star/icon_tanngrisnir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Gullinbursti",
    img: "3-star/icon_gullinbursti01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "setagaya", "shinjuku" ],
    },
  },
  {
    name: "Takemaru",
    img: "3-star/icon_takemaru01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Behemoth",
    img: "3-star/icon_behemoth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Ziz",
    img: "3-star/icon_ziz01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Mineaki",
    img: "3-star/icon_mineaki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Tetsuya",
    img: "3-star/icon_tetsuya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Breke",
    img: "3-star/icon_breke01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Avarga",
    img: "3-star/icon_avarga01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "yoyogi" ],
    },
  },
  {
    name: "Algernon",
    img: "3-star/icon_algernon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Ose",
    img: "3-star/icon_ose01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Oz",
    img: "3-star/icon_oz01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tsukuyomi",
    img: "3-star/icon_tsukuyomi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku", "kabukicho" ],
    },
  },
  {
    name: "Korpokkur",
    img: "3-star/icon_korpokkur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "ojibo" ],
    },
  },
  {
    name: "Alp",
    img: "3-star/icon_alp01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Leib",
    img: "3-star/icon_leib01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Hephaestus",
    img: "3-star/icon_hephaestus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
    },
  },
  {
    name: "Furufumi",
    img: "3-star/icon_furufumi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Hombre Tigre",
    img: "3-star/icon_hombretigre01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Arachne",
    img: "3-star/icon_aracne01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Goemon",
    img: "3-star/icon_goemon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Licho",
    img: "3-star/icon_licho01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Sanat Kumara",
    img: "3-star/icon_sanatkumara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "game_masters" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Astaroth",
    img: "3-star/icon_astaroth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Dagon",
    img: "3-star/icon_dagon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
    },
  },
  {
    name: "Tomte",
    img: "3-star/icon_tomte01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
    },
  },
  {
    name: "Tezcatlipoca",
    img: "3-star/icon_tezcatlipoca01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Shennong",
    img: "3-star/icon_shennong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers", "summoners" ],
	  school: [ "penitentia", "shinjuku" ],
    },
  },
  {
    name: "Yasuyori",
    img: "3-star/icon_yasuyori01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "yoyogi", "penitentia" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Jacob",
    img: "3-star/icon_jacob01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Echo",
    img: "3-star/icon_echo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Heracles",
    img: "3-star/icon_heracles01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Horus",
    img: "3-star/icon_horus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Cthugha",
    img: "3-star/icon_cthugha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Bael",
    img: "3-star/icon_bael01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Leanan Sidhe",
    img: "3-star/icon_leanansidhe01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators", "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Tanetomo",
    img: "3-star/icon_tanetomo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "nakano" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Daikoku",
    img: "3-star/icon_daikoku01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Teda",
    img: "3-star/icon_teda01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Balor",
    img: "3-star/icon_balor01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
    },
  },
  {
    name: "Nezha",
    img: "3-star/icon_nezha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "The Hero",
    img: "3-star/icon_thehero01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Orgus",
    img: "3-star/icon_orgus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sol",
    img: "3-star/icon_sol01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Nekros & Bacchus",
    img: "3-star/icon_nekros01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Kimun Kamui",
    img: "3-star/icon_kimunkamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
    },
  },
  {
    name: "Yamasachihiko",
    img: "3-star/icon_yamasachihiko01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Otohime",
    img: "3-star/icon_otohime01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Cait Sith",
    img: "3-star/icon_caitsith01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Tvastar",
    img: "3-star/icon_tvastar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Shiva",
    img: "3-star/icon_shiva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kudan" ],
    },
  },
  {
    name: "Marduk",
    img: "3-star/icon_marduk01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Bertro",
    img: "3-star/icon_bertro01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Ellie",
    img: "3-star/icon_ellie01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Itzamna",
    img: "3-star/icon_itzamna01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "MacRoich",
    img: "3-star/icon_macroich01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "bukuro" ],
    },
  },
  {
    name: "Yoritomo",
    img: "3-star/icon_yoritomo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Mephistopheles",
    img: "3-star/icon_mephistopheles01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Babe Bunyan",
    img: "3-star/icon_babebunyan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "ojibo" ],
    },
  },
  {
    name: "Volkh Vseslav",
    img: "3-star/icon_volkh01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Masanori",
    img: "3-star/icon_masanori01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Akiha Gongen",
    img: "3-star/icon_akihagongen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Kresnik",
    img: "3-star/icon_kresnik01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
    },
  },
  {
    name: "Tindalos",
    img: "3-star/icon_tindalos01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Nodens",
    img: "3-star/icon_nodens01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "wisemen" ],
	  school: [ "togo" ],
    },
  },
  {
    name: "Fuxi",
    img: "3-star/icon_fuxi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sandayu",
    img: "3-star/icon_sandayu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "no_school", "shinjuku", "kabukicho" ],
    },
  },
  {
    name: "Catoblepas",
    img: "3-star/icon_catoblepas01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Smoky God",
    img: "3-star/icon_thesmokygod01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Oguchi Magami",
    img: "3-star/icon_oguchimagami01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
    },
  },
  {
    name: "Zhurong",
    img: "3-star/icon_zhurong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wanderers" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Sarutahiko",
    img: "3-star/icon_sarutahiko01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Hotei",
    img: "3-star/icon_hotei01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Wakan Tanka∞",
    img: "3-star/icon_wakantankamugen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tangaroa∞",
    img: "3-star/icon_tangaroamugen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Hermes",
    img: "3-star/icon_hermes01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Boogeyman",
    img: "3-star/icon_boogeyman01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Barong",
    img: "3-star/icon_barong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "Enigma",
    img: "3-star/icon_enigma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Israfil",
    img: "3-star/icon_israfil01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Tuaring",
    img: "3-star/icon_tuaring01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Hecate",
    img: "3-star/icon_hekate01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Perun",
    img: "3-star/icon_perun01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
    },
  },
  {
    name: "Takeminakata",
    img: "3-star/icon_takeminakata01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "no_guild" ],
	  school: [ "roppongi" ],
    },
  },
  {
    name: "Yoshito",
    img: "3-star/icon_yoshito01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Ulaanbaatar",
    img: "3-star/icon_ulaanbaatar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "fire" ],
    },
  },
  {
    name: "Taishakuten",
    img: "3-star/icon_taishakuten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "suidocho" ],
    },
  },
  {
    name: "∀Isaac",
    img: "3-star/icon_isaac01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gorozaemon",
    img: "3-star/icon_gorozaemon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Jormungandr",
    img: "3-star/icon_jormungandr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Vapula",
    img: "3-star/icon_vapula01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Ixbalanque",
    img: "3-star/icon_ixbalanque01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Sphinx",
    img: "3-star/icon_sphinx01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "akihabara" ],
    },
  },
  {
    name: "Kirito",
    img: "3-star/icon_kirito_zero01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders", "no_guild" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Bigfoot",
    img: "3-star/icon_bigfoot01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "entertainers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Simurgh",
    img: "3-star/icon_simurgh01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Inaba",
    img: "3-star/icon_inaba01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
    },
  },
  {
    name: "Girimekra",
    img: "3-star/icon_girimekra01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus", "missionaries" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Hastur",
    img: "3-star/icon_hastur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Q'ursha",
    img: "3-star/icon_qursha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Pazuzu",
    img: "3-star/icon_pazuzu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Nobumichi",
    img: "3-star/icon_nobumichi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
    },
  },
  {
    name: "Amduscias",
    img: "3-star/icon_amduscias01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
    },
  },
  {
    name: "Oscar",
    img: "3-star/icon_oscar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Gurangatch",
    img: "3-star/icon_gurangatch01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "fire" ],
    },
  },
  {
    name: "Yuma",
    img: "3-star/icon_yuma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
    },
  },
  {
    name: "Ahura Mazda",
    img: "3-star/icon_ahuramazda01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
    },
  },
  {
    name: "Loki",
    img: "3-star/icon_loki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "penitentia", "no_school" ],
    },
  },
  {
    name: "Tianzun",
    img: "3-star/icon_tianzun01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
    },
  },
  {
    name: "Beowulf",
    img: "3-star/icon_beowulf01.png",
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
    img: "2-star/icon_goblinfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Oni",
    img: "2-star/icon_goblinwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Oni",
    img: "2-star/icon_goblinearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Oni",
    img: "2-star/icon_goblinlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Oni",
    img: "2-star/icon_goblindark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Einherjar",
    img: "2-star/icon_einherjarfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Einherjar",
    img: "2-star/icon_einherjarwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Einherjar",
    img: "2-star/icon_einherjarearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Einherjar",
    img: "2-star/icon_einherjarlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Einherjar",
    img: "2-star/icon_einherjardark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Valkyrie",
    img: "2-star/icon_valkyriefire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Valkyrie",
    img: "2-star/icon_valkyriewater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Valkyrie",
    img: "2-star/icon_valkyrieearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Valkyrie",
    img: "2-star/icon_valkyrielight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Valkyrie",
    img: "2-star/icon_valkyriedark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Ruby Scaled Wyvern",
    img: "2-star/icon_wyvernfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Azure Scaled Wyvern",
    img: "2-star/icon_wyvernwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Emerald Scaled Wyvern",
    img: "2-star/icon_wyvernearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Gold Scaled Wyvern",
    img: "2-star/icon_wyvernlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Obsidian Scaled Wyvern",
    img: "2-star/icon_wyverndark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mobster",
    img: "2-star/icon_kurohukufire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Mobster",
    img: "2-star/icon_kurohukuwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Mobster",
    img: "2-star/icon_kurohukuearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Mobster",
    img: "2-star/icon_kurohukulight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Mobster",
    img: "2-star/icon_kurohukudark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mermaid",
    img: "2-star/icon_mermaidfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Mermaid",
    img: "2-star/icon_mermaidwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Mermaid",
    img: "2-star/icon_mermaidearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Mermaid",
    img: "2-star/icon_mermaidlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Mermaid",
    img: "2-star/icon_mermaiddark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Merman",
    img: "2-star/icon_mermanfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Merman",
    img: "2-star/icon_mermanwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Merman",
    img: "2-star/icon_mermanearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Merman",
    img: "2-star/icon_mermanlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Merman",
    img: "2-star/icon_mermandark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Tribe",
    img: "2-star/icon_tribefire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Tribe",
    img: "2-star/icon_tribewater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Tribe",
    img: "2-star/icon_tribeearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Tribe",
    img: "2-star/icon_tribelight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Tribe",
    img: "2-star/icon_tribedark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Oni",
    img: "2-star/icon_goblinevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Deity",
    img: "2-star/icon_tenjinfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Deity",
    img: "2-star/icon_tenjinwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Deity",
    img: "2-star/icon_tenjinearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Deity",
    img: "2-star/icon_tenjinlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Deity",
    img: "2-star/icon_tenjindark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Deity",
    img: "2-star/icon_tenjinevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Baron",
    img: "2-star/icon_governerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Baron",
    img: "2-star/icon_governerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Baron",
    img: "2-star/icon_governerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Baron",
    img: "2-star/icon_governerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Baron",
    img: "2-star/icon_governerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Merman",
    img: "2-star/icon_mermanevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Mermaid",
    img: "2-star/icon_mermaidevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Alchemist",
    img: "2-star/icon_alchemistfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Alchemist",
    img: "2-star/icon_alchemistwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Alchemist",
    img: "2-star/icon_alchemistearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Alchemist",
    img: "2-star/icon_alchemistlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Alchemist",
    img: "2-star/icon_alchemistdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Alchemist",
    img: "2-star/icon_alchemistevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Trooper",
    img: "2-star/icon_trooperfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Trooper",
    img: "2-star/icon_trooperwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Trooper",
    img: "2-star/icon_trooperearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Trooper",
    img: "2-star/icon_trooperlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Trooper",
    img: "2-star/icon_trooperdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Trooper",
    img: "2-star/icon_trooperevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Trooper",
    img: "2-star/icon_trooperhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Trooper",
    img: "2-star/icon_trooperworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Luchador",
    img: "2-star/icon_wrestlerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Luchador",
    img: "2-star/icon_wrestlerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Luchador",
    img: "2-star/icon_wrestlerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Luchador",
    img: "2-star/icon_wrestlerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Luchador",
    img: "2-star/icon_wrestlerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Luchador",
    img: "2-star/icon_wrestlerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Luchador",
    img: "2-star/icon_wrestlerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Luchador",
    img: "2-star/icon_wrestlerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Yaksha",
    img: "2-star/icon_yakshafire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Yaksha",
    img: "2-star/icon_yakshawater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Yaksha",
    img: "2-star/icon_yakshaearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Yaksha",
    img: "2-star/icon_yakshalight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Yaksha",
    img: "2-star/icon_yakshadark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Yaksha",
    img: "2-star/icon_yakshaevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Yaksha",
    img: "2-star/icon_yakshahero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Yaksha",
    img: "2-star/icon_yakshaworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Jiangshi",
    img: "2-star/icon_jiangshifire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Jiangshi",
    img: "2-star/icon_jiangshiwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Jiangshi",
    img: "2-star/icon_jiangshiearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Jiangshi",
    img: "2-star/icon_jiangshilight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Jiangshi",
    img: "2-star/icon_jiangshidark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Tribe",
    img: "2-star/icon_tribeevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Tribe",
    img: "2-star/icon_tribehero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Tribe",
    img: "2-star/icon_tribeworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Giant",
    img: "2-star/icon_giantfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Giant",
    img: "2-star/icon_giantwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Giant",
    img: "2-star/icon_giantearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Giant",
    img: "2-star/icon_giantlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Giant",
    img: "2-star/icon_giantdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Giant",
    img: "2-star/icon_giantevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Giant",
    img: "2-star/icon_gianthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Giant",
    img: "2-star/icon_giantworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Ciramantep",
    img: "2-star/icon_ciramantepfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Ciramantep",
    img: "2-star/icon_ciramantepwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Ciramantep",
    img: "2-star/icon_ciramantepearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Ciramantep",
    img: "2-star/icon_ciramanteplight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Ciramantep",
    img: "2-star/icon_ciramantepdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Ciramantep",
    img: "2-star/icon_ciramantepevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Ciramantep",
    img: "2-star/icon_ciramantephero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Ciramantep",
    img: "2-star/icon_ciramantepworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Jiangshi",
    img: "2-star/icon_jiangshievil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Jiangshi",
    img: "2-star/icon_jiangshihero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Jiangshi",
    img: "2-star/icon_jiangshiworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ranger",
    img: "2-star/icon_rangerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ranger",
    img: "2-star/icon_rangerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ranger",
    img: "2-star/icon_rangerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ranger",
    img: "2-star/icon_rangerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ranger",
    img: "2-star/icon_rangerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Ranger",
    img: "2-star/icon_rangerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Ranger",
    img: "2-star/icon_rangerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Ranger",
    img: "2-star/icon_rangerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Alchemist",
    img: "2-star/icon_alchemisthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Alchemist",
    img: "2-star/icon_alchemistworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Nightgaunt",
    img: "2-star/icon_nightgauntfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Nightgaunt",
    img: "2-star/icon_nightgauntwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Nightgaunt",
    img: "2-star/icon_nightgauntearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Nightgaunt",
    img: "2-star/icon_nightgauntlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Nightgaunt",
    img: "2-star/icon_nightgauntdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Nightgaunt",
    img: "2-star/icon_nightgauntevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Nightgaunt",
    img: "2-star/icon_nightgaunthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Nightgaunt",
    img: "2-star/icon_nightgauntworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Agent",
    img: "2-star/icon_agentfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Agent",
    img: "2-star/icon_agentwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Agent",
    img: "2-star/icon_agentearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Agent",
    img: "2-star/icon_agentlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Agent",
    img: "2-star/icon_agentdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Black Agent",
    img: "2-star/icon_agentevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Agent",
    img: "2-star/icon_agenthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Agent",
    img: "2-star/icon_agentworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Trickster",
    img: "2-star/icon_tricksterfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Trickster",
    img: "2-star/icon_tricksterwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Trickster",
    img: "2-star/icon_tricksterearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Trickster",
    img: "2-star/icon_tricksterlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Trickster",
    img: "2-star/icon_tricksterdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Trickster",
    img: "2-star/icon_tricksterevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Trickster",
    img: "2-star/icon_tricksterhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Trickster",
    img: "2-star/icon_tricksterworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Camouflager",
    img: "2-star/icon_camouflagerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Camouflager",
    img: "2-star/icon_camouflagerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Camouflager",
    img: "2-star/icon_camouflagerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Camouflager",
    img: "2-star/icon_camouflagerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Camouflager",
    img: "2-star/icon_camouflagerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Camouflager",
    img: "2-star/icon_camouflagerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "White Camouflager",
    img: "2-star/icon_camouflagerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Brown Camouflager",
    img: "2-star/icon_camouflagerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Sand Dragon",
    img: "2-star/icon_sanddragon01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Wraith",
    img: "2-star/icon_wraithfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Wraith",
    img: "2-star/icon_wraithwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Wraith",
    img: "2-star/icon_wraithearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Wraith",
    img: "2-star/icon_wraithlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Wraith",
    img: "2-star/icon_wraithdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Wraith",
    img: "2-star/icon_wraithevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Wraith",
    img: "2-star/icon_wraithhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Wraith",
    img: "2-star/icon_wraithworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Senri",
    img: "2-star/icon_senrifire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Senri",
    img: "2-star/icon_senriwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Senri",
    img: "2-star/icon_senriearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Senri",
    img: "2-star/icon_senrilight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Senri",
    img: "2-star/icon_senridark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Senri",
    img: "2-star/icon_senrievil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Senri",
    img: "2-star/icon_senrihero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Senri",
    img: "2-star/icon_senriworld01b.png",
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
    img: "1-star/icon_slimefire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Slime",
    img: "1-star/icon_slimewater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Slime",
    img: "1-star/icon_slimeearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Slime",
    img: "1-star/icon_slimelight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Slime",
    img: "1-star/icon_slimedark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Devil",
    img: "1-star/icon_impfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Devil",
    img: "1-star/icon_impwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Devil",
    img: "1-star/icon_impearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Devil",
    img: "1-star/icon_implight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Devil",
    img: "1-star/icon_impdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Fencer",
    img: "1-star/icon_fighterfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Fencer",
    img: "1-star/icon_fighterwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Fencer",
    img: "1-star/icon_fighterearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Fencer",
    img: "1-star/icon_fighterlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Fencer",
    img: "1-star/icon_fighterdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Mage",
    img: "1-star/icon_magefire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Ice Mage",
    img: "1-star/icon_magewater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Earth Mage",
    img: "1-star/icon_mageearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Light Mage",
    img: "1-star/icon_magelight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Dark Mage",
    img: "1-star/icon_magedark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Wolf",
    img: "1-star/icon_werewolffire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Wolf",
    img: "1-star/icon_werewolfwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Wolf",
    img: "1-star/icon_werewolfearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Wolf",
    img: "1-star/icon_werewolflight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Wolf",
    img: "1-star/icon_werewolfdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ghost",
    img: "1-star/icon_ghostfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ghost",
    img: "1-star/icon_ghostwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ghost",
    img: "1-star/icon_ghostearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ghost",
    img: "1-star/icon_ghostlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ghost",
    img: "1-star/icon_ghostdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Lucky Cat",
    img: "1-star/icon_manekilight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Red Ninja",
    img: "1-star/icon_geninfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Blue Ninja",
    img: "1-star/icon_geninwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Green Ninja",
    img: "1-star/icon_geninearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Yellow Ninja",
    img: "1-star/icon_geninlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Purple Ninja",
    img: "1-star/icon_genindark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Angel",
    img: "1-star/icon_angelfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Angel",
    img: "1-star/icon_angelwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Angel",
    img: "1-star/icon_angelearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Angel",
    img: "1-star/icon_angellight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Angel",
    img: "1-star/icon_angeldark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Maid",
    img: "1-star/icon_maidfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Maid",
    img: "1-star/icon_maidwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Maid",
    img: "1-star/icon_maidearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Maid",
    img: "1-star/icon_maidlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Maid",
    img: "1-star/icon_maiddark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire Pirate",
    img: "1-star/icon_piratesfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Pirate",
    img: "1-star/icon_pirateswater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Pirate",
    img: "1-star/icon_piratesearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Pirate",
    img: "1-star/icon_pirateslight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Pirate",
    img: "1-star/icon_piratesdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Slime",
    img: "1-star/icon_slimeevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded D-Evil",
    img: "1-star/icon_impevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Wolf",
    img: "1-star/icon_werewolfevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Shaded Ghost",
    img: "1-star/icon_ghostevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Fire-O'-Lantern",
    img: "1-star/icon_lanternfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water-O'-Lantern",
    img: "1-star/icon_lanternwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood-O'-Lantern",
    img: "1-star/icon_lanternearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether-O'-Lantern",
    img: "1-star/icon_lanternlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether-O'-Lantern",
    img: "1-star/icon_lanterndark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Angel",
    img: "1-star/icon_angelevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Angel",
    img: "1-star/icon_angelhero01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Angel",
    img: "1-star/icon_angelworld01b.png",
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
    img: "unreleased/icon_salomon01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Kyoma Mononobe",
    img: "3-star/icon_kyouma01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Michael",
    img: "3-star/icon_michael01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Amaterasu",
    img: "3-star/icon_amaterasu01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Curren",
    img: "3-star/icon_curren01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Odin",
    img: "unreleased/icon_odin01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Quantum",
    img: "3-star/icon_quantum01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Prometheus",
    img: "3-star/icon_prometheus01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Raven",
    img: "3-star/icon_ravenarthur01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Yog-Sothoth",
    img: "unreleased/icon_yogsothoth02.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Thor",
    img: "unreleased/icon_thor02b.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fisher King",
    img: "unreleased/icon_fisher02b.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Yukimura",
    img: "unreleased/icon_yukimura02_skin1.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Witch of Orleans",
    img: "unreleased/icon_jeanne02b.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Mahakala",
    img: "unreleased/icon_mahakala02.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Ra Mu & Leviathan",
    img: "unreleased/icon_ramu01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Black Storm",
    img: "unreleased/icon_typhoeus02.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Dagon (Raiders of the Lost Isle)",
    img: "alts/icon_dagon01_skin1.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Parvati",
    img: "unreleased/icon_yamanomusume01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Alberich",
    img: "3-star/icon_alberich01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Baal",
    img: "unreleased/icon_bael01_skin3.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fafnir",
    img: "alts/icon_fafnir01_skin1.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Onamuchi",
    img: "unreleased/icon_onamuji01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Airavata",
    img: "unreleased/icon_airavata01.png",
    opts: {
      rarity: [ "3+" ],		
	  unreleased: true
    }
  },
  {
    name: "Fire Livestreamer",
    img: "2-star/icon_livestreamerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Water Livestreamer",
    img: "2-star/icon_livestreamerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Wood Livestreamer",
    img: "2-star/icon_livestreamerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Aether Livestreamer",
    img: "2-star/icon_livestreamerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Nether Livestreamer",
    img: "2-star/icon_livestreamerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Infernal Livestreamer",
    img: "2-star/icon_livestreamerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Valiant Livestreamer",
    img: "2-star/icon_livestreamerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "World Livestreamer",
    img: "2-star/icon_livestreamerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Fire Lucky Cat",
    img: "unreleased/icon_manekifire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Water Lucky Cat",
    img: "unreleased/icon_manekiwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Wood Lucky Cat",
    img: "unreleased/icon_manekiearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
  {
    name: "Nether Lucky Cat",
    img: "unreleased/icon_manekidark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  unreleased: true
    }
  },
];

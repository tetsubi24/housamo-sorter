dataSetVersion = "2023-07-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
	  { name: "Tokyo Fire and Disaster Management University", tooltip: " ", key: "fire" },
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
    name: "Filter by World",
    key: "world",
    tooltip: "Check this to only sort through characters from certain worlds.",
    checked: false,
    sub: [
      { name: "Takamagahara", tooltip: " ", key: "takamagahara" },
	  { name: "Land of Wa", tooltip: "Also known as Wa no Kuni.", key: "land_of_wa" },
	  { name: "Kamui Kotan", tooltip: "Also known as Kamuy Kotan.", key: "kamuy_kotan" },
	  { name: "Penglai", tooltip: "Also known as Hourai.", key: "hourai" },
	  { name: "Midearth", tooltip: "Also known as Garo Demana or Garothman.", key: "garo_demana" },
	  { name: "Devaloka", tooltip: "Also known as Deva Loka.", key: "deva_loka" },
	  { name: "Nirai Kanai", tooltip: " ", key: "nirai_kanai" },
	  { name: "Oceanic Realm", tooltip: " ", key: "oceanic_realm" },
	  { name: "Xanadu", tooltip: " ", key: "xanadu" },
	  { name: "Shangri-La", tooltip: "Also known as Shangri La.", key: "shangri_la" },
	  { name: "Yggdrasil", tooltip: " ", key: "yggdrasil" },
	  { name: "Kitezh", tooltip: " ", key: "kitezh" },
	  { name: "Tir na Nog", tooltip: "Also known as Tír na nóg.", key: "tir_na_nog" },
	  { name: "Eden", tooltip: " ", key: "eden" },
	  { name: "Gehenna", tooltip: " ", key: "gehenna" },
	  { name: "Olympus", tooltip: " ", key: "olympus" },
	  { name: "Babilim", tooltip: " ", key: "babilim" },
	  { name: "Great Spirit", tooltip: " ", key: "great_spirit" },
	  { name: "El Dorado", tooltip: " ", key: "el_dorado" },
	  { name: "Aaru", tooltip: " ", key: "aaru" },
	  { name: "Old Ones", tooltip: " ", key: "old_ones" },
	  { name: "Heliopolis", tooltip: " ", key: "heliopolis" },
	  { name: "Utopia", tooltip: " ", key: "utopia" },
	  { name: "Canaan", tooltip: "Only Alternate Forms and Unreleased Characters are unique to this world.", key: "canaan" },
	  { name: "Tokyo", tooltip: " ", key: "tokyo" },
	  { name: "Unknown", tooltip: "Characters from unknown worlds.", key: "no_world" },
    ]
  },
  {
    name: "Remove Protagonist",
    key: "protag",
    tooltip: "Check this to remove the protagonist from sorting choices.",
	checked: true,
  },
  {
    name: "Remove Alternate Forms",
    key: "alt",
    tooltip: "Check this to remove certain alternate forms (e.g., Astarte, Wen Kamui) from sorting choices.",
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
	  world: [ "no_world" ],
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
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Kengo",
    img: "3-star/icon_kengo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Ryota",
    img: "3-star/icon_ryouta01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Toji",
    img: "3-star/icon_touji01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku", "kiou" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Oniwaka",
    img: "3-star/icon_oniwaka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Hanuman",
    img: "3-star/icon_hanuman01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "umamichi" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Claude",
    img: "3-star/icon_claude01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Licht",
    img: "3-star/icon_licht01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Duo",
    img: "3-star/icon_duo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Maria",
    img: "3-star/icon_maria01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Christine",
    img: "3-star/icon_christine01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
	  world: [ "no_world", "tokyo" ],
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
	  world: [ "land_of_wa" ],
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
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Ashigara",
    img: "3-star/icon_ashigara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Asterius",
    img: "3-star/icon_asterios01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Ganglie",
    img: "3-star/icon_gouryou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Ikutoshi",
    img: "3-star/icon_ikutoshi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Shinya",
    img: "3-star/icon_shinya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "missionaries", "invaders" ],
	  school: [ "daikanyama" ],
	  world: [ "tokyo", "olympus" ],
    },
  },
  {
    name: "Kenta",
    img: "3-star/icon_kenta01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "tokyo", "land_of_wa" ],
    },
  },
  {
    name: "Kotaro",
    img: "3-star/icon_kotarou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "no_school" ],
	  world: [ "tokyo", "land_of_wa" ],
    },
  },
  {
    name: "Eita",
    img: "3-star/icon_eita01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Choji",
    img: "3-star/icon_chouji01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "shinjuku" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Jugo",
    img: "3-star/icon_juugo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
	  world: [ "tokyo", "takamagahara" ],
    },
  },
  {
    name: "Macan",
    img: "3-star/icon_magan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "shangri_la" ],
    },
  },
  {
    name: "Ophion",
    img: "3-star/icon_ophion01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Temujin",
    img: "3-star/icon_temujin01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "kudan", "no_school" ],
	  world: [ "xanadu" ],
    },
  },
  {
    name: "Garmr",
    img: "3-star/icon_garmr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Makara",
    img: "3-star/icon_makara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Azazel",
    img: "3-star/icon_azazel01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "eden" ],
    },
  },
  {
    name: "Cu Sith",
    img: "3-star/icon_cusith01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Gunzo",
    img: "3-star/icon_gunzou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo", "gehenna" ],
    },
  },
  {
    name: "Marchosias",
    img: "3-star/icon_marchosias01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "no_school" ],
	  world: [ "gehenna", "eden" ],
    },
  },
  {
    name: "Nobuharu",
    img: "3-star/icon_nobuharu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Kyuma",
    img: "3-star/icon_kyuuma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo", "eden" ],
    },
  },
  {
    name: "Kagutsuchi",
    img: "3-star/icon_kagutsuchi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "R-19",
    img: "3-star/icon_riku01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "no_school" ],
	  world: [ "utopia" ],
    },
  },
  {
    name: "Gabriel",
    img: "3-star/icon_gabriel01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "eden" ],
    },
  },
  {
    name: "Alice",
    img: "3-star/icon_alice01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters" ],
	  school: [ "no_school" ],
	  world: [ "no_world", "tokyo" ],
    },
  },
  {
    name: "Jambavan",
    img: "3-star/icon_jambavat01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers", "game_masters" ],
	  school: [ "ueno" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Lucifuge",
    img: "3-star/icon_lucifuge01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Hati",
    img: "3-star/icon_managarmr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Barguest",
    img: "3-star/icon_barguest01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "unknown" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Bathym",
    img: "3-star/icon_bathym01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Kuniyoshi",
    img: "3-star/icon_kuniyoshi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Motosumi",
    img: "3-star/icon_motosumi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "tokyo", "land_of_wa" ],
    },
  },
  {
    name: "Kalki",
    img: "3-star/icon_kalki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Nomad",
    img: "3-star/icon_nomad01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "utopia" ],
    },
  },
  {
    name: "Snow",
    img: "3-star/icon_snow01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "shangri_la", "hourai", "deva_loka" ],
    },
  },
  {
    name: "Gandharva",
    img: "3-star/icon_gandharva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Nyarlathotep",
    img: "3-star/icon_nyarlathotep01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "entertainers", "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Shuten",
    img: "3-star/icon_shuten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Pollux",
    img: "3-star/icon_pollux01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Taurus Mask",
    img: "3-star/icon_taurus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Jiraiya",
    img: "3-star/icon_jiraiya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "gurus" ],
	  school: [ "nakano" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Andvari",
    img: "3-star/icon_andvari01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Yule",
    img: "3-star/icon_joul01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Ded",
    img: "3-star/icon_ded01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Babalon",
    img: "3-star/icon_harlot01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
	  world: [ "eden" ],
    },
  },
  {
    name: "Ibaraki",
    img: "3-star/icon_ibaraki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Horkeu Kamui",
    img: "3-star/icon_horkeukamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "kamuy_kotan" ],
    },
  },
  {
    name: "Taromaiti",
    img: "3-star/icon_taromaiti01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "Sitri",
    img: "3-star/icon_sitri01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Tsathoggua",
    img: "3-star/icon_tuatgua01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Hogen",
    img: "3-star/icon_hougen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
	  world: [ "land_of_wa" ],
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
	  world: [ "land_of_wa" ],
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
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Melusine",
    img: "3-star/icon_melusine01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Zabaniyya",
    img: "3-star/icon_zabaniya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Arsalan",
    img: "3-star/icon_arslan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "garo_demana" ],
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
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "Hakumen",
    img: "3-star/icon_hakumen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "hourai", "land_of_wa", "deva_loka" ],
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
	  world: [ "deva_loka", "land_of_wa" ],
    },
  },
  {
    name: "Ahab",
    img: "3-star/icon_ahab01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "eden" ],
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
	  world: [ "olympus" ],
    },
  },
  {
    name: "Jinn",
    img: "3-star/icon_jinn01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "Xolotl",
    img: "3-star/icon_xolotl01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "el_dorado" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Volos",
    img: "3-star/icon_volos01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Tangaroa",
    img: "3-star/icon_tangaroa01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    },
  },
  {
    name: "Triton",
    img: "3-star/icon_triton01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Kijimuna",
    img: "3-star/icon_kijimuna01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
	  world: [ "nirai_kanai" ],
    },
  },
  {
    name: "Kurogane",
    img: "3-star/icon_kurogane01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Robinson",
    img: "3-star/icon_robinson01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya", "shinjuku" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Krampus",
    img: "3-star/icon_krampus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Agyo",
    img: "3-star/icon_agyou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "suidocho", "shinjuku" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Aizen",
    img: "3-star/icon_aizen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons", "missionaries" ],
	  school: [ "roppongi" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Wakan Tanka",
    img: "3-star/icon_wakantanka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "yoyogi" ],
	  world: [ "great_spirit" ],
    },
  },
  {
    name: "Thunderbird",
    img: "3-star/icon_thunderbird01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "suidocho" ],
	  world: [ "great_spirit" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Musashi",
    img: "3-star/icon_musashi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen", "crafters", "no_guild" ],
	  school: [ "kudan", "no_school" ],
	  world: [ "tokyo", "land_of_wa" ],
    },
  },
  {
    name: "Amatsumara",
    img: "3-star/icon_amatsumara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
	  world: [ "takamagahara" ],
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
	  world: [ "deva_loka", "shangri_la" ],
    },
  },
  {
    name: "Tetsuox",
    img: "3-star/icon_tetsugyuu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "umamichi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Shuichi",
    img: "3-star/icon_shuuichi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen" ],
	  school: [ "togo" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Suzuka",
    img: "3-star/icon_suzuka01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Tajikarao",
    img: "3-star/icon_tadikarao01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Gyobu",
    img: "3-star/icon_gyoubu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Gyumao",
    img: "3-star/icon_gyuumaou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Seth",
    img: "3-star/icon_seth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "roppongi" ],
	  world: [ "aaru" ],
    },
  },
  {
    name: "Ebisu",
    img: "3-star/icon_ebisu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "takamagahara", "land_of_wa" ],
    },
  },
  {
    name: "Aegir",
    img: "3-star/icon_aegir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Arc",
    img: "3-star/icon_arc01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Azathoth",
    img: "3-star/icon_azathoth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
	  world: [ "old_ones", "tokyo" ],
    },
  },
  {
    name: "Surtr",
    img: "3-star/icon_surtr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders" ],
	  school: [ "fujimi" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Tanngrisnir",
    img: "3-star/icon_tanngrisnir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Gullinbursti",
    img: "3-star/icon_gullinbursti01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "setagaya", "shinjuku" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Takemaru",
    img: "3-star/icon_takemaru01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Behemoth",
    img: "3-star/icon_behemoth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "gehenna", "eden" ],
    },
  },
  {
    name: "Ziz",
    img: "3-star/icon_ziz01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "gehenna", "eden" ],
    },
  },
  {
    name: "Mineaki",
    img: "3-star/icon_mineaki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Tetsuya",
    img: "3-star/icon_tetsuya01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "suidocho" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Breke",
    img: "3-star/icon_breke01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "utopia", "yggdrasil" ],
    },
  },
  {
    name: "Avarga",
    img: "3-star/icon_avarga01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "yoyogi" ],
	  world: [ "xanadu" ],
    },
  },
  {
    name: "Algernon",
    img: "3-star/icon_algernon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "utopia" ],
    },
  },
  {
    name: "Ose",
    img: "3-star/icon_ose01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "nakano" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Oz",
    img: "3-star/icon_oz01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Tsukuyomi",
    img: "3-star/icon_tsukuyomi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku", "kabukicho" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Korpokkur",
    img: "3-star/icon_korpokkur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "ojibo" ],
	  world: [ "kamuy_kotan" ],
    },
  },
  {
    name: "Alp",
    img: "3-star/icon_alp01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Leib",
    img: "3-star/icon_leib01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers", "entertainers" ],
	  school: [ "ueno" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Hephaestus",
    img: "3-star/icon_hephaestus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Furufumi",
    img: "3-star/icon_furufumi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Hombre Tigre",
    img: "3-star/icon_hombretigre01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
	  world: [ "el_dorado" ],
    },
  },
  {
    name: "Arachne",
    img: "3-star/icon_aracne01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "no_school" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Goemon",
    img: "3-star/icon_goemon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Licho",
    img: "3-star/icon_licho01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Sanat Kumara",
    img: "3-star/icon_sanatkumara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "game_masters" ],
	  school: [ "umamichi" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Astaroth",
    img: "3-star/icon_astaroth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Dagon",
    img: "3-star/icon_dagon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Tomte",
    img: "3-star/icon_tomte01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "tir_na_nog", "eden" ],
    },
  },
  {
    name: "Tezcatlipoca",
    img: "3-star/icon_tezcatlipoca01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
	  world: [ "el_dorado" ],
    },
  },
  {
    name: "Shennong",
    img: "3-star/icon_shennong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers", "summoners" ],
	  school: [ "penitentia", "shinjuku" ],
	  world: [ "hourai" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Jacob",
    img: "3-star/icon_jacob01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Echo",
    img: "3-star/icon_echo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Heracles",
    img: "3-star/icon_heracles01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kudan" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Horus",
    img: "3-star/icon_horus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "aaru" ],
    },
  },
  {
    name: "Cthugha",
    img: "3-star/icon_cthugha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Bael",
    img: "3-star/icon_bael01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Leanan Sidhe",
    img: "3-star/icon_leanansidhe01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators", "entertainers" ],
	  school: [ "nakano" ],
	  world: [ "tir_na_nog" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Daikoku",
    img: "3-star/icon_daikoku01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kiou" ],
	  world: [ "takamagahara", "land_of_wa" ],
    },
  },
  {
    name: "Teda",
    img: "3-star/icon_teda01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "nakano" ],
	  world: [ "nirai_kanai" ],
    },
  },
  {
    name: "Balor",
    img: "3-star/icon_balor01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Nezha",
    img: "3-star/icon_nezha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "umamichi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "The Hero",
    img: "3-star/icon_thehero01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil", "tokyo" ],
    },
  },
  {
    name: "Orgus",
    img: "3-star/icon_orgus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Sol",
    img: "3-star/icon_sol01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Nekros & Bacchus",
    img: "3-star/icon_nekros01.gif",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Kimun Kamui",
    img: "3-star/icon_kimunkamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "kamuy_kotan" ],
    },
  },
  {
    name: "Yamasachihiko",
    img: "3-star/icon_yamasachihiko01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Otohime",
    img: "3-star/icon_otohime01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Cait Sith",
    img: "3-star/icon_caitsith01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Tvastar",
    img: "3-star/icon_tvastar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "no_school" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Shiva",
    img: "3-star/icon_shiva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kudan" ],
	  world: [ "deva_loka" ],
    },
  },
  {
    name: "Marduk",
    img: "3-star/icon_marduk01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
	  world: [ "babilim" ],
    },
  },
  {
    name: "Bertro",
    img: "3-star/icon_bertro01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
	  world: [ "tokyo", "yggdrasil" ],
    },
  },
  {
    name: "Ellie",
    img: "3-star/icon_ellie01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Itzamna",
    img: "3-star/icon_itzamna01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "el_dorado" ],
    },
  },
  {
    name: "MacRoich",
    img: "3-star/icon_macroich01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "entertainers" ],
	  school: [ "bukuro" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Yoritomo",
    img: "3-star/icon_yoritomo01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Mephistopheles",
    img: "3-star/icon_mephistopheles01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Babe Bunyan",
    img: "3-star/icon_babebunyan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "ojibo" ],
	  world: [ "great_spirit" ],
    },
  },
  {
    name: "Volkh Vseslav",
    img: "3-star/icon_volkh01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
	  world: [ "kitezh" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Akiha Gongen",
    img: "3-star/icon_akihagongen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Kresnik",
    img: "3-star/icon_kresnik01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "kabukicho" ],
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Tindalos",
    img: "3-star/icon_tindalos01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Nodens",
    img: "3-star/icon_nodens01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "wisemen" ],
	  school: [ "togo" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Fuxi",
    img: "3-star/icon_fuxi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Sandayu",
    img: "3-star/icon_sandayu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "no_school", "shinjuku", "kabukicho" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Catoblepas",
    img: "3-star/icon_catoblepas01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "eden" ],
    },
  },
  {
    name: "Smoky God",
    img: "3-star/icon_thesmokygod01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  world: [ "shangri_la" ],
    },
  },
  {
    name: "Oguchi Magami",
    img: "3-star/icon_oguchimagami01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "kiou" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Zhurong",
    img: "3-star/icon_zhurong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wanderers" ],
	  school: [ "shinjuku" ],
	  world: [ "hourai", "old_ones" ],
    },
  },
  {
    name: "Sarutahiko",
    img: "3-star/icon_sarutahiko01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "umamichi" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Hotei",
    img: "3-star/icon_hotei01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "umamichi" ],
	  world: [ "land_of_wa", "shangri_la" ],
    },
  },
  {
    name: "Wakan Tanka∞",
    img: "3-star/icon_wakantankamugen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  world: [ "great_spirit" ],
    },
  },
  {
    name: "Tangaroa∞",
    img: "3-star/icon_tangaroamugen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    },
  },
  {
    name: "Hermes",
    img: "3-star/icon_hermes01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "nakano" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Boogeyman",
    img: "3-star/icon_boogeyman01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "shinjuku" ],
	  world: [ "tir_na_nog" ],
    },
  },
  {
    name: "Barong",
    img: "3-star/icon_barong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "suidocho" ],
	  world: [ "shangri_la" ],
    },
  },
  {
    name: "Enigma",
    img: "3-star/icon_enigma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "tokyo", "no_world" ],
    },
  },
  {
    name: "Israfil",
    img: "3-star/icon_israfil01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    },
  },
  {
    name: "Tuaring",
    img: "3-star/icon_tuaring01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Hecate",
    img: "3-star/icon_hekate01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators", "entertainers" ],
	  school: [ "akihabara" ],
	  world: [ "olympus" ],
    },
  },
  {
    name: "Perun",
    img: "3-star/icon_perun01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "setagaya" ],
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Takeminakata",
    img: "3-star/icon_takeminakata01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "no_guild" ],
	  school: [ "roppongi" ],
	  world: [ "takamagahara" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Ulaanbaatar",
    img: "3-star/icon_ulaanbaatar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "fire" ],
	  world: [ "xanadu" ],
    },
  },
  {
    name: "Taishakuten",
    img: "3-star/icon_taishakuten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "suidocho" ],
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "∀Isaac",
    img: "3-star/icon_isaac01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  world: [ "tokyo", "yggdrasil" ],
    },
  },
  {
    name: "Gorozaemon",
    img: "3-star/icon_gorozaemon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "umamichi" ],
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Jormungandr",
    img: "3-star/icon_jormungandr01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Vapula",
    img: "3-star/icon_vapula01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Ixbalanque",
    img: "3-star/icon_ixbalanque01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    },
  },
  {
    name: "Sphinx",
    img: "3-star/icon_sphinx01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "no_guild" ],
	  school: [ "akihabara" ],
	  world: [ "aaru" ],
    },
  },
  {
    name: "Kirito",
    img: "3-star/icon_kirito_zero01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders", "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Bigfoot",
    img: "3-star/icon_bigfoot01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "entertainers" ],
	  school: [ "no_school" ],
	  world: [ "great_spirit" ],
    },
  },
  {
    name: "Simurgh",
    img: "3-star/icon_simurgh01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "Inaba",
    img: "3-star/icon_inaba01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "takamagahara" ],
    },
  },
  {
    name: "Girimekra",
    img: "3-star/icon_girimekra01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus", "missionaries" ],
	  school: [ "umamichi" ],
	  world: [ "shangri_la" ],
    },
  },
  {
    name: "Hastur",
    img: "3-star/icon_hastur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "old_ones" ],
    },
  },
  {
    name: "Q'ursha",
    img: "3-star/icon_qursha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "kitezh" ],
    },
  },
  {
    name: "Pazuzu",
    img: "3-star/icon_pazuzu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "babilim" ],
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
	  world: [ "land_of_wa" ],
    },
  },
  {
    name: "Amduscias",
    img: "3-star/icon_amduscias01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
	  world: [ "gehenna" ],
    },
  },
  {
    name: "Oscar",
    img: "3-star/icon_oscar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Gurangatch",
    img: "3-star/icon_gurangatch01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "fire" ],
	  world: [ "oceanic_realm" ],
    },
  },
  {
    name: "Yuma",
    img: "3-star/icon_yuma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "tokyo" ],
    },
  },
  {
    name: "Ahura Mazda",
    img: "3-star/icon_ahuramazda01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "garo_demana" ],
    },
  },
  {
    name: "Loki",
    img: "3-star/icon_loki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "penitentia", "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Tianzun",
    img: "3-star/icon_tianzun01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "hourai" ],
    },
  },
  {
    name: "Beowulf",
    img: "3-star/icon_beowulf01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters", "no_guild" ],
	  school: [ "bukuro", "no_school" ],
	  world: [ "yggdrasil" ],
    },
  },
  {
    name: "Cipactli",
    img: "3-star/icon_cipactli01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    },
  },
  
/******
* ALTS
******/

  {
    name: "Ikutoshi (Adult)",
    img: "alts/icon_ikutoshi01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "tokyo" ],
	  alt: true
    },
  },
  {
    name: "Ophion (Young)",
    img: "alts/icon_ophion01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "olympus" ],
	  alt: true
    },
  },
  {
    name: "Daisuke",
    img: "alts/icon_taurus01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "tokyo" ],
	  alt: true
    },
  },
  {
    name: "Black Ded",
    img: "alts/icon_ded01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "kitezh" ],
	  alt: true
    },
  },
  {
    name: "Mysterious Lady",
    img: "alts/icon_ibaraki01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "shinjuku" ],
	  world: [ "land_of_wa" ],
	  alt: true
    },
  },
  {
    name: "Behemoth (Fat)",
    img: "alts/icon_behemoth01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "gehenna", "eden" ],
	  alt: true
    },
  },
  {
    name: "Ose (Adult)",
    img: "alts/icon_ose01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents" ],
	  school: [ "nakano" ],
	  world: [ "gehenna" ],
	  alt: true
    },
  },
  {
    name: "Zo",
    img: "alts/icon_oz01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "olympus" ],
	  alt: true
    },
  },
  {
    name: "Talos",
    img: "alts/icon_hephaestus01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "kamata" ],
	  world: [ "olympus" ],
	  alt: true
    },
  },
  {
    name: "Goemon (Human)",
    img: "alts/icon_goemon01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "nakano" ],
	  world: [ "land_of_wa" ],
	  alt: true
    },
  },
  {
    name: "Astarte",
    img: "alts/icon_astaroth01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  alt: true
    },
  },
  {
    name: "Dagon (Canaan)",
    img: "alts/icon_dagon01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "canaan" ],
	  alt: true
    },
  },
  {
    name: "Tezcatlipoca (Plush)",
    img: "alts/icon_tezcatlipoca01_skin13.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "penitentia" ],
	  world: [ "el_dorado" ],
	  alt: true
    },
  },
  {
    name: "Wen Kamui",
    img: "alts/icon_kimunkamui01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "kamuy_kotan" ],
	  alt: true
    },
  },
  {
    name: "Vritra",
    img: "alts/icon_tvastar01_vritra.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "no_school" ],
	  world: [ "deva_loka" ],
	  alt: true
    },
  },
  {
    name: "Shiva Mahakala",
    img: "alts/icon_shiva01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kudan" ],
	  world: [ "deva_loka", "shangri_la" ],
	  alt: true
    },
  },
  {
    name: "Mushussu",
    img: "alts/icon_marduk01_mushussu.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "no_school" ],
	  world: [ "babilim" ],
	  alt: true
    },
  },
  {
    name: "Nuadha",
    img: "alts/icon_nodens01_skin4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "wisemen" ],
	  school: [ "togo" ],
	  world: [ "tir_na_nog" ],
	  alt: true
    },
  },
  {
    name: "Jormungandr (Dragon)",
    img: "alts/icon_jormungandr01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  alt: true
    },
  },
  {
    name: "Yuma (Therian)",
    img: "alts/icon_yuma01_skin4.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers" ],
	  school: [ "ueno" ],
	  world: [ "tokyo" ],
	  alt: true
    },
  },
  {
    name: "Wym",
    img: "alts/icon_beowulf01_wyrm.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters", "no_guild" ],
	  school: [ "bukuro", "no_school" ],
	  world: [ "yggdrasil" ],
	  alt: true
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
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Blue Oni",
    img: "2-star/icon_goblinwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Green Oni",
    img: "2-star/icon_goblinearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Yellow Oni",
    img: "2-star/icon_goblinlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Purple Oni",
    img: "2-star/icon_goblindark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
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
	  world: [ "yggdrasil" ],
    }
  },
  {
    name: "Water Valkyrie",
    img: "2-star/icon_valkyriewater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    }
  },
  {
    name: "Wood Valkyrie",
    img: "2-star/icon_valkyrieearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    }
  },
  {
    name: "Aether Valkyrie",
    img: "2-star/icon_valkyrielight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
    }
  },
  {
    name: "Nether Valkyrie",
    img: "2-star/icon_valkyriedark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
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
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Blue Tribe",
    img: "2-star/icon_tribewater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Green Tribe",
    img: "2-star/icon_tribeearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Yellow Tribe",
    img: "2-star/icon_tribelight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Purple Tribe",
    img: "2-star/icon_tribedark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Shaded Oni",
    img: "2-star/icon_goblinevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Fire Deity",
    img: "2-star/icon_tenjinfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    }
  },
  {
    name: "Water Deity",
    img: "2-star/icon_tenjinwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    }
  },
  {
    name: "Wood Deity",
    img: "2-star/icon_tenjinearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    }
  },
  {
    name: "Aether Deity",
    img: "2-star/icon_tenjinlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    }
  },
  {
    name: "Nether Deity",
    img: "2-star/icon_tenjindark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
    }
  },
  {
    name: "Infernal Deity",
    img: "2-star/icon_tenjinevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
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
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Blue Luchador",
    img: "2-star/icon_wrestlerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Green Luchador",
    img: "2-star/icon_wrestlerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Yellow Luchador",
    img: "2-star/icon_wrestlerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Purple Luchador",
    img: "2-star/icon_wrestlerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Black Luchador",
    img: "2-star/icon_wrestlerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "White Luchador",
    img: "2-star/icon_wrestlerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
    }
  },
  {
    name: "Brown Luchador",
    img: "2-star/icon_wrestlerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
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
	  world: [ "hourai" ],
    }
  },
  {
    name: "Water Jiangshi",
    img: "2-star/icon_jiangshiwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "Wood Jiangshi",
    img: "2-star/icon_jiangshiearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "Aether Jiangshi",
    img: "2-star/icon_jiangshilight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "Nether Jiangshi",
    img: "2-star/icon_jiangshidark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "Black Tribe",
    img: "2-star/icon_tribeevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "White Tribe",
    img: "2-star/icon_tribehero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
    }
  },
  {
    name: "Brown Tribe",
    img: "2-star/icon_tribeworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
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
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Water Ciramantep",
    img: "2-star/icon_ciramantepwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Wood Ciramantep",
    img: "2-star/icon_ciramantepearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Aether Ciramantep",
    img: "2-star/icon_ciramanteplight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Nether Ciramantep",
    img: "2-star/icon_ciramantepdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Infernal Ciramantep",
    img: "2-star/icon_ciramantepevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Valiant Ciramantep",
    img: "2-star/icon_ciramantephero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "World Ciramantep",
    img: "2-star/icon_ciramantepworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamuy_kotan" ],
    }
  },
  {
    name: "Infernal Jiangshi",
    img: "2-star/icon_jiangshievil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "Valiant Jiangshi",
    img: "2-star/icon_jiangshihero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
    }
  },
  {
    name: "World Jiangshi",
    img: "2-star/icon_jiangshiworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "hourai" ],
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
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Blue Nightgaunt",
    img: "2-star/icon_nightgauntwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Green Nightgaunt",
    img: "2-star/icon_nightgauntearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Yellow Nightgaunt",
    img: "2-star/icon_nightgauntlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Purple Nightgaunt",
    img: "2-star/icon_nightgauntdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Black Nightgaunt",
    img: "2-star/icon_nightgauntevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "White Nightgaunt",
    img: "2-star/icon_nightgaunthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Brown Nightgaunt",
    img: "2-star/icon_nightgauntworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
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
  {
    name: "Fire Event Driver",
    img: "2-star/icon_livestreamerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Water Event Driver",
    img: "2-star/icon_livestreamerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Wood Event Driver",
    img: "2-star/icon_livestreamerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Aether Event Driver",
    img: "2-star/icon_livestreamerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Nether Event Driver",
    img: "2-star/icon_livestreamerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infernal Event Driver",
    img: "2-star/icon_livestreamerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Valiant Event Driver",
    img: "2-star/icon_livestreamerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "World Event Driver",
    img: "2-star/icon_livestreamerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Infinite Missing",
    img: "2-star/icon_missingmugen01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
    }
  },
  {
    name: "Null Missing",
    img: "2-star/icon_missingzero01b.png",
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
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Blue Devil",
    img: "1-star/icon_impwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Green Devil",
    img: "1-star/icon_impearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Yellow Devil",
    img: "1-star/icon_implight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Purple Devil",
    img: "1-star/icon_impdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
    }
  },
  {
    name: "Red Fencer",
    img: "1-star/icon_fighterfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Blue Fencer",
    img: "1-star/icon_fighterwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Green Fencer",
    img: "1-star/icon_fighterearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Yellow Fencer",
    img: "1-star/icon_fighterlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Purple Fencer",
    img: "1-star/icon_fighterdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Fire Mage",
    img: "1-star/icon_magefire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Ice Mage",
    img: "1-star/icon_magewater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Earth Mage",
    img: "1-star/icon_mageearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Light Mage",
    img: "1-star/icon_magelight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
    }
  },
  {
    name: "Dark Mage",
    img: "1-star/icon_magedark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
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
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Blue Ninja",
    img: "1-star/icon_geninwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Green Ninja",
    img: "1-star/icon_geninearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Yellow Ninja",
    img: "1-star/icon_geninlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Purple Ninja",
    img: "1-star/icon_genindark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
    }
  },
  {
    name: "Fire Angel",
    img: "1-star/icon_angelfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    }
  },
  {
    name: "Water Angel",
    img: "1-star/icon_angelwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    }
  },
  {
    name: "Wood Angel",
    img: "1-star/icon_angelearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    }
  },
  {
    name: "Aether Angel",
    img: "1-star/icon_angellight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    }
  },
  {
    name: "Nether Angel",
    img: "1-star/icon_angeldark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
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
	  world: [ "old_ones" ],
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
	  world: [ "eden" ],
    }
  },
  {
    name: "Valiant Angel",
    img: "1-star/icon_angelhero01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
    }
  },
  {
    name: "World Angel",
    img: "1-star/icon_angelworld01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
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
	  world: [ "no_world" ],
	  unreleased: true
    }
  },
  {
    name: "Kyoma Mononobe",
    img: "unreleased/icon_kyouma01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "tokyo" ],
	  unreleased: true
    }
  },
  {
    name: "Michael",
    img: "3-star/icon_michael01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "eden" ],
	  unreleased: true
    }
  },
  {
    name: "Amaterasu",
    img: "3-star/icon_amaterasu01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "takamagahara" ],
	  unreleased: true	  
    }
  },
  {
    name: "Curren",
    img: "unreleased/icon_curren01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "tokyo" ],
	  unreleased: true
    }
  },
  {
    name: "Odin",
    img: "unreleased/icon_odin01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "yggdrasil" ],
	  unreleased: true
    }
  },
  {
    name: "Quantum",
    img: "3-star/icon_quantum01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "utopia" ],
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
	  world: [ "old_ones" ],
	  unreleased: true
    }
  },
  {
    name: "Thor",
    img: "unreleased/icon_thor02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "yggdrasil" ],
	  unreleased: true
    }
  },
  {
    name: "Fisher King",
    img: "unreleased/icon_fisher02_skin1.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "tir_na_nog" ],
	  unreleased: true
    }
  },
  {
    name: "Yukimura",
    img: "unreleased/icon_yukimura02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "land_of_wa" ],
	  unreleased: true
    }
  },
  {
    name: "Witch of Orleans",
    img: "unreleased/icon_jeanne02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "eden" ],
	  unreleased: true
    }
  },
  {
    name: "Mahakala",
    img: "unreleased/icon_mahakala02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "deva_loka", "shangri_la" ],
	  unreleased: true
    }
  },
  {
    name: "Ra Mu",
    img: "unreleased/icon_ramu01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "oceanic_realm" ],
	  unreleased: true
    }
  },
  {
    name: "Overlord",
    img: "unreleased/icon_overlord02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "utopia" ],
	  unreleased: true
    }
  },
  {
    name: "Black Storm",
    img: "unreleased/icon_typhoeus02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "gehenna", "eden" ],
	  unreleased: true
    }
  },
  {
    name: "Parvati",
    img: "unreleased/icon_yamanomusume01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "deva_loka" ],
	  unreleased: true
    }
  },
  {
    name: "Alberich",
    img: "unreleased/icon_alberich02.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "tir_na_nog" ],
	  unreleased: true
    }
  },
  {
    name: "Baal",
    img: "unreleased/icon_bael01_skin3.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Yam",
    img: "unreleased/icon_tangaroa01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Resheph",
    img: "unreleased/icon_nomad01_skin8.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Moloch",
    img: "unreleased/icon_asterios01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Kothar-wa-Khasis",
    img: "unreleased/icon_kurogane01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Aqhat",
    img: "unreleased/icon_robinson01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Adonis",
    img: "unreleased/icon_kijimuna01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "canaan" ],
	  unreleased: true
    }
  },
  {
    name: "Fafnir",
    img: "alts/icon_fafnir01_skin1.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "yggdrasil" ],
	  unreleased: true
    }
  },
  {
    name: "Onamuchi",
    img: "unreleased/icon_onamuji01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "takamagahara" ],
	  unreleased: true
    }
  },
  {
    name: "Airavata",
    img: "unreleased/icon_airavata01.png",
    opts: {
      rarity: [ "3+" ],
	  world: [ "deva_loka" ],
	  unreleased: true
    }
  },
  {
    name: "All-round Missing",
    img: "2-star/icon_missingall01b.png",
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

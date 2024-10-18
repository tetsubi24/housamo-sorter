dataSetVersion = "2024-10-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to only sort through characters of certain rarities.",
    checked: true,
    sub: [
      { name: "★★★+", tooltip: "Characters that are named and/or have cards of at least ★3 rarity.", key: "3+", checked: true },
	  { name: "★★", tooltip: "Mob characters that have cards of ★2 rarity.", key: "2" },
	  { name: "★", tooltip: "Mob characters that have cards of ★1 rarity.", key: "1" },
    ]
  },
  {
    name: "Filter by Guild",
    key: "guild",
    tooltip: "Check this to only sort through characters who are members of certain guilds. Includes Limited Variant affiliations.",
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
	  { name: "Exters", tooltip: " ", key: "exters" },
	  { name: "Independent", tooltip: "Characters who act independently from the guilds they are members of.", key: "independent" },
	  { name: "Unaffiliated", tooltip: "Characters who aren't members of any guild.", key: "no_guild" },
    ]
  },
  {
    name: "Filter by School",
    key: "school",
    tooltip: "Check this to only sort through characters who are students or staff members of certain schools. Includes Limited Variant affiliations.",
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
	  { name: "Ameyoko Fashion Academy", tooltip: " ", key: "ameyoko" },
	  { name: "Unknown", tooltip: "Characters whose school affiliations are unknown.", key: "no_school" },
    ]
  },
  {
    name: "Filter by Other Affiliations",
    key: "other",
    tooltip: "Check this to only sort through characters affiliated with certain other groups.",
    checked: false,
    sub: [
      { name: "Eight Dog Warriors", tooltip: "Named &quot;Hakkenshi&quot; in Japanese.", key: "eight" },
	  { name: "Viral Influence", tooltip: "Named &quot;Buzz Dreamers&quot; in Japanese.", key: "viral" },
	  { name: "Shinjuku Academy Mountaineers", tooltip: "Named &quot;Shinjuku Wandervogel Club&quot; in Japanese.", key: "mountain" },
	  { name: "Setagaya Mountaineering Club", tooltip: " ", key: "mountain2" },
    ]
  },
  {
    name: "Filter by World",
    key: "world",
    tooltip: "Check this to only sort through characters who originate or originated from certain worlds.",
    checked: false,
    sub: [
      { name: "Takamagahara", tooltip: " ", key: "takamagahara" },
	  { name: "Land of Wa", tooltip: "Also known as Wa no Kuni.", key: "land_of_wa" },
	  { name: "Kamui Kotan", tooltip: "Also known as Kamuy Kotan.", key: "kamui_kotan" },
	  { name: "Penglai", tooltip: "Also known as Hourai.", key: "penglai" },
	  { name: "Midearth", tooltip: "Also known as Garo Demana or Garothman.", key: "midearth" },
	  { name: "Devaloka", tooltip: "Also known as Deva Loka.", key: "devaloka" },
	  { name: "Nirai Kanai", tooltip: " ", key: "nirai_kanai" },
	  { name: "Oceanic Realm", tooltip: " ", key: "oceanic_realm" },
	  { name: "Xanadu", tooltip: " ", key: "xanadu" },
	  { name: "Shangri-La", tooltip: "Also known as Shangri La.", key: "shangri-la" },
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
	  { name: "Agisymba", tooltip: " ", key: "agisymba" },
	  { name: "Utopia", tooltip: " ", key: "utopia" },
	  { name: "Canaan", tooltip: "Only Alternate Forms and Unreleased Characters are unique to this world.", key: "canaan" },
	  { name: "Tokyo", tooltip: " ", key: "tokyo" },
	  { name: "Unknown", tooltip: "Characters whose world origins are unknown.", key: "no_world" },
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to only sort through characters of certain genders.",
    checked: false,
    sub: [
      { name: "Male", tooltip: " ", key: "male" },
	  { name: "Female", tooltip: " ", key: "female" },
	  { name: "Other", tooltip: "Characters who don't identify as either male or female, or whose gender identities are uncertain.", key: "no_gender" },
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
	  gender: [ "male", "female", "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Hanuman",
    img: "3-star/icon_hanuman01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "summoners" ],
	  school: [ "umamichi" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Ganglie",
    img: "3-star/icon_gouryou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Macan",
    img: "3-star/icon_magan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "shangri-la" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Makara",
    img: "3-star/icon_makara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "toyosu" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Gunzo",
    img: "3-star/icon_gunzou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "exters" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo", "gehenna" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Kyuma",
    img: "3-star/icon_kyuuma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "exters" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo", "eden" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
    },
  },
  {
    name: "Jambavan",
    img: "3-star/icon_jambavat01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "beast_tamers", "game_masters" ],
	  school: [ "ueno" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Barguest",
    img: "3-star/icon_barguest01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "tir_na_nog" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Kalki",
    img: "3-star/icon_kalki01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Snow",
    img: "3-star/icon_snow01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "shangri-la", "penglai", "devaloka" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Gandharva",
    img: "3-star/icon_gandharva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "suidocho" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Nyarlathotep",
    img: "3-star/icon_nyarlathotep01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "entertainers", "independent" ],
	  school: [ "daikanyama" ],
	  world: [ "old_ones" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Taurus Mask",
    img: "3-star/icon_taurus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male", "no_gender" ],
    },
  },
  {
    name: "Horkeu Kamui",
    img: "3-star/icon_horkeukamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Taromaiti",
    img: "3-star/icon_taromaiti01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "daikanyama" ],
	  world: [ "midearth" ],
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Arsalan",
    img: "3-star/icon_arslan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "midearth" ],
	  gender: [ "male" ],
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
	  world: [ "midearth" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Hakumen",
    img: "3-star/icon_hakumen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "penglai", "land_of_wa", "devaloka" ],
	  gender: [ "female" ],
    },
  },
  {
    name: "Benten",
    img: "3-star/icon_benten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "nakano" ],
	  other: [ "viral" ],
	  world: [ "devaloka", "land_of_wa" ],
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Jinn",
    img: "3-star/icon_jinn01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "midearth" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Thunderbird",
    img: "3-star/icon_thunderbird01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "independent" ],
	  school: [ "suidocho" ],
	  world: [ "great_spirit" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Musashi",
    img: "3-star/icon_musashi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wisemen", "crafters", "independent" ],
	  school: [ "kudan", "no_school" ],
	  world: [ "tokyo", "land_of_wa" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  world: [ "devaloka", "shangri-la" ],
	  gender: [ "female" ],
    },
  },
  {
    name: "Tetsuox",
    img: "3-star/icon_tetsugyuu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Gyumao",
    img: "3-star/icon_gyuumaou01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Tanngrisnir",
    img: "3-star/icon_tanngrisnir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  other: [ "mountain" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Behemoth",
    img: "3-star/icon_behemoth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "gehenna", "eden" ],
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Korpokkur",
    img: "3-star/icon_korpokkur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "ojibo" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Arachne",
    img: "3-star/icon_aracne01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "ameyoko" ],
	  world: [ "olympus" ],
	  gender: [ "female" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Licho",
    img: "3-star/icon_licho01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Sanat Kumara",
    img: "3-star/icon_sanatkumara01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "game_masters" ],
	  school: [ "umamichi" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Astaroth",
    img: "3-star/icon_astaroth01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers", "independent" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
	  gender: [ "no_gender" ],
    },
  },
  {
    name: "Dagon",
    img: "3-star/icon_dagon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wisemen" ],
	  school: [ "toyosu" ],
	  world: [ "old_ones" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Shennong",
    img: "3-star/icon_shennong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers", "summoners" ],
	  school: [ "penitentia", "shinjuku" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Jacob",
    img: "3-star/icon_jacob01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries", "independent" ],
	  school: [ "daikanyama" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male", "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Nezha",
    img: "3-star/icon_nezha01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Kimun Kamui",
    img: "3-star/icon_kimunkamui01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "daikanyama" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Tvastar",
    img: "3-star/icon_tvastar01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "crafters" ],
	  school: [ "no_school" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Shiva",
    img: "3-star/icon_shiva01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "warmongers" ],
	  school: [ "kudan" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Nodens",
    img: "3-star/icon_nodens01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "outlaws", "wisemen" ],
	  school: [ "togo" ],
	  world: [ "old_ones", "tir_na_nog" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Fuxi",
    img: "3-star/icon_fuxi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Sandayu",
    img: "3-star/icon_sandayu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "independent" ],
	  school: [ "no_school", "shinjuku", "kabukicho" ],
	  world: [ "land_of_wa" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Smoky God",
    img: "3-star/icon_thesmokygod01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders" ],
	  school: [ "no_school" ],
	  world: [ "shangri-la" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Zhurong",
    img: "3-star/icon_zhurong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wanderers" ],
	  school: [ "shinjuku" ],
	  world: [ "penglai", "old_ones" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Hotei",
    img: "3-star/icon_hotei01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "umamichi" ],
	  world: [ "land_of_wa", "shangri-la" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Barong",
    img: "3-star/icon_barong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers" ],
	  school: [ "suidocho" ],
	  world: [ "shangri-la" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Enigma",
    img: "3-star/icon_enigma01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators" ],
	  school: [ "akihabara" ],
	  other: [ "mountain2" ],
	  world: [ "tokyo", "no_world" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Israfil",
    img: "3-star/icon_israfil01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Hecate",
    img: "3-star/icon_hekate01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "creators", "entertainers" ],
	  school: [ "akihabara" ],
	  world: [ "olympus", "yggdrasil", "tir_na_nog" ],
	  gender: [ "female" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Takeminakata",
    img: "3-star/icon_takeminakata01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "invaders", "tycoons" ],
	  school: [ "roppongi" ],
	  world: [ "takamagahara" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Taishakuten",
    img: "3-star/icon_taishakuten01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus", "no_guild" ],
	  school: [ "suidocho" ],
	  world: [ "midearth" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Ixbalanque",
    img: "3-star/icon_ixbalanque01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "exters" ],
	  school: [ "no_school" ],
	  world: [ "el_dorado" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Sphinx",
    img: "3-star/icon_sphinx01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "rule_makers" ],
	  school: [ "akihabara" ],
	  world: [ "aaru" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Kirito",
    img: "3-star/icon_kirito_zero01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "genociders", "independent" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Bigfoot",
    img: "3-star/icon_bigfoot01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "agents", "entertainers" ],
	  school: [ "no_school", "shinjuku" ],
	  other: [ "mountain" ],
	  world: [ "great_spirit" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Simurgh",
    img: "3-star/icon_simurgh01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "midearth" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Girimekra",
    img: "3-star/icon_girimekra01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus", "missionaries" ],
	  school: [ "umamichi" ],
	  world: [ "shangri-la" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Quantum",
    img: "3-star/icon_quantum01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "summoners", "independent" ],
	  school: [ "shinjuku" ],
	  world: [ "utopia" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Ahura Mazda",
    img: "3-star/icon_ahuramazda01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "midearth" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Tianzun",
    img: "3-star/icon_tianzun01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Beowulf",
    img: "3-star/icon_beowulf01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters", "berserkers" ],
	  school: [ "bukuro", "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    },
  },
  {
    name: "Reprobus",
    img: "3-star/icon_reprobus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "missionaries" ],
	  school: [ "toyosu" ],
	  world: [ "kitezh" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Gordon",
    img: "3-star/icon_gordon01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Fafnir",
    img: "3-star/icon_fafnir01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Claus",
    img: "3-star/icon_claus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Shamash",
    img: "3-star/icon_shamash01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "exters" ],
	  school: [ "penitentia", "no_school" ],
	  world: [ "babilim" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Masashi",
    img: "3-star/icon_masashi01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  other: [ "eight" ],
	  world: [ "land_of_wa" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Otter",
    img: "3-star/icon_otter01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "entertainers", "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Qinglong",
    img: "3-star/icon_qinglong01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Amanojaku",
    img: "3-star/icon_amanojaku01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "takamagahara" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Hippolytus",
    img: "3-star/icon_hippolytus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "setagaya" ],
	  world: [ "olympus" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Hei Long Yi Quan",
    img: "3-star/icon_heilongyiquan01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "suidocho" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Prometheus",
    img: "3-star/icon_prometheus01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers" ],
	  school: [ "akihabara" ],
	  world: [ "olympus" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Belphegor",
    img: "3-star/icon_belphegor01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "bukuro" ],
	  world: [ "gehenna" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Ame-no-Uzume",
    img: "3-star/icon_amenouzume01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers", "independent" ],
	  school: [ "ameyoko" ],
	  world: [ "takamagahara" ],
	  gender: [ "female" ],
    },
  },
  {
    name: "Willie Wildcat",
    img: "3-star/icon_williewildcat01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "exters" ],
	  school: [ "no_school" ],
	  world: [ "utopia" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Amaterasu",
    img: "3-star/icon_amaterasu01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
	  gender: [ "female" ],
    },
  },
  {
    name: "Raven Arthur",
    img: "3-star/icon_ravenarthur01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters" ],
	  school: [ "fire" ],
	  world: [ "tir_na_nog" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Tu'er Shen",
    img: "3-star/icon_tuershen01.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "wanderers", "rule_makers", "independent" ],
	  school: [ "ameyoko" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    },
  },
  {
    name: "Michael",
    img: "3-star/icon_michael01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Baphomet",
    img: "3-star/icon_baphomet01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Kokopelli",
    img: "3-star/icon_kokopelli01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "exters" ],
	  school: [ "no_school" ],
	  world: [ "great_spirit", "tokyo" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Sanzo",
    img: "3-star/icon_sanzo01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "gurus" ],
	  school: [ "umamichi" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Y'golonac",
    img: "3-star/icon_ygolonac01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "outlaws" ],
	  school: [ "suidocho" ],
	  world: [ "old_ones" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Himavat",
    img: "3-star/icon_himavat01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  other: [ "mountain2" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Kumano Gongen",
    img: "3-star/icon_kumanogongen01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "gurus", "no_guild" ],
	  school: [ "setagaya" ],
	  other: [ "mountain2" ],
	  world: [ "land_of_wa" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Saturnus",
    img: "3-star/icon_saturnus01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  world: [ "olympus" ],
	  gender: [ "male" ],
    }
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Daisuke",
    img: "alts/icon_taurus01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "berserkers" ],
	  school: [ "yoyogi" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Dark Ded",
    img: "alts/icon_ded01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "santa" ],
	  world: [ "kitezh" ],
	  gender: [ "male" ],
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
	  gender: [ "female", "no_gender" ],
	  alt: true
    },
  },
  {
    name: "Behemoth (Fat)",
    img: "alts/icon_behemoth01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "gehenna", "eden" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Astarte",
    img: "alts/icon_astaroth01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "rule_makers", "independent" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "no_gender" ],
	  alt: true
    },
  },
  {
    name: "Dagon (Canaan)",
    img: "alts/icon_dagon01_skin1.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild", "wisemen" ],
	  school: [ "toyosu" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
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
	  world: [ "devaloka" ],
	  gender: [ "male" ],
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
	  world: [ "devaloka", "shangri-la" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  world: [ "tir_na_nog", "tir_na_nog" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Wyrm",
    img: "alts/icon_beowulf01_wyrm.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "game_masters", "berserkers" ],
	  school: [ "bukuro", "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Gordon Φ",
    img: "alts/icon_gordon01_skin2.png",
    opts: {
      rarity: [ "3+" ],
      guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
	  alt: true
    },
  },
  {
    name: "Fafnir (Dragon)",
    img: "alts/icon_fafnir01_skin1.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
	  alt: true
    }
  },
  {
    name: "Saturnus (Saturday)",
    img: "alts/icon_saturnus01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  world: [ "olympus" ],
	  gender: [ "male" ],
	  alt: true
    }
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Einherjar",
    img: "2-star/icon_einherjarfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Einherjar",
    img: "2-star/icon_einherjarwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Einherjar",
    img: "2-star/icon_einherjarearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Einherjar",
    img: "2-star/icon_einherjarlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Einherjar",
    img: "2-star/icon_einherjardark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Ruby Scaled Wyvern",
    img: "2-star/icon_wyvernfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Azure Scaled Wyvern",
    img: "2-star/icon_wyvernwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Emerald Scaled Wyvern",
    img: "2-star/icon_wyvernearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Gold Scaled Wyvern",
    img: "2-star/icon_wyvernlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Obsidian Scaled Wyvern",
    img: "2-star/icon_wyverndark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Mobster",
    img: "2-star/icon_kurohukufire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Mobster",
    img: "2-star/icon_kurohukuwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Mobster",
    img: "2-star/icon_kurohukuearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Mobster",
    img: "2-star/icon_kurohukulight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Mobster",
    img: "2-star/icon_kurohukudark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Mermaid",
    img: "2-star/icon_mermaidfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Water Mermaid",
    img: "2-star/icon_mermaidwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Wood Mermaid",
    img: "2-star/icon_mermaidearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Aether Mermaid",
    img: "2-star/icon_mermaidlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Nether Mermaid",
    img: "2-star/icon_mermaiddark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Fire Merman",
    img: "2-star/icon_mermanfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Merman",
    img: "2-star/icon_mermanwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Merman",
    img: "2-star/icon_mermanearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Merman",
    img: "2-star/icon_mermanlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Merman",
    img: "2-star/icon_mermandark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Baron",
    img: "2-star/icon_governerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Baron",
    img: "2-star/icon_governerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Baron",
    img: "2-star/icon_governerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Baron",
    img: "2-star/icon_governerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Baron",
    img: "2-star/icon_governerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Merman",
    img: "2-star/icon_mermanevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Mermaid",
    img: "2-star/icon_mermaidevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Fire Alchemist",
    img: "2-star/icon_alchemistfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Alchemist",
    img: "2-star/icon_alchemistwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Alchemist",
    img: "2-star/icon_alchemistearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Alchemist",
    img: "2-star/icon_alchemistlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Alchemist",
    img: "2-star/icon_alchemistdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Alchemist",
    img: "2-star/icon_alchemistevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Trooper",
    img: "2-star/icon_trooperfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Trooper",
    img: "2-star/icon_trooperwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Trooper",
    img: "2-star/icon_trooperearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Trooper",
    img: "2-star/icon_trooperlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Trooper",
    img: "2-star/icon_trooperdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Black Trooper",
    img: "2-star/icon_trooperevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "White Trooper",
    img: "2-star/icon_trooperhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Brown Trooper",
    img: "2-star/icon_trooperworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Yaksha",
    img: "2-star/icon_yakshafire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Blue Yaksha",
    img: "2-star/icon_yakshawater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Green Yaksha",
    img: "2-star/icon_yakshaearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Yellow Yaksha",
    img: "2-star/icon_yakshalight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Purple Yaksha",
    img: "2-star/icon_yakshadark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Black Yaksha",
    img: "2-star/icon_yakshaevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "White Yaksha",
    img: "2-star/icon_yakshahero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Brown Yaksha",
    img: "2-star/icon_yakshaworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Fire Jiangshi",
    img: "2-star/icon_jiangshifire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Jiangshi",
    img: "2-star/icon_jiangshiwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Jiangshi",
    img: "2-star/icon_jiangshiearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Jiangshi",
    img: "2-star/icon_jiangshilight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Jiangshi",
    img: "2-star/icon_jiangshidark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Giant",
    img: "2-star/icon_giantfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Giant",
    img: "2-star/icon_giantwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Giant",
    img: "2-star/icon_giantearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Giant",
    img: "2-star/icon_giantlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Giant",
    img: "2-star/icon_giantdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Giant",
    img: "2-star/icon_giantevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Giant",
    img: "2-star/icon_gianthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Giant",
    img: "2-star/icon_giantworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Ciramantep",
    img: "2-star/icon_ciramantepfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Ciramantep",
    img: "2-star/icon_ciramantepwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Ciramantep",
    img: "2-star/icon_ciramantepearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Ciramantep",
    img: "2-star/icon_ciramanteplight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Ciramantep",
    img: "2-star/icon_ciramantepdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Ciramantep",
    img: "2-star/icon_ciramantepevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Ciramantep",
    img: "2-star/icon_ciramantephero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Ciramantep",
    img: "2-star/icon_ciramantepworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "kamui_kotan" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Jiangshi",
    img: "2-star/icon_jiangshievil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Jiangshi",
    img: "2-star/icon_jiangshihero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Jiangshi",
    img: "2-star/icon_jiangshiworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "penglai" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Ranger",
    img: "2-star/icon_rangerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Ranger",
    img: "2-star/icon_rangerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Ranger",
    img: "2-star/icon_rangerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Ranger",
    img: "2-star/icon_rangerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Ranger",
    img: "2-star/icon_rangerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Black Ranger",
    img: "2-star/icon_rangerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "White Ranger",
    img: "2-star/icon_rangerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Brown Ranger",
    img: "2-star/icon_rangerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Alchemist",
    img: "2-star/icon_alchemisthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Alchemist",
    img: "2-star/icon_alchemistworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Agent",
    img: "2-star/icon_agentfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Agent",
    img: "2-star/icon_agentwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Agent",
    img: "2-star/icon_agentearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Agent",
    img: "2-star/icon_agentlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Agent",
    img: "2-star/icon_agentdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Black Agent",
    img: "2-star/icon_agentevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "White Agent",
    img: "2-star/icon_agenthero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Brown Agent",
    img: "2-star/icon_agentworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Trickster",
    img: "2-star/icon_tricksterfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Trickster",
    img: "2-star/icon_tricksterwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Trickster",
    img: "2-star/icon_tricksterearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Trickster",
    img: "2-star/icon_tricksterlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Trickster",
    img: "2-star/icon_tricksterdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Trickster",
    img: "2-star/icon_tricksterevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Trickster",
    img: "2-star/icon_tricksterhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Trickster",
    img: "2-star/icon_tricksterworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Camouflager",
    img: "2-star/icon_camouflagerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Camouflager",
    img: "2-star/icon_camouflagerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Camouflager",
    img: "2-star/icon_camouflagerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Camouflager",
    img: "2-star/icon_camouflagerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Camouflager",
    img: "2-star/icon_camouflagerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Dark Camouflager",
    img: "2-star/icon_camouflagerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "White Camouflager",
    img: "2-star/icon_camouflagerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Brown Camouflager",
    img: "2-star/icon_camouflagerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Sand Dragon",
    img: "2-star/icon_sanddragon01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "gehenna" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Fire Wraith",
    img: "2-star/icon_wraithfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Wraith",
    img: "2-star/icon_wraithwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Wraith",
    img: "2-star/icon_wraithearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Wraith",
    img: "2-star/icon_wraithlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Wraith",
    img: "2-star/icon_wraithdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Wraith",
    img: "2-star/icon_wraithevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Wraith",
    img: "2-star/icon_wraithhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Wraith",
    img: "2-star/icon_wraithworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Shadow Scaled Wyvern",
    img: "2-star/icon_wyvernevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Senri",
    img: "2-star/icon_senrifire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Senri",
    img: "2-star/icon_senriwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Senri",
    img: "2-star/icon_senriearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Senri",
    img: "2-star/icon_senrilight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Senri",
    img: "2-star/icon_senridark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Infernal Senri",
    img: "2-star/icon_senrievil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Valiant Senri",
    img: "2-star/icon_senrihero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "World Senri",
    img: "2-star/icon_senriworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Livestreamer",
    img: "2-star/icon_livestreamerfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Livestreamer",
    img: "2-star/icon_livestreamerwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Livestreamer",
    img: "2-star/icon_livestreamerearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Livestreamer",
    img: "2-star/icon_livestreamerlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Livestreamer",
    img: "2-star/icon_livestreamerdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Black Livestreamer",
    img: "2-star/icon_livestreamerevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "White Livestreamer",
    img: "2-star/icon_livestreamerhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Brown Livestreamer",
    img: "2-star/icon_livestreamerworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Missing ∀",
    img: "2-star/icon_missingall01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male", "no_gender" ],
    }
  },
  {
    name: "Missing ∞",
    img: "2-star/icon_missingmugen01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male", "no_gender" ],
    }
  },
  {
    name: "Missing Φ",
    img: "2-star/icon_missingzero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male", "no_gender" ],
    }
  },
  {
    name: "Assistant Shark",
    img: "2-star/icon_shark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Fire Drone Pilot",
    img: "2-star/icon_dronepilotfire01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Water Drone Pilot",
    img: "2-star/icon_dronepilotwater01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Wood Drone Pilot",
    img: "2-star/icon_dronepilotearth01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Aether Drone Pilot",
    img: "2-star/icon_dronepilotlight01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Nether Drone Pilot",
    img: "2-star/icon_dronepilotdark01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Infernal Drone Pilot",
    img: "2-star/icon_dronepilotevil01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Valiant Drone Pilot",
    img: "2-star/icon_dronepilothero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "World Drone Pilot",
    img: "2-star/icon_dronepilotworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Starman ∀",
    img: "2-star/icon_starmanall01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Starman ∞",
    img: "2-star/icon_starmanmugen01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Starman Φ",
    img: "2-star/icon_starmanzero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
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
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Blue Slime",
    img: "1-star/icon_slimewater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Green Slime",
    img: "1-star/icon_slimeearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Yellow Slime",
    img: "1-star/icon_slimelight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Dark Slime",
    img: "1-star/icon_slimedark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
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
	  gender: [ "female" ],
    }
  },
  {
    name: "Red Wolf",
    img: "1-star/icon_werewolffire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Blue Wolf",
    img: "1-star/icon_werewolfwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Green Wolf",
    img: "1-star/icon_werewolfearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Yellow Wolf",
    img: "1-star/icon_werewolflight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Purple Wolf",
    img: "1-star/icon_werewolfdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Red Ghost",
    img: "1-star/icon_ghostfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Blue Ghost",
    img: "1-star/icon_ghostwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Green Ghost",
    img: "1-star/icon_ghostearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Yellow Ghost",
    img: "1-star/icon_ghostlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Purple Ghost",
    img: "1-star/icon_ghostdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Aether Lucky Cat",
    img: "1-star/icon_manekilight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
    }
  },
  {
    name: "Fire Maid",
    img: "1-star/icon_maidfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Water Maid",
    img: "1-star/icon_maidwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Wood Maid",
    img: "1-star/icon_maidearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Aether Maid",
    img: "1-star/icon_maidlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Nether Maid",
    img: "1-star/icon_maiddark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
    }
  },
  {
    name: "Fire Pirate",
    img: "1-star/icon_piratesfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Water Pirate",
    img: "1-star/icon_pirateswater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Wood Pirate",
    img: "1-star/icon_piratesearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Aether Pirate",
    img: "1-star/icon_pirateslight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Nether Pirate",
    img: "1-star/icon_piratesdark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Shaded Slime",
    img: "1-star/icon_slimeevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Shaded Wolf",
    img: "1-star/icon_werewolfevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
    }
  },
  {
    name: "Shaded Ghost",
    img: "1-star/icon_ghostevil01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Fire-O'-Lantern",
    img: "1-star/icon_lanternfire01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Water-O'-Lantern",
    img: "1-star/icon_lanternwater01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Wood-O'-Lantern",
    img: "1-star/icon_lanternearth01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Aether-O'-Lantern",
    img: "1-star/icon_lanternlight01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
    }
  },
  {
    name: "Nether-O'-Lantern",
    img: "1-star/icon_lanterndark01b.png",
    opts: {
      rarity: [ "1" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  gender: [ "male" ],
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
	  guild: [ "summoners" ],
	  school: [ "shinjuku" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Kyoma Mononobe",
    img: "unreleased/icon_kyouma01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "shinjuku" ],
	  world: [ "tokyo", "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Solomon",
    img: "unreleased/icon_solomon01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Curren",
    img: "unreleased/icon_curren01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
	  gender: [ "female" ],
	  unreleased: true
    }
  },
  {
    name: "Onyankopon",
    img: "unreleased/icon_onyankopon01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "rule_makers" ],
	  school: [ "no_school" ],
	  world: [ "agisymba" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Bohemio",
    img: "unreleased/icon_bohemio01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "tokyo" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Xiwangmu",
    img: "unreleased/icon_xiwangmu01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "setagaya" ],
	  other: [ "mountain2" ],
	  world: [ "penglai" ],
	  gender: [ "female" ],
	  unreleased: true
    }
  },
  {
    name: "Nisroch",
    img: "unreleased/icon_nisroch01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "wanderers" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Jersey Devil",
    img: "unreleased/icon_jerseydevil01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  other: [ "mountain2" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Odin",
    img: "unreleased/icon_odin01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Yog-Sothoth",
    img: "unreleased/icon_yogsothoth02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "old_ones" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Thor",
    img: "unreleased/icon_thor02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "yggdrasil" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Fisher King",
    img: "unreleased/icon_fisher02_skin1.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "tir_na_nog" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Yukimura",
    img: "unreleased/icon_yukimura02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "land_of_wa" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Witch of Orleans",
    img: "unreleased/icon_jeanne02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
	  gender: [ "female" ],
	  unreleased: true
    }
  },
  {
    name: "Mahakala",
    img: "unreleased/icon_mahakala02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "devaloka", "shangri-la" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Ra Mu",
    img: "unreleased/icon_ramu01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "oceanic_realm" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Overlord",
    img: "unreleased/icon_overlord02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "utopia" ],
	  gender: [ "no_gender" ],
	  unreleased: true
    }
  },
  {
    name: "Sefirot",
    img: "unreleased/icon_sefirot02_skin1.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "eden" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Black Storm",
    img: "unreleased/icon_typhoeus02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "gehenna", "eden" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Capo",
    img: "unreleased/icon_werewolfCapo01.png",
    opts: {
      rarity: [ "3+", "1" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Parvati",
    img: "unreleased/icon_yamanomusume01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "devaloka" ],
	  gender: [ "female" ],
	  unreleased: true
    }
  },
  {
    name: "Alberich",
    img: "unreleased/icon_alberich02.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "tir_na_nog" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Baal",
    img: "unreleased/icon_bael01_skin3.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Yam",
    img: "unreleased/icon_tangaroa01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Resheph",
    img: "unreleased/icon_nomad01_skin8.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Moloch",
    img: "unreleased/icon_asterios01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Kothar-wa-Khasis",
    img: "unreleased/icon_kurogane01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Aqhat",
    img: "unreleased/icon_robinson01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Adonis",
    img: "unreleased/icon_kijimuna01_skin2.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "canaan" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Grimalkin",
    img: "unreleased/icon_caitsith01_evil.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "tir_na_nog" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Onamuchi",
    img: "unreleased/icon_onamuji01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Airavata",
    img: "unreleased/icon_airavata01.png",
    opts: {
      rarity: [ "3+" ],
	  guild: [ "no_guild" ],
	  school: [ "no_school" ],
	  world: [ "devaloka" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Valiant Deity",
    img: "unreleased/icon_tenjinuniformhero01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "World Deity",
    img: "unreleased/icon_tenjinuniformworld01b.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "takamagahara" ],
	  gender: [ "male" ],
	  unreleased: true
    }
  },
  {
    name: "Valiant Mermaid",
    img: "unreleased/icon_naminootomehero01.png",
    opts: {
      rarity: [ "2" ],
	  guild: [ "summoners" ],
	  school: [ "no_school" ],
	  world: [ "no_world" ],
	  gender: [ "female" ],
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
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
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
	  world: [ "no_world" ],
	  gender: [ "no_gender" ],
	  unreleased: true
    }
  },
];

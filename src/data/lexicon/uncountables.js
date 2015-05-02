//common nouns that have no plural form. These are suprisingly rare
//used in noun.inflect(), and added as nouns in lexicon
var uncountables = (function() {

  var main = [
    "aircraft",
    "bass",
    "bison",
    "fowl",
    "halibut",
    "moose",
    "salmon",
    "spacecraft",
    "tuna",
    "trout",
    "advice",
    "information",
    "knowledge",
    "trouble",
    "enjoyment",
    "fun",
    "recreation",
    "relaxation",
    "meat",
    "rice",
    "bread",
    "cake",
    "coffee",
    "ice",
    "water",
    "oil",
    "grass",
    "hair",
    "fruit",
    "wildlife",
    "equipment",
    "machinery",
    "furniture",
    "mail",
    "luggage",
    "jewelry",
    "clothing",
    "money",
    "mathematics",
    "economics",
    "physics",
    "civics",
    "ethics",
    "gymnastics",
    "mumps",
    "measles",
    "news",
    "tennis",
    "baggage",
    "currency",
    "soap",
    "toothpaste",
    "food",
    "sugar",
    "butter",
    "flour",
    "research",
    "leather",
    "wool",
    "wood",
    "coal",
    "weather",
    "homework",
    "cotton",
    "silk",
    "patience",
    "impatience",
    "vinegar",
    "art",
    "beef",
    "blood",
    "cash",
    "chaos",
    "cheese",
    "chewing",
    "conduct",
    "confusion",
    "education",
    "electricity",
    "entertainment",
    "fiction",
    "forgiveness",
    "gold",
    "gossip",
    "ground",
    "happiness",
    "history",
    "honey",
    "hospitality",
    "importance",
    "justice",
    "laughter",
    "leisure",
    "lightning",
    "literature",
    "luck",
    "melancholy",
    "milk",
    "mist",
    "music",
    "noise",
    "oxygen",
    "paper",
    "pay",
    "peace",
    "peanut",
    "pepper",
    "petrol",
    "plastic",
    "pork",
    "power",
    "pressure",
    "rain",
    "recognition",
    "sadness",
    "safety",
    "salt",
    "sand",
    "scenery",
    "shopping",
    "silver",
    "snow",
    "softness",
    "space",
    "speed",
    "steam",
    "sunshine",
    "tea",
    "thunder",
    "time",
    "traffic",
    "trousers",
    "violence",
    "warmth",
    "wine",
    "steel",
    "soccer",
    "hockey",
    "golf",
    "fish",
    "gum",
    "liquid",
    "series",
    "sheep",
    "species",
    "fahrenheit",
    "celcius",
    "kelvin",
    "hertz"
  ]
  if (typeof module !== "undefined" && module.exports) {
    module.exports = main;
  }

  return main
})()

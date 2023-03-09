const ALL_COUNTRIES_URL = "https://restcountries.com/v3.1/all";
const COUNTRY_URL = "https://restcountries.com/v3.1/name/";

let allCountries = null;

/**
 * Retrieves a list of countries
 * @returns an array of 
 * [
  {
    "name": {
      "common": "Jamaica",
      "official": "Jamaica",
      "nativeName": {
        "eng": { "official": "Jamaica", "common": "Jamaica" },
        "jam": { "official": "Jamaica", "common": "Jamaica" }
      }
    },
    "tld": [".jm"],
    "cca2": "JM",
    "ccn3": "388",
    "cca3": "JAM",
    "cioc": "JAM",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": { "JMD": { "name": "Jamaican dollar", "symbol": "$" } },
    "idd": { "root": "+1", "suffixes": ["876"] },
    "capital": ["Kingston"],
    "altSpellings": ["JM"],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": { "eng": "English", "jam": "Jamaican Patois" },
    "translations": {
      "ara": { "official": "جامايكا", "common": "جامايكا" },
      "bre": { "official": "Jamaika", "common": "Jamaika" },
      "ces": { "official": "Jamajka", "common": "Jamajka" },
      "cym": { "official": "Jamaica", "common": "Jamaica" },
      "deu": { "official": "Jamaika", "common": "Jamaika" },
      "est": { "official": "Jamaica", "common": "Jamaica" },
      "fin": { "official": "Jamaika", "common": "Jamaika" },
      "fra": { "official": "Jamaïque", "common": "Jamaïque" },
      "hrv": { "official": "Jamajka", "common": "Jamajka" },
      "hun": { "official": "Jamaica", "common": "Jamaica" },
      "ita": { "official": "Giamaica", "common": "Giamaica" },
      "jpn": { "official": "ジャマイカ", "common": "ジャマイカ" },
      "kor": { "official": "자메이카", "common": "자메이카" },
      "nld": { "official": "Jamaica", "common": "Jamaica" },
      "per": { "official": "جامائیکا", "common": "جامائیکا" },
      "pol": { "official": "Jamajka", "common": "Jamajka" },
      "por": { "official": "Jamaica", "common": "Jamaica" },
      "rus": { "official": "Ямайка", "common": "Ямайка" },
      "slk": { "official": "Jamajka", "common": "Jamajka" },
      "spa": { "official": "Jamaica", "common": "Jamaica" },
      "srp": { "official": "Јамајка", "common": "Јамајка" },
      "swe": { "official": "Jamaica", "common": "Jamaica" },
      "tur": { "official": "Jamaika", "common": "Jamaika" },
      "urd": { "official": "جمیکا", "common": "جمیکا" },
      "zho": { "official": "牙买加", "common": "牙买加" }
    },
    "latlng": [18.25, -77.5],
    "landlocked": false,
    "area": 10991.0,
    "demonyms": {
      "eng": { "f": "Jamaican", "m": "Jamaican" },
      "fra": { "f": "Jamaïcaine", "m": "Jamaïcain" }
    },
    "flag": "\uD83C\uDDEF\uD83C\uDDF2",
    "maps": {
      "googleMaps": "https://goo.gl/maps/Z8mQ6jxnRQKFwJy9A",
      "openStreetMaps": "https://www.openstreetmap.org/relation/555017"
    },
    "population": 2961161,
    "gini": { "2004": 45.5 },
    "fifa": "JAM",
    "car": { "signs": ["JA"], "side": "left" },
    "timezones": ["UTC-05:00"],
    "continents": ["North America"],
    "flags": {
      "png": "https://flagcdn.com/w320/jm.png",
      "svg": "https://flagcdn.com/jm.svg",
      "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/jm.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/jm.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": { "latlng": [17.99702, -76.79358] }
  },
]
 */
export async function getAllCountries() {
  if (allCountries) return allCountries;

  try {
    const response = await fetch(ALL_COUNTRIES_URL);
    const data = await response.json();

    // const data = [
    //   {
    //     name: { official: "Canada", common: "Canada" },
    //     flags: [],
    //     capital: "Ottawa",
    //     languages: ["English", "French"],
    //     region: "North America",
    //     subregion: "",
    //     continents: "North America",
    //   },
    //   {
    //     name: { official: "USA", common: "USA" },
    //     flags: [],
    //     capital: "Washington DC",
    //     languages: ["English"],
    //     region: "North America",
    //     subregion: "",
    //     continents: "North America",
    //   },
    //   {
    //     name: { official: "Ukraine", common: "Ukraine" },
    //     flags: [],
    //     capital: "Kiyv",
    //     languages: ["Ukrainian"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    //   {
    //     name: { official: "France", common: "France" },
    //     flags: [],
    //     capital: "Paris",
    //     languages: ["French"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    //   {
    //     name: { official: "Poland", common: "Poland" },
    //     flags: [],
    //     capital: "Warsaw",
    //     languages: ["Polish"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    //   {
    //     name: { official: "Estonia", common: "Estonia" },
    //     flags: [],
    //     capital: "Riga",
    //     languages: ["Estonian"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    //   {
    //     name: { official: "Spain", common: "Spain" },
    //     flags: [],
    //     capital: "Mardid",
    //     languages: ["Spanish"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    //   {
    //     name: { official: "Germany", common: "Germany" },
    //     flags: [],
    //     capital: "Berlin",
    //     languages: ["German"],
    //     region: "Europe",
    //     subregion: "",
    //     continents: "Europe",
    //   },
    // ];
    allCountries = data.map((item) => {
      return {
        id: item.name.official,
        common: item.name.common,
        flags: !item.flags ? [] : item.flags,
        capital: !item.capital ? [] : item.capital,
        languages: !item.languages ? [] : item.languages,
        currencies: !item.currencies ? [] : item.currencies,
        region: !item.region ? "" : item.region,
        subregion: !item.subregion ? "" : item.subregion,
        continents: !item.continents ? [] : item.continents,
        population: item.population,
        nativeNames: !item.name.nativeName ? {} : item.name.nativeName,
      };
    });

    return allCountries.sort(({ id: a }, { id: b }) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  } catch (ex) {
    return [];
  }
}

export async function getCountryData(name) {
  const data = allCountries ? allCountries : await getAllCountries();

  return data.find((item) => name.toString() === item.id.toString());
}

export async function getAllCountriesIds() {
  const data = allCountries ? allCountries : await getAllCountries();

  let ids = data.map((item) => {
    return {
      params: {
        id: item.id,
      },
    };
  });

  return ids;
}

export async function getAllCapitals() {
  const data = allCountries ? allCountries : await getAllCountries();
  console.log(data.length);
  let capitals = data
    .filter((item) => {
      return item && item.capital && item.capital.length > 0;
    })
    .map((item) => {
      return {
        capital: item.capital,
        country: item.id,
        continents: !item.continents ? [] : item.continents,
        population: item.population,
      };
    });

  //console.log(capitals);
  return capitals;
}

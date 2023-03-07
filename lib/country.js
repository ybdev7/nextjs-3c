const ALL_COUNTRIES_URL = "https://restcountries.com/v3.1/all";
const COUNTRY_URL = "https://restcountries.com/v3.1/name/";

let allCountries = null;
let coldList = null;

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
  let capitals = data.map((item) => {
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

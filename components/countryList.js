import CountryCard from "./country";
import { useState } from "react";
import { sort } from "./country";
import withContinent from "./withContinent";
import withPerPage from "./withPerPage";
import withSort from "./withSort";
import Pagination from "./pagination";
import { usePaginate } from "../hooks/usePaginate";

function _countryList({ allCountries, continent, sortOrder, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  function inContinent(country) {
    return country && country.continents && country.continents[0] === continent;
  }

  function sortBy(countryA, countryB) {
    if (sortOrder === sort[0]) countryA.id.localeCompare(countryB.id);
    else if (sortOrder === sort[1])
      return countryB.id.localeCompare(countryA.id);
    else if (sortOrder === sort[3])
      return countryB.population - countryA.population;
    else if (sortOrder === sort[2])
      return countryA.population - countryB.population;
  }

  const filteredCountries = Array.from(
    continent === "All" ? allCountries : allCountries.filter(inContinent)
  ).sort(sortBy);

  console.log(filteredCountries.length);
  const paginatedCountries = usePaginate(
    filteredCountries,
    currentPage,
    itemsPerPage
  );

  console.log(paginatedCountries.length);
  return (
    <>
      <div className="mx-10 my-2">
        <Pagination
          items={filteredCountries.length}
          currentPage={currentPage}
          pageSize={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
          {paginatedCountries.map(
            ({ id, common, flags, region, subregion }) => (
              <div key={id}>
                <CountryCard
                  name={id}
                  region={region}
                  subregion={subregion}
                  flags={flags}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

const CountryList = withContinent(withPerPage(withSort(_countryList)));
export default CountryList;

import Country from "./country";
import { useState } from "react";
import { sort } from "./country";
import withContinent from "./withContinent";
import withPerPage from "./withPerPage";
import withSort from "./withSort";
import Pagination from "./pagination";
import { usePaginate } from "../hooks/usePaginate";
import list from "./list";
import GenericList from "./list";

function _countryList({ allCountries, continent, sortOrder, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  function inContinent(country) {
    if (continent === "All") return true;
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

  const items = Array.from(allCountries.filter(inContinent)).sort(sortBy);

  //return to first page if currentPage becomes out of range for pagination
  if (items.length < itemsPerPage * (currentPage - 1)) {
    setCurrentPage(1);
  }
  return (
    <>
      <GenericList
        items={items}
        itemsPerPage={itemsPerPage}
        cardfn={Country}
        currentPage={currentPage}
        onPageChange={onPageChange}
      ></GenericList>
    </>
  );
}

const CountryList = withContinent(withPerPage(withSort(_countryList)));
export default CountryList;

import { useState } from "react";
import { sort } from "./country";
import withContinent from "./withContinent";
import withPerPage from "./withPerPage";
import withSort from "./withSort";
import Pagination from "./pagination";
import { usePaginate } from "../hooks/usePaginate";

function _capitalList({ allCapitals, continent, sortOrder, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  function sortBy(capitalA, capitalB) {
    console.log(capitalA.capital);
    if (!capitalA || !capitalA.capital) return 0;
    else if (!capitalB || !capitalB.capital) return 0;
    else if (sortOrder === sort[0])
      return String(capitalA.capital).localeCompare(capitalB.capital);
    else if (sortOrder === sort[1])
      return String(capitalB.capital).localeCompare(capitalA.capital);
    else if (sortOrder === sort[3])
      return capitalB.population - capitalA.population;
    else if (sortOrder === sort[2])
      return capitalA.population - capitalB.population;
  }

  function inContinent(capital) {
    // console.log("here");
    // console.log(capi.capital + " " + continent);
    return capital && capital.continents && capital.continents[0] === continent;
  }
  const filteredCapitals = Array.from(
    continent === "All" ? allCapitals : allCapitals.filter(inContinent)
  ).sort(sortBy);

  console.log(filteredCapitals.length);
  const paginatedCapitals = usePaginate(
    filteredCapitals,
    currentPage,
    itemsPerPage
  );

  console.log(paginatedCapitals.length);
  return (
    <>
      <div className="mx-10 my-2">
        <Pagination
          items={filteredCapitals.length}
          currentPage={currentPage}
          pageSize={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
      <div>
        {paginatedCapitals.map((item) => (
          <div>
            {item.capital} - {item.country}
          </div>
        ))}
      </div>
    </>
  );
}

const CapitalList = withContinent(withPerPage(withSort(_capitalList)));
export default CapitalList;

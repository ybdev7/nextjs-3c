import { useState } from "react";
import { sort } from "./country";
import withContinent from "./withContinent";
import withPerPage from "./withPerPage";
import withSort from "./withSort";
import CapitalCard from "./capital";
import GenericList from "./list";

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
    if (continent === "All") return true;
    return capital && capital.continents && capital.continents[0] === continent;
  }

  const items = Array.from(allCapitals.filter(inContinent)).sort(sortBy);

  if (items.length < itemsPerPage * (currentPage - 1)) {
    setCurrentPage(1);
  }

  return (
    <>
      <GenericList
        items={items}
        itemsPerPage={itemsPerPage}
        cardfn={CapitalCard}
        currentPage={currentPage}
        onPageChange={onPageChange}
      ></GenericList>
    </>
  );
}

const CapitalList = withContinent(withPerPage(withSort(_capitalList)));
export default CapitalList;

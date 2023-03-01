import { v4 as uuidv4 } from "uuid";
import Layout, { siteTitle } from "../../components/layout";
import { getAllCountries } from "../../lib/country";
import CountryCard, {
  continents,
  itemsPerPage,
  sort,
} from "../../components/country";
import { useEffect, useState } from "react";

import Pagination from "../../components/pagination";
import { usePaginate } from "../../hooks/usePaginate";

export async function getStaticProps() {
  const allCountries = await getAllCountries();
  return {
    props: { allCountries: allCountries },
  };
}
export default function Country({ allCountries }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage[2]);
  const [continent, setContinent] = useState(continents[0]);
  const [sortOrder, setSortOrder] = useState(sort[0]);

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

  //   list of countries after all filtering and sorting applied
  const countries = Array.from(
    continent === "All" ? allCountries : allCountries.filter(inContinent)
  ).sort(sortBy);

  const paginatedCountries = usePaginate(countries, currentPage, pageSize);

  const handleContinentChange = (e) => {
    console.log(e.target.value);
    setContinent(e.target.value);
  };

  const handleItemsPerPageChange = (e) => {
    console.log(e.target.value);
    setPageSize(parseInt(e.target.value));
  };

  const handleSortOrderChange = (e) => {
    console.log(e.target.value);
    setSortOrder(e.target.value);
  };

  //return to first page after one of the filters reset
  useEffect(() => setCurrentPage(1), [pageSize, continent, sortOrder]);

  return (
    <Layout>
      <title>{siteTitle}</title>
      <section>
        <div>
          <h1>Countries</h1>
          {/* Filter by Continent */}
          <div>
            <label>Continent</label>
            <select
              id={uuidv4()}
              value={continent ? continent : continents[0]}
              onChange={handleContinentChange}
            >
              {continents.map(
                (i) =>
                  i && (
                    <option key={uuidv4()} value={i}>
                      {i}
                    </option>
                  )
              )}
            </select>
          </div>
          {/* Items per Page */}
          <div>
            <label>Items</label>
            <select
              className="filters-select"
              id={uuidv4()}
              value={pageSize}
              onChange={handleItemsPerPageChange}
            >
              {itemsPerPage.map((i) => (
                <option key={uuidv4()} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          {/* Sort Order */}
          <div>
            <label>Sort By</label>
            <select
              className="filters-select"
              id={uuidv4()}
              value={sortOrder ? sortOrder : sort[0]}
              onChange={handleSortOrderChange}
            >
              {sort.map(
                (i) =>
                  i && (
                    <option key={`sorting${uuidv4()}`} value={i}>
                      {i}
                    </option>
                  )
              )}
            </select>
          </div>
        </div>

        <Pagination
          items={countries.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />

        <ul>
          {paginatedCountries.map(
            ({ id, common, flags, region, subregion }) => (
              <li key={id}>
                <CountryCard
                  name={id}
                  region={region}
                  subregion={subregion}
                  flags={flags}
                />
              </li>
            )
          )}
        </ul>
      </section>

      <Pagination
        items={countries.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </Layout>
  );
}

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
        <div className="">
          <h1 className="text-2xl font-bold dark:text-white text-center">
            Countries
          </h1>
          {/* Filter by Continent */}
          <div>
            <label
              className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
            >
              Continent
            </label>
            <select
              className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
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
            {/* Items per Page */}
            <label
              className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
            >
              Items
            </label>
            <select
              className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
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
            {/* Sort Order */}
            <label
              className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
            >
              Sort By
            </label>
            <select
              className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
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

        <div className="mx-10">
          <Pagination
            items={countries.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>

        <div class="container mx-auto">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

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
import CountryList from "../../components/countryList";

export async function getStaticProps() {
  const allCountries = await getAllCountries();
  return {
    props: { allCountries: allCountries },
  };
}
export default function Country({ allCountries }) {
  console.log(allCountries.length);
  return (
    <Layout>
      <CountryList allCountries={allCountries} />
    </Layout>
  );
}

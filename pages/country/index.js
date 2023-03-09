import Layout from "../../components/layout";
import { getAllCountries } from "../../lib/country";
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

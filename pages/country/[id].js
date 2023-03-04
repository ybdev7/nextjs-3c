import Layout from "../../components/layout";
import Image from "next/image";
import { getAllCountriesIds, getCountryData } from "../../lib/country";
import Link from "next/link";
import ButtonLink from "../../components/buttonlink";

export async function getStaticProps({ params }) {
  const countryData = await getCountryData(params.id);
  return {
    props: {
      countryData: countryData,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getAllCountriesIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Country({ countryData }) {
  return (
    <Layout>
      {/*  container for Card */}
      <div className="flex justify-center">
        {/* Card */}
        <div
          className="w-4/5 md:w-2/3 lg:w-1/2 
          bg-slate-50 hover:bg-slate-100 border-slate-400 border rounded-lg shadow-md hover:shadow-lg "
        >
          {/* container for image */}
          <div className="grid grid-col-1 max-w-1/2">
            <Image
              priority
              className="shadow  max-w-full h-auto align-middle border-none "
              src={countryData.flags.svg}
              height={670}
              width={770}
              alt={countryData.id}
            />
          </div>

          <h2 className="text-center text-slate-900 text-2xl font-bold pt-2">
            {countryData.id}
          </h2>
          {Object.entries(countryData.nativeNames).map(([key, value]) => (
            <h2 className="text-center text-salte-800 text-xl">
              {value.official}
            </h2>
          ))}
          <label className="font-bold">Population: </label>
          <label className="text-slate-900">
            {countryData.population.toLocaleString()}
          </label>

          <br />

          <label className="font-bold">Capital: </label>
          <label className="text-slate-900">{countryData.capital}</label>
          <br />
          <label className="font-bold">Languages: </label>
          <label className="text-slate-900">
            {Object.entries(countryData.languages)
              .map(([key, value]) => value)
              .join(", ")}
          </label>

          <br />

          <label className="font-bold">Currencies: </label>
          <label className="text-slate-900">
            {Object.entries(countryData.currencies)
              .map(([key, value]) => `${value.symbol} (${key} - ${value.name})`)
              .join(", ")}
          </label>
        </div>
      </div>
      <div
        className="w-4/5 md:w-2/3 lg:w-1/2"
        // p-2 sm:p-2 md:p-3 lg:p-4 xl:p-4
        // m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4"
      >
        <ButtonLink
          href="/country"
          text=" ← Back to Countries List"
        ></ButtonLink>
      </div>
    </Layout>
  );
}

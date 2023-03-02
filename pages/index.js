import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getAllCountries } from "../lib/country";
import ButtonLink from "../components/buttonlink";

export async function getStaticProps() {
  const allCountries = await getAllCountries();
  // const allColdCoffees = await getColdCoffees();
  return {
    props: { allCountries: allCountries },
  };
}
export default function Home({ allCountries }) {
  return (
    <Layout home>
      <section className="text-center">
        <p className="text-1xl font-bold ">
          This is a sample website based on the{" "}
          <a className="underline" href="https://nextjs.org/learn">
            {" "}
            Next.js tutorial
          </a>
          <br />
          The data is provided by the{" "}
          <a className="underline" href="https://restcountries.com">
            {" "}
            REST Countries API (v3.1){" "}
          </a>
        </p>

        <div container>
          {/* <div grid grid-cols-1 gap-12> */}
          <div className="flex justify-center my-10">
            <ButtonLink href="/country" text="Countries"></ButtonLink>
            <ButtonLink href="/capital" text="Capitals"></ButtonLink>
            <ButtonLink href="/currency" text="Currencies"></ButtonLink>
          </div>
        </div>
      </section>
    </Layout>
  );
  // return (
  //   <h1 className="text-3xl font-bold text-slate-500 underline">
  //     Hello world!
  //   </h1>
  // );
}

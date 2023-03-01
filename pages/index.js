import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getAllCountries } from "../lib/country";

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
      <title>{siteTitle}</title>

      <section>
        <p className="text-1xl font-bold ">
          (This is a sample website based on the{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>

        <Link href={"/country"}>{"Countries"}</Link>
      </section>
    </Layout>
  );
  // return (
  //   <h1 className="text-3xl font-bold text-slate-500 underline">
  //     Hello world!
  //   </h1>
  // );
}

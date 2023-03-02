import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getAllCountries } from "../lib/country";
import ButtonLink from "../components/buttonlink";

export default function Home() {
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
          <div className="flex justify-center my-10">
            <ButtonLink href="/country" text="Countries"></ButtonLink>
            <ButtonLink href="/capital" text="Capitals"></ButtonLink>
            <ButtonLink href="/currency" text="Currencies"></ButtonLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}

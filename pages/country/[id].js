import Layout from "../../components/layout";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "./[id].module.css";
import { getAllCountriesIds, getCountryData } from "../../lib/country";
import Link from "next/link";

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
      <div className={styles.header}>
        <Image
          priority
          src={countryData.flags.svg}
          className={utilStyles.borderRounded}
          height={144}
          width={188}
          alt={countryData.id}
        />
        <h2 className={utilStyles.headingLg}>{countryData.id}</h2>
      </div>

      <br />
      {countryData.description}

      <div className={styles.backToHome}>
        <Link href="/country">← Back to Countries List</Link>
      </div>
    </Layout>
  );
}

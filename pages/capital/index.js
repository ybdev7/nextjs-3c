import CapitalList from "../../components/capitalList";
import Layout from "../../components/layout";
import { getAllCapitals } from "../../lib/country";

export async function getStaticProps() {
  const capitals = await getAllCapitals();
  return {
    props: { allCapitals: capitals },
  };
}

export default function Capital({ allCapitals }) {
  console.log(allCapitals.length);
  return (
    <Layout>
      <CapitalList allCapitals={allCapitals} />
    </Layout>
  );
}

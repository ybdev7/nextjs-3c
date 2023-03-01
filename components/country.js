import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

export default function Country({ name, region, subregion, flags }) {
  return (
    <Link href={`/country/${name}`}>
      <div>
        {flags && flags.svg && (
          <Image
            priority
            src={flags.svg}
            height={44}
            width={44}
            alt={`Flag of ${name}`}
          />
        )}
        {name}
        <br />
        <Tag text={region}></Tag>
        <Tag text={subregion}></Tag>
      </div>
    </Link>
  );
}

export const continents = [
  "All",
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];

export const itemsPerPage = [10, 15, 20, 30, 50, 100];

export const sort = ["A->Z", "Z->A", "Population ASC", "Population Desc"];

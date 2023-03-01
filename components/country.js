import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

export default function Country({ name, region, subregion, flags }) {
  return (
    <Link href={`/country/${name}`}>
      <div
        className="bg-white hover:bg-slate-50 border-slate-400 border rounded-lg shadow-md hover:shadow-lg 
  p-2 sm:p-2 md:p-3 lg:p-4 xl:p-4 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4;"
      >
        {flags && flags.svg && (
          <Image
            priority
            className="shadow rounded max-w-full h-auto align-middle border-none"
            height={44}
            width={84}
            src={flags.svg}
            alt={`Flag of ${name}`}
          />
        )}
        <h2 className="text-1xl font-bold dark:text-white">{name}</h2>
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

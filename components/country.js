import Image from "next/image";
import Link from "next/link";
import Tag from "./tag";

export default function Country({ name, region, subregion, flags }) {
  return (
    <Link href={`/country/${name}`}>
      <div className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-slate-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {flags && flags.svg && (
          <Image
            priority
            className="object-cover w-full rounded-t-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            height={0}
            width={0}
            src={flags.svg}
            alt={`Flag of ${name}`}
          />
        )}
        <div class="flex flex-col justify-between p-4 leading-normal">
          <div>
            <h2 className="text-1xl font-bold dark:text-white">{name}</h2>
          </div>
          <div className="grid flex-col justify-items-start mt-10">
            <Tag text={region}></Tag>
            <Tag text={subregion}></Tag>
          </div>
        </div>
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

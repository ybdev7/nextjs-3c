import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CapitalCard({ capital, country }) {
  return (
    <div className="flex flex-col-1 items-right bg-white md:flex-row md:max-w-xl ">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div>
          <h2 className="text-1xl font-bold ">{capital}</h2>
        </div>

        <Link
          className="hover:bg-slate-50 hover:cursor-pointer"
          href={`/country/${country}`}
        >
          <div className="flex flex-row items-center ">
            <div>
              <FaMapMarkerAlt />
            </div>
            <div>
              <label>{country}</label>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  //   return (
  //     <Link href={`/country/${country}`}>
  //       <div className="flex flex-row items-center">
  //         <div>
  //           <FaMapMarkerAlt />
  //         </div>
  //         <div>
  //           <label>{country}</label>
  //         </div>
  //       </div>
  //     </Link>
  //   );
}

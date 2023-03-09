import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { continents } from "./country";
/**
 * HOC that adds a dropdown of continents
 * @param {*} WrappedComponent
 * @returns WithContinent
 */
export default function withContinent(WrappedComponent) {
  const WithContinent = ({ children, ...props }) => {
    const handleContinentChange = (e) => {
      console.log(e.target.value);
      setContinent(e.target.value);
    };

    const [continent, setContinent] = useState("All");
    return (
      <>
        <label
          className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
        >
          Continent
        </label>
        <select
          className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
          id={uuidv4()}
          value={continent ? continent : continents[0]}
          onChange={handleContinentChange}
        >
          {continents.map(
            (i) =>
              i && (
                <option key={uuidv4()} value={i}>
                  {i}
                </option>
              )
          )}
        </select>

        <WrappedComponent continent={continent} {...props}>
          {children}
        </WrappedComponent>
      </>
    );
  };

  return WithContinent;
}

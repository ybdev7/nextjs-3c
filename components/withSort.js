import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { continents, sort } from "./country";

export default function withSort(WrappedComponent) {
  const WithSort = ({ children, ...props }) => {
    const handleSortOrderChange = (e) => {
      console.log(e.target.value);
      setSortOrder(e.target.value);
    };

    const [sortOrder, setSortOrder] = useState(sort[0]);
    return (
      <>
        {/* Sort Order */}
        <label
          className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
        >
          Sort By
        </label>
        <select
          className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
          id={uuidv4()}
          value={sortOrder ? sortOrder : sort[0]}
          onChange={handleSortOrderChange}
        >
          {sort.map(
            (i) =>
              i && (
                <option key={`sorting${uuidv4()}`} value={i}>
                  {i}
                </option>
              )
          )}
        </select>
        <WrappedComponent sortOrder={sortOrder} {...props}>
          {children}
        </WrappedComponent>
      </>
    );
  };

  return WithSort;
}

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { continents, itemsPerPage, sort } from "./country";
/**
 * HOC that adds a dropdown of Items Per Page
 * @param {*} WrappedComponent
 * @returns WithPerPage
 */
export default function withPerPage(WrappedComponent) {
  const WithPerPage = ({ children, ...props }) => {
    const [pageSize, setPageSize] = useState(itemsPerPage[2]);

    const handleItemsPerPageChange = (e) => {
      console.log(e.target.value);
      setPageSize(parseInt(e.target.value));
    };
    return (
      <>
        {/* Items per Page */}
        <label
          className="text-slate-700 font-medium text-sm 
  mb-2
  ml-2 sm:ml-2 md:ml-3 lg:ml-4 xl:ml-4;"
        >
          Items
        </label>
        <select
          className=" w-full sm:w-full md:w-1/4 bg-white border border-slate-300 hover:border-slate-400 
  m-2 sm:m-2 md:m-3 lg:m-4 xl:m-4
  p-1
  rounded shadow-sm leading-tight focus:outline-none"
          id={uuidv4()}
          value={pageSize}
          onChange={handleItemsPerPageChange}
        >
          {itemsPerPage.map((i) => (
            <option key={uuidv4()} value={i}>
              {i}
            </option>
          ))}
        </select>
        <WrappedComponent itemsPerPage={pageSize} {...props}>
          {children}
        </WrappedComponent>
      </>
    );
  };

  return WithPerPage;
}

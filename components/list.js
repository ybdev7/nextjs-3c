import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Pagination from "./pagination";
import { usePaginate } from "../hooks/usePaginate";

function GenericList({ items, itemsPerPage, cardfn }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  //const filteredItems = items; //Array.from(items.filter(filterfn)).sort(sorterfn);

  console.log(items.length);
  const paginatedItems = usePaginate(items, currentPage, itemsPerPage);

  console.log(paginatedItems.length);
  return (
    <>
      <div className="mx-10 my-2">
        <Pagination
          items={items.length}
          currentPage={currentPage}
          pageSize={itemsPerPage}
          onPageChange={onPageChange}
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
          {paginatedItems.map((item) => (
            <div key={uuidv4()}>{cardfn({ ...item })}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GenericList;

import { v4 as uuidv4 } from "uuid";
import Pagination from "./pagination";
import { usePaginate } from "../hooks/usePaginate";

function GenericList({
  items,
  itemsPerPage,
  onPageChange,
  currentPage,
  cardfn,
}) {
  const paginatedItems = usePaginate(items, currentPage, itemsPerPage);

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

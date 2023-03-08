export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const enabled =
    "relative block rounded py-1 px-4 text-sm font-medium text-primary-700 transition-all duration-300";
  const disabled =
    "relative block rounded bg-transparent py-1 px-4 text-sm text-neutral-600";

  const selected =
    "relative block rounded bg-slate-100 py-1 px-4 text-sm font-medium text-primary-700 transition-all duration-300";
  return (
    <div className="flex justify-center items-center">
      <ul className="list-style-none flex">
        <li key="prevPage" className={currentPage === 1 ? disabled : enabled}>
          {" "}
          <a
            className={currentPage === 1 ? "cursor-default" : "cursor-pointer"}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {" < Prev"}
          </a>
        </li>
        {pages.map((page) => (
          <li key={page} className={page === currentPage ? selected : enabled}>
            <a className="cursor-pointer" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li
          className={currentPage === pagesCount ? disabled : enabled}
          key="nextPage"
        >
          {" "}
          <a
            className={
              currentPage === pagesCount ? "cursor-default" : "cursor-pointer"
            }
            onClick={() => onPageChange(currentPage + 1)}
          >
            {"Next >"}
          </a>
        </li>
      </ul>
    </div>
  );
}

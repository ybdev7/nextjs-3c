import styles from "./pagination.module.css";

export default function Pagination({
  items,
  pageSize,
  currentPage,
  onPageChange,
}) {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div>
      <ul className={styles.pagination}>
        <li key="prevPage">
          {" "}
          <a
            className={currentPage === 1 ? styles.disable : styles.pageLink}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {" < Prev"}
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? styles.pageItemSelected : styles.pageItem
            }
          >
            <a className={styles.pageLink} onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li key="nextPage">
          {" "}
          <a
            className={
              currentPage === pagesCount ? styles.disable : styles.pageLink
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

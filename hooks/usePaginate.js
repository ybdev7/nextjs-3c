export const usePaginate = (items, pageNumber, pageSize) => {
  console.log(items.length);
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

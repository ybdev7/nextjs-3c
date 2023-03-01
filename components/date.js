import { parseISO, format } from "date-fns";

export default function DateString({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

export function DateMS({ date }) {
  const dateString = parseISO(new Date(date).toString());
  return (
    <time dateTime={dateString}>{format(new Date(date), "LLLL d, yyyy")}</time>
  );
}

import Link from "next/link";

export default function ButtonLink({ href, text }) {
  return (
    <div className="m-4">
      <Link
        className="px-4 py-2 text-blue-100 no-underline 
        bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200"
        href={href}
      >
        {text}
      </Link>
    </div>
  );
}

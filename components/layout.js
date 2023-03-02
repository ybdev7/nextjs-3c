import Link from "next/link";
import ButtonLink from "./buttonlink";
const name = "Countries, Capitals & Currencies";
const logoName = "3C";
export const siteTitle = "Counries - Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        {home ? (
          <>
            <h1 className="text-center mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {name}
            </h1>
          </>
        ) : (
          <div className="my-5 text-center">
            <Link
              href="/"
              className=" rounded-full bg-slate-100 border 
             text-center py-2 px-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
            >
              {logoName}
            </Link>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && <ButtonLink href="/" text=" ← Back to home"></ButtonLink>}
    </div>
  );
}

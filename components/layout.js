import Link from "next/link";

const name = "Countries, Capitals & Currencies";
export const siteTitle = "Counries - Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        {home ? (
          <>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              {name}
            </h1>
          </>
        ) : (
          <></>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";

const name = "Countries, Capitals & Currencies";
export const siteTitle = "Counries - Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <header>
        {home ? (
          <>
            <h1>{name}</h1>
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

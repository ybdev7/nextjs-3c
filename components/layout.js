import Link from "next/link";
import ButtonLink from "./buttonlink";
const name = "Countries, Capitals & Currencies";
const logoName = "3C";
export const siteTitle = "Counries - Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {home ? (
          <>
            <h1 className="text-center mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
              {name}
            </h1>
          </>
        ) : (
          <div className="my-5 text-center">
            <Link
              href="/"
              className=" rounded-full bg-slate-100 border 
             text-center py-2 px-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "
            >
              {logoName}
            </Link>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && <ButtonLink href="/" text=" ← Back to home"></ButtonLink>}

      <footer className="mt-auto p-4 bg-slate-50 sm:p-6 ">
        <div className="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <span>3C - Countries, Capitals & Currencies</span>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul class="text-gray-600 ">
                <li>
                  <a href="https://nextjs.com/" class="hover:underline">
                    NextJS
                  </a>
                </li>
                <li>
                  <a href="https://restcountries.com/" class="hover:underline">
                    REST Countries
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow us
              </h2>
              <ul class="text-gray-600 ">
                <li class="mb-4">
                  <a href="https://github.com/ybdev7" class="hover:underline ">
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

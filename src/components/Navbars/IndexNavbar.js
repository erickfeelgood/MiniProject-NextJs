import React from "react";
import Link from "next/link";
import IndexDropdown from "../Dropdowns/IndexDropdown";

// import IndexDropdown from '../Dropdowns/IndexDropdown';

export default function IndexNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              <img width={"100px"} 
          className="max-w-100-px"
          src="assets/logo-bm.png"
          alt="Bank Mega"
        />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/products-ssg-isr"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  SSG+ISR
                </Link>

                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/products-ssr"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  SSR
                </Link>

                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/products-csr"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  CSR
                </Link>

                <Link
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/products-swr"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  SWR
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

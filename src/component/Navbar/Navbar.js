import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";

import Mobilemenu from "./Mobilemenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      {/* <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Kancha Store
          </Link>
        </div>
        <div className="right">
          <div className="right">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="right">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icon">
            <SearchIcon />
            <AccountCircleIcon />
            <FavoriteIcon />
            <div className="container" ref={menuRef}>
              <div className="carticon" onClick={() => setOpen(!open)}>
                <ShoppingCartRoundedIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />} */}

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Kancha Shop
          </Link>

          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="flex mr-3 text-sm  rounded-full md:mr-0 hover:scale-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <div className="container">
                <div
                  className="hover:scale-110 transition-all cursor-pointer"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <ShoppingCartRoundedIcon />
                  <span>{products.length}</span>
                </div>
              </div>
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={() => {
                setMenuOpen(true);
                setOpen(false);
              }}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {menuOpen ? <Mobilemenu close={() => setMenuOpen(false)} /> : <></>}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/products/1"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/products/2"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/products/3"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Children
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

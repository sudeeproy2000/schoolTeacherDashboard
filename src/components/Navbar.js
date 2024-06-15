import React, { useState } from "react";
import logo from "../assets/rvssLogo.png";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

function Navbar() {
  const { login, register, isLoading, isAuthenticated, user, logout } =
    useKindeAuth();

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-sky-600">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="https://rvssgroup.com" className="flex ms-2 md:me-24">
              <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white text-white">
                Class Teacher Dashboard
              </span> */}
            </a>
          </div>
          {/* <div className="text-white font-bold">
            <ul className="flex flex-row justify-around gap-4">
              <li className="cursor-pointer">Attendance</li>
              <li className="cursor-pointer">Progress Report</li>
              <li className="cursor-pointer">Id Card</li>
              <li className="cursor-pointer">Subjects</li>
            </ul>
          </div> */}
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isUserDropdownOpen}
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  {!isLoading && isAuthenticated && (
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user?.picture}
                      alt="user photo"
                    />
                  )}
                </button>
              </div>
              {isUserDropdownOpen && !isLoading && isAuthenticated && (
                <div
                  className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">
                      {user?.given_name}
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                      {user?.email}
                    </p>
                  </div>
                  <ul className="py-1">
                    {/* <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li> */}
                    <li>
                      <button
                        type="button"
                        onClick={() => logout()}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

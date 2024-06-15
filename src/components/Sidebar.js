import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isNestedMenuOpen, setIsNestedMenuOpen] = useState(false);
  const [nestedMyClass, setNestedMyClass] = useState(false);

  const toggleNestedMenu = () => {
    setIsNestedMenuOpen(!isNestedMenuOpen);
  };

  const toggleMyClass = () => {
    setNestedMyClass(!nestedMyClass);
  };

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-sky-600 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800 bg-sky-600">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-white rounded-lg dark:text-gray-400  hover:bg-gray-900 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleMyClass}
              className="flex items-center p-2 w-full text-left text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">My Class</span>
              <svg
                className={`w-4 h-4 ml-auto transition-transform ${
                  nestedMyClass ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            {nestedMyClass && (
              <ul className="space-y-2 pl-8 mt-2">
                <li>
                  <Link
                    to="/myclass/attendance"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Attendance</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/students"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Students</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/reportcard"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Report Card</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/progressreport"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400  hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Progress Report</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/idcard"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Id Card</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/addnewstudents"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Add New Student</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/myclass/subjects"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Subjects</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={toggleNestedMenu}
              className="flex items-center p-2 w-full text-left text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">My Other Class</span>
              <svg
                className={`w-4 h-4 ml-auto transition-transform ${
                  isNestedMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            {isNestedMenuOpen && (
              <ul className="space-y-2 pl-8 mt-2">
                <li>
                  <Link
                    to="/myotherclass/progressreport"
                    className="flex items-center p-2 text-white rounded-lg dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 group"
                  >
                    <span className="ms-3">Progress Report</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/schoolcalendar"
              className="flex items-center p-2 text-white rounded-lg dark:text-gray-400  hover:bg-gray-900 dark:hover:bg-gray-700 group"
            >
              <span className="ms-3">School Calender</span>
            </Link>
          </li>
          {/* Add other sidebar items similarly */}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

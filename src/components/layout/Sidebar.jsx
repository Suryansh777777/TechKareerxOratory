import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
          <li>
            <a
              href="#"
              className="block py-2 px-4 bg-red-100 text-red-700 rounded"
            >
              Job preview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
            >
              Applicants
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
            >
              Match
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
            >
              Messages
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

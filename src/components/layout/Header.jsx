import React from "react";
import Icon from "../common/Icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">Logo</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-red-500 font-medium">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500">
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-500">
                Payments
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Icon name="bell" className="text-gray-600" />
          <Icon name="user" className="text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;

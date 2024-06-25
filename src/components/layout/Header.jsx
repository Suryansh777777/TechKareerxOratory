import React from "react";
import Icon from "../common/Icon";

const Header = () => {
  return (
    <header className="bg-white ">
      <div className=" mx-auto px-12 py-5 flex items-center border-b-2 justify-between">
        <div className="text-xl text-[#DC4A2D] bg-[#E7E7E7] px-4 py-2 font-bold">
          Logo
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-14 border rounded-full px-4 py-3  ">
            <li>
              <a
                href="#"
                className="text-white font-medium border-4 px-4 py-2 rounded-full bg-[#DC4A2D] border-[#FCB4A5]"
              >
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
          <div className="relative">
            <div className="text-black hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.667 28h-5.334M24 10.667a8 8 0 1 0-16 0c0 4.12-1.04 6.941-2.2 8.807-.98 1.574-1.47 2.36-1.452 2.58.02.244.072.336.268.482.177.13.974.13 2.57.13h17.629c1.595 0 2.392 0 2.57-.13.195-.146.247-.239.267-.482.017-.22-.472-1.006-1.451-2.58C25.039 17.608 24 14.787 24 10.667Z"
                />
              </svg>
            </div>

            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#DC4A2D] ring-0 ring-white" />
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
              viewBox="0 0 12 8"
            >
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
                d="m1 1.5 5 5 5-5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

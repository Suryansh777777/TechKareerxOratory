import React, { useState } from "react";
import Atlassian from "../../../public/images/AtlassianNav.png";
const JobsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      stroke="#fff"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 21.5v-14c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.605 3.5 11.07 3.5 12 3.5c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 6.105 16 6.57 16 7.5v14m-10.8 0h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.98 22 19.42 22 18.3v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7.5 19.92 7.5 18.8 7.5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 9.02 2 9.58 2 10.7v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218Z"
    />
  </svg>
);

const MessagesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      stroke="#B0B0B0"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3.5 6.12 3.5 7.8 3.5h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.78 21 6.62 21 8.3v5.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H9.684c-.624 0-.936 0-1.235.061a2.997 2.997 0 0 0-.762.267c-.27.14-.514.334-1.002.724L4.3 21.46c-.416.333-.624.5-.8.5a.5.5 0 0 1-.39-.188C3 21.635 3 21.368 3 20.836V8.3Z"
    />
  </svg>
);

const PaymentsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      stroke="#B0B0B0"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M13.53 8.852a3.5 3.5 0 1 1 .941-4.704M6 20.588h2.61c.34 0 .679.04 1.009.12l2.758.67a4.26 4.26 0 0 0 1.826.043l3.05-.593a4.204 4.204 0 0 0 2.127-1.107l2.158-2.1a1.503 1.503 0 0 0 0-2.168 1.61 1.61 0 0 0-2.06-.143l-2.515 1.835a2.12 2.12 0 0 1-1.25.405h-2.427 1.545c.871 0 1.577-.687 1.577-1.534v-.307a1.54 1.54 0 0 0-1.194-1.487l-2.385-.58a5.03 5.03 0 0 0-1.186-.142c-.965 0-2.711.799-2.711.799L6 15.525M20 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 15.1v5.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.054.109h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C6 21.74 6 21.46 6 20.9v-5.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C5.24 13.5 4.96 13.5 4.4 13.5h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C2 14.26 2 14.54 2 15.1Z"
    />
  </svg>
);

const Header = () => {
  const [activeTab, setActiveTab] = useState("Jobs");

  const navItems = [
    { id: "Jobs", icon: <JobsIcon /> },
    { id: "Messages", icon: <MessagesIcon /> },
    { id: "Payments", icon: <PaymentsIcon /> },
  ];
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center border-b-2 justify-between">
          <div className="text-xl text-[#DC4A2D] bg-[#E7E7E7] px-4 py-2 font-semibold">
            Logo
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-14 border rounded-full px-2 py-2">
              {navItems.map((item) => (
                <li key={item.id} className="flex items-center">
                  <div
                    className={`flex items-center font-medium px-4 py-2 rounded-full transition-colors duration-200 ${
                      activeTab === item.id
                        ? "text-white bg-[#DC4A2D] border-2 border-[#FCB4A5]"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.icon}
                    <a href="#" className="ml-2">
                      {item.id}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="text-black hover:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.667 28h-5.334M24 10.667a8 8 0 10-16 0c0 4.12-1.04 6.941-2.2 8.807-.98 1.574-1.47 2.36-1.452 2.58.02.244.072.336.268.482.177.13.974.13 2.57.13h17.629c1.595 0 2.392 0 2.57-.13.195-.146.247-.239.267-.482.017-.22-.472-1.006-1.451-2.58C25.039 17.608 24 14.787 24 10.667z"
                  />
                </svg>
              </div>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-[#DC4A2D] ring-0 ring-white" />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              <img src={Atlassian} />
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="m1 1.5 5 5 5-5"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="h-[100px]"></div>
    </>
  );
};

export default Header;

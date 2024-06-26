import React from "react";
import Button from "../common/Button";

const deleteJobIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <path
      stroke="#DC4A2D"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 .5h5M1 3h15m-1.667 0-.584 8.766c-.088 1.315-.132 1.973-.416 2.472a2.5 2.5 0 0 1-1.082 1.012c-.516.25-1.175.25-2.493.25H7.242c-1.318 0-1.977 0-2.493-.25a2.5 2.5 0 0 1-1.082-1.012c-.284-.5-.328-1.157-.416-2.472L2.667 3m4.166 3.75v4.167m3.334-4.167v4.167"
    />
  </svg>
);

const editJobIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <g clip-path="url(#a)">
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M12 6.667 9.333 4M1.667 14.333l2.256-.25c.276-.031.413-.046.542-.088.114-.037.223-.09.324-.155.113-.075.21-.173.407-.37L14 4.668A1.886 1.886 0 1 0 11.333 2L2.53 10.804c-.196.196-.294.294-.369.407-.066.1-.118.21-.155.324-.042.129-.057.266-.088.542l-.25 2.256Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
const userIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#4F4F4F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M18.333 17.5v-1.667a3.335 3.335 0 0 0-2.5-3.228m-2.916-9.863a3.334 3.334 0 0 1 0 6.182m1.25 8.576c0-1.553 0-2.33-.254-2.942a3.333 3.333 0 0 0-1.804-1.804c-.613-.254-1.39-.254-2.942-.254h-2.5c-1.553 0-2.33 0-2.943.254a3.334 3.334 0 0 0-1.804 1.804c-.253.612-.253 1.389-.253 2.942M11.25 5.833a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
    />
  </svg>
);

const usercheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#4F4F4F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M10 12.917H6.25c-1.163 0-1.744 0-2.218.143a3.333 3.333 0 0 0-2.222 2.222c-.143.473-.143 1.055-.143 2.218M13.333 15 15 16.667l3.333-3.334m-6.25-7.083a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
);

const messageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#4F4F4F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M2.5 6.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C4.4 2.5 5.1 2.5 6.5 2.5h7c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5V11c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C15.6 15 14.9 15 13.5 15H8.07c-.52 0-.78 0-1.029.051a2.5 2.5 0 0 0-.635.223c-.226.115-.429.278-.835.603l-1.988 1.59c-.347.277-.52.416-.666.416a.417.417 0 0 1-.326-.157c-.091-.114-.091-.336-.091-.78V6.5Z"
    />
  </svg>
);
const eyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#4F4F4F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M2.017 10.594c-.114-.18-.17-.27-.202-.408a.978.978 0 0 1 0-.372c.032-.139.088-.229.202-.408.938-1.485 3.73-5.24 7.983-5.24 4.255 0 7.046 3.755 7.984 5.24.113.18.17.27.202.408a.976.976 0 0 1 0 .372c-.032.139-.089.229-.202.408-.938 1.485-3.73 5.24-7.984 5.24s-7.045-3.755-7.983-5.24Z"
    />
    <path
      stroke="#4F4F4F"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);

const JobStats = () => {
  return (
    <aside className="w-full md:w-96 bg-[#FCFCFC] shadow-md border-l-2 p-6">
      <div className="flex justify-center  space-x-2 items-center">
        <Button variant="outline">Delete job</Button>
        <Button variant="primary">Edit job</Button>
      </div>
      <div className="mt-2 md:mt-4 space-y-2 md:space-y-0 md:space-x-2"></div>
      <ul className="space-y-4">
        <li className="flex justify-between">
          <span>Applicants</span>
          <span className="font-semibold">400</span>
        </li>
        <li className="flex justify-between">
          <span>Matches</span>
          <span className="font-semibold">100</span>
        </li>
        <li className="flex justify-between">
          <span>Messages</span>
          <span className="font-semibold">147</span>
        </li>
        <li className="flex justify-between">
          <span>Views</span>
          <span className="font-semibold">800</span>
        </li>
      </ul>
    </aside>
  );
};

export default JobStats;

import React from "react";
import Button from "../common/Button";

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

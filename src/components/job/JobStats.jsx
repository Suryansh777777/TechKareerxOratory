import React from "react";

const JobStats = () => {
  return (
    <aside className="w-full md:w-64 bg-white shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Job Stats</h2>
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

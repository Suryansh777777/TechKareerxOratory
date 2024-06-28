import React from "react";

const JobDetails = () => {
  return (
    <div className="mt-2 px-0 md:px-8 ">
      <h2 className="text-lg font-medium text-[#6E6D6D] mb-2">About the job</h2>
      <ul className="list-decimal text-[#3D3D3D] list-inside space-y-2 mb-3">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ul>
      <h3 className="font-medium  text-[#3D3D3D]  mb-2">Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 text-[#3D3D3D]  mb-2">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h3 className="font-medium text-[#3D3D3D]  mb-2">Schedule:</h3>
      <ul className="list-disc list-inside space-y-1 text-[#3D3D3D]  mb-2">
        <li>Day shift</li>
      </ul>
      <h3 className="font-medium mb-2 text-[#3D3D3D] ">
        Supplemental pay types:
      </h3>
      <ul className="list-disc list-inside space-y-1 text-[#3D3D3D]  mb-2">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <p className="font-medium text-[#3D3D3D]">Work Location: In person</p>
    </div>
  );
};

export default JobDetails;

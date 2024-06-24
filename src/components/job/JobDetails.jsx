import React from "react";

const JobDetails = () => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">About the job</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ul>
      <h3 className="font-semibold mb-2">Benefits:</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h3 className="font-semibold mb-2">Schedule:</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Day shift</li>
      </ul>
      <h3 className="font-semibold mb-2">Supplemental pay types:</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <p>
        <strong>Work Location:</strong> In person
      </p>
    </div>
  );
};

export default JobDetails;

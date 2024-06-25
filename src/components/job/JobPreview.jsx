import React from "react";
import Badge from "../common/Badge";
import Button from "../common/Button";

const JobPreview = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold">Senior Product Designer</h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2 text-gray-600 mt-1">
            <span>Delaware, USA</span>
            <span className="hidden md:inline">•</span>
            <span>$300k-$400k</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-start text-sm">
        <div className="flex flex-col gap-2 ">
          <div className="font-medium">Skills Required </div>
          <span className="border-2 font-medium" icon="figma">
            Figma
          </span>
          <span className="border-2 font-medium" icon="illustrator">
            Adobe Illustrator
          </span>
          <span className="border-2 font-medium" icon="xd">
            Adobe XD
          </span>
        </div>
        <div>
          <div className="font-medium">Preferred Language</div>
          <div>English</div>
        </div>
        <div>
          <div className="font-medium">Type</div>
          <div>Full time</div>
        </div>
        <div>
          <div className="font-medium">Years of Experience</div>
          <div>3+ Years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;

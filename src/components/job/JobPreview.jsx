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
        <div className="mt-2 md:mt-0 space-y-2 md:space-y-0 md:space-x-2">
          <Button variant="outline">Delete job</Button>
          <Button variant="primary">Edit job</Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge icon="figma">Figma</Badge>
        <Badge icon="illustrator">Adobe Illustrator</Badge>
        <Badge icon="xd">Adobe XD</Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
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

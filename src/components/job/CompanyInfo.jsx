import React from "react";
import Atlassian from "/images/AtlassianDesc.png";

const CompanyInfo = () => {
  return (
    <div className="mt-8 border-t pt-6">
      <div className="flex justify-start items-center mb-3">
        <img src={Atlassian} className="w-8 h-8" />
        <h2 className="text-lg font-medium ml-2 text-[#4F4F4F]">Atlassian</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Company size</h3>
          <p className="text-[#3D3D3D]">1k - 2k Employees</p>
        </div>
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Type</h3>
          <p className="text-[#3D3D3D]">Private</p>
        </div>
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Sector</h3>
          <p className="text-[#3D3D3D]">
            Information Technology, Infrastructure
          </p>
        </div>
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Funding</h3>
          <p className="text-[#3D3D3D]">Bootstrapped</p>
        </div>
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Founded In</h3>
          <p className="text-[#3D3D3D]">2019</p>
        </div>
        <div>
          <h3 className="font-medium text-[#6E6D6D]">Founded By</h3>
          <p className="text-[#3D3D3D]">Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

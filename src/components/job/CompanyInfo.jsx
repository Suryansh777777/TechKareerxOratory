import React from "react";

const CompanyInfo = () => {
  return (
    <div className="mt-8 border-t pt-6">
      <h2 className="text-lg font-semibold mb-4">Company Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium">Company size</h3>
          <p>1k - 2k Employees</p>
        </div>
        <div>
          <h3 className="font-medium">Type</h3>
          <p>Private</p>
        </div>
        <div>
          <h3 className="font-medium">Sector</h3>
          <p>Information Technology, Infrastructure</p>
        </div>
        <div>
          <h3 className="font-medium">Funding</h3>
          <p>Bootstrapped</p>
        </div>
        <div>
          <h3 className="font-medium">Founded In</h3>
          <p>2019</p>
        </div>
        <div>
          <h3 className="font-medium">Founded By</h3>
          <p>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import JobPreview from "../job/JobPreview";
import JobDetails from "../job/JobDetails";
import JobStats from "../job/JobStats";
import CompanyInfo from "../job/CompanyInfo";

const JobPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <JobPreview />
            <JobDetails />
            <CompanyInfo />
          </div>
        </main>
        <JobStats />
      </div>
    </div>
  );
};

export default JobPage;

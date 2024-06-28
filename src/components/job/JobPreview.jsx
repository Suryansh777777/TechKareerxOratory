import React from "react";

const jobData = {
  title: "Senior Product Designer",
  location: "Delaware, USA",
  salary: "$300k-$400k",
  postedTime: "2 days ago",
  status: "Open",
  skills: [
    { id: 1, icon: "/images/figma.png", text: "Figma" },
    { id: 2, icon: "/images/adobeIllus.png", text: "Adobe Illustrator" },
    { id: 3, icon: "/images/adobexd.png", text: "Adobe XD" },
  ],
  language: "English",
  type: "Full time",
  experience: "3+ Years of Experience",
};

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const SalaryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const JobPreview = () => {
  return (
    <div className="max-w-8xl mx-auto p-6">
      <header className="mb-8">
        <div className="flex justify-start items-center gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{jobData.title}</h1>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">
              posted {jobData.postedTime}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              {jobData.status}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center text-gray-600 mt-2">
          <span className="flex items-center">
            <LocationIcon />
            <span className="ml-1">{jobData.location}</span>
          </span>
          <span className="mx-2 hidden sm:inline">•</span>
          <span className="flex items-center">
            <SalaryIcon />
            <span className="ml-1">{jobData.salary}</span>
          </span>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-gray-200">
        <div className="space-y-4">
          <h2 className="text-sm font-medium text-gray-500">Skills Required</h2>
          <div className="flex flex-col space-y-2">
            {jobData.skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center space-x-2 py-1 px-2 border rounded-md w-fit"
              >
                <img src={skill.icon} alt="" className="w-5 h-5" />
                <span className="text-sm font-medium text-gray-700">
                  {skill.text}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">
            Preferred Language
          </h2>
          <p className="text-base font-semibold text-gray-700">
            {jobData.language}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">Type</h2>
          <p className="text-base font-semibold text-gray-700">
            {jobData.type}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-gray-500 mb-4">
            Years of Experience
          </h2>
          <p className="text-base font-semibold text-gray-700">
            {jobData.experience}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;

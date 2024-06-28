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
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 18 23"
  >
    <path
      stroke="#5D5D5D"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#5D5D5D"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 21.5c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z"
    />
  </svg>
);

const SalaryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="21"
    fill="none"
    viewBox="0 0 22 21"
  >
    <path
      stroke="#5D5D5D"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.6"
      d="M12 3.5c0 1.105-2.462 2-5.5 2S1 4.605 1 3.5m11 0c0-1.105-2.462-2-5.5-2S1 2.395 1 3.5m11 0V5M1 3.5v12c0 1.105 2.462 2 5.5 2m0-8c-.169 0-.335-.003-.5-.008C3.197 9.4 1 8.543 1 7.5m5.5 6c-3.038 0-5.5-.895-5.5-2M21 10c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0v7.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2V10m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2"
    />
  </svg>
);

const JobPreview = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 ">
      <header className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2 sm:mb-0">
            {jobData.title}
          </h1>
          <div className="flex items-center">
            <span className="hidden sm:inline text-[#D1D1D1] mx-2">•</span>
            <span className="text-xs sm:text-sm text-gray-500 mr-2">
              posted {jobData.postedTime}
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1"></span>
              {jobData.status}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mt-4 text-base sm:text-lg pb-8 border-b border-gray-200">
          <span className="flex items-center mb-2 sm:mb-0">
            <LocationIcon />
            <span className="ml-2">{jobData.location}</span>
          </span>
          <span className="hidden sm:inline text-[#D1D1D1] mx-4">•</span>
          <span className="flex items-center">
            <SalaryIcon />
            <span className="ml-2">{jobData.salary}</span>
          </span>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8  border-b border-gray-200">
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

import React from "react";

const jobData = {
  title: "Senior Product Designer",
  location: "Delaware, USA",
  salary: "$300k-$400k",
  skills: [
    { id: 1, icon: "/images/figma.png", text: "Figma" },
    { id: 2, icon: "/images/adobeIllus.png", text: "Adobe Illustrator" },
    { id: 3, icon: "/images/adobexd.png", text: "Adobe XD" },
  ],
  language: "English",
  type: "Full time",
  experience: "3+ Years of Experience",
};

const JobPreview = () => {
  return (
    <div className="max-w-8xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{jobData.title}</h1>
        <div className="flex flex-wrap items-center text-gray-600 mt-2">
          <span>{jobData.location}</span>
          <span className="mx-2 hidden sm:inline">•</span>
          <span>{jobData.salary}</span>
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

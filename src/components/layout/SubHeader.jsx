import React from "react";

const navItems = [
  { id: "job-preview", label: "Job preview" },
  { id: "applicants", label: "Applicants" },
  { id: "match", label: "Match" },
  { id: "messages", label: "Messages" },
];

const SubHeader = () => {
  const [activeTab, setActiveTab] = React.useState("job-preview");

  return (
    <header className="w-full bg-white border-b-2 overflow-x-auto">
      <nav className="mx-auto px-4 sm:px-6 lg:px-28">
        <ul className="flex whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0 mr-4 sm:mr-8 md:mr-14">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
                className={`
                  block py-4 px-1 text-sm sm:text-base md:text-lg transition-colors duration-200 border-b-2
                  ${
                    activeTab === item.id
                      ? "text-[#DC4A2D] font-semibold border-red-700"
                      : "text-[#888888] border-transparent hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SubHeader;

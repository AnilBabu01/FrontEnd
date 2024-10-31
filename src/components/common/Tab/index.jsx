import { useState } from "react";
import { useRouter } from "next/router";
export default function Tab({ tabs,defalutRoute }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(defalutRoute);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (link) => {
    router.push(link);
    setIsDropdownOpen(false);
    setActiveTab(link);
  };

  return (
    <div className="w-full">
      <div className="hidden apply-dark md:flex justify-center space-x-4 mt-4 bg-[#d7d6f6] rounded-[25px]">
        {tabs.map((tab) => (
          <button
            key={tab.url}
            className={`py-3 apply-dark-text px-4 transition-colors duration-300 ease-in-out rounded-[25px] w-[13%] ${
              activeTab === tab.url ? "bg-[#4b4bf3] text-[#ffff]" : "text-black"
            }`}
            onClick={() => handleTabClick(tab.url)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="md:hidden w-full mt-4 relative">
        <button
          className="w-full bg-gray-200 text-black py-2 px-4 rounded-lg flex justify-between items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {tabs.find((tab) => tab.url === activeTab)?.label}
          <svg
            className={`w-5 h-5 transition-transform transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="absolute w-full bg-gray-200 rounded-lg mt-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`block w-full text-left py-2 px-4 transition-colors duration-300 ease-in-out ${
                  activeTab === tab.url
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => handleTabClick(tab.url)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

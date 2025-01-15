// components/ActivitySection.tsx
import React, { useState } from "react";
import { ActivityCategory } from "@/constants/activities";

const ActivitySection: React.FC<ActivityCategory> = ({ title, emoji, subcategories, items }) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleSubcategory = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4 space-x-3">
        <span className="text-3xl">{emoji}</span>
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h4>
      </div>
      {subcategories ? (
        <ul className="space-y-4 pl-4">
          {subcategories.map((subcategory, index) => (
            <li key={index}>
              <h5
                role="button"
                aria-expanded={expanded[index]}
                tabIndex={0}
                onClick={() => toggleSubcategory(index)}
                onKeyDown={(e) => e.key === "Enter" && toggleSubcategory(index)}
                className="text-lg font-semibold text-gray-700 dark:text-gray-300 cursor-pointer flex items-center justify-between"
              >
                {subcategory.title}
                <span className="text-sm">{expanded[index] ? "▲" : "▼"}</span>
              </h5>
              {expanded[index] && (
                <ul className="space-y-2 pl-4 mt-2">
                  {subcategory.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2 pl-4">
          {items?.map((item, index) => (
            <li
              key={index}
              className="text-gray-700 dark:text-gray-300 flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivitySection;

import React, { useState } from "react";

// Types
type ActivitySubCategory = {
  title: string;
  items: string[];
};

type ActivityCategory = {
  title: string;
  emoji: string;
  subcategories?: ActivitySubCategory[];
  items?: string[];
};

// Data
const activitySections: ActivityCategory[] = [
  {
    title: "Recreational Activities",
    emoji: "🏄",
    subcategories: [
      {
        title: "Water Activities",
        items: ["Swimming Pool", "Rain Dance", "Paddle Boating in the Farm Pond"],
      },
      {
        title: "Rides",
        items: ["Camel Riding", "Horse Riding", "Bullock Cart Rides"],
      },
      {
        title: "Other Experiences",
        items: ["Selfie Points", "Photo Shoot Arrangement in the Grape Garden"],
      },
    ],
  },
  {
    title: "Kids' Zone",
    emoji: "🎠",
    items: ["Well-equipped Playground (Jingle Pad, Sliders, Spider, Swing, and others)"],
  },
  {
    title: "Sports and Games",
    emoji: "🏐",
    items: ["Volleyball", "Football", "Badminton", "Cricket Ground"],
  },
  {
    title: "Accommodation",
    emoji: "🏡",
    items: ["Comfortable Accommodation Facilities"],
  },
  {
    title: "Food",
    emoji: "🍽️",
    items: ["Roasted Corn and Dal Batti in Ghee", "Traditional Village Food"],
  },
];

// Component
const ActivitySection: React.FC<ActivityCategory> = ({ title, emoji, subcategories, items }) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleSubcategory = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4 space-x-3">
        <span className="text-3xl mr-2">{emoji}</span>
        <h4 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h4>
      </div>
      {subcategories ? (
        <ul className="space-y-4 pl-4">
          {subcategories.map((subcategory, index) => (
            <li key={index}>
              <h5
                className="text-lg font-semibold text-gray-700 dark:text-gray-300 cursor-pointer flex items-center justify-between"
                onClick={() => toggleSubcategory(index)}
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

const Activity: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 flex items-center justify-center space-x-3">
            <span className="text-4xl mr-3">🏞️</span>
            <span>Activities and Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the exciting experiences awaiting you
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {activitySections.map((section, index) => (
            <ActivitySection
              key={index}
              title={section.title}
              emoji={section.emoji}
              subcategories={section.subcategories}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;

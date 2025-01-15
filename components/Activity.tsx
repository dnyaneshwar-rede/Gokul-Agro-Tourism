// components/Activity.tsx
import React from "react";
import ActivitySection from "./ActivitySection";
import { activitySections } from "@/constants/activities";

const Activity: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 py-4 px-8 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-green-500 dark:text-white mb-4 flex items-center justify-center space-x-6">
            <span className="text-4xl mr-3">🏞️</span>
            <span>Activities and Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the exciting experiences awaiting you
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

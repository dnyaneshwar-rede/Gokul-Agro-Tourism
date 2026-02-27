import React, { useState } from "react";
import { ActivityCategory } from "@/constants/activities";
import { motion, AnimatePresence } from "framer-motion";

const ActivitySection: React.FC<ActivityCategory> = ({ title, emoji, subcategories, items }) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleSubcategory = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)" }}
      className="bg-white dark:bg-gray-900 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-80 rounded-2xl shadow-md p-6 mb-6 transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex items-center mb-4 space-x-4">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="text-4xl transition-all duration-300"
        >
          {emoji}
        </motion.div>
        <h4 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-300">
          {title}
        </h4>
      </div>

      {/* Subcategories */}
      {subcategories ? (
        <ul className="space-y-4">
          {subcategories.map((subcategory, index) => (
            <li key={index} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-none">
              <button
                onClick={() => toggleSubcategory(index)}
                className={`w-full text-left py-3 px-4 rounded-xl flex items-center justify-between transition-all duration-300
                  ${expanded[index] 
                    ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300' 
                    : 'text-gray-800 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              >
                <span className="font-semibold text-lg">{subcategory.title}</span>
                <motion.span
                  animate={{ rotate: expanded[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {expanded[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-2 pl-5"
                  >
                    <ul className="space-y-2">
                      {subcategory.items.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 }}
                          className="text-gray-800 dark:text-gray-300 flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
                        >
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-gray-800 dark:text-gray-300 flex items-center space-x-3 py-3 px-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ActivitySection;

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
  headerClassName?: string;
}

const CustomTabs: React.FC<TabProps> = ({ tabs, headerClassName }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='w-full'>
      {/* Tab Labels */}
      <div
        className={`relative flex space-x-10 border-b border-transparent ${headerClassName}`}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative cursor-pointer px-2 pb-2 text-xl transition-all md:text-2xl ${
              activeTab === index
                ? 'text-secondary-default font-semibold'
                : 'font-medium text-gray-300'
            }`}
          >
            <h2>{tab.label}</h2>
            {activeTab === index && (
              <motion.div
                layoutId='underline'
                className='bg-secondary-default absolute -bottom-0.5 left-0 h-0.5 w-full rounded'
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className='mt-16 transition-opacity duration-300'>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default CustomTabs;

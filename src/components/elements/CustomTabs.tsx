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
  const activePanelId = `custom-tab-panel-${activeTab}`;

  return (
    <div className='w-full'>
      <div className='w-full overflow-x-auto pb-2'>
        <div
          role='tablist'
          aria-label='Project categories'
          className={`mx-auto flex w-max min-w-full items-center justify-start gap-3 rounded-4xl border border-slate-200/80 bg-white/80 p-2 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/5 ${headerClassName}`}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              id={`custom-tab-${index}`}
              role='tab'
              type='button'
              aria-selected={activeTab === index}
              aria-controls={`custom-tab-panel-${index}`}
              onClick={() => setActiveTab(index)}
              className={`all__trans relative isolate flex shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] px-5 py-4 text-sm font-semibold tracking-[0.08em] whitespace-nowrap uppercase md:min-w-42.5 md:text-base ${
                activeTab === index
                  ? 'dark:text-primary-default text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-white/70 dark:hover:text-white'
              }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId='active-tab-pill'
                  transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  className='absolute inset-0 rounded-[1.25rem] bg-[linear-gradient(135deg,#294068_0%,#172135_100%)] shadow-[0_16px_40px_rgba(23,33,53,0.35)] dark:bg-[linear-gradient(135deg,#D3E97A_0%,#B7D24E_100%)] dark:shadow-[0_16px_40px_rgba(211,233,122,0.2)]'
                />
              )}
              {activeTab !== index && (
                <span className='absolute inset-0 rounded-[1.25rem] bg-slate-50/80 dark:bg-white/3' />
              )}
              <span className='relative z-10'>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        id={activePanelId}
        role='tabpanel'
        aria-labelledby={`custom-tab-${activeTab}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className='mt-10 rounded-4xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-8 lg:p-10 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]'
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default CustomTabs;

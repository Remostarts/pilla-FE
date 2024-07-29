'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import QuoteButton from './QuoteButton';

import ReIconPlus from '@/components/re-ui/ReIconPlus';
import { topHeaderItems } from '@/constants';
import { cn } from '@/lib/utils';
import './topnav.css';

const TopNavMenuMobile = () => {
  const [isTopHidden, setIsTopHidden] = useState(false);
  const handleTopHeader = () => {
    setIsTopHidden(!isTopHidden);
  };
  return (
    <div>
      {' '}
      <AnimatePresence>
        {isTopHidden && (
          <motion.div
            key="topHeaderContent"
            className={cn('flex lg:gap-8 flex-col lg:flex-row')}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {topHeaderItems.map((item) => (
              <ReIconPlus key={Math.random()} items={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-3 flex justify-between rounded-full bg-primary-200/20 p-2 lg:hidden">
        <motion.button type="button" className="ml-4 " onClick={handleTopHeader}>
          {isTopHidden ? (
            <div className="pl-4">
              <div className="flex-center contain w-full rounded-full pr-40 text-sm font-extrabold">
                <input readOnly checked={true} type="checkbox" />
                <svg
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="chevron-down"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </div>
            </div>
          ) : (
            <div className="pl-4">
              <div className="flex-center contain w-full rounded-full pr-40 text-sm font-extrabold">
                <input readOnly checked={false} type="checkbox" />
                <svg
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="chevron-down"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </div>
            </div>
          )}
        </motion.button>
        <QuoteButton />
      </div>
    </div>
  );
};

export default TopNavMenuMobile;

import React from 'react';
import { motion } from 'framer-motion';

type KeyType = 'test' | 'live';

interface KeyNavigationProps {
  activeKey: KeyType;
  onKeyChange: (key: KeyType) => void;
}

export default function KeyNavigation({ activeKey, onKeyChange }: KeyNavigationProps) {
  return (
    <div className="relative mb-4 flex rounded-full bg-gray-100 p-1">
      <motion.div
        className="absolute inset-y-1 rounded-full bg-white shadow-sm"
        initial={false}
        animate={{
          x: activeKey === 'test' ? '0%' : '100%',
          width: '50%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      <button
        className={`relative z-10 flex-1 rounded-full py-2 transition-colors duration-300 ${
          activeKey === 'test' ? 'text-black' : 'text-gray-500'
        }`}
        onClick={() => onKeyChange('test')}
      >
        Test Keys
      </button>
      <button
        className={`relative z-10 flex-1 rounded-full py-2 transition-colors duration-300 ${
          activeKey === 'live' ? 'text-black' : 'text-gray-500'
        }`}
        onClick={() => onKeyChange('live')}
      >
        Live Keys
      </button>
    </div>
  );
}

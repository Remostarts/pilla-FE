'use client';

import { useState } from 'react';

import Active from './Active';
import Matured from './Matured';
import Explore from './Explore';

export default function InvestmentJourney() {
  const [currTab, setCurrTab] = useState('active');

  return (
    <div className="h-[50vh] rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-8 flex justify-between border-b px-12">
        {/* Active Btn */}
        <button
          className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'active' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
          onClick={() => setCurrTab('active')}
        >
          <svg
            className="mr-2 size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="font-medium">Active</span>
        </button>

        {/* Explore Btn */}
        <button
          className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'explore' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
          onClick={() => setCurrTab('explore')}
        >
          <svg
            className="mr-2 size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>Explore</span>
        </button>

        {/* Matured Btn */}
        <button
          className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'matured' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
          onClick={() => setCurrTab('matured')}
        >
          <svg
            className="mr-2 size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Matured</span>
        </button>
      </div>

      {/* Condition for switiching tabs */}
      <div className="px-4">
        {currTab === 'active' && <Active />}
        {currTab === 'explore' && <Explore />}
        {currTab === 'matured' && <Matured />}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Check, CircleAlertIcon, CircleUser, MapPin } from 'lucide-react';

const AccountLimit = () => {
  // defining the state for selecting the tier
  const [selectedTier, setSelectedTier] = useState('tier1');

  // function to handle the selection of the tier
  const handleTierSelection = (tier: string) => {
    setSelectedTier(tier);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>, tier: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleTierSelection(tier);
    }
  };

  return (
    <div className="font size-full rounded-xl bg-white p-8">
      <h2 className="mb-6 font-spaceGrotesk text-xl font-bold">Current Level: Tier 1</h2>

      <div className="space-y-6">
        {/* Tier 1 */}
        <div
          className={`cursor-pointer rounded-xl border-2 p-6  ${selectedTier === 'tier1' ? 'border-primary-400 bg-primary-100' : 'bg-gray-100'}`}
          onClick={() => handleTierSelection('tier1')}
          onKeyDown={(e) => handleKeyPress(e, 'tier1')}
          role="button"
          tabIndex={0}
        >
          <div className="mb-1 flex items-center justify-between">
            <h3
              className="font-spaceGrotesk  text-lg font-bold text-black
            "
            >
              Tier 1
            </h3>
            <span className=" font size-5 rounded-full bg-primary-500 p-[2px] text-white">
              <Check strokeWidth={3} className="size-4" />
            </span>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            This is the level you enter after BVN Verification
          </p>
          <ul className="space-y-2 text-sm text-gray-800">
            <div className="flex justify-between ">
              <div>
                <li>Daily transaction limit: </li>
                <li>Maximum balance: </li>
                <li>Domestic transactions: </li>
              </div>
              <div>
                <li>&#8358;50,000.00</li>
                <li>&#8358;50,000.00</li>
                <li>Limited</li>
              </div>
            </div>
          </ul>
          <p className="mt-4 flex gap-2 text-sm text-orange-600">
            <CircleAlertIcon className="size-5" /> BVN Verification
          </p>
        </div>

        {/* Tier 2 */}
        <div
          className={`cursor-pointer rounded-xl border-2 bg-gray-100 p-6 ${selectedTier === 'tier2' ? 'border-primary-400 bg-primary-100' : 'bg-gray-100'}`}
          onClick={() => handleTierSelection('tier2')}
          onKeyDown={(e) => handleKeyPress(e, 'tier2')}
          role="button"
          tabIndex={0}
        >
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-spaceGrotesk text-lg font-bold">Tier 2</h3>
            <span className="cursor-pointer font-semibold text-primary-500">Upgrade</span>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Identity verification is needed to upgrade to Tier 2
          </p>
          <ul className="space-y-2 text-sm text-gray-800">
            <div className="flex justify-between ">
              <div>
                <li>Daily transaction limit: </li>
                <li>Maximum balance: </li>
                <li>Domestic transactions: </li>
              </div>
              <div>
                <li>&#8358;50,000.00</li>
                <li>&#8358;50,000.00</li>
                <li>Limited</li>
              </div>
            </div>
          </ul>
          <p className="mt-4 flex gap-2 text-sm text-orange-600">
            <CircleUser className="size-5" />
            Identity Verification
          </p>
        </div>

        {/* Tier 3 */}
        <div
          className={`rounded-xl border-2 p-6 ${selectedTier === 'tier3' ? 'border-primary-400 bg-primary-100' : 'bg-gray-100'}`}
          onClick={() => handleTierSelection('tier3')}
          onKeyDown={(e) => handleKeyPress(e, 'tier3')}
          role="button"
          tabIndex={0}
        >
          <div className="mb-1 flex items-center justify-between">
            <h3 className="font-spaceGrotesk text-lg font-bold">Tier 3</h3>
            <span className="cursor-pointer font-semibold text-primary-500">Upgrade</span>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            Address verification is needed to upgrade to Tier 3
          </p>
          <ul className="space-y-2 text-sm text-gray-800">
            <div className="flex justify-between ">
              <div>
                <li>Daily transaction limit: </li>
                <li>Maximum balance: </li>
                <li>Domestic transactions: </li>
              </div>
              <div>
                <li>&#8358;50,000.00</li>
                <li>Unlimited</li>
                <li>Unlimited</li>
              </div>
            </div>
          </ul>
          <p className="mt-4 flex gap-2 text-sm text-orange-600">
            <MapPin className="size-5" />
            Address Verification
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountLimit;

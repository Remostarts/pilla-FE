'use client';

import React from 'react';
import Image from 'next/image';
import { CircleUserRound, Copy, Gift, Send } from 'lucide-react';

// defining the struncture of the object ReferralProps
interface ReferralProps {
  referralLink: string;
  termsUrl: string;
}

// Referral card component
const ReferralCard: React.FC<ReferralProps> = ({ referralLink, termsUrl }) => {
  // function to copy the referral link
  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-white">
      <div className="w-full max-w-xl p-14">
        {/* Refer image */}
        <div className="mb-4 flex justify-center">
          <Image src="/images/gift-box-icon.png" alt="Refer and Earn" width={60} height={60} />
        </div>

        {/* Refer and Earn */}
        <h2 className="mb-6 text-center font-spaceGrotesk text-2xl font-bold">Refer & Earn ₦500</h2>
        <ul className="mb-6 space-y-4 font-semibold text-black/80">
          <li className="flex items-center">
            <span className="mr-4 text-primary-400">
              <Send />
            </span>
            Share the love - Refer friends for rewards today.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-primary-400">
              <CircleUserRound />
            </span>
            After successfully signing up, verify your account.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-primary-400">
              <Gift />
            </span>
            Earn ₦500 on the first account opening deposit of not less than ₦5000 from all your
            referrals.
          </li>
        </ul>
        <p className="mb-2 text-center font-semibold">Referral Link</p>

        {/* Referral Link*/}
        <div className="flex items-center overflow-hidden rounded-full border-2 border-primary-500">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="w-full px-4 font-semibold text-primary-500 focus:outline-none"
          />
          <button
            onClick={handleCopyClick}
            className="ml-2 bg-primary-500 px-8 py-3 text-white transition hover:bg-primary-400 "
            aria-label="Copy to clipboard"
          >
            <span>
              <Copy />
            </span>
          </button>
        </div>

        {/* Terms & Conditions Link */}
        <div className="mt-10 text-center">
          <a
            href={termsUrl}
            className="text-sm font-semibold text-gray-700 underline hover:text-gray-700"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

// Refer and Earn component
const ReferAndEarn: React.FC = () => {
  const referralLink = 'https://www.pilla.africa/referral?ref=12345';
  const termsUrl = '#';

  return <ReferralCard referralLink={referralLink} termsUrl={termsUrl} />;
};

export default ReferAndEarn;

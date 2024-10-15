'use client';

import React, { useState } from 'react';
import { Files } from 'lucide-react';
import Image from 'next/image';

import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

export default function APIDocumentationAndKeys() {
  const [publicKey, setPublickey] = useState<string>('WEYG27EG-rvr58jfwc2y58z8ol0kmbv86f4exvn6');

  const [privateKey, setPrivateKey] = useState<string>('WEYG27EG-rvr58jfwc2y58z8ol0kmbv86f4exvn6');
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="grid grid-cols-2 gap-60">
      <div>
        <Heading
          className="mb-2 text-xl font-semibold text-gray-500/70"
          heading="API Documentation"
        />
        <SubHeading
          className="mb-4 font-inter text-gray-500/70"
          subHeading="Our documentation includes the necessary libraries, APIs, and SDKs to integrate Pilla into
          your website or application."
        />

        <button className="border-1 mt-10 rounded-full border border-gray-300 px-4 py-2 text-gray-500">
          Visit Documentation
        </button>
      </div>
      <div>
        <Heading className="mb-2 text-xl font-semibold text-gray-500/70" heading="Your Test Keys" />
        <div className="mb-4">
          <div className="mb-3 flex flex-col ">
            <span className="mb-2 text-gray-600">Public Key:</span>
            <span className=" flex items-center justify-between gap-2 rounded-lg bg-gray-100 p-3 text-sm text-gray-400 ">
              <input
                type="text"
                value={publicKey}
                className="w-full border-none bg-gray-100 outline-none"
                readOnly
              />
              <Image
                src="/assets/business-dashboard/copy-icon.svg"
                alt="copy"
                width={24}
                height={24}
                onClick={() => copyToClipboard(publicKey)}
                className="cursor-pointer"
              />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="mb-2 text-gray-600">Private Key:</span>
            <span className=" flex items-center justify-between gap-1 rounded-lg bg-gray-100 p-3 text-sm text-gray-400">
              <input
                type="text"
                value={privateKey}
                className="w-full border-none bg-gray-100 outline-none"
                readOnly
              />
              <Image
                src="/assets/business-dashboard/copy-icon.svg"
                alt="copy"
                width={24}
                height={24}
                onClick={() => copyToClipboard(privateKey)}
                className="cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

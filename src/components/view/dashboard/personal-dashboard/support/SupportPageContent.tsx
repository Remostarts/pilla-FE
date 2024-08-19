'use client';

import React, { useState } from 'react';

import FaqAndUpdatesSection from './FaqAndUpdatesSection';
import SupportSection from './SupportSection';

const SupportPageContent = () => {
  const [currTab, setCurrTab] = useState('FAQs & Updates');

  return (
    <section>
      <div className="h-full rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-8 flex justify-around border-b px-12">
          {/* Faq Btn */}
          <button
            className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'FAQs & Updates' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
            onClick={() => setCurrTab('FAQs & Updates')}
          >
            <span className="font-medium">FAQs & Updates</span>
          </button>

          {/* support Btn */}
          <button
            className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'support' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
            onClick={() => setCurrTab('support')}
          >
            <span className="font-medium">Support</span>
          </button>
        </div>

        {/* Condition for switiching tabs */}
        <div className="px-4">
          {currTab === 'FAQs & Updates' && <FaqAndUpdatesSection />}
          {currTab === 'support' && <SupportSection />}
        </div>
      </div>
    </section>
  );
};

export default SupportPageContent;

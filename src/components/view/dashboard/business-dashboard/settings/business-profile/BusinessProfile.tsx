'use client';

import React from 'react';

import SupportChannel from './SupportChannel';
import BusinessInformation from './BusinessInformation';

export default function BusinessProfile() {
  return (
    <div>
      {/* // business Information component */}
      <div>
        <BusinessInformation />
      </div>

      {/* // support channel component */}
      <div>
        <SupportChannel />
      </div>
    </div>
  );
}

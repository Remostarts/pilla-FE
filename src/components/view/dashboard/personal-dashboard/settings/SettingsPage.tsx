'use client';

import { useState } from 'react';

import SettingsContent from './SettingsContent';
import SideNavigation from './SideNavigation';

export default function SettingsPage() {
  // defining the state of the current section
  const [currentSection] = useState('personal-information');

  return (
    <div className="grid w-full grid-cols-2 gap-6">
      <SideNavigation />
      <SettingsContent currentSection={currentSection} />
    </div>
  );
}
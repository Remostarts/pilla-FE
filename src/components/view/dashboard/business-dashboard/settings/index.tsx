'use client';

import { useState } from 'react';

import SideNavigation from './SideNavigation';
import SettingsContent from './SettingContent';

export default function SettingsPage() {
  // defining the state of the current section
  const [currentSection] = useState('profile');

  return (
    <div className="grid size-full grid-cols-2 gap-6">
      <SideNavigation />
      <SettingsContent currentSection={currentSection} />
    </div>
  );
}

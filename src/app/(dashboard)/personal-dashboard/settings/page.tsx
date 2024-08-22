import React from 'react';

import PersonalInformation from '@/components/view/dashboard/personal-dashboard/settings/PersonalInformation';
import SideNavigation from '@/components/view/dashboard/personal-dashboard/settings/SideNavigation';
import AccountLimit from '@/components/view/dashboard/personal-dashboard/settings/AccountLimit';
import Notifications from '@/components/view/dashboard/personal-dashboard/settings/Notifications';
import Security from '@/components/view/dashboard/personal-dashboard/settings/Security';
import SavedCards from '@/components/view/dashboard/personal-dashboard/settings/SavedCards';

export const metadata = {
  title: 'Settings',
};

// Defining the section props
interface SectionProps {
  section: string;
}

export default function Page({ searchParams }: { searchParams: SectionProps }) {
  // Extracting the section from the search params
  const currentSection = searchParams.section || 'personal-information';

  return (
    <section className="flex size-full gap-10 sm:flex-wrap md:flex-wrap lg:flex-nowrap">
      {/* Setting Navigation Section */}
      <SideNavigation />

      {/* Content Section */}
      <div className="w-full max-w-7xl">
        {currentSection === 'personal-information' && <PersonalInformation />}
        {currentSection === 'account-limit' && <AccountLimit />}
        {currentSection === 'notifications' && <Notifications />}
        {currentSection === 'security' && <Security />}
        {currentSection === 'saved-cards' && <SavedCards />}
      </div>
    </section>
  );
}

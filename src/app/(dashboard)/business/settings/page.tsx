import React from 'react';

import SideNavigation from '@/components/view/dashboard/business-dashboard/settings/SideNavigation';
import Profile from '@/components/view/dashboard/business-dashboard/settings/Profile';
import BusinessProfile from '@/components/view/dashboard/business-dashboard/settings/BusinessProfile';
import SettlementAccount from '@/components/view/dashboard/business-dashboard/settings/settlement-account/SettlementAccount';
import Preferences from '@/components/view/dashboard/business-dashboard/settings/Preferences';
import Security from '@/components/view/dashboard/business-dashboard/settings/Security';
import Cards from '@/components/view/dashboard/business-dashboard/settings/Cards';
import Support from '@/components/view/dashboard/business-dashboard/settings/Support';

export const metadata = {
  title: 'Settings',
};

// Defining the section props
interface SectionProps {
  section: string;
}

export default function Page({ searchParams }: { searchParams: SectionProps }) {
  // Extracting the section from the search params
  const currentSection = searchParams.section || 'profile';

  return (
    <section className="flex size-full gap-10 sm:flex-wrap md:flex-wrap lg:flex-nowrap">
      {/* Setting Navigation Section */}
      <SideNavigation />

      {/* Content Section */}
      <div className="w-full max-w-7xl">
        {currentSection === 'profile' && <Profile />}
        {currentSection === 'business-profile' && <BusinessProfile />}
        {currentSection === 'settlement-account' && <SettlementAccount />}
        {currentSection === 'preferences' && <Preferences />}
        {currentSection === 'security' && <Security />}
        {currentSection === 'cards' && <Cards />}
        {currentSection === 'support' && <Support />}
      </div>
    </section>
  );
}

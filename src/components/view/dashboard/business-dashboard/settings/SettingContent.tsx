'use client';

import Profile from './profile/Profile';
import BusinessProfile from './business-profile/BusinessProfile';
import SettlementAccount from './settlement-account/SettlementAccount';
import Preferences from './preferences/Preferences';
import Security from './security/Security';
import Cards from './Cards';
import Support from './support/Support';

export default function SettingsContent({ currentSection }: { currentSection: string }) {
  const renderSection = () => {
    switch (currentSection) {
      case 'business-profile':
        return <BusinessProfile />;

      case 'settlement-account':
        return <SettlementAccount />;

      case 'preferences':
        return <Preferences />;

      case 'security':
        return <Security />;

      case 'cards':
        return <Cards />;

      case 'support':
        return <Support />;

      case 'profile':
      default:
        return <Profile />;
    }
  };

  return <div className="size-full">{renderSection()}</div>;
}

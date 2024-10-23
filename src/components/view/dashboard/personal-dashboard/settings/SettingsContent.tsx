'use client';

import { useSearchParams } from 'next/navigation';

import AccountLimit from './AccountLimit';
import Notifications from './Notifications';
import Security from './Security';
import SavedCards from './SavedCards';

import PersonalInformation from '@/components/view/dashboard/personal-dashboard/settings/PersonalInformation';

export default function SettingsContent() {
  const searchParams = useSearchParams();
  const currentSection = searchParams.get('section');

  const renderSection = () => {
    switch (currentSection) {
      case 'account-limit':
        return <AccountLimit />;

      case 'notifications':
        return <Notifications />;

      case 'security':
        return <Security />;

      case 'saved-cards':
        return <SavedCards />;

      case 'personal-information':
      default:
        return <div>no info</div>;
      // return <PersonalInformation />;
    }
  };

  return <div className="size-full">{renderSection()}</div>;
}

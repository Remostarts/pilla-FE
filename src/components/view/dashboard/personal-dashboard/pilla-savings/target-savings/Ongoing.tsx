import Image from 'next/image';

import { Sidebar } from '../../../shared/SideBar';

import { ReButton } from '@/components/re-ui/ReButton';
import { TARGET_SAVINGS_START_WINDOW } from '@/constants/pillaSavingsData';

export default function Ongoing() {
  return (
    <div>
      <div className="mb-8 text-center">
        <div className="flex justify-center">
          <Image
            src="/assets/personal-dashboard/pilla-invest/invest-empty-icon.svg"
            alt="empty-icon"
            width={150}
            height={150}
          />
        </div>
        <p className="mb-1 font-inter text-gray-600">
          Start your target journey, Save towards multiple goals on your own. Begin today!
        </p>
      </div>

      <div>
        <Sidebar.Open opens={TARGET_SAVINGS_START_WINDOW}>
          <ReButton size="lg">Create a Target</ReButton>
        </Sidebar.Open>
      </div>
    </div>
  );
}
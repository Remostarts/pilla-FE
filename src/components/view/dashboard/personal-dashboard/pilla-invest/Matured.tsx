import Image from 'next/image';

import { ReButton } from '@/components/re-ui/ReButton';

export default function Matured() {
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
        <p className="mb-1 font-inter text-gray-600">Start your investment journey.</p>
        <p className="font-inter text-gray-600">
          Explore opportunities to grow your wealth. Begin today!
        </p>
      </div>

      <div className="mx-auto w-[30rem]">
        <ReButton size="lg">Start Investing</ReButton>
      </div>
    </div>
  );
}

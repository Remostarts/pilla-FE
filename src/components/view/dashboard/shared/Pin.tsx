import { Heading } from './Heading';
import SubHeading from './SubHeading';
import { Sidebar, useSidebar } from './SideBar';

import ReOtp from '@/components/re-ui/ReOtp';
import { ReButton } from '@/components/re-ui/ReButton';

interface PinPropType {
  heading: string;
  subHeading: string;
  btnName: string;
  opens?: string;
  closes?: string;
}

export default function Pin({ heading, subHeading, btnName, opens, closes }: PinPropType) {
  // Use Sidebar Context
  const { close } = useSidebar();

  const handleVerify = () => {
    if (closes) {
      close(closes);
    }
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading={heading} size="2xl" />
        <SubHeading subHeading={subHeading} />
      </div>

      {/* Otp Section */}
      <div className="mt-10">
        <ReOtp count={4} />
      </div>

      {/* Btn */}
      <div className="mt-16">
        <Sidebar.Open opens={opens ?? ''}>
          <ReButton size="lg" onClick={handleVerify}>
            {btnName}
          </ReButton>
        </Sidebar.Open>
      </div>
    </div>
  );
}

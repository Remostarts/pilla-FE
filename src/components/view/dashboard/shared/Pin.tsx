import { Heading } from './Heading';
import SubHeading from './SubHeading';
import { useSidebar } from './SideBar';

import ReOtp from '@/components/re-ui/ReOtp';
import { ReButton } from '@/components/re-ui/ReButton';

interface PinPropType {
  heading: string;
  subHeading: string;
  btnName: string;
  opens?: string;
  closes?: string;
  onChange?: (otp: string) => void;
  name?: string;
  error?: string | null;
  onSubmit?: () => void;
}

export default function Pin({
  heading,
  subHeading,
  btnName,
  opens,
  closes,
  onChange,
  name,
  error,
  onSubmit,
}: PinPropType) {
  // Use Sidebar Context
  const { close, open } = useSidebar();

  const handleBtnClick = () => {
    if (closes) {
      close(closes);
    }
    if (opens) {
      open(opens);
    }
    if (onSubmit) {
      onSubmit();
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
        <ReOtp count={4} className="gap-8" onChange={onChange} name={name} />
        {error && <p className="mt-4 font-spaceGrotesk text-red-500">{error}</p>}
      </div>

      {/* Btn */}
      <div className="mt-16">
        <ReButton size="lg" onClick={handleBtnClick} disabled={!!error}>
          {btnName}
        </ReButton>
      </div>
    </div>
  );
}

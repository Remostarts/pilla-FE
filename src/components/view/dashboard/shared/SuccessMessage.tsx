import Image from 'next/image';
import { ReactNode } from 'react';

import { Heading } from './Heading';
import SubHeading from './SubHeading';

import { ReButton } from '@/components/re-ui/ReButton';

interface SucessMessageProp {
  heading: string;
  subHeading: string;
  btnName: string;
  btnOnClick: () => void;
  children?: ReactNode;
}

export default function SuccessMessage({
  heading,
  subHeading,
  btnName,
  btnOnClick,
  children,
}: SucessMessageProp) {
  return (
    <div className="flex flex-col items-center gap-8">
      <Heading heading={heading} size="2xl" />

      <div className="my-4 flex flex-col items-center gap-3">
        <Image
          src="/assets/personal-dashboard/shared/success-tick.svg"
          alt="success-tick"
          width={70}
          height={70}
        />

        <SubHeading subHeading={subHeading} />
      </div>

      {children}

      <ReButton
        size="lg"
        className="w-full bg-primary-950 font-spaceGrotesk text-lg text-white hover:bg-primary-950"
        onClick={btnOnClick}
      >
        {btnName}
      </ReButton>
    </div>
  );
}

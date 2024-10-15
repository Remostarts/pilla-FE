import Image from 'next/image';
import { ReactNode, createContext, useContext } from 'react';

import { Heading } from './Heading';
import SubHeading from './SubHeading';
import { useSidebar } from './SideBar';

import { ReButton } from '@/components/re-ui/ReButton';
import { getTodayFormatted } from '@/helpers/utils/formatDate';

interface SuccessMessageContextType {
  close: (closes: string) => void;
}

const SuccessMessageContext = createContext<SuccessMessageContextType | undefined>(undefined);

function SuccessMessage({ children }: { children: ReactNode }) {
  const { close } = useSidebar();

  return (
    <SuccessMessageContext.Provider value={{ close }}>
      <div className="flex flex-col items-center gap-8">{children}</div>
    </SuccessMessageContext.Provider>
  );
}

function Title({ children }: { children: string }) {
  return <Heading heading={children} size="2xl" />;
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 flex flex-col items-center gap-3">
      <Image
        src="/assets/personal-dashboard/shared/success-tick.svg"
        alt="success-tick"
        width={70}
        height={70}
      />
      {children}
    </div>
  );
}

function Description({ children }: { children: string }) {
  return <SubHeading subHeading={children} className="text-center" />;
}

function AmountAndDate({ amount }: { amount: string }) {
  const todayDate = getTodayFormatted();

  return (
    <div className="flex flex-col items-center">
      <span className="font-spaceGrotesk text-3xl font-bold">₦ {amount}</span>
      <SubHeading subHeading={todayDate} />
    </div>
  );
}

function ActionButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="mt-4 font-inter font-semibold text-gray-600">
      {children}
    </button>
  );
}

function Button({ children, closes }: { children: string; closes?: string }) {
  const context = useContext(SuccessMessageContext);
  if (!context) {
    throw new Error('Button must be used within a SuccessMessage');
  }

  const handleBtnClick = () => {
    if (closes) {
      context.close(closes);
    }
  };

  return (
    <ReButton
      size="lg"
      className="w-full bg-primary-950 font-spaceGrotesk text-lg text-white hover:bg-primary-950"
      onClick={handleBtnClick}
    >
      {children}
    </ReButton>
  );
}

SuccessMessage.Title = Title;
SuccessMessage.Content = Content;
SuccessMessage.Description = Description;
SuccessMessage.AmountAndDate = AmountAndDate;
SuccessMessage.ActionButton = ActionButton;
SuccessMessage.Button = Button;

export { SuccessMessage };

import { Heading } from '../../../shared/Heading';
import { Sidebar, useSidebar } from '../../../shared/SideBar';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import { Summary } from '../../../shared/summary/Summary';

import { ReButton } from '@/components/re-ui/ReButton';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { TRANSACTION_PIN_WINDOW, TRANSACTION_RECEIPT_WINDOW } from '@/constants/homeData';
import { formatNumber } from '@/helpers/utils/formatNumber';

export default function AddMoney() {
  const { open } = useSidebar();

  const handleProceed = () => {
    open(TRANSACTION_PIN_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading heading="Fund Pilla Account" size="2xl" />

      {/* Virtual card */}
      <div
        style={{
          backgroundImage: "url('/assets/personal-dashboard/home/virtual-card-vector.png')",
        }}
        className="mt-10 rounded-lg bg-primary-100 px-6 py-8"
      >
        <span className="block font-inter text-lg text-gray-800">Make transfer to</span>
        <span className="mt-3 block font-spaceGrotesk text-3xl font-bold tracking-wider">
          43321456898
        </span>
        <div className="mt-3 flex items-center justify-between font-inter text-gray-800">
          <span className="text-lg">Pilla</span>
          <button className="rounded-lg border border-dashed border-primary-950 px-5 py-2 text-sm">
            Copy
          </button>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-gray-200 p-4">
        <Heading heading="Fund via Debit Card" size="lg" />

        <div className="mt-4">
          <ReInput label="Enter Amount" name="amount" placeholder="0.00" />
        </div>

        <div className="mt-10">
          <Heading heading="Payment Method" size="base" />
          <Summary className="mt-2">
            <Summary.Method
              name="Gt Bank (Card)"
              value="gt_bank_card"
              icon="/assets/personal-dashboard/home/payment-card-icon.svg"
              details="452739******6245"
              onChangeClick={() => {}}
            />
          </Summary>
        </div>
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceed}>
          Proceed
        </ReButton>
      </div>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
          name="pin"
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens={TRANSACTION_RECEIPT_WINDOW}
          closes={TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      {/* Receipt + Succes Message Window */}
      <Sidebar.Window name={TRANSACTION_RECEIPT_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Transaction Receipt</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Money Added Successfully</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.AmountAndDate amount={formatNumber(4500)} />
          <SuccessMessage.Button closes={TRANSACTION_RECEIPT_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}

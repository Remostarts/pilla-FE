'use client';

import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import ArrowedActionButton from '../../../shared/ArrowedActionBtn';
import PaymentSummary from '../../../shared/summary/PaymentSummary';

import Power from './Power';
import Airtime from './Airtime';
import Data from './Data';
import Cable from './Cable';
import Water from './Water';
import Waste from './Waste';

import {
  PAYMENT_SUMMARY_WINDOW,
  TRANSACTION_PIN_WINDOW,
  TRANSACTION_RECEIPT_WINDOW,
  UTILITY_AIRTIME_WINDOW,
  UTILITY_CABLE_WINDOW,
  UTILITY_DATA_WINDOW,
  UTILITY_POWER_WINDOW,
  UTILITY_WASTE_WINDOW,
  UTILITY_WATER_WINDOW,
} from '@/constants/homeData';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';
import { formatNumber } from '@/helpers/utils/formatNumber';

const utilityBtnData = [
  {
    id: 1,
    name: 'Power',
    img: '/assets/personal-dashboard/home/power-icon.svg',
    window: 'utility-power-window',
  },
  {
    id: 2,
    name: 'Airtime',
    img: '/assets/personal-dashboard/home/airtime-icon.svg',
    window: 'utility-airtime-window',
  },
  {
    id: 3,
    name: 'Data',
    img: '/assets/personal-dashboard/home/data-icon.svg',
    window: 'utility-data-window',
  },
  {
    id: 4,
    name: 'Cable',
    img: '/assets/personal-dashboard/home/cable-icon.svg',
    window: 'utility-cable-window',
  },
  {
    id: 5,
    name: 'Water',
    img: '/assets/personal-dashboard/home/water-icon.svg',
    window: 'utility-water-window',
  },
  {
    id: 6,
    name: 'Security',
    img: '/assets/personal-dashboard/home/security-icon.svg',
    window: 'utility-security-window',
  },
  {
    id: 7,
    name: 'Waste',
    img: '/assets/personal-dashboard/home/waste-icon.svg',
    window: 'utility-waste-window',
  },
  {
    id: 8,
    name: 'Estate Charge',
    img: '/assets/personal-dashboard/home/estate-charge-icon.svg',
    window: 'utility-estate-charge-window',
  },
];

export default function UtilityBillHome() {
  const { paymentSummary } = usePaymentSummary();

  return (
    <div className="p-4">
      <Heading heading="Pay Utility Bill" size="2xl" />
      <div className="mt-10">
        <Heading heading="Choose a Biller" size="lg" />
      </div>

      <div className="mt-4 space-y-4">
        {/* Side Open Functionality */}
        {utilityBtnData.map((data) => (
          <Sidebar.Open key={data.id} opens={data.window}>
            <ArrowedActionButton img={data.img} btnName={data.name} />
          </Sidebar.Open>
        ))}
      </div>

      {/* Sidebar Windows */}

      {/* Buy Power Container */}
      <Sidebar.Window name={UTILITY_POWER_WINDOW}>
        <Power />
      </Sidebar.Window>

      {/* Buy Airtime Container */}
      <Sidebar.Window name={UTILITY_AIRTIME_WINDOW}>
        <Airtime />
      </Sidebar.Window>

      {/* Buy Data Container */}
      <Sidebar.Window name={UTILITY_DATA_WINDOW}>
        <Data />
      </Sidebar.Window>

      {/* Cable TV Container */}
      <Sidebar.Window name={UTILITY_CABLE_WINDOW}>
        <Cable />
      </Sidebar.Window>

      {/* Water Bill Container */}
      <Sidebar.Window name={UTILITY_WATER_WINDOW}>
        <Water />
      </Sidebar.Window>

      {/* Waste Bill Container */}
      <Sidebar.Window name={UTILITY_WASTE_WINDOW}>
        <Waste />
      </Sidebar.Window>

      {/* Payment Summary */}
      <Sidebar.Window name={PAYMENT_SUMMARY_WINDOW}>
        <PaymentSummary isDestination={false} />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
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
          <SuccessMessage.Title>Transaction Reciept</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Bill Payment Successful</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.AmountAndDate amount={formatNumber(paymentSummary?.finalAmount)} />
          <SuccessMessage.ActionButton onClick={() => console.log('share reciept')}>
            Share Receipt
          </SuccessMessage.ActionButton>
          <SuccessMessage.Button closes={TRANSACTION_RECEIPT_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}

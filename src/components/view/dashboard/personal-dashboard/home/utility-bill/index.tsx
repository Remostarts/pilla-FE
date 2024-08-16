'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { Heading } from '../../../shared/Heading';
import { Sidebar, useSidebar } from '../../../shared/SideBar';
import PaymentSummary from '../../../shared/payment/PaymentSummary';
import Pin from '../../../shared/Pin';
import SuccessMessage from '../../../shared/SuccessMessage';

import Power from './Power';
import Airtime from './Airtime';
import Data from './Data';
import Cable from './Cable';
import Water from './Water';
import Waste from './Waste';

const verificationBtnData = [
  {
    id: 1,
    heading: 'Power',
    img: '/assets/personal-dashboard/home/power-icon.svg',
    action: 'utility-power',
  },
  {
    id: 2,
    heading: 'Airtime',
    img: '/assets/personal-dashboard/home/airtime-icon.svg',
    action: 'utility-airtime',
  },
  {
    id: 3,
    heading: 'Data',
    img: '/assets/personal-dashboard/home/data-icon.svg',
    action: 'utility-data',
  },
  {
    id: 4,
    heading: 'Cable',
    img: '/assets/personal-dashboard/home/cable-icon.svg',
    action: 'utility-cable',
  },
  {
    id: 5,
    heading: 'Water',
    img: '/assets/personal-dashboard/home/water-icon.svg',
    action: 'utility-water',
  },
  {
    id: 6,
    heading: 'Security',
    img: '/assets/personal-dashboard/home/security-icon.svg',
    action: 'utility-security',
  },
  {
    id: 7,
    heading: 'Waste',
    img: '/assets/personal-dashboard/home/waste-icon.svg',
    action: 'utility-waste',
  },
  {
    id: 8,
    heading: 'Estate Charge',
    img: '/assets/personal-dashboard/home/estate-charge-icon.svg',
    action: 'utility-estate-charge',
  },
];

export default function UtilityBillHome() {
  // Use Sidebar Context
  const { close } = useSidebar();

  return (
    <div className="p-4">
      <Heading heading="Pay Utility Bill" size="2xl" />
      <div className="mt-10">
        <Heading heading="Choose a Biller" size="lg" />
      </div>

      <div className="mt-4 space-y-4">
        {/* Side Open Functionality */}
        {verificationBtnData.map((data) => (
          <Sidebar.Open key={data.id} opens={data.action}>
            <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-5 py-4">
              <div className="flex items-center gap-4">
                <Image src={data.img} alt={data.action} width={25} height={25} />
                <Heading heading={data.heading} size="base" />
              </div>

              <ChevronRight />
            </button>
          </Sidebar.Open>
        ))}
      </div>
      {/* Sidebar Window Functionality */}

      {/* Buy Power Container */}
      <Sidebar.Window name="utility-power">
        <Power />
      </Sidebar.Window>

      {/* Buy Airtime Container */}
      <Sidebar.Window name="utility-airtime">
        <Airtime />
      </Sidebar.Window>

      {/* Buy Data Container */}
      <Sidebar.Window name="utility-data">
        <Data />
      </Sidebar.Window>

      {/* Cable TV Container */}
      <Sidebar.Window name="utility-cable">
        <Cable />
      </Sidebar.Window>

      {/* Water Bill Container */}
      <Sidebar.Window name="utility-water">
        <Water />
      </Sidebar.Window>

      {/* Waste Bill Container */}
      <Sidebar.Window name="utility-waste">
        <Waste />
      </Sidebar.Window>

      {/* Payment Summary */}
      <Sidebar.Window name="payment-summary">
        <PaymentSummary />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name="transaction-pin">
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens="transaction-receipt" // Opens the next component
          closes="transaction-pin" // Closes itself
        />
      </Sidebar.Window>

      <Sidebar.Window name="transaction-receipt">
        <SuccessMessage
          heading="Transaction Receipt"
          subHeading="Bill Payment Successful"
          btnName="Done"
          btnOnClick={() => close('transaction-receipt')}
        />
      </Sidebar.Window>
    </div>
  );
}

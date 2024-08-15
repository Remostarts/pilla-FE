'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import { Heading } from '../../../shared/Heading';
import Sidebar from '../../../shared/SideBar';

import Power from './Power';

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
  return (
    <div className="p-4">
      <Sidebar>
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

        <Sidebar.Window name="utility-power">
          <Power />
        </Sidebar.Window>
      </Sidebar>
    </div>
  );
}

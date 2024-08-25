'use client';

import Image from 'next/image';

import DashboardCard from '@/components/view/dashboard/shared/DashboardCard';
import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { SavingsPlanDataType } from '@/types/personalDashBHome.type';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import TargetSavingsHome from '@/components/view/dashboard/personal-dashboard/pilla-savings/target-savings';
import {
  LOCK_SAVINGS_HOME,
  REGULAR_SAVINGS_HOME,
  TARGET_SAVINGS_HOME,
} from '@/constants/pillaSavingsData';
import RegularSavingsHome from '@/components/view/dashboard/personal-dashboard/pilla-savings/regular-savings';
import LockSavingsHome from '@/components/view/dashboard/personal-dashboard/pilla-savings/lock-savings';

const savingsPlanData: SavingsPlanDataType[] = [
  {
    id: 1,
    heading: 'Regular Savings',
    subHeading:
      'A savings account where the user earns 10% interest rate annually and can withdraw at anytime.',
    img: '/assets/personal-dashboard/pilla-savings/savings-wallet-icon.svg',
    window: 'regular-savings-home',
  },
  {
    id: 2,
    heading: 'Target Savings',
    subHeading:
      'A savings account where the user saves towards a goal for a period of time, with a 12% interest rate annually and can break savings but will be penalized.',
    img: '/assets/personal-dashboard/pilla-savings/savings-target-icon.svg',
    window: 'target-savings-home',
  },
  {
    id: 3,
    heading: 'Lock Savings',
    subHeading:
      'A savings account where the user locks money for a period of time, with 18% interest rate annually and can’t  withdraw until target date.',
    img: '/assets/personal-dashboard/pilla-savings/savings-lock-icon.svg',
    window: 'lock-savings-home',
  },
];

export default function Page() {
  return (
    <section>
      {/* Dashboard Count Section */}
      <div className="grid grid-cols-2 gap-10">
        <DashboardCount
          className="bg-primary-500 text-white"
          countHead="Total Savings"
          countAmount="0.00"
          headFontWeight="font-light"
        />

        <DashboardCard
          cardHead="With Pilla Savings"
          cardSubHead="Set your target and save towards it"
          Img="/assets/personal-dashboard/pilla-savings/dart-target-img.png"
        />
      </div>

      {/* Savings plan section */}
      <div className="mt-16">
        <Heading heading="Saving Plans" />

        <div className="mt-6 grid grid-cols-3 gap-6 xl:gap-12">
          {savingsPlanData.map((data) => (
            <Sidebar.Open key={data.id} opens={data.window}>
              <button className="flex flex-col rounded-xl bg-white p-8">
                <div className="grow">
                  <Image src={data.img} alt={`${data.heading}-icon`} width={50} height={50} />

                  <div className="mt-6 flex flex-col items-start">
                    <Heading heading={data.heading} />
                    <p className="mt-2 w-[90%] text-left font-inter text-gray-600">
                      {data.subHeading}
                    </p>
                  </div>
                </div>

                <span className="mt-10 font-spaceGrotesk text-2xl font-medium">₦ 0.00</span>
              </button>
            </Sidebar.Open>
          ))}
        </div>
      </div>

      {/* Sidebar Windows */}

      {/* Target Savings Home */}
      <Sidebar.Window name={TARGET_SAVINGS_HOME}>
        <TargetSavingsHome />
      </Sidebar.Window>

      {/* Regular Savings Home */}
      <Sidebar.Window name={REGULAR_SAVINGS_HOME}>
        <RegularSavingsHome />
      </Sidebar.Window>

      {/* Regular Savings Home */}
      <Sidebar.Window name={LOCK_SAVINGS_HOME}>
        <LockSavingsHome />
      </Sidebar.Window>
    </section>
  );
}

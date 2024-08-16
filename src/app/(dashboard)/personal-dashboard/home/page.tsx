'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';
import ActionBtn from '@/components/view/dashboard/shared/ActionBtn';
import VerificationHome from '@/components/view/dashboard/personal-dashboard/home/verification-status';
import { ActionsBtnDataType, ActionsNeededDataType } from '@/types/personalDashBHome.type';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import UtilityBillHome from '@/components/view/dashboard/personal-dashboard/home/utility-bill';
import { Sidebar, useSidebar } from '@/components/view/dashboard/shared/SideBar';
import Pin from '@/components/view/dashboard/shared/Pin';
import SuccessMessage from '@/components/view/dashboard/shared/SuccessMessage';
import AddCard from '@/components/view/dashboard/personal-dashboard/home/add-money/AddCard';
import BankTransfer from '@/components/view/dashboard/personal-dashboard/home/send-money/BankTransfer';
import PayRent from '@/components/view/dashboard/personal-dashboard/home/pay-rent/PayRent';

const actionsData: ActionsBtnDataType[] = [
  {
    id: 1,
    actionName: 'Add Money',
    action: 'home-add-money',
    actionImg: '/assets/personal-dashboard/home/add-money-icon.svg',
  },
  {
    id: 2,
    actionName: 'Send Money',
    action: 'home-send-money',
    actionImg: '/assets/personal-dashboard/home/send-money-icon.svg',
  },
  {
    id: 3,
    actionName: 'Pay Rent',
    action: 'home-pay-rent',
    actionImg: '/assets/personal-dashboard/home/pay-rent-icon.svg',
  },
  {
    id: 4,
    actionName: 'Utility Bills',
    action: 'home-utility-bill',
    actionImg: '/assets/personal-dashboard/home/utility-bill-icon.svg',
  },
];

const actionsNeededData: ActionsNeededDataType[] = [
  { id: 1, actionLabel: 'Verification Status', actionName: 'verification-status' },
  { id: 2, actionLabel: 'Set Transaction Pin', actionName: 'set-transaction-pin' },
];

export default function Page() {
  const { close } = useSidebar();

  return (
    <section>
      {/* Dashboard Count Section */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-10">
        <DashboardCount
          className="bg-primary-950 text-white"
          countHead="Available Balance"
          countAmount="0.00"
          headFontWeight="font-light"
        />
        <DashboardCount className="bg-[#ffe1cc]" countHead="Rent Finance" countAmount="0.00" />
        <DashboardCount className="bg-[#d3ffcc]" countHead="Pilla Savings" countAmount="0.00" />
      </div>

      {/* Actions Section */}
      <div className="mt-16">
        <Heading heading="Actions" />

        <div className="mt-6 grid grid-cols-4 gap-6">
          {actionsData.map((data) => (
            <Sidebar.Open opens={data.action} key={data.id}>
              <button>
                <ActionBtn actionName={data.actionName} actionImg={data.actionImg} />
              </button>
            </Sidebar.Open>
          ))}
        </div>
      </div>

      {/* Actions Needed Section */}
      <div className="mt-16">
        <Heading heading="Actions Needed" />

        {/* Verification Status */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          {actionsNeededData.map((data) => (
            // Sidebar open functionality
            <Sidebar.Open opens={data.actionName} key={data.id}>
              <button className="flex w-full items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/personal-dashboard/home/caution-icon.svg"
                    alt="add-money-icon"
                    width={24}
                    height={24}
                  />
                  <span className="font-spaceGrotesk font-semibold text-primary-800">
                    {data.actionLabel}
                  </span>
                </div>
                <ChevronRight className="text-primary-800" />
              </button>
            </Sidebar.Open>
          ))}

          {/* Sidebar window functionality */}

          <Sidebar.Window name="home-add-money">
            <AddCard />
          </Sidebar.Window>

          <Sidebar.Window name="home-send-money">
            <BankTransfer />
          </Sidebar.Window>

          <Sidebar.Window name="home-pay-rent">
            <PayRent />
          </Sidebar.Window>

          <Sidebar.Window name="home-utility-bill">
            <UtilityBillHome />
          </Sidebar.Window>

          <Sidebar.Window name="verification-status">
            <VerificationHome />
          </Sidebar.Window>

          <Sidebar.Window name="set-transaction-pin">
            <Pin
              heading="Create PIN"
              subHeading="Create your 4 digit passcode to authorize transaction"
              btnName="Proceed"
              opens="confirm-transaction-pin" // Opens the next component
              closes="set-transaction-pin" // Closes itself
            />
          </Sidebar.Window>

          <Sidebar.Window name="confirm-transaction-pin">
            <Pin
              heading="Confirm PIN"
              subHeading="Confirm your 4 digit passcode to authorize transaction"
              btnName="Submit"
              opens="transaction-pin-created" // Opens the next component
              closes="confirm-transaction-pin" // Closes itself
            />
          </Sidebar.Window>

          <Sidebar.Window name="transaction-pin-created">
            <SuccessMessage
              heading="PIN Created"
              subHeading="You are secured"
              btnName="Done"
              btnOnClick={() => close('transaction-pin-created')}
            />
          </Sidebar.Window>
        </div>
      </div>
    </section>
  );
}

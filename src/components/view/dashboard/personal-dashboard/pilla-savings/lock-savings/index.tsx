'use client';

import Image from 'next/image';
import { useState } from 'react';

import DashboardCount from '../../../shared/DashboardCount';
import { Sidebar } from '../../../shared/SideBar';
import SavingsSummary from '../../../shared/summary/SavingsSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import Completed from './Completed';
import Ongoing from './Ongoing';
import LockSavingStart from './create-lock-savings/LockSavingStart';
import LockStep1 from './create-lock-savings/LockStep1';
import LockStep2 from './create-lock-savings/LockStep2';

import { Button } from '@/components/ui/button';
import {
  LOCK_SAVINGS_START_WINDOW,
  LOCK_SAVINGS_STEP_1,
  LOCK_SAVINGS_STEP_2,
  SAVINGS_SUCCESS_WINDOW,
  SAVINGS_SUMMARY_WINDOW,
  TARGET_SAVINGS_START_WINDOW,
} from '@/constants/pillaSavingsData';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';

export default function LockSavingsHome() {
  const [currTab, setCurrTab] = useState('ongoing');

  return (
    <div className="p-4">
      <DashboardCount
        countHead="Lock Savings Balance"
        countAmount="00.00"
        className="bg-primary-100"
      />

      <Sidebar.Open opens={LOCK_SAVINGS_START_WINDOW}>
        <Button
          className="mt-8 flex w-full items-center gap-2 font-spaceGrotesk text-base text-white"
          size="lg"
        >
          <Image
            src="/assets/personal-dashboard/pilla-savings/target-icon.svg"
            alt="target-icon"
            width={20}
            height={20}
          />
          Create Lock Savings
        </Button>
      </Sidebar.Open>

      <div className="mt-12 h-[50vh] rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-8 flex justify-between border-b px-12">
          {/* Active Btn */}
          <button
            className={`flex items-center pb-3 font-spaceGrotesk ${currTab === 'ongoing' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
            onClick={() => setCurrTab('ongoing')}
          >
            <span className="font-medium">Ongoing</span>
          </button>

          {/* Explore Btn */}
          <button
            className={`flex items-center px-8 pb-3 font-spaceGrotesk ${currTab === 'completed' ? 'border-b-2 border-primary-500 text-primary-500' : 'text-gray-400'}`}
            onClick={() => setCurrTab('completed')}
          >
            <span>Completed</span>
          </button>
        </div>

        {/* Condition for switiching tabs */}
        <div className="px-4">
          {currTab === 'ongoing' && <Ongoing />}
          {currTab === 'completed' && <Completed />}
        </div>
      </div>

      {/* Sidebar Window */}

      {/* Lock Savings Window Start */}
      <Sidebar.Window name={LOCK_SAVINGS_START_WINDOW}>
        <LockSavingStart />
      </Sidebar.Window>

      {/* Lock Savings Step 1 */}
      <Sidebar.Window name={LOCK_SAVINGS_STEP_1}>
        <LockStep1 />
      </Sidebar.Window>

      {/* Lock Savings Step 2 */}
      <Sidebar.Window name={LOCK_SAVINGS_STEP_2}>
        <LockStep2 />
      </Sidebar.Window>

      {/* Savings Summary Window */}
      <Sidebar.Window name={SAVINGS_SUMMARY_WINDOW}>
        <SavingsSummary />
      </Sidebar.Window>

      {/* Transaction Pin */}
      <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Input your 4 digit passcode to authorize this transaction"
          btnName="Verify"
          opens={SAVINGS_SUCCESS_WINDOW}
          closes={TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      {/* Savings Succes Message Window */}
      <Sidebar.Window name={SAVINGS_SUCCESS_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Congratulations</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              You have started saving towards your financial goal.
            </SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.ActionButton onClick={() => console.log('share reciept')}>
            Share Receipt
          </SuccessMessage.ActionButton>
          <SuccessMessage.Button closes={SAVINGS_SUCCESS_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}

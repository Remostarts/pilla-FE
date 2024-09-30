'use client';

import Image from 'next/image';
import { useState } from 'react';

import DashboardCount from '../../../shared/DashboardCount';
import { Sidebar } from '../../../shared/SideBar';
import SavingsSummary from '../../../shared/summary/SavingsSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import Ongoing from './Ongoing';
import Completed from './Completed';
import TargetSavingStart from './create-target/TargetSavingStart';
import TargetStep1 from './create-target/TargetStep1';
import TargetStep2 from './create-target/TargetStep2';
import TargetStep3 from './create-target/TargetStep3';
import TargetStep4 from './create-target/TargetStep4';

import { Button } from '@/components/ui/button';
import {
  SAVINGS_SUCCESS_WINDOW,
  SAVINGS_SUMMARY_WINDOW,
  TARGET_SAVINGS_START_WINDOW,
  TARGET_SAVINGS_STEP_1,
  TARGET_SAVINGS_STEP_2,
  TARGET_SAVINGS_STEP_3,
  TARGET_SAVINGS_STEP_4,
} from '@/constants/pillaSavingsData';
import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';

export default function TargetSavingsHome() {
  const [currTab, setCurrTab] = useState('ongoing');

  return (
    <div className="p-4">
      <DashboardCount
        countHead="Target Savings Balance"
        countAmount="00.00"
        className="bg-primary-100"
      />

      <Sidebar.Open opens={TARGET_SAVINGS_START_WINDOW}>
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
          Create a Target
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

      {/* Create target savings start window  */}
      <Sidebar.Window name={TARGET_SAVINGS_START_WINDOW}>
        <TargetSavingStart />
      </Sidebar.Window>

      {/* Target savings step 1 */}
      <Sidebar.Window name={TARGET_SAVINGS_STEP_1}>
        <TargetStep1 />
      </Sidebar.Window>

      {/* Target savings step 2 */}
      <Sidebar.Window name={TARGET_SAVINGS_STEP_2}>
        <TargetStep2 />
      </Sidebar.Window>

      {/* Target savings step 3 */}
      <Sidebar.Window name={TARGET_SAVINGS_STEP_3}>
        <TargetStep3 />
      </Sidebar.Window>

      {/* Target savings step 4 */}
      <Sidebar.Window name={TARGET_SAVINGS_STEP_4}>
        <TargetStep4 />
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

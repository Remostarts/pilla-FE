import Image from 'next/image';

import DashboardCount from '../../../shared/DashboardCount';
import { Sidebar } from '../../../shared/SideBar';
import SavingsSummary from '../../../shared/summary/SavingsSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import ActionBtn from '../../../shared/ActionBtn';
import PaymentSummary from '../../../shared/summary/PaymentSummary';

import SaveMoney from './SaveMoney';
import WithdrawMoney from './WithdrawMoney';

import {
  REGULAR_SAVINGS_SAVE_MONEY_WINDOW,
  REGULAR_SAVINGS_WITHDRAW_WINDOW,
  SAVINGS_SUCCESS_WINDOW,
  SAVINGS_SUMMARY_WINDOW,
} from '@/constants/pillaSavingsData';
import { PAYMENT_SUMMARY_WINDOW, TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import { ReButton } from '@/components/re-ui/ReButton';

export default function RegularSavingsHome() {
  return (
    <div className="p-4">
      <DashboardCount
        countHead="Regular Savings Balance"
        countAmount="00.00"
        className="bg-primary-100"
      />

      <div className="mt-8 flex gap-6">
        <Sidebar.Open opens={REGULAR_SAVINGS_SAVE_MONEY_WINDOW}>
          <ActionBtn
            actionName="Save Money"
            actionImg="/assets/personal-dashboard/pilla-rent-finance/circle-add-icon.svg"
            className="bg-primary-500 text-white"
          />
        </Sidebar.Open>

        <Sidebar.Open opens={REGULAR_SAVINGS_WITHDRAW_WINDOW}>
          <ActionBtn
            actionName="Withdraw"
            actionImg="/assets/personal-dashboard/pilla-rent-finance/circle-arrow-up-icon.svg"
            className="border-primary-500 bg-white"
          />
        </Sidebar.Open>
      </div>

      <div className="mt-12 h-[50vh] rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-8 flex justify-between border-b px-12">
          {/* Active Btn */}
          <button
            className={`flex items-center border-b-2 border-primary-500 pb-3 font-spaceGrotesk text-primary-500`}
          >
            <span className="font-medium">Transactions</span>
          </button>
        </div>

        <div className="px-4">
          <div className="mb-8 text-center">
            <div className="flex justify-center">
              <Image
                src="/assets/personal-dashboard/pilla-invest/invest-empty-icon.svg"
                alt="empty-icon"
                width={150}
                height={150}
              />
            </div>
            <p className="mb-1 font-inter text-gray-600">
              Start your savings journey, Begin today!
            </p>
          </div>

          <div>
            <Sidebar.Open opens={REGULAR_SAVINGS_SAVE_MONEY_WINDOW}>
              <ReButton size="lg">Save Money</ReButton>
            </Sidebar.Open>
          </div>
        </div>
      </div>

      {/* Sidebar Window */}

      {/* Save Money window  */}
      <Sidebar.Window name={REGULAR_SAVINGS_SAVE_MONEY_WINDOW}>
        <SaveMoney />
      </Sidebar.Window>

      {/* Savings Summary Window */}
      <Sidebar.Window name={SAVINGS_SUMMARY_WINDOW}>
        <SavingsSummary />
      </Sidebar.Window>

      {/* Savings Summary Window */}
      <Sidebar.Window name={PAYMENT_SUMMARY_WINDOW}>
        <PaymentSummary isDestination={false} />
      </Sidebar.Window>

      {/* Withdraw money window */}
      <Sidebar.Window name={REGULAR_SAVINGS_WITHDRAW_WINDOW}>
        <WithdrawMoney />
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
          <SuccessMessage.Title>Successful</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Success</SuccessMessage.Description>
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

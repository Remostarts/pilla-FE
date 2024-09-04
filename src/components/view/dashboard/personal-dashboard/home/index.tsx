'use client';
import AddCard from '@/components/view/dashboard/personal-dashboard/home/add-money/AddCard';
import AddMoney from '@/components/view/dashboard/personal-dashboard/home/add-money/AddMoney';
import PayRent from '@/components/view/dashboard/personal-dashboard/home/pay-rent/PayRent';
import SendMoneyHome from '@/components/view/dashboard/personal-dashboard/home/send-money';
import UtilityBillHome from '@/components/view/dashboard/personal-dashboard/home/utility-bill';
import VerificationHome from '@/components/view/dashboard/personal-dashboard/home/verification-status';
import ActionBtn from '@/components/view/dashboard/shared/ActionBtn';
import ArrowedActionButton from '@/components/view/dashboard/shared/ArrowedActionBtn';
import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import Pin from '@/components/view/dashboard/shared/Pin';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import { SuccessMessage } from '@/components/view/dashboard/shared/SuccessMessage';
import {
  ADD_CARD_WINDOW,
  ADD_MONEY_WINDOW,
  CONFIRM_TRANSACTION_PIN_WINDOW,
  PAY_RENT_WINDOW,
  SEND_MONEY_WINDOW,
  SET_TRANSACTION_PIN_WINDOW,
  TRANSACTION_PIN_CREATED_WINDOW,
  UTILITY_BILL_WINDOW,
  VERIFICATION_STATUS_WINDOW,
} from '@/constants/homeData';
import { ActionsBtnDataType, ActionsNeededDataType } from '@/types/personalDashBHome.type';

const actionsData: ActionsBtnDataType[] = [
  {
    id: 1,
    actionName: 'Add Money',
    window: 'add-card-window',
    actionImg: '/assets/personal-dashboard/home/add-money-icon.svg',
  },
  {
    id: 2,
    actionName: 'Send Money',
    window: 'send-money-window',
    actionImg: '/assets/personal-dashboard/home/send-money-icon.svg',
  },
  {
    id: 3,
    actionName: 'Pay Rent',
    window: 'pay-rent-window',
    actionImg: '/assets/personal-dashboard/home/pay-rent-icon.svg',
  },
  {
    id: 4,
    actionName: 'Utility Bills',
    window: 'utility-bill-window',
    actionImg: '/assets/personal-dashboard/home/utility-bill-icon.svg',
  },
];

const actionsNeededData: ActionsNeededDataType[] = [
  { id: 1, actionName: 'Verification Status', window: 'verification-status-window' },
  { id: 2, actionName: 'Set Transaction Pin', window: 'set-transaction-pin-window' },
];

export default function PersonalDashboard() {
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
            <Sidebar.Open opens={data.window} key={data.id}>
              <ActionBtn actionName={data.actionName} actionImg={data.actionImg} />
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
            <Sidebar.Open opens={data.window} key={data.id}>
              <ArrowedActionButton
                img="/assets/personal-dashboard/home/caution-icon.svg"
                btnName={data.actionName}
                textColor="text-primary-800"
              />
            </Sidebar.Open>
          ))}

          {/* Sidebar window functionality */}

          {/* Add Money and Card Window */}
          <Sidebar.Window name={ADD_CARD_WINDOW}>
            <AddCard />
          </Sidebar.Window>

          <Sidebar.Window name={ADD_MONEY_WINDOW}>
            <AddMoney />
          </Sidebar.Window>

          <Sidebar.Window name={SEND_MONEY_WINDOW}>
            <SendMoneyHome />
          </Sidebar.Window>

          <Sidebar.Window name={PAY_RENT_WINDOW}>
            <PayRent />
          </Sidebar.Window>

          <Sidebar.Window name={UTILITY_BILL_WINDOW}>
            <UtilityBillHome />
          </Sidebar.Window>

          <Sidebar.Window name={VERIFICATION_STATUS_WINDOW}>
            <VerificationHome />
          </Sidebar.Window>

          {/* Set Transaction Pin Window */}
          <Sidebar.Window name={SET_TRANSACTION_PIN_WINDOW}>
            <Pin
              heading="Create PIN"
              name="pin"
              subHeading="Create your 4 digit passcode to authorize transaction"
              btnName="Proceed"
              opens={CONFIRM_TRANSACTION_PIN_WINDOW} // Opens the confirm pin window
              closes={SET_TRANSACTION_PIN_WINDOW} // Closes itself
            />
          </Sidebar.Window>

          {/* Confirm Transaction Pin Window */}
          <Sidebar.Window name={CONFIRM_TRANSACTION_PIN_WINDOW}>
            <Pin
              heading="Confirm PIN"
              name="confirmPin"
              subHeading="Confirm your 4 digit passcode to authorize transaction"
              btnName="Submit"
              opens={TRANSACTION_PIN_CREATED_WINDOW} // Opens the next component
              closes={CONFIRM_TRANSACTION_PIN_WINDOW} // Closes itself
            />
          </Sidebar.Window>

          {/* Transaction Pin Created Success Window */}
          <Sidebar.Window name={TRANSACTION_PIN_CREATED_WINDOW}>
            <SuccessMessage>
              <SuccessMessage.Title>PIN Created</SuccessMessage.Title>
              <SuccessMessage.Content>
                <SuccessMessage.Description>You are secured</SuccessMessage.Description>
              </SuccessMessage.Content>
              <SuccessMessage.Button closes={TRANSACTION_PIN_CREATED_WINDOW}>
                Done
              </SuccessMessage.Button>
            </SuccessMessage>
          </Sidebar.Window>
        </div>
      </div>
    </section>
  );
}

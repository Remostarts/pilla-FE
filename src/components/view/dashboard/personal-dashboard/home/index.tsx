'use client';
import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';

import VerificationHome from './verification-status';

import AddCard from '@/components/view/dashboard/personal-dashboard/home/add-money/AddCard';
import AddMoney from '@/components/view/dashboard/personal-dashboard/home/add-money/AddMoney';
import PayRent from '@/components/view/dashboard/personal-dashboard/home/pay-rent/PayRent';
import SendMoneyHome from '@/components/view/dashboard/personal-dashboard/home/send-money';
import UtilityBillHome from '@/components/view/dashboard/personal-dashboard/home/utility-bill';
import ActionBtn from '@/components/view/dashboard/shared/ActionBtn';
import ArrowedActionButton from '@/components/view/dashboard/shared/ArrowedActionBtn';
import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import Pin from '@/components/view/dashboard/shared/Pin';
import { Sidebar, useSidebar } from '@/components/view/dashboard/shared/SideBar';
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
import {
  ActionsBtnDataType,
  ActionsNeededDataType,
  DashboardResponseType,
} from '@/types/personalDashBHome.type';
import { createPin } from '@/lib/actions/personal/verification.action';

// Zod schema to validate OTP
const otpSchema = z
  .string()
  .length(4, { message: 'OTP must be exactly 4 digits.' })
  .refine((value) => /^\d+$/.test(value), { message: 'OTP should only contain numbers.' });

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

interface PersonalDashboardProps {
  personalData: DashboardResponseType;
}

export default function PersonalDashboard({ personalData }: PersonalDashboardProps) {
  const [otp, setOtp] = useState('');
  const [confirmOtp, setConfirmOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { open, close } = useSidebar();
  const [isVerificationComplete, setIsVerificationComplete] = useState(false);
  const [isPinSet, setIsPinSet] = useState(false);

  const { transactionPin } = personalData.data;

  const { bankVerification, identityVerification, proofOfAddress, nextOfKin } = personalData.data;

  useEffect(() => {
    // Check if all the actions are verified
    if (bankVerification && identityVerification && proofOfAddress && nextOfKin) {
      setIsVerificationComplete(true);
    }

    // Check if transaction pin is set
    setIsPinSet(!!transactionPin);
  }, [transactionPin, bankVerification, identityVerification, proofOfAddress, nextOfKin]);

  const actionsNeededData: ActionsNeededDataType[] = [
    {
      id: 1,
      actionName: 'Verification Status',
      window: 'verification-status-window',
      isVerified: isVerificationComplete,
    },
    {
      id: 2,
      actionName: 'Set Transaction Pin',
      window: 'set-transaction-pin-window',
      isVerified: isPinSet,
    },
  ];

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
    const result = otpSchema.safeParse(otp);
    if (!result.success) {
      setError(result.error.issues[0].message);
    } else {
      setError(null);
    }
  };

  const handleConfirmOtpChange = (otp: string) => {
    setConfirmOtp(otp);
    const result = otpSchema.safeParse(otp);
    if (!result.success) {
      setError(result.error.issues[0].message);
    } else {
      setError(null);
    }
  };

  const onSubmit = async () => {
    try {
      const response = await createPin({
        pin: otp,
        confirmPin: confirmOtp,
      });

      if (response?.success) {
        setIsPinSet(true);
        open(TRANSACTION_PIN_CREATED_WINDOW);
        close(CONFIRM_TRANSACTION_PIN_WINDOW);
        toast.success('Pin Created successfully');
      } else {
        console.log(response);
        toast.error(response.errorName);
      }
    } catch (error) {
      toast.error('Pin creation failed');
      console.log('Error while creating password', error);
    }
  };

  const isActionSectionEnabled = isVerificationComplete && isPinSet;

  return (
    <section>
      {/* Dashboard Count Section */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-10">
        <DashboardCount
          className="bg-primary-950 text-white"
          countHead="Available Balance"
          countAmount={String(personalData.data.availableBalance) ?? '0.00'}
          headFontWeight="font-light"
        />
        <DashboardCount
          className="bg-[#ffe1cc]"
          countHead="Rent Finance"
          countAmount={String(personalData.data.rentFinance) ?? '0.00'}
        />
        <DashboardCount
          className="bg-[#d3ffcc]"
          countHead="Pilla Savings"
          countAmount={String(personalData.data.pillaSavings) ?? '0.00'}
        />
      </div>

      {/* Actions Section */}
      <div className="mt-16">
        <Heading heading="Actions" />

        <div className="mt-6 grid grid-cols-4 gap-6">
          {actionsData.map((data) => (
            <Sidebar.Open opens={data.window} key={data.id}>
              <ActionBtn
                actionName={data.actionName}
                actionImg={data.actionImg}
                disabled={!isActionSectionEnabled}
                className={isActionSectionEnabled ? 'border-gray-200 bg-white' : 'bg-primary-50'}
              />
            </Sidebar.Open>
          ))}
        </div>
        {!isActionSectionEnabled && (
          <p className="mt-4 text-red-500">
            Please complete all actions in the &quot;Actions Needed&quot; section to enable these
            actions.
          </p>
        )}
      </div>

      {/* Actions Needed Section */}
      {!isActionSectionEnabled ? (
        <div className="mt-16">
          <Heading heading="Actions Needed" />

          <div className="mt-6 grid grid-cols-2 gap-6">
            {actionsNeededData.map((data) => (
              <Sidebar.Open opens={data.window} key={data.id}>
                <ArrowedActionButton
                  img={
                    data.isVerified
                      ? '/assets/personal-dashboard/home/success-tick.svg'
                      : '/assets/personal-dashboard/home/caution-icon.svg'
                  }
                  btnName={data.actionName}
                  textColor={data.isVerified ? 'text-green-500' : 'text-primary-800'}
                  disabled={data.isVerified}
                  className={data.isVerified ? 'bg-green-50' : 'bg-primary-50'}
                />
              </Sidebar.Open>
            ))}
          </div>
        </div>
      ) : null}

      {/* Sidebar Windows */}
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
        <VerificationHome personalData={personalData} />
      </Sidebar.Window>

      <Sidebar.Window name={SET_TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Create PIN"
          name="pin"
          subHeading="Create your 4 digit passcode to authorize transaction"
          btnName="Proceed"
          onChange={handleOtpChange}
          error={error}
          opens={CONFIRM_TRANSACTION_PIN_WINDOW}
          closes={SET_TRANSACTION_PIN_WINDOW}
        />
      </Sidebar.Window>

      <Sidebar.Window name={CONFIRM_TRANSACTION_PIN_WINDOW}>
        <Pin
          heading="Confirm PIN"
          name="confirmPin"
          subHeading="Confirm your 4 digit passcode to authorize transaction"
          btnName="Submit"
          onChange={handleConfirmOtpChange}
          error={error}
          onSubmit={onSubmit}
        />
      </Sidebar.Window>

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
    </section>
  );
}

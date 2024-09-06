'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Heading } from '../../shared/Heading';
import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';
import Pin from '../../shared/Pin';
import ChangePassword from '../../shared/ChangePassword';

import {
  CHANGE_PASSWORD_WINDOW,
  CHANGE_TRANSACTION_PIN,
  CONFIRM_NEW_TRANSACTION_PIN,
  CREATE_NEW_TRANSACTION_PIN,
  NEW_TRANSACTION_PIN_CREATED_WINDOW,
  PASSWORD_CHANGED_WINDOW,
} from '@/constants/SecurityData';
import { Button } from '@/components/ui/button';

interface securityLinks {
  id: number;
  actionName: string;
  window: string;
}

const links: securityLinks[] = [
  {
    id: 1,
    actionName: 'Change Password',
    window: 'change-password',
  },
  {
    id: 2,
    actionName: 'Change Transaction PIN',
    window: 'change-transaction-pin',
  },
];

export default function Security() {
  return (
    <div className="size-full max-w-7xl rounded-xl bg-white p-6 font-spaceGrotesk">
      <Heading heading="Security" />
      <div className="mt-8 space-y-4">
        {links.map((data) => (
          <Sidebar.Open key={data.id} opens={data.window}>
            <Button
              variant="outline"
              className="w-full justify-between rounded-xl py-8 text-lg text-gray-700"
            >
              {data.actionName}
              <span className="text-gray-400">
                <ArrowRight />
              </span>
            </Button>
          </Sidebar.Open>
        ))}
      </div>

      {/* Change Password Window */}
      <Sidebar.Window name={CHANGE_PASSWORD_WINDOW}>
        <ChangePassword />
      </Sidebar.Window>

      {/* Password Changed Window after changing password*/}
      <Sidebar.Window name={PASSWORD_CHANGED_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Password Changed</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>You are secured</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={PASSWORD_CHANGED_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>

      {/* Current Transaction Pin Window */}
      <Sidebar.Window name={CHANGE_TRANSACTION_PIN}>
        <Pin
          heading="Enter Transaction PIN"
          subHeading="Enter yout 4 digit passcode"
          btnName="Proceed"
          opens={CREATE_NEW_TRANSACTION_PIN} // Opens the confirm pin window
          closes={CHANGE_TRANSACTION_PIN} // Closes itself
        />
      </Sidebar.Window>

      {/* Create New Transaction Pin Window */}
      <Sidebar.Window name={CREATE_NEW_TRANSACTION_PIN}>
        <Pin
          heading="Create New PIN"
          subHeading="Create your 4 digit passcode to authorize transaction"
          btnName="Proceed"
          opens={CONFIRM_NEW_TRANSACTION_PIN} // Opens the next component
          closes={CREATE_NEW_TRANSACTION_PIN} // Closes itself
        />
      </Sidebar.Window>

      {/* Confirm Transaction Pin Window */}
      <Sidebar.Window name={CONFIRM_NEW_TRANSACTION_PIN}>
        <Pin
          heading="Confirm New PIN"
          subHeading="Create your 4 digit passcode to authorize transaction"
          btnName="Submit"
          opens={NEW_TRANSACTION_PIN_CREATED_WINDOW} // Opens the next component
          closes={CONFIRM_NEW_TRANSACTION_PIN} // Closes itself
        />
      </Sidebar.Window>

      {/* Transaction Pin Changed Success Window */}
      <Sidebar.Window name={NEW_TRANSACTION_PIN_CREATED_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Transaction PIN Changed</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>You are secured</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={NEW_TRANSACTION_PIN_CREATED_WINDOW}>
            Done
          </SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}

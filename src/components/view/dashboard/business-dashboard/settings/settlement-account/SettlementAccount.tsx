'use client';

import { PlusCircle } from 'lucide-react';

import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';

import AddSettlementAccount from './AddSettlementAccount';

import { ReButton } from '@/components/re-ui/ReButton';
import { Button } from '@/components/ui/button';

export default function SettlementAccount() {
  return (
    <div className="w-full  rounded-lg bg-white p-6 ">
      <div className="mb-6 flex items-center justify-between">
        <Heading heading="Settlement Account" className="text-2xl text-[#4D4D4D]" />
        <Sidebar.Open opens="add-settlement-account">
          <ReButton className="text-md text-white">
            <PlusCircle />
            <span className="ml-2">Add Account</span>
          </ReButton>
        </Sidebar.Open>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
        <div>
          <p className="font-semibold text-gray-800">GT Bank</p>
          <p className="text-sm text-gray-600">Seun Ogunyemi</p>
        </div>
        <div className="flex items-center">
          <span className="mr-4 text-sm font-medium text-green-600">Primary Account</span>
          <Button variant="ghost" className="text-sm text-red-500 hover:text-red-600">
            Remove
          </Button>
        </div>
      </div>

      <Sidebar.Window name="add-settlement-account">
        <AddSettlementAccount />
      </Sidebar.Window>
    </div>
  );
}

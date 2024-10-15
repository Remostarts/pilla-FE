import { useState } from 'react';

import AdminDashboardCount from '../../shared/AdminDashboardCount';

import TransactionTable from './TransactionTable';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heading } from '@/components/view/dashboard/shared/Heading';

interface UserSavingsTabProps {
  userData: {
    savingsBalance: number;
    regularSavings: number;
    lockSavings: number;
    targetSavings: number;
  };
}

export default function UserSavingsTab({ userData }: UserSavingsTabProps) {
  const [timeFilter, setTimeFilter] = useState('all');

  return (
    <>
      <AdminDashboardCount
        countHead="Total Savings Balance"
        countNumber={`₦ ${userData.savingsBalance.toFixed(2)}`}
        className="mt-4"
      />
      <div className="mt-6 grid grid-cols-3 gap-4">
        <AdminDashboardCount
          countHead="Regular Savings"
          countNumber={`₦ ${userData.regularSavings.toFixed(2)}`}
          className="border shadow-sm"
        />
        <AdminDashboardCount
          countHead="Lock Savings"
          countNumber={`₦ ${userData.lockSavings.toFixed(2)}`}
          className="border shadow-sm"
        />
        <AdminDashboardCount
          countHead="Target Savings"
          countNumber={`₦ ${userData.targetSavings.toFixed(2)}`}
          className="border shadow-sm"
        />
      </div>
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <Heading heading="Savings Transactions" className="text-lg font-semibold" />
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Tabs defaultValue="regular" className="mt-4">
        <TabsList className="grid grid-cols-3 rounded-xl bg-gray-100 text-black">
          <TabsTrigger
            value="regular"
            className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Regular
          </TabsTrigger>
          <TabsTrigger
            value="lock"
            className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Lock
          </TabsTrigger>
          <TabsTrigger
            value="target"
            className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Target
          </TabsTrigger>
        </TabsList>

        {/* regular tab section component  */}
        <TabsContent value="regular">
          <TransactionTable timeFilter={timeFilter} />
        </TabsContent>

        {/* lock tab section component   */}
        <TabsContent value="lock">
          <TransactionTable timeFilter={timeFilter} />
        </TabsContent>

        {/* target tab section component  */}
        <TabsContent value="target">
          <TransactionTable timeFilter={timeFilter} />
        </TabsContent>
      </Tabs>
    </>
  );
}

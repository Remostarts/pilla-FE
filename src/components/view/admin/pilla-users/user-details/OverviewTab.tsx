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
import { Heading } from '@/components/view/dashboard/shared/Heading';

interface UserOverviewTabProps {
  userData: {
    balance: number;
  };
}

export default function UserOverviewTab({ userData }: UserOverviewTabProps) {
  const [timeFilter, setTimeFilter] = useState('all');

  return (
    <>
      <AdminDashboardCount
        countHead="Available Balance"
        countNumber={`₦ ${userData.balance.toFixed(2)}`}
        className="mt-4"
      />
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <Heading heading="Transactions" className="text-lg font-semibold" />
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

        {/* transaction table component  */}
        <TransactionTable timeFilter={timeFilter} />
      </div>
    </>
  );
}

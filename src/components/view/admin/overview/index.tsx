import { CircleDollarSign } from 'lucide-react';

import AdminDashboardCard from '../shared/AdminDashboardCard';
import AdminDashboardCount from '../shared/AdminDashboardCount';

import { MultiBarChart } from './MultiBarChart';
import { MultipleLinesChart } from './MultipleLinesChart';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <AdminDashboardCard
        title="Total Savings"
        icon={<CircleDollarSign className="size-6" />}
        content="₦ 20,00,000.00"
        className="mb-6 bg-primary-500 text-white"
      />

      <div className="mb-6 grid grid-cols-3 gap-6">
        <AdminDashboardCount
          countHead="Total Users"
          countNumber="1,000,000"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Personal Account"
          countNumber="1,000,000"
          className="bg-white text-black"
        />
        <AdminDashboardCount
          countHead="Business Account"
          countNumber="1,000,000"
          className="bg-white text-black"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className=" space-y-6">
          {/* cards  */}
          <div className="grid grid-cols-2 gap-6">
            <AdminDashboardCount
              countHead="Business Verification"
              countNumber="1,000,000"
              className="bg-white text-black"
            />

            <AdminDashboardCount
              countHead="Finance Request"
              countNumber="1,000,000"
              className="bg-white text-black"
            />
          </div>

          {/* recent user section  */}
          <Card className="bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-lg font-semibold">Recent Users</h2>

              <Button variant="link" className="text-md">
                See All
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((_, i) => (
                    <tr key={i}>
                      <td className="p-2">ID-AFW42DWCC</td>
                      <td className="p-2">Saheed Osupa</td>
                      <td className="p-2">Aug 14 2022</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* transaction section  */}
        <div className=" space-y-6">
          <Card className="bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Transactions</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="size-3 rounded-full bg-green-500"></span>
                  <span className="text-sm">Credit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="size-3 rounded-full bg-red-500"></span>
                  <span className="text-sm">Debit</span>
                </div>
                <select className="rounded border px-2 py-1 text-sm">
                  <option>Last 7 days</option>
                </select>
              </div>
            </div>

            {/* line chart  */}
            <MultipleLinesChart />
          </Card>

          {/* user report section  */}
          <Card className="bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">User Report</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="size-3 rounded-full bg-orange-500"></span>
                  <span className="text-sm">Personal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="size-3 rounded-full bg-green-500"></span>
                  <span className="text-sm">Business</span>
                </div>
              </div>
            </div>

            {/* bar chart  */}
            <MultiBarChart />
          </Card>
        </div>
      </div>
    </div>
  );
}

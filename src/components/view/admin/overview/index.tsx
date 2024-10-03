'use client';

import { MultiBarChart } from './MultiBarChart';
import { MultipleLinesChart } from './MultipleLinesChart';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6">
      <Card className="mb-6 bg-primary-500 p-6 text-white">
        <div className="flex items-center space-x-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-orange-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm font-medium">Balance</div>
            <div className="text-3xl font-bold">₦ 1,000,000,000.00</div>
          </div>
        </div>
      </Card>

      <div className="mb-6 grid grid-cols-3 gap-6">
        <StatCard title="Total Users" value="1,000,000" />
        <StatCard title="Personal Account" value="700,000" />
        <StatCard title="Business Account" value="300,000" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className=" space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <StatCard title="Business Verification" value="1000" />
            <StatCard title="Finance Request" value="1000" />
          </div>
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
            <MultipleLinesChart />
          </Card>

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
            <MultiBarChart />
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="bg-white p-6">
      <h2 className="mb-2 text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-semibold">{value}</p>
    </Card>
  );
}

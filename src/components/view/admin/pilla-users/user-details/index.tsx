'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import UserDetailsCard from './UserDetailsCard';
import UserOverviewTab from './OverviewTab';
import UserSavingsTab from './SavingsTab';
import UserFinanceTab from './FinanceTab';
import ChangeStatus from './change-status/ChangeStatus';
import EditProfile from './edit-profile/EditProfile';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';

interface UserData {
  id: string;
  name: string;
  email: string;
  user: string;
  date: string;
  status: string;
  balance: number;
  savingsBalance: number;
  regularSavings: number;
  lockSavings: number;
  targetSavings: number;
  creditLimit: number;
  financeAmount: number;
  outstandingBalance: number;
}

// Mock user data
const mockUsers: UserData[] = [
  {
    id: 'ID-U5219J4DW',
    name: 'Talan Rosser',
    email: 'wH9v8@example.com',
    user: 'Personal',
    date: '2024-09-30 18:38:29',
    status: 'Pending',
    balance: 5000,
    savingsBalance: 2000,
    regularSavings: 1000,
    lockSavings: 500,
    targetSavings: 500,
    creditLimit: 10000,
    financeAmount: 3000,
    outstandingBalance: 1500,
  },
  // Add more mock users as needed
];

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Simulate fetching user data
    const user = mockUsers.find((user) => user.id === id);
    if (user) {
      setUserData(user);
    }
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 md:grid-cols-[350px_1fr]">
          {/* user details card component  */}
          <UserDetailsCard userData={userData} />

          {/* user tabs component  */}
          <Card className="bg-white p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 p-1">
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-black data-[state=active]:bg-transparent"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="savings"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-black data-[state=active]:bg-transparent"
                >
                  Savings
                </TabsTrigger>
                <TabsTrigger
                  value="finance"
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-black data-[state=active]:bg-transparent"
                >
                  Finance
                </TabsTrigger>
              </TabsList>

              {/* overview tab component  */}
              <TabsContent value="overview">
                <UserOverviewTab userData={userData} />
              </TabsContent>

              {/* savings tab component  */}
              <TabsContent value="savings">
                <UserSavingsTab userData={userData} />
              </TabsContent>

              {/* finance tab component  */}
              <TabsContent value="finance">
                <UserFinanceTab userData={userData} />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      {/* change status Sidebar  */}
      <Sidebar.Window name="CHANGE_STATUS">
        <ChangeStatus />
      </Sidebar.Window>

      <Sidebar.Window name="EDIT_USER_DETAILS">
        <EditProfile />
      </Sidebar.Window>
    </div>
  );
}

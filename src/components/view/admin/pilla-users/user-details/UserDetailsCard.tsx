import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';

interface UserDetailsCardProps {
  userData: {
    id: string;
    name: string;
    email: string;
    user: string;
    date: string;
    status: string;
  };
}

export default function UserDetailsCard({ userData }: UserDetailsCardProps) {
  return (
    <div>
      <Card className="bg-white p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="size-20 rounded-full bg-gray-300">
            <AvatarImage alt={userData.name} src="/placeholder.svg" />
            <AvatarFallback>
              {userData.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="mt-4 space-y-2">
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-sm text-gray-500">ID: {userData.id}</p>
            <p className="rounded-lg bg-green-100 px-4 py-2 text-sm font-semibold text-green-500">
              {userData.user} Account
            </p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Heading heading="Details" className="border-b pb-2 font-semibold " />
          <div className="grid grid-cols-[auto_1fr] gap-2 text-sm">
            <div className="font-medium">Status:</div>
            <span
              className={
                userData.status === 'Active'
                  ? 'w-20 rounded-lg   bg-green-100 px-2 text-center font-semibold text-green-500'
                  : 'w-20 rounded-lg bg-red-100 px-2 text-center font-semibold text-red-500'
              }
            >
              {userData.status}
            </span>
            <div className="font-medium">Name:</div>
            <div>{userData.name}</div>
            <div className="font-medium">Email:</div>
            <div>{userData.email}</div>
            <div className="font-medium">Date Joined:</div>
            <div>{userData.date}</div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Heading heading="Verification" className="border-b pb-2 font-semibold " />
          <div className="grid grid-cols-[auto_1fr] gap-2 text-sm">
            <div className="font-medium">BVN Verification:</div>
            <div className="w-20 rounded-lg bg-green-100 px-2 text-center font-semibold text-green-500">
              Verified
            </div>
            <div className="font-medium">ID Verification:</div>
            <div>Not Verified</div>
            <div className="font-medium">Address Verification:</div>
            <div>Not Verified</div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Heading heading="Images" className="border-b pb-2 font-semibold " />
          <div className="flex space-x-2">
            <div className="size-16 bg-gray-200" />
            <div className="size-16 bg-gray-200" />
            <div className="size-16 bg-gray-200" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <Sidebar.Open opens="CHANGE_STATUS">
            <Button variant="outline" className="w-full bg-black text-white hover:bg-gray-800">
              CHANGE STATUS
            </Button>
          </Sidebar.Open>
          <Sidebar.Open opens="EDIT_USER_DETAILS">
            <Button className="w-full bg-green-500 text-white hover:bg-green-600">
              EDIT PROFILE
            </Button>
          </Sidebar.Open>
        </div>
      </Card>
    </div>
  );
}

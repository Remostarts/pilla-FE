import { Metadata } from 'next';

import Header from '@/components/view/dashboard/business-dashboard/Header';
import SideNav from '@/components/view/dashboard/business-dashboard/SideNav';
import { Sidebar } from '@/components/view/dashboard/shared/SideBar';
import { TChildrenProps } from '@/types';

export const metadata: Metadata = {
  title: 'Business Dashboard',
};

export default function Layout({ children }: TChildrenProps) {
  return (
    <div className="grid h-screen grid-cols-[19rem_1fr] grid-rows-[auto_1fr] overflow-hidden xl:grid-cols-[20rem_1fr]">
      <Header />
      <SideNav />

      <main className="row-start-2 overflow-auto bg-[#f2f2f2] p-10">
        <div className="flex">
          <Sidebar>
            <div className="grow overflow-auto">{children}</div>
          </Sidebar>
        </div>
      </main>
    </div>
  );
}

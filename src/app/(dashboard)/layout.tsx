import { ReactNode } from 'react';

import { LeftSideRar } from '@/components/view/shared/leftSideBar/LeftSideBar';
import DashboardNav from '@/components/view/shared/navbars/dashboard-nav/DashboardNav';
import { DashboardNavMobile } from '@/components/view/shared/navbars/dashboard-nav/DashboardNavMobile';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="">
        <div className="flex">
          <LeftSideRar />
          <section className="flex-1">
            <div className="flex min-h-screen flex-col sm:border-r sm:border-zinc-700">
              <DashboardNav />
              <DashboardNavMobile />
              <div className="relative flex grow flex-col bg-zinc-100">
                <div className="px-2">{children}</div>
              </div>
            </div>
          </section>
        </div>
        {/* <Footer/> */}
      </main>
    </>
  );
};

export default Layout;

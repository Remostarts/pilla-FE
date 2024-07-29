import Footer from '@/components/view/shared/Footer';
import Navbar from '@/components/view/shared/navbars/navbar/Navbar';
import NavbarMobile from '@/components/view/shared/navbars/navbar/NavbarMobile';
import TopNav from '@/components/view/shared/navbars/top-nav/TopNav';
import { TChildrenProps } from '@/types';

const Layout = ({ children }: TChildrenProps) => {
  return (
    <div className="">
      <TopNav />

      <Navbar />
      <NavbarMobile />
      <main className="">
        <section className="">{children}</section>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
// max-md:pb-14

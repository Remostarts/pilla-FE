import Image from 'next/image';
import Link from 'next/link';

import QuoteButton from './QuoteButton';
import TopNavMenuMobile from './TopNavMenuMobile';

import ReIconPlus from '@/components/re-ui/ReIconPlus';
import { topHeaderItems } from '@/constants';

const TopNav = () => {
  return (
    <div className="container py-2 ">
      <div className="flex flex-col lg:flex-row lg:justify-between  ">
        <Link className="hidden lg:block" href="/">
          <Image
            className=""
            src="/assets/images/logo-transparent.png"
            height={100}
            width={100}
            alt=""
          />
        </Link>
        <div className="flex flex-col py-3 lg:flex-row">
          <div className="hidden gap-3 lg:flex xl:gap-8 2xl:gap-24 ">
            {topHeaderItems.map((item, i) => (
              <ReIconPlus key={i} items={item} />
            ))}
          </div>
          <TopNavMenuMobile />
        </div>
        <div className="mt-3 hidden justify-between rounded-full  lg:flex ">
          <QuoteButton />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

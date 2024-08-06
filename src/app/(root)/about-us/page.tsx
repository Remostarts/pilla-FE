import Image from 'next/image';

import AboutUs from '@/components/view/common/about-us/AboutUs';
import MissionVision from '@/components/view/common/about-us/MissionVision';
import OurValues from '@/components/view/common/about-us/OurValues';
import WhyChooseUs from '@/components/view/common/about-us/WhyChooseUs';

export const metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <div className="mx-auto mt-2 max-w-8xl sm:mt-8">
      {/* Hero Banner */}
      <div className="relative mx-6 h-[30vh] sm:mx-10 sm:h-[40vh] md:h-[50vh] lg:mx-12">
        <Image
          src="/assets/about-us/about-banner.png"
          alt="about-banner"
          fill
          className="rounded-xl object-cover object-center sm:object-cover md:object-top"
        />
      </div>

      {/* Other Components */}
      <AboutUs />
      <MissionVision />
      <OurValues />
      <WhyChooseUs />
    </div>
  );
}

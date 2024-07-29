import ContactUs from '@/components/view/common/home/ContactUs/ContactUs';
import Banner from '@/components/view/common/home/banner/Banner';
import Stats from '@/components/view/common/home/stats/Stats';
import WhyChooseUs from '@/components/view/common/home/why-choose-us/WhyChooseUs';

export default function Home() {
  return (
    <>
      {/* banner section */}
      <Banner />
      {/* why choose us section */}
      <WhyChooseUs />
      {/* stats section */}
      <Stats />
      {/* contact us section */}
      <ContactUs />
      <div className=" min-h-screen text-typo-600">
        <div className="flex flex-col items-center justify-center py-20 ">
          <h1 className="font-title text-[3rem] font-normal  sm:text-[4rem] md:text-[6rem]">
            Explore LivingBook
          </h1>

          <p className="w-full text-[1.3rem] font-normal leading-7 text-typo-700  md:w-[31rem] md:text-[1.5rem]">
            Discover Hotels, Resorts, and many living facilities in your favorite places.
          </p>
        </div>
      </div>
    </>
  );
}

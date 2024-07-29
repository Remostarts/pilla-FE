import Image from 'next/image';

import './whyChooseUs.css';

type HireUsItem = {
  icon: string;
  heading: string;
  content: string;
};

const hireUsItems: HireUsItem[] = [
  {
    icon: '/assets/images/whyChooseUs1.png',
    heading: 'Over 28 Years Of Experience',
    content: 'Our gutter protection simply works better than any other product.',
  },
  {
    icon: '/assets/images/whyChooseUs1.png',
    heading: 'High Quality Equipments',
    content: 'Our gutter protection simply works better than any other product.',
  },
  {
    icon: '/assets/images/whyChooseUs1.png',
    heading: 'Work Done On Time',
    content: 'Our gutter protection simply works better than any other product',
  },
  {
    icon: '/assets/images/whyChooseUs1.png',
    heading: 'Expert Cleaners',
    content: 'Our gutter protection simply works better than any other product.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="h-screen bg-hero-img-8 bg-contain bg-fixed object-cover lg:bg-cover lg:object-cover">
      <div className="h-200vh  inset-y-0 left-0 items-center justify-start bg-gradient-to-r from-black/70 via-transparent to-transparent md:h-[140vh] lg:flex lg:h-screen">
        <div className="container flex flex-col space-y-5 py-20 md:py-0 lg:flex-row lg:space-y-0">
          <div className="flex flex-1 flex-col items-center space-y-3 lg:space-y-0">
            <h1 className="self-start text-white/70">WHY CHOOSE US ?</h1>
            <h1 className="heading">Why You Should Hire Us ?</h1>
            {/* <div className="block h-full w-full items-center justify-center lg:hidden">
              <iframe
                className="h-[300px] w-full"
                title="cleaning"
                src="https://www.youtube.com/embed/zDknxGb00I4/?controls=1"
              ></iframe>
            </div> */}
            <div className="grid w-full grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:place-items-start">
              {hireUsItems.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col space-y-3 rounded-md bg-black/40 p-5  transition-all duration-100 hover:bg-black/80 md:w-full lg:w-full xl:w-[80%]"
                >
                  <div className="flex items-center space-x-2">
                    <Image src={item.icon} width={80} height={80} alt="" />
                    <h1 className="font-title text-[1.2rem] font-bold text-white lg:text-[1rem]">
                      {item.heading}
                    </h1>
                  </div>
                  <div className="px-4">
                    <p className="text-white">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="hidden items-center justify-center lg:flex">
            <iframe
              className="h-[400px] lg:w-[350px] xl:w-[500px] 2xl:w-[600px]"
              title="cleaning"
              src="https://www.youtube.com/embed/zDknxGb00I4/?controls=1"
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  );
}

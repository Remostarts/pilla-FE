'use client';
import Image from 'next/image';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

type IStats = {
  icon: string;
  number: number;
  content: string;
};

const statsArray: IStats[] = [
  { icon: '/assets/icons/computer.svg', number: 2654, content: 'Satisfied Clients' },
  { icon: '/assets/icons/computer.svg', number: 178, content: 'Active Project' },
  { icon: '/assets/icons/computer.svg', number: 19, content: 'Winning Award' },
  { icon: '/assets/icons/computer.svg', number: 200, content: 'Expert Teams' },
];

export default function StatsCounter() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    // @ts-expect-error scroll trigger should be kicked out later.
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className="grid w-full grid-cols-2 place-items-start gap-x-2 gap-y-10 2xl:container md:grid-cols-4 md:gap-y-0 md:px-10 md:pr-20">
        {statsArray.map((item, index) => (
          <div key={index} className="flex items-center justify-center space-x-2">
            <div className="">
              <Image width={50} height={70} src={item.icon} alt="" />
            </div>
            <div className="flex flex-col space-y-1 text-white">
              <h1 className="text-2xl font-bold md:text-3xl 2xl:text-6xl">
                {counterOn && (
                  <>
                    <CountUp duration={2} start={0} end={item.number} />+
                  </>
                )}
              </h1>
              <h1 className="font-medium md:text-sm 2xl:text-2xl">{item.content}</h1>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
}

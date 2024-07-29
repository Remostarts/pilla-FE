'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isInputHidden, setIsInputHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 75;
      const inputElement = document.getElementById('scroll-hide-input');

      if (inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        const isInputAboveNavbar = inputRect.bottom <= navbarHeight;

        setIsInputHidden(isInputAboveNavbar);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" h-[80vh] bg-hero-img-5 bg-cover bg-fixed object-cover lg:bg-hero-img-4">
        <div className="inset-y-0  left-0 flex h-[80vh] items-center justify-start bg-gradient-to-r from-black/50 via-transparent to-transparent">
          <div className="mx-auto flex max-w-7xl flex-col items-center py-36">
            <h1 className="font-title text-[3rem] font-normal text-white sm:text-[4rem] md:text-[6rem]">
              Stay neat
            </h1>
            <h2 className="font-title text-[2rem] font-normal text-yellow-400 sm:text-[3rem] md:text-[2rem]">
              <a href="www.facebook.com">Explore Clean Living</a>
            </h2>

            <p className="w-full text-center  text-[1.3rem] font-normal leading-7 text-white md:w-[31rem] md:text-[1.5rem]">
              Discover Hotels, Resorts, and many living facilities in your favorite places.
            </p>
            <button className="mt-10 rounded-lg bg-lime-500 px-4 py-2 text-black">Know more</button>
            <input
              id="scroll-hide-input"
              type="text"
              className={`transition-all duration-300 ${
                isInputHidden ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
              }`}
            />
          </div>
        </div>
      </div>

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

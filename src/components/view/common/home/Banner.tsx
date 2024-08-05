import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="mx-auto mt-12 max-w-8xl px-6 sm:px-10 lg:px-12">
      <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
        {/* Left side content */}
        <div className="-mt-12 mb-8 sm:-mt-6 lg:-mt-24 lg:mb-0 lg:w-1/2 xl:-mt-32">
          <h1 className="mb-4 flex flex-col font-spaceGrotesk text-5xl font-black tracking-[0.015em] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]">
            <span>Pilla for</span>
            <span className="mt-2 text-primary-500">Renters</span>
          </h1>
          <p className="mb-12 ml-1 w-80 font-inter text-lg text-gray-800 md:w-64 lg:w-[30rem] lg:text-xl">
            Save towards your rent with ease and obtain loan to complete your rent payments.
          </p>

          <Link
            className="rounded-full bg-primary-500 px-6 py-3 font-inter text-sm text-white transition duration-300 hover:bg-primary-600 sm:text-base md:px-8 md:py-4"
            href="/"
          >
            Open an account
          </Link>

          {/* Customer satisfaction */}
          <div className="mt-12 flex items-center gap-4 sm:mt-16">
            <Image src="/assets/svg/avatars.svg" width={150} height={150} alt="avatars" />
            <div>
              <Image src="/assets/svg/stars.svg" width={100} height={100} alt="stars" />
              <p className="mt-1 font-inter text-sm text-gray-500">Join 10,000+ happy customers</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="mx-auto w-full max-w-md lg:w-[64vh] lg:max-w-none">
          <Image
            src="/assets/png/home-banner.png"
            alt="hero-image"
            width={400}
            height={400}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

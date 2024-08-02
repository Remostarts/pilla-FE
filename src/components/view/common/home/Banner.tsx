import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="mt-20 px-6 sm:px-8 lg:px-10">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left side content */}
        <div className="-mt-12 mb-8 sm:-mt-8 lg:-mt-12 lg:mb-0 lg:w-1/2">
          <h1 className="mb-4 flex flex-col font-spaceGrotesk text-6xl font-black tracking-[0.015em] text-gray-900 md:text-7xl lg:text-[5rem]">
            <span>Pilla for</span>
            <span className="mt-2 text-primary-500">Renters</span>
          </h1>
          <p className="mb-12 w-full font-inter text-lg text-gray-600 sm:w-[30rem] md:text-xl">
            Save towards your rent with ease and obtain loan to complete your rent payments.
          </p>
          <Link
            className="-ml-1 rounded-full bg-primary-500 px-6 py-3 font-inter text-sm text-white transition duration-300 hover:bg-primary-600 sm:text-base md:px-8 md:py-4"
            href="/"
          >
            Open an account
          </Link>

          {/* Customer satisfaction */}
          <div className="mt-12 flex items-center gap-4 sm:mt-16">
            <Image src="/assets/icons/avatars.svg" width={150} height={150} alt="stars" />
            <div>
              <Image src="/assets/icons/stars.svg" width={100} height={100} alt="stars" />
              <p className="mt-1 font-inter text-sm text-gray-500">Join 10,000+ happy customers</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="sm:mr-20 lg:mr-0">
          <Image src="/assets/images/hero-mobile.png" alt="hero-image" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Construction',
};

export default function page() {
  return (
    <section className="mx-auto mt-4 max-w-8xl sm:mt-12">
      {/* Hero Section */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <span className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#e5fff7] px-4 py-2 font-spaceGrotesk text-sm font-semibold text-[#007a53]">
              <Image
                src="/assets/pilla-pay/pilla-pay-icon.svg"
                alt="Pilla Savings"
                width={20}
                height={20}
              />
              Pilla Pay
            </span>

            <h2 className="mb-4 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
              Pilla Pay is a payment collection product that allows customers receive payment.
            </h2>
            <p className="mb-6 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              It can be through the generation of payment links or API Integration on customers
              platform.
            </p>
            <p className="mb-12 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              From rent collections to dream homes payments, land use charge and utilities, we
              simplify it all. Join us for effortless transactions today.
            </p>
            <Link
              href="/"
              className="-ml-1 rounded-full bg-orange-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Pay Now
            </Link>
          </div>
          {/* Hero Image */}
          <div className="rounded-t-3xl py-12">
            <div className="relative">
              <Image
                src="/assets/pilla-pay/hero-tablet.png"
                alt="Pilla Savings App"
                width={500}
                height={600}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Construction details Section */}
      <div className="mt-8 px-6 md:mt-24 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-12">
          {/* Hero Image */}
          <div className="mt-12 rounded-t-3xl md:mt-0">
            <div className="relative mx-auto w-full sm:w-[90%] md:w-full">
              <Image
                src="/assets/pilla-pay/feature-tablet.png"
                alt="Pilla Savings App"
                width={650}
                height={650}
              />
            </div>
          </div>

          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="mb-4 font-spaceGrotesk text-2xl font-bold lg:text-3xl">
              Experience seamless transactions like never before!
            </h2>

            <p className="mb-6 ml-1 font-inter text-lg text-gray-800 md:text-base lg:text-lg">
              Our payment feature revolutionizes collections for landlords, property managers, real
              estate professionals, developers and government agencies.
            </p>

            <ul className="mb-12 ml-5 list-disc space-y-2 font-spaceGrotesk text-lg font-medium text-gray-800 md:text-base lg:text-lg">
              <li>Landlords</li>
              <li>Property Managers</li>
              <li>Real Estate Professionals</li>
              <li>Developers</li>
              <li>Government Agencies</li>
            </ul>
            <Link
              href="/"
              className="rounded-full bg-orange-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Pay Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

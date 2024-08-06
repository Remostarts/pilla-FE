import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Invest',
};

const investmentPlans = [
  {
    title: 'Bronze Plan',
    icon: '/assets/pilla-invest/bronze-plan.svg',
    tenure: '3 months (90 Days)',
    roi: '22% ROI per annum when you invest up to N4,999,999',
    minimum: 'From N1,000,000',
    border: 'border-[#e59947]',
  },
  {
    title: 'Silver Plan',
    icon: '/assets/pilla-invest/silver-plan.svg',
    tenure: '6 months (180 Days)',
    roi: '24% ROI per annum when you invest up to N9,999,999',
    minimum: 'From N5,000,000',
    border: 'border-[#9c9c9c]',
  },
  {
    title: 'Gold Plan',
    icon: '/assets/pilla-invest/gold-plan.svg',
    tenure: '9 months (270 Days)',
    roi: '26% ROI per annum when you invest up to N19,999,999',
    minimum: 'From N10,000,000',
    border: 'border-[#deb43f]',
  },
  {
    title: 'Diamond Plan',
    icon: '/assets/pilla-invest/diamond-plan.svg',
    tenure: '12 months (365 Days)',
    roi: '28% ROI per annum when you invest from N20,000,000',
    minimum: 'From N20,000,000',
    border: 'border-[#b6b6b6]',
  },
];

export default function page() {
  return (
    <section className="mx-auto mt-4 max-w-8xl sm:mt-12">
      {/* Hero Section */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <span className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#e9ffe5] px-4 py-2 font-spaceGrotesk text-sm font-semibold text-[#1bcc00]">
              <Image
                src="/assets/pilla-invest/pilla-invest-icon.svg"
                alt="Pilla Savings"
                width={20}
                height={20}
              />
              Pilla Invest
            </span>
            <h2 className="mb-4 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
              Earn up to 28% returns per annum.
            </h2>
            <p className="mb-6 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Don&apos;t miss out on the opportunity to diversify wisely by investing in
              groundbreaking projects and reap the rewards of capital growth with our innovative
              investment offerings. Unlock your journey to financial growth and security today.
            </p>
            <p className="mb-12 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Unlock your journey to financial growth and security today.
            </p>
            <Link
              href="/"
              className="-ml-1 rounded-full bg-primary-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-primary-600"
            >
              Invest Now
            </Link>
          </div>
          {/* Hero Image */}
          <div className="rounded-t-3xl bg-[#e9ffe5] px-20 pt-16 md:w-4/5 lg:w-1/2 xl:w-2/5">
            <div className="relative">
              <Image
                src="/assets/pilla-invest/invest-half-phone.png"
                alt="Pilla Savings App"
                width={350}
                height={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capital growth Section */}
      <div className="px-6 sm:px-10 lg:px-12">
        <div className="relative mb-6 mt-20 h-[30vh] sm:h-[40vh] md:mb-8 md:h-[50vh]">
          <Image
            src="/assets/pilla-invest/capital-growth-banner.png"
            alt="about-banner"
            fill
            className="rounded-xl object-cover object-center sm:object-cover md:object-top"
          />
        </div>
        <h2 className="mb-2 font-spaceGrotesk text-2xl font-bold lg:text-3xl">
          Pilla Real Estate Capital Growth Note
        </h2>
        <p className="mb-6 font-inter text-lg text-gray-800 md:text-base lg:text-xl lg:leading-8">
          Pilla Real Estate Capital Growth Note is a professionally managed fund that invests
          directly in real estate properties and transactions.
        </p>
      </div>

      {/* Categories part */}
      <div className="mx-auto mt-16 px-6 sm:px-10 lg:px-12">
        <h2 className="mb-4 font-spaceGrotesk text-2xl font-bold md:mb-8 lg:text-3xl">
          Investment Categories
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {investmentPlans.map((plan, index) => (
            <div key={index} className={`flex flex-col rounded-lg border ${plan.border} p-6`}>
              <div className="mb-2 mr-4 size-20">
                <Image src={plan.icon} alt={`${plan.title} icon`} width={70} height={70} />
              </div>

              <h3 className="mb-2 font-spaceGrotesk text-xl font-semibold">{plan.title}</h3>
              <p className="mb-2 font-inter">Minimum Tenure: {plan.tenure}</p>
              <p className="mb-2 font-inter">{plan.roi}</p>
              <p className="mb-4 font-inter">{plan.minimum}</p>
              <button className="mt-auto self-end rounded-full bg-primary-500 px-6 py-3 font-inter font-semibold text-white transition duration-300 hover:bg-primary-600">
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Part */}
      <div className="mt-12 md:px-8 lg:px-12">
        <div className="flex items-start space-x-5 bg-[#e5fff7] p-4 md:rounded-lg">
          <div className="mt-2 scale-150 md:mt-1 md:scale-100">
            <Image
              src="/assets/pilla-invest/invest-caution.svg"
              alt="Warning"
              width={40}
              height={40}
            />
          </div>
          <div>
            <h4 className="mb-1 font-spaceGrotesk text-2xl font-semibold">Please note:</h4>
            <ul className="space-y-1 font-inter text-gray-800">
              <li>Interest rates are subject to change due to market forces.</li>
              <li>
                Termination of investments before maturity is processed and disbursed within 48
                hours. This attracts a penalty of 50% of interest accrued.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

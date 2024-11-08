import Image from 'next/image';

import ReLink from '@/components/re-ui/ReLink';

export const metadata = {
  title: 'Savings',
};

const savingsPlans = [
  {
    title: 'Regular Savings',
    description:
      'A savings account where the user earns 10% interest rate annually and can withdraw at anytime.',
    image: '/assets/root/pilla-savings/regular-savings.png',
    border: 'border-[#fffebe]',
  },
  {
    title: 'Target Savings',
    description:
      'A savings account where the user saves towards a goal for a period of time, with 12% interest rate annually and can break savings but will be penalized.',
    image: '/assets/root/pilla-savings/target-savings.png',
    border: 'border-[#d4fff2]',
  },
  {
    title: 'Lock Savings',
    description:
      "A savings account where the user locks money for a period of time, with 18% interest rate annually and can't withdraw until maturity date.",
    image: '/assets/root/pilla-savings/lock-savings.png',
    border: 'border-[#fff0e5]',
  },
];

export default function Page() {
  return (
    <section className="mx-auto mt-4 max-w-8xl sm:mt-12">
      {/* Hero Section */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <span className="mb-6 flex w-fit items-center gap-2 rounded-full bg-primary-100 px-4 py-2 font-spaceGrotesk text-sm font-semibold text-primary-500">
              <Image
                src="/assets/root/pilla-savings/pilla-savings-icon.svg"
                alt="Pilla Savings"
                width={20}
                height={20}
              />
              Pilla Savings
            </span>

            <h2 className="mb-4 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
              Earn up to 18% returns per annum on your savings.
            </h2>
            <p className="mb-12 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Achieve your financial goals with ease and precision, whether it&apos;s saving for
              rent or owning your dream home. With customizable targets and flexible options, take
              control of your financial freedom with Pilla.
            </p>
            <ReLink href="/">Save Now</ReLink>
          </div>

          {/* Hero Image */}
          <div className="rounded-t-3xl bg-[#FFF5EB] px-20 pt-16 md:w-4/5 lg:w-1/2 xl:w-2/5">
            <div className="relative">
              <Image
                src="/assets/root/pilla-savings/savings-half-phone.png"
                alt="Pilla Savings App"
                width={350}
                height={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Savings Section */}
      <div className="mt-24 px-6 sm:mx-auto sm:w-4/5 md:w-full md:px-8 lg:px-12">
        <h2 className="mb-12 ml-1 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
          Savings Plans
        </h2>
        <div className="grid grid-cols-1 gap-x-24 gap-y-16 md:w-full md:grid-cols-2 xl:gap-x-40 xl:gap-y-24">
          {savingsPlans.map((plan, index) => (
            <div key={index} className="flex flex-col rounded-3xl">
              <div>
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div
                className={`relative h-[17rem] border-x-2 border-b-2 p-6 lg:h-64 ${plan.border} rounded-b-lg`}
              >
                <h3 className="mb-2 font-spaceGrotesk text-xl font-semibold lg:text-2xl">
                  {plan.title}
                </h3>
                <p className="mb-4 font-inter text-gray-800 xl:text-lg">{plan.description}</p>
                <ReLink href="/" className="absolute bottom-4 right-4 md:py-3">
                  Save Now
                </ReLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notice Part */}
      <div className="mt-12 md:px-8 lg:px-12">
        <div className="flex items-start space-x-5 bg-primary-100 p-4 md:rounded-lg">
          <div className="mt-2 scale-150 md:mt-1 md:scale-100">
            <Image
              src="/assets/root/pilla-savings/savings-caution.svg"
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
                Failure to meet target savings before maturity attracts a penalty of 30% of interest
                accrued.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

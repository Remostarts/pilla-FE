import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Savings',
};

const savingsPlans = [
  {
    title: 'Regular Savings',
    description:
      'A savings account where the user earns 10% interest rate annually and can withdraw at anytime.',
    image: '/assets/pilla-savings/regular-savings.png',
    border: 'border-[#fffebe]',
  },
  {
    title: 'Target Savings',
    description:
      'A savings account where the user saves towards a goal for a period of time, with 12% interest rate annually and can break savings but will be penalized.',
    image: '/assets/pilla-savings/target-savings.png',
    border: 'border-[#d4fff2]',
  },
  {
    title: 'Lock Savings',
    description:
      "A savings account where the user locks money for a period of time, with 18% interest rate annually and can't withdraw until maturity date.",
    image: '/assets/pilla-savings/lock-savings.png',
    border: 'border-[#fff0e5]',
  },
];

const requiredDocuments = [
  {
    icon: '📄',
    text: "Valid means of identification (National ID card, Driver's Licence, international passport, voter's card) and passport photograph.",
  },
  {
    icon: '🆔',
    text: 'Employment ID card and Employment letter.',
  },
  {
    icon: '📃',
    text: 'Utility bill, not more than 3 months old.',
  },
  {
    icon: '🏦',
    text: 'Up-to-date bank statements of not less than 6 months',
  },
];

export default function page() {
  return (
    <section className="mx-auto mt-4 max-w-8xl sm:mt-12">
      {/* Hero Section */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <span className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#e6e6fe] px-4 py-2 font-spaceGrotesk text-sm font-semibold text-[#3b37fb]">
              <Image
                src="/assets/pilla-rent-finance/pilla-rent-finance-icon.svg"
                alt="Pilla Savings"
                width={20}
                height={20}
              />
              Pilla Rent Finance
            </span>

            <h2 className="mb-4 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
              Pilla Rent Finance is a product that assists customers finance rent payment.
            </h2>
            <p className="mb-6 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Save up for your rent with ease, while having peace of mind knowing that we&apos;ve
              got your back if you&apos;re short on the balance when your rent is due.
            </p>
            <p className="mb-12 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Our rent finance solution ensures you don&apos;t default on your next rent payment. We
              are Pilla, you can rely on us.
            </p>
            <Link
              href="/"
              className="-ml-1 rounded-full bg-orange-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Get Loan Now
            </Link>
          </div>
          {/* Hero Image */}
          <div className="rounded-t-3xl bg-[#e6e6fe] px-20 pt-16 md:w-4/5 lg:w-1/2 xl:w-2/5">
            <div className="relative">
              <Image
                src="/assets/pilla-rent-finance/rent-finance-half-phone.png"
                alt="Pilla Savings App"
                width={350}
                height={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Finance details Section */}
      <div className="mt-24 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
          {/* Hero Image */}
          <div className="rounded-3xl">
            <div className="mx-auto -ml-2 sm:w-4/5 md:mx-0 md:w-full lg:w-[85%]">
              <Image
                src="/assets/pilla-rent-finance/details-half-phone.png"
                alt="details-half-phone"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>

          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="mb-4 font-spaceGrotesk text-2xl font-bold lg:text-3xl">
              Rent Finance Details
            </h2>

            <ul className="mb-6 ml-5 list-disc space-y-2 font-inter text-lg md:text-base lg:text-lg">
              <li>
                <span>
                  <strong>Type of loan</strong> - Short-term loans
                </span>
              </li>
              <li>
                <span>
                  <strong>Interest Rate</strong> - 3.5% - 5% monthly depending on the amount
                  disbursed.
                </span>
              </li>
              <li>
                <span>
                  <strong>Loan Repayment Instrument</strong> - Salary account direct debit mandate
                  or debit card setup.
                </span>
              </li>
              <li>
                <span>
                  <strong>Mode of payment</strong> - Loan is disbursed directly to the Landlord.
                </span>
              </li>
            </ul>

            <p className="mb-12 ml-1 font-inter text-lg text-gray-800 md:text-base lg:text-lg">
              The Pilla rent finance solution is designed for Pilla account holders who are working
              class professionals aged 21 -57 years with a clean credit history.
            </p>
            <Link
              href="/"
              className="rounded-full bg-orange-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Get Loan Now
            </Link>
          </div>
        </div>
      </div>

      {/* Document Required */}
      <div className="mx-auto mt-24 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-24 md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="mb-6 font-spaceGrotesk text-3xl font-bold">Documents Required</h2>
            <ul className="mb-16 space-y-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-start font-inter text-lg text-gray-800">
                  <span className="mr-4 text-2xl text-blue-500">{doc.icon}</span>
                  <span>{doc.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className=" rounded-full bg-orange-500 px-8 py-4 font-inter font-semibold text-white transition duration-300 hover:bg-orange-600"
            >
              Get Loan Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/assets/pilla-rent-finance/happy-customers.png"
              alt="Happy customers discussing documents"
              width={550}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

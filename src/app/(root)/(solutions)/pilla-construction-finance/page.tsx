import Image from 'next/image';

import ReLink from '@/components/re-ui/ReLink';

export const metadata = {
  title: 'Construction',
};

const requiredDocuments = [
  {
    icon: '/assets/root/pilla-construction-finance/company-registration-icon.svg',
    text: 'Company CAC registration document and Board Resolution',
  },
  {
    icon: '/assets/root/pilla-construction-finance/signatories-icon.svg',
    text: 'Details of account signatories ID cards, TIN, BVN and passport photographs',
  },
  {
    icon: '/assets/root/pilla-construction-finance/building-plan-icon.svg',
    text: 'Building plan and Building permit',
  },
  {
    icon: '/assets/root/pilla-construction-finance/bank-statement-icon.svg',
    text: 'Bank statement (one year)',
  },
  {
    icon: '/assets/root/pilla-construction-finance/liability-icon.svg',
    text: 'Asset and liability statement (two years)',
  },
];

export default function Page() {
  return (
    <section className="mx-auto mt-4 max-w-8xl sm:mt-12">
      {/* Hero Section */}
      <div className="px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <span className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#fffee5] px-4 py-2 font-spaceGrotesk text-sm font-semibold">
              <Image
                src="/assets/root/pilla-construction-finance/pilla-construction-finance-icon.svg"
                alt="Pilla Savings"
                width={20}
                height={20}
              />
              Pilla Construction Finance
            </span>

            <h2 className="mb-4 font-spaceGrotesk text-3xl font-bold lg:text-4xl">
              Bid farewell to building projects delays by embracing our tailored construction
              finance.
            </h2>
            <p className="mb-12 font-inter text-lg text-gray-800 md:text-base  lg:text-xl lg:leading-8">
              Fuel your construction dreams with our procurement finance solution; Whether it&apos;s
              building materials or interior décor finishing, complete your projects effortlessly
              and fast-track your journey to project delivery.
            </p>
            <ReLink href="/">Get Loan Now</ReLink>
          </div>
          {/* Hero Image */}
          <div className="rounded-t-3xl bg-[#fffee5] py-12 pl-16">
            <div className="relative">
              <Image
                src="/assets/root/pilla-construction-finance/construction-finance-tablet.png"
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
      <div className="mt-24 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse items-center justify-between gap-16 md:flex-row">
          {/* Hero Image */}
          <div className="rounded-3xl">
            <div className="mx-auto w-full sm:w-[85%] md:mx-0 md:w-full lg:w-[85%]">
              <Image
                src="/assets/root/pilla-construction-finance/details-half-phone.png"
                alt="details-half-phone"
                width={400}
                height={400}
                className="mx-auto w-full"
              />
            </div>
          </div>

          <div className="sm:w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="mb-4 font-spaceGrotesk text-2xl font-bold lg:text-3xl">
              Construction Finance Details
            </h2>

            <ul className="mb-6 ml-5 list-disc space-y-2 font-inter text-lg md:text-base lg:text-lg">
              <li>
                <span>
                  <strong className="font-spaceGrotesk">Type of loan</strong> - Short-term loans
                </span>
              </li>
              <li>
                <span>
                  <strong className="font-spaceGrotesk">Interest Rate</strong> - 3.5% - 5% monthly
                  depending on the amount disbursed.
                </span>
              </li>
              <li>
                <span>
                  <strong className="font-spaceGrotesk">Loan Repayment Instrument</strong> - Cheque
                  or Direct Debit Mandate
                </span>
              </li>
              <li>
                <span>
                  <strong className="font-spaceGrotesk">Loan Security / Collateral required</strong>
                  - Financial securities, real estate and fixed assets, guarantess, insurance.
                </span>
              </li>
              <li>
                <span>
                  <strong className="font-spaceGrotesk">Mode of payment</strong> - Loan is disbursed
                  directly to the Vendor / Contractor who supplies the developer.
                </span>
              </li>
            </ul>

            <p className="mb-12 ml-1 font-inter text-lg text-gray-800 md:text-base lg:text-lg">
              Pilla construction finance is a procurement supplies invoice financing product that
              assists property developers in providing the necessary funding and support to
              successfully complete real estate construction projects by fulfilling payment
              obligations to suppliers and contractors.
            </p>
            <ReLink href="/">Get Loan Now</ReLink>
          </div>
        </div>
      </div>

      {/* Document Required */}
      <div className="mt-24 px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="mb-8 sm:w-4/5 md:mb-0 md:w-1/2">
            <h2 className="mb-6 font-spaceGrotesk text-2xl font-bold lg:text-3xl">
              Documents Required
            </h2>
            <ul className="mb-16 space-y-5">
              {requiredDocuments.map((doc, index) => (
                <li
                  key={index}
                  className="flex items-start gap-6 font-inter text-lg text-gray-800 sm:items-center"
                >
                  <Image src={doc.icon} alt="document-icons" width={50} height={50} />
                  <span className="text-gray-800">{doc.text}</span>
                </li>
              ))}
            </ul>
            <ReLink href="/">Get Loan Now</ReLink>
          </div>
          <div className="flex justify-end md:w-1/2">
            <Image
              src="/assets/root/pilla-construction-finance/construction-worker.png"
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

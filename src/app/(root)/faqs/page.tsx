import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'FAQs',
};

const faqData = [
  {
    id: 'fq1',
    question: 'What is Pilla?',
    answer:
      'Pilla ensures saving for rent or home ownership becomes convenient, investments and collections are stress-free, and access to rent / construction procurement loans are smooth.',
  },
  {
    id: 'fq2',
    question: 'Who can use Pilla?',
    answer:
      'Renters, landlords, investors, property developers, property managers, real estate agents, real estate professionals, government agencies etc.',
  },
  {
    id: 'fq3',
    question: 'Is Pilla a registered entity?',
    answer:
      'Pilla is registered entity with RC Number: RC1983715. We have a license from the lagos State Government authority to accept investments and we are covered by the Money Lenders Act.',
  },
  {
    id: 'fq4',
    question: 'What kind of account will I get when I sign up on Pilla App?',
    answer:
      'You will get a virtual Providus Bank account which you can use for savings, investments, bills payment, and transfers to any Nigerian bank account.',
  },
  {
    id: 'fq5',
    question: 'How do I save money with Pilla?',
    answer:
      '1. Visit the website or download tha Pilla app. 2. Sign up on the mobile app and create a virtual Providus account. 3. Enter your debit card details and make your first deposit to activate your account. 4. Then proceed to use any of the Savings Plans to start you daily, weekly or monthly savings.',
  },
  {
    id: 'fq6',
    question: 'How do I invest money with Pilla?',
    answer:
      'You can invest a minimum of N1,000,000 and receive up to 28% return on investment per annum.',
  },
  {
    id: 'fq7',
    question: 'Are my funds safe with Pilla?',
    answer:
      'Pilla savings are placed with providus Bank which is insured by NDIC and regulated byt the Central Bank of Nigeria (CBN). Pilla investments are secured by our insurance policy. They both ensure your money is protected and safe.',
  },
  {
    id: 'fq8',
    question: 'How secure is my personal data with Pilla?',
    answer:
      'You will get a virtual Providus Bank account which you can use for savings, investments, bills payment, and transfer your information is safe with us. We utilise state-of-the-art encryption to safeguard your data and all documents requested are essential to tailor our services and decisions to your nees to any Nigerian bank account.',
  },
  {
    id: 'fq9',
    question: 'Why should I use Pilla Payment Gateway?',
    answer:
      'Our payment gateways enable real estate professionals and businesses to receive their colections with ease.',
  },
  {
    id: 'fq10',
    question: 'How do I qualify for a rent finance or construction procurement loan?',
    answer:
      '1. You should be between 21 and 57 years old. 2. You must have and run a savings account with us. 3. You must live and work in Lagos State. 4. You must be able to provide proof of stable income. 5. A positive credit bureau report is reqiured.',
  },
  {
    id: 'fq11',
    question: 'What interest rates do you charge on loan?',
    answer:
      'An interest rate between 3.5% - 5% is charged monthly depending on the amount disbursed.',
  },
  {
    id: 'fq12',
    question: 'How do I make a loan repayment?',
    answer:
      'You are required to set-up a direct debit mandate on your salary / business account, set up your Bank card on the Mobile app / web dashboard or ensure your wallet is funded on or before due date with repayment amount.',
  },
  {
    id: 'fq13',
    question: 'What happen if I cannot make a repayment on due date?',
    answer:
      'Default on your repayment plan will attract penalties which may include contaction your employer, blacklisting your BVN, or sending debt collectors to your home and / or place of work. Additionally, there are fines that will be accured on the outstanding loan amount.',
  },
  {
    id: 'fq14',
    question: 'What kind of Account will I get when I sign up on Pilla App?',
    answer:
      'You can easily reach with the live chat option in your Pilla App or on our website. You may also send us an email at hello@pilla.africa or call 07054000050.',
  },
];

export default function page() {
  return (
    <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-12">
      <div className="mt-4 sm:mt-10">
        {/* Heading */}
        <h1 className="mb-2 font-spaceGrotesk text-4xl font-bold lg:text-5xl">FAQs</h1>
        <p className="font-inter text-lg">Let&apos;s stay connected</p>
      </div>

      {/* Accordion Component */}
      <div className="mt-8">
        <Accordion type="single" collapsible>
          {faqData.map((faq) => (
            <AccordionItem value={faq.id} key={faq.id}>
              <AccordionTrigger className="my-1 text-left font-spaceGrotesk text-lg hover:no-underline focus:text-primary-500 lg:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="my-1 font-inter text-base text-gray-800 lg:text-lg lg:tracking-wide">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

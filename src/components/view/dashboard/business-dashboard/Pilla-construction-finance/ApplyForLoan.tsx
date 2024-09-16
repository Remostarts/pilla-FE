import Image from 'next/image';

import { Heading } from '../../shared/Heading';
import { Sidebar } from '../../shared/SideBar';

import { ReButton } from '@/components/re-ui/ReButton';
import { APPLY_LOAN_FORM_WINDOW } from '@/constants/businessDashboard';

export default function ApplyForLoan() {
  return (
    <div className=" w-full ">
      <div className="relative mb-10 w-full">
        <Image
          src="/assets/business-dashboard/ApplyLoanImg.png"
          alt="Construction workers reviewing blueprints"
          width={460}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <Heading heading="Apply for Construction Finance" className="mb-6 text-xl font-bold" />
      <ul className="mb-12 list-inside list-disc space-y-2 text-sm text-gray-600">
        <li>
          We offer credit to finance different property development stages through invoice financing
          to fulfill your vendor supplies.
        </li>
        <li>
          Apply for a loan to help you fulfill your real estate development procurement needs.
        </li>
      </ul>
      <Sidebar.Open opens={APPLY_LOAN_FORM_WINDOW}>
        <ReButton className="w-full text-lg font-semibold text-white">Apply Now</ReButton>
      </Sidebar.Open>
    </div>
  );
}

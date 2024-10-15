import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import { Sidebar } from '../../../shared/SideBar';
import RePlanCard from '../RePlanCard';
import InvestmentSummary from '../../../shared/summary/InvestmentSummary';

import { ReButton } from '@/components/re-ui/ReButton';
import { MATURED_REAL_ESTATE_CAPITAL_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';

const activePlansData = [
  {
    id: 1,
    planTitle: 'Pilla Real Estate Capital Growth Note',
    planDescription:
      'Pilla Real Estate Capital Growth Note is a professionally managed fund that invest directly in real estate properties.',
    planDetail: 'Bronze Plan',
    maturityDate: 'June 5, 2025',
    window: 'matured-real-estate-capital-window',
  },
];

interface ActiveProps {
  setCurrTab: Dispatch<SetStateAction<string>>;
}

export default function Matured({ setCurrTab }: ActiveProps) {
  const isEmpty = false;
  const { setInvestmentSummaryData } = useInvestmentSummary();

  const handleEmptyBtnClick = () => {
    setCurrTab('explore');
  };

  const handlePlanOpen = () => {
    const investmentData = {
      investmentType: 'Pilla Real Estate Capital Growth Note',
      plan: 'Bronze Plan',
      amount: 100,
      period: '3 Months',
      interestRate: '16%',
      status: 'Active',
      purchaseDate: '21 Nov, 2024',
    };
    setInvestmentSummaryData(investmentData);
  };

  return (
    <div>
      {isEmpty ? (
        <>
          <div className="mb-8 text-center">
            <div className="flex justify-center">
              <Image
                src="/assets/personal-dashboard/pilla-invest/invest-empty-icon.svg"
                alt="empty-icon"
                width={150}
                height={150}
              />
            </div>
            <p className="mb-1 font-inter text-gray-600">Start your investment journey.</p>
            <p className="font-inter text-gray-600">
              Explore opportunities to grow your wealth. Begin today!
            </p>
          </div>

          <div className="mx-auto w-[30rem]">
            <ReButton size="lg" onClick={handleEmptyBtnClick}>
              Start Investing
            </ReButton>
          </div>
        </>
      ) : (
        <div>
          {activePlansData.map((data) => (
            <Sidebar.Open key={data.id} opens={data.window}>
              <RePlanCard
                planTitle={data.planTitle}
                planDescription={data.planDescription}
                planDetails={data.planDetail}
                maturityDate={data.maturityDate}
                onClick={handlePlanOpen}
              />
            </Sidebar.Open>
          ))}
        </div>
      )}
      {/* Sidebar Windows */}

      {/* Existing plan summary window */}
      <Sidebar.Window name={MATURED_REAL_ESTATE_CAPITAL_WINDOW}>
        <InvestmentSummary plan="matured" />
      </Sidebar.Window>
    </div>
  );
}

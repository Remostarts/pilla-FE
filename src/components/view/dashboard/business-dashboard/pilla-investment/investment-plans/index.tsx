import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';
import RePlanCard from '../RePlanCard';

import RealEstateCapital from './RealEstateCapital';

import { REAL_ESTATE_CAPITAL_INVESTMENT_WINDOW } from '@/constants/pillaInvestData';

const investmentPlansData = [
  {
    id: 1,
    planTitle: 'Pilla Real Estate Capital Growth Note',
    planDescription:
      'Pilla Real Estate Capital Growth Note is a professionally managed fund that invest directly in real estate properties.',
    window: 'real-estate-capital-investment-window',
  },
];

export default function Explore() {
  return (
    <div>
      <Heading heading="Investment Plans" />

      <div className="mt-6">
        {investmentPlansData.map((data) => (
          <Sidebar.Open key={data.id} opens={data.window}>
            <RePlanCard planTitle={data.planTitle} planDescription={data.planDescription} />
          </Sidebar.Open>
        ))}
      </div>

      {/* Sidebar Windows */}

      <Sidebar.Window name={REAL_ESTATE_CAPITAL_INVESTMENT_WINDOW}>
        <RealEstateCapital />
      </Sidebar.Window>
    </div>
  );
}

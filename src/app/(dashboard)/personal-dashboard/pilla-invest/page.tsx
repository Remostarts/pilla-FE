import InvestmentJourney from '@/components/view/dashboard/personal-dashboard/pilla-invest/InvestmentJourney';
import DashboardCard from '@/components/view/dashboard/shared/DashboardCard';
import DashboardCount from '@/components/view/dashboard/shared/DashboardCount';

export default function Page() {
  return (
    <section>
      {/* Dashboard Count Section */}
      <div className="grid grid-cols-2 gap-10">
        <DashboardCount
          className="bg-primary-500 text-white"
          countHead="Total Investment"
          countAmount="0.00"
          headFontWeight="font-light"
        />

        <DashboardCard
          cardHead="28 % Anually"
          cardSubHead="Earn ROI of up to"
          Img="/assets/personal-dashboard/money-growth-img.png"
        />
      </div>

      {/* Tab section */}
      <div className="mt-16">
        <InvestmentJourney />
      </div>
    </section>
  );
}

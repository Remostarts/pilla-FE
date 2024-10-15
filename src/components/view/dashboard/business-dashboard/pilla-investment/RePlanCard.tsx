import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

interface PlanCardProps {
  planTitle: string;
  planDescription: string;
  planDetails?: string;
  maturityDate?: string;
  onClick?: () => void;
}

export default function RePlanCard({
  planTitle,
  planDescription,
  planDetails,
  maturityDate,
  onClick,
}: PlanCardProps) {
  return (
    <button
      className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-6"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="h-28 w-60 bg-primary-100"></div>
        <div className="flex w-3/4 flex-col items-start p-6 text-left">
          <Heading heading={planTitle} size="2xl" />
          <SubHeading subHeading={planDescription} />
          {(planDetails || maturityDate) && (
            <div className="mt-4 flex w-full justify-between text-sm text-primary-500">
              <p>{planDetails}</p>
              <p>{maturityDate && `Maturity Date: ${maturityDate}`}</p>
            </div>
          )}
        </div>
      </div>
    </button>
  );
}

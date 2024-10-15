import { Info } from 'lucide-react';

interface DashboardCountProp {
  className: string;
  countHead: string;
  countAmount: string;
  headFontWeight?: string;
}

export default function BusinessDashboardCount({
  className,
  countHead,
  countAmount,
  headFontWeight = 'font-normal',
}: DashboardCountProp) {
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg border border-gray-200 p-6 ${className}`}
    >
      <div className="flex flex-col justify-center gap-4 ">
        <span className={`font-inter ${headFontWeight}`}>{countHead}</span>
        <span className="font-spaceGrotesk text-2xl font-medium">₦ {countAmount}</span>
      </div>

      <div>
        <Info />
      </div>
    </div>
  );
}

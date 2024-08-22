interface DashboardCountProp {
  className: string;
  countHead: string;
  countAmount: string;
  headFontWeight?: string;
}

export default function DashboardCount({
  className,
  countHead,
  countAmount,
  headFontWeight = 'font-normal',
}: DashboardCountProp) {
  return (
    <div
      className={`flex flex-col justify-center gap-2 rounded-lg border border-gray-200 p-6 ${className}`}
    >
      <span className={`font-inter ${headFontWeight}`}>{countHead}</span>
      <span className="font-spaceGrotesk text-2xl font-medium">₦ {countAmount}</span>
    </div>
  );
}

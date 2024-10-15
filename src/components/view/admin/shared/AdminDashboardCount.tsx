interface AdminDashboardCountProp {
  className: string;
  countHead: string;
  countNumber: string;
  headFontWeight?: string;
}

export default function AdminDashboardCount({
  className,
  countHead,
  countNumber,
  headFontWeight = 'font-normal',
}: AdminDashboardCountProp) {
  return (
    <div
      className={`flex flex-col justify-center gap-2 rounded-lg border border-gray-200 p-6 ${className}`}
    >
      <span className={`font-inter ${headFontWeight}`}>{countHead}</span>
      <span className="font-spaceGrotesk text-2xl font-medium">{countNumber}</span>
    </div>
  );
}

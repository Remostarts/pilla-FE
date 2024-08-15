import Image from 'next/image';

interface DashboardCountProp {
  className?: string;
  cardHead: string;
  cardSubHead: string;
  Img: string;
}

export default function DashboardCard({
  className,
  cardHead,
  cardSubHead,
  Img,
}: DashboardCountProp) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <span className={`font-inter text-sm text-gray-600 xl:text-base`}>{cardSubHead}</span>
        <span className="font-spaceGrotesk text-xl font-medium text-primary-500 xl:text-2xl">
          {cardHead}
        </span>
      </div>

      <Image src={Img} alt="img" width={100} height={100} />
    </div>
  );
}

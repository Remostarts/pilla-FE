interface SubHeadingProps {
  subHeading: string;
  className?: string;
}

export default function SubHeading({ subHeading, className }: SubHeadingProps) {
  return <p className={`mt-1 text-gray-600 ${className}`}>{subHeading}</p>;
}

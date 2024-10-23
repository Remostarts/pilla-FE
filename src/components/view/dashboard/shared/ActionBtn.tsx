import Image from 'next/image';

interface ActionBtnProps {
  actionName: string;
  actionImg: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function ActionBtn({
  actionName,
  actionImg,
  className = 'bg-white border-gray-200',
  disabled,
  onClick,
}: ActionBtnProps) {
  return (
    <button
      className={`flex w-full items-center justify-center gap-4 rounded-xl border p-5 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <Image src={actionImg} alt="add-money-icon" width={24} height={24} />
      <span className="font-spaceGrotesk font-semibold">{actionName}</span>
    </button>
  );
}

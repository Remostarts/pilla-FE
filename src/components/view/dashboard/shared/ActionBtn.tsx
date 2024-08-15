import Image from 'next/image';

interface ActionBtnProps {
  actionName: string;
  actionImg: string;
}

export default function ActionBtn({ actionName, actionImg }: ActionBtnProps) {
  return (
    <div className="flex w-full items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white p-5">
      <Image src={actionImg} alt="add-money-icon" width={24} height={24} />
      <span className="font-spaceGrotesk font-semibold">{actionName}</span>
    </div>
  );
}

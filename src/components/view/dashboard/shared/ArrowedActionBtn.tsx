import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface ArrowedActionBtnProps {
  img?: string;
  btnName: string;
  textColor?: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function ArrowedActionButton({
  img,
  btnName,
  textColor = 'text-primary-950',
  disabled,
  className,
  onClick,
}: ArrowedActionBtnProps) {
  return (
    <button
      className={`flex w-full items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center gap-4">
        {img && <Image src={img} alt={`${btnName}-icon`} width={24} height={24} />}
        <span className={`font-spaceGrotesk font-semibold ${textColor}`}>{btnName}</span>
      </div>
      <ChevronRight className={textColor} />
    </button>
  );
}

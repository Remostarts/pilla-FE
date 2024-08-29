import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="text-md w-full rounded-md bg-orange-500 px-4 py-3 font-spaceGrotesk font-semibold text-white transition-colors hover:bg-orange-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

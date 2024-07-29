import React, { useState } from 'react';
import './style.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
}) => {
  const [isLoading, setLoading] = useState<boolean>(loading);

  const handleClick = () => {
    if (!isLoading && !disabled && onClick) {
      setLoading(true);
      onClick();
    }
  };

  return (
    <button
      className={`button-primary ${disabled || isLoading ? '!cursor-not-allowed opacity-100' : 'cursor-pointer'}`}
      onClick={handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <div className="flex-center space-x-2">
          <span>{children}</span>
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

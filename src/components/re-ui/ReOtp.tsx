'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
} from 'react';

interface ReOtpProps {
  count?: number;
  onChange?: (otp: string) => void;
  className?: string;
}

export default function ReOtp({ count = 6, onChange, className }: ReOtpProps) {
  const [otp, setOtp] = useState<string[]>(Array(count).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(otp.join(''));
    }
  }, [otp, onChange]);

  const setInputRef = useCallback((el: HTMLInputElement | null, index: number) => {
    inputRefs.current[index] = el;
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value !== '' && index < count - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < count - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, count);
    const newOtp = [...otp];
    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, count - 1)]?.focus();
  };

  return (
    <div className={`flex ${className}`}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => setInputRef(el, index)}
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          className="h-10 w-8 rounded-md border border-gray-300 text-center font-spaceGrotesk text-lg transition-all duration-200 focus:border-primary-500 focus:outline-none sm:size-12 sm:text-xl md:size-14"
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
}

import { useState, useEffect } from 'react';

interface CircularProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function CircularProgressBar({ step, totalSteps }: CircularProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((step / totalSteps) * 100);
    }, 100);
    return () => clearTimeout(timer);
  }, [step, totalSteps]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative size-12">
      <svg className="size-full -rotate-90" viewBox="0 0 40 40">
        <circle
          className="text-gray-200"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
        <circle
          className="text-orange-500 transition-all duration-500 ease-in-out"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
        />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-orange-500">
        {step}/{totalSteps}
      </span>
    </div>
  );
}

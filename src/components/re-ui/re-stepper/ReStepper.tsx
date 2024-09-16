import React from 'react';
import { Check } from 'lucide-react';

import { completedStepsState } from '@/redux/features/shared/StepperSlices';
import { useAppSelector } from '@/redux/hooks';

type TStepperProps = {
  currentStep: number;
  steps: string[];
  setFormStep: (value: number) => void;
};

const ReStepper = ({ currentStep, steps = [], setFormStep }: TStepperProps) => {
  const completedSteps = useAppSelector(completedStepsState);

  const handleStepClick = (index: number) => () => {
    if (currentStep === 2) return;
    if (completedSteps >= index) {
      setFormStep(index);
    }
  };

  return (
    <div className="relative flex justify-between">
      {/* Connector line */}

      {steps.map((step, i) => (
        <div key={i} className="relative flex flex-col items-center">
          <button
            type="button"
            onClick={handleStepClick(i)}
            className={`relative z-10 flex size-8 items-center justify-center rounded-full border-2 ${
              i <= currentStep
                ? 'border-green-500 bg-green-500 text-white'
                : 'border-gray-300 bg-white'
            }`}
          >
            {i < currentStep ? (
              <Check className="size-5" />
            ) : (
              <span className="text-sm">{i + 1}</span>
            )}
          </button>
          <p
            className={`mt-2 text-sm ${i === currentStep ? 'font-bold text-black' : 'text-gray-500'}`}
          >
            {step}
          </p>
        </div>
      ))}
    </div>
  );
};

export { ReStepper };

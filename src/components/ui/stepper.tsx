interface StepperProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

export default function Stepper({ totalSteps, currentStep, className = '' }: StepperProps) {
  return (
    <div className="mb-4 flex w-[70%] items-center space-x-4">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-full ${className} ${
            index < currentStep ? 'bg-orange-500' : 'bg-[#ffe1cc]'
          }`}
        ></div>
      ))}
    </div>
  );
}

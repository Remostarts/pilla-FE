import { X, Eye, Shield, Lock } from 'lucide-react';

import SubHeading from '../../shared/SubHeading';

import { Button } from '@/components/ui/button';

interface LinkCorporateBankAccountProps {
  step: number;
  nextStep: () => void;
  totalSteps: number;
}

export default function LinkCorporateBankAccount({
  step,
  nextStep,
  totalSteps,
}: LinkCorporateBankAccountProps) {
  return (
    <div>
      <SubHeading
        subHeading="Make sure the bank being linked is your corporate account. We are going to fetch financial
        transaction, balance, expense, income, and identity data."
        className="mb-8"
      />

      <div className="rounded-3xl bg-blue-600 p-6 text-white">
        <div className="mb-4 flex items-center justify-end">
          <button className="text-white">
            <X size={20} />
          </button>
        </div>

        <h2 className="mb-6 text-2xl font-bold">Link your account with Demo</h2>

        <div className="mb-6 space-y-4">
          <div className="flex items-start">
            <Lock className="mr-3 mt-1 shrink-0" size={20} />
            <div>
              <p className="font-semibold">Secured</p>
              <p className="text-sm opacity-80">
                Your information is encrypted using bank grade security.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Eye className="mr-3 mt-1 shrink-0" size={20} />
            <div>
              <p className="font-semibold">Private</p>
              <p className="text-sm opacity-80">
                Your credentials will never be made accessible to Demo.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <Shield className="mr-3 mt-1 shrink-0" size={20} />
            <div>
              <p className="font-semibold">Protected</p>
              <p className="text-sm opacity-80">
                Demo or Mono doesn&apos;t have access to move your funds.
              </p>
            </div>
          </div>
        </div>

        <p className="mb-4 text-xs">By clicking the button below you agree to Mono T&C.</p>

        {step < totalSteps && (
          <Button
            className="w-full rounded-xl bg-white py-3 font-semibold text-blue-600 hover:bg-white/90"
            onClick={nextStep}
          >
            Click to continue
          </Button>
        )}
      </div>
    </div>
  );
}

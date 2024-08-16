import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';

export default function AddCard() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Add Card" size="2xl" />
      </div>

      {/* Profile Details */}
      <div className="mt-6">
        <Heading heading="Enter Card Information" size="lg" />
        <div className="mt-4 space-y-5">
          <ReInput
            label="Cardholder Name"
            placeholder="Enter Cardholder Name"
            name="cardholderName"
          />

          <ReInput label="Card Number" placeholder="Enter Card Number" name="cardNUmber" />

          <div className="flex items-center gap-6">
            <div className="w-1/2">
              <ReInput label="Expiry Date" name="expiryDate" placeholder="09/2024" />
            </div>

            <div className="w-1/2">
              <ReInput label="CVV" name="cvv" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <ReButton size="lg">Save Card</ReButton>
      </div>
    </div>
  );
}

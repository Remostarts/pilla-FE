import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { ADD_CARD_WINDOW, ADD_MONEY_WINDOW } from '@/constants/homeData';
import { addCardSchema, TAddCard } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  cardholderName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};

export default function AddCard() {
  const { open, close } = useSidebar();

  const form = useForm<TAddCard>({
    resolver: zodResolver(addCardSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(ADD_CARD_WINDOW);
    open(ADD_MONEY_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
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

            <ReInput label="Card Number" placeholder="Enter Card Number" name="cardNumber" />

            <div className="flex items-center gap-6">
              <div className="w-1/2">
                <ReInput label="Expiry Date" name="expiryDate" placeholder="09/2024" />
              </div>

              <div className="w-1/2">
                <ReInput label="CVV" name="cvv" placeholder="000" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Save Card
          </ReButton>
        </div>
      </form>
    </Form>
  );
}

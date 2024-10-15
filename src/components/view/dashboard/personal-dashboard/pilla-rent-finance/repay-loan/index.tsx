import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';
import { Sidebar, useSidebar } from '../../../shared/SideBar';
import { Summary } from '../../../shared/summary/Summary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import { TRANSACTION_PIN_WINDOW } from '@/constants/homeData';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { LOAN_REPAYMENT_SUCCESS_WINDOW } from '@/constants/pillaRentFinanceData';
import { formatNumber } from '@/helpers/utils/formatNumber';
import { amountSchema, TAmount } from '@/lib/validations/personal/savings.validation';
import { Form } from '@/components/ui/form';

const defaultValues = {
  amount: '',
};

export default function RepayLoan() {
  const { open } = useSidebar();

  const form = useForm<TAmount>({
    resolver: zodResolver(amountSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = (data: TAmount) => {
    console.log('form data:', data);
    open(TRANSACTION_PIN_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Loan Repayment" size="2xl" />

        <div className="mt-2 flex items-center gap-2">
          <p className="font-inter">Outstanding Balance:</p>
          <p className="font-spaceGrotesk text-lg font-bold">₦ 60,000</p>
        </div>

        <div className="mt-10">
          <ReInput label="Enter Amount" placeholder="0.00" name="amount" />
        </div>

        {/* Methods */}
        <Summary>
          <div className="mt-10">
            <Summary.Heading heading="Payment Method" size="lg" />
          </div>
          <div className="mt-4">
            <Summary.Method
              name="Account Balance"
              value="account_balance"
              icon="/assets/personal-dashboard/home/payment-wallet-icon.svg"
              details="₦ 400,500.00"
            />
            <Summary.Method
              name="Gt Bank (Card)"
              value="gt_bank_card"
              icon="/assets/personal-dashboard/home/payment-card-icon.svg"
              details="452739******6245"
              onChangeClick={() => {}}
            />
          </div>

          {/* Btn */}
          <Summary.Button type="submit">Done</Summary.Button>
        </Summary>

        {/* Sidebar Windows */}

        {/* Transaction Pin */}
        <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
          <Pin
            heading="Enter Transaction PIN"
            subHeading="Input your 4 digit passcode to authorize this transaction"
            btnName="Verify"
            opens={LOAN_REPAYMENT_SUCCESS_WINDOW}
            closes={TRANSACTION_PIN_WINDOW}
          />
        </Sidebar.Window>

        {/* Success Message for Credit Check Done Window */}
        <Sidebar.Window name={LOAN_REPAYMENT_SUCCESS_WINDOW}>
          <SuccessMessage>
            <SuccessMessage.Title>Transaction Receipt</SuccessMessage.Title>
            <SuccessMessage.Content>
              <SuccessMessage.Description>Loan Repayment Successfully</SuccessMessage.Description>
              <div className="mt-8">
                <SuccessMessage.AmountAndDate amount={formatNumber(2500)} />
              </div>
            </SuccessMessage.Content>
            <SuccessMessage.Button closes={LOAN_REPAYMENT_SUCCESS_WINDOW}>
              Done
            </SuccessMessage.Button>
          </SuccessMessage>
        </Sidebar.Window>
      </form>
    </Form>
  );
}

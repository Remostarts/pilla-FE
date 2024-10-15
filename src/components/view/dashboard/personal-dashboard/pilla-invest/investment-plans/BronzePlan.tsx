import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import PlanContainer from './RePlanContainer';

import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { BRONZE_PLAN_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummaryAction } from '@/hooks/useSummaryAction';
import { planSchema, TPlan } from '@/lib/validations/personal/invest.validation';
import { Form } from '@/components/ui/form';

const bronzePlanData = {
  id: 1,
  name: 'Bronze Plan',
  window: 'bronze-plan-window',
  tenure: '3 months (90 Days)',
  roi: '22%',
  investment: '₦4,999,999 from ₦1,000,000',
};

const defaultValues = {
  amount: '',
  period: '',
};

export default function BronzePlan() {
  const { handleInvestmentSummary } = useInvestmentSummaryAction();

  const form = useForm<TPlan>({
    resolver: zodResolver(planSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  // Sets a amount and closes itself
  const onSubmit = () => {
    handleInvestmentSummary(
      'Pilla Real Estate Capital Growth Note',
      'Bronze Plan',
      1500000,
      '3 months',
      '16%',
      BRONZE_PLAN_WINDOW
    );
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <PlanContainer data={bronzePlanData} isSelected={true} />

        <div className="mt-10 space-y-5">
          <ReInput
            label="Amount"
            placeholder="0.00"
            name="amount"
            description="Enter an amount between ₦1,000,000 - ₦4,999,999"
          />

          <ReSelect
            name="period"
            label="Select Period"
            placeholder="Select"
            options={[
              { value: '3-months', label: '3 months (90 Days) - 16%' },
              { value: '6-months', label: '6 months (180 Days) - 18%' },
              { value: '9-months', label: '9 months (270 Days) - 20%' },
              { value: '12-months', label: '12 months (365 Days) - 22%' },
            ]}
          />
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Proceed
          </ReButton>
        </div>
      </form>
    </Form>
  );
}

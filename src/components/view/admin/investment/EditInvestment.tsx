import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../dashboard/shared/Heading';

import ReFileUploadField from '@/components/re-ui/ReFileUploadField';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import {
  editInvestmentSchema,
  TEditInvestment,
} from '@/lib/validations/admin/investment.validation';

const defaultValues = {
  period: '',
  uploadBanner: '',
  title: '',
  description: '',
  unitPrice: '',
  interest: '',
};
export default function EditInvestment() {
  const form = useForm<TEditInvestment>({
    resolver: zodResolver(editInvestmentSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TEditInvestment) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" relative w-full ">
          <div className="mb-4 flex items-center justify-between">
            <Heading heading="Create Investment" className="mb-6 text-2xl font-semibold" />
          </div>
          <div className="space-y-4">
            <div>
              <ReFileUploadField
                name="uploadBanner"
                label="Upload Banner"
                placeholder="Upload Banner"
              />
            </div>
            <div>
              <ReInput name="title" label="Title" placeholder="Enter Title" />
            </div>
            <div>
              <ReTextarea name="description" label="Description" placeholder="Enter Description" />
            </div>
            <div>
              <ReInput name="unitPrice" label="Unit Price (₦)" placeholder="00.00" type="number" />
            </div>
            <div>
              <ReInput name="interest" label="Interest %" placeholder="10" type="number" />
            </div>
            <div>
              <ReSelect
                name="period"
                label="Period"
                placeholder="Select"
                options={[
                  { label: '1 month', value: '1 month' },
                  { label: '3 months', value: '3 months' },
                  { label: '6 months', value: '6 months' },
                  { label: '1 year', value: '1 year' },
                ]}
              />
            </div>
            <ReButton type="submit" className="w-full text-lg text-white">
              Save Changes
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}

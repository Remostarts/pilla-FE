import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';

import FileUploadField from '../../dashboard/shared/FileUploadField';
import { Heading } from '../../dashboard/shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import {
  createInvestmentSchema,
  TCreateInvestment,
} from '@/lib/validations/admin/investment.validation';

const defaultValues = {
  accountType: '',
  uploadBanner: '',
  title: '',
  description: '',
  unitPrice: '',
  interest: '',
  period: '',
};

export default function CreateInvestment() {
  const { control } = useFormContext();

  const form = useForm<TCreateInvestment>({
    resolver: zodResolver(createInvestmentSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TCreateInvestment) => {
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
              <ReSelect
                name="accountType"
                label="Account Type"
                placeholder="Select"
                options={[
                  { label: 'Personal Account', value: 'personal' },
                  { label: 'Business Account', value: 'business' },
                ]}
              />
            </div>
            <div>
              <Label>Upload Banner</Label>
              <FileUploadField name="uploadBanner" label="Upload Banner" control={control} />
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
              Create Investment
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}

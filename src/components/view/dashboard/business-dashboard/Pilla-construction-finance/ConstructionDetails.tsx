import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import {
  constructionDetailsSchema,
  TConstructionDetails,
} from '@/lib/validations/business/settings.validation';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';

interface ConstructionDetailsProps {
  nextStep: () => void;
  dispatch: any;
  updateConstructionDetails: (data: any) => void;
}

export default function ConstructionDetails({
  nextStep,
  dispatch,
  updateConstructionDetails,
}: ConstructionDetailsProps) {
  const form = useForm<TConstructionDetails>({
    resolver: zodResolver(constructionDetailsSchema),
    mode: 'onChange',
    defaultValues: {
      propertyType: '',
      addressOfProperty: '',
      descriptionOfConstructionProject: '',
      timeline: '',
      cost: '',
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TConstructionDetails) => {
    dispatch(updateConstructionDetails(data));
    nextStep();
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Type of Property */}
        <div>
          <ReSelect
            label="Type of Property"
            name="propertyType"
            placeholder="Select property type"
            className="bg-[#F7F7F7] text-gray-700"
            options={[
              {
                value: ' Blocks of Apartments (1,2,3 Bedroom)',
                label: ' Blocks of Apartments (1,2,3 Bedroom)',
              },
              {
                value: 'Duplexs (Fully Detached, Semi Detached, Terraces )',
                label: 'Duplexs (Fully Detached, Semi Detached, Terraces )',
              },
              {
                value: 'Detached Houses',
                label: 'Detached Houses',
              },
              {
                value: 'Others',
                label: 'Others',
              },
            ]}
          />
        </div>

        {/* Address Of Property */}
        <div>
          <ReTextarea
            name="addressOfProperty"
            label="Address Of Property Being Develop *"
            placeholder="Enter address"
          />
        </div>

        {/* Description of the Construction Project */}
        <div>
          <ReTextarea
            name="descriptionOfConstructionProject"
            label="Description of the Construction Project, including Scope, Size, and Purpose *"
            placeholder="Enter description"
          />
        </div>

        {/* Total Project Timeline */}
        <div>
          <ReInput
            name="timeline"
            label="Total Project Timeline *"
            placeholder="Enter timeline"
            className="bg-[#F7F7F7]"
          />
        </div>

        {/* Total Project Cost Estimate */}
        <div>
          <ReInput
            name="cost"
            label="Total Project Cost Estimate *"
            placeholder="₦"
            className="bg-[#F7F7F7]"
          />
        </div>

        <div>
          <ReButton type="submit" className="mt-6 w-full text-lg text-white">
            Proceed
          </ReButton>
        </div>
      </form>
    </Form>
  );
}

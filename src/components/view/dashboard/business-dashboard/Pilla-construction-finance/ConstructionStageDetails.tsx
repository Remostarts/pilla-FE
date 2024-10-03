import { Upload } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../shared/Heading';
import FileUploadField from '../../shared/FileUploadField';

import { Label } from '@/components/ui/label';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { Form } from '@/components/ui/form';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  constructionStageDetailsSchema,
  TConstructionStageDetails,
} from '@/lib/validations/business/settings.validation';

const buildingStageOptions = [
  { value: 'paperwork', label: 'Paperwork' },
  { value: 'settingOut', label: 'Setting Out' },
  { value: 'trenchExcavation', label: 'Trench Excavation' },
  {
    value: 'foundationWork',
    label: 'Foundation Work ',
  },
  { value: 'columnCasting', label: 'Column Casting' },
  { value: 'floorCasting', label: 'Floor Casting' },
  { value: 'layingBlockWalls', label: 'Laying of Block Walls' },
  { value: 'lintelCasting', label: 'Lintel Casting' },
  { value: 'decking', label: 'Decking' },
  { value: 'roofing', label: 'Roofing' },
  { value: 'plumbingWorks', label: 'Plumbing Works' },
  { value: 'fixingBathroomToiletWares', label: 'Fixing of bathroom and toilet wares' },
  { value: 'plasteringWork', label: 'Plastering Work' },
  { value: 'fixingDoorsWindows', label: 'Fixing of Doors and Windows' },
  { value: 'railingsBalconiesSecurityGate', label: 'Railings/Balconies/Security gate' },
  { value: 'fixingElectricals', label: 'Fixing of Electricals' },
  { value: 'layingTiles', label: 'Laying of Tiles' },
  {
    value: 'perimeterFencingGatehouseConstruction',
    label: 'Perimeter Fencing and Gatehouse construction',
  },
  { value: 'painting', label: 'Painting' },
  { value: 'connectionToWaterSupply', label: 'Connection to water supply' },
  { value: 'connectionToPower', label: 'Connection to power' },
  { value: 'miscellaneousWorks', label: 'Miscellaneous Works' },
];

interface ConstructionStageDetailsProps {
  nextStep: () => void;
  dispatch: any;
  updateConstructionStageDetails: (data: any) => void;
}

const defaultValues = {
  buildingStage: '',
  loanAmountRequested: '',
  invoiceAmount: '',
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
  bankName: '',
  bankAccountNumber: '',
  invoice: null,
};

export default function ConstructionStageDetails({
  nextStep,
  dispatch,
  updateConstructionStageDetails,
}: ConstructionStageDetailsProps) {
  const form = useForm<TConstructionStageDetails>({
    resolver: zodResolver(constructionStageDetailsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: TConstructionStageDetails) => {
    dispatch(updateConstructionStageDetails(data));
    nextStep();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Select building stage */}
        <div>
          <ReSelect
            name="buildingStage"
            label="Select building stage"
            placeholder="Select stage"
            options={buildingStageOptions}
            className="bg-[#F7F7F7] text-gray-700"
          />
        </div>

        {/* Amount Requested for loan */}
        <div>
          <ReInput
            name="loanAmountRequested"
            label="Amount Requested for loan *"
            placeholder="₦"
            className="bg-[#F7F7F7]"
          />
        </div>

        <div>
          <ReInput
            name="invoiceAmount"
            label="Invoice Amount *"
            placeholder="₦"
            className="bg-[#F7F7F7]"
          />
        </div>

        {/* Upload Building Stage Photos */}
        <div>
          <FileUploadField
            name="invoice"
            placeholder="Upload Invoice"
            label="Upload Invoice"
            control={control}
          />
        </div>

        {/* Supplier details */}
        <div>
          <Heading heading="Supplier Details" className="mb-3 mt-10" />

          {/* Full Name */}
          <div>
            <ReInput
              name="fullName"
              label="Full Name *"
              placeholder="Enter full name"
              className="bg-[#F7F7F7]"
            />
          </div>

          {/* phone number */}
          <div>
            <ReInput
              name="phoneNumber"
              label="Phone Number *"
              placeholder="Enter phone number"
              className="bg-[#F7F7F7]"
            />
          </div>

          {/* Email Address */}
          <div>
            <ReInput
              name="emailAddress"
              label="Email Address *"
              placeholder="Enter email address"
              className="bg-[#F7F7F7]"
            />
          </div>

          {/* Bank Name */}
          <div>
            <ReSelect
              name="bankName"
              label="Bank Name *"
              placeholder="Select bank"
              options={[
                { value: 'bank1', label: 'bank1' },
                { value: 'bank2', label: 'bank2' },
              ]}
              className="bg-[#F7F7F7]"
            />
          </div>

          {/* Bank Account Number */}
          <div>
            <ReInput
              name="bankAccountNumber"
              label="Bank Account Number *"
              placeholder="Enter account number"
              className="bg-[#F7F7F7]"
            />
          </div>

          <div>
            <ReButton type="submit" className=" mt-6 w-full text-lg text-white">
              Proceed
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}

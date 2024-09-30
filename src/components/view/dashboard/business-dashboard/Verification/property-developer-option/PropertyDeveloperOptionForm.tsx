import { Heading } from '../../../shared/Heading';

import { Separator } from '@/components/ui/separator';
import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

export default function PropertyDeveloperOptionForm() {
  return (
    <div className="mt-6 space-y-4">
      <Separator className="bg-gray-200" />
      <Heading className="mb-3" heading="Business Information *" />

      {/* // business name input field */}
      <div>
        <ReInput
          label="Business Name"
          name="profile.propertyDeveloper.businessName"
          placeholder="Enter your business name"
          className="bg-gray-100/80"
        />
      </div>

      {/* // business type input field */}
      <div className="grid grid-cols-2 gap-20">
        <div>
          <ReSelect
            name="profile.propertyDeveloper.businessType"
            label="Business Type"
            placeholder="Select"
            className="bg-gray-100/80"
            options={[
              { value: 'business type 1', label: 'business type 1' },
              { value: 'business type 2', label: 'business type 2' },
              { value: 'business type 3', label: 'business type 3' },
            ]}
          />
        </div>

        {/* // registration type input Field */}
        <div>
          <ReSelect
            name="profile.propertyDeveloper.registrationType"
            label="Registration Type"
            placeholder="Select"
            className="bg-gray-100/80"
            options={[
              { value: 'registration type 1', label: 'registration type 1' },
              { value: 'registration type 2', label: 'registration type 2' },
              { value: 'registration type 3', label: 'registration type 3' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

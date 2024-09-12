import { Textarea } from '@/components/ui/textarea';
import ReSelect from '@/components/re-ui/ReSelect';
import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';

export default function ConstructionDetails() {
  return (
    <form className="space-y-4">
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
        <Label htmlFor="address" className="text-md mb-3 block font-medium text-gray-700">
          Address Of Property Being Develop *
        </Label>
        <Textarea
          id="address"
          placeholder="Enter address"
          rows={5}
          cols={30}
          className="resize-none bg-[#F7F7F7]"
        />
      </div>

      {/* Description of the Construction Project */}
      <div>
        <label htmlFor="description" className="text-md mb-3 block font-medium text-gray-700">
          Description of the Construction Project, including Scope, Size, and Purpose *
        </label>
        <Textarea
          id="description"
          placeholder="Enter description"
          rows={5}
          cols={30}
          className="resize-none bg-[#F7F7F7]"
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
    </form>
  );
}

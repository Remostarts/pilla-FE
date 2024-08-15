import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

export default function Explore() {
  return (
    <div>
      <Heading heading="Investment Plans" />

      <div className="mt-6">
        <button className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="h-28 w-60 bg-primary-100"></div>
            <div className="flex w-3/4 flex-col items-start p-6">
              <Heading heading="Pilla Real Estate Capital Growth Note" size="2xl" />
              <SubHeading
                subHeading="Pilla Real Estate Capital Growth Note is a professionally managed fund that invest
                directly in real estate properties."
                className="text-left"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

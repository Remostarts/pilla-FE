import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-gray-200 p-8 sm:p-16 md:w-1/2">
      <form>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Full Name *
          </label>
          <Input name="fullName" type="text" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Email Address *
          </label>
          <Input name="emailAddress" type="text" />
        </div>
        <div className="mb-10">
          <label
            htmlFor="message"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Message
          </label>
          <Textarea name="message" rows={4} />
        </div>

        {/* Submit Btn */}
        <Button
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

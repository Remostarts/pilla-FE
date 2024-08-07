import Image from 'next/image';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function page() {
  return (
    <section className="mx-auto max-w-8xl px-6 md:px-10 lg:px-12">
      <div className="mt-4 sm:mt-10">
        {/* Heading */}
        <h1 className="mb-1 font-spaceGrotesk text-4xl font-bold lg:text-5xl">Contact us</h1>
        <p className="mb-8 font-inter text-lg sm:mb-12">Let&apos;s stay connected</p>

        {/* Company Details */}
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
          <div className="rounded-2xl border border-gray-200 p-8 sm:p-16 lg:w-2/5">
            <div className="mb-8 flex items-start gap-1">
              <div className="mr-4 mt-1 rounded-full bg-orange-500 p-2">
                <Image
                  src="/assets/contact-us/headquarter-icon.svg"
                  alt="headquarter"
                  width={31}
                  height={31}
                />
              </div>
              {/* Headquarter Details */}
              <div>
                <h3 className="mb-1 font-spaceGrotesk text-lg font-semibold lg:text-xl">
                  Pilla Headquarters
                </h3>
                <p className="font-inter text-sm text-gray-800 md:tracking-wide">
                  Plot 3, Wole Olateju Crescent,
                  <br />
                  Admiralty Way, Lekki Phase 1,
                  <br />
                  Lagos.
                </p>
              </div>
            </div>

            {/* Phone Details */}
            <div className="mb-12 flex items-center gap-1">
              <div className="mr-4 rounded-full bg-orange-500 p-2">
                <Image src="/assets/contact-us/phone-icon.svg" alt="phone" width={30} height={30} />
              </div>
              <div>
                <h3 className="mb-1 font-spaceGrotesk text-lg font-semibold lg:text-xl">Phone</h3>
                <p className="font-inter text-sm text-gray-800">+234 705 400 0050</p>
              </div>
            </div>

            {/* Mail Details */}
            <div className="mb-16 flex items-center gap-1">
              <div className="mr-4 rounded-full bg-orange-500 p-2">
                <Image src="/assets/contact-us/mail-icon.svg" alt="mail" width={30} height={30} />
              </div>
              <div>
                <h3 className="mb-1 font-spaceGrotesk text-lg font-semibold lg:text-xl">Email</h3>
                <p className="font-inter text-sm text-gray-800 md:tracking-wide">
                  hello@pilla.africa
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              <a href="/" className="mr-1">
                <Image
                  src="/assets/contact-us/fb-icon.svg"
                  alt="facebook-logo"
                  width={13}
                  height={13}
                />
              </a>
              <a href="/">
                <Image
                  src="/assets/common/twitter-icon.svg"
                  alt="twitter-logo"
                  width={26}
                  height={26}
                />
              </a>
              <a href="/">
                <Image
                  src="/assets/common/instagram-icon.svg"
                  alt="instagram-logo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
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
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
                >
                  Message
                </label>
                <Textarea name="message" rows={4} />
              </div>

              {/* Submit Btn */}
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary-500 px-4 py-3 font-inter text-white transition duration-300 hover:bg-primary-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

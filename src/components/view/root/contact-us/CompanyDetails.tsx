import Image from 'next/image';
import React from 'react';

export default function CompanyDetails() {
  return (
    <div className="rounded-2xl border border-gray-200 p-8 sm:p-16 lg:w-[43%]">
      <div className="mb-8 flex items-start gap-1">
        <div className="mr-4 mt-1 rounded-full bg-primary-500 p-2">
          <Image
            src="/assets/root/contact-us/headquarter-icon.svg"
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
          <p className="font-inter text-gray-800">
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
        <div className="mr-4 rounded-full bg-primary-500 p-2">
          <Image src="/assets/root/contact-us/phone-icon.svg" alt="phone" width={30} height={30} />
        </div>
        <div>
          <h3 className="mb-1 font-spaceGrotesk text-lg font-semibold lg:text-xl">Phone</h3>
          <p className="font-inter text-gray-800">+234 705 400 0050</p>
        </div>
      </div>

      {/* Mail Details */}
      <div className="mb-16 flex items-center gap-1">
        <div className="mr-4 rounded-full bg-primary-500 p-2">
          <Image src="/assets/root/contact-us/mail-icon.svg" alt="mail" width={30} height={30} />
        </div>
        <div>
          <h3 className="mb-1 font-spaceGrotesk text-lg font-semibold lg:text-xl">Email</h3>
          <p className="font-inter text-gray-800">hello@pilla.africa</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-5">
        <a href="/" className="mr-1">
          <Image
            src="/assets/root/contact-us/fb-icon.svg"
            alt="facebook-logo"
            width={13}
            height={13}
          />
        </a>
        <a href="/">
          <Image
            src="/assets/root/shared/twitter-icon.svg"
            alt="twitter-logo"
            width={26}
            height={26}
          />
        </a>
        <a href="/">
          <Image
            src="/assets/root/shared/instagram-icon.svg"
            alt="instagram-logo"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
}

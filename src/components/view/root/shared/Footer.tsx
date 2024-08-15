import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 w-full bg-black text-white sm:mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 sm:py-20 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-1">
            <Image
              src="/assets/root/shared/logo-white.svg"
              alt="Company Logo"
              width={70}
              height={70}
              className="size-16 w-fit lg:size-20"
            />
          </div>

          {/* Company address */}
          <div className="col-span-1">
            <h3 className="mb-2 font-spaceGrotesk text-lg font-bold">Pilla Headquarters</h3>
            <div className="text-sm xl:text-base">
              <p className="font-inter">Plot 3, Wole Olateju Crescent</p>
              <p className="font-inter">Admiralty Way, Lekki Phase 1</p>
              <p className="font-inter">Lagos</p>
            </div>
          </div>

          {/* Company Phone */}
          <div className="col-span-1 md:ml-8">
            <p className="mb-2 font-spaceGrotesk text-lg font-bold">Phone</p>
            <p className="-ml-1 font-inter text-sm xl:text-base">+234 705 400 0050</p>
          </div>

          {/* Company Email */}
          <div className="col-span-1">
            <p className="mb-2 font-spaceGrotesk text-lg font-bold">Email</p>
            <p className="font-inter text-sm xl:text-base">hello@pilla.africa</p>

            {/* Social logos */}
            <div className="mt-4 flex items-center space-x-5">
              <a href="/" className="mr-1">
                <Image
                  src="/assets/root/shared/facebook-icon.svg"
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

          {/* Certification logo */}
          <div className="flex size-fit lg:w-full lg:justify-end">
            <Image
              src="/assets/root/shared/pilla-certification.svg"
              alt="Certification logo"
              width={70}
              height={70}
              className="size-18 sm:size-20"
            />
          </div>
        </div>

        {/* Extra links */}
        <div className="flex flex-col items-center justify-between border-t border-gray-400 py-12 sm:flex-row">
          <p className="mb-4 font-inter text-sm sm:mb-0 sm:text-xs lg:text-sm">
            Copyright © Pilla 2024
          </p>
          <nav className="mx-0 mb-4 mt-2 flex space-x-6 text-xs sm:mx-8 sm:my-0 sm:space-x-8 sm:text-xs lg:space-x-10 lg:text-sm">
            <div>
              <Link href="/terms" className="font-inter text-white">
                Terms of service
              </Link>
            </div>
            <div>
              <Link href="/privacy" className="font-inter text-white">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="/other-policy" className="font-inter text-white">
                Other Policy
              </Link>
            </div>
          </nav>
          <div>
            <select className="mt-4 rounded border border-gray-700 bg-black px-2 py-1 font-inter text-sm text-white sm:mt-0 sm:text-xs lg:text-sm">
              <option>English (United States)</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

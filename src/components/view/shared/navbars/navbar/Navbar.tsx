import Link from 'next/link';
import Image from 'next/image';
import { BiUserCircle } from 'react-icons/bi';

import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="mx-auto w-full max-w-8xl bg-white">
      <div className="px-4 sm:px-10 lg:px-12">
        <div className="flex h-32 justify-between">
          <div className="flex items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="scale-75 md:scale-100">
              <Image src="/assets/svg/logo.svg" alt="Pilla Logo" width={45} height={45} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-[4vw] font-spaceGrotesk text-sm font-bold text-gray-600 hover:text-gray-900 sm:ml-6 sm:flex sm:items-center md:text-base">
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
              Company
            </Link>

            <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
              Solutions
            </Link>

            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>

          {/* Desktop sign in */}
          <div className="hidden scale-75 font-spaceGrotesk sm:flex sm:items-center md:scale-100">
            <Link
              href="/signin"
              className="flex items-center gap-1 rounded-full bg-primary-500 px-4 py-2 text-white transition duration-300 hover:bg-primary-600"
            >
              <BiUserCircle size={24} />
              Sign in
            </Link>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

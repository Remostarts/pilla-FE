import Link from 'next/link';
import Image from 'next/image';
import { BiUserCircle } from 'react-icons/bi';

export default function Navbar() {
  const mobileMenuOpen = false;

  return (
    <nav className="bg-white">
      <div className="px-6 sm:px-8 lg:px-10">
        <div className="flex h-32 justify-between">
          <div className="flex items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="scale-75 md:scale-100">
              <Image src="/assets/images/logo.svg" alt="Pilla Logo" width={45} height={45} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-[4vw] font-spaceGrotesk text-sm font-bold text-gray-600 hover:text-gray-900 sm:ml-6 sm:flex sm:items-center md:text-base">
            <Link href="/company" className="text-gray-600 hover:text-gray-900">
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

          <div className="hidden scale-75 font-spaceGrotesk sm:ml-6 sm:flex sm:items-center md:scale-100">
            <Link
              href="/signin"
              className="flex items-center gap-1 rounded-full bg-primary-500 px-4 py-2 text-white transition duration-300 hover:bg-primary-600"
            >
              <BiUserCircle size={24} />
              Sign in
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} size-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} size-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="space-y-1 pb-3 pt-2 font-spaceGrotesk">
          <Link
            href="/company"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Company
          </Link>
          <Link
            href="/solutions"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Solutions
          </Link>
          <Link
            href="/faqs"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Contact Us
          </Link>
          <Link
            href="/signin"
            className="block px-3 py-2 text-base font-medium text-primary-500 hover:bg-gray-100 hover:text-primary-600"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="z-20 mt-10 sm:hidden">
      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
      >
        {mobileMenuOpen ? (
          <Image src="/assets/common/close.svg" alt="menu-close" width={28} height={28} />
        ) : (
          <Image src="/assets/common/hamburger.svg" alt="menu-open" width={28} height={28} />
        )}
      </button>

      {/* Mobile menu content */}
      <div
        className={`${mobileMenuOpen ? 'block' : 'hidden'} absolute inset-x-0 mt-6 bg-white shadow-lg`}
      >
        <div className="space-y-1 px-4 pb-6 pt-2 font-spaceGrotesk">
          <Link
            href="/about-us"
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
    </div>
  );
}

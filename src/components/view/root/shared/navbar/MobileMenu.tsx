'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="z-20 mt-10 sm:hidden">
      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
      >
        {mobileMenuOpen ? (
          <Image src="/assets/root/shared/close.svg" alt="menu-close" width={28} height={28} />
        ) : (
          <Image src="/assets/root/shared/hamburger.svg" alt="menu-open" width={28} height={28} />
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
          <Accordion type="single" collapsible>
            <AccordionItem value="solutions" className="border-none">
              <AccordionTrigger className="px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:no-underline">
                Solutions
              </AccordionTrigger>
              <AccordionContent>
                <Link
                  href="/pilla-savings"
                  className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src="/assets/root/shared/pilla-savings.svg"
                    alt="pilla-savings"
                    width={20}
                    height={20}
                  />
                  Pilla Savings
                </Link>
                <Link
                  href="/pilla-invest"
                  className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src="/assets/root/shared/pilla-invest.svg"
                    alt="pilla-invest"
                    width={20}
                    height={20}
                  />
                  Pilla Invest
                </Link>
                <Link
                  href="/pilla-rent-finance"
                  className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src="/assets/root/shared/pilla-rent.svg"
                    alt="pilla-rent"
                    width={20}
                    height={20}
                  />
                  Pilla Rent Finance
                </Link>
                <Link
                  href="/pilla-construction-finance"
                  className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src="/assets/root/shared/pilla-construction.svg"
                    alt="pilla-construction"
                    width={20}
                    height={20}
                  />
                  Pilla Construction Finance
                </Link>
                <Link
                  href="/pilla-pay"
                  className="flex items-center gap-3 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Image
                    src="/assets/root/shared/pilla-pay.svg"
                    alt="pilla-pay"
                    width={20}
                    height={20}
                  />
                  Pilla Pay
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

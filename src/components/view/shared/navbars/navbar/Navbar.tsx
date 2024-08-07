import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, UserCircle } from 'lucide-react';

import MobileMenu from './MobileMenu';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <nav className="mx-auto w-full max-w-8xl bg-white">
      <div className="px-4 sm:px-10 lg:px-12">
        <div className="flex h-32 justify-between">
          <div className="flex items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="scale-75 md:scale-100">
              <Image src="/assets/common/logo.svg" alt="Pilla Logo" width={45} height={45} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-[4vw] font-spaceGrotesk text-sm font-bold text-gray-600 hover:text-gray-900 sm:ml-6 sm:flex sm:items-center md:text-base">
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
              Company
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none">
                Solutions <ChevronDown className="ml-1 size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-16 mt-2 bg-white p-2 font-spaceGrotesk font-medium text-gray-800">
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/pilla-savings" className="flex w-full gap-2">
                    <Image
                      src="/assets/common/pilla-savings.svg"
                      alt="pilla-savings"
                      width={20}
                      height={20}
                    />
                    Pilla Savings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/pilla-invest" className="flex w-full gap-2">
                    <Image
                      src="/assets/common/pilla-invest.svg"
                      alt="pilla-savings"
                      width={20}
                      height={20}
                    />
                    Pilla Invest
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/pilla-rent-finance" className="flex w-full gap-2">
                    <Image
                      src="/assets/common/pilla-rent.svg"
                      alt="pilla-savings"
                      width={20}
                      height={20}
                    />
                    Pilla Rent Finance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/pilla-construction-finance" className="flex w-full gap-2">
                    <Image
                      src="/assets/common/pilla-construction.svg"
                      alt="pilla-savings"
                      width={20}
                      height={20}
                    />
                    Pilla Construction Finance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/pilla-pay" className="flex w-full gap-2">
                    <Image
                      src="/assets/common/pilla-pay.svg"
                      alt="pilla-savings"
                      width={20}
                      height={20}
                    />
                    Pilla Pay
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>

          {/* Desktop sign in */}
          <div className="hidden scale-75 font-spaceGrotesk sm:flex sm:items-center md:scale-100">
            <Link
              href="/signin"
              className="flex items-center gap-1 rounded-full bg-primary-500 px-4 py-2 text-white transition duration-300 hover:bg-primary-600"
            >
              <UserCircle size={24} />
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

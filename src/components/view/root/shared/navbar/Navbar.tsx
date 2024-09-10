import { ArrowRight, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from './MobileMenu';
import SolutionMenu from './SolutionMenu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <nav className="mx-auto w-full max-w-8xl bg-white">
      <div className="px-4 sm:px-10 lg:px-12">
        <div className="flex h-32 justify-between">
          <div className="flex items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="scale-75 md:scale-100">
              <Image src="/assets/root/shared/logo.svg" alt="Pilla Logo" width={45} height={45} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-[4vw] font-spaceGrotesk text-sm font-bold text-gray-600 hover:text-gray-900 sm:ml-6 sm:flex sm:items-center md:text-base">
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
              Company
            </Link>

            <SolutionMenu />
            <Link href="/faqs" className="text-gray-600 hover:text-gray-900">
              FAQs
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>

          {/* Desktop sign in */}
          <div className="hidden scale-75 font-spaceGrotesk sm:flex sm:items-center md:scale-100">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-full bg-primary-500 px-4 py-2 text-white transition duration-300 hover:bg-primary-600 focus:outline-none">
                <UserCircle size={24} />
                <span>Sign in</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-3 bg-white p-2 font-spaceGrotesk font-medium text-gray-800">
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/sign-in" className="flex w-full gap-2">
                    Personal Login
                    <ArrowRight size={20} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2 transition-colors duration-150 hover:bg-gray-100">
                  <Link href="/sign-in/business" className="flex w-full gap-2">
                    Business Login
                    <ArrowRight size={20} />
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

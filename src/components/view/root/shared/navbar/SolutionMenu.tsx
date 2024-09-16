'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function SolutionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    {
      href: '/pilla-savings',
      src: '/assets/root/shared/pilla-savings.svg',
      alt: 'pilla-savings',
      text: 'Pilla Savings',
    },
    {
      href: '/pilla-invest',
      src: '/assets/root/shared/pilla-invest.svg',
      alt: 'pilla-invest',
      text: 'Pilla Invest',
    },
    {
      href: '/pilla-rent-finance',
      src: '/assets/root/shared/pilla-rent.svg',
      alt: 'pilla-rent',
      text: 'Pilla Rent Finance',
    },
    {
      href: '/pilla-construction-finance',
      src: '/assets/root/shared/pilla-construction.svg',
      alt: 'pilla-construction',
      text: 'Pilla Construction Finance',
    },
    {
      href: '/pilla-pay',
      src: '/assets/root/shared/pilla-pay.svg',
      alt: 'pilla-pay',
      text: 'Pilla Pay',
    },
  ];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-gray-900 focus:outline-none">
        <span className="flex items-center">
          Solutions <ChevronDown className="ml-1 size-4" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-12 mt-3 bg-white p-2 font-spaceGrotesk font-medium text-gray-800">
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="p-2 transition-colors duration-150 hover:bg-gray-100"
            onSelect={closeMenu}
          >
            <Link href={item.href} className="flex w-full gap-2">
              <Image src={item.src} alt={item.alt} width={20} height={20} />
              {item.text}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

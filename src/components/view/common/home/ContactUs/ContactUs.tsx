'use client';

import Image from 'next/image';
import React from 'react';

import image from '../../../../../../public/assets/images/contactUs.png';

import { PrimaryButton } from './Buttons/Buttons';

export default function ContactUs() {
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <div className="container flex size-full flex-row items-center justify-between">
      <div className="flex h-full w-1/3 flex-col items-center space-y-5 rounded-lg bg-[#4BA0E8]">
        <Image src={image} height={150} width={150} alt="" />
      </div>
      <div>
        <PrimaryButton onClick={handleClick}>{'hello'}</PrimaryButton>
      </div>
    </div>
  );
}

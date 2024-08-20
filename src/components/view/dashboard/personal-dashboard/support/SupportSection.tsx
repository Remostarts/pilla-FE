'use client';

import { Facebook, Instagram, Mail, Map, MessageSquareMore, Phone, Twitter } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

const SupportSection = () => {
  return (
    <section>
      <div className="flex h-full flex-col items-center justify-center font-spaceGrotesk">
        {/* support info */}
        <div className="w-full max-w-xl rounded-xl  border bg-white p-6">
          <div className="mb-4 flex items-center space-y-4">
            <div className="rounded-full bg-orange-500 p-3 text-white">
              <Map />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Pilla Headquarters</h2>
              <p className="text-gray-700">
                Plot 3, Wole Olateju Crescent, Admiralty Way, Lekki Phase 1. Lagos.
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-center">
            <div className="rounded-full bg-orange-500 p-3 text-white">
              <Phone />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Phone</h2>
              <p className="text-gray-700">+234 705 400 0050</p>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <div className="rounded-full bg-orange-500 p-3 text-white">
              <Mail />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-700">hello@pilla.africa</p>
            </div>
          </div>

          {/* social media links */}
          <div className="mb-4  mt-10 flex space-x-4">
            <a href="https://facebook.com" className="text-primary-500 hover:text-orange-700 ">
              <Facebook />
            </a>
            <a href="https://twitter.com" className="text-orange-500 hover:text-orange-700">
              <Twitter />
            </a>
            <a href="https://instagram.com" className="text-orange-500 hover:text-orange-700">
              <Instagram />
            </a>
          </div>
        </div>

        {/* live chat btn */}
        <div className="mt-4 flex w-full  max-w-xl">
          <Button className="flex w-full space-x-2 rounded-full bg-primary-500 p-8  text-white">
            <MessageSquareMore />
            <span>Live Chat</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;

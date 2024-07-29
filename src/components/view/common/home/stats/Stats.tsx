'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import StatsCounter from './StatsCounter';

export default function Stats() {
  return (
    <div className="flex h-[40vh] bg-hero-img-9 bg-cover bg-no-repeat lg:bg-cover lg:object-cover">
      <div className="inset-y-0 left-0  flex h-full w-screen items-center justify-start bg-black/50">
        <motion.div
          className="hidden items-center justify-center lg:flex"
          initial={{ x: '40%' }}
          animate={{ x: '-2%' }}
          transition={{
            duration: 2, // Change the duration to adjust the transition speed
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <Image src={'/assets/images/funfactor.png'} alt="" width={200} height={200} />
        </motion.div>
        <div className="flex-1">
          <StatsCounter />
        </div>
      </div>
    </div>
  );
}

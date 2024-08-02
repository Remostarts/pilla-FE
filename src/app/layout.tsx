/* eslint-disable camelcase */
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import '../styles/globals.css';

import Providers from '@/context/Providers';
import { TChildrenProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  // title: 'Pilla', -> version 1
  title: {
    template: 'Pilla - %s',
    default: 'Pilla',
  },
  description:
    'Pilla offers a comprehensive suite of financial solutions designed for the real estate industry. Our platform addresses key challenges such as financing, investment safety, and payment optimization, providing innovative tools for savings, investments, rent finance, and construction finance.',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({ children }: TChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.variable} ${spaceGrotesk.variable} `}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}

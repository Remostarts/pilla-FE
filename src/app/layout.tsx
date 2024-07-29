/* eslint-disable camelcase */
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

import '../styles/theme.css';
import './globals.css';

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
  title: 'pro-cleaner',
  description:
    'A community-driven platform for cleaning services. Find the best cleaning services in your area.',
  icons: {
    icon: './favicon.ico',
  },
};
//
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
// Path: src/pages/_app.tsx

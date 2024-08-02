'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { Toaster } from '@/components/ui/toaster';
import { store } from '@/redux/store';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <NextThemesProvider
          attribute="class"
          forcedTheme="light"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </NextThemesProvider>
      </Provider>
    </div>
  );
};

export default Providers;

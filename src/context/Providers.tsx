'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';

import { Toaster } from '@/components/ui/toaster';
import { store } from '@/redux/store';

const Providers = ({ children }: { children: ReactNode }) => {
  const methods = useForm();

  return (
    <div>
      <Provider store={store}>
        <FormProvider {...methods}>
          <NextThemesProvider
            attribute="class"
            forcedTheme="light"
            defaultTheme="light"
            disableTransitionOnChange
          >
            {children}

            <Toaster />
          </NextThemesProvider>
        </FormProvider>
      </Provider>
    </div>
  );
};

export default Providers;

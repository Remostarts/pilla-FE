import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OtpContextType {
  otp: string;
  setOtp: (otp: string) => void;
  email: string;
  setEmail: (email: string) => void;
  resetOtp: () => void;
}

const OtpContext = createContext<OtpContextType | undefined>(undefined);

interface OtpProviderProps {
  children: ReactNode;
}

export const OtpProvider: React.FC<OtpProviderProps> = ({ children }) => {
  const [otp, setOtp] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const resetOtp = () => {
    setOtp('');
  };

  const value = {
    otp,
    setOtp,
    resetOtp,
    email,
    setEmail,
  };

  return <OtpContext.Provider value={value}>{children}</OtpContext.Provider>;
};

export const useOtp = (): OtpContextType => {
  const context = useContext(OtpContext);
  if (context === undefined) {
    throw new Error('useOtp must be used within an OtpProvider');
  }
  return context;
};

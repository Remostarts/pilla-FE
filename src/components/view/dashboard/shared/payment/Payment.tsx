'use client';

import React, { createContext, useState, useContext, ReactNode, KeyboardEvent } from 'react';
import Image from 'next/image';

import { Heading } from '../Heading';

import { ReButton } from '@/components/re-ui/ReButton';
import { MethodProps, PaymentContextType, PaymentProps } from '@/types/payment.type';

// Context
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Main Payment Component
function Payment({ children, hasAgreement = false }: PaymentProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [agreementChecked, setAgreementChecked] = useState<boolean>(!hasAgreement);

  return (
    <PaymentContext.Provider
      value={{
        selectedMethod,
        setSelectedMethod,
        agreementChecked,
        setAgreementChecked,
        hasAgreement,
      }}
    >
      <div className="p-4">{children}</div>
    </PaymentContext.Provider>
  );
}

// Payment Heading Component
function PaymentHeading({ heading, size }: { heading: string; size: '2xl' | 'lg' }) {
  return <Heading heading={heading} size={size} />;
}

// Payment Body Component
function Body({ items }: { items: { label: string; value: string; isBold?: boolean }[] }) {
  return (
    <div className="mt-12 space-y-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-b border-gray-200 pb-4"
        >
          <span className="text-gray-600">{item.label}</span>
          <span className={`font-spaceGrotesk ${item.isBold ? 'font-bold' : ''}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// Payment Method Component
function Method({ name, value, icon, details, onChangeClick }: MethodProps) {
  const { selectedMethod, setSelectedMethod } = usePayment();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelectedMethod(value);
    }
  };

  return (
    <div
      role="radio"
      aria-checked={selectedMethod === value}
      tabIndex={0}
      className={`flex items-center justify-between rounded-lg border p-4 ${
        selectedMethod === value ? 'border-primary-500' : 'border-gray-200'
      } mb-3 w-full cursor-pointer`}
      onClick={() => setSelectedMethod(value)}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center">
        <Image src={icon} alt={name} width={24} height={24} className="mr-3" />
        <div>
          <div className="font-medium">{name}</div>
          {details && (
            <div className="flex items-center text-sm text-gray-500">
              {details}
              {onChangeClick && (
                <button
                  className="ml-2 text-primary-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    onChangeClick();
                  }}
                >
                  Change
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={`size-6 rounded-full border-2 ${
          selectedMethod === value ? 'border-primary-500 bg-primary-500' : 'border-gray-300'
        } flex items-center justify-center`}
      >
        {selectedMethod === value && <div className="size-3 rounded-full bg-white"></div>}
      </div>
    </div>
  );
}

// Payment Agreement Component
function Agreement({ children }: { children: ReactNode }) {
  const { agreementChecked, setAgreementChecked, hasAgreement } = usePayment();

  if (!hasAgreement) return null;

  return (
    <div className="payment-agreement mt-8">
      <input
        type="checkbox"
        id="agreement"
        checked={agreementChecked}
        onChange={(e) => setAgreementChecked(e.target.checked)}
      />
      <label htmlFor="agreement" className="ml-2">
        {children}
      </label>
    </div>
  );
}

// Payment Button Component
function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  const { selectedMethod, agreementChecked, hasAgreement } = usePayment();
  const isDisabled = !selectedMethod || (hasAgreement && !agreementChecked);

  return (
    <div className="mt-12">
      <ReButton size="lg" onClick={onClick} disabled={isDisabled}>
        {children}
      </ReButton>
    </div>
  );
}

// Custom Hook to use context
function usePayment() {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a Payment component');
  }
  return context;
}

// Assigning sub-components
Payment.Heading = PaymentHeading;
Payment.Body = Body;
Payment.Method = Method;
Payment.Agreement = Agreement;
Payment.Button = Button;

export { Payment, usePayment };

'use client';

import React, { createContext, useState, useContext, ReactNode, KeyboardEvent } from 'react';
import Image from 'next/image';

import { Heading } from '../Heading';

import { ReButton } from '@/components/re-ui/ReButton';
import { MethodProps, SummaryContextType, SummaryProps } from '@/types/summary.type';

// Context
const SummaryContext = createContext<SummaryContextType | undefined>(undefined);

// Main Summary Component
function Summary({ children, hasAgreement = false, className }: SummaryProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [agreementChecked, setAgreementChecked] = useState<boolean>(!hasAgreement);

  return (
    <SummaryContext.Provider
      value={{
        selectedMethod,
        setSelectedMethod,
        agreementChecked,
        setAgreementChecked,
        hasAgreement,
      }}
    >
      <div className={className}>{children}</div>
    </SummaryContext.Provider>
  );
}

// Summary Heading Component
function SummaryHeading({ heading, size }: { heading: string; size: '2xl' | 'lg' }) {
  return <Heading heading={heading} size={size} />;
}

// Summary Body Component
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

// Summary Method Component
function Method({ name, value, icon, details, onChangeClick }: MethodProps) {
  const { selectedMethod, setSelectedMethod } = useSummary();

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
                  className="ml-2 font-inter font-semibold text-primary-600"
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

// Summary Agreement Component
function Agreement({ children }: { children: ReactNode }) {
  const { agreementChecked, setAgreementChecked, hasAgreement } = useSummary();

  if (!hasAgreement) return null;

  return (
    <div className="summary-agreement mt-8">
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

// Summary Button Component
function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  const { selectedMethod, agreementChecked, hasAgreement } = useSummary();
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
function useSummary() {
  const context = useContext(SummaryContext);
  if (context === undefined) {
    throw new Error('useSummary must be used within a Summary component');
  }
  return context;
}

// Assigning sub-components
Summary.Heading = SummaryHeading;
Summary.Body = Body;
Summary.Method = Method;
Summary.Agreement = Agreement;
Summary.Button = Button;

export { Summary, useSummary };

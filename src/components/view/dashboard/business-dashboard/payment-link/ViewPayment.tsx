import React from 'react';

import { Heading } from '../../shared/Heading';
import { useSidebar } from '../../shared/SideBar';

import { Button } from '@/components/ui/button';
import { Payment } from '@/types/SharedPaymentLinkTypes';
import { EDIT_PAYMENT_LINK_WINDOW, VIEW_PAYMENT_LINK_WINDOW } from '@/constants/paymentLinkData';

interface ViewPaymentModalProps {
  payment: Payment | null;
  onDelete: (id: string) => void;
}

interface PaymentDetailField {
  label: string;
  key: keyof Payment;
  format?: (value: any) => string;
}

const paymentFields: PaymentDetailField[] = [
  { label: 'Payment Link', key: 'link' },
  { label: 'Status', key: 'status' },
  { label: 'Customer Name', key: 'customer' },
  { label: 'Payment Description', key: 'description' },
  { label: 'Amount', key: 'amount', format: (value) => `₦ ${value.toLocaleString()}.00` },
  { label: 'Contact Email', key: 'email' },
  { label: 'Contact Phone', key: 'phone' },
];

export default function ViewPayment({ payment, onDelete }: ViewPaymentModalProps) {
  const { open, close } = useSidebar();

  if (!payment) {
    return <div>No payment selected</div>;
  }

  const handleDelete = () => {
    onDelete(payment.id);
    close(VIEW_PAYMENT_LINK_WINDOW);
  };

  const handleEdit = () => {
    open(EDIT_PAYMENT_LINK_WINDOW);
  };

  return (
    <div className="w-full p-6">
      <div className="mb-6">
        <Heading heading="Payment Details" className="text-2xl font-bold" />
      </div>
      <div className="space-y-4">
        {paymentFields.map((field) => (
          <div key={field.key} className="flex items-center justify-between">
            <label className="block text-sm font-medium text-[#666666]">{field.label}</label>
            <p className="mt-1">
              {field.format ? field.format(payment[field.key]) : payment[field.key] || 'None'}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2">
        <Button className="w-full bg-black text-white" onClick={handleEdit}>
          Edit Payment
        </Button>
        <Button onClick={handleDelete} variant="outline" className="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
}

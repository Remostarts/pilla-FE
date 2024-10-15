'use client';

import React, { useEffect, useState } from 'react';

import { Heading } from '../../shared/Heading';
import { useSidebar } from '../../shared/SideBar';

import { Payment } from '@/types/SharedPaymentLinkTypes';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ReButton } from '@/components/re-ui/ReButton';
import { EDIT_PAYMENT_LINK_WINDOW, VIEW_PAYMENT_LINK_WINDOW } from '@/constants/paymentLinkData';

const emptyPayment: Payment = {
  id: '',
  customer: '',
  link: '',
  amount: 0,
  status: 'Unpaid',
  email: '',
  phone: '',
  description: '',
};

interface EditPaymentModalProps {
  payment: Payment | null;
  onSave: (updatedPayment: Payment) => void;
}

export default function EditPaymentLink({ payment, onSave }: EditPaymentModalProps) {
  const [editedPayment, setEditedPayment] = useState<Payment>(emptyPayment);

  const { close } = useSidebar();

  // loading the existing payment details if available
  useEffect(() => {
    if (payment) {
      setEditedPayment(payment);
    }
  }, [payment]);

  // function to handle the input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedPayment((prev) => ({ ...prev, [name]: value }));
  };

  // function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedPayment);
    close(EDIT_PAYMENT_LINK_WINDOW);
    close(VIEW_PAYMENT_LINK_WINDOW);
  };

  // checking if payment is present or not
  if (!payment) {
    return <div>No payment selected for editing</div>;
  }

  return (
    <div>
      <div className="w-full p-6">
        <div className="mb-4 flex items-center justify-between">
          <Heading heading="Edit Payment Details" className="text-xl font-bold" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700">Customer Name</Label>
            <Input
              type="text"
              name="customer"
              value={editedPayment.customer}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              required
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700">Payment Description</Label>
            <textarea
              name="description"
              value={editedPayment.description || ''}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div>
            <div>
              <Label className="block text-sm font-medium text-gray-700">Amount</Label>
              <Input
                type="number"
                name="amount"
                value={editedPayment.amount / 100}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const amountInCents = Math.round(parseFloat(inputValue) * 100);
                  setEditedPayment((prev) => ({ ...prev, amount: amountInCents }));
                }}
                step="0.01"
                min="0"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
                required
              />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700">Contact Email</Label>
            <Input
              type="email"
              name="email"
              value={editedPayment.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              required
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700">Contact Phone</Label>
            <Input
              type="tel"
              name="phone"
              value={editedPayment.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
              required
            />
          </div>
          <ReButton type="submit" className="w-full  text-white">
            Save
          </ReButton>
        </form>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';

import { Heading } from '../../shared/Heading';
import { useSidebar } from '../../shared/SideBar';
import SubHeading from '../../shared/SubHeading';

import { Textarea } from '@/components/ui/textarea';
import { ReButton } from '@/components/re-ui/ReButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NewPayment } from '@/types/SharedPaymentLinkTypes';
import {
  ADD_NEW_PAYMENT_LINK_WINDOW,
  PAYMENT_LINK_CREATED_SUCCESS,
} from '@/constants/paymentLinkData';

interface NewPaymentLinkProps {
  onSubmit: (newPayment: NewPayment) => void;
}

export default function NewPaymentLink({ onSubmit }: NewPaymentLinkProps) {
  const [newPayment, setNewPayment] = useState<NewPayment>({
    customerName: '',
    description: '',
    amount: '',
    email: '',
    phone: '',
  });

  const { open, close } = useSidebar();

  // function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newPayment);
    open(PAYMENT_LINK_CREATED_SUCCESS);
    close(ADD_NEW_PAYMENT_LINK_WINDOW);
  };

  return (
    <div>
      <div className="w-full  p-6">
        <div className="mb-6">
          <Heading heading="Payment Details" className="text-2xl font-bold" />
          <SubHeading subHeading="Tell us about this payment link you're creating" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label>Customer Name</Label>
            <Input
              name="customerName"
              value={newPayment.customerName}
              onChange={(e) => setNewPayment({ ...newPayment, customerName: e.target.value })}
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <Textarea
              placeholder="Add description (optional)"
              value={newPayment.description}
              onChange={(e) => setNewPayment({ ...newPayment, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <Label>Amount</Label>
            <Input
              type="number"
              name="amount"
              placeholder="0.00"
              value={newPayment.amount}
              onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <Label>Customer Contact</Label>
            <Input
              type="email"
              name="customerContact"
              placeholder="email address"
              value={newPayment.email}
              onChange={(e) => setNewPayment({ ...newPayment, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <Input
              type="tel"
              name="telephone"
              placeholder="+234"
              value={newPayment.phone}
              onChange={(e) => setNewPayment({ ...newPayment, phone: e.target.value })}
            />
          </div>
          <ReButton type="submit" className="w-full text-lg font-medium text-white">
            Create Link
          </ReButton>
        </form>
      </div>
    </div>
  );
}

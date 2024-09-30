'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { Form } from '@/components/ui/form';
import {
  newPaymentLinkSchema,
  TNewPaymentLink,
} from '@/lib/validations/business/newPaymentLink.validation';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReTextarea } from '@/components/re-ui/ReTextarea';

interface NewPaymentLinkProps {
  onSubmit: (newPayment: NewPayment) => void;
}

const defaultValues = {
  customerName: '',
  description: '',
  amount: '',
  email: '',
  phone: '',
};

export default function NewPaymentLink({ onSubmit }: NewPaymentLinkProps) {
  const [newPayment, setNewPayment] = useState<NewPayment>({
    customerName: '',
    description: '',
    amount: '',
    email: '',
    phone: '',
  });

  const { open, close } = useSidebar();

  const form = useForm<TNewPaymentLink>({
    resolver: zodResolver(newPaymentLinkSchema),
    mode: 'onChange',
    defaultValues,
  });

  const { handleSubmit } = form;

  // function to handle form submission
  const submitHandler = (data: TNewPaymentLink) => {
    console.log('Form Data:', data);
    onSubmit(newPayment);
    open(PAYMENT_LINK_CREATED_SUCCESS);
    close(ADD_NEW_PAYMENT_LINK_WINDOW);
  };

  return (
    <Form {...form}>
      <div className="w-full  p-6">
        <div className="mb-6">
          <Heading heading="Payment Details" className="text-2xl font-bold" />
          <SubHeading subHeading="Tell us about this payment link you're creating" />
        </div>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="mb-4">
            {/* <Label>Customer Name</Label>
            <Input
              name="customerName"
              value={newPayment.customerName}
              onChange={(e) => setNewPayment({ ...newPayment, customerName: e.target.value })}
              placeholder="Enter full name"
            /> */}

            <ReInput name="customerName" label="Customer Name" placeholder="Enter full name" />
          </div>
          <div className="mb-4">
            {/* <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Add description (optional)"
              value={newPayment.description}
              onChange={(e) => setNewPayment({ ...newPayment, description: e.target.value })}
            /> */}

            <ReTextarea
              name="description"
              label="Description"
              placeholder="Add description (optional)"
            />
          </div>
          <div className="mb-4">
            {/* <Label>Amount</Label>
            <Input
              type="number"
              name="amount"
              placeholder="0.00"
              value={newPayment.amount}
              onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
            /> */}

            <ReInput name="amount" label="Amount" placeholder="0.00" type="number" />
          </div>
          <div className="mb-4">
            {/* <Label>Customer Contact</Label>
            <Input
              type="email"
              name="email"
              placeholder="email address"
              value={newPayment.email}
              onChange={(e) => setNewPayment({ ...newPayment, email: e.target.value })}
            /> */}

            <ReInput
              name="email"
              label="Customer Contact"
              placeholder="email address"
              type="email"
            />
          </div>
          <div className="mb-4">
            {/* <Input
              type="tel"
              name="phone"
              placeholder="+234"
              value={newPayment.phone}
              onChange={(e) => setNewPayment({ ...newPayment, phone: e.target.value })}
            /> */}

            <ReInput name="phone" label="Customer Contact" placeholder="+234" type="tel" />
          </div>
          <ReButton type="submit" className="w-full text-lg font-medium text-white">
            Create Link
          </ReButton>
        </form>
      </div>
    </Form>
  );
}

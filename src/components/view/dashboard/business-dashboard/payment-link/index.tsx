'use client';

import React, { useState } from 'react';

import ActionBtn from '../../shared/ActionBtn';
import DashboardCount from '../../shared/DashboardCount';
import { Heading } from '../../shared/Heading';
import { Sidebar } from '../../shared/SideBar';
import { SuccessMessage } from '../../shared/SuccessMessage';

import PaymentTable from './PaymentTable';
import NewPaymentLink from './NewPaymentLink';
import ViewPayment from './ViewPayment';
import EditPaymentLink from './EditPaymentLink';

import { Payment, NewPayment } from '@/types/SharedPaymentLinkTypes';
import { ActionsBtnDataType } from '@/types/personalDashBHome.type';
import {
  ADD_NEW_PAYMENT_LINK_WINDOW,
  EDIT_PAYMENT_LINK_WINDOW,
  PAYMENT_LINK_CREATED_SUCCESS,
  VIEW_PAYMENT_LINK_WINDOW,
} from '@/constants/paymentLinkData';

const actionsData: ActionsBtnDataType[] = [
  {
    id: 1,
    actionName: 'New payment link',
    window: 'add-new-payment-link',
    actionImg: '/assets/personal-dashboard/home/add-money-icon.svg',
  },
];

const PaymentDashboard = () => {
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [payments, setPayments] = useState<Payment[]>([
    {
      id: '7635371922',
      customer: 'Marcus Stanton',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Unpaid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
    {
      id: '7635371923',
      customer: 'Jahir sheikh',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Paid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
    {
      id: '7635371924',
      customer: 'Marcus Stanton',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Paid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
    {
      id: '7635371925',
      customer: 'Marcus Stanton',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Unpaid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
    {
      id: '7635371926',
      customer: 'Marcus Stanton',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Paid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
    {
      id: '7635371927',
      customer: 'Marcus Stanton',
      link: 'https://pilla.io/pay/test/davetonis',
      amount: 5500000,
      status: 'Unpaid',
      email: 'marcus@example.com',
      phone: '1234567890',
    },
  ]);

  // function to add new payment link
  const handleNewPayment = (newPayment: NewPayment) => {
    const payment: Payment = {
      id: Math.random().toString(36).substring(2, 9),
      customer: newPayment.customerName,
      link: `https://pilla.io/pay/test/${newPayment.customerName.toLowerCase().replace(' ', '')}`,
      amount: parseFloat(newPayment.amount) * 100,
      status: 'Unpaid',
      description: newPayment.description,
      email: newPayment.email,
      phone: newPayment.phone,
    };
    setPayments((prevPayments) => [payment, ...prevPayments]);
  };

  // function to handle the edit payment
  const handleSaveEdit = (updatedPayment: Payment) => {
    setPayments(payments.map((p) => (p.id === updatedPayment.id ? updatedPayment : p)));
    setSelectedPayment(updatedPayment);
  };

  // function to handle the delete payment
  const handleDeletePayment = (id: string) => {
    setPayments((prevPayments) => prevPayments.filter((p) => p.id !== id));
  };

  // function to handle the edit payment link
  const handleEditClick = (payment: Payment) => {
    setSelectedPayment(payment);
  };

  return (
    <section>
      {/* card section */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-10">
        <DashboardCount
          className="bg-primary-500 text-white"
          countHead="Total Amount"
          countAmount="0.00"
          headFontWeight="font-light"
        />
        <DashboardCount
          className=" bg-white text-black"
          countHead="Total Payment"
          countAmount="0.00"
          headFontWeight="font-light"
        />
        <DashboardCount
          className="bg-white text-black"
          countHead="Paid Payment"
          countAmount="0.00"
          headFontWeight="font-light"
        />
        <DashboardCount
          className="bg-white text-black"
          countHead="Unpaid Payment"
          countAmount="0.00"
          headFontWeight="font-light"
        />
      </div>

      {/* Actions Section */}
      <div className="mt-16">
        <Heading heading="Actions" />

        <div className="mt-6 grid grid-cols-4 gap-6">
          {actionsData.map((data) => (
            <Sidebar.Open opens={data.window} key={data.id}>
              <ActionBtn actionName={data.actionName} actionImg={data.actionImg} />
            </Sidebar.Open>
          ))}
        </div>
      </div>

      {/* payment link table section */}
      <div className="mt-10">
        <PaymentTable
          payments={payments}
          setPayments={setPayments}
          setSelectedPayment={setSelectedPayment}
          onEditClick={handleEditClick}
        />
      </div>

      {/* // NewPaymentLink window */}
      <Sidebar.Window name={ADD_NEW_PAYMENT_LINK_WINDOW}>
        <NewPaymentLink onSubmit={handleNewPayment} />
      </Sidebar.Window>

      {/* // success message after creating a payment link */}
      <Sidebar.Window name={PAYMENT_LINK_CREATED_SUCCESS}>
        <SuccessMessage>
          <SuccessMessage.Title>Link Created</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>
              Customer will be notified via email & phone number provided.
            </SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.Button closes={PAYMENT_LINK_CREATED_SUCCESS}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>

      {/* // ViewPayment window */}
      <Sidebar.Window name={VIEW_PAYMENT_LINK_WINDOW}>
        <ViewPayment payment={selectedPayment} onDelete={handleDeletePayment} />
      </Sidebar.Window>

      {/* // EditPaymentLink window */}
      <Sidebar.Window name={EDIT_PAYMENT_LINK_WINDOW}>
        <EditPaymentLink payment={selectedPayment} onSave={handleSaveEdit} />
      </Sidebar.Window>
    </section>
  );
};

export default PaymentDashboard;

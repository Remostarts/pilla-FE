import React from 'react';
import { MoreHorizontal, Eye, Pencil, Trash2 } from 'lucide-react';

import { Sidebar } from '../../shared/SideBar';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Payment } from '@/types/SharedPaymentLinkTypes';
import {
  EDIT_PAYMENT_LINK_WINDOW,
  RECENT_TRANSACTIONS_WINDOW,
  VIEW_PAYMENT_LINK_WINDOW,
} from '@/constants/paymentLinkData';

interface ActionDropdownProps {
  payment: Payment;
  onDelete: (id: string) => void;
  setSelectedPayment: React.Dispatch<React.SetStateAction<Payment | null>>;
  onEditClick: (payment: Payment) => void;
}

interface PaymentTableProps {
  payments: Payment[];
  setPayments: React.Dispatch<React.SetStateAction<Payment[]>>;
  setSelectedPayment: React.Dispatch<React.SetStateAction<Payment | null>>;
  onEditClick: (payment: Payment) => void;
}

// Action Dropdown component
const ActionDropdown: React.FC<ActionDropdownProps> = ({
  payment,
  onDelete,
  setSelectedPayment,
  onEditClick,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-hidden">
        <Button variant="ghost" className="size-8 p-0">
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <Sidebar.Open opens={VIEW_PAYMENT_LINK_WINDOW}>
          <DropdownMenuItem onClick={() => setSelectedPayment(payment)}>
            <Eye className="mr-2 size-4" />
            <span>View</span>
          </DropdownMenuItem>
        </Sidebar.Open>
        {payment.status === 'Unpaid' && (
          <Sidebar.Open opens={EDIT_PAYMENT_LINK_WINDOW}>
            <DropdownMenuItem onClick={() => onEditClick(payment)}>
              <Pencil className="mr-2 size-4" />
              <span>Edit</span>
            </DropdownMenuItem>
          </Sidebar.Open>
        )}
        <DropdownMenuItem onClick={() => onDelete(payment.id)}>
          <Trash2 className="mr-2 size-4 text-red-500" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Payment Table component
const PaymentTable = ({
  payments,
  setPayments,
  setSelectedPayment,
  onEditClick,
}: PaymentTableProps) => {
  // function to handle the delete of a single payment
  const handleDelete = (id: string) => {
    setPayments((prevPayments) => prevPayments.filter((p) => p.id !== id));
  };

  return (
    <div>
      <Card className=" bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-md font-medium">Recent Transactions</CardTitle>
          <Sidebar.Open opens={RECENT_TRANSACTIONS_WINDOW}>
            <Button variant="link" size="sm">
              See all
            </Button>
          </Sidebar.Open>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto rounded-lg  ">
            <table className="w-full">
              {/* table header */}
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Payment ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Payment Link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* table content */}
              <tbody className="divide-y divide-gray-200 bg-white">
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td className="whitespace-nowrap px-6 py-4">{payment.id}</td>
                    <td className="whitespace-nowrap px-6 py-4">{payment.customer}</td>
                    <td className="whitespace-nowrap px-6 py-4">{payment.link}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      ₦ {(payment.amount / 100).toLocaleString()}.00
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          payment.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                      <ActionDropdown
                        payment={payment}
                        onDelete={handleDelete}
                        setSelectedPayment={setSelectedPayment}
                        onEditClick={onEditClick}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentTable;

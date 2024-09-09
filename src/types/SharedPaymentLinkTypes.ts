export interface Payment {
  id: string;
  customer: string;
  link: string;
  amount: number;
  status: 'Paid' | 'Unpaid';
  description?: string;
  email?: string;
  phone?: string;
}

export interface NewPayment {
  customerName: string;
  description?: string;
  amount: string;
  email?: string;
  phone?: string;
}

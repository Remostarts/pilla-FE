import { Heading } from '../../shared/Heading';

import { Separator } from '@/components/ui/separator';

export default function LoanHistoryDetails() {
  const loanDetails = {
    loanId: '17753641265',
    loanAmount: '₦ 230,000.00',
    activationDay: 'Aug 14 2022',
    monthlyPayment: '₦ 55,000.00',
    repayments: [
      { amount: '₦ 55,000.00', date: 'Nov 14 2022', status: 'Paid' },
      { amount: '₦ 55,000.00', date: 'Nov 14 2022', status: 'Unpaid' },
      { amount: '₦ 55,000.00', date: 'Nov 14 2022', status: 'Unpaid' },
      { amount: '₦ 55,000.00', date: 'Nov 14 2022', status: 'Unpaid' },
    ],
  };

  return (
    <div className=" w-full p-6 ">
      <Heading heading="Loan Details" className="mb-6 text-2xl font-semibold" />

      {/* loan details section */}
      <div className="mb-12 space-y-3 ">
        <div className="flex justify-between">
          <span className="text-md text-gray-500">Loan ID</span>
          <span className="text-lg">{loanDetails.loanId}</span>
        </div>
        <Separator className="bg-gray-200" />
        <div className="flex justify-between">
          <span className="text-md text-gray-500">Loan Amount</span>
          <span className="text-lg">{loanDetails.loanAmount}</span>
        </div>
        <Separator className="bg-gray-200" />

        <div className="flex justify-between">
          <span className="text-md text-gray-500">Activation Day</span>
          <span className="text-lg">{loanDetails.activationDay}</span>
        </div>
        <Separator className="bg-gray-200" />

        <div className="flex justify-between">
          <span className="text-md text-gray-500">Monthly Payment</span>
          <span className="text-lg">{loanDetails.monthlyPayment}</span>
        </div>
        <Separator className="bg-gray-200" />
      </div>

      {/* loan payment summary table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="grid grid-cols-3 gap-2 bg-gray-100 p-4 text-sm font-medium text-gray-500">
          <span>Amount</span>
          <span>Repayment date</span>
          <span>Status</span>
        </div>
        {loanDetails.repayments.map((repayment, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-2 p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <span className="text-base font-semibold">{repayment.amount}</span>
            <span className="self-center text-sm text-gray-500">{repayment.date}</span>
            <span className="self-center">
              <span
                className={`rounded-full px-3 py-1 text-sm ${
                  repayment.status === 'Paid'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {repayment.status}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

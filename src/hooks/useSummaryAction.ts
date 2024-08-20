import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { PAYMENT_SUMMARY_WINDOW } from '@/constants/homeData';
import { INVESTMENT_SUMMARY_WINDOW } from '@/constants/pillaInvestData';
import { useInvestmentSummary } from '@/context/InvestmentSummaryProvider';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';

// Handle Payment Summary Custom Hook
export const usePaymentSummaryAction = () => {
  const { close, open } = useSidebar();
  const { setPaymentSummaryData } = usePaymentSummary();

  const handlePaymentSummary = (amount: number, serviceCharge: number, closeName?: string) => {
    const paymentData = {
      amount,
      serviceCharge,
      finalAmount: amount + serviceCharge,
    };
    setPaymentSummaryData(paymentData);
    if (closeName) {
      close(closeName);
    }
    open(PAYMENT_SUMMARY_WINDOW);
  };

  return { handlePaymentSummary };
};

// Handle Investment Summary Custom Hook
export const useInvestmentSummaryAction = () => {
  const { close, open } = useSidebar();
  const { setInvestmentSummaryData } = useInvestmentSummary();

  const handleInvestmentSummary = (
    investmentType: string,
    plan: string,
    amount: number,
    period: string,
    interestRate: string,
    closeName?: string
  ) => {
    const investmentData = {
      investmentType,
      plan,
      amount,
      period,
      interestRate,
    };
    setInvestmentSummaryData(investmentData);
    if (closeName) {
      close(closeName);
    }
    open(INVESTMENT_SUMMARY_WINDOW);
  };

  return { handleInvestmentSummary };
};

// More Hooks will be introduced below related to summary

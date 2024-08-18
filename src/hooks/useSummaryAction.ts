import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { PAYMENT_SUMMARY_WINDOW } from '@/constants/homeData';
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

// More Hooks will be introduced below related to summary

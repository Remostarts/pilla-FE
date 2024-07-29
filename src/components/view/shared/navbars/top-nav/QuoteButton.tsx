'use client';
import { Button } from '@/components/ui/button';

const QuoteButton = () => {
  const handleGetQuote = () => {
    console.log('Get a quote');
  };

  return (
    <Button
      type="button"
      onClick={handleGetQuote}
      className="rounded-full bg-primary-400 font-semibold capitalize text-light-100  "
    >
      Get a quote
    </Button>
  );
};

export default QuoteButton;

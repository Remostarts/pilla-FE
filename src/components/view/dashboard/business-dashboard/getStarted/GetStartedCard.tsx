import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return <div className={`rounded-lg bg-white p-6  ${className}`}>{children}</div>;
}

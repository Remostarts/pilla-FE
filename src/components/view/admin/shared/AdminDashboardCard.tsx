import { ReactNode } from 'react';

import { Card as UICard, CardContent } from '@/components/ui/card';

interface CardProps {
  title: string;
  icon?: ReactNode;
  content: string | ReactNode;
  className?: string;
}

export default function AdminDashboardCard({ title, icon, content, className = '' }: CardProps) {
  return (
    <UICard className={`${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          {icon && icon}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        {typeof content === 'string' ? (
          <p className="mt-2 text-2xl font-bold">{content}</p>
        ) : (
          <div className="mt-2">{content}</div>
        )}
      </CardContent>
    </UICard>
  );
}

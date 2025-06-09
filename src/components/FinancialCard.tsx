import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
interface FinancialCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  style?: React.CSSProperties;
}
const FinancialCard = ({
  title,
  value,
  icon: Icon,
  trend,
  className = "",
  style
}: FinancialCardProps) => {
  return <Card className={`card-hover ${className}`} style={style}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-slate-50">
        <CardTitle className="text-sm font-medium text-inherit">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-finyou-teal" />
      </CardHeader>
      <CardContent className="bg-slate-50">
        <div className="text-2xl font-bold font-sora text-foreground">{value}</div>
        {trend && <p className={`text-xs ${trend.isPositive ? 'text-finyou-neon' : 'text-red-500'} mt-1`}>
            {trend.isPositive ? '+' : ''}{trend.value} em relação ao mês anterior
          </p>}
      </CardContent>
    </Card>;
};
export default FinancialCard;
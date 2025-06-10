
import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import FinancialCard from '../FinancialCard';

const FinancialOverview = () => {
  const financialData = [
    {
      title: "Saldo Atual",
      value: "R$ 2.847,90",
      icon: Wallet,
      trend: {
        value: "12,5%",
        isPositive: true
      }
    },
    {
      title: "Receitas do Mês",
      value: "R$ 4.520,00",
      icon: TrendingUp,
      trend: {
        value: "8,2%",
        isPositive: true
      }
    },
    {
      title: "Despesas do Mês",
      value: "R$ 1.672,10",
      icon: TrendingDown,
      trend: {
        value: "3,1%",
        isPositive: false
      }
    },
    {
      title: "Economia",
      value: "R$ 2.847,90",
      icon: DollarSign,
      trend: {
        value: "15,7%",
        isPositive: true
      }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {financialData.map((item, index) => (
        <FinancialCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          trend={item.trend}
          className="animate-fade-in"
        />
      ))}
    </div>
  );
};

export default FinancialOverview;

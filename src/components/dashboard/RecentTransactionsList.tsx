
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RecentTransactionsList = () => {
  const recentTransactions = [
    {
      id: 1,
      description: "Supermercado Extra",
      value: -89.50,
      category: "Alimentação",
      date: "Hoje",
      icon: ArrowDownRight
    },
    {
      id: 2,
      description: "Freelance - Design",
      value: 850.00,
      category: "Trabalho",
      date: "Ontem",
      icon: ArrowUpRight
    },
    {
      id: 3,
      description: "Uber",
      value: -22.40,
      category: "Transporte",
      date: "2 dias",
      icon: ArrowDownRight
    },
    {
      id: 4,
      description: "Netflix",
      value: -32.90,
      category: "Entretenimento",
      date: "3 dias",
      icon: ArrowDownRight
    },
    {
      id: 5,
      description: "Venda Produto",
      value: 120.00,
      category: "Vendas",
      date: "4 dias",
      icon: ArrowUpRight
    }
  ];

  return (
    <Card className="card-hover">
      <CardHeader className="bg-slate-50">
        <CardTitle className="font-sora">Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent className="bg-zinc-50">
        <div className="space-y-3">
          {recentTransactions.map(transaction => {
            const Icon = transaction.icon;
            const isPositive = transaction.value > 0;
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg transition-colors bg-zinc-50"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isPositive ? 'bg-finyou-neon/10' : 'bg-red-50'}`}>
                    <Icon className={`h-4 w-4 ${isPositive ? 'text-finyou-neon' : 'text-red-500'}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <p className="text-xs text-gray-950">{transaction.category} • {transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${isPositive ? 'text-finyou-neon' : 'text-red-500'}`}>
                    {isPositive ? '+' : ''}R$ {Math.abs(transaction.value).toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTransactionsList;


import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Wallet,
  ArrowUpRight,
  ArrowDownRight 
} from 'lucide-react';
import FinancialCard from './FinancialCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const financialData = [
    {
      title: "Saldo Atual",
      value: "R$ 2.847,90",
      icon: Wallet,
      trend: { value: "12,5%", isPositive: true }
    },
    {
      title: "Receitas do Mês",
      value: "R$ 4.520,00",
      icon: TrendingUp,
      trend: { value: "8,2%", isPositive: true }
    },
    {
      title: "Despesas do Mês",
      value: "R$ 1.672,10",
      icon: TrendingDown,
      trend: { value: "3,1%", isPositive: false }
    },
    {
      title: "Economia",
      value: "R$ 2.847,90",
      icon: DollarSign,
      trend: { value: "15,7%", isPositive: true }
    }
  ];

  const recentTransactions = [
    { id: 1, description: "Supermercado Extra", value: -89.50, category: "Alimentação", date: "Hoje", icon: ArrowDownRight },
    { id: 2, description: "Freelance - Design", value: 850.00, category: "Trabalho", date: "Ontem", icon: ArrowUpRight },
    { id: 3, description: "Uber", value: -22.40, category: "Transporte", date: "2 dias", icon: ArrowDownRight },
    { id: 4, description: "Netflix", value: -32.90, category: "Entretenimento", date: "3 dias", icon: ArrowDownRight },
    { id: 5, description: "Venda Produto", value: 120.00, category: "Vendas", date: "4 dias", icon: ArrowUpRight },
  ];

  const topCategories = [
    { name: "Alimentação", value: 425.80, percentage: 34, color: "bg-finyou-neon" },
    { name: "Transporte", value: 287.50, percentage: 23, color: "bg-finyou-teal" },
    { name: "Moradia", value: 380.20, percentage: 31, color: "bg-blue-500" },
    { name: "Entretenimento", value: 148.60, percentage: 12, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sora gradient-text">
            Dashboard Financeiro
          </h1>
          <p className="text-muted-foreground mt-1">
            Visão geral das suas finanças em tempo real
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Última atualização</p>
            <p className="text-sm font-medium">Agora mesmo</p>
          </div>
          <div className="w-3 h-3 bg-finyou-neon rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Financial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialData.map((item, index) => (
          <FinancialCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            trend={item.trend}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Charts and Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="font-sora">Transações Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => {
                const Icon = transaction.icon;
                const isPositive = transaction.value > 0;
                
                return (
                  <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isPositive ? 'bg-finyou-neon/10' : 'bg-red-50'}`}>
                        <Icon className={`h-4 w-4 ${isPositive ? 'text-finyou-neon' : 'text-red-500'}`} />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.category} • {transaction.date}</p>
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

        {/* Top Categories */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="font-sora">Gastos por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">R$ {category.value.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.color} transition-all duration-500`}
                      style={{ 
                        width: `${category.percentage}%`,
                        animationDelay: `${index * 150}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="font-sora">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center rounded-lg border border-border hover:border-finyou-teal hover:bg-finyou-teal/5 transition-all duration-200 group">
              <DollarSign className="h-6 w-6 mx-auto mb-2 text-finyou-teal group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Nova Receita</p>
            </button>
            <button className="p-4 text-center rounded-lg border border-border hover:border-red-400 hover:bg-red-50 transition-all duration-200 group">
              <TrendingDown className="h-6 w-6 mx-auto mb-2 text-red-500 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Nova Despesa</p>
            </button>
            <button className="p-4 text-center rounded-lg border border-border hover:border-finyou-neon hover:bg-finyou-neon/5 transition-all duration-200 group">
              <FileText className="h-6 w-6 mx-auto mb-2 text-finyou-neon group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Relatório</p>
            </button>
            <button className="p-4 text-center rounded-lg border border-border hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group">
              <Wallet className="h-6 w-6 mx-auto mb-2 text-purple-500 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium">Meta de Economia</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;

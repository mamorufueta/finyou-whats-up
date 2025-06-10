
import React, { useState } from 'react';
import { Download, Share2, Calendar, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  const reportData = {
    month: {
      income: 4520.00,
      expenses: 1672.10,
      balance: 2847.90,
      categories: [
        { name: 'Alimentação', value: 425.80, percentage: 25.5 },
        { name: 'Transporte', value: 287.50, percentage: 17.2 },
        { name: 'Moradia', value: 380.20, percentage: 22.7 },
        { name: 'Entretenimento', value: 148.60, percentage: 8.9 }
      ]
    }
  };

  const monthlyComparison = [
    { month: 'Jan', income: 4200, expenses: 1800 },
    { month: 'Fev', income: 4100, expenses: 1650 },
    { month: 'Mar', income: 4300, expenses: 1700 },
    { month: 'Abr', income: 4400, expenses: 1550 },
    { month: 'Mai', income: 4350, expenses: 1620 },
    { month: 'Jun', income: 4520, expenses: 1672 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sora gradient-text">
            Relatórios
          </h1>
          <p className="mt-1 text-zinc-950">
            Análises detalhadas das suas finanças
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
              >
                <option value="week">Esta Semana</option>
                <option value="month">Este Mês</option>
                <option value="quarter">Este Trimestre</option>
                <option value="year">Este Ano</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
              >
                <option value="overview">Visão Geral</option>
                <option value="categories">Por Categoria</option>
                <option value="accounts">Por Conta</option>
                <option value="trends">Tendências</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resumo Financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-sora flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Receitas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {reportData.month.income.toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              +8.2% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-sora flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500 rotate-180" />
              Despesas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              R$ {reportData.month.expenses.toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              -3.1% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-sora flex items-center gap-2">
              <PieChart className="h-5 w-5 text-finyou-teal" />
              Saldo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-finyou-teal">
              R$ {reportData.month.balance.toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              +15.7% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de Comparação Mensal */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora">Comparação Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyComparison.map((data, index) => {
              const savings = data.income - data.expenses;
              const savingsPercentage = (savings / data.income) * 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{data.month}</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-600">R$ {data.income}</span>
                      <span className="text-red-500">R$ {data.expenses}</span>
                      <span className="text-finyou-teal font-medium">R$ {savings}</span>
                    </div>
                  </div>
                  <div className="relative h-6 bg-white rounded-lg overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full bg-green-600 opacity-30"
                      style={{ width: '100%' }}
                    />
                    <div 
                      className="absolute left-0 top-0 h-full bg-red-500"
                      style={{ width: `${(data.expenses / data.income) * 100}%` }}
                    />
                    <div 
                      className="absolute right-0 top-0 h-full bg-finyou-teal"
                      style={{ width: `${savingsPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Relatório por Categoria */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora">Gastos por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportData.month.categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{category.name}</span>
                  <div className="flex gap-2 text-sm">
                    <span>R$ {category.value.toFixed(2)}</span>
                    <span className="text-muted-foreground">({category.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div 
                    className="h-2 bg-finyou-teal rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

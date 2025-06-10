
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, DollarSign, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Category {
  id: number;
  name: string;
  color: string;
  icon: string;
  spent: number;
  limit: number;
  type: 'income' | 'expense';
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "Alimentação",
      color: "bg-green-600",
      icon: "🍽️",
      spent: 425.80,
      limit: 500.00,
      type: "expense"
    },
    {
      id: 2,
      name: "Transporte",
      color: "bg-finyou-teal",
      icon: "🚗",
      spent: 287.50,
      limit: 300.00,
      type: "expense"
    },
    {
      id: 3,
      name: "Moradia",
      color: "bg-blue-500",
      icon: "🏠",
      spent: 380.20,
      limit: 600.00,
      type: "expense"
    },
    {
      id: 4,
      name: "Entretenimento",
      color: "bg-purple-500",
      icon: "🎮",
      spent: 148.60,
      limit: 200.00,
      type: "expense"
    },
    {
      id: 5,
      name: "Trabalho",
      color: "bg-green-600",
      icon: "💼",
      spent: 0,
      limit: 0,
      type: "income"
    }
  ]);

  const expenseCategories = categories.filter(cat => cat.type === 'expense');
  const incomeCategories = categories.filter(cat => cat.type === 'income');

  const getUsagePercentage = (spent: number, limit: number) => {
    if (limit === 0) return 0;
    return Math.min((spent / limit) * 100, 100);
  };

  const isOverLimit = (spent: number, limit: number) => {
    return spent > limit && limit > 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sora gradient-text">
            Categorias
          </h1>
          <p className="mt-1 text-zinc-950">
            Organize e personalize suas categorias financeiras
          </p>
        </div>
        <Button className="gap-2 bg-finyou-teal hover:bg-finyou-teal/90">
          <Plus className="h-4 w-4" />
          Nova Categoria
        </Button>
      </div>

      {/* Categorias de Despesas */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-red-500" />
            Categorias de Despesas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expenseCategories.map(category => {
              const percentage = getUsagePercentage(category.spent, category.limit);
              const overLimit = isOverLimit(category.spent, category.limit);
              
              return (
                <div key={category.id} className="p-4 border border-border rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          R$ {category.spent.toFixed(2)} de R$ {category.limit.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {overLimit && <AlertTriangle className="h-4 w-4 text-red-500" />}
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso</span>
                      <span className={overLimit ? 'text-red-500 font-medium' : ''}>
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          overLimit ? 'bg-red-500' : category.color
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Categorias de Receitas */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-green-600" />
            Categorias de Receitas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {incomeCategories.map(category => (
              <div key={category.id} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white text-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">Fonte de receita</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;

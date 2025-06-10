
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CategorySpending = () => {
  const topCategories = [
    {
      name: "Alimentação",
      value: 425.80,
      percentage: 34,
      color: "bg-finyou-neon"
    },
    {
      name: "Transporte",
      value: 287.50,
      percentage: 23,
      color: "bg-finyou-teal"
    },
    {
      name: "Moradia",
      value: 380.20,
      percentage: 31,
      color: "bg-blue-500"
    },
    {
      name: "Entretenimento",
      value: 148.60,
      percentage: 12,
      color: "bg-purple-500"
    }
  ];

  return (
    <Card className="card-hover bg-slate-50">
      <CardHeader className="bg-slate-50">
        <CardTitle className="font-sora">Gastos por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topCategories.map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between bg-slate-50">
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-sm text-slate-950">R$ {category.value.toFixed(2)}</span>
              </div>
              <div className="w-full rounded-full h-2 bg-white">
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
  );
};

export default CategorySpending;


import React from 'react';
import { DollarSign, TrendingDown, FileText, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuickActions = () => {
  return (
    <Card className="card-hover">
      <CardHeader className="bg-slate-50">
        <CardTitle className="font-sora">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 text-center rounded-lg border border-border hover:border-finyou-teal hover:bg-finyou-teal/5 transition-all duration-200 group">
            <DollarSign className="h-6 w-6 mx-auto mb-2 text-finyou-teal group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium">Nova Receita</p>
          </button>
          <button className="p-4 text-center rounded-lg border border-border hover:border-red-400 hover:bg-red-50 transition-all duration-200 group text-slate-950">
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
  );
};

export default QuickActions;

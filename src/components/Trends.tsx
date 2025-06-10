
import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Trends = () => {
  const trends = [
    {
      title: "Gastos com Alimentação",
      trend: "increasing",
      change: "+15%",
      description: "Seus gastos com alimentação aumentaram 15% este mês",
      prediction: "Se continuar assim, você gastará R$ 490 no próximo mês",
      suggestion: "Considere cozinhar mais em casa para economizar"
    },
    {
      title: "Receitas",
      trend: "stable",
      change: "+2%",
      description: "Suas receitas estão estáveis com leve crescimento",
      prediction: "Tendência de manter R$ 4.500/mês nos próximos meses",
      suggestion: "Ótimo momento para considerar investimentos"
    },
    {
      title: "Economia Mensal",
      trend: "increasing",
      change: "+28%",
      description: "Sua capacidade de poupança melhorou significativamente",
      prediction: "Com este ritmo, você economizará R$ 3.200 no próximo mês",
      suggestion: "Continue assim! Considere criar uma meta de investimento"
    }
  ];

  const predictions = [
    {
      title: "Saldo Final do Mês",
      current: 2847.90,
      predicted: 3200.00,
      confidence: 85
    },
    {
      title: "Total de Gastos",
      current: 1672.10,
      predicted: 1580.00,
      confidence: 78
    },
    {
      title: "Meta de Economia",
      current: 2847.90,
      predicted: 3000.00,
      confidence: 92
    }
  ];

  const insights = [
    {
      type: "warning",
      title: "Gasto Atípico Detectado",
      description: "Você gastou 40% mais com entretenimento na última semana",
      action: "Revisar gastos recentes"
    },
    {
      type: "success",
      title: "Meta Alcançada",
      description: "Parabéns! Você atingiu sua meta de economia mensal",
      action: "Definir nova meta"
    },
    {
      type: "tip",
      title: "Oportunidade de Economia",
      description: "Cancelando assinaturas não utilizadas, você pode economizar R$ 89/mês",
      action: "Ver detalhes"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora gradient-text">
          Tendências
        </h1>
        <p className="mt-1 text-zinc-950">
          Análise inteligente dos seus padrões financeiros
        </p>
      </div>

      {/* Tendências Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {trends.map((trend, index) => (
          <Card key={index} className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-sora flex items-center gap-2">
                {trend.trend === 'increasing' ? (
                  <TrendingUp className="h-5 w-5 text-green-600" />
                ) : trend.trend === 'decreasing' ? (
                  <TrendingDown className="h-5 w-5 text-red-500" />
                ) : (
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                )}
                {trend.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${
                  trend.trend === 'increasing' ? 'text-green-600' : 
                  trend.trend === 'decreasing' ? 'text-red-500' : 'text-blue-500'
                }`}>
                  {trend.change}
                </span>
                <span className="text-sm text-muted-foreground">vs mês anterior</span>
              </div>
              <p className="text-sm text-zinc-950">{trend.description}</p>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs font-medium text-muted-foreground mb-1">PREVISÃO</p>
                <p className="text-sm">{trend.prediction}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs font-medium text-blue-700 mb-1">SUGESTÃO</p>
                <p className="text-sm text-blue-800">{trend.suggestion}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Previsões */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora flex items-center gap-2">
            <Target className="h-5 w-5 text-finyou-teal" />
            Previsões para o Final do Mês
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{prediction.title}</h3>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                    {prediction.confidence}% confiança
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Atual:</span>
                    <span>R$ {prediction.current.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Previsto:</span>
                    <span className="text-finyou-teal">R$ {prediction.predicted.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div 
                      className="h-2 bg-finyou-teal rounded-full transition-all duration-500"
                      style={{ width: `${prediction.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Insights Inteligentes */}
      <Card>
        <CardHeader>
          <CardTitle className="font-sora flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            Insights Inteligentes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                insight.type === 'warning' ? 'bg-red-50 border-red-500' :
                insight.type === 'success' ? 'bg-green-50 border-green-500' :
                'bg-blue-50 border-blue-500'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {insight.type === 'warning' ? (
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    ) : insight.type === 'success' ? (
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5" />
                    )}
                    <div>
                      <h4 className={`font-medium ${
                        insight.type === 'warning' ? 'text-red-800' :
                        insight.type === 'success' ? 'text-green-800' :
                        'text-blue-800'
                      }`}>
                        {insight.title}
                      </h4>
                      <p className={`text-sm mt-1 ${
                        insight.type === 'warning' ? 'text-red-700' :
                        insight.type === 'success' ? 'text-green-700' :
                        'text-blue-700'
                      }`}>
                        {insight.description}
                      </p>
                    </div>
                  </div>
                  <button className={`text-xs px-3 py-1 rounded-md font-medium ${
                    insight.type === 'warning' ? 'bg-red-100 text-red-700 hover:bg-red-200' :
                    insight.type === 'success' ? 'bg-green-100 text-green-700 hover:bg-green-200' :
                    'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } transition-colors`}>
                    {insight.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trends;

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Transações</h1>
            <p className="text-muted-foreground">Gerencie todas as suas transações financeiras.</p>
          </div>;
      case 'categories':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Categorias</h1>
            <p className="text-muted-foreground">Organize suas despesas por categoria.</p>
          </div>;
      case 'reports':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Relatórios</h1>
            <p className="text-muted-foreground">Visualize relatórios detalhados das suas finanças.</p>
          </div>;
      case 'trends':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Tendências</h1>
            <p className="text-muted-foreground">Analise as tendências dos seus gastos.</p>
          </div>;
      case 'calendar':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Calendário</h1>
            <p className="text-muted-foreground">Visualize suas transações em calendário.</p>
          </div>;
      case 'whatsapp':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">WhatsApp</h1>
            <p className="text-muted-foreground">Configure a integração com o WhatsApp.</p>
          </div>;
      case 'settings':
        return <div className="p-8">
            <h1 className="text-3xl font-bold font-sora gradient-text mb-4">Configurações</h1>
            <p className="text-muted-foreground">Gerencie as configurações do seu perfil.</p>
          </div>;
      default:
        return <Dashboard />;
    }
  };
  return <div className="min-h-screen flex w-full bg-zinc-50">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 overflow-auto bg-slate-50">
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>;
};
export default Index;
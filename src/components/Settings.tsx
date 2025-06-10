
import React, { useState } from 'react';
import { User, CreditCard, Bell, Shield, Database, Palette, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const settingsTabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'accounts', label: 'Contas', icon: CreditCard },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'data', label: 'Dados', icon: Database },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'general', label: 'Geral', icon: Globe }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-finyou-teal rounded-full flex items-center justify-center text-white text-2xl font-bold">
                U
              </div>
              <div>
                <h3 className="text-lg font-semibold">Usuário</h3>
                <p className="text-muted-foreground">usuario@email.com</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Alterar Foto
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome Completo</label>
                <input 
                  type="text" 
                  defaultValue="Usuário Teste"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mail</label>
                <input 
                  type="email" 
                  defaultValue="usuario@email.com"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Telefone</label>
                <input 
                  type="tel" 
                  defaultValue="(11) 99999-9999"
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Data de Nascimento</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                />
              </div>
            </div>
          </div>
        );

      case 'accounts':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Contas Vinculadas</h3>
              <Button className="bg-finyou-teal hover:bg-finyou-teal/90">
                Adicionar Conta
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Banco do Brasil', type: 'Conta Corrente', status: 'Conectado' },
                { name: 'Nubank', type: 'Cartão de Crédito', status: 'Conectado' },
                { name: 'Caixa Econômica', type: 'Poupança', status: 'Desconectado' }
              ].map((account, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{account.name}</h4>
                    <p className="text-sm text-muted-foreground">{account.type}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      account.status === 'Conectado' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {account.status}
                    </span>
                    <Button variant="outline" size="sm">
                      Gerenciar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Preferências de Notificação</h3>
            <div className="space-y-4">
              {[
                { id: 'transactions', label: 'Novas transações', description: 'Receber notificação para cada nova transação' },
                { id: 'reminders', label: 'Lembretes de pagamento', description: 'Alertas para vencimentos próximos' },
                { id: 'goals', label: 'Metas financeiras', description: 'Atualizações sobre progresso das metas' },
                { id: 'reports', label: 'Relatórios mensais', description: 'Resumo mensal das finanças' }
              ].map((notification) => (
                <div key={notification.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium">{notification.label}</h4>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-finyou-teal/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-finyou-teal"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Configurações de Segurança</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Alterar Senha</h4>
                <div className="space-y-3">
                  <input 
                    type="password" 
                    placeholder="Senha atual"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                  />
                  <input 
                    type="password" 
                    placeholder="Nova senha"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                  />
                  <input 
                    type="password" 
                    placeholder="Confirmar nova senha"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal"
                  />
                  <Button className="bg-finyou-teal hover:bg-finyou-teal/90">
                    Alterar Senha
                  </Button>
                </div>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Autenticação de Dois Fatores</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Adicione uma camada extra de segurança à sua conta
                </p>
                <Button variant="outline">
                  Configurar 2FA
                </Button>
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Gerenciamento de Dados</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Backup dos Dados</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Faça backup de todas as suas informações financeiras
                </p>
                <Button className="bg-finyou-teal hover:bg-finyou-teal/90">
                  Fazer Backup
                </Button>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Exportar Dados</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Baixe seus dados em formato CSV ou PDF
                </p>
                <div className="flex gap-2">
                  <Button variant="outline">Exportar CSV</Button>
                  <Button variant="outline">Exportar PDF</Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Aparência</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Tema</h4>
                <div className="flex gap-3">
                  <button className="p-3 border-2 border-finyou-teal rounded-lg bg-white">
                    <div className="w-8 h-8 bg-white border rounded"></div>
                    <span className="text-xs mt-1 block">Claro</span>
                  </button>
                  <button className="p-3 border rounded-lg">
                    <div className="w-8 h-8 bg-gray-800 rounded"></div>
                    <span className="text-xs mt-1 block">Escuro</span>
                  </button>
                </div>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Moeda</h4>
                <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal">
                  <option>Real (R$)</option>
                  <option>Dólar (US$)</option>
                  <option>Euro (€)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 'general':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Configurações Gerais</h3>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Idioma</h4>
                <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal">
                  <option>Português (Brasil)</option>
                  <option>English (US)</option>
                  <option>Español</option>
                </select>
              </div>
              <div className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">Fuso Horário</h4>
                <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-finyou-teal">
                  <option>America/Sao_Paulo</option>
                  <option>America/New_York</option>
                  <option>Europe/London</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-sora gradient-text">
          Configurações
        </h1>
        <p className="mt-1 text-zinc-950">
          Personalize sua experiência no Finyou
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Menu de Configurações */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <nav className="space-y-1 p-4">
              {settingsTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-finyou-teal text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Conteúdo das Configurações */}
        <Card className="lg:col-span-3">
          <CardContent className="p-6">
            {renderTabContent()}
            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-border">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-finyou-teal hover:bg-finyou-teal/90">
                Salvar Alterações
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;

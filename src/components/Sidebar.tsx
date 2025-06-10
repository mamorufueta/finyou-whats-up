import React from 'react';
import { Home, CreditCard, PieChart, FileText, Settings, MessageCircle, TrendingUp, Calendar } from 'lucide-react';
import Logo from './Logo';
interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}
const menuItems = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: Home
}, {
  id: 'transactions',
  label: 'Transações',
  icon: CreditCard
}, {
  id: 'categories',
  label: 'Categorias',
  icon: PieChart
}, {
  id: 'reports',
  label: 'Relatórios',
  icon: FileText
}, {
  id: 'trends',
  label: 'Tendências',
  icon: TrendingUp
}, {
  id: 'calendar',
  label: 'Calendário',
  icon: Calendar
}, {
  id: 'whatsapp',
  label: 'WhatsApp',
  icon: MessageCircle
}, {
  id: 'settings',
  label: 'Configurações',
  icon: Settings
}];
const Sidebar = ({
  activeSection,
  onSectionChange
}: SidebarProps) => {
  return <div className="w-64 border-r border-border h-screen flex flex-col bg-zinc-50">
      <div className="p-6 border-b border-border bg-slate-50">
        <Logo />
        <p className="text-xs mt-2 font-inter text-zinc-950">
          Seu assistente financeiro inteligente
        </p>
      </div>
      
      <nav className="flex-1 p-4 bg-slate-50">
        <div className="space-y-1">
          {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return <button key={item.id} onClick={() => onSectionChange(item.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-finyou-teal text-white shadow-md' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}>
                <Icon className="h-4 w-4" />
                {item.label}
              </button>;
        })}
        </div>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="bg-gradient-to-r from-finyou-teal to-finyou-neon p-4 rounded-lg text-white text-center">
          <h4 className="font-sora font-semibold text-sm mb-1">
            Conecte ao WhatsApp
          </h4>
          <p className="text-xs opacity-90 mb-3">
            Lance suas despesas direto do celular
          </p>
          <button className="bg-white text-finyou-teal text-xs font-medium px-3 py-1.5 rounded-md hover:bg-opacity-90 transition-colors">
            Conectar Agora
          </button>
        </div>
      </div>
    </div>;
};
export default Sidebar;
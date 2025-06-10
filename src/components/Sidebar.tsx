
import React from 'react';
import { Home, CreditCard, PieChart, FileText, Settings, TrendingUp, Calendar } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home
  },
  {
    id: 'transactions',
    label: 'Transações',
    icon: CreditCard
  },
  {
    id: 'categories',
    label: 'Categorias',
    icon: PieChart
  },
  {
    id: 'reports',
    label: 'Relatórios',
    icon: FileText
  },
  {
    id: 'trends',
    label: 'Tendências',
    icon: TrendingUp
  },
  {
    id: 'calendar',
    label: 'Calendário',
    icon: Calendar
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings
  }
];

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  return (
    <div className="w-64 border-r border-border h-screen flex flex-col bg-white">
      <div className="p-6 border-b border-border bg-white">
        <Logo />
        <p className="text-xs mt-2 font-inter text-zinc-950">
          Seu assistente financeiro inteligente
        </p>
      </div>
      
      <nav className="flex-1 p-4 bg-white">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-finyou-teal text-white shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;

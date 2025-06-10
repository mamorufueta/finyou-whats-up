
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Transactions from '@/components/Transactions';
import Categories from '@/components/Categories';
import Reports from '@/components/Reports';
import Trends from '@/components/Trends';
import Calendar from '@/components/Calendar';
import Settings from '@/components/Settings';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <Transactions />;
      case 'categories':
        return <Categories />;
      case 'reports':
        return <Reports />;
      case 'trends':
        return <Trends />;
      case 'calendar':
        return <Calendar />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 overflow-auto bg-white">
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;

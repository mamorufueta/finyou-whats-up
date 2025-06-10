
import React from 'react';
import DashboardHeader from './dashboard/DashboardHeader';
import FinancialOverview from './dashboard/FinancialOverview';
import RecentTransactionsList from './dashboard/RecentTransactionsList';
import CategorySpending from './dashboard/CategorySpending';
import QuickActions from './dashboard/QuickActions';

const Dashboard = () => {
  return (
    <div className="space-y-6 rounded-none">
      <DashboardHeader />
      <FinancialOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTransactionsList />
        <CategorySpending />
      </div>

      <QuickActions />
    </div>
  );
};

export default Dashboard;

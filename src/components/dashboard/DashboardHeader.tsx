
import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold font-sora gradient-text">
          Dashboard Financeiro
        </h1>
        <p className="mt-1 text-zinc-950">
          Visão geral das suas finanças em tempo real
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm text-zinc-950">Última atualização</p>
          <p className="text-sm font-medium">Agora mesmo</p>
        </div>
        <div className="w-3 h-3 bg-finyou-neon rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;

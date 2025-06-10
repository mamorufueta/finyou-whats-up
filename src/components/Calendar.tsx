
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Bell, Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  type: 'income' | 'expense' | 'reminder';
  value?: number;
  category?: string;
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const events: CalendarEvent[] = [
    {
      id: 1,
      title: "Salário",
      date: "2024-06-01",
      type: "income",
      value: 3500,
      category: "Trabalho"
    },
    {
      id: 2,
      title: "Vencimento - Cartão de Crédito",
      date: "2024-06-15",
      type: "reminder"
    },
    {
      id: 3,
      title: "Conta de Luz",
      date: "2024-06-20",
      type: "expense",
      value: 89.50,
      category: "Moradia"
    },
    {
      id: 4,
      title: "Freelance",
      date: "2024-06-25",
      type: "income",
      value: 850,
      category: "Trabalho"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Vencimento - Internet",
      date: "2024-06-12",
      value: 79.90,
      daysUntil: 2
    },
    {
      id: 2,
      title: "Pagamento - Freelance",
      date: "2024-06-15",
      value: 1200,
      daysUntil: 5
    },
    {
      id: 3,
      title: "Vencimento - Cartão",
      date: "2024-06-18",
      value: 450.30,
      daysUntil: 8
    }
  ];

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Dias do mês anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      days.push({ date: currentDate, isCurrentMonth: true });
    }

    // Dias do próximo mês
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sora gradient-text">
            Calendário
          </h1>
          <p className="mt-1 text-zinc-950">
            Visualize e gerencie seus eventos financeiros
          </p>
        </div>
        <Button className="gap-2 bg-finyou-teal hover:bg-finyou-teal/90">
          <Plus className="h-4 w-4" />
          Novo Evento
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendário */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-sora">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth('prev')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateMonth('next')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  const dayEvents = getEventsForDate(day.date);
                  const isToday = day.date.toDateString() === new Date().toDateString();
                  
                  return (
                    <div
                      key={index}
                      className={`min-h-[80px] p-2 border rounded-lg cursor-pointer transition-colors ${
                        day.isCurrentMonth 
                          ? 'bg-white hover:bg-muted/50' 
                          : 'bg-muted/20 text-muted-foreground'
                      } ${isToday ? 'ring-2 ring-finyou-teal bg-finyou-teal/5' : ''}`}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      <div className={`text-sm ${isToday ? 'font-bold text-finyou-teal' : ''}`}>
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1 mt-1">
                        {dayEvents.slice(0, 2).map(event => (
                          <div
                            key={event.id}
                            className={`text-xs px-1 py-0.5 rounded text-white truncate ${
                              event.type === 'income' ? 'bg-green-600' :
                              event.type === 'expense' ? 'bg-red-500' :
                              'bg-finyou-teal'
                            }`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-muted-foreground">
                            +{dayEvents.length - 2} mais
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Próximos Eventos */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-sora flex items-center gap-2">
                <Bell className="h-5 w-5 text-finyou-teal" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="p-3 border border-border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <span className="text-xs px-2 py-1 bg-muted rounded-full">
                        {event.daysUntil} dias
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="text-sm font-medium">
                        R$ {event.value.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-sora flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-finyou-teal" />
                Ações Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Plus className="h-4 w-4" />
                  Agendar Pagamento
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Bell className="h-4 w-4" />
                  Definir Lembrete
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Ver Mês Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

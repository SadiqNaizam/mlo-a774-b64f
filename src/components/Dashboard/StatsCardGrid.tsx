import React from 'react';
import StatCard, { StatCardProps } from './StatCard';
import { DollarSign, Users, TrendingDown } from 'lucide-react';

const StatsCardGrid: React.FC = () => {
  // Define dummy data directly in the component, adhering to the prop interface
  const statsData: StatCardProps[] = [
    {
      title: 'Monthly Recurring Revenue',
      metric: '£48,320',
      change: '3.2%',
      changeType: 'increase' as const,
      description: 'vs last month',
      icon: DollarSign,
      iconClassName: 'bg-primary/10 text-primary',
    },
    {
      title: 'Active Users',
      metric: '1,245',
      change: '122',
      changeType: 'increase' as const,
      description: 'this week',
      icon: Users,
      iconClassName: 'bg-success/10 text-success',
    },
    {
      title: 'Churn Rate',
      metric: '1.8%',
      change: '0.2%',
      changeType: 'decrease' as const,
      description: 'vs last month',
      icon: TrendingDown,
      // Using destructive as 'warning' yellow is not in the color palette.
      // The change text will be red due to 'decrease', matching the image.
      iconClassName: 'bg-destructive/10 text-destructive',
    },
  ];

  return (
    // Per layout requirements, a vertical stack with gap-6.
    // A single-column grid is a robust way to achieve this.
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          metric={stat.metric}
          change={stat.change}
          changeType={stat.changeType}
          description={stat.description}
          icon={stat.icon}
          iconClassName={stat.iconClassName}
        />
      ))}
    </div>
  );
};

export default StatsCardGrid;

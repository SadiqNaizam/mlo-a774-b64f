import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, LucideProps } from 'lucide-react';

// Explicit interface for props
export interface StatCardProps {
  title: string;
  metric: string;
  change: string;
  changeType: 'increase' | 'decrease';
  description: string;
  icon: React.ElementType<LucideProps>; // Allows passing a component like `DollarSign`
  iconClassName: string; // e.g., "bg-primary/10 text-primary"
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  metric,
  change,
  changeType,
  description,
  icon: Icon, // Destructure and rename for use as a component
  iconClassName,
  className,
}) => {
  const isIncrease = changeType === 'increase';

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg", iconClassName)}>
            <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold tracking-tight">{metric}</div>
        <div className="flex items-center gap-1 pt-1 text-sm text-muted-foreground">
          <span className={cn(
            "flex items-center gap-1 font-semibold",
            isIncrease ? 'text-success' : 'text-destructive'
          )}>
            {isIncrease ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            {change}
          </span>
          <span>{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

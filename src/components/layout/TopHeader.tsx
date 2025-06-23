import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TopHeader: React.FC = () => {
  // Dummy user data as per requirements, matching the OCR'd text
  const user = {
    name: 'Eleanor Vance',
    role: 'Data Analyst',
    // A suitable placeholder image resembling the one in the UI
    imageUrl: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?q=80&w=250&h=250&auto=format&fit=crop',
    initials: 'EV',
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card px-6">
      {/* Left side: Hamburger Menu */}
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      {/* Right side: Notifications and User Profile */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          {/* Notification Dot - as seen in the UI */}
          <span className="absolute right-[9px] top-[9px] h-2 w-2 rounded-full bg-destructive ring-1 ring-card" />
        </div>

        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.imageUrl} alt={user.name} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-card-foreground">{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;

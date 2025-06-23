import React from 'react';
import TopHeader from '../components/layout/TopHeader';
import PageHeader from '../components/layout/PageHeader';
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';

/**
 * Index page for the Dashboard Overview.
 * This component assembles the main layout and organisms for the dashboard page.
 * It follows the layout structure defined in the project requirements, with a
 * sticky header and a scrollable main content area.
 */
const Index: React.FC = () => {
  return (
    // Per layout requirements, the overall structure is a vertical flex column.
    // `min-h-screen` ensures it covers the full viewport height.
    <div className="flex min-h-screen flex-col bg-background">
      {/* The TopHeader component is rendered first and is styled to be sticky internally. */}
      <TopHeader />

      {/* The main content area. `flex-1` allows it to grow and fill available space,
          enabling vertical scrolling if the content overflows. */}
      <main className="flex-1">
        {/* The content is constrained to a max-width and centered horizontally. */}
        <div className="mx-auto w-full max-w-4xl">
          {/* Inner container applying padding and vertical spacing between child elements. */}
          <div className="flex flex-col gap-6 px-6 py-8">
            <PageHeader />
            <StatsCardGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

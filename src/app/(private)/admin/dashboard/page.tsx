'use client';

import DashboardStats from '@/components/common/DashboardStats';

function Dashboard() {
  return (
    <>
      <div className='h-full flex-1 flex-col space-y-8 p-8 flex'>
        <DashboardStats />
      </div>
    </>
  );
}
export default Dashboard;

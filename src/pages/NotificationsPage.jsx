import React from 'react';

const NotificationsPage = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">Recent <span>Alerts</span></h1>
    </div>
    <div className="flex-col gap-12">
      {[1, 2, 3].map(i => (
        <div key={i} className="card p-16 flex gap-16 items-start">
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '6px' }}></div>
          <div>
            <h4 className="font-bold">Appointment Reminder</h4>
            <p className="text-sm text-secondary">Your appointment with Dr. Emily Carter is tomorrow at 10:30 AM.</p>
            <span className="text-sm text-muted mt-8 block">2 hours ago</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NotificationsPage;

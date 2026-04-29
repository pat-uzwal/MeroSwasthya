import React from 'react';

const AppointmentsPage = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">My <span>Appointments</span></h1>
    </div>
    <div className="tabs mb-24">
      <button className="tab-btn active">Upcoming</button>
      <button className="tab-btn">Past</button>
      <button className="tab-btn">Cancelled</button>
    </div>
    <div className="flex-col gap-16">
      {[1, 2].map(i => (
        <div key={i} className="card flex items-center justify-between">
          <div className="flex items-center gap-20">
            <div className="flex-col items-center justify-center p-12" style={{ backgroundColor: 'var(--primary-light)', borderRadius: '12px', minWidth: '70px' }}>
              <div className="font-bold text-primary-color" style={{ fontSize: '18px' }}>15</div>
              <div className="text-sm font-semibold text-primary-color">DEC</div>
            </div>
            <div>
              <h3 className="font-bold">Dr. Bipin Karki</h3>
              <p className="text-sm text-muted">Cardiologist • Sunday, 10:30 AM</p>
            </div>
          </div>
          <div className="flex gap-12">
            <button className="btn btn-ghost">Reschedule</button>
            <button className="btn btn-outline" style={{ color: 'var(--error)', borderColor: 'var(--error)' }}>Cancel</button>
            <button className="btn btn-primary">Join Call</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AppointmentsPage;

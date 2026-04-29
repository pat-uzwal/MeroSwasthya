import React from 'react';

const PrescriptionsPage = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">My <span>Prescriptions</span></h1>
    </div>
    <div className="grid-2">
      {[1, 2].map(i => (
        <div key={i} className="card">
          <div className="flex justify-between items-start mb-16">
            <div>
              <h3 className="font-bold">Dr. Amrit Karki</h3>
              <p className="text-sm text-muted">General Physician • Oct 12, 2023</p>
            </div>
            <span className="badge badge-teal">Active</span>
          </div>
          <div className="mb-16 p-12" style={{ backgroundColor: 'var(--bg)', borderRadius: '8px' }}>
            <p className="text-sm font-semibold">Paracetamol, Amoxicillin, Vitamin C</p>
          </div>
          <div className="flex gap-8">
            <button className="btn btn-outline btn-block btn-sm">View Details</button>
            <button className="btn btn-primary btn-block btn-sm">Download PDF</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PrescriptionsPage;

import React from 'react';

const FinancePage = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">Billing & <span>Finances</span></h1>
    </div>
    <div className="grid-2 mb-24">
      <div className="card" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
        <p style={{ opacity: 0.8 }}>Outstanding Balance</p>
        <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Rs. 1,500.00</h2>
        <button className="btn btn-block mt-16" style={{ backgroundColor: 'white', color: 'var(--primary)' }}>Pay Now</button>
      </div>
      <div className="card">
        <p className="text-muted">Total Paid</p>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: 'var(--secondary)' }}>Rs. 12,500.00</h2>
        <button className="btn btn-outline btn-block mt-16">View History</button>
      </div>
    </div>
    <div className="card">
      <h3 className="card-title mb-16">Recent Transactions</h3>
      <div className="flex-col gap-12">
        {[1, 2].map(i => (
          <div key={i} className="flex justify-between items-center p-12" style={{ borderBottom: '1px solid var(--border-light)' }}>
            <div>
              <p className="font-bold">Consultation Fee - Dr. Binod</p>
              <p className="text-sm text-muted">Oct 20, 2023 • Khalti</p>
            </div>
            <div className="font-bold">Rs. 1,000.00</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FinancePage;

import React from 'react';
import { Calendar, Pill, FileText, CreditCard, ArrowRight, Star, Clock } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="section-header">
        <div>
          <h1 className="section-title">Good Morning, <span>Ravi Sharma!</span></h1>
          <p className="section-subtitle">You have 2 appointments scheduled for today.</p>
        </div>
        <div className="flex gap-12">
          <button className="btn btn-outline">Emergency</button>
          <button className="btn btn-primary">Book New Appointment</button>
        </div>
      </div>

      <div className="grid-4 mb-24">
        <div className="stat-card">
          <div className="stat-icon teal"><Calendar size={24} /></div>
          <div>
            <div className="stat-value">02</div>
            <div className="stat-label">Appointments Today</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon blue"><Pill size={24} /></div>
          <div>
            <div className="stat-value">04</div>
            <div className="stat-label">Active Meds</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon green"><FileText size={24} /></div>
          <div>
            <div className="stat-value">08</div>
            <div className="stat-label">Lab Reports</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon orange"><CreditCard size={24} /></div>
          <div>
            <div className="stat-value">NPR 1.5k</div>
            <div className="stat-label">Due Payment</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '24px' }}>
        <div className="flex-col gap-24">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Current Medications</h2>
              <button className="btn btn-ghost btn-sm">View all</button>
            </div>
            <div className="flex-col gap-12">
              {[1, 2].map((item) => (
                <div key={item} className="flex items-center justify-between p-16" style={{ backgroundColor: 'var(--bg)', borderRadius: 'var(--radius-md)' }}>
                  <div className="flex items-center gap-16">
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Pill size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">Paracetamol 500mg</h4>
                      <p className="text-sm text-muted">Twice a day • After meal</p>
                    </div>
                  </div>
                  <div className="badge badge-teal">In Progress</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Recent Lab Reports</h2>
              <button className="btn btn-ghost btn-sm">View all</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '12px 0', fontSize: '12px', color: 'var(--text-muted)' }}>TEST NAME</th>
                  <th style={{ padding: '12px 0', fontSize: '12px', color: 'var(--text-muted)' }}>DATE</th>
                  <th style={{ padding: '12px 0', fontSize: '12px', color: 'var(--text-muted)' }}>STATUS</th>
                  <th style={{ padding: '12px 0' }}></th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((item) => (
                  <tr key={item} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '16px 0' }}>
                      <div className="font-semibold">Complete Blood Count</div>
                      <div className="text-sm text-muted">City Diagnostic Lab</div>
                    </td>
                    <td style={{ padding: '16px 0', color: 'var(--text-secondary)' }}>Oct 20, 2023</td>
                    <td style={{ padding: '16px 0' }}><span className="badge badge-success">Completed</span></td>
                    <td style={{ padding: '16px 0', textAlign: 'right' }}>
                      <button className="btn btn-ghost btn-sm" style={{ color: 'var(--primary)' }}>Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex-col gap-24">
          <div className="card" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Upcoming Appointment</h3>
            <p style={{ opacity: 0.8, fontSize: '13px', marginBottom: '20px' }}>Your next visit is in 2 hours.</p>
            
            <div className="flex items-center gap-16 mb-24">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop" 
                   alt="Doctor" 
                   style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover' }} />
              <div>
                <h4 style={{ fontWeight: '700' }}>Dr. Emily Carter</h4>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>Cardiologist • City Hospital</p>
              </div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', padding: '12px', display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div className="flex items-center gap-8">
                <Calendar size={16} />
                <span className="text-sm">Dec 15, 2024</span>
              </div>
              <div className="flex items-center gap-8">
                <Clock size={16} />
                <span className="text-sm">10:30 AM</span>
              </div>
            </div>

            <button className="btn btn-primary btn-block" style={{ backgroundColor: 'white', color: 'var(--secondary)' }}>
              Check-in Now
            </button>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Top Rated Doctors</h2>
            </div>
            <div className="flex-col gap-16">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center gap-12">
                  <img src={`https://i.pravatar.cc/150?u=${item}`} alt="Dr" style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
                  <div style={{ flex: 1 }}>
                    <div className="font-semibold">Dr. Binod Gupta</div>
                    <div className="text-sm text-muted">Neurologist</div>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold" style={{ color: '#EAB308' }}>
                    <Star size={14} fill="#EAB308" /> 4.8
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-outline btn-block mt-24">Find More Doctors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

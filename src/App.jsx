import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

// Remaining Page Placeholders (to be replaced)
const Search = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <div>
        <h1 className="section-title">Find <span>Doctors</span></h1>
        <p className="section-subtitle">Search by specialty, location or name</p>
      </div>
    </div>
    <div className="card mb-24">
      <div className="flex gap-16">
        <div className="search-bar" style={{ flex: 1 }}>
          <input type="text" placeholder="Search doctors, specialties..." />
        </div>
        <select className="no-icon" style={{ width: '200px' }}>
          <option>All Specialities</option>
          <option>Cardiology</option>
          <option>Dermatology</option>
          <option>Pediatrics</option>
        </select>
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
    <div className="grid-3">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="flex items-center gap-16 mb-16">
            <img src={`https://i.pravatar.cc/150?u=doc${i}`} alt="doc" style={{ width: '64px', height: '64px', borderRadius: '12px' }} />
            <div>
              <h3 className="font-bold">Dr. Anjali Sharma</h3>
              <p className="text-sm text-muted">Cardiologist • 1.5 km away</p>
              <div className="flex items-center gap-4 text-sm mt-4" style={{ color: '#EAB308' }}>
                4.8 (120 reviews)
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <button className="btn btn-outline btn-block btn-sm">View Profile</button>
            <button className="btn btn-primary btn-block btn-sm">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Appointments = () => (
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

const MedicalHistory = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">Medical <span>History</span></h1>
    </div>
    <div className="card">
      <p className="text-muted">No history found yet.</p>
    </div>
  </div>
);

const Prescriptions = () => (
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

const Notifications = () => (
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

const Finance = () => (
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

const Profile = () => (
  <div className="animate-fade-in-up">
    <div className="section-header">
      <h1 className="section-title">Profile <span>Settings</span></h1>
    </div>
    <div className="grid-2" style={{ gridTemplateColumns: '1fr 2fr' }}>
      <div className="card flex-col items-center">
        <img src="https://i.pravatar.cc/150?u=ravi" alt="Profile" style={{ width: '120px', height: '120px', borderRadius: '50%', marginBottom: '16px' }} />
        <h2 className="font-bold">Ravi Sharma</h2>
        <p className="text-muted mb-24">ravi.sharma72@gmail.com</p>
        <button className="btn btn-outline btn-block">Change Photo</button>
      </div>
      <div className="card">
        <h3 className="card-title mb-24">Personal Information</h3>
        <div className="grid-2">
          <div className="form-group">
            <label>Full Name</label>
            <input className="no-icon" value="Ravi Sharma" readOnly />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input className="no-icon" value="+977-9800000000" readOnly />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input className="no-icon" value="18 Aug 2000" readOnly />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <input className="no-icon" value="Male" readOnly />
          </div>
        </div>
        <button className="btn btn-primary mt-16">Edit Profile</button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<Search />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="finance" element={<Finance />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

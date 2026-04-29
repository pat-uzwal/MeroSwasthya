import React from 'react';

const ProfilePage = () => (
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

export default ProfilePage;

import React from 'react';

const FindDoctorsPage = () => (
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

export default FindDoctorsPage;

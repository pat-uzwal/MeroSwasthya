import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Globe, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [role, setRole] = useState('patient');

  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="auth-brand">
          <div className="auth-brand-icon">
            <Stethoscope size={30} color="white" />
          </div>
          <span className="auth-brand-name">MeroSwasthya</span>
        </div>
        <div className="auth-illustration">
          <div className="big-icon">🩺</div>
          <h2>Join Our <br />Community</h2>
          <p>Sign up today and take control of your health journey with advanced tools and expert care.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box animate-fade-in-up" style={{ maxWidth: '500px' }}>
          <h1>Create Account</h1>
          <p className="subtitle">Sign up to get started with MeroSwasthya.</p>

          <div className="tabs mb-24" style={{ width: '100%' }}>
            <button 
              className={`tab-btn ${role === 'patient' ? 'active' : ''}`}
              style={{ flex: 1 }}
              onClick={() => setRole('patient')}
            >
              Patient
            </button>
            <button 
              className={`tab-btn ${role === 'doctor' ? 'active' : ''}`}
              style={{ flex: 1 }}
              onClick={() => setRole('doctor')}
            >
              Doctor
            </button>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid-2">
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-wrap">
                  <User className="input-icon" />
                  <input type="text" placeholder="John Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-wrap">
                  <Phone className="input-icon" />
                  <input type="tel" placeholder="+977-XXXXXXXXXX" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrap">
                <Mail className="input-icon" />
                <input type="email" placeholder="name@example.com" required />
              </div>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label>Password</label>
                <div className="input-wrap">
                  <Lock className="input-icon" />
                  <input type="password" placeholder="••••••••" required />
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="input-wrap">
                  <Lock className="input-icon" />
                  <input type="password" placeholder="••••••••" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="flex gap-16 mt-8">
                <label className="flex items-center gap-8" style={{ cursor: 'pointer', textTransform: 'none', fontWeight: '500' }}>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label className="flex items-center gap-8" style={{ cursor: 'pointer', textTransform: 'none', fontWeight: '500' }}>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label className="flex items-center gap-8" style={{ cursor: 'pointer', textTransform: 'none', fontWeight: '500' }}>
                  <input type="radio" name="gender" value="other" /> Other
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg mt-16">
              Create Account <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center mt-24 text-muted">
            Already have an account? <Link to="/login" className="text-primary-color font-semibold">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

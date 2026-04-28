import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, Stethoscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
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
          <div className="big-icon">🏥</div>
          <h2>Your Health, <br />Our Priority</h2>
          <p>Access your medical records, book appointments, and connect with top doctors all in one place.</p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-box animate-fade-in-up">
          <h1>Welcome Back!</h1>
          <p className="subtitle">Please enter your details to sign in.</p>

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
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrap">
                <Mail className="input-icon" />
                <input type="email" placeholder="name@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <div className="flex justify-between items-center mb-4">
                <label style={{ marginBottom: 0 }}>Password</label>
                <a href="#" className="text-sm text-primary-color font-semibold">Forgot?</a>
              </div>
              <div className="input-wrap">
                <Lock className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <button 
                  type="button" 
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg mt-16">
              Sign In <ArrowRight size={18} />
            </button>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="grid-2">
              <button type="button" className="btn btn-outline" style={{ borderColor: '#E2E8F0', color: '#1A3C5E' }}>
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width="18" />
                Google
              </button>
              <button type="button" className="btn btn-outline" style={{ borderColor: '#E2E8F0', color: '#1A3C5E' }}>
                <img src="https://www.svgrepo.com/show/303114/facebook-3.svg" alt="FB" width="18" />
                Facebook
              </button>
            </div>
          </form>

          <p className="text-center mt-24 text-muted">
            Don't have an account? <Link to="/signup" className="text-primary-color font-semibold">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

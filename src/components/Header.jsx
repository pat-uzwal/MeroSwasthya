import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="header" style={{
      height: 'var(--header-h)',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 'var(--sidebar-w)',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      zIndex: 90
    }}>
      <div className="header-search">
        <div className="search-bar" style={{ width: '300px', padding: '8px 16px' }}>
          <Search className="search-icon" size={18} />
          <input type="text" placeholder="Search for doctors, labs..." />
        </div>
      </div>

      <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button style={{ position: 'relative', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
          <Bell size={22} />
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '10px',
            height: '10px',
            backgroundColor: 'var(--error)',
            borderRadius: '50%',
            border: '2px solid white'
          }}></span>
        </button>

        <div className="user-profile" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          padding: '4px 8px',
          borderRadius: 'var(--radius-full)',
          cursor: 'pointer',
          '&:hover': { backgroundColor: 'var(--border-light)' }
        }}>
          <div className="avatar-placeholder" style={{ width: '36px', height: '36px' }}>
            JD
          </div>
          <div className="user-info" style={{ display: 'none' }}>
            {/* Show on larger screens if needed */}
          </div>
          <ChevronDown size={16} color="var(--text-muted)" />
        </div>
      </div>
    </header>
  );
};

export default Header;

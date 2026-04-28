import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Calendar, 
  FileText, 
  Bell, 
  User, 
  CreditCard, 
  Activity,
  LogOut,
  Stethoscope
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Search size={20} />, label: 'Find Doctors', path: '/search' },
    { icon: <Calendar size={20} />, label: 'Appointments', path: '/appointments' },
    { icon: <Activity size={20} />, label: 'Medical History', path: '/medical-history' },
    { icon: <FileText size={20} />, label: 'Prescriptions', path: '/prescriptions' },
    { icon: <Bell size={20} />, label: 'Notifications', path: '/notifications' },
    { icon: <CreditCard size={20} />, label: 'Billing & Finance', path: '/finance' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
  ];

  return (
    <aside className="sidebar" style={{
      width: 'var(--sidebar-w)',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      backgroundColor: 'var(--bg-sidebar)',
      borderRight: '1px solid var(--border-light)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 100
    }}>
      <div className="sidebar-header" style={{
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderBottom: '1px solid var(--border-light)'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'var(--primary)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <Stethoscope size={24} />
        </div>
        <h1 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--secondary)' }}>MeroSwasthya</h1>
      </div>

      <nav className="sidebar-nav" style={{ flex: 1, padding: '20px 12px' }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                  fontWeight: isActive ? '600' : '500',
                  transition: 'var(--transition)'
                })}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer" style={{ padding: '20px', borderTop: '1px solid var(--border-light)' }}>
        <button className="btn btn-ghost btn-block" style={{ justifyContent: 'flex-start' }}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

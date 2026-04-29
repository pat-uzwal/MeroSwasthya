import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import FindDoctorsPage from './pages/FindDoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import MedicalHistoryPage from './pages/MedicalHistoryPage';
import PrescriptionsPage from './pages/PrescriptionsPage';
import NotificationsPage from './pages/NotificationsPage';
import FinancePage from './pages/FinancePage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<FindDoctorsPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="medical-history" element={<MedicalHistoryPage />} />
          <Route path="prescriptions" element={<PrescriptionsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

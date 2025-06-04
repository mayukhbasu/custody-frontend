// components/AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RemoteWrapper from '../remote-wrapper';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import RouteGuard from '../routes/RouteGuard';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={
    <RouteGuard access="public-only">
      <LoginPage />
    </RouteGuard>
  } />

  <Route path="/" element={
    <RouteGuard access="public-only">
      <RegisterPage />
    </RouteGuard>
  } />
    {['user', 'sla', 'notification', 'audit', 'reconciliation', 'corporateaction', 'analytics'].map((route) => (
      <Route
        key={route}
        path={`/${route}`}
        element={
          <React.Suspense fallback="Loading...">
            <RemoteWrapper name={route} />
          </React.Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRoutes;

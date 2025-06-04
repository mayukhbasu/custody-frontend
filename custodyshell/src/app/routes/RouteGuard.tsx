import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type RouteGuardProps = {
  children: JSX.Element;
  access: 'private' | 'public-only'; // can be extended to include roles like 'admin'
  redirectTo?: string; // where to redirect if access is denied
};

const RouteGuard = ({ children, access, redirectTo = '/user' }: RouteGuardProps) => {
  const { token, loading } = useAuth(); // assuming 'loading' is handled in context (optional)

  // Optional loading fallback — useful if checking token from async storage or API
  if (loading) return <div>Loading authentication...</div>;

  switch (access) {
    case 'private':
      return token ? children : <Navigate to="/login" replace />;
    case 'public-only':
      return !token ? children : <Navigate to={redirectTo} replace />;
    default:
      return children; // fallback for any future access types
  }
};

export default RouteGuard;

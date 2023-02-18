import ErrorBoundary from '@Component/common/error/ErrorBoundary';
import { isValidAuth } from '@Utils/auth';
import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const location = useLocation();

  const isValid = isValidAuth()

  return isValid ? (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

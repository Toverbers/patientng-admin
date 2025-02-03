import useAuthStore from '@/store/authStore';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const user = useAuthStore((state) => state.user);
  const token = localStorage.getItem(token);


  return token ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
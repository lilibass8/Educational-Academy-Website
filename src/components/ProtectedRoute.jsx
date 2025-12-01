import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAdminAuth } from '../utils/storage';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = getAdminAuth();

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute;

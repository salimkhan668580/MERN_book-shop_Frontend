import React from 'react'

import { Navigate, useLocation,  } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';

function PrivateRoute({children}) {
    const {authInfo}=useAuth();
    const session=authInfo.session;
    const location=useLocation();

    if (session) {
        return children;
      }
    
      return (
        <Navigate to="/login" state={{location }} replace />
      );

    
    
}

export default PrivateRoute
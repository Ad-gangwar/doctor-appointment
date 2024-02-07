import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useCookies } from 'react-cookie';

export default function ProtectedRoutes({ children, allowedRoles }) {
    const [cookies] = useCookies(["token"]);
    const { user } = useContext(AuthContext);
    const token = cookies.token;
    const role = user ? user.role : null; // Check if user is defined before accessing role
    const isAllowed = role && allowedRoles.includes(role);
    const accessibleRoute = token && isAllowed ? children : <Navigate to="/login" replace={true} />;
  
    return accessibleRoute;
  }
  

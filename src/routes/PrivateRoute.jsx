import { useState } from 'react';
import { Navigate, Outlet } from 'react-router';

const PrivateRoute = () => {
  // Si no está autenticado, redirige al login
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('email') ? true : false);

  console.log(isAuthenticated);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza los componentes hijos
  return <Outlet />;
};

export default PrivateRoute;  
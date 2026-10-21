import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('chatterspace_auth') === '1';
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;

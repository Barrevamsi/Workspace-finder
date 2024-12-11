import React from "react";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isAuthenticated, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
      localStorage.setItem("redirectPath", window.location.pathname); // Save current path
      return <Navigate to="/login" />;
    }
    return children;
  };
  
  export default ProtectedRoute;
  

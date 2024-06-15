import { Outlet, Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import { useState } from "react";

const ProtectedRoute = ({ element }) => {
  const { login, register, isLoading, isAuthenticated, user, logout } =
    useKindeAuth();

  //   const [profile, setProfile] = useState(null);

  //   {
  //     !isLoading && isAuthenticated && setProfile(true);
  //   }
  // const profile = null;

  // return profile ? <Outlet /> : <Navigate to="/calendar" />;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default ProtectedRoute;

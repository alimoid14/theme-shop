import React from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

function RedirectVerifiedUsers({ children }) {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return isAuthenticated && user.isVerified ? (
    <Navigate to="/" replace />
  ) : (
    children
  );
}

export default RedirectVerifiedUsers;

import React from "react";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({ children }) {

  let isAuth = false

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

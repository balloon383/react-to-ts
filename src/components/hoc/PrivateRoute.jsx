import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'


export default function PrivateRoute({ children }) {

  let isAuth = useSelector(store => store.user.status)

  useEffect(() =>{
    console.log(isAuth)
  },[isAuth])

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    

  return children;
}

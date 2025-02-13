// import React from 'react'
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'


export default function PrivateRoute({children}) {
    const user=useSelector((store)=>store.authSlice.user)

  return (
    user ? children : <Navigate to="/login"/>
  )
}
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({children}) {
    
//     const user = useSelector((store)=>store.authSlice.user)

//     return user ? children : <Navigate to="/login" />;
// }
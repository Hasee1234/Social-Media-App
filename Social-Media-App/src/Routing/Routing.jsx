import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";  
import Home from '../Pages/Home';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
      <PrivateRoute>
        <Home/>
      </PrivateRoute>
      </div>,
    },
    {
      path: "/signup",
      element: <div>
        <PublicRoute>
        <Signup/>
        </PublicRoute>
      </div>,
    },
    {
      path: "/login",
      element: <div>
        <PublicRoute>
        <Login/>
        </PublicRoute>
      </div>,
    },
   
  ]);

const Routing = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default Routing

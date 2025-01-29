import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";  
import Home from '../Pages/Home';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Home/>
      </div>,
    },
    {
      path: "/signup",
      element: <div>
        <Signup/>
      </div>,
    },
    {
      path: "/login",
      element: <div>
        <Login/>
      </div>,
    },
   
  ]);

const Routing = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default Routing

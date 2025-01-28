import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";  
import Home from '../Pages/Home';
import Signup from '../Pages/Signup/Signup';

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
   
  ]);

const Routing = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default Routing

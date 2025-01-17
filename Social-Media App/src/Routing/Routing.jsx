import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";  
import Home from '../Pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Home/>
      </div>,
    },
   
  ]);

const Routing = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default Routing

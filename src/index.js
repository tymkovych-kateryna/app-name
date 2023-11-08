import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import './Components/SignIn/SignIn.scss';
import './Components/SignUp/SignUp.scss';

import './Components/Navbar/Navbar.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.scss';
import SignIn from './Components/SignIn';
import './Components/SignIn.scss';
import './Components/Navbar/Navbar.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/#",
    element: <App />
  },
  {
    path: "/sighin",
    element: <SignIn />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <App /> */}
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

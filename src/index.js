import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import App from "./App";
import Chat from "./Components/Chat.js";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.scss";
import "./Components/SignIn/SignIn.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Navbar/Navbar.scss";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

const queryClient = new QueryClient();
axios.defaults.baseURL = `http://127.0.0.1:5000/`; // куди мають посилатись запити
axios.defaults.responseType = "json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);

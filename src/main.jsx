import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main.jsx';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import LoginForm from './LoginForm/LoginForm';
import AllComponent from './AllComponet/AllComponent';
import { AuthProvider } from './Authcontext/AuthContext';
import HouseOwnerDashboard from './DashBoard/HouseOwnerDashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<AllComponent></AllComponent>
      },
      {
        path:'/register',
        element:<RegistrationForm></RegistrationForm>
      },
      {
        path:'/login',
        element:<LoginForm></LoginForm>
      },
      {
        path: "/dashboard",
        element: <HouseOwnerDashboard></HouseOwnerDashboard>,
      },


    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
);

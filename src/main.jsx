import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'animate.css';
import router from './router/Router.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import AuthProvider from '../AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthProvider>

    <RouterProvider router={router} />
</AuthProvider>


 

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './components/modalLogin'
import './index.css'
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from '../routes/router';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
)

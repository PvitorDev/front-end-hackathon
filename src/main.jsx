import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from '../routes/router';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
   <>
    <ToastContainer autoClose={1000} />
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter> 
    </>
)

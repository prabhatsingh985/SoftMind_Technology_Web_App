import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom";


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <App />
    {/* <Toaster/> */}
    </BrowserRouter>
  
)

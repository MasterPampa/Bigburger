import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
          <div className='container__content'>
            <Home />
          </div>
        </div>
  </React.StrictMode>
);

reportWebVitals();

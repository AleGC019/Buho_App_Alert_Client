import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Loading from './components/Loading/Loading';

import { ConfigProvider } from './contexts/ConfigContext';
import { UserContextProvider } from './contexts/UserContext';

import './index.css'

import axios from 'axios';


import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';


axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3500/api';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider>
      <UserContextProvider>
        <App />
        <ToastContainer theme='light' position='top-right'/>
        <Loading/>
      </UserContextProvider>
    </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)

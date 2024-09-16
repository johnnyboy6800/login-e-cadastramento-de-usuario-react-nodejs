import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import RouterList from './components/routers'
import Login from './components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <BrowserRouter>
      <RouterList />
    </BrowserRouter>
  
);



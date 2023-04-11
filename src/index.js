import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext';
import { BrowserRouter } from 'react-router-dom';
import { PoemsProvider } from './context/PoemsContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PoemsProvider>
          <App />
        </PoemsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

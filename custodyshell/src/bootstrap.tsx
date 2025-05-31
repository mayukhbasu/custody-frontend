import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/app';
import React from 'react';
import { AuthProvider } from './app/context/AuthContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthProvider> {/* ✅ Wrap App inside AuthProvider here */}
      <App />
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>
  
);

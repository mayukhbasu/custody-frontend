import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <BrowserRouter>
      <GoogleOAuthProvider clientId="294043054811-81u7n9874jk1fd9jdqofuv8f2kt8nh3h.apps.googleusercontent.com"
      
      >
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  
);

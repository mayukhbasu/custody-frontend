import * as ReactDOM from 'react-dom/client';


import App from './app/app';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="294043054811-81u7n9874jk1fd9jdqofuv8f2kt8nh3h.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

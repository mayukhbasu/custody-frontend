import * as ReactDOM from 'react-dom/client';


import App from './app/app';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="294043054811-dv6ta4ftcth7tq7jjgv4mqcapbge367t.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

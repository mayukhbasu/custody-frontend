import { GoogleLogin, googleLogout } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useState } from 'react';

export function AuthButtons() {
  const [user, setUser] = useState<any>(null);

  return (
    <div>
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const decoded: any = jwtDecode(credentialResponse.credential);
              console.log('Decoded JWT:', decoded);
              setUser(decoded);
              localStorage.setItem('accessToken', credentialResponse.credential);
            }
          }}
          onError={() => {
            console.error('Login Failed');
          }}
        />
      ) : (
        <div>
          <p>Welcome, {user.name}</p>
          <button
            onClick={() => {
              googleLogout();
              localStorage.removeItem('accessToken');
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

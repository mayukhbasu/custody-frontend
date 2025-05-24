import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import type { GoogleIdTokenPayload } from '../types/GoogleIdTokenPayload';

export function AuthButtons() {
  const [user, setUser] = useState<GoogleIdTokenPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decoded = jwtDecode<GoogleIdTokenPayload>(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div>
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (credentialResponse.credential) {
              const decoded = jwtDecode<GoogleIdTokenPayload>(credentialResponse.credential);
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
          <p>Welcome, {user.name} ({user.email})</p>
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

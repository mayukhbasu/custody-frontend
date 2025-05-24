import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import type { GoogleIdTokenPayload } from '../types/GoogleIdTokenPayload';

export function AuthButtons() {
  const [user, setUser] = useState<GoogleIdTokenPayload | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      try {
        const decoded = jwtDecode<GoogleIdTokenPayload>(token);
        setUser(decoded);
      } catch (err) {
        console.error('Invalid token in localStorage:', err);
        localStorage.removeItem('accessToken');
      }
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        const profile = await res.json();
        console.log('User profile:', profile);
        setUser(profile); // This works!
        localStorage.setItem('accessToken', tokenResponse.access_token);
      } catch (err) {
        console.error('Failed to fetch user profile:', err);
      }
    },
    onError: () => console.error('Login failed'),
  });
  

  return (
    <div>
      {!user ? (
        <button onClick={() => login()}>
          Login with Google
        </button>
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

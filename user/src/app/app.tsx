import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { AuthButtons } from './AuthButtons';

export default function App() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decoded: any = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <div>
      <h1>Custody Platform</h1>
      <AuthButtons />
      {user ? (
        <div>
          <p>Welcome, {user.name} ({user.email})</p>
          {/* Show protected routes or dashboard here */}
        </div>
      ) : (
        <p>Please sign in to continue.</p>
      )}
    </div>
  );
}

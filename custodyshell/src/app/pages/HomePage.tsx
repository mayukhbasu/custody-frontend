import React, { useEffect, useState } from 'react';
import { User } from '../models/User';

const HomePage = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:8087/users/me', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYmNAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDg2ODA2NjksImV4cCI6MTc0ODY4NDI2OX0.6DOKEaPs-Wq0EcdPZlemnrd1u6X0Tznfh5Unti2ruYQ',
          },
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default HomePage;

import React from 'react';
import AuthForm from '../components/AuthForm';
import { login } from '../services/authService';

const LoginPage = () => {
  const handleLogin = async (data: {email: string, name?: string, password: string}) => {
    const response = await login(data);
    localStorage.setItem('token', response.token);
    alert('Login successful');
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

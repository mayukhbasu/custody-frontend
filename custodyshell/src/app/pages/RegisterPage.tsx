import React from 'react';
import AuthForm from '../components/AuthForm';
import { register } from '../services/authService';

const RegisterPage = () => {
  const handleRegister = async (data: { email: string; name?: string; password: string }) => {
    const res = await register(data);
    console.log(res);
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} isRegister={true} />
    </div>
  );
};

export default RegisterPage;

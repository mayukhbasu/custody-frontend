import React from 'react';
import { toast } from "react-toastify"; // ✅ Import only the toast API
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = async (data: { email: string; name?: string; password: string }) => {
    navigate('/login');
    toast.success(`${data.name} has been created`); // 🎉 Trigger toast from shared setup
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} isRegister={true} />
    </div>
  );
};

export default RegisterPage;

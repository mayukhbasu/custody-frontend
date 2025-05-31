import AuthForm from '../components/AuthForm';
import { login } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    const res = await login(data);
    if (res.token) {
      loginContext(res.token);
      navigate('/user');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;

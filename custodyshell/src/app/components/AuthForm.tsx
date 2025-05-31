import React from 'react';
import { Form, Button } from 'react-bootstrap';

type Props = {
  onSubmit: (data: {email: string, name?: string, password: string}) => void;
  isRegister?: boolean;
};

const AuthForm: React.FC<Props> = ({ onSubmit, isRegister }) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister) {
      onSubmit({ email, password, name });
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isRegister && (
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
    </Form>
  );
};

export default AuthForm;

import axios from 'axios';

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdDate: string;
};

export const fetchUsers = async (): Promise<User[]> => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No auth token found');

  const res = await axios.get('http://localhost:8087/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

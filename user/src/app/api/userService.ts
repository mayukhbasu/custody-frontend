// api/userService.ts
import axios from 'axios';
import { PaginatedUserResponse } from '../models/User';

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  createdDate: string;
};

export const paginateUsers = async (
  search: string,
  page: number,
  size: number
): Promise<PaginatedUserResponse> => {
  const token = localStorage.getItem('token');
  const res = await axios.get(`http://localhost:8087/users`, {
    params: { search, page, size },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

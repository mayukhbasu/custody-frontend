export interface User {
  id: number;
  email: string;
  name: string;
  role: 'ADMIN' | 'OPS' | 'VIEWER' | null;
  status: 'ACTIVE' | 'INACTIVE' | null;
  createdDate: string | null; // ISO string format
}

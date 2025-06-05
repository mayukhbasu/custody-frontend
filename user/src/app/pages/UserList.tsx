import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from '../api/userService';

const UserList: React.FC = () => {
  const { data: users, isLoading, isError, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (isError) {
    return <div className="text-danger">Error: {(error as Error).message}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>User List</h2>

      <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <table className="table table-bordered table-hover table-striped mt-3">
          <thead className="table-dark" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {users?.map(renderUserRow)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const renderUserRow = (user: User) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.name || '-'}</td>
    <td>{user.email}</td>
    <td>{user.role || '-'}</td>
    <td>{user.status || '-'}</td>
    <td>{user.createdDate ? new Date(user.createdDate).toLocaleString() : '-'}</td>
  </tr>
);

export default UserList;

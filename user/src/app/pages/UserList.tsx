import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { paginateUsers,  } from '../api/userService';
import './UserList.css';
import { PaginatedUserResponse, User} from '../models/User';

const PAGE_SIZE = 5;

const UserList: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { data, isLoading, isError, error } = useQuery<PaginatedUserResponse>({
    queryKey: ['users', search, page],
    queryFn: () => paginateUsers(search, page, PAGE_SIZE),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => {
    if (data && page < data.totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0); // Reset to first page on new search
          }}
        />
      </div>

      {isLoading && <div className="text-center mt-5">Loading...</div>}
      {isError && <div className="text-danger">Error: {(error as Error).message}</div>}

      {data && (
        <>
          <div className="table-container">
            <table className="table table-bordered table-hover table-striped fixed-header">
              <thead className="table-dark">
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
                {data.content.map(renderUserRow)}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-secondary" onClick={handlePrev} disabled={page === 0}>
              Previous
            </button>
            <span>Page {page + 1} of {data.totalPages}</span>
            <button className="btn btn-secondary" onClick={handleNext} disabled={page >= data.totalPages - 1}>
              Next
            </button>
          </div>
        </>
      )}
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

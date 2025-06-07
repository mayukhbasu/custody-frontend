import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css'; // 👈 Add custom styles here

const Navbar = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 position-relative">
      <Link className="navbar-brand" to={token ? "/user" : "/"}>Custody Platform</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        {token ? (
          <>
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/issue">Issues</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sla">SLA</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/notification">Notification</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/audit">Audit</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reconciliation">Reconciliation</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/corporateaction">Corporate Action</Link></li>
              
              <li className="nav-item"><Link className="nav-link" to="/analytics">Analytics</Link></li>
              <li className="nav-item  user-hover">
                <Link
                  className="nav-link"
                  to="#"
                  role="button"
                >
                  Accounts
                </Link>
                <div className="custom-dropdown-menu">
                  <Link className="dropdown-item" to="/user">All Users</Link>
                  <Link className="dropdown-item" to="/user/create">Create User</Link>
                  <Link className="dropdown-item" to="/user/profile">My Profile</Link>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </>
        ) : (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">Register</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

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
        
          <>
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/inventory">Inventory</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/royalty">Royalty</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/order">Order</Link></li>
            </ul>
          </>
      </div>
    </nav>
  );
};

export default Navbar;

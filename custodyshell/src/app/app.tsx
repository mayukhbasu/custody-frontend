import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import RemoteWrapper from './remote-wrapper';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

  const  App= () => {
  return (
    <div>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <a className="navbar-brand" href="/">Custody Platform</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/user">User</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sla">SLA</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/notification">Notification</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/audit">Audit</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reconciliation">Reconciliation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/corporateaction">Corporate Action</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/analytics">Analytics</Link></li>
          </ul>
        </div>
      </nav>

      {/* Route Loader */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="user" /></React.Suspense>} />
          <Route path="/sla" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="sla" /></React.Suspense>} />
          <Route path="/notification" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="notification" /></React.Suspense>} />
          <Route path="/audit" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="audit" /></React.Suspense>} />
          <Route path="/reconciliation" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="reconciliation" /></React.Suspense>} />
          <Route path="/corporateaction" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="corporateaction" /></React.Suspense>} />
          <Route path="/analytics" element={<React.Suspense fallback="Loading..."><RemoteWrapper name="analytics" /></React.Suspense>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

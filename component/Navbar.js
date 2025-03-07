import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">Essay Grader</div>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/grading" className="nav-item">Grading</Link>
            <Link to="/account" className="nav-item">Account</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-item login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-nav-customised navbar-expand-lg navbar-light bg-dark">
      <p className="navbar-brand">Portfolio</p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav-customised">
          <li className="nav-item active">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

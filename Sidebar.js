import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser
} from "@fortawesome/free-solid-svg-icons";

function Sidebar  ()  { 

  return (
    <>
      <div className="navbar-nav">
        <ul className="navbar-nav navbar-expand-lg navbar-light bg-dark">
        <li className="nav-item active">
           <FontAwesomeIcon icon={faBars} />
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <FontAwesomeIcon icon={faUser} />
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faCogs} />
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faTable} />
            <Link to="/resume">Resume</Link>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faTimes} />
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faTable} />
            <Link to="/Comment">Comment</Link>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faList} />
            <Link to="/forms">Forms</Link>
          </li>
        </ul>
     </div>
    
    </>
  )
}

export default Sidebar;

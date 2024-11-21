import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional: separate CSS file for navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Julius's Portfolio</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

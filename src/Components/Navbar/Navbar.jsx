import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { id } = useParams();
  const location = useLocation();
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle("nav_popout");
    document.body.classList.toggle("inactive");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="/assets/tm-logo.png" className="Navbar_image" alt="logo" />
      </Link>

      <nav ref={navRef}>
        {location.pathname === "/" ? (
          <>
            <a href="#cards" onClick={toggleNav}>Domains</a>
            <button className="nav-btn nav-close-btn" onClick={toggleNav}>
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <a href="#topics" onClick={toggleNav}>Tools</a>
            {id === "ai" && <a href="#categories" onClick={toggleNav}>Categories</a>}
            <a href="#blogs" onClick={toggleNav}>Blogs</a>
            <a href="#people" onClick={toggleNav}>People</a>
            <button className="nav-btn nav-close-btn" onClick={toggleNav}>
              <FaTimes />
            </button>
          </>
        )}
      </nav>

      <button className="nav-btn" onClick={toggleNav}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

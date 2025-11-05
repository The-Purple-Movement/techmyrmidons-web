import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { id } = useParams();
  const location = useLocation();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("nav_popout");
    const body = document.querySelector("body");
    body.classList.toggle("inactive");
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="/assets/tm-logo.png"
          className="Navbar_image"
          alt="logo"
        ></img>
      </Link>
      <nav ref={navRef} id="ll">
        {location.pathname === "/" ? (
          <>
            <a href="#cards" onClick={showNavBar}>
              Domains
            </a>
            <Link to="/contribute" onClick={showNavBar}>
              Contribute
            </Link>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        ) : location.pathname === "/contribute" ? (
          <>
            <Link to="/" onClick={showNavBar}>
              Home
            </Link>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        ) : (
          <>
            <a href="#topics" onClick={showNavBar}>
              Tools
            </a>
            {id === "ai" ? (
              <a href="#categories" onClick={showNavBar}>
                Categories
              </a>
            ) : null}
            <a href="#blogs" onClick={showNavBar}>
              Blogs
            </a>
            <a href="#people" onClick={showNavBar}>
              People
            </a>
            <Link to="/contribute" onClick={showNavBar}>
              Contribute
            </Link>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        )}
      </nav>
      <button className="nav-btn">
        <FaBars onClick={showNavBar} />
      </button>
    </header>
  );
}

export default Navbar;

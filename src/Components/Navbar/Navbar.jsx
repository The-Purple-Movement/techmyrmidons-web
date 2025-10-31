import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  const { id } = useParams();
  const location = useLocation();
  const navRef = useRef();
  const isHome = location.pathname === "/";

  const showNavBar = () => {
    navRef.current.classList.toggle("nav_popout");
    const body = document.querySelector("body");
    body.classList.toggle("inactive");
  };

  return (
    <header className="header">
      <Link to="/">
        <img src="/assets/tm-logo.png" className="Navbar_image" alt="logo" />
      </Link>

      {/* keep nav for other links (mobile, tools, blogs, etc.) */}
      <nav ref={navRef} id="ll">
        {isHome ? (
          <>
            {/* Removed Domains from here */}
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        ) : (
          <>
            <a href="#topics" onClick={showNavBar}>Tools</a>
            {id === "ai" ? (
              <a href="#categories" onClick={showNavBar}>Categories</a>
            ) : null}
            <a href="#blogs" onClick={showNavBar}>Blogs</a>
            <a href="#people" onClick={showNavBar}>People</a>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        )}
      </nav>

      {/* Right side: Domains (plain text link), toggle, hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {isHome && <a href="#cards">Domains</a>}
        <ThemeToggle />
        <button className="nav-btn">
          <FaBars onClick={showNavBar} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

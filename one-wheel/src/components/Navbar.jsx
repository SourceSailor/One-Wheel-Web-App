import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  function closeMobileMenu() {
    setClick(false);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x04mNcv_Q2jP_hF69uzNeTzk8yshNaP2DtCklySfaw&s"
              alt=""
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/learn-more"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Learn More
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

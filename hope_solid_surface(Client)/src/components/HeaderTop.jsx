import React from "react";
import "../styles/Navbar.css";

function HeaderTop() {
  const toggleClick = () => {
    const NavData = document.querySelector(".mobile-nav");
    NavData.classList.toggle("active");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="toggle-button" onClick={toggleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className="mobile-nav">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/Our-Company">OUR COMPANY</a>
          </li>
          <div className="dropdown">
            <button className="dropbtn">SOLID SURFACES</button>
            <i className="bi bi-chevron-down" style={{ color: "#fff" }}></i>
            <div className="dropdown-content">
              <a href="/SolidSurfaces/commercials">COMMERCIAL</a>
              <a href="/SolidSurfaces/residentals">RESIDENTIAL</a>
              <a href="/SolidSurfaces/gallery">GALLERY</a>
            </div>
          </div>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>

        <ul className="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/Our-Company">OUR COMPANY</a>
          </li>
          <div className="dropdown">
            <button className="dropbtn">SOLID SURFACES</button>
            <i className="bi bi-chevron-down" style={{ color: "#fff" }}></i>
            <div className="dropdown-content">
              <a href="/SolidSurfaces/commercials">COMMERCIAL</a>
              <a href="/SolidSurfaces/residentals">RESIDENTIAL</a>
              <a href="/SolidSurfaces/gallery">GALLERY</a>
            </div>
          </div>
          <li>
            <a href="/contact">CONTACT US</a>
          </li>
        </ul>
        <div className="social-menu">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </nav>
    </>
  );
}

export default HeaderTop;

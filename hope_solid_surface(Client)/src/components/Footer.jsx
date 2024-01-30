import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="first">
          <ul className="footer-menu">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/Our-Company">OUR COMPANY</a>
            </li>
            <li>
              <a href="/SolidSurfaces/commercials">Solid Surface</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="second">
          <div className="logo">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
        <div className="third">
          <h2>Office Address</h2>
          <p>GF-7, Yogeshwar Complex, Sola Bridge, Ahmedabad-380061</p>
          <i className="bi bi-telephone-fill">
            <a href="tel:+919974358141">+91-9974358141</a>
          </i>
          <i className="bi bi-envelope-fill">
            <a href="mailto:motiram.tholiya@gmail.com.com">
              MOTIRAM.THOLIYA@GMAIL.COM
            </a>
          </i>
        </div>
        <div className="fourth">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </footer>
    </>
  );
}

export default Footer;

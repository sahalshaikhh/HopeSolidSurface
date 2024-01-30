import React from "react";
import HeaderTop from "../components/HeaderTop";
import Footer from "../components/Footer";
import "../styles/OurCompany.css";

function OurCompany() {
  return (
    <>
      <main className="hero">
        <img src="/images/about-us-hero.jpg" alt="" />
        <div className="hero-txt">
          <p>
            <a href="/">
              <i className="bi bi-house-fill"></i>
            </a>{" "}
            &#10095;&#10095; Our Company
          </p>
        </div>
      </main>
      <section className="about-us">
        <p data-aos="fade-left">
          We are Ahmedabad (Gujarat) based established concern with the name of
          "HopeSolidSUrface.", are engaged in manufacturing and trading,
          distributing, wholesaling and supplying a qualitative range of
          Modified Acrylic Solid Surface, Decorative Wash Basins in the name of
          "HopeSolidSUrface"
        </p>
        <p data-aos="fade-right">
          HopeSolidSUrface crafted from a unique blend of modified acrylic
          resins and natural materials so that sheets can be cut shaped and
          formed into a boundless range of designs. These modified acrylic solid
          surfaces can be fabricated and installed in both residential and
          commercial applications.
        </p>
        <p data-aos="fade-left">
          Modified acrylic solid surface is a non-porous low-maintenance counter
          top surface. It can mimic the appearance of stone and other naturally
          occurring materials and can be joined invisibly by a trained
          craftsman. The manufactured solid surface sheet form fabrication into
          finished counter tops. Modified Acrylic Solid surface can also be cast
          into a variety of shapes including sinks, shower panels and bathtubs.
          The various colors and design flexibility are the key factors when
          choosing solid surfaces over natural stone.
        </p>
        <p data-aos="fade-right">
          In residential application, modified acrylic solid surface can be used
          as kitchen counter tops, bathroom vanity tops, and shower and tub
          surrounds. A major appeal of solid surface is its seamless nature and
          finished surface. Modified acrylic solid surface sinks can be joined
          to the counter top surface with no gaps which eliminates areas for
          water to collect and bacteria to grow.
        </p>
      </section>
      <section className="quality">
        <h2 data-aos="fade-up-right">
          A HIGH-TECH MATERIALS COMPANY THAT PROTECTS THE VALUES OF HUMANITY AND
          THE ENVIRONMENT
        </h2>
        <p data-aos="fade-up-right">
          By creating the best solutions through ceaseless technological
          innovation, HopeSolidSUrface provides greater values and a cleaner
          environment.
        </p>
        <div className="quality-material">
          <div className="values" data-aos="zoom-in-right">
            <h2>Values of Humanity and the Environment</h2>
            <p>
              HopeSolidSUrface strives to improve the quality of life in all
              aspects of human society and participates actively to preserve the
              environment, therefore making our lives collectively healthier and
              wealthier.
            </p>
          </div>
          <div className="material" data-aos="zoom-in-left">
            <h2>A high-tech Materials Company</h2>
            <p>
              With expertise gathered after many years of experience and
              achieved through ceaseless challenges, HopeSolidSurface provides
              differentiated high-quality materials that exude creativity and
              passion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCompany;

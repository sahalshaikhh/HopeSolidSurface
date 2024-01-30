import React, { useEffect } from "react";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("myslides");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 9000);
    }
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="../src/index.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
          />
          <title>HopeSolidSUrface - Home</title>
        </head>
        <body>
          <main>
            <div className="hero-1 myslides">
              <img src="/images/hero-img-1.jpg" alt="" />
              <div className="hero-text-1 animate__animated animate__backInRight animate__delay-1s">
                <h2 className="animate__animated animate__backInDown animate__delay-2s">
                  Stunningly Elegant &<br />
                  Exceedingly Inspiring.....
                </h2>
              </div>
            </div>
            <div className="hero-2 myslides">
              <img src="/images/hero-img-2 (3).jpg" alt="" />
              <div className="hero-text-2 animate__animated animate__backInRight animate__delay-1s">
                <h2 className="animate__animated animate__backInDown animate__delay-2s">
                  Comfort Innovation & Style
                  <br />
                  For Luxurious Living.....
                </h2>
              </div>
            </div>
            <div className="hero-3 myslides">
              <img src="/images/hero-img-3 (2).jpg" alt="" />
              <div className="hero-text-3 animate__animated animate__backInRight animate__delay-1s">
                <h2 className="animate__animated animate__backInDown animate__delay-2s">
                  Innovative Design &<br />
                  Everyday Unusual New Colors.....
                </h2>
              </div>
            </div>
          </main>
          <section className="about-us-section">
            <h2>ABOUT US</h2>
            <div className="about-us-container">
              <div className="left aos-init aos-animate" data-Aos="fade-top">
                <p>
                  Presenting <b>HopeSolidSurface</b> Crafted from a unique blend
                  of modified acrylic resins and natural materials so that
                  sheets can be cut shaped and formed into a boundless range of
                  designs.
                </p>
              </div>
              <div
                className="right aos-init aos-animate"
                data-aos="fade-bottom"
              >
                <p>
                  These modifed acrylic solid surface can be fabricated and
                  installed in both residential and commercial applications.
                </p>
                <p>
                  Solid surface is a non-porous low-maintenance counter top
                  surface. It can mimic the appearance of stone and other
                  naturally occurring materials and can be joined invisibly by a
                  trained craftsman. Typically manufactured in sheet From...
                </p>
              </div>
            </div>
          </section>
          <section className="automate">
            <div className="automate-1">
              <h2 data-target="20" className="counter">
                20
              </h2>
              <h3>
                YEARS OF
                <br />
                EXPERIENCE
              </h3>
            </div>
            <div className="automate-2">
              <h2 data-target="350" className="counter">
                350
              </h2>
              <h3>
                COMPLETED
                <br />
                PROJECTS
              </h3>
            </div>
            <div className="automate-3">
              <h2 className="counter" data-target="20">
                20
              </h2>
              <h3>
                TEAM
                <br />
                MEMBERS
              </h3>
            </div>
            <div className="automate-4">
              <h2 data-target="825" className="counter">
                825
              </h2>
              <h3>
                HAPPY
                <br />
                CLIENTS
              </h3>
            </div>
          </section>
          <section className="surface">
            <div
              className="surface-txt aos-init aos-animate"
              data-aos="fade-right"
            >
              <h1>SOLID SURFACES</h1>
              <p>
                Solid surface is a non-porous Low-Maintenance Counter top
                Surface
              </p>
              <div className="btn">
                <a href="/html/our-company">View More</a>
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
            <div className="surface-img">
              <img src="/images/surface-1.png" alt="" />
            </div>
          </section>
          <section className="features-benefits">
            <h2>FEATURES & BENEFITS</h2>
            <div className="container">
              <div className="feature-1">
                <figure>
                  <img src="/images/easy-clean.png" alt="" />
                </figure>
                <figcaption>Easy to Clean</figcaption>
              </div>
              <div className="feature-2">
                <figure>
                  <img src="/images/durable.png" alt="" />
                </figure>
                <figcaption>Durable</figcaption>
              </div>
              <div className="feature-3">
                <figure>
                  <img src="/images/nonporous.png" alt="" />
                </figure>
                <figcaption>Nonporous</figcaption>
              </div>
              <div className="feature-4">
                <figure>
                  <img src="/images/repairable.png" alt="" />
                </figure>
                <figcaption>Repairable</figcaption>
              </div>
              <div className="feature-5">
                <figure>
                  <img src="/images/seamless.png" alt="" />
                </figure>
                <figcaption>Seamless</figcaption>
              </div>
              <div className="feature-6">
                <figure>
                  <img src="/images/tough.png" alt="" />
                </figure>
                <figcaption>Tough</figcaption>
              </div>
              <div className="feature-7">
                <figure>
                  <img src="/images/anti-bacterial.png" alt="" />
                </figure>
                <figcaption>Anti-Bacterial & Anti-Fungal</figcaption>
              </div>
              <div className="feature-8">
                <figure>
                  <img src="/images/eco-friendly.png" alt="" />
                </figure>
                <figcaption>Eco-Friendly</figcaption>
              </div>
            </div>
            <div className="pdf">
              <div className="pdf-img">
                <img src="/images/features-img-2.png" alt="" />
              </div>
            </div>
            <div className="btn-2">
              <i className="bi bi-file-earmark-pdf"></i>
              <a
                href="../../images/HSS.pdf"
                download="Hope Solid Surface Catalogue"
              >
                DOWNLOAD BROCHURE
              </a>
            </div>
          </section>
          <section className="colors">
            <h2>COLORS AND PATTERN</h2>
            <button className="pre-btn">
              <span>&#10094;</span>
            </button>
            <button className="nxt-btn">
              <span>&#10095;</span>
            </button>
            <div className="colors-container">
              <div className="color-1">
                <figure>
                  <img src="/images/pg-302.jpg" alt="" />
                </figure>
                <figcaption>Black Pearl PG-302</figcaption>
              </div>
              <div className="color-2">
                <figure>
                  <img src="/images/pg-401.jpg" alt="" />
                </figure>
                <figcaption>Fost Land PG-401</figcaption>
              </div>
              <div className="color-3">
                <figure>
                  <img src="/images/pg-402.jpg" alt="" />
                </figure>
                <figcaption>White Pepper PG-402</figcaption>
              </div>
              <div className="color-4">
                <figure>
                  <img src="/images/pg-403.jpg" alt="" />
                </figure>
                <figcaption>Coral Sand PG-403</figcaption>
              </div>
              <div className="color-5">
                <figure>
                  <img src="/images/pg-405.jpg" alt="" />
                </figure>
                <figcaption>Star Dust PG-405</figcaption>
              </div>
              <div className="color-6">
                <figure>
                  <img src="/images/pg-406.jpg" alt="" />
                </figure>
                <figcaption>Black Pebble PG-406</figcaption>
              </div>
              <div className="color-7">
                <figure>
                  <img src="/images/pp-1.jpg" alt="" />
                </figure>
                <figcaption>ivory Pearl PP-1</figcaption>
              </div>
              <div className="color-8">
                <figure>
                  <img src="/images/pp-2.jpg" alt="" />
                </figure>
                <figcaption>Black Pearl PP-2</figcaption>
              </div>
              <div className="color-9">
                <figure>
                  <img src="/images/pp-3.jpg" alt="" />
                </figure>
                <figcaption>Brown Pearl PP-3</figcaption>
              </div>
              <div className="color-10">
                <figure>
                  <img src="/images/pp-4.jpg" alt="" />
                </figure>
                <figcaption>White Pearl PP-4</figcaption>
              </div>
              <div className="color-11">
                <figure>
                  <img src="/images/pp-5.jpg" alt="" />
                </figure>
                <figcaption>Maroon Pearl PP-5</figcaption>
              </div>
              <div className="color-12">
                <figure>
                  <img src="/images/pp-6.jpg" alt="" />
                </figure>
                <figcaption>Blue Pearl PP-6</figcaption>
              </div>
              <div className="color-13">
                <figure>
                  <img src="/images/pq-501.jpg" alt="" />
                </figure>
                <figcaption>Mojo Mojo PQ-501</figcaption>
              </div>
              <div className="color-14">
                <figure>
                  <img src="/images/pq-502.jpg" alt="" />
                </figure>
                <figcaption>Hazel Nut PQ-502</figcaption>
              </div>
              <div className="color-15">
                <figure>
                  <img src="/images/pq-503.jpg" alt="" />
                </figure>
                <figcaption>Terra Cota PQ-503</figcaption>
              </div>
              <div className="color-16">
                <figure>
                  <img src="/images/ps-101-2.png" alt="" />
                </figure>
                <figcaption>Super White PS-101</figcaption>
              </div>
              <div className="color-17">
                <figure>
                  <img src="/images/ps-102-3.png" alt="" />
                </figure>
                <figcaption>Snow White PS-102</figcaption>
              </div>
              <div className="color-18">
                <figure>
                  <img src="/images/ps-103.jpg" alt="" />
                </figure>
                <figcaption>Fossil Beige PS-103</figcaption>
              </div>
              <div className="color-19">
                <figure>
                  <img src="/images/ps-104.jpg" alt="" />
                </figure>
                <figcaption>Jas Green PS-104</figcaption>
              </div>
              <div className="color-20">
                <figure>
                  <img src="/images/ps-105.jpg" alt="" />
                </figure>
                <figcaption>Banana PS-105</figcaption>
              </div>
              <div className="color-21">
                <figure>
                  <img src="/images/ps-106.jpg" alt="" />
                </figure>
                <figcaption>Carrot PS-106</figcaption>
              </div>
              <div className="color-22">
                <figure>
                  <img src="/images/ps-108.jpg" alt="" />
                </figure>
                <figcaption>Lapiz PS-108</figcaption>
              </div>
              <div className="color-23">
                <figure>
                  <img src="/images/ps-109.jpg" alt="" />
                </figure>
                <figcaption>Coffe BEan PS-109</figcaption>
              </div>
              <div className="color-24">
                <figure>
                  <img src="/images/ps-110.jpg" alt="" />
                </figure>
                <figcaption>Solid Black PS-110</figcaption>
              </div>
              <div className="color-25">
                <figure>
                  <img src="/images/pt-201.jpg" alt="" />
                </figure>
                <figcaption>Trans Orange PT-201</figcaption>
              </div>
              <div className="color-26">
                <figure>
                  <img src="/images/pt-202.jpg" alt="" />
                </figure>
                <figcaption>Trans White PT-202</figcaption>
              </div>
              <div className="color-27">
                <figure>
                  <img src="/images/pt-203.jpg" alt="" />
                </figure>
                <figcaption>Trans Green PT-203</figcaption>
              </div>
              <div className="color-28">
                <figure>
                  <img src="/images/pt-204.jpg" alt="" />
                </figure>
                <figcaption>Trans Sea Blue PT-204</figcaption>
              </div>
              <div className="color-29">
                <figure>
                  <img src="/images/pt-205.jpg" alt="" />
                </figure>
                <figcaption>Trans Red PT-205</figcaption>
              </div>
            </div>
          </section>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </html>
    </>
  );
}

export default Home;

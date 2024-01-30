import React from "react";
import HeaderTop from "../../components/HeaderTop";
import Footer from "../../components/Footer";
import "../../styles/residental.css";

function Residental() {
  return (
    <>
      <main className="hero">
        <img src="/images/residential.jpg" alt="" />
        <h2>
          HopeSolidSUrface <br /> <span>Gallary</span>
        </h2>
      </main>

      <section className="section-1">
        <h2>RESIDENTIAL USE</h2>
        <p>
          HopeSolidSurface® Solid Surfaces is a hygienic material that is
          resistant to moisture, pollutants and bacteria, making it easy to
          clean and maintain. Combined with it’s scratch and stain resistance,
          HopeSolidSurface® is ideal for all surface applications in your
          kitchen, bathroom, or elsewhere in the home.
        </p>
      </section>
      <section className="gallary">
        <h2>KITCHEN WITH HopeSolidSurface®</h2>
        <p>
          HopeSolidSurface® is mainly used for kitchen benchtops because it is
          hygienic, stain-resistant and easy to clean. With periodic
          maintenance, it maintains original beauty for years and stain can be
          removed easily with a damp cloth. Also, it is certified by NSF 51,
          which is for food preparation area.
        </p>
        <div className="gallary-container">
          <div className="product-1" data-aos="fade-right">
            <img
              src="/images/residential-1.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-2" data-aos="fade-right">
            <img
              src="/images/residential-2.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-3" data-aos="fade-right">
            <img
              src="/images/residential-3.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-4" data-aos="fade-right">
            <img
              src="/images/residential-4.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-5" data-aos="fade-left">
            <img
              src="/images/residential-5.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-6" data-aos="fade-left">
            <img
              src="/images/residential-7.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-7" data-aos="fade-left">
            <img
              src="/images/residential-7.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-8" data-aos="fade-left">
            <img
              src="/images/residential-8.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-9" data-aos="fade-right">
            <img
              src="/images/residential-9.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-10" data-aos="fade-right">
            <img
              src="/images/residential-10.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-11" data-aos="fade-right">
            <img
              src="/images/residential-11.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
          <div className="product-12" data-aos="fade-right">
            <img
              src="/images/residential-12.jpg"
              alt=""
              onclick="fullView(this.src) "
            />
          </div>
        </div>
        <div id="fullimageview">
          <img id="FullImage" />
          <span id="closeButton" onclick="closeFullView()">
            &times;
          </span>
        </div>
      </section>
      <section className="gallary-2">
        <h2>BATHROOM AND OTHERS WITH HOPESOLIDSURFACE®</h2>
        <p>
          You can keep bathroom clean for long time thanks to waterproof feature
          of HOPESOLIDSURFACE®. We offer various type of sinks and basins which
          add more beauty to your bathroom.
        </p>
        <div className="gallary2-container">
          <div className="product-1" data-aos="fade-right">
            <img
              src="/images/res-gallary-1.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-2" data-aos="fade-right">
            <img
              src="/images/res-gallary-2.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-3" data-aos="fade-right">
            <img
              src="/images/res-gallary-3.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-4" data-aos="fade-right">
            <img
              src="/images/res-gallary-4.png"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-5" data-aos="fade-left">
            <img
              src="/images/res-gallary-5.png"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-6" data-aos="fade-left">
            <img
              src="/images/res-gallary-6.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-7" data-aos="fade-left">
            <img
              src="/images/res-gallary-7.png"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-8" data-aos="fade-left">
            <img
              src="/images/res-gallary-8.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-9" data-aos="fade-right">
            <img
              src="/images/res-gallary-9.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-10" data-aos="fade-right">
            <img
              src="/images/res-gallary-10.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-11" data-aos="fade-right">
            <img
              src="/images/res-gallary-11.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
          <div className="product-12" data-aos="fade-right">
            <img
              src="/images/res-gallary-12.jpg"
              alt=""
              onclick="fullView2(this.src) "
            />
          </div>
        </div>
        <div id="fullimageview2">
          <img id="FullImage2" />
          <span id="closeButton2" onclick="closeFullView2()">
            &times;
          </span>
        </div>
      </section>
    </>
  );
}

export default Residental;

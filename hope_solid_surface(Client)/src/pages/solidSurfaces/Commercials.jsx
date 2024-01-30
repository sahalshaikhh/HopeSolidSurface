import React from "react";
import HeaderTop from "../../components/HeaderTop";
import Footer from "../../components/Footer";
import "../../styles/commercials.css";

function Commercials() {
  return (
    <>
      <main className="hero">
        <img src="/images/commercial.jpg" alt="" />
        <h2>
          HopeSolidSUrface <br /> <span>Gallary</span>
        </h2>
      </main>
      <section className="section-1">
        <h2>COMMERCIAL USE</h2>
        <p>
          The unlimited design flexibility of HopeSolidSurface® Solid Surfaces
          enables you to create a beautiful and durable aesthetic in any
          commercial setting, be it a hospital, bank, restaurant, hotel or
          office space.
        </p>
      </section>
      <section className="gallary">
        <h2>FACADE AND WALL CLADDING WITH HopeSolidSurface®</h2>
        <p>
          HopeSolidSurface® can be used all over the world not only for offices
          and shops but for many other applications including facades and wall
          cladding. Wherever you want to install, that is what HopeSolidSurface®
          is for.
        </p>
        <div className="gallary-container">
          <div className="product-1" data-aos="fade-right">
            <img
              src="/images/product-1.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-2" data-aos="fade-right">
            <img
              src="/images/product-2.png"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-3" data-aos="fade-right">
            <img
              src="/images/product-3.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-4" data-aos="fade-right">
            <img
              src="/images/product-4.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-5" data-aos="fade-left">
            <img
              src="/images/product-5.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-6" data-aos="fade-left">
            <img
              src="/images/product-6.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-7" data-aos="fade-left">
            <img
              src="/images/product-7.png"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-8" data-aos="fade-left">
            <img
              src="/images/product-8.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-9" data-aos="fade-right">
            <img
              src="/images/product-9.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-10" data-aos="fade-right">
            <img
              src="/images/product-10.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-11" data-aos="fade-right">
            <img
              src="/images/product-11.jpg"
              alt=""
              onclick="fullView(this.src)"
            />
          </div>
          <div className="product-12" data-aos="fade-right">
            <img
              src="/images/product-12.jpg"
              alt=""
              onclick="fullView(this.src)"
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
      <section className="office-gallary">
        <h2>OFFICES & HEALTHCARE WITH HopeSolidSurface®</h2>
        <p>
          HopeSolidSurface® makes better working environment with clean
          atmosphere. Premium and seamless design of HopesolidSurface® is ideal
          for meeting room, desk, any furniture that needs in offices and
          healthcare.
        </p>
        <div className="office-gallary-container">
          <div className="office-1" data-aos="flip-right">
            <img
              src="/images/office-1.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-2" data-aos="flip-right">
            <img
              src="/images/office-2.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-3" data-aos="flip-right">
            <img
              src="/images/office-3.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-4" data-aos="flip-right">
            <img
              src="/images/office-4.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-5" data-aos="flip-left">
            <img
              src="/images/office-5.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-6" data-aos="flip-left">
            <img
              src="/images/office-6.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-7" data-aos="flip-left">
            <img
              src="/images/office-7.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-8" data-aos="flip-left">
            <img
              src="/images/office-8.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-9" data-aos="flip-right">
            <img
              src="/images/office-9.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-10" data-aos="flip-right">
            <img
              src="/images/office-10.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-11" data-aos="flip-right">
            <img
              src="/images/office-11.jpg"
              alt=""
              onclick="fullView2(this.src)"
            />
          </div>
          <div className="office-12" data-aos="flip-right">
            <img
              src="/images/office-12.jpg"
              alt=""
              onclick="fullView2(this.src)"
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

export default Commercials;

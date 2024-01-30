import React from "react";
import HeaderTop from "../../components/HeaderTop";
import Footer from "../../components/Footer";
import "../../styles/gallery.css";

function Gallery() {
  return (
    <>
      <h2 className="title">
        We Have a Range of Categories of our products. Here Are some of the
        categories By HopeSolidSUrface.
      </h2>
      <section className="categories">
        <h3>HopeSolidSUrface Categories</h3>
        <div className="categories-container">
          <div className="category category-1">
            <a href="/html/solidsurface">
              <figure>
                <img src="/images/solid-title-2.jpg" alt="" />
              </figure>
              <figcaption>Hope Solidsurface</figcaption>
            </a>
          </div>
          <div className="category category-2">
            <a href="/html/grenaite">
              <figure>
                <img src="/images/granite-title.jpg" alt="" />
              </figure>
              <figcaption>Hope Grenaite</figcaption>
            </a>
          </div>
          <div className="category category-3">
            <a href="/html/concrete">
              <figure>
                <img src="/images/concrete-title.jpg" alt="" />
              </figure>
              <figcaption>Hope Concrete</figcaption>
            </a>
          </div>
          <div className="category category-4">
            <a href="/html/marmo">
              <figure>
                <img src="/images/marmo-title.jpg" alt="" />
              </figure>
              <figcaption>Hope Marmo</figcaption>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;

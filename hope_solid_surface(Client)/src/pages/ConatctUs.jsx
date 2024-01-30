import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData
      );

      console.log("Server Response:", response.data);
      // Add any logic for successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Add error handling logic
    }
  };

  return (
    <>
      {/* Your existing JSX code for the contact page */}
      <main class="hero">
        <img src="/images/contact-us.jpg" alt="" />
        <div class="hero-txt">
          <p>
            <a href="/">
              <i class="bi bi-house-fill"></i>
            </a>{" "}
            &#10095;&#10095; Contact Us
          </p>
        </div>
      </main>

      <section class="section-1">
        <h2>HopeSolidSUrface</h2>
        <div class="ad-1">
          <h2>Ahmedabad</h2>
          <h4>
            {" "}
            <i class="bi bi-geo-alt-fill"></i> OFFICE ADDRESS:
          </h4>
          <p>GF-7, Yogeshwar Complex, Sola Bridge, Ahmedabad-380061</p>
          <p>
            {" "}
            <i class="bi bi-phone-fill"></i> PHONE:
          </p>
          <a href="tel:+919974358141">+91-9974358141</a>
        </div>
      </section>

      <section className="form">
        <h2>GET IN TOUCH</h2>
        <form onSubmit={handleSubmit} id="form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.7541395083995!2d72.52000035612598!3d23.062651562701408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83535d8a5609%3A0xdb5078748b5fb4e5!2sYogeshwar%20Complex!5e0!3m2!1sen!2sin!4v1656945028047!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default ContactUs;

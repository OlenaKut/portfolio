import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contact.css";


const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="contact-section container-fluid">
        <h1 className="contact-section-h1 m-3 mb-lg-5 mb-4 text-muted">
          Let's get in touch!
        </h1>

        <h2 className="contact-h2 m-3">Phone number</h2>
        <p className="contact m-3 text-info">+46760575455</p>
        <h2 class="contact-h2 m-3">Email</h2>
        <a
          className="contact m-3 text-info"
          href="mailto:cundrochka@gmail.com"
          title="Front-end developer - Olena Kutasevych - Mail me"
          target="_blank"
          rel="noopener noreferrer"
        >
          cundrochka@gmail.com
        </a>
        <h2 className="contact-h2 m-3">Facebook</h2>
        <a
          className="contact m-3 text-info"
          href="https://www.facebook.com/cundrochka"
          title="Front-end developer - Olena Kutasevych - Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olena Kutasevych
        </a>
        <h2 className="contact-h2 m-3">LinkedIn</h2>
        <a
          className="contact m-3 text-info"
          href="https://www.linkedin.com/in/olena-kutasevych-b0b99a24b/"
          title="Front-end developer - Olena Kutasevych - LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Olena Kutasevych
        </a>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;

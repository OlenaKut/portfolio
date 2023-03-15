import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="m-lg-5 m-3">
      <div className="contact-box d-md-flex d-block text-center text-md-start justify-content-between mb-3 mb-lg-5">
        <div>
          <h1 className="footer-h1 mb-3">Work Inquiry</h1>
          <p className="footer-p">
            {" "}
            Let's work together and we can be one of the best teams{" "}
          </p>
        </div>
        <div className="footer-contact-button">
          <a
            rel="noopener noreferrer"
            href="/contact.html"
            className="btn btn-branding-outline p-3 p-sm-4 shadow footer-btn-contact-me"
            title="Contact Olena"
          >
            Contact me
          </a>
        </div>
      </div>
      <div className="media text-center">
        <a
          className="contact-footer text-decoration-none text-center"
          href="mailto:cundrochka@gmail.com"
          title="Mail Olena"
          target="_blank"
          rel="noopener noreferrer"
        >
          cundrochka@gmail.com
        </a>
        <div className="social-media m-3">
          <a
            href="https://github.com/OlenaKut"
            target="_blank"
            title="GitHub Profile"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github m-2 social-media-link"></i>
          </a>
          <a
            href="https://www.facebook.com/cundrochka"
            target="_blank"
            title="Facebook Profile"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook m-2 social-media-link"></i>
          </a>
          <a
            href="https://www.instagram.com/helenkutasevych/"
            target="_blank"
            title="Instagram Profile"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram m-2 social-media-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import GitHub from "../pictures/GitHub.png";
import Facebook_icon from "../pictures/Facebook_icon.png";
import linkedin from "../pictures/linkedin.png";
import Instagram_icon from "../pictures/Instagram_icon.webp";
import "./Footer.css";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <div className="m-lg-5 m-3">
      <div className="contact-box d-md-flex d-block text-center text-md-start justify-content-between mb-2 mb-lg-4">
        <div>
          <h1 className="footer-h1 mb-3">Work Inquiry</h1>
          <p className="footer-p">
            {" "}
            Let's work together and we can be one of the best teams{" "}
          </p>
        </div>
        <div className="footer-contact-button">
          <LinkContainer to="/contact">
            <a
              rel="noopener noreferrer"
              href="/"
              className="btn shadow footer-btn-contact-me"
              title="Contact Olena"
            >
              Contact me
            </a>
          </LinkContainer>
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
        <div className="social-media m-4">
          <a
            href="https://github.com/OlenaKut"
            target="_blank"
            title="GitHub Profile"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="m-3 social-media-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/olena-kutasevych-b0b99a24b/"
            target="_blank"
            title="LinkedIn Profile"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="m-3 social-media-link"
            />
          </a>
          <a
            href="https://www.facebook.com/cundrochka"
            target="_blank"
            title="Facebook Profile"
            rel="noopener noreferrer"
          >
            <img
              src={Facebook_icon}
              alt="Facebook"
              className="m-3 social-media-link"
            />
          </a>

          <a
            href="https://www.instagram.com/helenkutasevych/"
            target="_blank"
            title="Instagram Profile"
            rel="noopener noreferrer"
          >
            <img
              src={Instagram_icon}
              alt="Instagram"
              className="m-3 social-media-link"
            />
          </a>
        </div>
      </div>
      <h6 class="text-center">
        ✌️ This website was coded by Olena Kutasevych, and is
        <a
          href="https://github.com/OlenaKut/portfolio"
          target="_blank"
          title="GitHub Profile"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced
        </a>
      </h6>
    </div>
  );
};

export default Footer;

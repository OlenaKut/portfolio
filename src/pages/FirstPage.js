import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import UA from "../pictures/UA.png";
import { LinkContainer } from "react-router-bootstrap";

const FirstPage = () => {
  return (
    <div>
      <Header />
      <div className="hero shadow-sm mb-5">
        <h5>👋 Hello, I am</h5>
        <h1>Olena Kutasevych</h1>
        <h3 className="mb-md-4 mb-1">
          Front-end developer, based in Sweden
          <img src={UA} alt="Ukraine" className="ua m-2" />
        </h3>
        <LinkContainer to="/contact">
          <button className="btn-branding" title="Contact Olena">
            Contact me
          </button>
        </LinkContainer>
        <LinkContainer to="/about">
          <button className="btn-branding" title="About Olena">
            About me
          </button>
        </LinkContainer>
      </div>
      <Main />
      <Footer />
    </div>
  );
};
export default FirstPage;

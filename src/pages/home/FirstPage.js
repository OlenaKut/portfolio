import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import UA from "../../pictures/UA.png";

const FirstPage = () => {
  return (
    <div className="App">
      <Header />
      <div className="hero shadow-sm mb-5">
        <h5>👋 Hello, I am</h5>
        <h1>Olena Kutasevych</h1>
        <h3 className="mb-md-4 mb-1">
          Front-end developer, based in Sweden
          <img src={UA} alt="Ukraine" className="ua m-2" />
        </h3>
        <button
          href="/contact.html"
          className="btn-branding"
          title="Contact Olena"
        >
          Contact me
        </button>
        <button href="/about.html" className="btn-branding" title="About Olena">
          About me
        </button>
      </div>
      <Main />
      <Footer />
    </div>
  );
};
export default FirstPage;

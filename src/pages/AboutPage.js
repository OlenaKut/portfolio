import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./About.css";
import UA from "../pictures/UA.png";
import Foto from "../pictures/foto.jpg";
import { LinkContainer } from "react-router-bootstrap";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="about-section container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-section-content p-0 px-lg-5">
              <h1 className="m-lg-4 m-2 about-section-h1 text-muted">
                Hi! I am Olena Kutasevych
              </h1>
              <h2 className="m-lg-4 m-2 about-section-h2">
                <img src={UA} alt="Ukraine" className="ua m-2" /> Front-end
                developer from Rivne, Ukraine
              </h2>
              <p className="text-muted m-lg-4 m-3">
                I'm a self-motivated Web Developer, multitasking, and
                hardworking to deliver on deadlines. I have learned a lot about
                React, Javascript, HTML, and CSS programming and realized that
                IT is exactly the field that I would like to further develop and
                work in. But if necessary I can also learn other programs and
                tools besides the ones I know now.
                <br />I would also like to add that I easily learn new things,
                am persistent, responsible, and always try to see things
                through. I find it easy to communicate with people and work in a
                team.
                <br />I am also interested in design. I used to work as a
                designer for a small magazine, and I also worked on designing
                logos and invitations for a wedding agency.
                <br />
                My biggest hobby is reading. I like to read fiction, especially
                fantasy. And I also really like to travel and discover new
                things for myself.
              </p>
              <LinkContainer to="/work">
                <button
                  className="btn btn-branding-outline p-3 ms-4 shadow"
                  title="Olena's Works"
                >
                  View my projects
                </button>
              </LinkContainer>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={Foto}
              alt="Foto Olena Kutasevych"
              className="foto w-75 img-fluid rounded-4 mt-5"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutPage;

import React from "react";
import "./SmallProjects.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Todo from "../pictures/todo.png";
import Counter from "../pictures/counter.png";
import Jokes from "../pictures/jokes.png";
import Register from "../pictures/register.png";
import User from "../pictures/user.png";
import Weather from "../pictures/weathre-sm.png";

const SmallProjects = () => {
  return (
    <div>
      <Container fluid className="m-auto text-center">
        <div className="small-projects mb-5">
          <h2 className="small-projects-title mb-4">Small projects</h2>
          <p className="small-projects-text">
            These are small projects that I made during my studies. That's how I
            studied various functions and possibilities{" "}
            <span className="text-info">
              JavaScript, React.js, HTML and CSS. And also API, React-Bootstrap,
              Bootstrap, Git, GitHub, React Router, Material UI, Semantic UI
            </span>{" "}
            and many other things.
          </p>
        </div>
        <Row className="d-inline-flex justify-content-center " xs="auto">
          <Col className="shadow rounded p-3 mb-3 mx-3">
            {" "}
            <img
              src={User}
              alt="User"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://magnificent-rolypoly-e04eea.netlify.app/"
              target="_blank"
              title="This is my app - https://magnificent-rolypoly-e04eea.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Show-users Project
              </button>
            </a>
          </Col>
          <Col className="shadow rounded p-3 mb-3 mx-3">
            {" "}
            <img
              src={Weather}
              alt="Weather"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://weather-hw-101-ok.netlify.app/"
              target="_blank"
              title="This is my app - https://weather-hw-101-ok.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Weather App with geolocation
              </button>
            </a>
          </Col>
          <Col className="shadow rounded p-3 mb-3 mx-3">
            {" "}
            <img
              src={Register}
              alt="Registeration"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://react-form-ok.netlify.app/"
              target="_blank"
              title="This is my app - https://react-form-ok.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Registration form
              </button>
            </a>
          </Col>
        </Row>
        <Row className="d-inline-flex justify-content-center" xs="auto">
          <Col className="shadow rounded p-3 mb-3 mx-3">
            <img
              src={Todo}
              alt="Todo"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://capable-taiyaki-030b2e.netlify.app/"
              target="_blank"
              title="This is my app - https://capable-taiyaki-030b2e.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Todo list
              </button>
            </a>
          </Col>
          <Col className="shadow rounded p-3 mb-3 mx-3">
            {" "}
            <img
              src={Counter}
              alt="Counter"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://glittering-rolypoly-19d5a6.netlify.app/"
              target="_blank"
              title="This is my app - https://glittering-rolypoly-19d5a6.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Connter with Semantic UI
              </button>
            </a>
          </Col>
          <Col className="shadow rounded py-5 p-2 mb-3 mx-3">
            {" "}
            <img
              src={Jokes}
              alt="Jokes"
              className="img-fluid rounded-3 small-projects-img d-block mb-3"
            />
            <a
              className="small-projects-link"
              href="https://joke-site-by-ok.netlify.app/"
              target="_blank"
              title="This is my app - https://joke-site-by-ok.netlify.app/"
              rel="noopener noreferrer"
            >
              <button class="btn btn-branding-outline p-sm-3 p-2 shadow">
                Jokes Project with API
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SmallProjects;

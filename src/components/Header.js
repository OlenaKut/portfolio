import React from "react";
import logo from "../pictures/logo.png";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="container-fluid sticky-top header shadow-sm">
      <div className="d-flex p-3 justify-content-between" sticky="top">
        <div className="d-flex">
          <img src={logo} alt="Logo-Olena-Kutasevych" className="logo" />
          <p className="logo-text mb-0 d-none d-md-block">Olena Kutasevych</p>
        </div>
        <Navbar bg="none" expand="md" className="mb-3 ">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link
                      href="#action1"
                      className="link mx-3"
                      title="Homepage"
                    >
                      Home
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/work">
                    <Nav.Link
                      href="#action1"
                      className="link mx-3"
                      title="Olena's Work"
                    >
                      Work
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link
                      href="#action2"
                      className="link mx-3"
                      title="About Olena"
                    >
                      About
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link
                      href="#action2"
                      className="link mx-3"
                      title="Contact Olena"
                    >
                      Contact
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;

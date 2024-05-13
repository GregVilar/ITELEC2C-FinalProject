import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand
          href="#home"
          style={{ marginRight: "10px", color: "white" }}
        >
          {" "}
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Romiamantic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link
              to="/"
              className="nav-link"
              style={{ color: "white", marginRight: "20px" }}
            >
              Home
            </Link>
            <Link
              to="/CreateRecipe"
              className="nav-link"
              style={{ color: "white", marginRight: "20px" }}
            >
              CreateRecipe
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;

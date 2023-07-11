import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="tranperent">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>NeNavbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => navigate("/add")}>Add Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

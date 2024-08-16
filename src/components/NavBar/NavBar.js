import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="py-4">
      <Container>
        <Link to="/">
          <img src={require("../../Assets/logo.png")} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={require("../../Assets/logo.png")} alt="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/contactUs">Contact Us</NavLink>
              <Button variant="primary" className="rounded-pill">
                HIRE US
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;

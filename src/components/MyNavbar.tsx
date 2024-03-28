import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Container fluid>
      <Row>
        <Navbar expand="lg" className="bg-body-secondary">
          <Container>
            <Navbar.Brand href="#home">Spaceflight</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
};

export default MyNavbar;

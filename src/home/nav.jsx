import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#1c3a63',
        color: 'white',
      }}
      className="fixed-top px-5 shadow-sm"
    >
      <Container fluid>
        <Navbar.Brand
          as={NavLink}
          to="/"
          style={{
            color: '#f0f8ff',
            fontWeight: 'bold',
          }}
        >
          WorkSpace
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ borderColor: '#f0f8ff' }} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 px-3 mx-5" navbarScroll>
            <Nav.Link as={NavLink} to="/" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/search" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              Work Spaces
            </Nav.Link>
            <Nav.Link href="#about" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              About
            </Nav.Link>
            <Nav.Link href="#contact" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/my-bookings" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              My Bookings
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="#login"
              style={{
                backgroundColor: '#4682b4',
                color: 'white',
                borderRadius: '5px',
                padding: '5px 15px',
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Login/Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

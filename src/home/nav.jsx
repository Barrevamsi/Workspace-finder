import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';  // Import Link from react-scroll
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { faHouseChimney , faHouseLaptop } from '@fortawesome/free-solid-svg-icons';  // Import the specific icon
import { faDAndD } from '@fortawesome/free-brands-svg-icons';
import Favicon from 'react-favicon';  // Import favicon component
import "./nav.css"

function NavScrollExample({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Update the authentication state
    navigate('/login'); // Redirect to the login page
  };

  return (
    <>
      {/* Favicon Component */}
      <Favicon url="your-favicon-url.ico" />

      <Navbar
        expand="lg"
        style={{
          backgroundColor: '#1c3a63',
          color: 'white',
        }}
        className="fixed-top px-5 shadow-sm"
      > <img 
      src="https://img.freepik.com/premium-vector/minimalist-table-with-computer-workspace-logo-design-vector-graphic-symbol-icon-sign-illustration_15473-10057.jpg?w=740" 
      alt="logo" 
      className="laptop-only-logo"
    />
    
        <Container fluid>
          <Navbar.Brand
            as={NavLink}
            to="/"
            style={{
              color: '#ffa500',
              fontWeight: 'bold',
            }}
          >
            
             
           
            {/* <FontAwesomeIcon icon={faDAndD} style={{fontSize:"200%", color:"orenge"}}/> */}
            WorkSpace
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ borderColor: '#f0f8ff' }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 px-4 mx-5" navbarScroll  >
              <Nav.Link as={NavLink} to="/" style={{ color: '#f0f8ff', fontWeight: '500'}}>
              <FontAwesomeIcon icon={faHouseChimney} style={{ marginRight: '2px',width:"20%" }} />
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/search" style={{ color: '#f0f8ff', fontWeight: '500' }}>
              {/* <FontAwesomeIcon icon={faHouseLaptop} style={{ marginRight: '2px',width:"20%" }} /> */}
                WorkSpaces
              </Nav.Link>
              {isAuthenticated && (
                <Nav.Link
                  as={NavLink}
                  to="/my-bookings"
                  style={{ color: '#f0f8ff', fontWeight: '500' }}
                >
                  My Bookings
                </Nav.Link>
              )}
              
              {/* Smooth Scroll Links */}
              <Nav.Link>
                <Link
                  to="about"  // The id of the About section
                  smooth={true}
                  duration={500}
                  style={{ color: '#f0f8ff', fontWeight: '500' }}
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="contact"  // The id of the Contact section
                  smooth={true}
                  duration={500} 
                  style={{ color: '#f0f8ff', fontWeight: '500'}}
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {isAuthenticated ? (
                <Nav.Link
                  onClick={handleLogout}
                  style={{
                    backgroundColor: '#4682b4',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '5px 15px',
                    fontWeight: '500',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to="/login"
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
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;

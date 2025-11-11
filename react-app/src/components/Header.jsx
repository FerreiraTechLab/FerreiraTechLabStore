import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="modern-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/img/logo.png"
            alt="Logo da Ferreira Tech Lab"
            className="brand-logo"
          />
          <span className="brand-text">Ferreira Tech Lab</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/symphony"
              className={location.pathname === '/symphony' ? 'active' : ''}
            >
              Symphony
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/horus"
              className={location.pathname === '/horus' ? 'active' : ''}
            >
              Horus
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projetos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/donates"
              className={location.pathname === '/donates' ? 'active' : ''}
            >
              Doações
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contato
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/rules"
              className={location.pathname === '/rules' ? 'active' : ''}
            >
              Envie seu App
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

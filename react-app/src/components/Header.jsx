import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="modern-navbar" expanded={expanded} onToggle={setExpanded}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
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
              onClick={handleNavClick}
            >
              Sobre
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/symphony"
              className={location.pathname === '/symphony' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Symphony
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/horus"
              className={location.pathname === '/horus' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Horus
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/microbotpy"
              className={location.pathname === '/microbotpy' ? 'active' : ''}
              onClick={handleNavClick}
            >
              MicroBotPy
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Projetos
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/donates"
              className={location.pathname === '/donates' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Doações
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={handleNavClick}
            >
              Contato
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/rules"
              className={location.pathname === '/rules' ? 'active' : ''}
              onClick={handleNavClick}
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

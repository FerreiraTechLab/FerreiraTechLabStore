import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="navbar-light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/assets/img/logo.png"
            alt="Logo da Ferreira Tech Lab"
            style={{ width: '40px' }}
          />
          <span className="ms-2 fw-bold">Ferreira Tech Lab</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Sobre</Nav.Link>
            <Nav.Link as={Link} to="/symphony">Symphony</Nav.Link>
            <Nav.Link as={Link} to="/horus">Horus</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projetos</Nav.Link>
            <Nav.Link as={Link} to="/donates">Doações</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
            <Nav.Link as={Link} to="/rules">Envie seu App</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

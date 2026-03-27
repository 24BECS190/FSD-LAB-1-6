import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand className="fw-bold text-primary">
          DEVPORTFOLIO
        </Navbar.Brand>

        <Nav className="ms-auto flex-row gap-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
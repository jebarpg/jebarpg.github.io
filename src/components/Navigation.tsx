import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light" fixed="top">
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#">Jeb Bradwell</Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#about" active>
              About <span className="visually-hidden">(current)</span>
            </Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

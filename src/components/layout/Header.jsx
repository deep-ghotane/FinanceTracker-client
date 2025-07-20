import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LuNotebookPen } from "react-icons/lu";
import { FaHouseUser } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      variant="dark"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/signup">
              <LuNotebookPen />
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              <FaHouseUser />
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              <LuLayoutDashboard />
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/transaction">
              <GrTransaction />
              Transaction
            </Nav.Link>
            <Nav.Link as={Link} to="/logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

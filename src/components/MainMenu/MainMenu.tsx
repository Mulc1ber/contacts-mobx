import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const MainMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <h1>Книга контактов</h1>
        </Link>
        <Nav className="me-auto gap-2">
          <NavLink
            to="/groups"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Группы
          </NavLink>
          <NavLink
            to="/favorit"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Избранное
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

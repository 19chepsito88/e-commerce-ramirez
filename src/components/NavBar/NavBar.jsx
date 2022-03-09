import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactComponent as ShoppingIcon } from "../Icons/shopping.svg";
import "./NavBar.css";

const NavBar = ({ menuItems }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commerce-Ramirez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => {
              return (
                <Nav.Link href="#features" key={item.id}>
                  {item.name}
                </Nav.Link>
              );
            })}
            <NavDropdown title="IA" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Algoritmos Geneticos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Optimizacion Cumulo de Particulas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Evolucion Diferencial
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="container-shopp-car">
            <ShoppingIcon width={30} height={30} fill="red" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

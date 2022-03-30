import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = ({ menuItems }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={'navbar-brand'} to="/"><img className="logo-store" src={require(`../Icons/store.png`)}/></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => {
              return (
                <NavLink to={item.path} key={item.id} className={({isActive})=>isActive?'nav-link active':'nav-link'} >
                  {item.name}
                </NavLink>
              );
            })}
          </Nav>
          <NavLink to='cart'>
          <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

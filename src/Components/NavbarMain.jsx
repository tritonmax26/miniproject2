import { Container ,Nav ,Navbar , NavDropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.jpg"

const NavbarMain = () => {
  return (
 <div>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>
          <img src= {logo}
              width="30"
              height="30"
              className="d-inline-flex align-top minilogo"
              >
          </img>
          Movies for Junkies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/movies" end>Classics</NavLink>
            <NavLink to="/searchmovie" end>Search Movie</NavLink>
            <NavLink to="/contact" end>Contact</NavLink>
            {/* <NavDropdown title="More Info" id="basic-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                bla bla bla
              </NavDropdown.Item>
              <NavDropdown.Item >Premium</NavDropdown.Item>                         
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
  )
}

export default NavbarMain

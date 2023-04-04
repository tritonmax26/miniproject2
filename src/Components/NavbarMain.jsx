import { Container ,Nav ,Navbar , NavDropdown} from 'react-bootstrap';

const NavbarMain = () => {
  return (
 <div>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand >Main Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Sign Up</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
  )
}

export default NavbarMain

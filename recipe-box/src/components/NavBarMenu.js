import React from 'react'
import{Nav, Navbar, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavBarMenu() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Recipe Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-home" to="/">Home</NavLink>
            <NavLink className="nav-recipes" to="/recipe">My Recipes</NavLink>
            <NavLink className="nav-recipes" to="/create">Create Recipe</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarMenu
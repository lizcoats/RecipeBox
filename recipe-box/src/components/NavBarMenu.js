import React,{useContext} from 'react'
import{Nav, Navbar, Container,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function NavBarMenu() {
  let {user,logoutUser} = useContext(AuthContext)
  return (
    <div>
      
      
      <Navbar bg="light" variant="light" expand="lg">
      <Container className='nav-banner'>
        <Navbar.Brand href="#home">My Recipe Box</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="nav-home" to="/">Home</NavLink>
   
            {/* <NavLink className="nav-home" to="/login">Login</NavLink> */}
            <NavLink className="nav-recipes" to="/recipe">My Recipes</NavLink>
            <NavLink className="nav-recipes" to="/create">Create Recipe</NavLink>
            {user ? (
              <NavLink className="nav-home" to="/" onClick={logoutUser}>Logout</NavLink>
            ): (
              <NavLink className="nav-home" to="/login">Login</NavLink>
              )}<br></br>
            {user && <h3 style={{ color: 'blue', lineHeight : 0, padding: 20, textAlign: 'right' }}>Hello {user.username}</h3>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBarMenu
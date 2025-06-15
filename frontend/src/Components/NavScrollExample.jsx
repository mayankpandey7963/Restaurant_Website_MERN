// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink } from 'react-router-dom';


function NavScrollExample() {
  return (
    <Form>
      <Navbar expand="lg" className="bg-dark">
        <Container fluid>
          <Navbar.Brand className='fw-bold text-white'>Spice & Sizzle</Navbar.Brand>
          <Navbar.Toggle className=" avbar-toggler-icon bg-white " aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto fs-6 my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white' as={NavLink} to='/' >Home</Nav.Link>
              <Nav.Link className='text-white' as={NavLink} to='/about'>About</Nav.Link>
              <Nav.Link className='text-white' as={NavLink} to='/contact'>Contact</Nav.Link>
              <Nav.Link className='text-white' as={NavLink} to='/menu'>Menu</Nav.Link>
              <Nav.Link className='text-white' as={NavLink} to='/login'>Login</Nav.Link>
              <Nav.Link className='text-white' as={NavLink} to='/signup'>Sign up</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Form>
  );
}

export default NavScrollExample;
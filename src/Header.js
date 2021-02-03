import React from 'react';
import {Button,Nav,Form,FormControl,Navbar} from 'react-bootstrap';


function Header() {
    return (
        <div>
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">NEWS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    
        </div>
    )
}

export default Header

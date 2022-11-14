import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


const NavBar = () => {
    return (
        <>

            <Navbar style={{backgroundColor:"#000cfe", color:"white"}} className="text-white" variant="dark" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">ZOHO</Navbar.Brand>
                    <Nav className=" float-lg-end">
                        <NavDropdown title="Features" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features" >Pricing</Nav.Link>
                        <NavDropdown title="Solutions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Customers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Resources" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown  title="Bulletin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;

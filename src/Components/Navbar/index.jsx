import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";


const NavBar = () => {
    return (
        <>

            <Navbar style={{backgroundColor:"#000cfe"}} variant="dark" >
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className=" float-lg-end">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-white">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="text-white">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default NavBar;

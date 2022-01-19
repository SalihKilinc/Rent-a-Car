import React from 'react'
import { Container, Nav, Image, Navbar } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import { RiHome4Line, RiHeadphoneLine, RiInformationLine, RiShape2Fill } from "react-icons/ri";

const MenuBar = () => {

    return (
        <Navbar expand="lg" className="menubar">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"><RiHome4Line />Home</Nav.Link>
                        <Nav.Link href="#link1"><RiShape2Fill />Services</Nav.Link>
                        <Nav.Link href="#link2"><RiInformationLine />About Us</Nav.Link>
                        <Nav.Link href="#link3"><RiHeadphoneLine />Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MenuBar





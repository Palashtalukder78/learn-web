import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const element = <FontAwesomeIcon icon={faCode} />
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <h3>{element} LearnWeb</h3>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Stack direction="horizontal" gap={4}>
                        <NavLink to="/home" style={{ color: '#fff', textDecoration: 'none' }} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>Home</NavLink>
                        <NavLink to="/about" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>About</NavLink>
                        <NavLink to="/services" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>Services</NavLink>
                        <NavLink to="/contact" style={{ color: 'white', textDecoration: 'none' }} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}>Contact</NavLink>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
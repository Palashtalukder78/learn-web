import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
const Footer = () => {
    const home = <FontAwesomeIcon icon={faHome} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <div className="bg-dark">
            <Container>
                <div className="row text-light py-4 ">
                    {/* Footer About  */}
                    <div className="col-md-4 ">
                        <h4>Learn web</h4>
                        <p>Web development is the work involved in developing a Web site for the Internet or an intranet. You can learn with us.</p>
                    </div>
                    {/* Navigation or Important link  */}
                    <div className="col-md-4 text-center middle-footer">
                        <h4>Important Link</h4>
                        <Stack className="middle-menu" direction="horizontal" gap={4}>
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
                    </div>
                    {/* Footer Contact  */}
                    <div className="col-md-4">
                        <h4>Address</h4>
                        <h6>{home} Dhaka</h6>
                        <h6>{phone} +880-1990525105</h6>
                        <h6>{email} learnweb.service@gmail.com</h6>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
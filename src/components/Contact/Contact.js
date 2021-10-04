import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
const Contact = () => {
    const home = <FontAwesomeIcon icon={faHome} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.923530209911!2d90.38942231498136!3d23.750106184589622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e67bbf977%3A0xad83526c894485f0!2sCity%20University!5e0!3m2!1sen!2sbd!4v1633320626523!5m2!1sen!2sbd";
    return (
        <div>
            <Container>
                <h1 className="text-center my-3">Contact US</h1>
                <div className="row my-4">
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1>{home}</h1>
                                <h2>Our Location</h2>
                                <p>Savar, Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1>{phone}</h1>
                                <h2>Contact Number</h2>
                                <p>+880-1990524105</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center">
                            <div className="card-header">
                                <h1>{envelope}</h1>
                                <h2>Email</h2>
                                <p>merndev.service@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="row bg-light contact">
                <div className="col-md-6">
                    <iframe src={map}
                        style={{ width: '100%', height: "450px" }}
                        allowfullscreen="" loading="lazy" title="map"></iframe>
                </div>
                <div className="col-md-6 text-center my-3">
                    <div className="form shadow" style={{ width: '70%', margin: "auto" }}>
                        <h3 className="text-primary">Message Us</h3>
                        <form>
                            <input type="text" className="form-control my-2 form-item " placeholder="Enter your name" />
                            <input type="email" className="form-control my-2 form-item " placeholder="Enter your email" />
                            <textarea className="form-control form-item " name="" id="" cols="10" rows="4" placeholder="Enter your messages"></textarea>
                            <button className="btn btn-primary btn-sm my-2">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
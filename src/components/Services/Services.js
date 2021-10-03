import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <Container className="py-4">
            <h1 className="text-center">Service</h1>
            <div className="row my-4">
                {services.length === 0 ?
                    <div className="text-center">
                        <Spinner animation="grow" variant="dark" />
                    </div>
                    :
                    services?.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </Container>
    );
};

export default Service;
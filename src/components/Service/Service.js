import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services, setServices] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    // const featureServices = services.filter(service => service.id <= 4);
    const handleMoreService = () => {
        history.push('/services')
    }
    return (
        <Container className="py-4">
            <h1 className="text-center">Services</h1>
            <div className="row my-4">
                {services.length === 0 ?
                    <div className="text-center">
                        <Spinner animation="grow" variant="dark" />
                    </div>
                    :
                    services?.slice(0, 4).map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }

            </div>
            <div className="text-center">
                <Button onClick={handleMoreService} variant="primary">More Services</Button>
            </div>
        </Container>
    );
};

export default Service;
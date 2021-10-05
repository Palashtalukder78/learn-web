import React, { useContext } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { serviceContext } from '../../App';
import HappyStudent from '../HappyStudent/HappyStudent';
import SingleService from '../SingleService/SingleService';

const Service = () => {
    const [services] = useContext(serviceContext);
    return (
        // It will Render on Services Menu 
        <Container className="py-4">
            <h1 className="text-center">Services</h1>
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
            <HappyStudent></HappyStudent>
        </Container>
    );
};

export default Service;
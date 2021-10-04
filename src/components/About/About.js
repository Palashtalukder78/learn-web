import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Instructors from '../Instructors/Instructors';

const About = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructor.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Container>
                <div className="row my-4">
                    <div className="col-md-12">
                        <h1 className="text-center">Career Preparation and Guidance</h1>
                        <p>Stepping into a career in software and web development requires a variety of skills, both hard and soft. This course offers you guidance for navigating a career path into tech, including crafting your elevator pitch and communication tips. These services are provided by Emeritus, our learning collaborator for this program. The program support team includes course leaders to help you reach your learning goals. The primary goal is to give you the skills needed to be prepared for a job in this field, however, job placement is not guaranteed.</p>
                    </div>
                </div>
                <h3 className="text-center">Our Isctructors</h3>
                <div className="row my-4">
                    {
                        instructors.map(instructor => <Instructors
                            key={instructor.id}
                            instructor={instructor}
                        ></Instructors>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default About;
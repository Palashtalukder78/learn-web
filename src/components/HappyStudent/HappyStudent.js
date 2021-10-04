import React, { useEffect, useState } from 'react';
import { Carousel, Container, Spinner } from 'react-bootstrap';
import './HappyStudent.css';
const HappyStudent = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('./happyStudents.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <Container className="my-4">
            <h2 className="text-center ">Happy Students</h2>
            {feedbacks.length === 0 ?
                <div className="text-center">
                    <Spinner animation="grow" variant="dark" />
                </div>
                :
                <Carousel className="w-75 mx-auto text-center p-3 my-3 slider shadow">
                    {
                        feedbacks.map(feedback => (
                            <Carousel.Item>
                                <img style={{ width: "100px", height: "100px", borderRadius: "50%", marginx: "auto" }} src={feedback.photo} alt="" />
                                <h4 className="studentName">{feedback.name}</h4>
                                <h6 className="student-position">"{feedback.CurrentPosition}"</h6>
                                <p>{feedback.comment}</p>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            }
        </Container>
    );
};

export default HappyStudent;
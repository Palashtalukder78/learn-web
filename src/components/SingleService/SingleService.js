import React from 'react';
import Rating from 'react-rating';
import './SingleService.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
const SingleService = (props) => {
    const eye = <FontAwesomeIcon icon={faEye} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const { title, photo, price, rating, availableSit, rated, durations } = props.service;
    return (
        <div className="col-md-6">
            <div className="card mb-3 item shadow">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={photo} className="img-fluid rounded-start service-photo" style={{ height: "150px" }} alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text  m-0"><small className="text-muted">Only {availableSit} sit available. Enroll Fast</small></p>
                            <p className="card-text mb-0">Price: <b>$ {price}</b></p>
                            <div className="service-icons">
                                <div>
                                    <Rating
                                        initialRating={rating}
                                        emptySymbol="far fa-star empty-star"
                                        fullSymbol="fas fa-star full-star"
                                        readonly
                                    /> ({rating})
                                </div>
                                <div>
                                    <span className="icon">{eye} </span>{rated}
                                </div>
                                <div>
                                    <span className="icon">{clock} </span>{durations} Hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleService;
import React from 'react';
import Rating from 'react-rating';
import './SingleService.css';
const SingleService = (props) => {
    const { title, photo, price, rating, availableSit } = props.service;
    return (
        <div className="col-md-6">
            <div class="card mb-3 item shadow">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={photo} class="img-fluid rounded-start service-photo" style={{ height: "150px" }} alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text mb-0">Price: <b>$ {price}</b></p>
                            <p class="card-text  m-0"><small class="text-muted">Only {availableSit} sit available. Enroll Fast</small></p>
                            <Rating
                                initialRating={rating}
                                emptySymbol="far fa-star empty-star"
                                fullSymbol="fas fa-star full-star"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleService;
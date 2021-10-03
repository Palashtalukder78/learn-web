import React from 'react';

const SingleService = (props) => {
    const { title, photo, price } = props.service;
    return (
        <div className="col-md-6">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src={photo} class="img-fluid rounded-start service-photo" style={{ height: "150px" }} alt="..." />
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">Price: $ {price}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleService;
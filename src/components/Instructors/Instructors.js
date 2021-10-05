import React from 'react';
import Rating from 'react-rating';
import './Instructors.css'

const Instructors = (props) => {
    const { name, photo, focused, rating, rated, students } = props.instructor;
    return (
        // Instructor Section for About us Page
        <div className="col-md-3">
            <div className="card text-center instructor shadow">
                <img className="rounded-circle mx-auto my-2" style={{ height: "100px", width: "100px" }} src={photo} alt="" />
                <div ClassName="card-body">
                    <h5 ClassName="card-title">{name}</h5>
                    <p ClassName="card-text">{focused}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star empty-star"
                        fullSymbol="fas fa-star full-star"
                        readonly
                    />
                    <span>({rated})</span>
                </div>
                <div ClassName="card-footer">
                    <small ClassName="text-muted">{students} Students</small>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
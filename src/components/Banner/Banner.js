import React from 'react';
import banner from '../../images/banner-1.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="row bg-dark text-light d-flex align-items-center">
                <div className="col-md-6">
                    <img className="w-100 banner" src={banner} alt="" />
                </div>
                <div className="col-md-6 px-4">
                    <h2 className="text-center display-5"><b>Launch Your Coding Career With <span className="text-warning">MERNDEV</span></b></h2>
                    <p>A growing number of companies are hiring web developers, software engineers, and other technology workers who use technical skills to streamline their operations and leverage the power of technology within their organizations.</p>
                    <p>Their biggest challenge? Talent. MIT xPRO’s online learning programs leverage vetted content from world-renowned experts to make learning accessible anytime, anywhere and solve this challenge for developing technical professionals.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
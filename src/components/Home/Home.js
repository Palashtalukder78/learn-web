import React from 'react';
import Banner from '../Banner/Banner';
import HappyStudent from '../HappyStudent/HappyStudent';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <HappyStudent></HappyStudent>
        </div>
    );
};

export default Home;
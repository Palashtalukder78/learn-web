import React from 'react';
import { useHistory } from 'react-router';
import notFound from '../../images/not-found-1.png';
const NotFound = () => {
    const history = useHistory();
    // Handle goABck button 
    const handleGoBack = () => {
        history.push('/home');
    }
    return (
        <div className="bg-light text-center py-3">
            {/* Not Found Page  */}
            <img style={{ width: '40%' }} src={notFound} alt="" />
            <br />
            <button onClick={handleGoBack} className="btn btn-primary">Go Back</button>
        </div>
    );
};

export default NotFound;
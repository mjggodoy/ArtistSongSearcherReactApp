import React from 'react';

const ApiError = ({errorApi}) => {

    if (Object.keys(errorApi).length === 0) return null;
    return (
        <p className="alert alert-danger text-center p-2">{errorApi}</p>
    );
}

export default ApiError;
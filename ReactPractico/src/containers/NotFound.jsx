import React from 'react';

import '../assets/components/NotFound.scss'

const NotFound = () => (
    <>
        <div className="face">
        <div className="band">
            <div className="red"></div>
            <div className="white"></div>
            <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
    </div>

    <h1>Oops! Something went wrong!</h1>
    <div className="btn" href="/">Return to Home</div>
    </>
)

export default NotFound
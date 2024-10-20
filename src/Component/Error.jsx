import React from 'react'
import Page_not from '../Images/pagnot.svg';

const Error = () => {
    return (
        <div>
            <div className="container my-5 mx-auto " id="err_img">
                <img src={Page_not} alt="error page" />
                <h1>Page Not Found 404</h1>
            </div>
        </div>
    )
}

export default Error

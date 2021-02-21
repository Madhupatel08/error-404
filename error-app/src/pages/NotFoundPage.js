import React from 'react';
import { NavLink } from 'react-router-dom'


const NotFoundPage = () => (
        <>
        <div className="setStyle2">
            <h1>404 Error Page</h1>
            <p>Sorry this page is not valid</p>
            <NavLink to ="/">Take Me Back To Where I Came From</NavLink>
        
        </div>
        </>
);

export default NotFoundPage;
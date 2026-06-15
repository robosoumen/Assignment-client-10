import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    if(loading){
        return <h1>Page Is Loading Now.............</h1>
    }

    if(user){
        return children
    }

    const location = useLocation();
    console.log(location)

    return (
        <Navigate state={location.pathname} to='/register'>
            {children}
        </Navigate>
    );
};

export default PrivateRoute;


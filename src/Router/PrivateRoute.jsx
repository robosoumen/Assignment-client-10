import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-xl flex mx-auto my-40"></span>
    }

    if(user){
        return children
    }

    const location = useLocation();

    return (
        <Navigate state={location.pathname} to='/register'>
            {children}
        </Navigate>
    );
};

export default PrivateRoute;


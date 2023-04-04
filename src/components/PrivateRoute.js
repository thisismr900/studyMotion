import React from 'react'
import {Navigate} from 'react-router-dom';

function PrivateRoute({isLoggedIn,children}) {
    // const navigate=useNavigate();
 if(isLoggedIn){
    return children;
 }
 else{
    <Navigate to="/login"/>
 }
}

export default PrivateRoute
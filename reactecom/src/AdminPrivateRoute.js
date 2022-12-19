import React, {useState,useEffect} from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import MasterLayout from './layouts/admin/MasterLayout';
import swal from 'sweetalert';

function AdminPrivateRoute({...rest}) {
    const [Authenticated, setAuthenticated] = useState(false);
    // const [loading, setloading] = useState(true);

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then(res => {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            // setloading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    return (

        <Route {...rest}
            render={ ({props, location}) => 
                Authenticated ?
                ( <MasterLayout {...props} /> ) :
                ( <Redirect to={{pathname: "/login", state: {from: location} }} /> ) 
            }
        />

    );
}

export default AdminPrivateRoute;
import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import swal from 'sweetalert';
import axios from 'axios';

function Navbar() {

    const history = useHistory();
    const logoutSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                const aziz = swal("Success",res.data.messages,"success");
                history.push('/');

                if (aziz) {
                  window.location.reload();
                }
            }
        });

    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                </li>
            </ul>
        );
    }
    else
    {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">Logout</button>
            </li>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">

                <Link className="navbar-brand" to="#">Ecom Project</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {AuthButtons}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
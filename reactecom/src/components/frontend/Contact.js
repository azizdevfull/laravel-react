import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';

function Contact() {
    const user =  localStorage.getItem('auth_name');
    return  (
        <div>
            {/* {localStorage.getItem('user-info') ? */}
            {
                (localStorage.getItem('auth_name')) ?
                <h1>Hello, { user }</h1>
            :
            <h1>You Arent Sign In</h1>
            }


            </div>
            )
        }

export default Contact;
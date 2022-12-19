import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';

function Home() {
    const user =  localStorage.getItem('auth_name');
    return  (
        <div>
            <Navbar />
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

export default Home;
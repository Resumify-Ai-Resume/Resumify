import React from 'react'
import {NavLink} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return(
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <NavLink to ='/' className='brand-logo'> Resumify </NavLink> 

                <SignedInLinks />
                {/* Add Login for in and out links */}
                <SignedOutLinks/>  
            </div>
        </nav>
    )
}

export default Navbar
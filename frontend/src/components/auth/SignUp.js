import React, { Component } from 'react'
import { auth } from '../../firebase.js'; // Import your Firebase authentication instance
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the sign-up function
import { useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom'

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            // Create user with Firebase
            await createUserWithEmailAndPassword(auth, email, password);
            <NavLink to ='/dashboard' className='brand-logo'> Resumify </NavLink> 
            // navigate('/dashboard'); 
            this.props.history.push('/dashboard');
            this.setState({ email: '', password: '', firstName: '', lastName: '' });

            console.log('User created successfully!');

        } catch (error) {
            // Handle errors (e.g., invalid email, weak password)
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error creating user: ${errorMessage}`); 

            console.error('Error creating user:', errorCode, errorMessage);
            // Display error messages to the user using an alert, toast, or in-line message.
        }
    }

    render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            
            <div className="input-field">
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={this.handleChange}/>
            </div>

            {/* { isAuthenticated ? null : (
                        <div className='input-field'>
                            <NavLink to='/dashboard' className="primary-cta bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-6">Sign Up</NavLink> 
                        </div>
                    )} */}

            {auth.currentUser && ( // Check if user is authenticated
                <NavLink to='/dashboard' className='btn pink lighten-1 z-depth-0'>
                    Sign Up 
                </NavLink>
            )}
        </form>

        
      </div>
    )
  }
}

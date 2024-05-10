import React, { Component } from 'react'
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the sign-up function
import { useNavigate } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
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
            await signInWithEmailAndPassword(auth, email, password);
            <NavLink to ='/dashboard' className='brand-logo'> Resumify </NavLink> 
            // navigate('/dashboard'); 
            // this.props.history.push('/dashboard');
            this.setState({ email: '', password: '' });

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
            <h5 className="grey-text text-darken-3">Log In</h5>
            <div className="input-field">
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={this.handleChange}/>
            </div>

            <div className="input-field">
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={this.handleChange}/>
            </div>

            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'> Login </button>
            </div>
        </form>
        
      </div>
    )
  }
}

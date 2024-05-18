import React, { useState } from 'react';
import { auth } from '../../config/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
      console.log('User logged in successfully:', userCredential.user);
    } catch (error) {  
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error logging in: ${errorMessage}`);
      console.error('Error logging in:', errorCode, errorMessage);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Log In</h5>
        <div className="input-field">
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' value={email} onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' value={password} onChange={handleChange} />
        </div>

        <div className='input-field'>
          <button className='btn pink lighten-1 z-depth-0'>Login</button>
        </div>
      </form>
    </div>
  );
}

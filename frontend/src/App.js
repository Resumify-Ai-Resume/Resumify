import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Layout/Navbar.js'
import Dashboard from './components/dashboard/Dashboard.js'
import Homepage from './components/homePage/Homepage.js'
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';

// import backgroundImage from '../public/img/background.jpg';
// import styles from './index.module.css'; 

class App extends Component {

  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Homepage}/>
            <Route exact path='/signin' Component={SignIn}/>
            <Route exact path='/signup' Component={SignUp}/>
            <Route exact path='/dashboard' Component={Dashboard}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

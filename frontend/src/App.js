import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Homepage from "./components/homePage/Homepage.js";
import Login from "./components/auth/Login.js";
import SignUp from "./components/auth/SignUp.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import GeneralPage from './components/form/GeneralPage/GeneralPage';
import EducationPage from './components/form/EducationPage/EducationPage';
import SkillPage from './components/form/SkillPage/SkillPage';
import WorkExpPage from './components/form/WorkExpPage/WorkExpPage';
import ProjectPage from './components/form/ProjectPage/ProjectPage';
import CourseWorkPage from './components/form/CourseWorkPage/CourseWorkPage';
import ResumePage from './components/form/Resume/ResumePage';

// import backgroundImage from '../public/img/background.jpg';
// import styles from './index.module.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Homepage} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={SignUp} />
            <Route exact path="/dashboard" Component={Dashboard} />
            <Route path='/form/general' element={<GeneralPage />} />
            <Route path='/form/education' element={<EducationPage />} />
            <Route path='/form/skill' element={<SkillPage />} />
            <Route path='/form/workexp' element={<WorkExpPage />} />
            <Route path='/form/project' element={<ProjectPage />} />
            <Route path='/form/coursework' element={<CourseWorkPage />} />
            <Route path='/resume' element={<ResumePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

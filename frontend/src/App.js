import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GeneralPage from './components/form/GeneralPage/GeneralPage';
import EducationPage from './components/form/EducationPage/EducationPage';
import SkillPage from './components/form/SkillPage/SkillPage';
import WorkExpPage from './components/form/WorkExpPage/WorkExpPage';
import ProjectPage from './components/form/ProjectPage/ProjectPage';
import CourseWorkPage from './components/form/CourseWorkPage/CourseWorkPage';
import ResumePage from './components/form/Resume/ResumePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/form/general' element={<GeneralPage />} />
            <Route path='/form/education' element={<EducationPage />} />
            <Route path='/form/skill' element={<SkillPage />} />
            <Route path='/form/workexp' element={<WorkExpPage />} />
            <Route path='/form/project' element={<ProjectPage />} />
            <Route path='/form/coursework' element={<CourseWorkPage />} />
            <Route path='/form/resume' element={<ResumePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

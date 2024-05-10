import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectPage() {
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({
        projectName: '',
        role: '',
        date: '',
        location: '',
        technologies: '',
        details: '',
        projectLink: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(projectData);  // Log the project data to the console (for debugging)
        // Add navigation to the next page or process data here
        navigate('/form/coursework');  // Adjust this as needed
    };

    const handleBack = () => {
        navigate('/form/skill');  // Navigate back to the SkillPage
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Project Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='projectName'>Project Name:</label>
                <input type='text' id='projectName' value={projectData.projectName} onChange={handleChange} />

                <label htmlFor='role'>Role:</label>
                <input type='text' id='role' value={projectData.role} onChange={handleChange} />

                <label htmlFor='date'>Date:</label>
                <input type='text' id='date' value={projectData.date} onChange={handleChange} />

                <label htmlFor='location'>Location (City, State, Country):</label>
                <input type='text' id='location' value={projectData.location} onChange={handleChange} />

                <label htmlFor='technologies'>Technologies Used:</label>
                <input type='text' id='technologies' value={projectData.technologies} onChange={handleChange} />

                <label htmlFor='details'>Project Details:</label>
                <textarea id='details' value={projectData.details} onChange={handleChange} />

                <label htmlFor='projectLink'>Project Link (optional):</label>
                <input type='text' id='projectLink' value={projectData.projectLink} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default ProjectPage;

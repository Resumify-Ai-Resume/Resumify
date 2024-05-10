import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WorkExpPage() {
    const navigate = useNavigate();
    const [workExpData, setWorkExpData] = useState({
        companyName: '',
        companyWebsite: '',
        location: '',
        projectName: '',
        role: '',
        startYear: '',
        endYear: '',
        projectDetails: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setWorkExpData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(workExpData);
        navigate('/form/project');  // Navigate to the ProjectPage
    };

    const handleBack = () => {
        navigate('/form/skill');  // Navigate back to the SkillPage
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Work Experience</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields similar to above */}
                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default WorkExpPage;

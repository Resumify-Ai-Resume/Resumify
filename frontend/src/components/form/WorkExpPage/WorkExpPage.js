import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function WorkExpPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousData = location.state || {};

    const [workExpData, setWorkExpData] = useState({
        companyName: '',
        companyLink: '',
        city: '',
        state: '',
        role: '',
        projectName: '',
        projectDescription: '',
        startDate: '',
        endDate: ''
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
        const finalData = {
            ...previousData,
            ...workExpData
        };
        navigate('/form/project', { state: { finalData } });
    };

    const handleBack = () => {
        navigate('/form/skill', { state: previousData });
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Work Experience</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='companyName'>Company Name:</label>
                <input type='text' id='companyName' value={workExpData.companyName} onChange={handleChange} />

                <label htmlFor='companyLink'>Company Link (optional):</label>
                <input type='text' id='companyLink' value={workExpData.companyLink} onChange={handleChange} />

                <label htmlFor='city'>City:</label>
                <input type='text' id='city' value={workExpData.city} onChange={handleChange} />

                <label htmlFor='state'>State:</label>
                <input type='text' id='state' value={workExpData.state} onChange={handleChange} />

                <label htmlFor='role'>Role:</label>
                <input type='text' id='role' value={workExpData.role} onChange={handleChange} />

                <label htmlFor='projectName'>Project Name:</label>
                <input type='text' id='projectName' value={workExpData.projectName} onChange={handleChange} />

                <label htmlFor='projectDescription'>Project Description:</label>
                <textarea id='projectDescription' value={workExpData.projectDescription} onChange={handleChange} />

                <label htmlFor='startDate'>Start Date:</label>
                <input type='text' id='startDate' value={workExpData.startDate} onChange={handleChange} />

                <label htmlFor='endDate'>End Date:</label>
                <input type='text' id='endDate' value={workExpData.endDate} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default WorkExpPage;

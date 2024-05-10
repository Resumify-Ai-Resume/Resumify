import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseWorkPage() {
    const navigate = useNavigate();
    const [courseWorkData, setCourseWorkData] = useState({
        courseName: '',
        description: '',
        includeInResume: false
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCourseWorkData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        setCourseWorkData(prevData => ({
            ...prevData,
            includeInResume: event.target.checked
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/create-resume', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    "courseName": "Introduction to Computer Science",
                    "description": "This course provides an overview of computer science fundamentals.",
                    "includeInResume": true
                },
            });
            const blob = await response.blob();
            navigate('/resume', { state: { resumeBlob: blob } });
        } catch (error) {
            console.error('Error creating resume:', error);
        }
    };

    const handleBack = () => {
        navigate('/form/project');
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Course Work</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='courseName'>Course Name:</label>
                <input type='text' id='courseName' value={courseWorkData.courseName} onChange={handleChange} />

                <label htmlFor='description'>Description:</label>
                <textarea id='description' value={courseWorkData.description} onChange={handleChange} />

                <div>
                    <label>
                        <input type='checkbox' checked={courseWorkData.includeInResume} onChange={handleCheckboxChange} />
                        Include in Resume
                    </label>
                </div>

                <button type='submit' className='btn'>Create Resume</button>
            </form>
        </div>
    );
}

export default CourseWorkPage;

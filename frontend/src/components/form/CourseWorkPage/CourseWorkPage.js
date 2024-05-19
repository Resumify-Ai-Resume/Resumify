import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function CourseWorkPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousData = location.state || {};

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
        const finalData = {
            ...previousData,
            ...courseWorkData
        };
        console.log('Final Data:', finalData); // 데이터 확인용
        navigate('/resume', { state: { finalData } });
    };

    const handleBack = () => {
        navigate('/form/project', { state: previousData });
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

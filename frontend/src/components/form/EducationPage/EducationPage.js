import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EducationPage() {
    const navigate = useNavigate();
    const [educationData, setEducationData] = useState({
        schoolName: '',
        startYear: '',
        endYear: '',
        city: '',
        state: '',
        degree: '',
        fieldOfStudy: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setEducationData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(educationData);  // Log the education data to the console (for debugging)
        navigate('/form/skill');  // Navigate to the SkillPage
    };

    const handleBack = () => {
        navigate('/form/general');  // Navigate back to the GeneralPage
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Education Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='schoolName'>School Name:</label>
                <input type='text' id='schoolName' value={educationData.schoolName} onChange={handleChange} />

                <label htmlFor='startYear'>Start Year:</label>
                <input type='text' id='startYear' value={educationData.startYear} onChange={handleChange} />

                <label htmlFor='endYear'>End Year:</label>
                <input type='text' id='endYear' value={educationData.endYear} onChange={handleChange} />

                <label htmlFor='city'>City:</label>
                <input type='text' id='city' value={educationData.city} onChange={handleChange} />

                <label htmlFor='state'>State:</label>
                <input type='text' id='state' value={educationData.state} onChange={handleChange} />

                <label htmlFor='degree'>Degree:</label>
                <input type='text' id='degree' value={educationData.degree} onChange={handleChange} />

                <label htmlFor='fieldOfStudy'>Field of Study:</label>
                <input type='text' id='fieldOfStudy' value={educationData.fieldOfStudy} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default EducationPage;

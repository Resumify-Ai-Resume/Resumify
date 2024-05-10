import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SkillPage() {
    const navigate = useNavigate();
    const [skillData, setSkillData] = useState({
        languages: '',
        frameworks: '',
        databases: '',
        tools: '',
        fields: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setSkillData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(skillData);  // Log the skill data to the console (for debugging)
        navigate('/form/workexp');  // Navigate to the Work Experience Page
    };

    const handleBack = () => {
        navigate('/form/education');  // Navigate back to the EducationPage
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Skill Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='languages'>Languages (e.g., Python, JavaScript):</label>
                <input type='text' id='languages' value={skillData.languages} onChange={handleChange} />

                <label htmlFor='frameworks'>Frameworks (e.g., React, Django):</label>
                <input type='text' id='frameworks' value={skillData.frameworks} onChange={handleChange} />

                <label htmlFor='databases'>Databases (e.g., MySQL, MongoDB):</label>
                <input type='text' id='databases' value={skillData.databases} onChange={handleChange} />

                <label htmlFor='tools'>Tools (e.g., Git, Figma):</label>
                <input type='text' id='tools' value={skillData.tools} onChange={handleChange} />

                <label htmlFor='fields'>Fields (e.g., Software Engineering, Data Science):</label>
                <input type='text' id='fields' value={skillData.fields} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default SkillPage;

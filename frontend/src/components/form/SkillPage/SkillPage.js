import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function SkillPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousData = location.state || {};

    const [skillData, setSkillData] = useState({
        languages: '',
        tools: '',
        frameworks: '',
        databases: '',
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
        const finalData = {
            ...previousData,
            ...skillData
        };
        navigate('/form/workexp', { state: { finalData } });
    };

    const handleBack = () => {
        navigate('/form/education', { state: previousData });
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back</button>
            <h1>Skills</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='languages'>Languages:</label>
                <input type='text' id='languages' value={skillData.languages} onChange={handleChange} />

                <label htmlFor='tools'>Tools:</label>
                <input type='text' id='tools' value={skillData.tools} onChange={handleChange} />

                <label htmlFor='frameworks'>Frameworks:</label>
                <input type='text' id='frameworks' value={skillData.frameworks} onChange={handleChange} />

                <label htmlFor='databases'>Databases:</label>
                <input type='text' id='databases' value={skillData.databases} onChange={handleChange} />

                <label htmlFor='fields'>Fields:</label>
                <input type='text' id='fields' value={skillData.fields} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default SkillPage;

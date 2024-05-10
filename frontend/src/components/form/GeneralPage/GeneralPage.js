import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GeneralPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        github: '',
        linkedin: '',
        personalWebsite: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Navigate to next form page
        navigate('/form/education');
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className='container'>
            <button onClick={handleBack} className='btn'>Back to Dashboard</button>
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' value={formData.name} onChange={handleChange} />

                <label htmlFor='phoneNumber'>Phone Number:</label>
                <input type='text' id='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' value={formData.email} onChange={handleChange} />

                <label htmlFor='github'>GitHub (optional):</label>
                <input type='text' id='github' value={formData.github} onChange={handleChange} />

                <label htmlFor='linkedin'>LinkedIn (optional):</label>
                <input type='text' id='linkedin' value={formData.linkedin} onChange={handleChange} />

                <label htmlFor='personalWebsite'>Personal Website (optional):</label>
                <input type='text' id='personalWebsite' value={formData.personalWebsite} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default GeneralPage;

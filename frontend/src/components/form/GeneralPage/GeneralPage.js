import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function GeneralPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const previousData = location.state || {};

    const [generalData, setGeneralData] = useState({
        name: '',
        phone: '',
        email: '',
        github: '',
        linkedin: '',
        website: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setGeneralData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const finalData = {
            ...previousData,
            ...generalData
        };
        navigate('/form/education', { state: { finalData } });
    };

    return (
        <div className='container'>
            <h1>General Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' value={generalData.name} onChange={handleChange} />

                <label htmlFor='phone'>Phone:</label>
                <input type='text' id='phone' value={generalData.phone} onChange={handleChange} />

                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' value={generalData.email} onChange={handleChange} />

                <label htmlFor='github'>GitHub (optional):</label>
                <input type='text' id='github' value={generalData.github} onChange={handleChange} />

                <label htmlFor='linkedin'>LinkedIn (optional):</label>
                <input type='text' id='linkedin' value={generalData.linkedin} onChange={handleChange} />

                <label htmlFor='website'>Website (optional):</label>
                <input type='text' id='website' value={generalData.website} onChange={handleChange} />

                <button type='submit' className='btn'>Next</button>
            </form>
        </div>
    );
}

export default GeneralPage;
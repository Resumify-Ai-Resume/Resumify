import React from 'react';
import { useLocation } from 'react-router-dom';

function ResumePage() {
    const location = useLocation();
    const resumeBlob = location.state?.resumeBlob;
    const resumeUrl = resumeBlob ? URL.createObjectURL(resumeBlob) : '';

    return (
        <div className='container'>
            <h1>Your Resume</h1>
            {resumeUrl ? (
                <iframe src={resumeUrl} width="100%" height="500px" title="Resume"></iframe>
            ) : (
                <p>No resume to display.</p>
            )}
        </div>
    );
}

export default ResumePage;

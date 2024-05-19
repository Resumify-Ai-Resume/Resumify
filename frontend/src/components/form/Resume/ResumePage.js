import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';

function ResumePage() {
    const location = useLocation();
    const { finalData } = location.state || {};
    const [resumeHtml, setResumeHtml] = useState('');

    useEffect(() => {
        const fetchResumeHtml = async () => {
            try {
                console.log('Final Data:', finalData);  // finalData 로그 출력

                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',
                        messages: [{ "role": "system", "content": "Generate a resume" }, { "role": "user", "content": generatePrompt(finalData) }]
                    })
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('API Response:', data);  // API 응답 로그 출력
                setResumeHtml(data.choices[0].message.content);
            } catch (error) {
                console.error('Error fetching the resume HTML:', error);
            }
        };

        fetchResumeHtml();
    }, [finalData]);

    const generatePrompt = (data) => {
        return `Generate an HTML resume with the following data:
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        GitHub: ${data.github}
        LinkedIn: ${data.linkedin}
        Website: ${data.website}
        Education:
            School: ${data.school}
            Degree: ${data.degree}
            Field of Study: ${data.fieldOfStudy}
            Location: ${data.city}, ${data.state}
            Period: ${data.startYear} - ${data.endYear}
        Skills:
            Languages: ${data.languages}
            Tools: ${data.tools}
            Frameworks: ${data.frameworks}
            Databases: ${data.databases}
            Fields: ${data.fields}
        Work Experience:
            Company: ${data.companyName}
            Role: ${data.role}
            Project: ${data.projectName}
            Description: ${data.projectDescription}
            Link: ${data.companyLink}
        Course Work:
            Course Name: ${data.courseName}
            Description: ${data.description}
            Include in Resume: ${data.includeInResume ? 'Yes' : 'No'}`;
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.html(document.querySelector('.container'), {
            callback: function (doc) {
                doc.save('resume.pdf');
            },
            x: 10,
            y: 10
        });
    };

    return (
        <div className='container'>
            <h1>Resume</h1>
            <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
            <button onClick={downloadPDF} className='btn'>Download PDF</button>
        </div>
    );
}

export default ResumePage;

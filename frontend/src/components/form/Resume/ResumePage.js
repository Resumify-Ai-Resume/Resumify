import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../../../styles/ResumePage.css'; // CSS 파일 경로

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

    const generatePrompt = useCallback((data) => {
        return `
            You are to generate a professional HTML resume based on the provided data${JSON.stringify(data)}, following the structure and style similar to Jake Gutierrez's LaTeX resume. The resume should fit on a single A4 page and be well-organized. Use inline CSS to ensure the resume is visually appealing. Here is the structure and data to follow:
    
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <title>${data.name || "N/A"}'s Resume</title>
            <style>
              body {
                font-family: 'Times New Roman', serif;
                margin: 0;
                padding: 0;
              }
              .resume {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                border: 1px solid #ccc;
                background-color: #fff;
              }
              .resume-header {
                text-align: center;
                border-bottom: 2px solid #000;
                padding-bottom: 10px;
                margin-bottom: 20px;
              }
              .resume-header h1 {
                margin: 0;
                font-size: 36px;
                font-weight: bold;
              }
              .resume-header p {
                margin: 5px 0;
              }
              .section {
                margin-bottom: 20px;
              }
              .section h2 {
                margin-bottom: 10px;
                font-size: 20px;
                font-weight: bold;
                border-bottom: 1px solid #000;
              }
              .entry {
                margin-bottom: 15px;
              }
              .entry h3 {
                margin: 0;
                font-size: 16px;
                font-weight: bold;
              }
              .entry p {
                margin: 5px 0;
                font-size: 14px;
              }
              .entry .date {
                text-align: right;
                font-style: italic;
                float: right;
              }
              .entry ul {
                margin: 5px 0 0 20px;
                padding: 0;
                list-style-type: disc;
              }
              .entry ul li {
                font-size: 14px;
              }
              .entry .location {
                font-style: italic;
              }
            </style>
            </head>
            <body>
            <div class="resume">
              <div class="resume-header">
                <h1>${data.name || "N/A"}</h1>
                <p>${data.phone || "N/A"} | <a href="mailto:${data.email}">${data.email || "N/A"}</a> | <a href="${data.linkedin}">LinkedIn</a> | <a href="${data.github}">GitHub</a> ${data.website ? `| <a href="${data.website}">Website</a>` : ''}</p>
              </div>
              <div class="section">
                <h2>Education</h2>
                ${(data.education || []).map(edu => `
                  <div class="entry">
                    <h3>${edu.institution} <span class="date">${edu.location} | ${edu.startDate} - ${edu.endDate}</span></h3>
                    <p>${edu.degree}, ${edu.fieldOfStudy}</p>
                  </div>
                `).join('')}
              </div>
              <div class="section">
                <h2>Technical Skills</h2>
                <p><strong>Languages:</strong> ${(Array.isArray(data.languages) ? data.languages : []).join(', ')}</p>
                <p><strong>Frameworks/Technologies:</strong> ${(Array.isArray(data.frameworks) ? data.frameworks : []).join(', ')}</p>
                <p><strong>Tools:</strong> ${(Array.isArray(data.tools) ? data.tools : []).join(', ')}</p>
              </div>
              <div class="section">
                <h2>Work Experience</h2>
                ${(data.experience || []).map(exp => `
                  <div class="entry">
                    <h3>${exp.position} <span class="date">${exp.company}, ${exp.location} | ${exp.startDate} - ${exp.endDate}</span></h3>
                    <ul>
                      ${(Array.isArray(exp.description) ? exp.description : []).map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
              <div class="section">
                <h2>Projects</h2>
                ${(data.projects || []).map(project => `
                  <div class="entry">
                    <h3>${project.name} <span class="date">${project.date}</span></h3>
                    <p>${Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies || ''}</p>
                    <ul>
                      ${(Array.isArray(project.description) ? project.description : []).map(desc => `<li>${desc}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
            </body>
            </html>
        `;
    }, []);


    const downloadPDF = () => {
        const input = document.querySelector('.resume-container');
        html2canvas(input, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('resume.pdf');
        });
    };

    return (
        <div className='resume-container'>
            <h1>Resume</h1>
            <div dangerouslySetInnerHTML={{ __html: resumeHtml }} />
            <button onClick={downloadPDF} className='btn'>Download PDF</button>
        </div>
    );
}

export default ResumePage;

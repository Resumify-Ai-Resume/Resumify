const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Middleware to log request and response
app.use((req, res, next) => {
    // Log request details
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Request body:', req.body);

    // Save original send method
    const originalSend = res.send;

    // Replace send method to log response
    res.send = function (body) {
        console.log('Response status:', res.statusCode);
        console.log('Response body:', body);

        // Call original send method
        return originalSend.call(this, body);
    };

    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Resume Generator!');
});

app.post('/api/create-resume', async (req, res) => {
    const { courseName, description, includeInResume } = req.body;

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Resume</title>
        <style>
            body { font-family: Arial, sans-serif; }
            .section { margin-bottom: 20px; }
        </style>
    </head>
    <body>
        <div class="section">
            <h1>Course Work</h1>
            <p>Course Name: ${courseName}</p>
            <p>Description: ${description}</p>
            <p>Include in Resume: ${includeInResume ? 'Yes' : 'No'}</p>
        </div>
    </body>
    </html>
    `;

    // Uncomment the following lines to generate PDF using puppeteer
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.setContent(htmlContent);
    // const pdf = await page.pdf({ format: 'A4' });
    // await browser.close();

    // Uncomment the following lines to send PDF as response
    // res.contentType("application/pdf");
    // res.send(pdf);

    // Send HTML content for now
    res.send(htmlContent);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

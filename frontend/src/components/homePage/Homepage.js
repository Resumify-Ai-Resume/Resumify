import React, { Component } from "react";
import './Homepage.css'; 
import { NavLink } from 'react-router-dom';


const testimonials = [
  {
    quote: "Great tool! I've made the mistake of sending the wrong cover letter to the wrong company before. This will eliminate that from happening. It also gave me a better way to format my resume!",
    author: "Seron Athavan"
  },
  {
    quote: "Brilliant concepts for the folks who are lazy to put efforts for creating Resume. Basically, no work at all",
    author: "Vikram Narra J."
  },
  {
    quote: "Niceee! Application looks very slick and has a very nice user experience. I love it 🖤 Congratulations!",
    author: "Kody Chik"
  },
  {
    quote: "Really streamlined the resume making process and made it really easy to build mine. I highly recommend!",
    author: "Asad Hussain"
  },
  {
    quote: "I used just last week to create a new resume. It was simple and it created a professional looking resume. Two thumbs up.",
    author: "Minjun Kim"
  },
  {
    quote: "Resumify has helped me a ton! It makes it easy to custom tailor for different job descriptions which gives an amazing edge in applications. More power to you.",
    author: "Adam Bodar"
  },
  {
    quote: "I have recommended Resumify because it save time and creates an ATS friendly resume",
    author: "Dhruv Patel"
  },
  {
    quote: "Resumify is a lifesaver! As someone who struggles with organizing my resume, this tool made the process incredibly simple and efficient. Thank you!",
    author: "Amitoz"
  },
  {
    quote: "I was skeptical at first, but Resumify blew me away! It's user-friendly and produces professional results. Highly recommend it!",
    author: "Alex Thompson"
  }
  
];

 
class Homepage extends Component {
  
  render() {
    return (
      <div className="homepage-container"> 
        {/* ----- Hero Section ----- */}
        <header className="hero container mx-auto flex items-center py-20"> 
          <div className="hero-content text-center lg:text-left"> 
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Resumify</h1> 
            <p className="text-lg text-gray-600">
              Craft the perfect resume that lands your dream job.
            </p> 
            <NavLink to='/signup' className="primary-cta bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-6">Get Started</NavLink> 
          </div> 
          <div className="hero-image"> 
            <img src="\img\placeholder.png" alt="Placeholder"  style={{ maxWidth: '100%', height: '100%', marginRight: '40px' }} />
          </div> 
        </header>

        {/* ----- What is Resumify ----- */}
        <section className="about py-20 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">What is Resumify?</h2>
          <p className="text-center text-gray-600">
            Our company helps you tailor your resume by extracting relevant skills and projects from your master resume and comparing them to the job posting, giving you actionable insights to land your dream role.
          </p>
        </section>

        {/* ----- Features Section ----- */}
        <section className="features py-20 container mx-auto">
          <h2 className="text-xl font-bold text-center mb-10 text-gray-800">Key Features</h2>
          <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
            <div className="feature-item bg-white p-6 rounded-md shadow-md hover:shadow-lg"> 
              <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i> 
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Effortless Resume Creation</h3> 
              <p className="text-gray-600"> Streamline the resume building process with our intuitive AI-powered tools. Generate a tailored resume in minutes, not hours.</p> 
            </div>
            <div className="feature-item bg-white p-6 rounded-md shadow-md hover:shadow-lg"> 
              <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i> 
              <h3 className="text-3xl font-medium mb-2 text-gray-800">AI-Powered Content Optimization</h3> 
              <p className="text-gray-600">Instantly refine and polish your resume's language with our AI writing assistant. Ensure clarity, conciseness, and impact.</p> 
            </div>
            <div className="feature-item bg-white p-6 rounded-md shadow-md hover:shadow-lg"> 
              <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i> 
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Skill & Project Insights</h3> 
              <p className="text-gray-600">Get personalized recommendations to highlight relevant skills and projects, giving you a competitive edge. Discover opportunities to strengthen your profile.</p> 
            </div>
            <div className="feature-item bg-white p-6 rounded-md shadow-md hover:shadow-lg"> 
              <i className="fas fa-rocket text-4xl text-blue-500 mb-4"></i> 
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Versatile Export Options</h3> 
              <p className="text-gray-600">Download your resume in industry-standard formats (PDF, DOCX, etc.) for seamless compatibility with any application platform.</p> 
            </div>
            {/* ... Add 3 More Features Similarly ... */}
          </div>
        </section>

        {/* ----- Steps Section ----- */}
        <section className="steps py-20 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">How It Works</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Copy and Paste Resume Details</h3>
              {/* <p className="text-gray-600">Start by providing your full resume content.</p> */}
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Paste Job Posting</h3>
              {/* <p className="text-gray-600">Input the job description you're applying to.</p> */}
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Generate Resume Using AI</h3>
              {/* <p className="text-gray-600">Our AI tool will tailor your resume for the specific job.</p> */}
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3 className="text-3xl font-medium mb-2 text-gray-800">Export in Different Formats and Layout</h3>
              {/* <p className="text-gray-600">Download your resume in various formats.</p> */}
            </div>
          </div>
        </section>
   

        {/* ----- Testimonials Section ----- */}
        <section className="testimonials py-20 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Customer Testimonials</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-item" key={index}> 
                <div className="quote-box">
                  <p className="text-lg text-gray-700">
                    {testimonial.quote}
                  </p>
                  <div className="author"> 
                    <p className="font-medium author-bold">{testimonial.author}</p>
                  </div>
                  <div className="rating">
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                    <i class="fas fa-star text-yellow-400"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

    

        {/* ----- Co-founders Section ----- */}
        <section className="cofounders py-20 container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Founders</h2>
        <div className="cofounders-grid">
          <div className="cofounder-item">
            <img src="/img/cofounder1.jpeg" alt="Yashank Bhola" className="rounded-full w-40 mx-auto mb-4"/>
            <h3 className="text-xl font-medium mb-2 text-gray-800">Yashank Bhola</h3>
            <p className="text-gray-600">x2 Software Engineer Nokia</p>
            <p className="text-gray-600">Uoft Computer Science and Entrepreneurship</p>
          </div>
          {/* <div className="cofounder-item">
            
          </div> */}
        </div>
      </section>
    

        {/* ----- Footer Section ----- */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Resumify. All Rights Reserved.</p>
        </footer>     
      </div>
    );
  }
}

export default Homepage;

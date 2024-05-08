import React, { Component } from "react";
import './Homepage.css'; 

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container"> 
        {/* ----- Hero Section ----- */}
        <header className="hero bg-white py-20 flex items-center justify-around container mx-auto"> 
          <div className="hero-content px-8 md:px-16 lg:px-24 w-full md:w-1/2"> 
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Resumify</h1> 
            <p className="text-lg text-gray-600">
                Craft the perfect resume that lands your dream job.
            </p> 
            <button className="primary-cta bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mt-6">Get Started</button> 
          </div> 
          <div className="hero-image w-1/2 hidden lg:block"> 
            <img src="placeholder.png" alt="Placeholder" className="w-full" /> 
          </div> 
        </header>


        {/* ----- Features Section ----- */}
        <section className="features py-20 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Why Choose Us</h2> 
          <div className="feature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            <div className="feature-item bg-white p-6 rounded-md shadow-md hover:shadow-lg"> 
              <i className="fas fa-rocket text-3xl text-blue-500 mb-4"></i> 
              <h3 className="text-xl font-medium mb-2 text-gray-800">Fast & Easy</h3> 
              <p className="text-gray-600">Create a professional resume in minutes.</p> 
            </div>
            {/* ... More features similarly ... */}
          </div>
        </section>

        {/* ... Other Sections */}
      </div>
    );
  }
}

export default Homepage;

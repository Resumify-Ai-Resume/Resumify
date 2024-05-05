import React, { Component } from "react";
import './Homepage.css'; 

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <header className="hero">
          <div className="hero-content">
            <h1>Resumify</h1>
            <p>A brief and compelling explanation of what your startup offers.</p>
            <button className="primary-cta">Get Started</button>
          </div>
          <div className="hero-image"> 
            {/* Replace with an image or video */}
            <img src="placeholder.jpg" alt="Placeholder" /> 
          </div> 
        </header>

        <section className="features">
          <h2>Why Choose Us</h2>
          <div className="feature-grid"> 
            <div className="feature-item">
              <i className="icon-feature1"></i> {/* Placeholder for icon */}
              <h3>Feature Title 1</h3>
              <p>Short description of the feature.</p>
            </div>
            <div className="feature-item"> 
              {/* ... More features similarly ... */}
            </div>
          </div>
        </section>

        {/* ... Add sections for Social Proof, etc. */}
      </div>
    );
  }
}

export default Homepage;

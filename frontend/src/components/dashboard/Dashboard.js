import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Dashboard.css"; // Your custom CSS file

class Dashboard extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Dashboard</h1>
                <Link to="/form/general" className="btn">Create New Resume</Link>
            </div>
        );
    }
}

export default Dashboard;

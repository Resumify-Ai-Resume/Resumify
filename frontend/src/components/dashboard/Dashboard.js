import React, { Component } from "react";
import './Dashboard.css'; // Your custom CSS file

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard"> 
        {/* Ribbon/Toolbar */}
        <header className="toolbar">
          {/* Toolbar sections, tabs, buttons would go here */}
        </header>

        {/* Main Editing Area */}
        {/* <main className="editor-area" contentEditable="true">
          {/* You might structure this with more divs internally  */}
        {/* </main> */} 

        {/* New Document Creation */}
        <button className="new-doc-button"> + Create a new blank doc </button>
      </div>
    );
  }
}

export default Dashboard;

import React from 'react'
import "./LandingPage.css";


const LandingPage = () => {
  return (
    <div className="landing" style={{ backgroundImage: "url('/images/hh.jpeg')" }}>
      {/* Navbar */}
      <header className="navbar">
        <button className="menu-btn">☰</button>
        <h1 className="logo">SARENNA</h1>
        <a href="#appointment" className="appointment-btn">
          Make an Appointment
        </a>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h2 className="headline">BEAUTY IN <br /> EVERY TOUCH</h2>
          <p className="scroll-text">Swipe to Discover</p>
          <span className="arrow">⌄</span>
        </div>
      </div>
    </div>
  );
}


export default LandingPage

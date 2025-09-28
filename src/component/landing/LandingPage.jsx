import React from 'react'
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className='containers'>
    <div className="landing" style={{ backgroundImage: "url('/images/hh.jpeg')" }}>
      <header className="navbar">
        <h1 className="logo">SARENNA</h1>
      </header>
      <div className="hero">
        <div className="hero-content">
          <h2 className="headline">BEAUTY IN <br /> EVERY TOUCH</h2>
          <p className="scroll-text">Swipe to Discover</p>
          <span className="arrow">⌄</span>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LandingPage

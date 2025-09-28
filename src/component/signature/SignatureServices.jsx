import React from "react";
import "./SignatureServices.css";

const SignatureServices = () => {
  return (
    <div className="containers">
    <div className="signature-section">
      {/* Top full-width image */}
      <div className="top-image">
        <img src="/images/hh.jpeg" alt="Lashes" />
      </div>

      {/* Bottom content */}
      <div className="bottom-section">
        {/* Left image */}
        <div className="service-image">
        <img src="/images/hh.jpeg" alt="Lashes" />
        </div>

        {/* Right text */}
        <div className="service-text">
          <h2>SIGNATURE <br /> SERVICES</h2>
          <p>
            At SUBLIMA, every detail matters. Our services are thoughtfully 
            designed to enhance your unique features — because beauty is 
            always individual.
          </p>
          <button>Check All Services</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignatureServices;

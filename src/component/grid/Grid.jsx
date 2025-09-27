import React from 'react';
import './Grid.css'; 

const Grid = () => {
  return (
    <div className="elegance-container">
      <div className="image-group left-group">
        <div className="image-box top-left">
        <img src="/images/hh.jpeg" alt="Lashes" />
        </div>
        <div className="image-box bottom-left">
        <img src="/images/hh.jpeg" alt="Lashes" />
        </div>
      </div>

      <div className="text-center">
        <h1>THE ESSENCE OF SUBTLE ELEGANCE</h1>
      </div>

      <div className="image-group right-group">
        <div className="image-box center-top-right">
        <img src="/images/hh.jpeg" alt="Lashes" />
        </div>
        <div className="image-box bottom-right">
        <img src="/images/hh.jpeg" alt="Lashes" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
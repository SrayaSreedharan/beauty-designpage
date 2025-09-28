import React from 'react';
import './Grid.css'; 

const Grid = () => {
  return (
     <div className='containers'>
     <div className="hero">
      <div className="image-overlap left">
        <img src="/images/hh.jpeg" alt="Lashes"  className="top" />
        <img src="/images/hh.jpeg" alt="Lashes" className="bottom" />
      </div>
      <h1 className="title">
        THE ESSENCE OF <br /> SUBTLE ELEGANCE
      </h1>
      <div className="image-overlap right">
        <img src="/images/hh.jpeg" alt="Lashes"  className="top" />
          <img src="/images/hh.jpeg" alt="Lashes" className="bottom" />
      </div>
    </div>
    </div>
  );
};





export default Grid;
import React, { useState, useEffect } from 'react';
import './ViewportWidth.css';

const ViewportWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    //updates width whenever the window resizes:
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
  
    //list for resize events: 
    window.addEventListener('resize', handleResize);
  
    // clean up the vent listener on component unmount: 
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="viewport-width">
      <p>{`Viewport Width: ${width}px`}</p>
    </div>
  );
};

export default ViewportWidth;
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  // event listener to change opacity of header as user scrolls down
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    // this will calculate opacity based on scroll position
    const opacityValue = 1 - (scrollPosition / headerHeight); // as user scrolls >>> decrease opacity
    setOpacity(Math.max(opacityValue, 0)); // lets prevent opacity from going below 0 until we figure out if we want it there for the footer or not
  };

  //the useEffect to add and remove the event listener for the scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header" style={{ opacity }}>
    <div>
        <h2>Indian Valley Butchers</h2>
    </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './SideNav.css'; 

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="tab">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> {/* Facebook Icon */}
        </a>
      </div>
      <div className="tab">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> {/* Twitter Icon */}
        </a>
      </div>
      <div className="tab">
        <a href="tel:+15555555555">
          <i className="fas fa-phone"></i> {/* Phone Icon */}
        </a>
      </div>
      <div className="tab">
        <a href="mailto:contact@example.com">
          <i className="fas fa-envelope"></i> {/* Email Icon */}
        </a>
      </div>
    </div>
  );
};

export default SideNav;

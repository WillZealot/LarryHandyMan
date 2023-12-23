import React, { useState, useEffect } from 'react';
import logo from '../img/tools.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const listItemStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBackgroundOpacity = () => {
    // You can adjust the divisor to control the rate of opacity change
    const opacity = 1 - scrollPosition / 800;
    return opacity >= 0 ? opacity : 0;
  };

  return (
    <div
      className="sticky top-0 z-50"
      style={{
        background: `linear-gradient(to bottom, rgba(255, 255, 255, ${getBackgroundOpacity()}), transparent)`,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-4" />
          <div>
            <p className="text-black text-lg font-bold">LGC LLC</p>
          </div>
        </div>
        <ul className="flex space-x-4 ml-auto">
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Home
          </li>
          <span style={{ opacity: 0.7, color: '#000', marginTop: '3px' }}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            About Us
          </li>
          <span style={{ opacity: 0.7, color: '#000', marginTop: '3px' }}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Our Services
          </li>
          <span style={{ opacity: 0.7, color: '#000', marginTop: '3px' }}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Gallery
          </li>
          <span style={{ opacity: 0.7, color: '#000', marginTop: '3px' }}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

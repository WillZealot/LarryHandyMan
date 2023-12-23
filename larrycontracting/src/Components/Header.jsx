import React from 'react';
import logo from '../img/tools.png';

const Header = () => {
  const listItemStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  const headerStyle = {
    backgroundColor: 'white', // Set the background color to white
  };

  return (
    <div className="sticky top-0 z-50" style={headerStyle}>
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

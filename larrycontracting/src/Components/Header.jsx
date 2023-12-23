import React from 'react';
import bgphoto from "../img/woodgrain.jpg";
import logo from "../img/tools.png";

const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgphoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  };

  const listItemStyle = {
    transition: 'transform 0.3s ease-in-out',
  };

  const dividerStyle = {
    opacity: 0.7, // Adjust opacity as needed
    color: '#000', // Set color to black
    marginTop: '3px', // Adjust margin-top as needed
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div className="bg-cover text-white" style={backgroundStyle}>
      <div className="flex items-center p-4">
        <img src={logo} alt="Logo" className="h-12 mr-4" />
        <ul className="flex space-x-4">
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Home
          </li>
          <span style={dividerStyle}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            About Us
          </li>
          <span style={dividerStyle}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Our Services
          </li>
          <span style={dividerStyle}>|</span>
          <li
            style={listItemStyle}
            className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Gallery
          </li>
          <span style={dividerStyle}>|</span>
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

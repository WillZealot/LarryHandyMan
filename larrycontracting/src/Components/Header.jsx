import React from 'react';
import bgphoto from "../img/woodgrain.jpg";

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

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div className="bg-cover text-white" style={backgroundStyle}>
      <ul className="flex space-x-4 p-4">
        <li
          style={listItemStyle}
          className="text-black font-bold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Home
        </li>
        <span className="text-gray-400">|</span>
        <li
          style={listItemStyle}
          className="text-black font-bold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          About Us
        </li>
        <span className="text-gray-400">|</span>
        <li
          style={listItemStyle}
          className="text-black font-bold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Our Services
        </li>
        <span className="text-gray-400">|</span>
        <li
          style={listItemStyle}
          className="text-black font-bold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Gallery
        </li>
        <span className="text-gray-400">|</span>
        <li
          style={listItemStyle}
          className="text-black font-bold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default Header;

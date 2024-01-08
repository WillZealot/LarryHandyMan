import React from "react";
import { tools } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const listItemStyle = {
    transition: "transform 0.3s ease-in-out",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.1)";
  };

  const handleLeave = (event) => {
    event.target.style.transform = "scale(1)";
  };

  const headerStyle = {
    backgroundColor: "white", // Set the background color to white
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="sticky top-0 z-50" style={headerStyle}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={tools} alt="Logo" className="h-12 mr-4" />
          <div>
            <p className="text-black text-lg font-bold">LGC LLC</p>
          </div>
        </div>
        <ul className="flex space-x-4 ml-auto">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <li
                style={listItemStyle}
                className="text-black font-semibold text-lg hover:cursor-pointer transition duration-300 ease-in-out"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
              {index < links.length - 1 && (
                <span style={{ opacity: 0.7, color: "#000", marginTop: "3px" }}>
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';
import background from '../img/homeImage.jpg';

const MainPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 100% of the viewport height
  };

  const textStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '26px', // Adjusted font size to 26 pixels
  };

  const lineStyle = {
    borderBottom: '2px solid white',
    width: '50%', // Adjust the width of the line as needed
    margin: '20px auto', // Adjust the margin as needed
    opacity: '80%'
  };

  return (
    <div name="Home" className="w-full h-screen" style={backgroundStyle}>
      <div>
        <h1 style={textStyle}>LARRYS GENERAL CONSTRUCTION LLC</h1>
        <h1 style={textStyle} className="opacity-70">Your Local General Contractor</h1>
        <div style={lineStyle}></div>
        <h1 className="w-[85%] m-auto" style={textStyle}>
          Get In Touch With Your Local General Contractor For your Next Home Improvements, Upgrades, Or Repairs!
        </h1>
        {/* Add any other elements or images here */}
      </div>
    </div>
  );
};

export default MainPage;

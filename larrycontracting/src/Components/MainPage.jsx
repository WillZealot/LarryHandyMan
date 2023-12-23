import React from 'react'
import background from "../img/homeImage.jpg"

const MainPage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

  return (
    <div name="Home" className="w-full h-screen" style={backgroundStyle}>
    </div>
  )
}

export default MainPage
import React from "react";
import { homebackground } from "../assets";
import { Flex, Avatar, Button } from "@radix-ui/themes";
import { tools } from "../assets";

const MainPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${homebackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // 100% of the viewport height
  };

  const textStyle = {
    color: "white",
    textAlign: "center",
    fontSize: "26px", // Adjusted font size to 26 pixels
  };

  const lineStyle = {
    borderBottom: "2px solid white",
    width: "50%", // Adjust the width of the line as needed
    margin: "20px auto", // Adjust the margin as needed
    opacity: "80%",
  };

  return (
    <div
      name="Home"
      className="w-full h-screen pb-[3.5rem]"
      style={backgroundStyle}
    >
      <div className="bg-slate-800/50 pt-14 md:bg-transparent h-fit">
        <Flex justify="center" p="4">
          <Avatar
            size="8"
            src={tools}
            className="bg-slate-100/70 animate-fadeInLeft"
          />
        </Flex>
        <h1 style={textStyle} className="animate-fadeInRight">
          LARRYS GENERAL CONSTRUCTION LLC
        </h1>
        <h1 style={textStyle} className="lg:opacity-70 animate-fadeInRight">
          Your Local General Contractor
        </h1>
        <div style={lineStyle}></div>
        <h1 className="w-[85%] m-auto" style={textStyle}>
          Get In Touch With Your Local General Contractor For your Next Home
          Improvements, Upgrades, Or Repairs!
        </h1>
        {/* Add any other elements or images here */}
        <Flex p="5" justify="center" gap="4" className="flex-col md:flex-row">
          <Button color="green" size="4" radius="large" highContrast>
            Call Now : (407) 371-7701
          </Button>
          <Button color="green" size="4" radius="large" highContrast>
            Get a Quote
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default MainPage;

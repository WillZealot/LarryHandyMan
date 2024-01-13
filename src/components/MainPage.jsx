import React from "react";
import { Flex, Avatar, Button } from "@radix-ui/themes";
import { tools, home, alt } from "../assets";

const MainPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${alt})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh", // 100% of the viewport height
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
      <div className=" w-full h-[97vh] mx-auto bg-slate-900/60 pt-24">
        <Flex justify="center" p="4">
          <Avatar
            size="8"
            src={tools}
            className="bg-slate-100/70 animate-fadeInLeft"
          />
        </Flex>
        <h1 className="font-black text-white text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] animate-fadeInRight">
          LARRYS GENERAL CONSTRUCTION LLC
        </h1>
        <h1 className="text-white font-medium text-center lg:text-[30px] sm:text-[26px] xs:text-[24px] text-[24px] lg:leading-[40px] lg:opacity-70 animate-fadeInRight">
          Your Local General Contractor
        </h1>
        <div style={lineStyle}></div>
        <h1 className="w-[85%] m-auto text-gray-200 text-center lg:text-[26px] sm:text-[22px] xs:text-[20px] text-[16px] lg:leading-[40px] lg:opacity-70 animate-fadeInLeft hidden md:flex">
          Get In Touch With Your Local General Contractor For your Next Home
          Improvements, Upgrades, Or Repairs!
        </h1>
        {/* Add any other elements or images here */}
        <Flex p="5" justify="center" gap="4" className="flex-col md:flex-row">
          <Button color="blue" size="4" radius="large" highContrast>
            Call Now : (407) 371-7701
          </Button>
          <Button color="gray" size="4" radius="large" >
            Get a Quote
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default MainPage;

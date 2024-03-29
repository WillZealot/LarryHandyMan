import { Avatar, Button, Flex } from "@radix-ui/themes";
import React from "react";
import { useNavigate } from "react-router-dom";
import { alt, tools } from "../assets";

const MainPage = () => {
  const navigate = useNavigate();

  const backgroundStyle = {
    backgroundImage: `url(${alt})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  };

  const lineStyle = {
    borderBottom: "2px solid white",
    width: "50%",
    margin: "20px auto", 
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
        <h1 className="w-[85%] m-auto justify-center text-gray-200 text-center lg:text-[26px] sm:text-[22px] xs:text-[20px] text-[16px] lg:leading-[40px] lg:opacity-70 animate-fadeInLeft hidden md:flex">
          Get In Touch With Your Local General Contractor For your Next Home
          Improvements, Upgrades, Or Repairs!
        </h1>
        <Flex
          p="5"
          justify="center"
          gap="4"
          className="flex-col md:flex-row animate-fadeInLeft"
        >
          <Button
            color="blue"
            size="4"
            radius="large"
            highContrast
            onClick={() => (window.location.href = "tel:3603566008")}
            className="hover:cursor-pointer"
          >
            Call Now : (360) 356-6008
          </Button>
          <Button
            color="gray"
            size="4"
            radius="large"
            onClick={() => navigate("/contact")}
            className="hover:cursor-pointer"
          >
            Get a Quote
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default MainPage;

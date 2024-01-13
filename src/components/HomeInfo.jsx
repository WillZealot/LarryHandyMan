import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <>
      <Flex justify="center" align="center" direction="column" gap="6" p="3">
        <h1
          className={`text-black text-5xl md:text-6xl text-center my-5 font-extrabold`}
        >
          We Guarantee Your Satisfaction!
        </h1>
        <h2 className="text-red-800 text-5xl font-medium text-center">
          {" "}
          General Services
        </h2>
        <ul className="flex-col justify-center text-center space-y-3 text-xl">
          <li>Dryrot Repair</li>
          <li>Window Replacement</li>
          <li>Framing</li>
          <li>Remodeling</li>
          <li>Drywall Repair</li>
          <li>Siding</li>
          <li>Decks</li>
          <li>Patio Covers</li>
          <li>Flooring</li>
          <li>Fire Damage</li>
          <li>Painting</li>
          <li>Demolition</li>
          <li>Electrical Wiring</li>
        </ul>
      </Flex>
      <Flex my="6" justify="center">
        <Button color="gray" size="4" radius="full">
          <Link to="/services">More Services</Link>
        </Button>
      </Flex>
    </>
  );
};

export default HomeInfo;

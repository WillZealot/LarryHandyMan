import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeInfo = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
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
          <li>Carpentry</li>
          <li>Trim Replacement</li>
          <li>Renovations</li>
          <li>Soffit Repair</li>
          <li>Water leak & damage</li>
          <li>Trash Haul</li>
        </ul>
      </Flex>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <Flex my="6" justify="center">
          <Button color="gray" size="4" radius="full">
            <Link to="/services">More Services</Link>
          </Button>
        </Flex>
      </motion.div>
    </motion.div>
  );
};

export default HomeInfo;

import { ImageIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
} from "@radix-ui/themes";
import React from "react";
import { services } from "../constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCards = () => {
  const navigate = useNavigate();
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
      <Grid
        gap="5"
        columns={{ initial: "1", sm: "9" }}
        p={{ initial: "3", lg: "7" }}
        my="3"
      >
        {services.map((service, index) => (
          <Box key={index} className="md:col-span-3 shadow-xl">
            <Card>
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 200,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Heading align="center">{service.title}</Heading>
              <Flex
                justify="center"
                gap="4"
                p="4"
                className="flex-col md:flex-row"
              >
                <Button
                  color="green"
                  size="4"
                  radius="full"
                  onClick={() => navigate("/contact")}
                >
                  Request a Quote
                </Button>
                <Button
                  color="cyan"
                  size="4"
                  radius="full"
                  onClick={() => navigate(`/services/${index + 1}`)}
                >
                  Learn More <ImageIcon width="16" height="16" />
                </Button>
              </Flex>
            </Card>
          </Box>
        ))}
      </Grid>
    </motion.div>
  );
};

export default ServiceCards;

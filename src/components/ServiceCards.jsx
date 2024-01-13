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

const ServiceCards = () => {
  return (
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
            <Flex justify="center" gap="4" p="4">
            <Link to={`/contact`}>
              <Button color="green" size="4" radius="full">
                Request a Quote
              </Button>
              </Link>
              <Link to={`/services/${index + 1}`}>
                <Button color="cyan" size="4" radius="full">
                  Learn More <ImageIcon width="16" height="16" />
                </Button>
              </Link>
            </Flex>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default ServiceCards;

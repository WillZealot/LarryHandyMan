import React from "react";
import {
  Flex,
  Text,
  Heading,
  Button,
  Grid,
  Box,
  Card,
  Inset,
  Strong,
} from "@radix-ui/themes";

const AboutBody = () => {
  return (
    <Grid
      gap="5"
      columns={{ initial: "1", sm: "12" }}
      p={{ initial: "3", lg: "7" }}
      my="3"
    >
      <Box className="md:col-span-3">
        <Card>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 200,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Heading align="center">Maintanence</Heading>
          <Flex justify="center" gap="4" p="4">
            <Button>Request a Quote</Button>
            <Button>Gallery</Button>
          </Flex>
        </Card>
      </Box>
    </Grid>
  );
};

export default AboutBody;

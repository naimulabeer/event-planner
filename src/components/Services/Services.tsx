import { Grid } from "@chakra-ui/react";
import React, { FC } from "react";
import ServiceItem from "./ServicesItem";

type Service = {
  imageSrc: string;
  title: string;
  description: string;
};

type ServicesProps = {
  services: Service[];
};

const Services: FC<ServicesProps> = ({ services }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(3, 1fr)",
      }}
      textColor="#AF9453"
      alignItems="center"
      textAlign="center"
      justifyItems="center"
      gap={{ base: 10, lg: 0 }}
      mb={10}
    >
      {services?.map((service, index) => (
        <ServiceItem
          key={index}
          imageSrc={service.imageSrc}
          title={service.title}
          description={service.description}
        />
      ))}
    </Grid>
  );
};

export default Services;

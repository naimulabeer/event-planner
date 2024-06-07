import Column from "@/library/utils/column/Column";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Button from "./Button";

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Column px={{ base: 0, lg: 20 }}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        py={{ base: 4, lg: 10, xl: 20 }}
        px={{ base: 4, lg: 20, xl: 40 }}
        justifyContent="space-evenly"
        bgColor="#AF9453"
        textColor="#FFFFFF"
        gap={4}
        fontFamily="BrandonGrot"
        fontWeight={300}
        fontSize={18}
      >
        <Flex flexDir="column">
          <Text>500 Terry</Text>
          <Text>Francine Street </Text>
          <Text>San Francisco CA 94158</Text>
        </Flex>
        <Box
          borderLeft={{ base: "none", lg: "1px solid white" }}
          my={{ base: 4, lg: 0 }}
        />

        <Flex flexDir="column">
          <Text>Tel: 123-456-7890</Text>
          <Text>Fax: 123-456-7890</Text>
          <Text>info@mysite.com</Text>
        </Flex>
        <Box
          borderLeft={{ base: "none", lg: "1px solid white" }}
          my={{ base: 4, lg: 0 }}
        />

        <Flex flexDir="column">
          <Text>©2035 by Twilight Events.</Text>
          <Text>Powered and secured by Wix </Text>
        </Flex>

        <Flex flexDir="column" justifyContent="center" gap={10}>
          <Flex gap={4} cursor="pointer">
            <FaTwitter />
            <FaFacebook />
            <FaPinterest />
            <FaInstagram />
          </Flex>
          <Button label="Book Now" />
        </Flex>
      </Flex>
    </Column>
  );
};

export default Footer;

import { ebGaramond } from "@/lib/fonts";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";

type AboutSectionProps = {};

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <Box p={{ base: 0, lg: 20 }}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        h={{ base: "full", lg: 550 }}
        justifyContent="space-between"
        alignItems={{ base: "center", lg: "normal" }}
        gap={20}
      >
        <Image w={436} src="/about.jpg" />
        <Flex
          bg="#FBFBFB"
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          p={10}
          letterSpacing={2}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            px={{ base: 4, lg: 10, xl: 40 }}
            gap={2}
          >
            <BiSolidQuoteAltRight size={30} />
            <Text
              fontSize={{ base: 30, lg: 40 }}
              px={{ base: 0, xl: 20 }}
              fontFamily={ebGaramond.className}
            >
              Making Dreams Come True
            </Text>
            <Text fontFamily="BrandonGrot" fontWeight={300}>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            fontSize={22}
            textColor="#AF9453"
            fontFamily={ebGaramond.className}
          >
            <Text>Chandler Bing</Text>
            <Text>Co-Founder & Creative Director</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutSection;

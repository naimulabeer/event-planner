import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { FC } from "react";
import EventCard from "../Global/EventCard";
import { ebGaramond } from "@/lib/fonts";

type ContactCompProps = {};

const Contact: FC<ContactCompProps> = ({}) => {
  return (
    <Flex
      px={{ base: 0, lg: 20 }}
      flexDir={{ base: "column", xl: "row" }}
      justifyContent="space-between"
      gap={{ base: 4, md: 8, lg: 10, xl: 20 }}
    >
      <EventCard
        title="Services"
        description="Turn your dream into a reality"
        buttonText="Discover"
        bgColor="#575555"
        textColor="#FFFFFF"
        w={{ base: "full", xl: 600 }}
      />
      <Flex
        bg="#FBFBFB"
        w="full"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        p={10}
        letterSpacing={2}
        fontFamily="BrandonGrot"
        fontWeight={300}
      >
        <Container py={4}>
          <Text
            mb={8}
            textAlign="center"
            fontFamily={ebGaramond.className}
            textColor="#333333"
            fontSize={22}
            letterSpacing={3}
          >
            Please fill out this form and we will get back to you shortly
          </Text>
          <form>
            <Flex direction={{ base: "column", md: "row" }} mb={4} gap={6}>
              <FormControl id="first-name" isRequired>
                <FormLabel fontWeight={300}>Enter Your Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  _placeholder={{ px: 2, textColor: `#AF9453` }}
                  variant="unstyled"
                  mt={2}
                  borderBottom="1px solid"
                  borderColor="gray.400"
                  borderRadius="none"
                  _hover={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                  _focus={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                />
              </FormControl>
              <FormControl id="last-name">
                <FormLabel fontWeight={300}>Enter Your Last Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Last Name"
                  _placeholder={{ px: 2, textColor: `#AF9453` }}
                  variant="unstyled"
                  mt={2}
                  borderBottom="1px solid"
                  borderColor="gray.400"
                  borderRadius="none"
                  _hover={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                  _focus={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                />
              </FormControl>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} mb={4} gap={4}>
              <FormControl id="phone" isRequired>
                <FormLabel fontWeight={300}>Enter Your Phone</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone"
                  _placeholder={{ px: 2, textColor: `#AF9453` }}
                  variant="unstyled"
                  mt={2}
                  borderBottom="1px solid"
                  borderColor="gray.400"
                  borderRadius="none"
                  _hover={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                  _focus={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontWeight={300}>Enter Your Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  _placeholder={{ px: 2, textColor: `#AF9453` }}
                  mt={2}
                  variant="unstyled"
                  borderBottom="1px solid"
                  borderColor="gray.400"
                  borderRadius="none"
                  _hover={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                  _focus={{
                    border: "1px solid",
                    borderColor: "gray.500",
                    borderRadius: "sm",
                  }}
                />
              </FormControl>
            </Flex>
            <FormControl id="message" isRequired mb={4}>
              <FormLabel fontWeight={300}>Type Your Message Here</FormLabel>
              <Textarea
                placeholder="Type your message here..."
                _placeholder={{ px: 2, textColor: `#AF9453` }}
                variant="unstyled"
                borderBottom="1px solid"
                mt={2}
                borderColor="gray.400"
                borderRadius="none"
                _hover={{
                  border: "1px solid",
                  borderColor: "gray.500",
                  borderRadius: "md",
                }}
                _focus={{
                  border: "1px solid",
                  borderColor: "gray.500",
                  borderRadius: "md",
                }}
              />
            </FormControl>
            <Box textAlign="center">
              <Button type="submit" variant="none" mt={4}>
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </Flex>
    </Flex>
  );
};

export default Contact;

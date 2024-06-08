import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import EventCard from "../Global/EventCard";
import { ebGaramond } from "@/lib/fonts";
import styles from "./contact.module.css";

type ContactCompProps = {};

const Contact: FC<ContactCompProps> = ({}) => {
  return (
    <Flex
      px={{ base: 0, lg: 20 }}
      flexDir={{ base: "column", lg: "row" }}
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
        fontFamily={ebGaramond.className}
        textColor="#333333"
      >
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Please fill out this form and we will get back to you shortly
          </h1>
          <form className={styles.form}>
            <div className={styles.formControl}>
              <label htmlFor="first-name" className={styles.label}>
                Enter Your Name *
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="last-name" className={styles.label}>
                Enter Your Last Name *
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Last Name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="phone" className={styles.label}>
                Enter Your Phone *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Phone"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email" className={styles.label}>
                Enter Your Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
            </div>
            <div
              className={styles.formControl}
              style={{ gridColumn: "span 2" }}
            >
              <label htmlFor="message" className={styles.label}>
                Type Your Message Here *
              </label>
              <textarea
                id="message"
                placeholder="Type your message here..."
                className={styles.textarea}
                rows={4}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </Flex>
    </Flex>
  );
};

export default Contact;

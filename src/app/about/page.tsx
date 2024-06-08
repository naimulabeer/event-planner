import AboutSection from "@/components/About/AboutSection";
import HeroTitle from "@/components/Global/HeroTitle";
import Column from "@/components/utils/column/Column";
import React, { FC } from "react";

type AboutPageProps = {};

const Page: FC<AboutPageProps> = ({}) => {
  return (
    <Column gap={6} mt={10} mb={10}>
      <HeroTitle title="About us" />
      <AboutSection />
    </Column>
  );
};

export default Page;

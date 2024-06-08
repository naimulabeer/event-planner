import Contact from "@/components/Contact/Contact";
import HeroTitle from "@/components/Global/HeroTitle";
import Column from "@/library/utils/column/Column";
import React, { FC } from "react";

type ContactPageProps = {};

const Page: FC<ContactPageProps> = ({}) => {
  return (
    <Column gap={6} mt={10} mb={10}>
      <HeroTitle title="Contact Us" />
      <Contact />
    </Column>
  );
};

export default Page;

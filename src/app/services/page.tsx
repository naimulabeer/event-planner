import React, { FC } from "react";
import HeroTitle from "@/components/Global/HeroTitle";
import Services from "@/components/Services/Services";
import Column from "@/library/utils/column/Column";
import {
  weddingServices,
  privatePartyServices,
  corporateEventServices,
} from "@/lib/servicesData";

type ServicePageProps = {};

const Page: FC<ServicePageProps> = ({}) => {
  return (
    <Column gap={6} mb={10} mt={10}>
      <HeroTitle title="Services" fontSize={18} />
      <HeroTitle title="Weddings" />
      <Services services={weddingServices} />
      <HeroTitle title="PRIVATE PARTIES" />
      <Services services={privatePartyServices} />
      <HeroTitle title="CORPORATE EVENTS" />
      <Services services={corporateEventServices} />
    </Column>
  );
};

export default Page;

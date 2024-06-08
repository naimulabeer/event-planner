import Gallery from "@/components/Global/Gallery";
import HeroTitle from "@/components/Global/HeroTitle";
import Column from "@/components/utils/column/Column";
import React, { FC } from "react";

type GalleryPageProps = {};

const Page: FC<GalleryPageProps> = ({}) => {
  return (
    <Column gap={6} mt={10} mb={10}>
      <HeroTitle title="Gallery" />
      <Gallery />
    </Column>
  );
};

export default Page;

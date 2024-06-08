"use client";

import React, { FC } from "react";
import ImageGallery from "react-image-gallery";
import { imagesData } from "@/lib/imagesData";
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery.css";

type GalleryProps = {};

const Gallery: FC<GalleryProps> = ({}) => {
  return (
    <div>
      <ImageGallery showPlayButton={false} items={imagesData} />
    </div>
  );
};

export default Gallery;

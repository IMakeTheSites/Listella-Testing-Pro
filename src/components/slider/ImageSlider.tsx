import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Photo } from "@/types";

const ImageSlider = ({ photos }: { photos: Photo[] }) => {
  return (
    <Carousel
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      centerMode
      centerSlidePercentage={25}
      dynamicHeight={false}
      swipeable
      emulateTouch
      selectedItem={4}
    >
      {photos.map((photo) => (
        <Box key={photo.id} sx={{ width: "100%", height: "100%", px: 1 }}>
          <img
            src={photo.img_src}
            alt="Rover"
            style={{ height: "inherit", objectFit: "cover" }}
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageSlider;

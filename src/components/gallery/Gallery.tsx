import React from "react";

import { Box, Breadcrumbs, Divider, Grid, Typography } from "@mui/material";

import ImageSlider from "@/components/slider/ImageSlider";
import Link from "@/components/atoms/Link";

import AstronautImage from "@/assets/astronaut.jpg";
import PlanetIcon from "@/assets/planet.svg";
import RightIcon from "@/assets/right.svg";

import { Photo } from "@/types";

const breadcrumbs = [
  <Typography
    sx={{
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "35px",
    }}
    key="1"
  >
    <Link href="/">Galleries</Link>
  </Typography>,
  <Typography
    key="2"
    sx={{
      color: "#000000",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "35px",
    }}
  >
    Space Database
  </Typography>,
];

const Gallery = ({ photos }: { photos: Photo[] }) => {
  return (
    <Grid container spacing={3} sx={{ px: 8, py: 3 }}>
      <Grid
        item
        sm={12}
        md={4}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Breadcrumbs separator="·" sx={{ mb: 2 }}>
          {breadcrumbs}
        </Breadcrumbs>
        <Box sx={{ width: "100%", height: "100%" }}>
          <Box
            component="img"
            src={AstronautImage.src}
            alt="Astronomy"
            sx={{ width: "100%", height: "100%", borderRadius: "30px" }}
          />
        </Box>
      </Grid>
      <Grid item sm={12} md={8}>
        <Box
          sx={{
            py: 3,
            px: 4,
            borderRadius: 2.5,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <Box
              component="img"
              src={PlanetIcon.src}
              alt="Moon"
              sx={{ width: 108, height: 108 }}
            ></Box>
            <Box sx={{ ml: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "32px",
                  lineHeight: "43px",
                }}
              >
                NASA’s Space Database
              </Typography>
              <Link href="/">
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#4D54FF",
                    fontSize: "24px",
                    lineHeight: "32px",
                  }}
                >
                  Our Public Gallery for Outer Space
                </Typography>
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              We want to see space through your eyes! Take photos and upload
              them to our public library. Our goal is to provide the largest
              database of quality images. Space is amazing! Let’s capture it
              together!
            </Typography>
            <Box sx={{ mt: 6 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                }}
              >
                Featured Images
              </Typography>
              <Link href="/">
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#4D54FF",
                    fontSize: "24px",
                    lineHeight: "32px",
                  }}
                >
                  Scroll to see more
                </Typography>
              </Link>
              <Box sx={{ mt: 2, display: "flex", flexDirection: "column" }}>
                <ImageSlider photos={photos} />
                <Link href="/">
                  <Typography
                    textAlign="end"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",

                      pr: 9,
                      mt: 4,
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                    }}
                  >
                    View Gallery{" "}
                    <Box
                      component="img"
                      src={RightIcon.src}
                      alt="Right"
                      sx={{ width: 8, height: 16, ml: 2, my: "auto" }}
                    />
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Gallery;

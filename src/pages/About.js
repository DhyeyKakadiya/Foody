import React from "react";
import Layout from "./../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Foody</Typography>
        <p>
          At Foody, we take pride in our diverse and meticulously crafted menus.
          Our culinary team sources the freshest, local ingredients to create
          dishes that are a harmonious blend of tradition and innovation. Each
          bite is a journey of flavor, carefully designed to tantalize your
          taste buds. Whether you're here for a romantic evening, a family
          gathering, or a business meeting, our restaurant is the perfect
          backdrop for unforgettable dining moments.
        </p>
        <br />
        <p>
          Our dedicated staff is committed to providing impeccable service,
          ensuring that your visit is seamless and memorable. For those seeking
          an intimate dining experience or hosting special events, Foody offers
          private dining options and event spaces that can be tailored to your
          specific needs. Whether it's a corporate function, a wedding
          celebration, or a cozy dinner for two, we have the expertise to make
          your experience exceptional.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

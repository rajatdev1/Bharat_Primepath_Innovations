import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import "./Hero.css";
import heroBg from "../../assets/images/2.jpg"; 

const Hero = () => {
  return (
    <Box
      id="home"
      className="hero-section"
      sx={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "75vh", // full screen height
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              className="hero-title"
            >
              Innovative Software Solutions for Your Business
            </Typography>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              className="hero-subtitle"
                sx={{ color: "white" }}
            >
              We specialize in ERP, e-commerce, SaaS applications, and custom
              software development to transform your business operations.
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="cta-button"
              href="#contact"
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

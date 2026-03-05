import React, { useEffect, useRef } from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import "./Hero.css";

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="home"
      ref={heroRef}
      className="hero-section"
      sx={{
        background: `linear-gradient(135deg, #0A0F1F 0%, #1A1F35 100%)`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background */}
      <Box className="hero-bg">
        <Box className="gradient-orb orb1"></Box>
        <Box className="gradient-orb orb2"></Box>
        <Box className="gradient-orb orb3"></Box>
        <Box className="grid-pattern"></Box>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={7}>
            <Box className="hero-content">
              <Typography variant="overline" className="hero-overline">
                🚀 Welcome to Future of Technology
              </Typography>
              
              <Typography variant="h1" className="hero-title">
                Innovate. Build.
                <span className="gradient-text"> Transform.</span>
              </Typography>
              
              <Typography variant="h5" className="hero-subtitle">
                We craft cutting-edge software solutions that propel businesses into the digital future.
              </Typography>

              {/* <Box className="hero-stats">
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">50+</Typography>
                  <Typography variant="body2">Projects</Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">10+</Typography>
                  <Typography variant="body2">Experts</Typography>
                </Box>
                <Box className="stat-item">
                  <Typography variant="h3" className="stat-number">5+</Typography>
                  <Typography variant="body2">Years</Typography>
                </Box>
              </Box> */}

              <Box className="hero-buttons">
                <Button
                  variant="contained"
                  size="large"
                  className="cta-button primary"
                  href="#contact"
                >
                  Start Project
                  <RocketLaunchIcon sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="cta-button secondary"
                  href="#services"
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box className="hero-cards">
              <Box className="floating-card card1">
                <CodeIcon className="card-icon" />
                <Typography variant="h6">Full Stack</Typography>
              </Box>
              <Box className="floating-card card2">
                <CloudIcon className="card-icon" />
                <Typography variant="h6">Cloud Native</Typography>
              </Box>
              <Box className="floating-card card3">
                <SecurityIcon className="card-icon" />
                <Typography variant="h6">Secure</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

     
    </Box>
  );
};

export default Hero;
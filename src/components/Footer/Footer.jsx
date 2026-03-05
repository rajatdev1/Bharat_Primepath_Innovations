import React from 'react';
import { Container, Typography, IconButton, Grid, Box, TextField, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="footer-logo">
              Bharat <span className="highlight">Primepath</span>
            </Typography>
            <Typography variant="body2" className="footer-text">
              Transforming ideas into innovative software solutions. 
              Your trusted technology partner for digital excellence.
            </Typography>
            <Box className="social-links">
              <IconButton className="social-icon"><LinkedInIcon /></IconButton>
              <IconButton className="social-icon"><InstagramIcon /></IconButton>
              <IconButton className="social-icon"><FacebookIcon /></IconButton>
              <IconButton className="social-icon"><TwitterIcon /></IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="footer-title">Quick Links</Typography>
            <Box className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">Contact</Typography>
            <Box className="contact-info">
              <Box className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <Typography variant="body2">Noida, UP - 201301</Typography>
              </Box>
              <Box className="contact-item">
                <PhoneIcon className="contact-icon" />
                <Typography variant="body2">+91 7282815210</Typography>
              </Box>
              <Box className="contact-item">
                <EmailIcon className="contact-icon" />
                <Typography variant="body2">bharatprimepath2025@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" className="footer-title">Newsletter</Typography>
            <Typography variant="body2" className="newsletter-text">
              Subscribe for tech insights and updates
            </Typography>
            <Box className="newsletter-form">
              <TextField
                placeholder="Your email"
                variant="outlined"
                size="small"
                className="newsletter-input"
              />
              <Button 
                variant="contained" 
                className="newsletter-btn"
              >
                <SendIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright">
            © 2024 Bharat Primepath Innovations. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
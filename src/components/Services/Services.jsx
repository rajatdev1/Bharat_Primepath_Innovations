 import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import './Services.css';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'ERP Systems',
      description: 'Comprehensive Enterprise Resource Planning solutions tailored to your business needs.'
    },
    {
      title: 'E-commerce Platforms',
      description: 'Robust online store solutions with seamless payment integration and inventory management.'
    },
    {
      title: 'SaaS Applications',
      description: 'Scalable Software-as-a-Service solutions with subscription management and cloud deployment.'
    },
    {
      title: 'CMS & Blogging Platforms',
      description: 'Content Management Systems for effortless content creation and publishing.'
    },
    {
      title: 'Learning Management Systems',
      description: 'Interactive e-learning platforms with course management and progress tracking.'
    },
    {
      title: 'Social Media Applications',
      description: 'Engaging social networking platforms with real-time communication features.'
    },
    {
      title: 'Portfolio & Business Websites',
      description: 'Professional websites showcasing your business and services.'
    },
    {
      title: 'Industry-specific Solutions',
      description: 'Custom applications for Healthcare, EdTech, FinTech, and other industries.'
    },
    {
      title: 'Management Systems',
      description: 'Employee management, school management, and other organizational systems.'
    }
  ];

return (
    <div id="services" className="services-section">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom className="section-title">
          Our Services
        </Typography>
        <Typography variant="h6" align="center" className="section-subtitle" gutterBottom>
          We offer comprehensive software solutions tailored to your business needs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="service-grid-item">
              <ServiceCard service={service} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
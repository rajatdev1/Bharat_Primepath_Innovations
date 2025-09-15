 import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './Services.css';

const ServiceCard = ({ service, index }) => {
  return (
    <Card className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <CardContent>
        <Box className="service-icon">
          {index + 1}
        </Box>
        <Typography variant="h5" component="h3" gutterBottom className="service-title">
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="service-description">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './Services.css';

const ServiceCard = ({ service, index }) => {
  const icons = ['💻', '🛒', '☁️', '📝', '📚', '👥', '🌐', '⚕️', '📊'];

  return (
    <Card 
      className="service-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent>
        <Box className="service-icon">
          <span className="icon-emoji">{icons[index % icons.length]}</span>
        </Box>
        <Typography variant="h5" className="service-title">
          {service.title}
        </Typography>
        <Typography variant="body2" className="service-description">
          {service.description}
        </Typography>
        <Box className="card-shine"></Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
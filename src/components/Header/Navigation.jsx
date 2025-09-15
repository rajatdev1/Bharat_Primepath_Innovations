 import React from 'react';
import { Typography, Box } from '@mui/material';

const Navigation = ({ isMobile, menuItems }) => {
  return (
    <Box className={isMobile ? "mobile-nav-items" : "nav-items"}>
      {menuItems.map((item) => (
        <Typography 
          key={item.text} 
          variant="body1" 
          component="a" 
          href={item.href}
          className="nav-link"
        >
          {item.text}
        </Typography>
      ))}
    </Box>
  );
};

export default Navigation;
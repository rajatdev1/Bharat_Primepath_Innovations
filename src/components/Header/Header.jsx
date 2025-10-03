 import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Header.css';
import Logo from "../../assets/images/logo3.png"; 

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About Us', href: '#about' },
    { text: 'Our Services', href: '#services' },
    { text: 'Career', href: '#career' },
    { text: 'Live Projects', href: '#products' },
    { text: 'Contact Us', href: '#contact' }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={() => setDrawerOpen(false)}
            component="a"
            href={item.href}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" className="app-bar" elevation={0}>
      <Toolbar className="toolbar">
      <Typography
  variant="h6"
  component="div"
  className="logo"
  sx={{
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#1976d2'
  }}
>
  <img
    src={Logo}
    alt="Logo"
    style={{
      height: "160px", // header ke hisaab se perfect size
      width: "auto",
      marginRight: isMobile ? "0px" : "-42px", // mobile me margin adjust
      objectFit: "contain",
      display: "block"
    }}
  />
  {!isMobile && ( // text sirf desktop/tablet me dikhe
    <span
      style={{
        fontSize: '1.2rem',
        fontWeight: 600,
        letterSpacing: '1px',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      Bharat <span style={{ color: '#0d47a1' }}>Primepath</span> Innovations
    </span>
  )}
</Typography>


        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box className="nav-items">
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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
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
  Box,
  Button,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import './Header.css';
import Logo from "../../assets/images/logowhite.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Products', href: '#products' },
    { text: 'Contact', href: '#contact' }
  ];

  const drawer = (
    <Box sx={{ width: 280 }} role="presentation" className="drawer-content">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
            Bharat <span className="logo-highlight">Primepath</span>
          </Typography>
        </Box>
        <IconButton onClick={() => setDrawerOpen(false)} className="close-btn">
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={() => setDrawerOpen(false)}
            component="a"
            href={item.href}
            className="drawer-item"
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      className={`app-bar ${scrolled ? 'scrolled' : ''}`} 
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar className="toolbar" disableGutters>
          <Box
            className="logo"
            onClick={() => window.location.href = '#home'}
            sx={{ cursor: 'pointer' }}
          >
            <img
              src={Logo}
              alt="Bharat Primepath Innovations"
              className="logo-img"
            />
            {!isMobile && (
              <Box className="logo-text">
                <Typography variant="h6" component="span" className="logo-main">
                  Bharat <span className="logo-highlight">Primepath</span>
                </Typography>
                <Typography variant="caption" className="logo-sub">
                  Innovations
                </Typography>
              </Box>
            )}
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => setDrawerOpen(true)}
                className="menu-btn"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                classes={{ paper: 'drawer-paper' }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box className="nav-items">
              {menuItems.map((item) => (
                <Typography 
                  key={item.text} 
                  component="a" 
                  href={item.href}
                  className="nav-link"
                >
                  {item.text}
                </Typography>
              ))}
              <Button 
                variant="contained" 
                className="contact-btn"
                href="#contact"
              >
                Let's Talk
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
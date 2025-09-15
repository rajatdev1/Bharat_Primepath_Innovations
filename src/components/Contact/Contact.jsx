import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import ContactForm from './ContactForm';
import './Contact.css';

const Contact = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(`https://wa.me/917282815210`, '_blank');
  };

  return (
    <Box id="contact" className="contact-section">
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom className="section-title">
          Contact Us
        </Typography>
        
        <Box className="contact-content">
          <Box className="contact-info">
            <Typography variant="h5" gutterBottom className="info-title">
              Get in Touch
            </Typography>
            
            <Box className="contact-methods">
              <Box className="contact-method" onClick={openWhatsApp}>
                <WhatsAppIcon color="primary" sx={{ fontSize: 40 }} />
                <Box className="contact-details">
                  <Typography variant="h6">Chat on WhatsApp</Typography>
                  <Typography variant="body2">+91 7282815210</Typography>
                </Box>
              </Box>
              
              <Box className="contact-method" onClick={() => setEmailDialogOpen(true)}>
                <EmailIcon color="primary" sx={{ fontSize: 40 }} />
                <Box className="contact-details">
                  <Typography variant="h6">Send us an Email</Typography>
                  <Typography variant="body2">bharatprimepath2025@gmail.com</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          
          <Box className="contact-form-container">
            <Typography variant="h5" gutterBottom className="info-title">
              Send a Message
            </Typography>
            <ContactForm />
          </Box>
        </Box>
      </Container>

      <Dialog open={emailDialogOpen} onClose={() => setEmailDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Send us an Email
          <IconButton
            aria-label="close"
            onClick={() => setEmailDialogOpen(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Contact;
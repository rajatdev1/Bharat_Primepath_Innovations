 import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress
} from '@mui/material';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    purpose: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS service parameters (you need to create an account at https://www.emailjs.com/)
    const serviceID = 'service_ogbsmzm';
    const templateID = 'template_enrecrb';
    const userID = 'jq677jVZp9KOaVG_6';
    
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      contact_no: formData.contactNo,
      purpose: formData.purpose,
      to_email: 'bharatprimepath2025@gmail.com'
    }, userID)
    .then((result) => {
      setAlert({
        show: true,
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      setFormData({ name: '', email: '', contactNo: '', purpose: '' });
      setLoading(false);
    }, (error) => {
      setAlert({
        show: true,
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      setLoading(false);
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="contact-form">
      {alert.show && (
        <Alert severity={alert.type} sx={{ mb: 2 }} onClose={() => setAlert({ show: false, type: '', message: '' })}>
          {alert.message}
        </Alert>
      )}
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Your Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={formData.name}
        onChange={handleInputChange}
        variant="outlined"
        className="form-field"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleInputChange}
        variant="outlined"
        className="form-field"
      />
      <TextField
        margin="normal"
        fullWidth
        id="contactNo"
        label="Contact Number"
        name="contactNo"
        autoComplete="tel"
        value={formData.contactNo}
        onChange={handleInputChange}
        variant="outlined"
        className="form-field"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="purpose"
        label="Purpose/Message"
        name="purpose"
        multiline
        rows={4}
        value={formData.purpose}
        onChange={handleInputChange}
        variant="outlined"
        className="form-field"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
        sx={{ mt: 3, mb: 2, py: 1.5 }}
        className="submit-button"
      >
        {loading ? <CircularProgress size={24} /> : 'Send Message'}
      </Button>
    </Box>
  );
};

export default ContactForm;
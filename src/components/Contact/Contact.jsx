import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Button,
  Alert,
  CircularProgress,
  InputAdornment,

  useTheme
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
 

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    purpose: ''
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [focusedField, setFocusedField] = useState('');

  const openWhatsApp = () => {
    window.open(`https://wa.me/917282815210?text=Hello%20Bharat%20Primepath%20Innovations%2C%20I%27d%20like%20to%20discuss%20a%20project.`, '_blank');
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return false;
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return false;
    if (!formData.purpose.trim()) return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Please fill all required fields correctly.'
      });
      return;
    }

    setLoading(true);
    
    // EmailJS service parameters
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
        message: '✨ Message sent successfully! We\'ll get back to you within 24 hours.'
      });
      setFormData({ name: '', email: '', contactNo: '', purpose: '' });
      setLoading(false);
      
      // Auto hide alert after 5 seconds
      setTimeout(() => {
        setAlert({ show: false, type: '', message: '' });
      }, 5000);
    }, (error) => {
      setAlert({
        show: true,
        type: 'error',
        message: '❌ Failed to send message. Please try again or email us directly.'
      });
      setLoading(false);
    });
  };

  return (
    <Box id="contact" className="contact-section">
      {/* Animated Background Elements */}
      <Box className="contact-bg">
        <Box className="gradient-orb orb1"></Box>
        <Box className="gradient-orb orb2"></Box>
      </Box>

      <Container maxWidth="xl">
        <Box className="section-header" data-aos="fade-up">
          <Typography variant="h2" className="section-title">
            Get In <span className="highlight">Touch</span>
          </Typography>
          <Typography variant="h5" className="section-subtitle">
            Let's discuss your next big idea
          </Typography>
        </Box>

        {/* Main Content - Both sections in one row */}
        <Box className="contact-main">
          {/* Left Section - Connect With Us (40% width) */}
          <Box className="contact-info-section" data-aos="fade-right">
            <Typography variant="h4" className="info-title">
              Connect With Us
            </Typography>
            
            <Typography variant="body1" className="info-description">
              Have a question or want to discuss a project? We're here to help!
              Choose your preferred way to reach us.
            </Typography>

            <Box className="contact-methods">
              {/* WhatsApp Card */}
              <Box className="contact-method" onClick={openWhatsApp}>
                <Box className="method-icon whatsapp">
                  <WhatsAppIcon />
                </Box>
                <Box className="method-details">
                  <Typography variant="h6">WhatsApp</Typography>
                  <Typography variant="body2">+91 7282815210</Typography>
                  <Typography variant="caption" className="method-note">
                    Quickest response (within 5 min)
                  </Typography>
                </Box>
                <Box className="method-glow"></Box>
              </Box>

              {/* Email Card */}
              <Box className="contact-method" onClick={() => setEmailDialogOpen(true)}>
                <Box className="method-icon email">
                  <EmailIcon />
                </Box>
                <Box className="method-details">
                  <Typography variant="h6">Email Us</Typography>
                  <Typography variant="body2">bharatprimepath2025@gmail.com</Typography>
                  <Typography variant="caption" className="method-note">
                    Response within 24 hours
                  </Typography>
                </Box>
                <Box className="method-glow"></Box>
              </Box>
            </Box>

            {/* Quick Stats */}
            <Box className="contact-stats">
              <Box className="stat-item">
                <Typography variant="h4">24/7</Typography>
                <Typography variant="body2">Support</Typography>
              </Box>
              <Box className="stat-item">
                <Typography variant="h4">30min</Typography>
                <Typography variant="body2">Avg Response</Typography>
              </Box>
              <Box className="stat-item">
                <Typography variant="h4">100%</Typography>
                <Typography variant="body2">Satisfaction</Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Contact Form (60% width) */}
          <Box className="contact-form-section" data-aos="fade-left">
            <Typography variant="h4" className="form-title">
              Send a Message
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} className="contact-form">
              {alert.show && (
                <Alert 
                  severity={alert.type} 
                  className={`form-alert ${alert.type}`}
                  onClose={() => setAlert({ show: false, type: '', message: '' })}
                >
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
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                variant="outlined"
                className={`form-field ${focusedField === 'name' ? 'focused' : ''}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon className="field-icon" />
                    </InputAdornment>
                  ),
                }}
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
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                variant="outlined"
                className={`form-field ${focusedField === 'email' ? 'focused' : ''}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon className="field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                margin="normal"
                fullWidth
                id="contactNo"
                label="Contact Number (Optional)"
                name="contactNo"
                autoComplete="tel"
                value={formData.contactNo}
                onChange={handleInputChange}
                onFocus={() => handleFocus('contactNo')}
                onBlur={handleBlur}
                variant="outlined"
                className={`form-field ${focusedField === 'contactNo' ? 'focused' : ''}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon className="field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="purpose"
                label="Your Message"
                name="purpose"
                multiline
                rows={4}
                value={formData.purpose}
                onChange={handleInputChange}
                onFocus={() => handleFocus('purpose')}
                onBlur={handleBlur}
                variant="outlined"
                className={`form-field ${focusedField === 'purpose' ? 'focused' : ''}`}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
                      <MessageIcon className="field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                className="submit-button"
                endIcon={!loading && <SendIcon />}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Sending...
                  </>
                ) : 'Send Message'}
              </Button>

              <Typography variant="caption" className="form-note">
                * We respect your privacy and will never share your information
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Email Dialog */}
      <Dialog 
        open={emailDialogOpen} 
        onClose={() => setEmailDialogOpen(false)} 
        maxWidth="sm" 
        fullWidth
        className="contact-dialog"
        PaperProps={{
          className: 'dialog-paper'
        }}
      >
        <DialogTitle className="dialog-title">
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon className="dialog-icon" />
            <Typography variant="h6">Send us an Email</Typography>
          </Box>
          <IconButton
            onClick={() => setEmailDialogOpen(false)}
            className="dialog-close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent className="dialog-content">
          {/* Reuse the same form but with different styling for dialog */}
          <Box component="form" onSubmit={handleSubmit} className="contact-form dialog-form">
            <TextField
              margin="normal"
              required
              fullWidth
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              className="form-field"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              className="form-field"
            />
            <TextField
              margin="normal"
              fullWidth
              label="Contact Number"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              variant="outlined"
              className="form-field"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Your Message"
              name="purpose"
              multiline
              rows={3}
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
              className="submit-button dialog-submit"
            >
              {loading ? <CircularProgress size={24} /> : 'Send Message'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Contact;
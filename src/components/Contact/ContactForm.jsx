// import React, { useState } from 'react';
// import {
//   TextField,
//   Button,
//   Box,
//   Alert,
//   CircularProgress,Typography,
//   InputAdornment
// } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import MessageIcon from '@mui/icons-material/Message';
// import SendIcon from '@mui/icons-material/Send';
// import emailjs from '@emailjs/browser';
// import './Contact.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     contactNo: '',
//     purpose: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState({ show: false, type: '', message: '' });
//   const [focusedField, setFocusedField] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleFocus = (field) => {
//     setFocusedField(field);
//   };

//   const handleBlur = () => {
//     setFocusedField('');
//   };

//   const validateForm = () => {
//     if (!formData.name.trim()) return false;
//     if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return false;
//     if (!formData.purpose.trim()) return false;
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       setAlert({
//         show: true,
//         type: 'error',
//         message: 'Please fill all required fields correctly.'
//       });
//       return;
//     }

//     setLoading(true);
    
//     // EmailJS service parameters
//     const serviceID = 'service_ogbsmzm';
//     const templateID = 'template_enrecrb';
//     const userID = 'jq677jVZp9KOaVG_6';
    
//     emailjs.send(serviceID, templateID, {
//       from_name: formData.name,
//       from_email: formData.email,
//       contact_no: formData.contactNo,
//       purpose: formData.purpose,
//       to_email: 'bharatprimepath2025@gmail.com'
//     }, userID)
//     .then((result) => {
//       setAlert({
//         show: true,
//         type: 'success',
//         message: '✨ Message sent successfully! We\'ll get back to you within 24 hours.'
//       });
//       setFormData({ name: '', email: '', contactNo: '', purpose: '' });
//       setLoading(false);
      
//       // Auto hide alert after 5 seconds
//       setTimeout(() => {
//         setAlert({ show: false, type: '', message: '' });
//       }, 5000);
//     }, (error) => {
//       setAlert({
//         show: true,
//         type: 'error',
//         message: '❌ Failed to send message. Please try again or email us directly.'
//       });
//       setLoading(false);
//     });
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} className="contact-form">
//       {alert.show && (
//         <Alert 
//           severity={alert.type} 
//           className={`form-alert ${alert.type}`}
//           onClose={() => setAlert({ show: false, type: '', message: '' })}
//         >
//           {alert.message}
//         </Alert>
//       )}
      
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="name"
//         label="Your Name"
//         name="name"
//         autoComplete="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         onFocus={() => handleFocus('name')}
//         onBlur={handleBlur}
//         variant="outlined"
//         className={`form-field ${focusedField === 'name' ? 'focused' : ''}`}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <PersonIcon className="field-icon" />
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="email"
//         label="Email Address"
//         name="email"
//         autoComplete="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         onFocus={() => handleFocus('email')}
//         onBlur={handleBlur}
//         variant="outlined"
//         className={`form-field ${focusedField === 'email' ? 'focused' : ''}`}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <EmailIcon className="field-icon" />
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <TextField
//         margin="normal"
//         fullWidth
//         id="contactNo"
//         label="Contact Number (Optional)"
//         name="contactNo"
//         autoComplete="tel"
//         value={formData.contactNo}
//         onChange={handleInputChange}
//         onFocus={() => handleFocus('contactNo')}
//         onBlur={handleBlur}
//         variant="outlined"
//         className={`form-field ${focusedField === 'contactNo' ? 'focused' : ''}`}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <PhoneIcon className="field-icon" />
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         id="purpose"
//         label="Your Message"
//         name="purpose"
//         multiline
//         rows={4}
//         value={formData.purpose}
//         onChange={handleInputChange}
//         onFocus={() => handleFocus('purpose')}
//         onBlur={handleBlur}
//         variant="outlined"
//         className={`form-field ${focusedField === 'purpose' ? 'focused' : ''}`}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1.5 }}>
//               <MessageIcon className="field-icon" />
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         disabled={loading}
//         className="submit-button"
//         endIcon={!loading && <SendIcon />}
//       >
//         {loading ? (
//           <>
//             <CircularProgress size={20} sx={{ mr: 1 }} />
//             Sending...
//           </>
//         ) : 'Send Message'}
//       </Button>

//       <Typography variant="caption" className="form-note">
//         * We respect your privacy and will never share your information
//       </Typography>
//     </Box>
//   );
// };

// export default ContactForm;
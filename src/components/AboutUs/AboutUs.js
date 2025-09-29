import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar,Box } from "@mui/material";
import "./AboutUs.css";
import rajatImg from "../../assets/images/rajat.png";
import anandImg from "../../assets/images/anand.png";
import kalashImg from "../../assets/images/kalash.jpeg";
import ramImg from "../../assets/images/ram.jpeg";
import ajayImg from "../../assets/images/ajay.jpeg";
import utImg from "../../assets/images/utsav.jpeg";
import kanikaImg from "../../assets/images/kanika.jpeg";


const teamMembers = [
  { name: "Rajat Jha", role: "Founder & MD", img: rajatImg },
  { name: "Anand Mishra", role: "CEO", img: anandImg },
  { name: "Ajay Kr Jha", role: "Director", img: ajayImg },
  { name: "Kalash Tyagi", role: "FullStack Developer(Lead)", img: kalashImg },
  { name: "Ram Tiwari", role: "Sr Backend Developer", img: ramImg },
  { name: "Isshu Singh", role: "FullStack Developer", img: "https://via.placeholder.com/150" },
  { name: "Utsav Tiwari", role: "Sr Backend Developer", img: utImg },
  { name: "Kanika Tyagi", role: "Business Development", img: kanikaImg },
  
];

const AboutUs = () => {
  return (
    <div id="about" className="about-section">
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography variant="h3" align="center" gutterBottom className="section-title">
          About Us
        </Typography>
        <Typography variant="h6" align="center" className="section-subtitle" gutterBottom>
          Best Developers | One Roof | Complete Solutions
        </Typography>

       {/* Description */}
<Box sx={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
  <Typography variant="body1" className="about-description">
    At <b>Bharat Primepath Innovations</b>, we deliver end-to-end software development services.  
    Our team is highly skilled in <b>Frontend (React, Next.js, Angular, Vue.js)</b> and  
    <b> Backend (Node.js, .NET)</b>. We design responsive, mobile-friendly web and mobile applications  
    that empower businesses to grow faster in the digital world.
  </Typography>
  <Typography variant="body1" className="about-description">
    Our mission is to drive <b>collaboration</b> with partners & clients and provide  
    <b> user-friendly, innovative, and scalable</b> solutions that make a real impact.
  </Typography>
</Box>


        {/* Team Section */}
        <Typography variant="h4" align="center" gutterBottom className="team-title" sx={{ marginTop: "40px" }}>
          Meet Our Team
        </Typography>

       <Grid container spacing={3} justifyContent="center">
  {teamMembers.map((member, index) => (
    <Grid item xs={12} sm={6} md={3} key={index} className="about-grid-item">
      {/* 👆 yaha md={3} ka matlab hai 12/3 = 4 cards ek row me */}
      <Card className="about-card">
        <Avatar src={member.img} alt={member.name} className="team-avatar" />
        <CardContent className="card-text">
          <Typography variant="h6" className="team-name">
            {member.name}
          </Typography>
          <Typography variant="body2" className="team-role">
            {member.role}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      </Container>
    </div>
  );
};

export default AboutUs;

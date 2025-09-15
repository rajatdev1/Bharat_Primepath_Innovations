import React from "react";
import { Container, Typography, Grid, Card, CardContent, Avatar,Box } from "@mui/material";
import "./AboutUs.css";

const teamMembers = [
  { name: "Rahul Sharma", role: "Founder & MD", img: "https://via.placeholder.com/150" },
  { name: "Priya Singh", role: "CEO", img: "https://via.placeholder.com/150" },
  { name: "Amit Verma", role: "Director", img: "https://via.placeholder.com/150" },
  { name: "Neha Gupta", role: "Sr.Manager", img: "https://via.placeholder.com/150" },
  { name: "veena Pawar", role: "Manager", img: "https://via.placeholder.com/150" },
  { name: "Development Team", role: "Frontend & Backend Developers", img: "https://via.placeholder.com/150" },
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

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="about-grid-item">
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

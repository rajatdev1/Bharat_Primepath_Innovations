import React, { useEffect, useRef } from "react";
import { Container, Typography, Grid, Card, Avatar, Box, Chip } from "@mui/material";
import "./AboutUs.css";
import rajatImg from "../../assets/images/rajat.png";
import anandImg from "../../assets/images/anand.png";
import kalashImg from "../../assets/images/kalash.jpeg";
import ramImg from "../../assets/images/ram.jpeg";
import ajayImg from "../../assets/images/ajay.jpeg";
import utImg from "../../assets/images/utsav.jpeg";
import kanikaImg from "../../assets/images/kanika.jpeg";
import jkImg from "../../assets/images/jk.jpeg";

const teamMembers = [
  { name: "Rajat Jha", role: "Founder & MD", expertise: ["Full Stack Developer(MERN)","Azure", "DevOps","SQL"], img: rajatImg },
  { name: "Anand Mishra", role: "CEO", expertise: ["Full Stack Developer(MERN)",".NET","SQL"], img: anandImg },
  { name: "Ajay Kr Jha", role: "Director", expertise: ["Full Stack Developer", "Azure", "DevOps"], img: ajayImg },
  { name: "Prashant Dubey", role: "Joint Director", expertise: ["Java", "Spring", "Microservices","React","Node"], img: jkImg },
  { name: "Kalash Tyagi", role: "Lead Developer", expertise: ["React", "Next.js", "UI/UX",".NET"], img: kalashImg },
  { name: "Ram Tiwari", role: "Sr Backend Dev", expertise: ["Node.js","MongoDB", "GraphQL","React",".NET"], img: ramImg },
  { name: "Utsav Tiwari", role: "Backend Expert", expertise: ["Node.js","MongoDB", "GraphQL","React",".NET"], img: utImg },
  { name: "Kanika Tyagi", role: "Business Dev", expertise: ["Sales", "Marketing", "Strategy"], img: kanikaImg },
];

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-section" ref={sectionRef}>
      <Container maxWidth="lg">
        <Box className="section-header">
          <Typography variant="h2" className="section-title">
            About <span className="highlight">Us</span>
          </Typography>
          <Typography variant="h5" className="section-subtitle">
            Where Innovation Meets Excellence
          </Typography>
        </Box>

        <Box className="about-content">
          <Box className="about-text">
            <Typography variant="body1" className="about-description">
              We're not just developers - we're technology partners who turn your vision into reality.
              With a team of passionate experts, we deliver solutions that make a difference.
            </Typography>
          </Box>

          <Box className="stats-grid">
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">50+</Typography>
              <Typography>Projects</Typography>
            </Box>
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">10+</Typography>
              <Typography>Experts</Typography>
            </Box>
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">5+</Typography>
              <Typography>Years</Typography>
            </Box>
            <Box className="stat-card">
              <Typography variant="h3" className="stat-number">100%</Typography>
              <Typography>Satisfaction</Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h3" className="team-title">
          Meet Our <span className="highlight">Team</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className="team-grid-item">
              <Card className="team-card">
                <Box className="card-inner">
                  <Box className="card-front">
                    <Avatar src={member.img} alt={member.name} className="team-avatar" />
                    <Typography variant="h6" className="team-name">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="team-role">
                      {member.role}
                    </Typography>
                  </Box>
                  <Box className="card-back">
                    <Typography variant="h6" className="back-title">Expertise</Typography>
                    <Box className="expertise-tags">
                      {member.expertise.map((skill, i) => (
                        <Chip key={i} label={skill} className="expertise-chip" />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
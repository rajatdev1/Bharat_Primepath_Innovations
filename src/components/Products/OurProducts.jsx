import React, { useEffect, useRef } from "react";
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, Box, Chip } from "@mui/material";
import "./OurProducts.css";
import school from "../../assets/images/school.png";
import eccomerce from "../../assets/images/eccomerce.png";
import health from "../../assets/images/health.png";
import hr from "../../assets/images/hr.png";

const products = [
  { 
    name: "School Management System", 
    img: school, 
    category: "Education",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  { 
    name: "E-Commerce Platform", 
    img: eccomerce, 
    category: "Retail",
    tech: ["Next.js", "Python", "PostgreSQL"],
    link: "#"
  },
  { 
    name: "HR & Payroll", 
    img: health, 
    category: "HR Tech",
    tech: ["Angular", ".NET", "SQL"],
    link: "#"
  },
  { 
    name: "Healthcare App", 
    img: hr, 
    category: "Healthcare",
    tech: ["React Native", "Node.js", "Firebase"],
    link: "#"
  },
];

const OurProducts = () => {
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
    <div id="products" className="products-section" ref={sectionRef}>
      <Container maxWidth="lg">
        <Box className="section-header">
          <Typography variant="h2" className="section-title">
            Our <span className="highlight">Products</span>
          </Typography>
          <Typography variant="h5" className="section-subtitle">
            Ready-to-deploy solutions for your business
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className="product-grid-item">
              <Card className="product-card">
                <CardActionArea>
                  <Box className="product-image-container">
                    <CardMedia
                      component="img"
                      image={product.img}
                      alt={product.name}
                      className="product-image"
                    />
                    <Box className="product-overlay">
                      <Typography variant="body2">View Details →</Typography>
                    </Box>
                    <Chip label={product.category} className="product-category" />
                  </Box>
                  <Box className="product-info">
                    <Typography variant="h6" className="product-name">
                      {product.name}
                    </Typography>
                    <Box className="tech-tags">
                      {product.tech.map((tech, i) => (
                        <Chip key={i} label={tech} className="tech-chip" size="small" />
                      ))}
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OurProducts;
import React from "react";
import { Container, Typography, Grid, Card, CardActionArea, CardMedia } from "@mui/material";
import "./OurProducts.css";
import school from "../../assets/images/school.png";
import eccomerce from "../../assets/images/eccomerce.png";
import health from "../../assets/images/health.png";
import hr from "../../assets/images/hr.png";

// Product list
const products = [
  { name: "School Management System", img: school, link: "https://schoolmanagementsysyemfrontend-production.up.railway.app/auth/login" },
  { name: "E-Commerce Platform", img: eccomerce, link: "https://example.com/product2" },
  { name: "HR & Payroll", img: health, link: "https://example.com/product3" },
  { name: "Healthcare App", img: hr, link: "https://example.com/product4" },
];

const OurProducts = () => {
  return (
    <div id="products" className="products-section">
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="h3" align="center" gutterBottom className="products-title">
          Our Products
        </Typography>
        <Typography variant="h6" align="center" gutterBottom className="products-subtitle">
          Innovative Solutions | Scalable Systems | User-Friendly Designs
        </Typography>

        {/* Products Grid */}
        <Grid container spacing={4} justifyContent="center" sx={{mt: 3}}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} className="product-grid-item">
              <Card className="product-card">
                <CardActionArea onClick={() => window.open(product.link, "_blank")}>
                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    className="product-image"
                  />
                  <Typography variant="body1" className="product-name">
                    {product.name}
                  </Typography>
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

import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs'
import Products from './components/Products/OurProducts'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
}, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs/>
      <Services />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs/>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
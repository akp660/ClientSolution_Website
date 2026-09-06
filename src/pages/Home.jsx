import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import AppAvailability from '../components/AppAvailability';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './Home.css';

const Home = ({ onBackToLanding }) => {
  return (
    <div className="home">
      <SEO 
        title="Custom CRMs, Billing Software & Cloud Solutions"
        description="We build simple, reliable, and scalable software platforms — custom CRMs, automated billing engines, web & mobile apps tailored for your business."
      />
      <Navbar onBackToLanding={onBackToLanding} />
      <main>
        <Hero />
        <Services />
        <Process />
        <AppAvailability />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

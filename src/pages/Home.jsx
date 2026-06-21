import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
//import Cta from '../components/Cta';
import Footer from '../components/Footer';
import './Home.css';

const Home = ({ onBackToLanding }) => {
  return (
    <div className="home">
      <Navbar onBackToLanding={onBackToLanding} />
      <main>
        <Hero />
        <Services />
        <Process />
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

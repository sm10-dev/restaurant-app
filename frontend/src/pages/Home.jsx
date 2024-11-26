import React from 'react';
import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import SpecialDish from '../components/SpecialDish/SpecialDish';
import MenuHighlight from '../components/Menu/Menu';
import Testimonials from '../components/Testimonials/Testimonials';
import Features from '../components/Features/Features';
import './Home.css';

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <SpecialDish />
      <MenuHighlight />
      <Testimonials />
      <Features />
    </main>
  );
}

export default Home;

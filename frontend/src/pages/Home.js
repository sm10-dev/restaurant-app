import React from 'react';
import Hero from '../components/Hero/Hero';
import Service from '../components/Service/Service';
import SpecialDish from '../components/SpecialDish/SpecialDish';
import PopularDishes from '../components/PopularDishes/PopularDishes';
import BackToTop from '../components/Common/BackToTop';

function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <SpecialDish />
      <PopularDishes />
      <BackToTop />
    </main>
  );
}

export default Home;

import React from 'react';

import { Footer } from '../../components';
import CenteredFeature from './Modules/CenteredFeature';
import Feature from './Modules/Feature';
import Hero from './Modules/Hero';
import SmallCard from './Modules/SmallCard';

const Home = () => {
  return (
    <>
      <Hero />
      <CenteredFeature />
      <Feature />
      <Feature order />
      <Feature />
      <Feature order />
      <SmallCard />
      <Footer />
    </>
  );
};

export default Home;

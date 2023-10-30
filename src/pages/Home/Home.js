import React from 'react';

import { Footer } from '../../components';
import CenteredFeature from './Modules/CenteredFeature';
import Feature from './Modules/Feature';
import Hero from './Modules/Hero';
import SmallCard from './Modules/SmallCard';
import FeatureLeft from "./Modules/FeatureLeft";
import FeatureRight from "./Modules/FeatureRight";

const Home = () => {
  return (
    <>
      <Hero />
      <CenteredFeature />
      <Feature />
      <Feature order />
      <FeatureLeft />
      <FeatureRight />
      <SmallCard />
      <Footer />
    </>
  );
};

export default Home;

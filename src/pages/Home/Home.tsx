import { Footer } from 'components';

import CenteredFeature from './Modules/CenteredFeature';
import FeatureLeft from './Modules/FeatureLeft';
import FeatureRight from './Modules/FeatureRight';
import Hero from './Modules/Hero';
import SmallCard from './Modules/SmallCard';

const Home = () => {
  return (
    <>
      <Hero />
      <CenteredFeature />
      <FeatureLeft />
      <FeatureRight />
      <FeatureLeft />
      <FeatureRight />
      <SmallCard />
      <Footer />
    </>
  );
};

export default Home;

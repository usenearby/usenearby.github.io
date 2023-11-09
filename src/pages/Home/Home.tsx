import { Footer } from 'components';

import CenteredFeature from './Modules/CenteredFeature';
import Hero from './Modules/Hero';
import SmallCard from './Modules/SmallCard';
import FeatureLeft from './Modules/FeatureLeft';
import FeatureRight from './Modules/FeatureRight';

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

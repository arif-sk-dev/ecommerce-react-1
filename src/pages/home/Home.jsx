import React from 'react';
import Carousel from './../../components/Carousel';
import MidBanner from '../../components/MidBanner';
import Features from '../../components/Features';
import HomeProduct from './HomeProduct';

const Home = () => {
  return (
    <div>
     <Carousel />
     <HomeProduct />
     <MidBanner />
     <Features />
    </div>
  );
};

export default Home;
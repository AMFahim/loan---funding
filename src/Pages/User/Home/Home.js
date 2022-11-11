import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import Advantage from './components/Advantage';
import Hero from './components/Hero';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Advantage/>
    </MainLayout>
  );
};

export default Home;
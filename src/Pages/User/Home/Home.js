import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import AboutCompany from './components/AboutCompany';
import Advantage from './components/Advantage';
import Hero from './components/Hero';
import Transparent from './components/Transparent';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Advantage/>
      <Transparent />
      <AboutCompany />
    </MainLayout>
  );
};

export default Home;
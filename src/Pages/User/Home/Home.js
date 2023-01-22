import React from 'react';
import UiLoanView from '../../../components/common/ui/UiLoanView';
import MainLayout from '../../../Layout/MainLayout';
import AboutCompany from './components/AboutCompany';
import Advantage from './components/Advantage';
import Hero from './components/Hero';
import LoanCategory from './components/LoanCategory';
import Transparent from './components/Transparent';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Advantage/>
      <Transparent />
      <AboutCompany />
      <LoanCategory />
      <UiLoanView />
    </MainLayout>
  );
};

export default Home;
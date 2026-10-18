import React from 'react';
import Navbar from '../components/NavAndFooter/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/NavAndFooter/Footer';
import ScrollToTop from '../components/Ui/ScrollToTop';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/partials/footer/Footer';
import Header from '../components/partials/header/Header';

export default function LayoutDefault() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

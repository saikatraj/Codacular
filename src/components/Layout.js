import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import './styles/Layout.css';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
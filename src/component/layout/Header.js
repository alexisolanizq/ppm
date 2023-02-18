import React from 'react';
import Menu from './Menu';
import Navbar from './NavbarComponent';

const Header = () => (
  <div className="sticky-top">
    <Navbar />
    <Menu />
  </div>
);

export default Header;

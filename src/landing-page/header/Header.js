import React from 'react';
import Social from './Social/Social';
import MenuList from './MenuList';
import Logo from './Logo';
import Location from './location/Location';
import './Header.scss';

function Header() {
  return (
    <div className='header-container'>
      <Social />
      <Location />
      <Logo />
      <MenuList />
    </div>
  )
}

export default Header;
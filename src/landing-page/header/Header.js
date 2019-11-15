import React from 'react';
import Social from './Social/Social';
import MenuList from './MenuList';
import Logo from './Logo';

function Header() {
  return (
    <div>
      <Social />
      <Logo />
      <MenuList />
    </div>
  )
}

export default Header;
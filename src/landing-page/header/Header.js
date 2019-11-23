import React from 'react';
import Social from './Social/Social';
import MenuList from './MenuList';
import Logo from './Logo';
import Location from './location/Location';
import './Header.scss';
import _ from 'lodash';

function setScrollObserver(browserWindow) {
  if (_.has(browserWindow, 'IntersectionObserver') && _.has(browserWindow, 'IntersectionObserverEntry') && 'intersectionRatio' in browserWindow.IntersectionObserverEntry.prototype) {
    const observer = new browserWindow.IntersectionObserver(entries => {
      const header = browserWindow.document.querySelector('.header-container');
      if (entries[0].boundingClientRect.y < 0) {
        header.classList.add('hidden-top-header-container');
      } else {
        header.classList.remove('hidden-top-header-container');
      }
    });

    observer.observe(browserWindow.document.querySelector('html'));
  }
};

class Header extends React.Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    setScrollObserver(window);
  }

  render() {
    return (
      <div className='header-container'>
        <div className='top-header'>
          <Social />
          <Location />
        </div>
        <Logo />
        <MenuList />
      </div>
    )
  }
}

export default Header;
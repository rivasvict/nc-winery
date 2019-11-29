import React from 'react';
import Social from '../header/Social/Social';
import './FooterLinks.scss'

function FooterLinks() {
  return (
    <div className='footer-links-container'>
      <div className='links-group'>
        <a href='#'>About us</a>
        <a href='#'>Our story</a>
        <a href='#'>Our winemaker</a>
        <a href='#'>Our vineyards</a>
      </div>
      <div className='links-group'>
        <a href='#'>Events</a>
        <a href='#'>Workshop</a>
        <a href='#'>Certification</a>
      </div>
      <div className='links-group'>
        <a href='#'>Wine</a>
        <a href='#'>Red wine</a>
        <a href='#'>White wine</a>
        <a href='#'>Ice wine</a>
        <a href='#'>Rose wine</a>
        <a href='#'>Sparkling wine</a>
        <a href='#'>Wine club</a>
        <a href='#'>Alumni club</a>
      </div>
      <div className='links-group'>
        <a href='#'>Products</a>
        <a href='#'>Gift basket</a>
        <a href='#'>Cheese</a>
        <a href='#'>Chocolate</a>
        <a href='#'>Cookies</a>
        <a href='#'>Ice wine jam</a>
      </div>
      <div className='links-group'>
        <a href='#'>Visit us</a>
        <a href='#'>Direction</a>
        <a href='#'>Contact us</a>
        <a href='#'>(905) 641-2252 ext. 4070</a>
        <a href='#'>chchandratre@niagaracollege.ca</a>
      </div>
      <div className='links-group'>
      </div>
      <div className='links-group'>
      </div>
      <div className='links-group'>
        <Social />
      </div>
    </div>
  )
}

export default FooterLinks;
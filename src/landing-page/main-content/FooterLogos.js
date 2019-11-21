import React from 'react';
import './FooterLogos.scss';

function FooterLogos() {
  return (
    <div className='footer-logos-container'>
      <div className='logos-container'>
        <div className='individual-logo image'></div>
      </div>
      <div className='logos-container grid-logos-container'>
        <div className='logos-grid image'></div>
        <div className='logos-grid image'></div>
        <div className='logos-grid image'></div>
        <div className='logos-grid image'></div>
        <div className='logos-grid image'></div>
      </div>
      <div className='logos-container'>
        <div className='individual-logo image'></div>
      </div>
    </div>
  )
}

export default FooterLogos;
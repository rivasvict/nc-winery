import React from 'react';
import social1Logo from '../../../assets/social1.png';
import social2Logo from '../../../assets/social2.png';
import social3Logo from '../../../assets/social3.png';
import './Social.scss';

const socialConfig = {
  social1: {
    link: 'www.google.com',
    styles: {
      backgroundImage: `url(${social1Logo})`
    }
  },
  social2: {
    link: 'www.google.com',
    styles: {
      backgroundImage: `url(${social2Logo})`
    }
  },
  social3: {
    link: 'www.google.com',
    styles: {
      backgroundImage: `url(${social3Logo})`
    }
  }
};

function Social() {
  return (
    <div className='container'>
      <div id='social1' style={socialConfig.social1.styles}>
      </div>
      <div id='social2' style={socialConfig.social2.styles}>
      </div>
      <div id='social3' style={socialConfig.social3.styles}>
      </div>
    </div>
  )
}

export default Social;
import React from 'react';
import './FooterLogos.scss';
import logoImage1 from '../../assets/logo-images/logoImage1.png';
import logoImage2 from '../../assets/logo-images/logoImage2.png';
import logoImage3 from '../../assets/logo-images/logoImage3.png';
import logoImage4 from '../../assets/logo-images/logoImage4.png';
import logoImage5 from '../../assets/logo-images/logoImage5.png';
import logoImage6 from '../../assets/logo-images/logoImage6.png';
import logoImage7 from '../../assets/logo-images/logoImage7.png';

const logoImageStyles = [
  { backgroundImage: `url('${logoImage1}')`, backgroundSize: 'auto' },
  { backgroundImage: `url('${logoImage2}')` },
  { backgroundImage: `url('${logoImage3}')` },
  { backgroundImage: `url('${logoImage4}')` },
  { backgroundImage: `url('${logoImage5}')` },
  { backgroundImage: `url('${logoImage6}')` },
  { backgroundImage: `url('${logoImage7}')` },
];

function FooterLogos() {
  return (
    <div className='footer-logos-container'>
      <div className='title'>Awards</div>
      <div className='logos-group'>
        <div className='logos-container'>
          <div className='individual-logo image' style={logoImageStyles[0]}></div>
        </div>
        <div className='logos-container grid-logos-container'>
          <div className='logos-grid-wrapper'>
            <div className='logos-grid image' style={logoImageStyles[1]}></div>
            <div className='logos-grid image' style={logoImageStyles[2]}></div>
          </div>
          <div className='logos-grid-wrapper'>
            <div className='logos-grid image' style={logoImageStyles[3]}></div>
            <div className='logos-grid image' style={logoImageStyles[4]}></div>
            <div className='logos-grid image' style={logoImageStyles[5]}></div>
          </div>
        </div>
        <div className='logos-container'>
          <div className='individual-logo image' style={logoImageStyles[6]}></div>
        </div>
      </div>
    </div>
  )
}

export default FooterLogos;
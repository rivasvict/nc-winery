import React from 'react';
import FooterLogos from './FooterLogos';
import FooterLinks from './FooterLinks';

const footerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

function Footer() {
  return (
    <div style={footerContainerStyle}>
      <FooterLogos />
      <FooterLinks />
    </div>
  );
};

export default Footer;
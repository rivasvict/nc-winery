import React from 'react';
import ImageSlider from './ImageSlider';
import Explore from './Explore';
import ProductsShowCase from './ProductShowCase';
import Images from './Images'

const mainContentStyle = {
  position: 'absolute',
  width: '100%',
  left: 0,
  right: 0,
  zIndex: -100
};

function MainContent() {
  return (
    <div style={mainContentStyle}>
      <ImageSlider />
      <Explore />
      <ProductsShowCase />
      <Images />
      {/*<Footer />*/}
    </div>
  )
}

export default MainContent;
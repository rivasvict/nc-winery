import React from 'react';
import slider3 from '../../assets/slider/slider-3.jpg'

const sliderImageStyle = {
  backgroundImage: `url('${slider3}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const callToActionContainer = {
  display: 'flex',
  justifyContent: 'center',
  color: 'black',
  padding: '40px 60px',
  fontSize: '2em',
  flexDirection: 'column',
  alignItems: 'center'
};

const callToActionCaptionStyle = {
  marginBottom: '40px',
  fontSize: '2.2em',
}

const exploreWinesStyle = {
  padding: '20px 40px',
  maxWidth: '400px'
}

function ImageSlider() {
  return (
    <div style={sliderImageStyle}>
      <div style={callToActionContainer}>
        <div style={callToActionCaptionStyle}>
          Discover the mastery
        </div>
        <div style={callToActionCaptionStyle}>
          Discover the mastery
        </div>
        <div className='call-to-action' style={exploreWinesStyle}>Explore our wines</div>
      </div>
    </div>
  )
}

export default ImageSlider;
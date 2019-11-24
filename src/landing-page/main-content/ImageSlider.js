import React from 'react';
import slider3 from '../../assets/slider/slider-3.jpg'
import slider2 from '../../assets/slider/slider-2.jpg'
import slider1 from '../../assets/slider/slider-1.jpg'
import { Carousel } from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.scss';

const imagesSlider = [
  slider3,
  slider2,
  slider1
];

const imageSliderContainerStyle = {
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
  alignItems: 'center',
  position: 'absolute'
};

const callToActionCaptionStyle = {
  marginBottom: '40px',
  fontSize: '2em',
}

const exploreWinesStyle = {
  padding: '20px 40px',
  maxWidth: '400px'
}

class ImageSlider extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={imageSliderContainerStyle}>
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false}>
          {imagesSlider.map((image, key) => (
            <div>
              <img src={image} id={key} />
            </div>
          ))}
        </Carousel>
        <div style={callToActionContainer}>
          <div style={callToActionCaptionStyle}>
            Discover the winery
          </div>
          <div style={callToActionCaptionStyle}>
            Discover the mastery
          </div>
          <div className='call-to-action' style={exploreWinesStyle}>Explore our wines</div>
          </div>
      </div>
    )
  }
}

export default ImageSlider;
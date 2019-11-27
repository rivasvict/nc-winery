import React from 'react';
import slider3 from '../../assets/slider/slider-3.jpg'
import slider2 from '../../assets/slider/slider-2.jpg'
import slider1 from '../../assets/slider/slider-1.jpg'
import slider4 from '../../assets/slider/slider-4.jpg'
import { Carousel } from 'react-responsive-carousel';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.scss';

const imagesSlider = [
  slider1,
  slider2,
  slider3,
  slider4
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
  color: 'white',
  fontWeight: 'bold',
  fontSize: '2em',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  backgroundColor: '#0000004d',
  width: '100%',
  height: '100vh'
};

const callToActionCaptionStyle = {
  marginBottom: '40px',
  fontSize: '2em',
}

const exploreWinesStyle = {
  padding: '20px 40px',
  maxWidth: '400px',
  color: 'white'
}

const callToActionTop = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flex: 2,
  paddingTop: '20vh'
};

const callToActionBottom = {
  backgroundColor: '#3c3a3a',
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const textContent = {
  margin: '1.5% 0px',
  fontWeight: '200'
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
          <div style={callToActionTop}>
            <div style={callToActionCaptionStyle}>
              Discover the Winery
            </div>
            <div style={callToActionCaptionStyle}>
              Discover the Mastery
            </div>
            <div className='call-to-action' style={exploreWinesStyle}>Explore our wines</div>
          </div>
          <div style={callToActionBottom}>
            <div>
              Join our Club
            </div>
            <div style={textContent}>
              To enjoy a full experience of true wine and discover the best sensations
            </div>
            <div className='call-to-action' style={exploreWinesStyle}>Subscribe</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageSlider;
import React from 'react';
import './Explore.scss';

function Explore() {
  return (
    <div className='explore-container'>
      <div className='explore-item info-box'>
        <div className='box-cover'>
          Tasting experience
          <div className='call-to-action'>Learn more</div>
        </div>
      </div>
      <div className='explore-item'>
        <iframe
          className='video'
          src="https://www.youtube.com/embed/zFhO6v8VaLw?controls=0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default Explore;
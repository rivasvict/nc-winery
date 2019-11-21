import React from 'react';
import './Images.scss';
import gallery1 from '../../assets/gallery/gallery-image-1.jpg';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        }
      ]
    };
  }

  handleMouseOver(id) {
    this.setState(currentState => {
      return currentState.images.map((image, key) => {
        if (id === key) {
          image.isVisible = !image.isVisible
        }

        return image;
      });
    })
  }

  render() {
    const imagesToRender = this.state.images.map((image, key) => <a href={image.url}>
      <div className='image' key={key} id={key} style={{ backgroundImage: `url('${image.image}')` }} onMouseEnter={() => this.handleMouseOver(key)}>
        <div className='image-caption' onMouseLeave={() => this.handleMouseOver(key)} style={{ display: !image.isVisible ? 'none' : 'flex' }}>
          {image.name}<br />
          {image.likes}
        </div>
      </div>
    </a>);

    return (
      <div className='images-container'>
        {imagesToRender}
      </div>
    );
  }
}

export default Images;
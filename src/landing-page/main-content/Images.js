import React from 'react';
import './Images.scss';
import gallery1 from '../../assets/gallery/gallery-image-1.jpg';
import { FaHeart, FaComment } from 'react-icons/fa';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
          name: 'Awesome Wine',
          image: gallery1,
          isVisible: false
        },
        {
          url: '#',
          likes: 22,
          comments: 14,
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
        <div className='image-caption' onMouseLeave={() => this.handleMouseOver(key)} style={{ visibility: !image.isVisible ? 'hidden' : 'visible' }}>
          <div>
            {image.name}
          </div>
          <div className='likes-comments'>
            <FaHeart /> {image.likes} <FaComment /> {image.comments}
          </div>
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
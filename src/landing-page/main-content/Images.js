import React from 'react';
import './Images.scss';
import gallery1 from '../../assets/gallery/gallery-image-1.jpg';
import gallery2 from '../../assets/gallery/gallery-image-2.jpg';
import gallery3 from '../../assets/gallery/gallery-image-3.jpg';
import gallery4 from '../../assets/gallery/gallery-image-4.jpg';
import gallery5 from '../../assets/gallery/gallery-image-5.jpg';
import gallery6 from '../../assets/gallery/gallery-image-6.jpg';
import gallery7 from '../../assets/gallery/gallery-image-7.jpg';
import gallery8 from '../../assets/gallery/gallery-image-8.jpg';
import gallery9 from '../../assets/gallery/gallery-image-9.jpg';
import gallery10 from '../../assets/gallery/gallery-image-10.jpg';
import gallery11 from '../../assets/gallery/gallery-image-11.jpg';
import gallery12 from '../../assets/gallery/gallery-image-12.jpg';
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
          likes: 10,
          comments: 11,
          name: 'We have a lot!',
          image: gallery2,
          isVisible: false
        },
        {
          url: '#',
          likes: 33,
          comments: 17,
          name: 'New wine ready',
          image: gallery3,
          isVisible: false
        },
        {
          url: '#',
          likes: 10,
          comments: 10,
          name: 'Come and enjoy!',
          image: gallery4,
          isVisible: false
        },
        {
          url: '#',
          likes: 204,
          comments: 109,
          name: 'Taste this!!',
          image: gallery5,
          isVisible: false
        },
        {
          url: '#',
          likes: 12,
          comments: 14,
          name: 'The best of the best',
          image: gallery6,
          isVisible: false
        },
        {
          url: '#',
          likes: 40,
          comments: 24,
          name: 'Great moments',
          image: gallery7,
          isVisible: false
        },
        {
          url: '#',
          likes: 23,
          comments: 12,
          name: 'Our best wine',
          image: gallery8,
          isVisible: false
        },
        {
          url: '#',
          likes: 222,
          comments: 190,
          name: 'See and taste this!!!',
          image: gallery9,
          isVisible: false
        },
        {
          url: '#',
          likes: 15,
          comments: 14,
          name: 'Sweet!!',
          image: gallery10,
          isVisible: false
        },
        {
          url: '#',
          likes: 38,
          comments: 40,
          name: 'Awarded!!',
          image: gallery11,
          isVisible: false
        },
        {
          url: '#',
          likes: 65,
          comments: 88,
          name: 'A lot to taste!',
          image: gallery12,
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
        } else {
          image.isVisible = false;
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
      <div className='images-container' onMouseEnter={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseOver()}>
        {imagesToRender}
      </div>
    );
  }
}

export default Images;
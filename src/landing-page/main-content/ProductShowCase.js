import React from 'react';
import './ProductShowCase.scss';

import productImage1 from '../../assets/products/product-image-1.jpg';
import productImage2 from '../../assets/products/product-image-2.jpg';
import productImage3 from '../../assets/products/product-image-3.jpg';

const products = [
  {
    name: 'Red wines',
    image: productImage1,
    url: '#'
  },
  {
    name: 'Gift baskets',
    image: productImage2,
    url: '#'
  },
  {
    name: 'Rose wines',
    image: productImage3,
    url: '#'
  }
];

function ProductShowCase() {
  const productsToRender = products.map((product, key) => <a href={product.url}><div key={key} id={key} className='product-item'>
    <div className='product-image' style={{ backgroundImage: `url(${product.image})` }}>
    </div>
    <div className='product-caption'>
      {product.name}
    </div>
  </div></a>);

  return (
    <div className='product-show-case-container'>
      <div className='products-title'>
        EXPLORE & TASTE OUR WINES
      </div>
      {productsToRender}
      <div className='product-showcase-description'>
        We are Niagara College Teaching Winery, know our wines, know our passion
        <br/>
        We are the hub for wine education in the Niagara region and the first commercial teaching winery in Canada.
        <br/>
        Come to enjoy a pleasant experience in our Vineyard with a glass of wine 
        <br/>
        Find the perfect gift or gift basket for your family or friends
        <br/>
        Discover our journey into the wine industry and live an unforgettable experience
      </div>
    </div>
  )
}

export default ProductShowCase;
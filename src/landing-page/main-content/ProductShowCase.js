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
        EXPLORE / TASTE / ENJOY / FAMILY
      </div>
      {productsToRender}
    </div>
  )
}

export default ProductShowCase;
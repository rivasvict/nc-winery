import React from 'react';
import './ProductShowCase.scss';

import productImage1 from '../../assets/products/product-image-1.png';

const products = [
  {
    name: 'Cabernet Sauvignon',
    image: productImage1,
    url: '#'
  },
  {
    name: 'Cabernet Sauvignon',
    image: productImage1,
    url: '#'
  },
  {
    name: 'Cabernet Sauvignon',
    image: productImage1,
    url: '#'
  },
  {
    name: 'Cabernet Sauvignon',
    image: productImage1,
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
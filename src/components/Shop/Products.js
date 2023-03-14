import React from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

import DUMMY_PRODUCTS from '../../products.json';

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;

import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, removeProduct }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.inStock
          : styles.outOfStock
      }
    >
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      <h2>{product.name}</h2>

      {/* TODO: Display product price */}
      <p>{product.price}</p>

      {/* TODO: Show if the product is in stock or out of stock */}
      <p>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Remove button (required for tests) */}
      <button onClick={() => removeProduct(product.id)}>
        Remove
      </button>
      
    </div>
  );
};

export default ProductCard;
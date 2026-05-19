import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const availableProducts = () => {
    const available = products.filter(
      (product) => product.inStock
    );
    setFilteredProducts(available);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  const removeProduct = (id) => {
    const updatedProducts = filteredProducts.filter(
      (product) => product.id !== id
    );

    setFilteredProducts(updatedProducts);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      <button style={{ marginRight: '12px' }} onClick={availableProducts}>
        Available Products
      </button>

      <button style={{ marginRight: '12px' }} onClick={showAllProducts}>
        Show All
      </button>

      <ProductList
        products={filteredProducts}
        removeProduct={removeProduct}
      />
    </div>
  );
};

export default App;
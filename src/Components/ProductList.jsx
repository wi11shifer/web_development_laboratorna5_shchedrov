import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductList({ products, onProductSelect }) {
  const navigate = useNavigate();

  const showProductDetail = (product) => {
    navigate(`/product/${product.id}`);
  };

  const showCategoryPage = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>Author: {product.author}</p>
              <p>Price: {product.priceUAH} UAH</p>
              <p>Category: {product.category}</p>
              <label>
                <input 
                  type="checkbox" 
                  onChange={(e) => onProductSelect(product, e.target.checked)} 
                />
                Select
              </label>
              <button onClick={() => showProductDetail(product)}>
                View Details
              </button>
              <button onClick={() => showCategoryPage(product.category)}>
                View Category
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

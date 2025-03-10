import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, search } from '../redux/actions';
import { ShoppingCart } from 'lucide-react';

const ProductList = () => {
  const products = useSelector((state) => state.filteredProducts || state.products); 
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(search(value));
  };

  return (
    <div className="products-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <h2>Available Products</h2>
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="add-to-cart"
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;

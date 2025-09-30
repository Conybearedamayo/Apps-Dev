import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart }) { 
  const { title, price, discountPercentage, stock, rating, thumbnail } = product;

  const discountedPrice = price - (price * (discountPercentage / 100));

  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-thumbnail" />

      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="product-price-section">
          <span className="product-price">${discountedPrice.toFixed(2)}</span>
          {discountPercentage > 0 && (
            <span className="old-price">${price.toFixed(2)}</span>
          )}
        </div>

        <p className="product-stock">In Stock: {stock}</p>

        <div className="product-rating">
          {"★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating))} ({rating})
        </div>

        <div className="product-actions">
          
          {/* ✅ FIX: Add click handler */}
          <button
           className="add-to-cart-btn"
          onClick={() => addToCart(product)}
           title="Add to Cart" // this shows text on hover
          >
          Add to Cart 
          </button>


          <button className="view-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

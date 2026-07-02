import React, { useState } from 'react';
import './ProductPage.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  description: string;
  images: string[];
  inStock: boolean;
  quantity: number;
}

const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product: Product = {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviews: 328,
    description:
      'Experience premium sound quality with our wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
    images: [
      'https://via.placeholder.com/500x500?text=Product+Image+1',
      'https://via.placeholder.com/500x500?text=Product+Image+2',
      'https://via.placeholder.com/500x500?text=Product+Image+3',
      'https://via.placeholder.com/500x500?text=Product+Image+4',
    ],
    inStock: true,
    quantity: 50,
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity > 0 && newQuantity <= product.quantity) {
      setQuantity(newQuantity);
    }
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">ShopHub</div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#cart">Cart</a>
            <a href="#account">Account</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container main-content">
        <div className="product-container">
          {/* Image Section */}
          <div className="image-section">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} />
              {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
            </div>
            <div className="thumbnail-gallery">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="details-section">
            {/* Product Name */}
            <h1 className="product-name">{product.name}</h1>

            {/* Rating */}
            <div className="rating-section">
              <div className="stars">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </div>
              <span className="rating-value">{product.rating}</span>
              <span className="review-count">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="price-section">
              <span className="current-price">${product.price.toFixed(2)}</span>
              <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            </div>

            {/* Description */}
            <p className="description">{product.description}</p>

            {/* Stock Status */}
            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">✓ In Stock ({product.quantity} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(-1)}>−</button>
                <input type="number" id="quantity" value={quantity} readOnly />
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button
                className={`add-to-cart ${addedToCart ? 'success' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button className="wishlist-btn">♡ Wishlist</button>
            </div>

            {/* Additional Info */}
            <div className="additional-info">
              <div className="info-item">
                <span className="icon">🚚</span>
                <div>
                  <p>Free Shipping</p>
                  <small>On orders over $50</small>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">↩️</span>
                <div>
                  <p>Easy Returns</p>
                  <small>30-day return policy</small>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">🛡️</span>
                <div>
                  <p>1 Year Warranty</p>
                  <small>Full manufacturer warranty</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <section className="specifications">
          <h2>Product Specifications</h2>
          <table className="specs-table">
            <tbody>
              <tr>
                <td>Brand</td>
                <td>Premium Audio Co.</td>
              </tr>
              <tr>
                <td>Color</td>
                <td>Black</td>
              </tr>
              <tr>
                <td>Battery Life</td>
                <td>30 hours</td>
              </tr>
              <tr>
                <td>Noise Cancellation</td>
                <td>Active (ANC)</td>
              </tr>
              <tr>
                <td>Connectivity</td>
                <td>Bluetooth 5.0, 3.5mm jack</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>250g</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section">
          <h2>Customer Reviews</h2>
          <div className="reviews-list">
            {[1, 2, 3].map((review) => (
              <div key={review} className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <strong>John Doe</strong>
                    <span className="review-date">2 weeks ago</span>
                  </div>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">
                  Excellent product! The sound quality is amazing and the battery lasts forever.
                  Highly recommended!
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 ShopHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;

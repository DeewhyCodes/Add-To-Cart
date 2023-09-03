import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to AwesomeShop</h1>
          <p>Your One-Stop Destination for Trendy Products</p>
          <Link to="/Products">
            <button className="cta-button">Explore Now</button>
          </Link>
        </div>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Wide Range of Products</h2>
          <p>
            Discover an extensive collection of fashion, electronics, and more.
          </p>
        </div>
        <div className="feature">
          <h2>Secure Shopping</h2>
          <p>Shop with confidence knowing your information is safe.</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered to your doorstep in no time.</p>
        </div>
      </section>
      <section className="popular-products">
        <h2>Popular Products</h2>
        <div className="products-slide-cont">
          <div className="product-slider">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            ))}
            <i
              className="bi bi-chevron-left prev-button"
              onClick={prevSlide}
            ></i>
            <i
              className="bi bi-chevron-right next-button"
              onClick={nextSlide}
            ></i>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 AwesomeShop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

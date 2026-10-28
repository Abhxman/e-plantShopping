import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';
import './App.css';

function Home() {
  return (
    <main className="hero">
      <div className="hero-shade">
        <section className="hero-content">
          <span className="eyebrow">BRING NATURE HOME</span>
          <h1>Paradise Nursery</h1>
          <p>
            Discover beautiful houseplants that bring freshness, peace,
            and natural beauty into your home.
          </p>
          <Link to="/plants" className="primary-button">
            Get Started →
          </Link>
          <p>
            <Link to="/about">Learn more about us</Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}
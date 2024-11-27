// src/App.jsx

import React from 'react';
import './App.css';
import Preloader from './components/Common/Preloader';
import Topbar from './components/Common/Topbar';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import BackToTopButton from './components/Common/BackToTop';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import SpecialDish from './components/SpecialDish/SpecialDish';
import MenuHighlight from './components/Menu/Menu';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';
import FeedbackPage from './pages/FeedbackPage';
import ScrollToTop from './components/Common/ScrollToTop'; // Import the component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place it inside Router */}
      <div className="App">
        <Preloader />
        <Topbar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;

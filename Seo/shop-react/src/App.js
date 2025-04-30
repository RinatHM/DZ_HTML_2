import React from 'react';
import Header from './pages/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CatalogPage from './components/CatalogPage';
import CartPage from './components/CartPage';
import CatalogPage2 from './components/CatalogPage2';
import CartProvider from './components/CartContext';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />       {/* Теперь Header и Footer только на главной */}
            <MainContent />
            <Footer />
          </>
        } />
        <Route path="/catalog-old" element={<CatalogPage />} /> {/* Чистая страница каталога */}
        <Route path="/cart" element={<CartPage />} /> {/* Чистая страница каталога */}
        <Route path="/catalog" element={<CatalogPage2 />} /> {/* Чистая страница каталога */}
        <Route path="/cartreg" element={<CartProvider />} /> {/* Чистая страница каталога */}
      </Routes>
    </Router>
  );
}

export default App;
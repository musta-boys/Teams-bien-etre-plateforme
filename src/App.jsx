import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mentions from "./components/Mentions";
import Conditions from "./components/Conditions";
import ProductGallery from "./components/ProductGallery";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import productsData from "./data/products.json";
import logoImg from "./images/mustaboys.png";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-wrapper">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logoImg} alt="logo" className="logo-img" />
            <div className="logo-text">
              <span className="brand-name">TEAMS <span>BIEN-ÊTRE</span></span>
              <span className="brand-slogan">Votre santé, notre priorité</span>
            </div>
          </div>

          {/* Menu principal */}
          <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/Mentions" onClick={closeMenu}>Mentions Légales</Link></li>
            <li><Link to="/Condition" onClick={closeMenu}>Conditions de Vente</Link></li>
          </ul>

          <div className="navbar-right">
             <div className="search-bar">
                <input type="text" placeholder="Recherche..." />
                <button>🔍</button>
             </div>
             {/* Bouton Burger */}
             <div className="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={isMenuOpen ? "line1 toggle" : "line1"}></div>
                <div className={isMenuOpen ? "line2 toggle" : "line2"}></div>
                <div className={isMenuOpen ? "line3 toggle" : "line3"}></div>
             </div>
          </div>
        </div>
      </nav>

      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentions" element={<Mentions />} />
          <Route path="/Condition" element={<Conditions />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Catalogue des produits à Bukavu</h1>
        <p>Découvrez nos solutions Oqata Wellness en temps réel.</p>
      </section>
      <div className="gallery-section">
        <ProductGallery products={productsData} onProductClick={setSelectedProduct} />
      </div>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;
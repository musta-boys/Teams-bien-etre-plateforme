import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Mentions from "./components/Mentions";
import Conditions from "./components/Conditions";
import ProductGallery from "./components/ProductGallery";
import ProductModal from "./components/ProductModal";
import Footer from "./components/Footer";
import productsData from "./data/products.json";
import image12 from "./images/mustaboys.png";
import "./App.css";

// 1. Correction de l'objet photo
const photo = [{ id: 1, src: image12, alt: "logo" }];

function App() {
  return (
    <>
      {/* Barre de navigation fixe sur toutes les pages */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <span className="logo-icon">
              {photo.map((item) => (
                <picture key={item.id}>
                  {/* CORRECTION: item.src au lieu de item.user */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "50px" }}
                  />
                </picture>
              ))}
            </span>
            <div className="logo-text">
              <span className="brand-name">
                TEAMS<span> BIEN-ÊTRE</span>
              </span>
              <span className="brand-slogan">Votre santé, notre priorité</span>
            </div>
          </div>
          <div className="nav-links">
            <Link to="/" style={{ margin: 20, fontWeight: 900 }}>
              Accueil
            </Link>
            <Link to="/Mentions" style={{ margin: 20, fontWeight: 900 }}>
              Mentions Légales
            </Link>
            <Link to="/Condition" style={{ margin: 20, fontWeight: 900 }}>
              Conditions de Vente
            </Link>
          </div>

          <div className="navbar-actions">
            <div className="search-bar">
              <input type="text" placeholder="Rechercher..." />
              <button>🔍</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mentions" element={<Mentions />} />
        <Route path="/Condition" element={<Conditions />} />
      </Routes>
    </>
  );
}

// 2. Renommé Navbar en "Home" pour éviter la confusion
function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app-container">
      <main>
        <section className="hero">
          <h1>Catalogue des produits disponible à Bukavu</h1>
          <p>
            Consultez les prix et détails de nos produits Oqata Wellness
            Solution en temps réel.
          </p>
        </section>

        <ProductGallery
          products={productsData}
          onProductClick={handleOpenDetails}
        />
      </main>

      <ProductModal product={selectedProduct} onClose={handleCloseDetails} />
      <Footer />
    </div>
  );
}

export default App;

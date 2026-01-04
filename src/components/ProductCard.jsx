import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onClick }) => {
  // Gestion du chemin de l'image pour Vercel
  // Si product.image commence par "/", on s'assure qu'il pointe vers le dossier public
  const imagePath = product.image;

  return (
    <div className="card" onClick={() => onClick(product)}>
      <div className="card-image-container">
        <img 
          src={imagePath} 
          alt={product.nom} 
          className="product-img" 
          /* Sécurité : si l'image ne charge pas, on affiche un placeholder */
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://via.placeholder.com/300x300?text=Image+en+cours+de+chargement";
          }}
        />
        <span className="badge">{product.categorie}</span>
      </div>
      
      <div className="card-info">
        <h3 className="product-name">{product.nom}</h3>
        {/* On limite la description pour garder des cartes de même taille */}
        <p className="short-desc">
          {product.description.length > 100 
            ? product.description.substring(0, 100) + "..." 
            : product.description}
        </p>
        
        <div className="card-footer">
          <span className="price">{product.prix} $</span>
          <button className="view-btn">Détails</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
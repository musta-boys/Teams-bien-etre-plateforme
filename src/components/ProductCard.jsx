import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(product)}>
      <div className="card-image-container">
        <img src={product.image} alt={product.nom} className="product-img" />
        <span className="badge">{product.categorie}</span>
      </div>
      <div className="card-info">
        <h3 className="product-name">{product.nom}</h3>
        <p className="short-desc">{product.description}</p>
        <div className="card-footer">
          <span className="price">{product.prix} $</span>
          <button className="view-btn">Détails</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

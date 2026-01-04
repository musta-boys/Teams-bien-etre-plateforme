import React from "react";
import "../styles/ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const siteLink =
    "https://formulaire-de-commande-mae7fo3re-ucb-mustaboys.vercel.app";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <div className="modal-image-wrapper">
            <img
              src={product.image}
              alt={product.nom}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/400x400?text=Image+Indisponible";
              }}
            />
          </div>
          <div className="modal-text">
            <h2>{product.nom}</h2>
            <span className="category-tag">{product.categorie}</span>
            <p className="main-price">{product.prix} $</p>
            <hr />
            <h4>Indication :</h4>
            <p>{product.description}</p>
            <h4>Détails :</h4>
            <p className="medical-info">{product.details}</p>

            <button
              className="order-btn"
              onClick={() => window.open(siteLink, "_blank")}
            >
              🛒 Passer Commande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import React from "react";
import Belle from "../styles/mutab.png";
import "../styles/Mentions.css";

const Mentions = () => {
  return (
    <div className="portfolio-container">
      <section className="portfolio-hero">
        <div className="hero-content">
          <h1 className="main-title">Earth's Creation USA</h1>

          <div className="text-wrap">
            {/* L'image flottante qui crée la forme circulaire */}
            <div className="shape-image">
              <img src={Belle} alt="Logo Earth's Creation" />
            </div>

            <p className="lead-text">
              Un leader mondial en suppléments nutritionnels de qualité
              supérieure. Fondée en 2001, <strong>Earth's Creation USA</strong>{" "}
              est rapidement devenue un acteur de confiance incontournable dans
              l'industrie des nutraceutiques.
            </p>

            <p>
              Offrant une large gamme de produits de santé naturels,
              l'entreprise se consacre à l'amélioration du bien-être de millions
              de personnes. Présente dans plus de
              <strong> 150 pays</strong>, elle allie innovation scientifique et
              respect de la nature. Leur engagement envers l'excellence garantit
              que chaque supplément répond aux normes les plus élevées de
              sécurité et de puissance.
            </p>

            <p>
              Pourquoi avons-nous choisi Earth's Creation ? Pour sa{" "}
              <strong>Qualité et sa Pureté Inégalées</strong>. En tant que
              producteur biologique certifié aux États-Unis, chaque formule
              utilise les meilleurs ingrédients naturels sourcés de manière
              responsable. Leurs usines de pointe suivent les directives{" "}
              <strong>GMP (Bonnes Pratiques de Fabrication)</strong>, assurant
              une transparence totale du processus de production.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-details">
        <div className="details-header">
          <span className="subtitle">EXCELLENCE CERTIFIÉE</span>
          <h2>Nos Engagements & Certifications</h2>
          <div className="underline"></div>
        </div>

        <div className="portfolio-grid">
          <div className="detail-item">
            <div className="item-icon">🛡️</div>
            <span className="number">01</span>
            <h3>Approuvé USFDA</h3>
            <p>
              Une installation de production validée par la FDA pour une
              sécurité consommateur absolue.
            </p>
          </div>

          <div className="detail-item">
            <div className="item-icon">🍃</div>
            <span className="number">02</span>
            <h3>Halal & Kosher</h3>
            <p>
              Des produits inclusifs respectant les lois alimentaires pour
              toutes les cultures.
            </p>
          </div>

          <div className="detail-item">
            <div className="item-icon">🌍</div>
            <span className="number">03</span>
            <h3>Normes ISO</h3>
            <p>
              Une fiabilité internationale constante grâce à des processus de
              contrôle rigoureux.
            </p>
          </div>
        </div>

        <footer className="portfolio-footer">
          <div className="footer-overlay">
            <h3>Impact Mondial, Confiance Locale</h3>
            <p>
              Le nom Earth's Creation est synonyme de fiabilité et d'intégrité à
              travers le monde entier.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Mentions;

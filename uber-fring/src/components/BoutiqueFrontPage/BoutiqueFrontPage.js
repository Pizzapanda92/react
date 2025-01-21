import React from 'react';
import { Link } from 'react-router-dom';
import './BoutiqueFrontPage.css';

function BoutiqueFrontPage({ boutiques }) {
  return (
    <div className="boutique-container">
      {boutiques.map((boutique, index) => (
        <div key={index} className="boutique-card">
          <h3>{boutique.name}</h3>
          <p>Catégorie : {boutique.category}</p>
          <p>{boutique.rating} ⭐ - {boutique.time}</p>
          {/* Bouton géré ici directement */}
          <Link to={`/boutique/${boutique.id}`} className="button-global">
            Voir boutique
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BoutiqueFrontPage;

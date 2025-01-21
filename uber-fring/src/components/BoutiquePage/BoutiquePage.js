import React from 'react';
import { useParams } from 'react-router-dom';
import './BoutiquePage.css';

function BoutiquePage({ boutiques }) {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const boutique = boutiques.find(b => b.id === id); // Trouve la boutique correspondante

  if (!boutique) {
    return <h2 className="not-found">Boutique non trouvée</h2>;
  }

  return (
    <div className="boutique-page">
      <h2 className="boutique-title">{boutique.name}</h2>
      <div className="boutique-info">
        <p>Catégorie : {boutique.category}</p>
        <p>{boutique.rating} ⭐ - {boutique.time}</p>
      </div>
      <h3>Articles disponibles :</h3>
      <ul className="articles-list">
        {boutique.articles.map(article => (
          <li key={article.id} className="article-item">
            {article.name} - {article.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoutiquePage;

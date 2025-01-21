import React from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import accessoire from '../../assets/image-categorie/accessoire.png';
import casquette from '../../assets/image-categorie/casquette.png';
import chaussures from '../../assets/image-categorie/chaussures.png';
import costume from '../../assets/image-categorie/costume.png';
import pantalon from '../../assets/image-categorie/pantalon.png';
import pull from '../../assets/image-categorie/pull.png';
import sac from '../../assets/image-categorie/sac.png';
import tshirt from '../../assets/image-categorie/t-shirt.png';

function Categories({ onCategorySelect }) {
  const navigate = useNavigate(); // Hook pour rediriger

  const categories = [
    { name: 'Home', label: 'Accueil', icon: <FontAwesomeIcon icon={faHome} /> },
    { name: 'Pantalon', label: 'Pantalon', image: pantalon },
    { name: 'Chaussures', label: 'Chaussures', image: chaussures },
    { name: 'Costume', label: 'Costume', image: costume },
    { name: 'Pull', label: 'Pull', image: pull },
    { name: 'Casquette', label: 'Casquette', image: casquette },
    { name: 'Sac', label: 'Sac', image: sac },
    { name: 'Accessoire', label: 'Accessoire', image: accessoire },
    { name: 'T-shirt', label: 'T-shirt', image: tshirt },
  ];

  const handleCategoryClick = (categoryName) => {
    onCategorySelect(categoryName); // Applique le filtre
    navigate('/'); // Redirige vers la page d'accueil
  };

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-item"
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.image && <img src={category.image} alt={category.label} className="category-image" />}
          {category.icon && <div className="category-icon">{category.icon}</div>}
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  );
}

export default Categories;

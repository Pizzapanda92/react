import React from 'react';
import './Categories.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import accessoire from '../../assets/image-categorie/accessoire.png';
import casquette from '../../assets/image-categorie/casquette.png';
import chaussures from '../../assets/image-categorie/chaussures.png';
import costume from '../../assets/image-categorie/costume.png';
import pantalon from '../../assets/image-categorie/pantalon.png';
import pull from '../../assets/image-categorie/pull.png';
import sac from '../../assets/image-categorie/sac.png';
import tshirt from '../../assets/image-categorie/t-shirt.png';

function Categories({ onCategorySelect }) {
  const categories = [
    { name: 'Home', label: 'Accueil', image: null },
    { name: 'Pantalon', label: 'Pantalon', image: pantalon },
    { name: 'Chaussures', label: 'Chaussures', image: chaussures },
    { name: 'Costume', label: 'Costume', image: costume },
    { name: 'Pull', label: 'Pull', image: pull },
    { name: 'Casquette', label: 'Casquette', image: casquette },
    { name: 'Sac', label: 'Sac', image: sac },
    { name: 'Accessoire', label: 'Accessoire', image: accessoire },
    { name: 'T-shirt', label: 'T-shirt', image: tshirt },
  ];

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={10} // Espace entre les boutons contrôlé ici
      slidesPerView={5} // Nombre de catégories visibles en même temps
      breakpoints={{
        640: { slidesPerView: 2 }, // Mobile : 2 visibles
        1024: { slidesPerView: 5 }, // Desktop : 5 visibles
      }}
      navigation
      loop
      className="categories-slider"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} className="category-slide">
          <button
            className="category-item"
            onClick={() => onCategorySelect(category.name)}
          >
            {category.image && (
              <img
                src={category.image}
                alt={category.label}
                className="category-image"
              />
            )}
            <span>{category.label}</span>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Categories;

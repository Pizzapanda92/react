import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import './PopularPlaces.css';

function PopularPlaces({ places }) {
  if (!places || places.length === 0) {
    return <p className="no-popular-places">Aucune boutique populaire disponible.</p>;
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="popular-slider"
    >
      {places.map((place, index) => (
        <SwiperSlide key={index}>
          <div className="place-card">
            <h3>{place.name}</h3>
            <p>
              {place.rating} ⭐ - {place.time}
            </p>
            {/* Bouton pour voir la boutique */}
            <Link to={`/boutique/${place.id}`} className="button-global">
              Voir boutique
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PopularPlaces;

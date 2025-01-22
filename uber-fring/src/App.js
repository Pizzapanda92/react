import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import PopularPlaces from './components/PopularPlaces/PopularPlaces';
import BoutiquePage from './components/BoutiquePage/BoutiquePage';
import BoutiqueFrontPage from './components/BoutiqueFrontPage/BoutiqueFrontPage';
import boutiques from './data/boutiques';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Home'); // "Home" par défaut

  // Filtrer les boutiques par catégorie
  const filteredPlaces =
    selectedCategory === 'Home'
      ? boutiques // Affiche toutes les boutiques si "Home" est sélectionné
      : boutiques.filter(boutique => boutique.category === selectedCategory);

  // Boutiques populaires (rating > 4.3) parmi celles filtrées
  const popularPlaces = filteredPlaces.filter(boutique => boutique.rating > 4.3);

  // Fonction pour réinitialiser le filtre
  const resetFilters = () => {
    setSelectedCategory('Home'); // Réinitialise la catégorie sélectionnée
  };

  return (
    <Router>
      <div className="App">
        {/* Vidéo de fond */}
        <video className="video-background" autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Contenu principal */}
        <Header onResetFilters={resetFilters} />
        <Categories onCategorySelect={setSelectedCategory} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="popular-places">
                    <h2 className="popular-title">Boutiques populaires</h2>
                    <div className="popular-list">
                      <PopularPlaces places={popularPlaces} />
                    </div>
                  </section>

                  <section className="all-boutiques">
                    <h2>Toutes les boutiques</h2>
                    <BoutiqueFrontPage boutiques={filteredPlaces} />
                  </section>
                </>
              }
            />
            <Route
              path="/boutique/:id"
              element={<BoutiquePage boutiques={boutiques} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

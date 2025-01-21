import React from 'react';
import './Header.css';

function Header({ onResetFilters }) {
  return (
    <header className="header">
      <div className="logo" onClick={onResetFilters}>
        Uber Fringues
      </div>
      <input type="text" placeholder="Rechercher..." className="search-bar" />
      <div className="auth-buttons">
        <button className="button-global">Connexion</button>
        <button className="button-global">Inscription</button>
      </div>
    </header>
  );
}

export default Header;

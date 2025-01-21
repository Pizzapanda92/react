import React from 'react';
import './Promotion.css';

function Promotion({ title, description }) {
  return (
    <div className="promotion">
      <div className="promotion-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Promotion;

import React from 'react';
import { useLocation } from 'react-router-dom';
import "./banner.css";

const Banner = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  let bannerImage = '/img/banner-default.webp'; // Cambiando la extensión a WebP

  if (category) {
    const categoryLower = category.trim().toLowerCase();
    if (categoryLower === 'puertas' || categoryLower === 'muebles' || categoryLower === 'cocina' || categoryLower === 'bano') {
      bannerImage = `/img/banner-${categoryLower}.webp`; // Cambiando la extensión a WebP
    }
  }

  return (
    <img className="banner" src={bannerImage} alt={`Banner ${category}`} />
  );
}

export default Banner;
